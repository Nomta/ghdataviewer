import { get } from './request'
import { GITHUB_USERS_PATH } from './endpoints'
import { RequestError } from '@/errors/RequestError'


export class GithubApi {
  static getUsers(query = '') {
    return get(`${GITHUB_USERS_PATH}${query}`)
      .then(response => response.data)
      .catch(throwError)
  }
  static getInfiniteUserList(query = '') {
    return getInfiniteDataList(`${GITHUB_USERS_PATH}${query}`)
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
