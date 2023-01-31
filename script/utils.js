function getFormInfo(formSelector) {
  const formAddData = document.querySelector(formSelector);
  const formElements = [...formAddData];
  let dataFormObj = {};
  const localData = JSON.parse(localStorage.getItem("cards"));
  console.log(localData);

  formElements.forEach((element) => {
    if (element.nodeName === "INPUT" || element.nodeName === "TEXTAREA") {
      element.type === "checkbox"
        ? (dataFormObj[element.name] = element.checked)
        : (dataFormObj[element.name] = element.value);
    }
  });

  localData.forEach((element) => {
    if (+element.id === +dataFormObj.id) {
      dataFormObj = false;
    }
  });
  return dataFormObj;
}

function setFormInfo(formSelector, data) {
  const id = data.id;
  const formSetData = document.querySelector(formSelector);
  const formElements = [...formSetData];
  formElements.forEach((element) => {
    if (element.nodeName === "INPUT" || element.nodeName === "TEXTAREA") {
      element.type === "checkbox"
        ? (element.checked = data[element.name])
        : (element.value = data[element.name]);
    }
  });
}

function createCard(mainCardsSelector, data) {
  const mainCardsContainer = document.querySelector(mainCardsSelector);
  const card = new Card(data, "#card-template");
  const newCard = card.getCard();
  mainCardsContainer.append(newCard);
}
