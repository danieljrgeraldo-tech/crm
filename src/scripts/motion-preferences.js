// Preferências de movimento e utilidades de segurança — Daniel Junior V2

export function isBrowser() {
  return typeof window !== "undefined" && typeof document !== "undefined";
}

export function prefersReducedMotion() {
  if (!isBrowser()) return true;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function canAnimate() {
  if (!isBrowser()) return false;
  if (prefersReducedMotion()) return false;
  return true;
}

// Marca o body como pronto para animação, sem nunca esconder conteúdo antes disso.
export function markMotionReady() {
  if (!isBrowser()) return;
  document.body.classList.add("js-motion-ready");
}

export function markMotionDisabled() {
  if (!isBrowser()) return;
  document.body.classList.remove("js-motion-ready");
}
