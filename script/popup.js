class Popup {
  constructor(selector) {
    this._selector = selector;
    this.popup = document.querySelector(`.${this._selector}`);
    this._popapEscKeyClose = this._popapEscKeyClose.bind(this);
  }

  open() {
    this.popup.classList.add("popup_active");
    document.addEventListener("keyup", this._popapEscKeyClose);
  }

  close() {
    this.popup.classList.remove("popup_active");
    document.removeEventListener("keyup", this._popapEscKeyClose);
  }

  _popapEscKeyClose(e) {
    if (e.key === "Escape") {
      this.close();
    }
  }

  setEventListener() {
    this.popup.addEventListener("click", (e) => {
      // console.log(e.target.classList);
      // console.log(this._selector);
      if (
        e.target.classList.contains(this._selector) ||
        e.target.closest(".popup__close")
      ) {
        this.close();
      }
    });
  }
}
