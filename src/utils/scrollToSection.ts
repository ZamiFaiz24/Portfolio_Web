/**
 * Smooth scroll to section dengan offset untuk navbar fixed
 * @param sectionId - ID dari section yang ingin di-scroll
 */
export const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (!element) return;

  const navbarHeight = 80; // Navbar fixed height
  const elementPosition = element.getBoundingClientRect().top + window.scrollY;
  const offsetPosition = elementPosition - navbarHeight;

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth'
  });
};
