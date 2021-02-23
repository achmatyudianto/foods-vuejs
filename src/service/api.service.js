import axios from "axios";

const URL_BASE = "http://localhost:3000/";

// GET DaTA
function getData(url, cb) {
  axios
    .get(URL_BASE + url)
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
    .post(URL_BASE + url, data)
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
    .delete(URL_BASE + url)
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
    .put(URL_BASE + url, data)
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
