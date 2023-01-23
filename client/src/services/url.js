import { URLError } from '@/services/errors/URLError'

export function useURL(baseURL) {
  return function createURL(path, searchParams) {
    try {
      const url = new URL(path, baseURL)

      if (searchParams) {
        const query = new URLSearchParams(searchParams)
        url.search = query.toString()
      }

      return url
    }
    catch (error) {
      throw new URLError(error)
    }
  }
}