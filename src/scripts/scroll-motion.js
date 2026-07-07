// Movimento durante scroll — Daniel Junior V2
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { canAnimate, markMotionDisabled } from "./motion-preferences.js";

gsap.registerPlugin(ScrollTrigger);

function initScrollMotion() {
  if (!canAnimate()) {
    // Limpa triggers eventualmente criados e garante visibilidade
    ScrollTrigger.getAll().forEach((st) => st.kill());
    markMotionDisabled();
    return;
  }

  const hero = document.getElementById("top");
  const heroImage = document.querySelector(".hero-image");
  const transitionBand = document.querySelector(".transition-band");
  const transitionLine = document.querySelector(".transition-line");
  const thesisSection = document.getElementById("visao");
  const factorGrid = document.querySelector(".factor-grid");

  // Parallax sutil na imagem do hero (apenas desktop)
  if (hero && heroImage && window.matchMedia("(min-width: 1024px)").matches) {
    gsap.to(heroImage, {
      yPercent: 8,
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
        start: "top 80%",
        end: "center center",
        scrub: 1,
      },
    });
  }

  // Revelação da seção de tese
  if (thesisSection) {
    const thesisTitle = thesisSection.querySelector("[data-motion='reveal-line']");
    const thesisTexts = thesisSection.querySelectorAll("[data-motion='reveal']");

    if (thesisTitle) {
      gsap.fromTo(
        thesisTitle,
        { opacity: 0, clipPath: "inset(100% 0 0 0)" },
        {
          opacity: 1,
          clipPath: "inset(0% 0 0 0)",
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: thesisSection,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }

    if (thesisTexts.length) {
      gsap.fromTo(
        thesisTexts,
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: thesisSection,
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }
  }

  // Fatores da tese
  if (factorGrid) {
    const factors = factorGrid.querySelectorAll(".factor-item");
    if (factors.length) {
      gsap.fromTo(
        factors,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.08,
          ease: "power2.out",
          scrollTrigger: {
            trigger: factorGrid,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }
  }
}

// Tratamento seguro: qualquer erro mantém o conteúdo visível
try {
  initScrollMotion();
} catch (error) {
  ScrollTrigger.getAll().forEach((st) => st.kill());
  markMotionDisabled();
  // eslint-disable-next-line no-console
  if (process.env.NODE_ENV !== "production") {
    console.warn("[scroll-motion] Movimento de scroll desativado:", error);
  }
}
