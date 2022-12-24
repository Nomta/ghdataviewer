import request from '@/services/request'
import { API_URL } from '@/config'

export function get(url) {
  return request.get(new URL(url, API_URL))
}
export function post(url, data) {
  return request.post(new URL(url, API_URL), data)
}

export default { get, post }
