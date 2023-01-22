const mainCardsContainer = document.querySelector(".cards");
const popupBtn = document.querySelector("#add");
const popupCloseBtn = document.querySelector(".popup__close");
const popup = new Popup("popup");
popup.setEventListener();

// console.log(popup);

// выдача карточек
cats.forEach((cat) => {
  const card = new Card(cat, "#card-template");
  const newCard = card.getCard();
  mainCardsContainer.append(newCard);
});

// модальное окно

// если просто передать popup.open,
// то у нас теряется this
// (потому что передается ссылка на функцию)
popupBtn.addEventListener("click", () => {
  popup.open();
});

// можно и так, но громоздко
// popupBtn.addEventListener("click", popup.open.bind(popup));

popupCloseBtn.addEventListener("click", () => {
  popup.close();
});
