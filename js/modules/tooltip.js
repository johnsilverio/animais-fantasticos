export default class Tooltip {

  constructor(tooltips) {
    this.tooltips = document.querySelectorAll(tooltips);

    // bind do objeto da classe aos callbacks
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMouseOver = this.onMouseOver.bind(this);
  }

  onMouseOver({ currentTarget }) {
    // cria a tooltipbox e coloca em uma propriedade
    this.createTooltipBox(currentTarget);
    currentTarget.addEventListener('mouseleave', this.onMouseLeave);
    currentTarget.addEventListener('mousemove', this.onMouseMove);
  };

  onMouseMove(e) {
    this.tooltipBox.style.top = `${e.pageY + 20}px`;
    if (e.pageX + 240 > window.innerWidth) {
      this.tooltipBox.style.left = `${e.pageY - 190}px`;
    } else {
      this.tooltipBox.style.left = `${e.pageX + 20}px`;
    }
  };

  onMouseLeave({ currentTarget }) {
    this.tooltipBox.remove();
    currentTarget.removeEventListener('mouseleave', this.onMouseLeave);
    currentTarget.removeEventListener('mousemove', this.onMouseMove);
  };

  createTooltipBox(e) {
    const tooltipBox = document.createElement('div');
    const text = e.getAttribute('aria-label');
    tooltipBox.classList.add('tooltip');
    tooltipBox.innerText = text;
    document.body.appendChild(tooltipBox);
    this.tooltipBox = tooltipBox;
  };

  addTooltipsEvent() {
    this.tooltips.forEach((item) => {
      item.addEventListener('mouseover', this.onMouseOver);
    })
  }

  init() {
    if (this.tooltips.length) {
      this.addTooltipsEvent();
    }
    return this;
  }
}
