import { Service } from 'ext-react'
import FamilyStore from '~/stores/family'

@Service
export default class FamilyService {
  search(criteria) {
    console.log(criteria)
    FamilyStore.load({
      url: '/api/family',
      method: 'post',
      params: criteria
    })
  }
}