import Rext, { Service, Cache } from 'ext-react'
import Config from '~/common/config'

@Service
export default class CommonService {
  async initApp() {
    Cache.set('configuration', await Rext.ajax({ url: '/data/configuration.json' }));
  }
}