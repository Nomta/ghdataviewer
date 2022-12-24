import { get, post } from './request'
import { OAUTH_PATH, OAUTH_CALLBACK_PATH } from './endpoints'
import { AuthError } from '@/errors/AuthError'

export class OAuthApi {

  static getOAuthLink(provider) {
    if (!provider) {
      throw new AuthError
    }

    return get(`${OAUTH_PATH}/${provider}`).then(({ data, ...response }) => {
      if (response.status !== 200 || !data.location) {
        throw new AuthError
      }
      return data
    }).catch(throwError)
  }

  static login(code, provider) {
    if (!code || !provider) {
      throw new AuthError
    }

    return post(`${OAUTH_CALLBACK_PATH}?code=${code}`, { provider }).then(({ data, ...response }) => {
      if (response.status !== 200 || !data.accessToken) {
        throw new AuthError
      }
      return data
    }).catch(throwError)
  }
}

function throwError(error) {
  throw new AuthError(error)
}
