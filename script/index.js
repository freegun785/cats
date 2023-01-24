const mainCardsContainer = document.querySelector(".cards");
const popupBtn = document.querySelector("#add");
const popupCloseBtn = document.querySelector(".popup__close");
const popupAddData = new Popup("add-data");
const popupShowInfo = new Popup("show-info");
popupAddData.setEventListener();
popupShowInfo.setEventListener();

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
  popupAddData.open();
});

// можно и так, но громоздко
// popupBtn.addEventListener("click", popup.open.bind(popup));

popupCloseBtn.addEventListener("click", () => {
  popupAddData.close();
});

mainCardsContainer.addEventListener("click", (e) => {
  let target = e.target;

  if (e.target && target.tagName != "IMG") return;

  popupShowInfo.open();
});

mainCardsContainer.addEventListener("mouseover", (e) => {
  let target = e.target;

  if (target.tagName === "IMG") {
    target.nextElementSibling.classList.add("hover_active");
  }
});

mainCardsContainer.addEventListener("mouseout", (e) => {
  let target = e.target;

  if (target.tagName === "IMG") {
    target.nextElementSibling.classList.remove("hover_active");
  }
});
