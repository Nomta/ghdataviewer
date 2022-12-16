import { get, post } from './request'
import { OAUTH_PATH, OAUTH_CALLBACK_PATH } from './endpoints'
import { AuthError } from '@/errors/AuthError'

export class OAuthApi {

  static getOAuthLink(provider) {
    if (!provider) {
      throw new AuthError
    }

    return get(`${OAUTH_PATH}/${provider}`).then((response) => {
      if (response.status !== 200 || !response.location) {
        throw new AuthError
      }
      return response
    })
  }

  static login(code, provider) {
    if (!code || !provider) {
      throw new AuthError
    }

    return post(`${OAUTH_CALLBACK_PATH}?code=${code}`, { provider }).then((response) => {
      if (response.status !== 200 || !response.accessToken) {
        throw new AuthError
      }
      return response
    })
  }
}
