import { Store } from 'ext-react'

@Store
export default class FamilyStore {
  constructor() {
    this.proxy = {
      url: '/api/family'
    }
  }
}