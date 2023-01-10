import { get } from './request'
import { RequestError } from '@/errors/RequestError'
import {
  GITHUB_USERS_PATH,
  GITHUB_USER_REPOS_PATH,
  GITHUB_SEARCH_USER_PATH,
  GITHUB_USERS_PER_PAGE_PATH,
} from './endpoints'


export class GithubApi {
  static getUsers() {
    return get(GITHUB_USERS_PATH)
      .then(response => response.data)
      .catch(throwError)
  }
  static getInfiniteUserList(limit) {
    const url = limit
      ? `${GITHUB_USERS_PER_PAGE_PATH}${limit}`
      : GITHUB_USERS_PATH
    return getInfiniteDataList(url)
  }
  static getUserRepos(name) {
    return get(GITHUB_USER_REPOS_PATH.replace('{name}', name))
      .then(response => response.data)
      .catch(throwError)
  }
  static searchUser(name) {
    return get(`${GITHUB_SEARCH_USER_PATH}${name}`)
      .then(response => response.data)
      .catch(throwError)
  }
}


async function* getInfiniteDataList(initialURL) {
  let url = initialURL
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

function throwError(error) {
  throw new RequestError(error)
}
