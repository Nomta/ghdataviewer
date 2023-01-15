import { get, getInfiniteDataList } from './request'
import {
  GITHUB_USERS_PATH,
  GITHUB_USER_PATH,
  GITHUB_USER_REPOS_PATH,
  GITHUB_SEARCH_USER_PATH,
} from './endpoints'


export class GithubApi {
  static getUsers(searchParams) {
    return get(GITHUB_USERS_PATH, searchParams)
  }
  static getInfiniteUserList(searchParams) {
    return getInfiniteDataList(GITHUB_USERS_PATH, searchParams)
  }
  static getUser(name) {
    return get(GITHUB_USER_PATH.replace('{name}', name))
  }
  static getUserRepos(name) {
    return get(GITHUB_USER_REPOS_PATH.replace('{name}', name))
  }
  static searchUser(searchParams) {
    return get(GITHUB_SEARCH_USER_PATH, searchParams)
  }
}