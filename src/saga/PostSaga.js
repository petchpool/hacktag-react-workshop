import { call, put } from 'redux-saga/effects'
import { getPostV2 } from '../services/PostForSagaService'

export const requestPosts = function* () {
  try {
    const posts = yield call(getPostV2)
    yield put({ type: 'SAVE_POST', posts: posts, loading: false })
  } catch (e) {
    alert('Error')
  }
}