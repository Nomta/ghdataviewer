import request from '@/services/request'
import { Storage } from '@/services/storage'
import { AuthError } from '@/errors/AuthError'
import { GITHUB_URL } from './endpoints'

export function get(url) {
  return request.get(new URL(url, GITHUB_URL), getParams())
}

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
