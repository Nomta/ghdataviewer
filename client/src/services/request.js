import { merge } from 'lodash'

const getResponse = async (response) => {
  try {
    const { status, statusText/* , url, redirected */, headers } = response

    if (response.status !== 200) {
      return { status, statusText }
    }

    const data = await response.json()
    return { data, status, headers }
  }
  catch (err) { throw err }
}

export function get(url, params) {
  return fetch(url, params)
    .then(getResponse)
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
    .then(getResponse)
    .catch((err) => { throw err });
}

export default { get, post }