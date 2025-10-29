export default function initTooltip() {
  const tooltips = document.querySelectorAll('[data-tooltip]');

  const onMouseOver = function (e) {
    const tooltipBox = createTooltipBox(this);
    tooltipBox.style.top = e.pageY + 'px';
    tooltipBox.style.left = e.pageX + 'px';

    this.addEventListener('mouseleave', onMouseLeave);
    onMouseLeave.tooltipBox = tooltipBox;
    onMouseLeave.e = this;
    this.addEventListener('mousemove', onMouseMove);
    onMouseMove.tooltipBox = tooltipBox;
  };

  const onMouseMove = {
    handleEvent(e) {
      this.tooltipBox.style.top = e.pageY + 20 + 'px';
      this.tooltipBox.style.left = e.pageX + 20 + 'px';
    }
  };

  const onMouseLeave = {
    handleEvent() {
      this.tooltipBox.remove();
      this.e.removeEventListener('mouseleave', onMouseLeave);
      this.e.removeEventListener('mousemove', onMouseMove);
    }
  };

  const createTooltipBox = (e) => {
    const tooltipBox = document.createElement('div');
    const text = e.getAttribute('aria-label');
    tooltipBox.classList.add('tooltip');
    tooltipBox.innerText = text;
    document.body.appendChild(tooltipBox);
    return tooltipBox;
  };

  tooltips.forEach((item) => {
    item.addEventListener('mouseover', onMouseOver);
  });
}
