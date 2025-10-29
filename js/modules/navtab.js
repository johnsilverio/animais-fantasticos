/**
 * Initializes tabbed navigation (. js-tabmenu ↔ . js-tabcontent), toggling the 'active' class.
 */
export default function initNavigationTab() {
  const tabMenu = document.querySelectorAll("[data-tab='menu'] li");
  const tabContent = document.querySelectorAll("[data-tab='content'] section");
  if (!tabMenu.length || !tabContent.length) return;

  const activeClass = "active";

  tabContent[0].classList.add(activeClass);

  const activeTab = function (index) {
    tabContent.forEach((section) => section.classList.remove(activeClass));
    const direction = tabContent[index].dataset.anime;
    tabContent[index].classList.add(activeClass, direction);
  };

  tabMenu.forEach((itemMenu, index) => {
    itemMenu.addEventListener("click", () => {
      activeTab(index);
    });
  });
}
