const mainCardsContainer = document.querySelector(".cards");

const popupBtn = document.querySelector("#add");
const popupCloseBtn = document.querySelector(".popup__close");
const popupAddData = new Popup("add-data");
const popupShowInfo = new Popup("show-info");
const popupEditData = new Popup("edit-data");
popupAddData.setEventListener();
popupShowInfo.setEventListener();
popupEditData.setEventListener();

const api = new Api(CONFIG_API);

const formAddData = document.querySelector(".popup__form");
const formEditData = document.querySelector(".popup__edit-form");

function showData() {
  api.getAllData().then((data) =>
    data.forEach((cat) => {
      createCard(".cards", cat);
    })
  );
}

showData();

function formAddCat(e) {
  e.preventDefault();
  const dataForm = getFormInfo(".popup__form");
  api.addData(dataForm);
  createCard(".cards", dataForm);
  popupAddData.close();
}

async function formEditCat(e) {
  e.preventDefault();
  const dataForm = getFormInfo(".popup__edit-form");
  const id = +dataForm.id;
  await api.updateData(dataForm, id);
  document.querySelectorAll(".card").forEach((e) => e.remove());
  showData();
  popupEditData.close();
}

formAddData.addEventListener("submit", formAddCat);
formEditData.addEventListener("submit", formEditCat);

popupBtn.addEventListener("click", () => {
  popupAddData.open();
});

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

mainCardsContainer.addEventListener("click", (e) => {
  let target = e.target;

  if (
    !target.classList.contains("card__title__edit") &&
    !target.parentElement.classList.contains("card__title__edit")
  )
    return;
  popupEditData.open();
});
