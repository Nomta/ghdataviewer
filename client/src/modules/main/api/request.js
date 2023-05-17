import request from '@/services/request'
import { useURL } from '@/services/url'
import { Storage } from '@/services/storage'
import { AuthError } from '@/services/errors/AuthError'
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
    const url = createURL(path, mapSearchParams(searchParams))

    const { error, data } = await request.get(url, getParams())

    if (error) {
      throw error
    }
    return data
  }
  catch (error) {
    throw error
  }
}


export async function* getInfiniteDataList(initialURL, searchParams) {
  try {
    let url = createURL(initialURL, mapSearchParams(searchParams))

    do {
      const { error, data, response } = await request.get(url)

      if (error) {
        throw error
      }

      url = getNextURL(response)

      yield data
    }
    while (url)
  }

  catch (error) {
    throw error
  }
}

/* utils */

function getParams() {
  const token = Storage.get('token')

  if (!token) {
    throw new AuthError
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
