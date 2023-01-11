import request from '@/services/request'
import { Storage } from '@/services/storage'
import { RequestError } from '@/errors/RequestError'
import { GITHUB_URL } from './endpoints'
import { mapKeys } from 'lodash'

export function get(path, searchParams) {
  return request.get(createURL(path, mapSearchParams(searchParams)), getParams())
}

export async function* getInfiniteDataList(initialURL, searchParams) {
  let url = createURL(initialURL, mapSearchParams(searchParams))
  let response

  do {
    response = await get(url)
    url = getNextURL(response)
    yield response.data
  }
  while (url)
}

function getNextURL(response) {
  const link = response.headers.get('link')
  const url = link.match(/<([^>]*)>;\s+rel=(["'])?next\2/)?.[1]
  return url
}

function getParams() {
  const token = Storage.get('token')

  if (!token) {
    throw new RequestError
  }

  const headers = {
    'Authorization': `Bearer ${token}`,
    'Accept': 'application/vnd.github+json',
  }

  return { headers }
}

function createURL(path, searchParams) {
  const url = new URL(path, GITHUB_URL)

  if (searchParams) {
    const query = new URLSearchParams(searchParams)
    url.search = query.toString()
  }

  return url
}

const queryMap = {
  q: 'q',
  name: 'q',
  limit: 'per_page'
}

function mapSearchParams(params) {
  if (!params) {
    return
  }

  return mapKeys(params, (value, key) => queryMap[key])
}
