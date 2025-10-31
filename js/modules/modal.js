export default class Modal {
  constructor(modal, btnOpen, btnClose) {
    this.modal = document.querySelector(modal);
    this.buttonOpen = document.querySelector(btnOpen);
    this.buttonClose = document.querySelector(btnClose);

    // bind this ao callback para
    // fazer referência ao objeto
    // da classe
    this.eventToggleModal = this.eventToggleModal.bind(this);
    this.handleOutsideClick = this.handleOutsideClick.bind(this);
  }

  // abre ou fecha o modal
  toggleModal() {
    this.modal.classList.toggle('active');
  };

  // adiciona o evento de toggleModal()
  eventToggleModal(e) {
    e?.preventDefault();
    this.toggleModal();
  }

  // fecha ao clicar fora do modal
  handleOutsideClick(e) {
    if (e.target === this.modal) this.toggleModal(e);
  };

  // adiciona os eventos ao modal
  addModalEvents() {
    this.buttonOpen.addEventListener('click', this.eventToggleModal);
    this.buttonClose.addEventListener('click', this.eventToggleModal);
    this.modal.addEventListener('click', this.handleOutsideClick);
  }

  // inicioaliza o modal com a condicional de todos os elementos existirem
  // no final retorna a própria class com this
  init() {
    if (this.buttonOpen && this.buttonClose && this.modal) {
      this.addModalEvents();
    }
    return this;
  }
}
