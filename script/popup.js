class Popup {
  constructor(selector) {
    this._selector = selector;
  }

  open() {
    const popup = document.querySelector(this._selector);
    popup.classList.add("popup_active");
  }

  close() {
    const popup = document.querySelector(this._selector);
    popup.classList.remove("popup_active");
  }
}
