import { merge } from 'lodash'

export function get(url, params) {
  return fetch(url, params)
    .then((response) => response.json())
    .catch((err) => { throw err });
}

export function post(url, data, params = {}) {
  return fetch(url, merge({
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }, params))
    .then((response) => response.json())
    .catch((err) => { throw err });
}

export default { get, post }