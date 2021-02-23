import axios from "axios";

const BASE_URL = "http://localhost:3000/";

// GET DaTA
function getData(url, cb) {
  axios
    .get(BASE_URL + url)
    .then((response) => {
      cb(response);
    })
    .catch((error) => {
      console.log(error);
    });
}

// POST DATA
function postData(url, data, cb) {
  axios
    .post(BASE_URL + url, data)
    .then((response) => {
      cb(response);
    })
    .catch((error) => {
      console.log(error);
    });
}

// DELETE DATA
function deleteData(url, cb) {
  axios
    .delete(BASE_URL + url)
    .then((response) => {
      cb(response);
    })
    .catch((error) => {
      console.log(error);
    });
}

// UPDATE DATA
function putData(url, data, cb) {
  axios
    .put(BASE_URL + url, data)
    .then((response) => {
      cb(response);
    })
    .catch((error) => {
      console.log(error);
    });
}

export default {
  getData: (url, cb) => getData(url, cb),
  postData: (url, data, cb) => postData(url, data, cb),
  deleteData: (url, cb) => deleteData(url, cb),
  putData: (url, data, cb) => putData(url, data, cb),
};
