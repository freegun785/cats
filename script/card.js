class Card {
  constructor(data, selector) {
    this._data = data;
    this._selector = selector;
  }

  getCard() {
    const template = document.querySelector(this._selector).content;
    const card = template.querySelector(".card").cloneNode(true);
    const cardImage = card.querySelector(".card__image");
    const cardTitle = card.querySelector(".card__name");
    const cardLike = card.querySelector(".card__like");

    cardImage.src = this._data.image;
    cardTitle.textContent = this._data.name;
    if (!this._data.favorite) {
      cardLike.remove();
    }
    return card;
  }
}
