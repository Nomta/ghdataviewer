import request from '@/services/request'
import { useURL } from '@/services/url'
import { Storage } from '@/services/storage'
import { RequestError } from '@/errors/RequestError'
import { GITHUB_URL } from './endpoints'
import { transform } from 'lodash'

const createURL = useURL(GITHUB_URL)

const queryMap = {
  q: 'q',
  name: 'q',
  limit: 'per_page',
  sort: 'sort'
}


export async function get(path, searchParams) {
  try {
    const response = await request.get(createURL(path, mapSearchParams(searchParams)), getParams())
    return response
  }
  catch (error) {
    throw new RequestError(error)
  }
}


export async function* getInfiniteDataList(initialURL, searchParams) {
  try {
    let url = createURL(initialURL, mapSearchParams(searchParams))
    let response

    do {
      response = await get(url)
      url = getNextURL(response)
      yield response.data
    }
    while (url)
  }
  catch (error) {
    throw new RequestError(error)
  }
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

function getNextURL(response) {
  const link = response.headers.get('link')
  const url = link.match(/<([^>]*)>;\s+rel=(["'])?next\2/)?.[1]
  return url
}

function mapSearchParams(params) {
  if (params) {
    return transform(params, (map, value, key) => {
      if (value && key && queryMap[key]) map[queryMap[key]] = value
    }, {})
  }
}
