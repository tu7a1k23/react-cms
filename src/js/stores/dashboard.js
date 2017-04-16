import { Store } from 'ext-react'

export default Store({
  storeId: 'DashboardStore',
  proxy: {
    url: '/api/dashboard'
  },
  autoLoad: true
})