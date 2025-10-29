/**
 * Initializes Smooth Scrolling for internal links.
 */
export function initScrollSuave() {
  const linksInternos = document.querySelectorAll('[data-menu="suave"] a[href^="#"]');

  const scrollToSection = function (e) {
    e.preventDefault();
    const href = e.currentTarget.getAttribute("href");
    const section = document.querySelector(href);

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  linksInternos.forEach((link) => {
    link.addEventListener("click", scrollToSection);
  });
}

/**
 * Initializes scroll animation for the sections.
 */
export function initScrollAnimation() {
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
