class AppConfig {
  constructor() {
    this._config = {
      size: [10, 20, 50, 100, 200, 500]
    }
  }

  init(config) {
    this._config = Object.assign({}, this._config, config);
  }

  get(key) {
    return this._config[key];
  }

  set(key, value) {
    this._config[key] = value;
  }
}

export default new AppConfig;