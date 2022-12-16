import request from '@/services/request'
import { API_URL } from '@/config'

export function get(url) {
  return request.get(`${API_URL}${url}`)
}
export function post(url, data) {
  return request.post(`${API_URL}${url}`, data)
}

export default { get, post }
