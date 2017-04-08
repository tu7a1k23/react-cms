import { Store } from 'ext-react'

@Store
export default class CardStore {
  constructor() {
    this.proxy = {
      url: '/api/cards',
      method: 'post'
    }
    this.autoLoad = true
  }
}