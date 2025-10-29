/**
 * Initializes Accordion from the FAQ section.
 */
export default function initAccordionFaq() {
  const accordionList = document.querySelectorAll("[data-anime='accordion'] dt");
  if (!accordionList.length) return;

  const activeClass = "active";

  accordionList[0].classList.add(activeClass);
  accordionList[0].nextElementSibling.classList.add(activeClass);

  const activeClassAccordion = function (e) {
    this.classList.toggle(activeClass);
    this.nextElementSibling.classList.toggle(activeClass);
  };

  accordionList.forEach((item) => {
    item.addEventListener("click", activeClassAccordion);
  });
}
