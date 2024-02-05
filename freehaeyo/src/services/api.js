import axios from 'axios';

export function getUserData(setData) {
  axios
    .get('/userinfo')
    .then((res) => setData(res.data))
    .catch((err) => console.log(err));
}

export function getHireData(setData) {
  axios
    .get('/hire')
    .then((res) => setData(res.data))
    .catch((err) => console.log(err));
}

export function getHireTagData(setData) {
  axios
    .get('/hiretag')
    .then((res) => setData(res.data))
    .catch((err) => console.log(err));
}

export function getHireDataById(setData, params) {
  axios
    .get(`/hire/${params}`)
    .then((res) => setData(res.data))
    .catch((err) => console.log(err));
}

export function getCompanyData(setData) {
  axios
    .get('/companyinfo')
    .then((res) => setData(res.data))
    .catch((err) => console.log(err));
}

export function postUserData(data) {
  axios.post('/userinfo', data, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
