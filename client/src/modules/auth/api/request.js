import request from '@/services/request'
import { API_URL } from '@/config'


export function get(url) {
  return request.get(new URL(url, API_URL))
    .catch((err) => { throw err })
}

export function post(url, data) {
  return request.post(new URL(url, API_URL), data)
    .catch((err) => { throw err })
}

export default { get, post }