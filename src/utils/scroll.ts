/**
 * Função para scroll suave e lento
 * @param elementId - ID do elemento para scroll
 * @param duration - Duração do scroll em ms (padrão: 1500ms)
 */
export const smoothScrollTo = (elementId: string, duration: number = 1500) => {
  const element = document.querySelector(elementId);
  if (!element) return;

  const start = window.pageYOffset;
  const target = element.getBoundingClientRect().top + window.pageYOffset;
  const distance = target - start;
  let startTime: number | null = null;

  // Easing function para movimento suave
  const easeInOutCubic = (t: number): number => {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  };

  const animation = (currentTime: number) => {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);
    const ease = easeInOutCubic(progress);

    window.scrollTo(0, start + distance * ease);

    if (progress < 1) {
      requestAnimationFrame(animation);
    }
  };

  requestAnimationFrame(animation);
};

/**
 * Handler para links de navegação com scroll suave
 */
export const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
  e.preventDefault();
  if (href.startsWith('#')) {
    smoothScrollTo(href, 2000);
  }
};

