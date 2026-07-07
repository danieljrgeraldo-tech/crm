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
  const isMobile = window.matchMedia("(max-width: 1023px)").matches;

  const hero = document.getElementById("top");
  const heroImage = document.querySelector(".hero-image");
  const transitionBand = document.querySelector(".transition-band");
  const transitionLine = document.querySelector(".transition-line");

  // Parallax sutil na imagem do hero (apenas desktop, reduzido)
  if (!prefersReducedMotion && !isMobile && hero && heroImage) {
    gsap.to(heroImage, {
      yPercent: 5,
      ease: "none",
      scrollTrigger: {
        trigger: hero,
        start: "top top",
        end: "bottom top",
        scrub: 1,
      },
    });
  }

  // Linha de transição expandindo
  if (transitionBand && transitionLine) {
    gsap.to(transitionLine, {
      width: "100%",
      ease: "none",
      scrollTrigger: {
        trigger: transitionBand,
        start: "top 85%",
        end: "center center",
        scrub: 1,
      },
    });
  }

  // Revelação genérica para elementos com data-motion dentro das seções
  const revealElements = document.querySelectorAll(
    'section [data-motion="reveal"], section [data-motion="reveal-line"]'
  );

  revealElements.forEach((el) => {
    const isLine = el.getAttribute("data-motion") === "reveal-line";
    const from = isLine
      ? { opacity: 0, clipPath: "inset(100% 0 0 0)" }
      : { opacity: 0, y: 24 };
    const to = isLine
      ? { opacity: 1, clipPath: "inset(0% 0 0 0)", duration: 0.7 }
      : { opacity: 1, y: 0, duration: 0.6 };

    gsap.fromTo(el, from, {
      ...to,
      ease: "power3.out",
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
        toggleActions: "play none none reverse",
      },
    });
  });

  // Fatores / nós sequenciais
  const sequentialGroups = document.querySelectorAll(".factor-node, .decision-item, .method-step, .structure-item, .example-card");
  sequentialGroups.forEach((group) => {
    const items = group.parentElement?.querySelectorAll(
      ".factor-node, .decision-item, .method-step, .structure-item, .example-card"
    );
    if (!items || items.length <= 1) return;

    gsap.fromTo(
      items,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.08,
        ease: "power2.out",
        scrollTrigger: {
          trigger: group.parentElement,
          start: "top 80%",
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
