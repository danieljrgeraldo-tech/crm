const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

const playConversation = (root) => {
  const steps = [...root.querySelectorAll("[data-chat-step]")];
  if (!steps.length) return;

  const timers = [];
  const showAll = () => steps.forEach((step) => step.classList.add("is-visible"));

  const run = () => {
    timers.splice(0).forEach(window.clearTimeout);
    steps.forEach((step) => step.classList.remove("is-visible"));

    if (reduceMotion.matches) {
      showAll();
      return;
    }

    steps.forEach((step, index) => {
      const delay = Number(step.dataset.chatDelay ?? index * 760);
      timers.push(window.setTimeout(() => {
        if (!step.classList.contains("wa-typing")) {
          steps
            .filter((candidate) => candidate.classList.contains("wa-typing"))
            .forEach((typing) => typing.classList.remove("is-visible"));
        }
        step.classList.add("is-visible");
      }, delay));
    });

    if (root.hasAttribute("data-chat-loop")) {
      const lastDelay = Math.max(...steps.map((step, index) => Number(step.dataset.chatDelay ?? index * 760)));
      timers.push(window.setTimeout(run, lastDelay + 5200));
    }
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        run();
      } else if (!reduceMotion.matches) {
        timers.splice(0).forEach(window.clearTimeout);
      }
    });
  }, { threshold: 0.32 });

  observer.observe(root);
};

document.querySelectorAll("[data-chat-playback]").forEach(playConversation);
