// Timeline de entrada do hero — Daniel Junior V2
import { gsap } from "gsap";
import { canAnimate, markMotionReady, markMotionDisabled } from "./motion-preferences.js";

function initHeroMotion() {
  if (!canAnimate()) {
    markMotionDisabled();
    return;
  }

  markMotionReady();

  // Estado inicial aplicado dinamicamente pelo JS (progressive enhancement)
  gsap.set('[data-motion="fade"]', { opacity: 0 });
  gsap.set('[data-motion="reveal"]', { opacity: 0, y: 20 });
  gsap.set('[data-motion="reveal-line"]', { opacity: 0, clipPath: "inset(100% 0 0 0)" });
  gsap.set('[data-motion="mask-open"]', { clipPath: "inset(0 0 100% 0)" });

  const tl = gsap.timeline({
    defaults: { ease: "power3.out" },
    onComplete: () => {
      // Limpa propriedades animadas, mantendo visibilidade final
      gsap.set(
        [
          '[data-motion="fade"]',
          '[data-motion="reveal"]',
          '[data-motion="reveal-line"]',
          '[data-motion="mask-open"]',
        ],
        { clearProps: "transform,clipPath,opacity" }
      );
    },
  });

  tl.to("header[data-motion='fade']", { opacity: 1, duration: 0.4, delay: 0.05 })
    .to("#top .section-label[data-motion='fade']", { opacity: 1, duration: 0.35 }, "-=0.2")
    .to(
      "#top h1 [data-motion='reveal-line']",
      { opacity: 1, clipPath: "inset(0% 0 0 0)", duration: 0.6 },
      "-=0.15"
    )
    .to("#top p[data-motion='reveal']", { opacity: 1, y: 0, duration: 0.45, stagger: 0.06 }, "-=0.35")
    .to("#top div[data-motion='reveal']", { opacity: 1, y: 0, duration: 0.4 }, "-=0.3")
    .to(
      ".hero-image-mask[data-motion='mask-open']",
      { clipPath: "inset(0% 0 0% 0)", duration: 0.7 },
      "-=0.6"
    );
}

try {
  initHeroMotion();
} catch (error) {
  markMotionDisabled();
  if (process.env.NODE_ENV !== "production") {
    console.warn("[hero-motion] Animação de entrada desativada:", error);
  }
}
