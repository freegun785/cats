const NAME = "matskevich";
const CONFIG_API = {
  url: `https://cats.petiteweb.dev/api/single/${NAME}`,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json;charset=utf-8",
  },
};

class Api {
  constructor(config) {
    this._url = config.url;
    this._headers = config.headers;
  }

  //Если все хорошо, то парсим ответ, если нет, то реджект
  _onResponse(res) {
    return res.ok ? res.json() : Promise.reject({ ...res, message: "error" });
  }

  getAllData() {
    return fetch(`${this._url}/show`, { method: "GET" }).then(this._onResponse);
  }

  addData(body) {
    return fetch(`${this._url}/add`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify(body),
    }).then(this._onResponse);
  }

  getDataById(id) {
    return fetch(`${this._url}/show/${id}`, { method: "GET" }).then(
      this._onResponse
    );
  }

  updateData(newData, id) {
    return fetch(`${this._url}/update/${id}`, {
      method: "PUT",
      headers: this._headers,
      body: JSON.stringify(newData),
    }).then(this._onResponse);
  }

  deleteData(id) {
    return fetch(`${this._url}/delete/${id}`, { method: "DELETE" }).then(
      this._onResponse
    );
  }

  getAllIds() {
    return fetch(`${this._url}/ids`, { method: "GET" }).then(this._onResponse);
  }
}
// const data = {
//   id: 1673947287227,
//   name: "Баобаб",
//   favorite: true,
//   rate: 10,
//   age: 5,
//   description: "Мало ест и много спит",
//   image: "https://pp.userapi.com/c830409/v830409492/f52cd/MfgdRVZsD2A.jpg",
// };

// api.getDataById(1673947287227);
