export class RawStorage {
  static get(key) {
    return localStorage.getItem(key)
  }
  static set(key, value) {
    localStorage.setItem(key, value)
  }
  static remove(key) {
    localStorage.removeItem(key)
  }
  static clear() {
    localStorage.clear()
  }
}

export class Storage extends RawStorage {
  constructor() {
    this.super()
  }
  static get(key) {
    return JSON.parse(super.get(key))
  }
  static set(key, value) {
    super.set(key, JSON.stringify(value))
  }
}