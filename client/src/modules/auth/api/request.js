import request from '@/services/request'
import { AuthError } from '@/errors/AuthError'
import { API_URL } from '@/config'


export function get(url) {
  return request.get(new URL(url, API_URL))
    .catch(throwError)
}
export function post(url, data) {
  return request.post(new URL(url, API_URL), data)
    .catch(throwError)
}

export default { get, post }


function throwError(error) {
  throw new AuthError(error)
}