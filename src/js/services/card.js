import { Service } from 'ext-react'
import CardStore from '~/stores/card'

@Service
export default class CardService {
  search(criteria) {
    CardStore.params = criteria
    CardStore.load()
  }
}