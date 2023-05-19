const DEFAULT_ERROR_MESSAGE = 'Ошибка запроса'

export class RequestError extends Error {
  constructor(statusCode, message) {
    super()

    this.name = this.constructor.name
    this.message = message || DEFAULT_ERROR_MESSAGE
    this.statusCode = statusCode
    Error.captureStackTrace(this, this.constructor)
  }
}