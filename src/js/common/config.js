class Config {
  constructor() {
    this._config = {
      DONUT_CHART_CONFIG: {
        data: {
          columns: [],
          type: 'donut'
        },
        donut: {
          title: 'Cards per Type'
        }
      }
    }
  }

  add(config) {
    Object.assign(this._config, config)
  }

  get(key) {
    return this._config[key]
  }

  set(key, value) {
    this._config[key] = value
  }
}

export default new Config