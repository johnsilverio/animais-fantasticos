export default function initModal() {
  const modal = document.querySelector('[data-modal="container"]');
  const buttonOpen = document.querySelector('[data-modal="open"]');
  const buttonClose = document.querySelector('[data-modal="exit"]');
  
  if (!modal || !buttonOpen || !buttonClose) return;

  const toggleModal = (e) => {
    e?.preventDefault();
    modal.classList.toggle('active');
  };

  const handleOutsideClick = (e) => {
    if (e.target === modal) toggleModal(e);
  };

  buttonOpen.addEventListener('click', toggleModal);
  buttonClose.addEventListener('click', toggleModal);
  modal.addEventListener('click', handleOutsideClick);
}
