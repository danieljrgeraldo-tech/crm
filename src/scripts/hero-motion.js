// Timeline de entrada do hero — Daniel Junior V2
import { gsap } from "gsap";
import { canAnimate, markMotionReady, markMotionDisabled } from "./motion-preferences.js";

function initHeroMotion() {
  if (!canAnimate()) {
    markMotionDisabled();
    return;
  }

  // Só ativa a classe de animação após confirmar que pode animar
  markMotionReady();

  // Estado inicial aplicado dinamicamente pelo JS (progressive enhancement)
  gsap.set('[data-motion="fade"]', { opacity: 0, y: 0 });
  gsap.set('[data-motion="reveal"]', { opacity: 0, y: 24 });
  gsap.set('[data-motion="reveal-line"]', { opacity: 0, clipPath: "inset(100% 0 0 0)", y: 0 });
  gsap.set('[data-motion="mask-open"]', { clipPath: "inset(0 0 100% 0)", y: 0 });

  const tl = gsap.timeline({
    defaults: { ease: "power3.out" },
    onComplete: () => {
      // Limpa propriedades inline que não precisam permanecer
      gsap.set(
        [
          '[data-motion="fade"]',
          '[data-motion="reveal"]',
          '[data-motion="reveal-line"]',
          '[data-motion="mask-open"]',
        ],
        { clearProps: "all" }
      );
    },
  });

  tl.to("header [data-motion='fade']", { opacity: 1, duration: 0.6, delay: 0.1 })
    .to(".section-label[data-motion='fade']", { opacity: 1, duration: 0.5 }, "-=0.3")
    .to(
      "h1 [data-motion='reveal-line']",
      {
        opacity: 1,
        clipPath: "inset(0% 0 0 0)",
        duration: 0.85,
        stagger: 0.12,
      },
      "-=0.2"
    )
    .to("#top p[data-motion='reveal']", { opacity: 1, y: 0, duration: 0.7 }, "-=0.55")
    .to("#top div[data-motion='reveal']", { opacity: 1, y: 0, duration: 0.6 }, "-=0.45")
    .to(
      ".hero-image-mask[data-motion='mask-open']",
      {
        clipPath: "inset(0% 0 0% 0)",
        duration: 1,
      },
      "-=1.1"
    )
    .to("#top .absolute.bottom-6[data-motion='fade']", { opacity: 1, duration: 0.5 }, "-=0.3");
}

// Tratamento seguro: qualquer erro mantém o conteúdo visível
try {
  initHeroMotion();
} catch (error) {
  markMotionDisabled();
  // eslint-disable-next-line no-console
  if (process.env.NODE_ENV !== "production") {
    console.warn("[hero-motion] Animação de entrada desativada:", error);
  }
}
