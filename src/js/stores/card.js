import { Store } from 'ext-react'

export default Store({
  storeId: 'CardStore',
  proxy: {
    url: '/api/cards',
    method: 'post'
  },
  autoLoad: true
})