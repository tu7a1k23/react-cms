import 'babel-polyfill'
import Rext from 'ext-react'
import CommonService from './services/common'
import Viewport from './components/viewport/viewport'
import Dashboard from './components/dashboard/dashboard'
import Search from './components/search/search'
import CardCreate from './components/card/card-create'
import CardDetail from './components/card/card-detail'
import NotFound from './components/notfound/notfound'

Rext.application({
  selector: 'react-root',
  viewport: Viewport,
  launch: CommonService.initApp
})