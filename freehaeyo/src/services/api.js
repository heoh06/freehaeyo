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

export async function postUserData(data) {
  try {
    const response = await axios.post('/userinfo', data);
    return response;
  } catch (error) {
    return error;
  }
}

export async function postCompanyData(data) {
  try {
    const response = await axios.post('/companyinfo', data);
    return response;
  } catch (error) {
    return error;
  }
}

export async function postHireData(data) {
  try {
    const response = await axios.post('/hire', data);
    return response;
  } catch (error) {
    return error;
  }
}
