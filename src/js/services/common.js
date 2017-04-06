import Rext, { Service } from 'ext-react'
import Config from '~/common/config'

@Service
export default class CommonService {
  async initApp() {
    Config.add(await Rext.ajax({ url: '/api/init' }))
  }
}