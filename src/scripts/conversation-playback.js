const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

const playConversation = (root) => {
  const steps = [...root.querySelectorAll("[data-chat-step]")];
  if (!steps.length) return;
  const speed = Number(root.dataset.chatSpeed ?? 0.58);

  const timers = [];
  steps.forEach((step) => {
    step.hidden = true;
    step.classList.remove("is-visible");
  });
  const showAll = () => steps.forEach((step) => {
    if (step.classList.contains("wa-typing")) {
      step.hidden = true;
      return;
    }
    step.hidden = false;
    step.classList.add("is-visible");
  });

  const run = () => {
    timers.splice(0).forEach(window.clearTimeout);
    steps.forEach((step) => {
      step.classList.remove("is-visible");
      step.hidden = true;
    });

    if (reduceMotion.matches) {
      showAll();
      return;
    }

    steps.forEach((step, index) => {
      const delay = Number(step.dataset.chatDelay ?? index * 760) * speed;
      timers.push(window.setTimeout(() => {
        if (!step.classList.contains("wa-typing")) {
          steps
            .filter((candidate) => candidate.classList.contains("wa-typing"))
            .forEach((typing) => {
              typing.classList.remove("is-visible");
              typing.hidden = true;
            });
        }
        step.hidden = false;
        window.requestAnimationFrame(() => step.classList.add("is-visible"));
      }, delay));
    });

    if (root.hasAttribute("data-chat-loop")) {
      const lastDelay = Math.max(...steps.map((step, index) => Number(step.dataset.chatDelay ?? index * 760) * speed));
      timers.push(window.setTimeout(run, lastDelay + 2600));
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

const simulatorSection = document.querySelector(".simulator-section");
if (simulatorSection) {
  const simulatorObserver = new IntersectionObserver(([entry]) => {
    if (!entry?.isIntersecting) return;
    simulatorSection.classList.remove("is-demo-active");
    void simulatorSection.offsetWidth;
    simulatorSection.classList.add("is-demo-active");
  }, { threshold: 0.18 });
  simulatorObserver.observe(simulatorSection);
}
