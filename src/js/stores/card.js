import { Store } from 'ext-react'

export default Store({
  storeId: 'CardStore',
  proxy: {
    url: '/data/card.json'
  }
})