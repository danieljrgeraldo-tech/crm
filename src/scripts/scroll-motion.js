// Movimento durante scroll — Daniel Junior V2
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { canAnimate, markMotionDisabled } from "./motion-preferences.js";

gsap.registerPlugin(ScrollTrigger);

function initScrollMotion() {
  if (!canAnimate()) {
    ScrollTrigger.getAll().forEach((st) => st.kill());
    markMotionDisabled();
    return;
  }

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (prefersReducedMotion) {
    ScrollTrigger.getAll().forEach((st) => st.kill());
    return;
  }

  // Revelação genérica para elementos com data-motion dentro das seções
  const revealElements = document.querySelectorAll(
    'section [data-motion="reveal"], section [data-motion="reveal-line"], section [data-motion="scale-in"]'
  );

  revealElements.forEach((el) => {
    const type = el.getAttribute("data-motion");
    let from, to;

    if (type === "reveal-line") {
      from = { opacity: 0, clipPath: "inset(100% 0 0 0)" };
      to = { opacity: 1, clipPath: "inset(0% 0 0 0)", duration: 0.6 };
    } else if (type === "scale-in") {
      from = { opacity: 0, scale: 0.96 };
      to = { opacity: 1, scale: 1, duration: 0.5 };
    } else {
      from = { opacity: 0, y: 18 };
      to = { opacity: 1, y: 0, duration: 0.5 };
    }

    gsap.fromTo(el, from, {
      ...to,
      ease: "power2.out",
      scrollTrigger: {
        trigger: el,
        start: "top 88%",
        toggleActions: "play none none reverse",
      },
    });
  });

  // Fatores / nós sequenciais
  const groupSelectors = ".factor-node, .decision-item, .method-step, .structure-item, .example-card";
  const sequentialGroups = document.querySelectorAll(groupSelectors);

  sequentialGroups.forEach((group) => {
    const parent = group.parentElement;
    if (!parent) return;

    const items = parent.querySelectorAll(groupSelectors);
    if (items.length <= 1) return;

    // Evita animar o mesmo grupo mais de uma vez
    if (parent.dataset.motionGroup === "registered") return;
    parent.dataset.motionGroup = "registered";

    gsap.fromTo(
      items,
      { opacity: 0, y: 16 },
      {
        opacity: 1,
        y: 0,
        duration: 0.45,
        stagger: 0.06,
        ease: "power2.out",
        scrollTrigger: {
          trigger: parent,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );
  });
}

try {
  initScrollMotion();
} catch (error) {
  ScrollTrigger.getAll().forEach((st) => st.kill());
  markMotionDisabled();
  if (process.env.NODE_ENV !== "production") {
    console.warn("[scroll-motion] Movimento de scroll desativado:", error);
  }
}
