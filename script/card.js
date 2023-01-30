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
    const popup = document.querySelector(".show-info");
    const popupName = popup.querySelector(".name");
    const popupDescription = popup.querySelector(".description-text");
    const popupImage = popup.querySelector(".info__image img");
    const popupAge = popup.querySelector(".age-text");
    const popupRate = popup.querySelector(".rate-text");

    popupName.textContent = this._data.name;
    popupDescription.textContent = this._data.description;
    popupImage.src = this._data.image;
    popupAge.textContent = this._data.age;
    popupRate.textContent = this._data.rate;
  }

  _removeCard() {
    const id = this._card.querySelector(".card__title__remove").dataset[
      "remove_id"
    ];
    if (confirm(`Вы уверены, что хотите удалить кота ${this._data.name}?`)) {
      this._card.remove();
      api.deleteData(+id);
    }
  }

  _editCard() {
    setFormInfo(".popup__edit-form", this._data);
  }

  _setCardShowInfoEventListener() {
    this._card.addEventListener("click", () => {
      this._getCardInfo();
    });
  }

  _setCardRemoveEventListener() {
    const removeBtn = this._card.querySelector(".card__title__remove");
    removeBtn.addEventListener("click", (e) => {
      this._removeCard();
    });
  }

  _setCardEditEventListener() {
    const editBtn = this._card.querySelector(".card__title__edit");
    editBtn.addEventListener("click", (e) => {
      this._editCard();
    });
  }

  getCard() {
    const cardImage = this._card.querySelector(".card__image img");
    const cardTitle = this._card.querySelector(".card__title__text");
    const cardLike = this._card.querySelector(".card__footer-like");
    const cardRemove = this._card.querySelector(".card__title__remove");
    const cardEdit = this._card.querySelector(".card__title__edit");

    cardImage.src = this._data.image;
    cardTitle.textContent = this._data.name;
    if (!this._data.favorite) {
      cardLike.remove();
    }
    cardRemove.dataset["remove_id"] = this._data.id;
    cardEdit.dataset["edit_id"] = this._data.id;

    this._setRating();
    this._setCardShowInfoEventListener();
    this._setCardRemoveEventListener();
    this._setCardEditEventListener();

    return this._card;
  }
}
