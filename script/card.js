class Card {
  constructor(data, selector) {
    this._data = data;
    this._selector = selector;
  }

  getCard() {
    const template = document.querySelector(this._selector).content;
    const card = template.querySelector(".card").cloneNode(true);
    const cardImage = card.querySelector(".card__image");
    const cardTitle = card.querySelector(".card__title");
    const cardLike = card.querySelector(".card__footer-like");
    const cardRating = card.querySelector(".card__footer-rating");

    cardImage.src = this._data.image;
    cardTitle.textContent = this._data.name;
    if (!this._data.favorite) {
      cardLike.remove();
    }

    //показ рейтинга у карточки
    //может есть вариант полаконичнее
    for (let i = 0; i < 10; i++) {
      let star = document.createElement("i");
      if (i < +this._data.rate) {
        star.classList.add("fa-solid", "fa-star");
      } else {
        star.classList.add("fa-regular", "fa-star");
      }
      cardRating.append(star);
    }
    return card;
  }
}
