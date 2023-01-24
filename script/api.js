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

  getAllData() {
    fetch(`${this._url}/show`, { method: "GET" });
  }


  addData(body) {
    fetch(`${this._url}/add`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify(body),
    });
  }

  getDataById(id) {
    fetch(`${this._url}/show/${id}`, { method: "GET" });
  }

  updateData(newData, id) {
    fetch(`${this._url}/update/${id}`, {
      method: "PUT",
      headers: this._headers,
      body: JSON.stringify(newData),
    });
  }

  deleteData(id) {
    fetch(`${this._url}/delete/${id}`, { method: "DELETE" });
  }

  getAllIds() {
    fetch(`${this._url}/ids`, { method: "GET" });
  }
}

const api = new Api(CONFIG_API);
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
