class Card {
  constructor(data, selector) {
    this._data = data;
    this._selector = selector;
    this._card = document
      .querySelector(this._selector)
      .content.querySelector(".card")
      .cloneNode(true);
  }

  _setRating() {
    const cardRating = this._card.querySelector(".card__footer-rating");
    for (let i = 0; i < 10; i++) {
      let star = document.createElement("i");
      if (i < +this._data.rate) {
        star.classList.add("fa-solid", "fa-star");
      } else {
        star.classList.add("fa-regular", "fa-star");
      }
      cardRating.append(star);
    }
  }

  _getCardInfo() {
    const name = this._data.name;
    const image = this._data.image;
    const description = this._data.description;
    const rate = this._data.rate;
    const age = this._data.age;

    const popup = document.querySelector(".show-info");
    const popupName = popup.querySelector(".name");
    const popupDescription = popup.querySelector(".description-text");
    const popupImage = popup.querySelector(".info__image img");
    const popupAge = popup.querySelector(".age-text");
    const popupRate = popup.querySelector(".rate-text");

    popupName.textContent = name;
    popupDescription.textContent = description;
    popupImage.src = image;
    popupAge.textContent = age;
    popupRate.textContent = rate;
  }

  _setCardShowInfoEventListener() {
    this._card.addEventListener("click", () => {
      this._getCardInfo();
    });
  }

  getCard() {
    const cardImage = this._card.querySelector(".card__image img");
    const cardTitle = this._card.querySelector(".card__title");
    const cardLike = this._card.querySelector(".card__footer-like");

    cardImage.src = this._data.image;
    cardTitle.textContent = this._data.name;
    if (!this._data.favorite) {
      cardLike.remove();
    }

    this._setRating();
    this._setCardShowInfoEventListener();

    return this._card;
  }
}
