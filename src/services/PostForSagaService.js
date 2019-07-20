import * as axios from 'axios'

const callbackUrl = 'https://jsonplaceholder.typicode.com'

export const getPostV2 = async () => {
  const response = await axios.get(callbackUrl + '/posts')
  return response.data
}