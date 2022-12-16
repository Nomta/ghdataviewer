import { get } from './request'
import { GITHUB_USERS_PATH } from './endpoints'
import { RequestError } from '@/errors/RequestError'

const throwError = (error) => {
  throw new RequestError(error)
}

export class GithubApi {
  static getUsers(query = '') {
    return get(`${GITHUB_USERS_PATH}${query}`).catch(throwError)
  }
  static getUserRepos(name) {
    return get(GITHUB_USER_REPOS_PATH.replace('{name}', name)).catch(throwError)
  }
  static searchUser(name) {
    return get(`${GITHUB_SEARCH_USER_PATH}${name}`).catch(throwError)
  }
}
