import { merge } from 'lodash'
import { RequestError } from './errors/RequestError'

export function get(url, params) {
  return fetch(url, params)
    .then(getResponse)
    .catch((err) => { throw err })
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
    .catch((err) => { throw err })
}

export default { get, post }

/* utils */

async function getResponse(response) {
  try {
    const data = await response.json()

    if (response.status >= 400) {
      const errorMessage = (data.error || data.message) ?? response.statusText
      const error = new RequestError(response.status, errorMessage)

      return mapResponse(error, null, response)
    }

    return mapResponse(null, data, response)
  }

  catch (error) {
    throw error
  }
}

function mapResponse(error, data, response) {
  return { error, data, response }
}