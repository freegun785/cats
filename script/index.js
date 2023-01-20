const mainCardsContainer = document.querySelector(".cards");
const popupBtn = document.querySelector("#add");
const popupCloseBtn = document.querySelector(".popup__close");
const popup = new Popup(".popup-add-cats");

console.log(popup);

// выдача карточек
cats.forEach((cat) => {
  const card = new Card(cat, "#card-template");
  const newCard = card.getCard();
  mainCardsContainer.append(newCard);
});

// модальное окно
popupBtn.addEventListener("click", () => {
  popup.open();
});

popupCloseBtn.addEventListener("click", () => {
  popup.close();
});
