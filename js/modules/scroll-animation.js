/**
 * Initializes scroll animation for the sections.
 */
export default function initScrollAnimation() {
  const sections = document.querySelectorAll("[data-anime='scroll']");
  const windowMetade = window.innerHeight * 0.6;

  if (!sections.length) return;

  const animateScroll = function () {
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const isSectionVisible = sectionTop - windowMetade < 0;
      if (isSectionVisible) section.classList.add("active");
      else if (section.classList.contains("active")) section.classList.remove("active");
    });
  };
  animateScroll();

  window.addEventListener("scroll", animateScroll);
}
