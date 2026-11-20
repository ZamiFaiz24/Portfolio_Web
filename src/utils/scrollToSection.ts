/**
 * Smooth scroll to a section with an offset for the fixed navbar.
 * Respects the user's reduced-motion preference.
 * @param sectionId - ID of the section to scroll to
 */
export const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (!element) return;

  const navbarHeight = 80; // Navbar fixed height
  const elementPosition = element.getBoundingClientRect().top + window.scrollY;
  const offsetPosition = elementPosition - navbarHeight;
  const prefersReducedMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)'
  ).matches;

  window.scrollTo({
    top: offsetPosition,
    behavior: prefersReducedMotion ? 'auto' : 'smooth',
  });
};
