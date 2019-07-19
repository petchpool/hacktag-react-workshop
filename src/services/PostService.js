import * as axios from 'axios'

const callbackUrl = 'https://jsonplaceholder.typicode.com'

export const getPost = (callback) => {
  axios.get(callbackUrl + '/posts').then(res => {
    callback(res.data)
  })
}

export const getPostDetail = (id, callback) => {
  axios.get(callbackUrl + '/posts/' + id).then(res => {
    callback(res.data)
  })
}

export const createPost = (data, callback) => {
  axios.post(callbackUrl + '/posts', data).then(res => {
    callback(res.data)
  })
}

export const deletePost = (id, callback) => {
  axios.delete(callbackUrl + '/posts/' + id).then(res => {
    callback(res.data)
  })
}