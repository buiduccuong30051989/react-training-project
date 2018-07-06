import { takeLatest, call, put } from 'redux-saga/effects';
import { REGISTER_USER } from 'components/home/reducer/constants';
import axios from 'axios'
// import api from '../modules/api'

const fetchPrefectures = (data) => {
  return axios.post('http://localhost:3000/user', {
    title: data.payload.name,
    password: data.payload.password
  })
  .then((response) => {
    return response
  })
}

export function* signupWorkerData(action) {
  const responsePrefectures = yield call(fetchPrefectures, action)
}

export default [
  takeLatest(REGISTER_USER, signupWorkerData)
]
