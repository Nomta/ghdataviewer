import { get, getInfiniteDataList } from './request'
import { RequestError } from '@/errors/RequestError'
import {
  GITHUB_USERS_PATH,
  GITHUB_USER_REPOS_PATH,
  GITHUB_SEARCH_USER_PATH,
} from './endpoints'


export class GithubApi {
  static getUsers(searchParams) {
    return get(GITHUB_USERS_PATH, searchParams)
      .then(response => response.data)
      .catch(throwError)
  }
  static getInfiniteUserList(searchParams) {
    return getInfiniteDataList(GITHUB_USERS_PATH, searchParams)
  }
  static getUserRepos(name) {
    return get(GITHUB_USER_REPOS_PATH.replace('{name}', name))
      .then(response => response.data)
      .catch(throwError)
  }
  static searchUser(searchParams) {
    return get(GITHUB_SEARCH_USER_PATH, searchParams)
      .then(response => response.data)
      .catch(throwError)
  }
}


function throwError(error) {
  throw new RequestError(error)
}
