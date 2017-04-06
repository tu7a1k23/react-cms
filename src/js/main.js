import 'babel-polyfill'
import App from './components/app'
import Rext from 'ext-react'
import CommonService from './services/common'

Rext.bootstrap({
  selector: 'react-root',
  component: App,
  init: CommonService.initApp
})