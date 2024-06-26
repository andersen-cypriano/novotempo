const barraNewsLetter = {
  createElements: function () {
    const hands = document.createElement("div");
    hands.classList.add("hands-newsletter");

    const flowers = document.createElement("div");
    flowers.classList.add("flowers-newsletter");

    document.querySelector("#barraNewsletter .newsletter").appendChild(hands);
    document.querySelector("#barraNewsletter .newsletter").appendChild(flowers);
  },
  moveDescription: () => {
    document
      .querySelector(".newsletter .interno .titulo")
      .appendChild(
        document.querySelector(".newsletter .interno .newsletter-cadastro")
      );
  },
  moveSectionNewsToTop: function () {
    document.querySelector('.pagina-inicial') ?
    document.querySelector('#listagemProdutos > ul[data-produtos-linha]').after(document.querySelector('#barraNewsletter')) : document.querySelector('footer').before(document.querySelector('#barraNewsletter'))
    
  },
  init: function () {
    this.createElements();
    this.moveDescription();
    this.moveSectionNewsToTop();
    console.log('move banner#')
  },
};

document.querySelector("#barraNewsletter .newsletter")
  ? barraNewsLetter.init()
  : null;
