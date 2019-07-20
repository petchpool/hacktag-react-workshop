import { takeLatest } from 'redux-saga/effects'
import { requestPosts } from './PostSaga'

export default function* rootSagas() {
  yield takeLatest('REQUEST_POSTS', requestPosts)
}
