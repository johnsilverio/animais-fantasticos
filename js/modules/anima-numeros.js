export default function initAnimaNumeros() {
  const numeros = document.querySelectorAll('[data-numero]');
  const handleMutation = function (mutation) {
    if (mutation[0].target.classList.contains('active')) {
      observer.disconnect();
      animaNumeros();
    };
  };

  const observeTarget = document.querySelector('.numeros');
  const observer = new MutationObserver(handleMutation);

  observer.observe(observeTarget, { attributes: true });

  const animaNumeros = function () {
    numeros.forEach((numero) => {
      const total = +numero.innerText;
      const incremento = Math.floor(total / 100);

      let start = 0;
      const timer = setInterval(() => {
        start += incremento;
        numero.innerText = start;
        if (start > total) {
          numero.innerText = total;
          clearInterval(timer);
        }
      }, 25 * Math.random());
    });
  };
}