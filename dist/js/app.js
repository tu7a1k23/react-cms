(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _list = require('../core/list');

var _list2 = _interopRequireDefault(_list);

var _map = require('../core/map');

var _map2 = _interopRequireDefault(_map);

var _observable = require('../mixin/observable');

var _observable2 = _interopRequireDefault(_observable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

exports.default = function (config) {
  return function (WrappedComponent) {
    return function (_Component) {
      _inherits(_class, _Component);

      function _class(props) {
        _classCallCheck(this, _class);

        var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));

        _this.state = {
          stores: {}
        };
        return _this;
      }

      _createClass(_class, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
          var _this2 = this;

          var stores = _list2.default.of(config.stores).reduce(function (stores, store) {
            store.subscribe(_this2.onDataChanged.bind(_this2));
            stores[store.storeId] = store;
            return stores;
          }, {});
          this.setState(function () {
            return { stores: stores };
          });
        }
      }, {
        key: 'componentDidMount',
        value: function () {
          var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
            var stores, name;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    stores = this.state.stores;
                    _context.t0 = regeneratorRuntime.keys(stores);

                  case 2:
                    if ((_context.t1 = _context.t0()).done) {
                      _context.next = 9;
                      break;
                    }

                    name = _context.t1.value;

                    if (!stores[name].autoLoad) {
                      _context.next = 7;
                      break;
                    }

                    _context.next = 7;
                    return stores[name].load();

                  case 7:
                    _context.next = 2;
                    break;

                  case 9:
                  case 'end':
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));

          function componentDidMount() {
            return _ref.apply(this, arguments);
          }

          return componentDidMount;
        }()
      }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
          var _this3 = this;

          _map2.default.of(this.state.store).each(function (storeId, store) {
            store.unsubscribe(_this3.onDataChanged);
          });
        }
      }, {
        key: 'render',
        value: function render() {
          return _react2.default.createElement(WrappedComponent, _extends({}, this.state, this.props));
        }
      }, {
        key: 'prepareStores',
        value: function prepareStores(stores) {
          var _this4 = this;

          return _list2.default.of(config.stores).reduce(function (stores, store) {
            store.subscribe(_this4.onDataChanged);
            stores[store.name] = store;
            return stores;
          }, {});
        }
      }, {
        key: 'onDataChanged',
        value: function onDataChanged(store) {
          var stores = this.state.stores;

          stores[store.name] = store;
          this.setState(function () {
            return { stores: stores };
          });
        }
      }]);

      return _class;
    }(_react.Component);
  };
};
},{"../core/list":5,"../core/map":6,"../mixin/observable":12,"react":"react"}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (Service) {
  return new Service();
};
},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Link = exports.Route = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _observable = require('../mixin/observable');

var _observable2 = _interopRequireDefault(_observable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var INDEX_ROUTE = '/';

var getRoute = function getRoute() {
  return window.location.hash.substring(1) || '/';
};

var matchPath = function matchPath(_ref) {
  var index = _ref.index,
      path = _ref.path;

  var route = getRoute();
  if (index && route === INDEX_ROUTE) return true;
  return route.startsWith(path);
};

var Route = exports.Route = function (_Component) {
  _inherits(Route, _Component);

  function Route(props) {
    _classCallCheck(this, Route);

    var _this = _possibleConstructorReturn(this, (Route.__proto__ || Object.getPrototypeOf(Route)).call(this, props));

    _this.state = {
      match: matchPath(props)
    };
    return _this;
  }

  _createClass(Route, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      _observable2.default.fromEvent(window, 'hashchange').subscribe(function () {
        return _this2.setState(function () {
          return { match: matchPath(_this2.props) };
        });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var match = this.state.match,
          component = this.props.component;


      if (!component) {
        console.error('component props should not be null');
        return null;
      }

      return match ? _react2.default.createElement(component) : null;
    }
  }]);

  return Route;
}(_react.Component);

var Link = exports.Link = function (_Component2) {
  _inherits(Link, _Component2);

  function Link(props) {
    _classCallCheck(this, Link);

    var _this3 = _possibleConstructorReturn(this, (Link.__proto__ || Object.getPrototypeOf(Link)).call(this, props));

    _this3.state = {
      match: matchPath({ path: props.to })
    };
    return _this3;
  }

  _createClass(Link, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this4 = this;

      _observable2.default.fromEvent(window, 'hashchange').subscribe(function () {
        return _this4.setState(function () {
          return { match: matchPath({ path: _this4.props.to }) };
        });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          to = _props.to,
          className = _props.className,
          _props$activeClassNam = _props.activeClassName,
          activeClassName = _props$activeClassNam === undefined ? 'active' : _props$activeClassNam,
          others = _objectWithoutProperties(_props, ['to', 'className', 'activeClassName']);

      return _react2.default.createElement('a', _extends({ href: '#' + to, className: to === getRoute() ? [className, activeClassName].join(' ') : className }, others));
    }
  }]);

  return Link;
}(_react.Component);
},{"../mixin/observable":12,"react":"react"}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Ext = function () {
  function Ext() {
    _classCallCheck(this, Ext);
  }

  _createClass(Ext, [{
    key: "getById",
    value: function getById(id) {
      return document.getElementById(id);
    }
  }, {
    key: "extend",
    value: function extend() {
      return Object.assign.apply(null, arguments); // immutable object
    }
  }]);

  return Ext;
}();

exports.default = new Ext();
},{}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var EMPTY_LIST = [];

var List = function () {
  function List(value) {
    _classCallCheck(this, List);

    this.array = EMPTY_LIST;
    if (value && value.length > 0) {
      this.array = value.length > 1 ? value : value[0] ? value[0] : EMPTY_LIST;
    }
    return this;
  }

  _createClass(List, [{
    key: "collect",
    value: function collect() {
      return this.array;
    }
  }, {
    key: "each",
    value: function each(iteratee) {
      for (var index = 0, item; (item = this.array[index]) != null; ++index) {
        iteratee(item, index, this.array);
      }
    }
  }, {
    key: "map",
    value: function map(iteratee) {
      var result = [];
      this.each(function (item, index, array) {
        return result[index] = iteratee(item, index, array);
      });
      this.array = result;
      return this;
    }
  }, {
    key: "reduce",
    value: function reduce(iteratee, accumulator) {
      this.each(function (item, index, array) {
        return accumulator = iteratee(accumulator, item, index, array);
      });
      return accumulator;
    }
  }], [{
    key: "of",
    value: function of() /*...values*/{
      return new List(arguments);
    }
  }]);

  return List;
}();

exports.default = List;
},{}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _list = require('./list');

var _list2 = _interopRequireDefault(_list);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var EMPTY_MAP = {};

var Map = function () {
  function Map(keyValues) {
    _classCallCheck(this, Map);

    this.map = EMPTY_MAP;
    if (keyValues) {
      if (keyValues.length === 1) {
        this.map = keyValues[0];
      } else if (keyValues.length % 2 !== 0) {
        throw new Error('Missing value for key: ' + keyValues[keyValues.length - 1]);
      } else {
        for (var index = 0, element; (element = keyValues[index]) != null; index += 2) {
          this.map[element] = keyValues[index + 1];
        }
      }
    }
    return this;
  }

  _createClass(Map, [{
    key: 'each',
    value: function each(iteratee) {
      for (var key in this.map) {
        iteratee(key, this.map[key], this.map);
      }
      return this;
    }
  }, {
    key: 'keys',
    value: function keys() {
      return _list2.default.of(Object.keys(this.map));
    }
  }, {
    key: 'values',
    value: function values() {
      return _list2.default.of(Object.values(this.map));
    }
  }], [{
    key: 'of',
    value: function of() /*...keyValues*/{
      return new Map(arguments);
    }
  }]);

  return Map;
}();

exports.default = Map;
},{"./list":5}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var String = function () {
  function String() {
    _classCallCheck(this, String);
  }

  _createClass(String, [{
    key: 'toQueryString',
    value: function toQueryString(params, sep, encode) {
      sep = sep === undefined ? '&' : sep;
      encode = encode === false ? function (s) {
        return s;
      } : encodeURIComponent;

      var pairs = [];
      for (var key in params) {
        pairs.push(key + '=' + encode(params[key]));
      }
      return pairs.join(sep);
    }
  }]);

  return String;
}();

exports.default = new String();
},{}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _string = require('../core/string');

var _string2 = _interopRequireDefault(_string);

var _ext = require('../core/ext');

var _ext2 = _interopRequireDefault(_ext);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Ajax = function () {
  function Ajax() {
    _classCallCheck(this, Ajax);

    _ext2.default.extend(Ajax.prototype, {
      xhr: new XMLHttpRequest(),
      ajaxBefore: function ajaxBefore() {/* to be implemented */},
      ajaxError: function ajaxError(error) {/* to be implemented */},
      ajaxComplete: function ajaxComplete() {/* to be implemented */},
      BASE_URL: null
    });
  }

  _createClass(Ajax, [{
    key: 'request',
    value: function () {
      var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(_ref2) {
        var url = _ref2.url,
            _ref2$method = _ref2.method,
            method = _ref2$method === undefined ? 'get' : _ref2$method,
            params = _ref2.params,
            next = _ref2.next,
            error = _ref2.error,
            complete = _ref2.complete;
        var response;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;

                this.ajaxBefore();
                _context.next = 4;
                return this.promise({ url: url, method: method, params: params });

              case 4:
                response = _context.sent;
                return _context.abrupt('return', next ? next(response) : response);

              case 8:
                _context.prev = 8;
                _context.t0 = _context['catch'](0);

                console.error('Cannot get response from server for url [' + url + '] caused by: ' + _context.t0);
                this.ajaxError(_context.t0);
                error && error(_context.t0);
                return _context.abrupt('return', null);

              case 14:
                _context.prev = 14;

                this.ajaxComplete();
                complete && complete();
                return _context.finish(14);

              case 18:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 8, 14, 18]]);
      }));

      function request(_x) {
        return _ref.apply(this, arguments);
      }

      return request;
    }()
  }, {
    key: 'promise',
    value: function promise(settings) {
      var _this = this;

      return new Promise(function (resolve, reject) {
        _this.createRequest(settings, function (err, res) {
          if (err) {
            reject(err);
            return;
          }
          resolve(res);
        });
      });
    }
  }, {
    key: 'createRequest',
    value: function createRequest(_ref3, done) {
      var url = _ref3.url,
          method = _ref3.method,
          params = _ref3.params;

      this.BASE_URL && (url = this.BASE_URL + '/' + url)(method === 'get' && params !== null) && (url = url + '?' + _string2.default.toQueryString(params));
      var xhr = this.xhr;
      xhr.open(method, url, true);
      xhr.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
      xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
          if (xhr.status === 200) {
            done(null, JSON.parse(xhr.responseText));
          } else {
            try {
              done(JSON.parse(xhr.responseText));
            } catch (e) {
              done(xhr.responseText);
            }
          }
        }
      };
      xhr.send(params !== null ? JSON.stringify(params) : null);
    }
  }]);

  return Ajax;
}();

exports.default = new Ajax();
},{"../core/ext":4,"../core/string":7}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Cache = function () {
  function Cache() {
    _classCallCheck(this, Cache);

    this._cache = {};
  }

  _createClass(Cache, [{
    key: 'hasLocalStorage',
    value: function hasLocalStorage() {
      try {
        return 'localStorage' in window && window.localStorage !== null;
      } catch (e) {
        return false;
      }
    }
  }, {
    key: 'get',
    value: function get(key) {
      if (this.hasLocalStorage()) {
        return localStorage.getItem(key) || undefined;
      } else {
        return this._cache[key] || undefined;
      }
    }
  }, {
    key: 'set',
    value: function set(key, value) {
      if (this.hasLocalStorage()) {
        localStorage.setItem(key, value);
      } else {
        this._cache[key] = value;
      }
    }
  }, {
    key: 'remove',
    value: function remove(key) {
      if (!key) {
        this._cache = {};
      } else if (this.hasLocalStorage()) {
        localStorage.removeItem(key);
      } else {
        delete this._cache[key];
      }
    }
  }]);

  return Cache;
}();

exports.default = new Cache();
},{}],10:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ext = require('../core/ext');

var _ext2 = _interopRequireDefault(_ext);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Model = function () {
  function Model(data) {
    _classCallCheck(this, Model);

    this.phantom = _ext2.default.extend({}, data);
    this.data = {};
  }

  _createClass(Model, [{
    key: 'set',
    value: function set(fieldName, newValue) {
      this.data[fieldName] = newValue;
    }
  }]);

  return Model;
}();

exports.default = Model;
},{"../core/ext":4}],11:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ext = require('../core/ext');

var _ext2 = _interopRequireDefault(_ext);

var _list = require('../core/list');

var _list2 = _interopRequireDefault(_list);

var _ajax = require('./ajax');

var _ajax2 = _interopRequireDefault(_ajax);

var _model = require('./model');

var _model2 = _interopRequireDefault(_model);

var _observable = require('../mixin/observable');

var _observable2 = _interopRequireDefault(_observable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

exports.default = function (Store) {
  Store = new Store();

  var DataStore = function () {
    function DataStore() {
      _classCallCheck(this, DataStore);

      _ext2.default.extend(DataStore.prototype, {
        autoLoad: Store.autoLoad,
        data: [],
        observable: _observable2.default.create(),
        modifiedRecords: {},
        pageSize: Store.pageSize,
        proxy: Store.proxy,
        storeId: Store.constructor.name
      });
    }

    _createClass(DataStore, [{
      key: 'subscribe',
      value: function subscribe(observer) {
        this.observable.subscribe(observer);
      }
    }, {
      key: 'unsubscribe',
      value: function unsubscribe(observer) {
        this.observable.unsubscribe(observer);
      }
    }, {
      key: 'removeAll',
      value: function removeAll() {
        this.data = [];
      }
    }, {
      key: 'loadData',
      value: function loadData(data) {
        this.data = this.proxy.reader && this.proxy.reader.rootProperty ? data[this.proxy.reader.rootProperty] : data;
        if (this.pageSize) {
          this.page = data;
        }
        this.observable.call(this);
      }
    }, {
      key: 'load',
      value: function () {
        var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(proxy) {
          var response;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return _ajax2.default.request(proxy || this.proxy);

                case 2:
                  response = _context.sent;

                  response && this.loadData(response);
                  return _context.abrupt('return', this);

                case 5:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        function load(_x) {
          return _ref.apply(this, arguments);
        }

        return load;
      }()
    }, {
      key: 'loadPage',
      value: function loadPage(page) {
        var proxy = _ext2.default.extend({}, this.proxy, { url: this.proxy.url + '?page=' + page });
        return load(proxy);
      }
    }, {
      key: 'commitChanges',
      value: function commitChanges() {
        this.modifiedRecords = {};
        this.observable.call(this);
      }
    }, {
      key: 'updateRecord',
      value: function updateRecord(record, fieldName, newValue) {
        !this.modifiedRecords[record.id] && (this.modifiedRecords[record.id] = new _model2.default(record));
        var modifiedRecord = this.modifiedRecords[record.id];
        modifiedRecord.set(fieldName, newValue);
        record[fieldName] = newValue;
        this.observable.call(this);
      }
    }, {
      key: 'rejectChanges',
      value: function rejectChanges() {
        var _this = this;

        _list2.default.of(this.data).each(function (record, index, data) {
          if (_this.modifiedRecords[record.id]) {
            data[index] = _ext2.default.extend({}, _this.modifiedRecords[record.id].phantom);
          }
        });
        this.commitChanges();
      }
    }]);

    return DataStore;
  }();

  return new DataStore();
};
},{"../core/ext":4,"../core/list":5,"../mixin/observable":12,"./ajax":8,"./model":10}],12:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ext = require('../core/ext');

var _ext2 = _interopRequireDefault(_ext);

var _list = require('../core/list');

var _list2 = _interopRequireDefault(_list);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var EventObservable = function () {
  function EventObservable(target, eventName) {
    _classCallCheck(this, EventObservable);

    _ext2.default.extend(EventObservable.prototype, {
      target: target,
      eventName: eventName
    });
    return this;
  }

  _createClass(EventObservable, [{
    key: 'subscribe',
    value: function subscribe(subscriber) {
      this.target.addEventListener(this.eventName, subscriber);
    }
  }]);

  return EventObservable;
}();

var Observable = function () {
  function Observable() {
    _classCallCheck(this, Observable);

    this.observers = [];
    return this;
  }

  _createClass(Observable, [{
    key: 'subscribe',
    value: function subscribe(observer) {
      this.observers.push(observer);
    }
  }, {
    key: 'unsubscribe',
    value: function unsubscribe(observer) {
      _list2.default.of(this.observers).each(function (value, index, observers) {
        return value === observer && delete observers[index];
      });
    }
  }, {
    key: 'call',
    value: function call() {
      var _this = this;

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _list2.default.of(this.observers).each(function (observer) {
        return observer.apply(_this, args);
      });
    }
  }], [{
    key: 'create',
    value: function create() {
      return new Observable();
    }
  }, {
    key: 'fromEvent',
    value: function fromEvent(target, eventName) {
      return new EventObservable(target, eventName);
    }
  }]);

  return Observable;
}();

exports.default = Observable;
},{"../core/ext":4,"../core/list":5}],13:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Link = exports.Route = exports.Observable = exports.Container = exports.Service = exports.Model = exports.Store = exports.Cache = exports.Ajax = exports.Map = exports.List = exports.String = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * index.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * This is the entry file for the application, only setup and boilerplate code.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

var _string = require('./core/string');

Object.defineProperty(exports, 'String', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_string).default;
  }
});

var _list = require('./core/list');

Object.defineProperty(exports, 'List', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_list).default;
  }
});

var _map = require('./core/map');

Object.defineProperty(exports, 'Map', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_map).default;
  }
});

var _ajax = require('./data/ajax');

Object.defineProperty(exports, 'Ajax', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_ajax).default;
  }
});

var _cache = require('./data/cache');

Object.defineProperty(exports, 'Cache', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_cache).default;
  }
});

var _store = require('./data/store');

Object.defineProperty(exports, 'Store', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_store).default;
  }
});
Object.defineProperty(exports, 'Model', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_store).default;
  }
});

var _service = require('./app/service');

Object.defineProperty(exports, 'Service', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_service).default;
  }
});

var _container = require('./app/container');

Object.defineProperty(exports, 'Container', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_container).default;
  }
});

var _observable = require('./mixin/observable');

Object.defineProperty(exports, 'Observable', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_observable).default;
  }
});

var _router = require('./components/router');

Object.defineProperty(exports, 'Route', {
  enumerable: true,
  get: function get() {
    return _router.Route;
  }
});
Object.defineProperty(exports, 'Link', {
  enumerable: true,
  get: function get() {
    return _router.Link;
  }
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _ext = require('./core/ext');

var _ext2 = _interopRequireDefault(_ext);

var _ajax2 = _interopRequireDefault(_ajax);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Rext = function () {
  function Rext() {
    _classCallCheck(this, Rext);

    _ext2.default.extend(Rext.prototype, {
      extend: _ext2.default.extend,
      ajax: function ajax(settings) {
        return _ajax2.default.request(settings);
      }
    });
  }

  _createClass(Rext, [{
    key: 'bootstrap',
    value: function () {
      var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(_ref2) {
        var selector = _ref2.selector,
            component = _ref2.component,
            init = _ref2.init;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!window.location.hash) {
                  window.location.hash = '/';
                }
                _context.next = 3;
                return init();

              case 3:
                (0, _reactDom.render)(_react2.default.createElement(component, {}), _ext2.default.getById(selector));

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function bootstrap(_x) {
        return _ref.apply(this, arguments);
      }

      return bootstrap;
    }()
  }]);

  return Rext;
}();

exports.default = new Rext();
},{"./app/container":1,"./app/service":2,"./components/router":3,"./core/ext":4,"./core/list":5,"./core/map":6,"./core/string":7,"./data/ajax":8,"./data/cache":9,"./data/store":11,"./mixin/observable":12,"react":"react","react-dom":"react-dom"}],14:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MutationType = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _string = require('./../core/string');

var _string2 = _interopRequireDefault(_string);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MutationType = exports.MutationType = {
  POST: 'post',
  PUT: 'put',
  DELETE: 'delete'
};

var Xhr = function () {
  function Xhr() {
    _classCallCheck(this, Xhr);

    this.BASE_URL = null;
    this.xhr = new XMLHttpRequest();
    this.ajaxBefore = function () {/* to be implemented */};
    this.ajaxError = function (error) {/* to be implemented */};
    this.ajaxComplete = function () {/* to be implemented */};
  }

  _createClass(Xhr, [{
    key: 'ajax',
    value: function () {
      var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(_ref2) {
        var url = _ref2.url,
            _ref2$method = _ref2.method,
            method = _ref2$method === undefined ? 'GET' : _ref2$method,
            record = _ref2.record,
            next = _ref2.next,
            error = _ref2.error,
            complete = _ref2.complete;
        var response;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;

                this.ajaxBefore();
                _context.next = 4;
                return this.promise({ url: url, method: method, record: record });

              case 4:
                response = _context.sent;

                next && next(response);
                _context.next = 12;
                break;

              case 8:
                _context.prev = 8;
                _context.t0 = _context['catch'](0);

                this.ajaxError(_context.t0);
                error && error(_context.t0);

              case 12:
                _context.prev = 12;

                this.ajaxComplete();
                complete && complete();
                return _context.finish(12);

              case 16:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 8, 12, 16]]);
      }));

      function ajax(_x) {
        return _ref.apply(this, arguments);
      }

      return ajax;
    }()
  }, {
    key: 'promise',
    value: function promise(settings) {
      var _this = this;

      return new Promise(function (resolve, reject) {
        _this.request(settings, function (err, res) {
          if (err) {
            reject(err);
            return;
          }
          resolve(res);
        });
      });
    }
  }, {
    key: 'request',
    value: function request(_ref3, done) {
      var url = _ref3.url,
          method = _ref3.method,
          record = _ref3.record;

      if (this.BASE_URL) {
        url = this.BASE_URL + '/' + url;
      }
      if (method === 'get' && record !== null) {
        url = url + '?' + _string2.default.toQueryString(record);
      }
      var xhr = this.xhr;
      xhr.open(method, url, true);
      xhr.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
      xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
          if (xhr.status === 200) {
            done(null, JSON.parse(xhr.responseText));
          } else {
            try {
              done(JSON.parse(xhr.responseText));
            } catch (e) {
              done(xhr.responseText);
            }
          }
        }
      };
      xhr.send(record !== null ? JSON.stringify(record) : null);
    }
  }]);

  return Xhr;
}();

exports.default = new Xhr();
},{"./../core/string":16}],15:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var EMPTY_MAP = {};

var Map = function () {
  function Map(keyValues) {
    _classCallCheck(this, Map);

    this.map = EMPTY_MAP;
    if (keyValues) {
      if (keyValues.length === 1) {
        this.map = keyValues[0];
      } else if (keyValues.length % 2 !== 0) {
        throw new Error('Missing value for key: ' + keyValues[keyValues.length - 1]);
      } else {
        for (var index = 0, element; (element = keyValues[index]) != null; index += 2) {
          this.map[element] = keyValues[index + 1];
        }
      }
    }
    return this;
  }

  _createClass(Map, [{
    key: 'each',
    value: function each(iteratee) {
      for (var key in this.map) {
        iteratee(key, this.map[key], this.map);
      }
      return this;
    }
  }], [{
    key: 'of',
    value: function of() /*...keyValues*/{
      return new Map(arguments);
    }
  }]);

  return Map;
}();

exports.default = Map;
},{}],16:[function(require,module,exports){
arguments[4][7][0].apply(exports,arguments)
},{"dup":7}],17:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _map = require('./../core/map');

var _map2 = _interopRequireDefault(_map);

var _xhr = require('./../ajax/xhr');

var _xhr2 = _interopRequireDefault(_xhr);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var store = function store(config) {
  return function (WrappedComponent) {
    return function (_Component) {
      _inherits(_class, _Component);

      function _class(props) {
        _classCallCheck(this, _class);

        var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));

        _this.state = {
          store: {
            data: null
          }
        };
        return _this;
      }

      _createClass(_class, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
          var _this2 = this;

          var store = this.state.store;

          _map2.default.of(config.mutations).each(function (name, mutator) {
            store[name] = function (options) {
              return _this2.commitUpdate(mutator, options);
            };
          });
        }
      }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
          var _this3 = this;

          var endpoint = config.endpoint;

          if (!endpoint) {
            return;
          }
          var record = endpoint.initialVariables ? endpoint.initialVariables() : null;
          endpoint = endpoint.name || endpoint;
          _xhr2.default.ajax({
            url: endpoint,
            record: record,
            next: function next(response) {
              var next = config.next,
                  store = _this3.state.store;

              store.data = next ? next(response) : response;
              _this3.setState(function () {
                return { store: store };
              });
            }
          });
        }
      }, {
        key: 'commitUpdate',
        value: function commitUpdate(mutator, options) {
          var endpoint = options.path || mutator.path;
          _xhr2.default.ajax({
            url: endpoint,
            method: mutator.type,
            record: options.record,
            next: options.next,
            error: options.error,
            complete: options.complete
          });
        }
      }, {
        key: 'render',
        value: function render() {
          var store = this.state.store;

          return _react2.default.createElement(WrappedComponent, _extends({}, this.props, { store: store }));
        }
      }]);

      return _class;
    }(_react.Component);
  };
};

exports.default = store;
},{"./../ajax/xhr":14,"./../core/map":15,"react":"react"}],18:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _xhr = require('./ajax/xhr');

Object.defineProperty(exports, 'Xhr', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_xhr).default;
  }
});
Object.defineProperty(exports, 'MutationType', {
  enumerable: true,
  get: function get() {
    return _xhr.MutationType;
  }
});

var _store = require('./decorator/store');

Object.defineProperty(exports, 'Store', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_store).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
},{"./ajax/xhr":14,"./decorator/store":17}],19:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Config = function () {
  function Config() {
    _classCallCheck(this, Config);

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
    };
  }

  _createClass(Config, [{
    key: 'add',
    value: function add(config) {
      Object.assign(this._config, config);
    }
  }, {
    key: 'get',
    value: function get(key) {
      return this._config[key];
    }
  }, {
    key: 'set',
    value: function set(key, value) {
      this._config[key] = value;
    }
  }]);

  return Config;
}();

exports.default = new Config();

},{}],20:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _extReact = require('ext-react');

var _config = require('../common/config');

var _config2 = _interopRequireDefault(_config);

var _notfound = require('./notfound');

var _notfound2 = _interopRequireDefault(_notfound);

var _dashboard = require('./dashboard/dashboard');

var _dashboard2 = _interopRequireDefault(_dashboard);

var _search = require('./search/search');

var _search2 = _interopRequireDefault(_search);

var _test = require('./test/test');

var _test2 = _interopRequireDefault(_test);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'section',
        { className: 'd-flex flex-column' },
        _react2.default.createElement(
          'header',
          null,
          _react2.default.createElement(
            'nav',
            { className: 'navbar navbar-toggleable-md' },
            _react2.default.createElement(
              _extReact.Link,
              { to: '/', className: 'navbar-brand' },
              'React CMS'
            ),
            _react2.default.createElement(
              'div',
              { className: 'collapse navbar-collapse' },
              _react2.default.createElement(
                'ul',
                { className: 'navbar-nav mr-auto' },
                _react2.default.createElement(
                  'li',
                  { className: 'nav-item' },
                  _react2.default.createElement(
                    _extReact.Link,
                    { to: '/', className: 'nav-link' },
                    'Dashboard'
                  )
                ),
                _react2.default.createElement(
                  'li',
                  { className: 'nav-item' },
                  _react2.default.createElement(
                    _extReact.Link,
                    { to: '/search', className: 'nav-link' },
                    'Search'
                  )
                ),
                _react2.default.createElement(
                  'li',
                  { className: 'nav-item' },
                  _react2.default.createElement(
                    _extReact.Link,
                    { to: '/reporting', className: 'nav-link' },
                    'Reporting'
                  )
                ),
                _react2.default.createElement(
                  'li',
                  { className: 'nav-item' },
                  _react2.default.createElement(
                    _extReact.Link,
                    { to: '/audit-trails', className: 'nav-link' },
                    'Audit Trails'
                  )
                ),
                _react2.default.createElement(
                  'li',
                  { className: 'nav-item' },
                  _react2.default.createElement(
                    _extReact.Link,
                    { to: '/analytics', className: 'nav-link' },
                    'Analytics'
                  )
                ),
                _react2.default.createElement(
                  'li',
                  { className: 'nav-item' },
                  _react2.default.createElement(
                    _extReact.Link,
                    { to: '/administration', className: 'nav-link' },
                    'Administration'
                  )
                )
              ),
              _react2.default.createElement(
                'span',
                { className: 'navbar-text' },
                'Hello, ',
                _react2.default.createElement(
                  'strong',
                  null,
                  _config2.default.get('name')
                )
              )
            )
          )
        ),
        _react2.default.createElement(
          'main',
          { className: 'flex' },
          _react2.default.createElement(_extReact.Route, { index: true, component: _dashboard2.default }),
          _react2.default.createElement(_extReact.Route, { path: '/search', component: _search2.default }),
          _react2.default.createElement(_extReact.Route, { path: '/test', component: _test2.default }),
          _react2.default.createElement(_extReact.Route, { notfound: true, component: _notfound2.default })
        )
      );
    }
  }]);

  return App;
}(_react.Component);

exports.default = App;

},{"../common/config":19,"./dashboard/dashboard":22,"./notfound":23,"./search/search":26,"./test/test":27,"ext-react":13,"react":"react"}],21:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Text = exports.Button = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Button = function Button(_ref) {
  var _ref$type = _ref.type,
      type = _ref$type === undefined ? 'secondary' : _ref$type,
      _ref$className = _ref.className,
      className = _ref$className === undefined ? '' : _ref$className,
      text = _ref.text,
      children = _ref.children,
      others = _objectWithoutProperties(_ref, ['type', 'className', 'text', 'children']);

  className = 'btn btn-sm btn-' + type + ' ' + className;
  return _react2.default.createElement(
    'button',
    _extends({ type: 'button', className: className }, others),
    text || children
  );
};

exports.Button = Button;
var Text = function Text(_ref2) {
  var _ref2$className = _ref2.className,
      className = _ref2$className === undefined ? '' : _ref2$className,
      others = _objectWithoutProperties(_ref2, ['className']);

  className = 'form-control form-control-sm ' + className;
  return _react2.default.createElement('input', _extends({ className: className, type: 'text' }, others));
};
exports.Text = Text;

},{"react":"react"}],22:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _extReact = require('ext-react');

var _extReact2 = _interopRequireDefault(_extReact);

var _dashboard = require('../../stores/dashboard');

var _dashboard2 = _interopRequireDefault(_dashboard);

var _config = require('../../common/config');

var _config2 = _interopRequireDefault(_config);

var _viz = require('../../ux/viz');

var _viz2 = _interopRequireDefault(_viz);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DONUT_CHART_CONFIG = _config2.default.get('DONUT_CHART_CONFIG');

var Dashboard = (_dec = (0, _extReact.Container)({
  stores: [_dashboard2.default]
}), _dec(_class = function (_Component) {
  _inherits(Dashboard, _Component);

  function Dashboard() {
    _classCallCheck(this, Dashboard);

    return _possibleConstructorReturn(this, (Dashboard.__proto__ || Object.getPrototypeOf(Dashboard)).apply(this, arguments));
  }

  _createClass(Dashboard, [{
    key: 'render',
    value: function render() {
      var config = DONUT_CHART_CONFIG,
          data = this.props.stores.DashboardStore.data;


      config.data.columns = data;

      return _react2.default.createElement(
        'section',
        null,
        _react2.default.createElement(
          'h1',
          null,
          'Dashboard'
        ),
        _react2.default.createElement(
          'div',
          { className: 'row dashboard-stat' },
          data && data.map(function (group) {
            return _react2.default.createElement(
              'div',
              { className: 'col-sm-4' },
              _react2.default.createElement(
                'div',
                { className: 'card ' + group[0] },
                _react2.default.createElement(
                  'div',
                  { className: 'card-block' },
                  _react2.default.createElement(
                    'div',
                    { className: 'visual' },
                    _react2.default.createElement('i', { className: 'fa fa-5x fa-users' })
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'detail' },
                    _react2.default.createElement(
                      'div',
                      { className: 'number' },
                      group[1]
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'desc' },
                      group[0]
                    )
                  )
                )
              )
            );
          })
        ),
        _react2.default.createElement('p', null),
        _react2.default.createElement(
          'div',
          { className: 'row' },
          _react2.default.createElement(
            'div',
            { className: 'col-sm-8' },
            _react2.default.createElement(_viz2.default, { config: config })
          ),
          _react2.default.createElement(
            'div',
            { className: 'col-sm-4' },
            _react2.default.createElement(
              'table',
              { className: 'table table-sm table-hover table-striped' },
              _react2.default.createElement(
                'thead',
                null,
                _react2.default.createElement(
                  'tr',
                  null,
                  _react2.default.createElement(
                    'th',
                    null,
                    'Type'
                  ),
                  _react2.default.createElement(
                    'th',
                    { className: 'text-sm-right' },
                    'Total Cards'
                  )
                )
              ),
              _react2.default.createElement(
                'tbody',
                null,
                data && data.map(function (group) {
                  return _react2.default.createElement(
                    'tr',
                    null,
                    _react2.default.createElement(
                      'td',
                      null,
                      group[0]
                    ),
                    _react2.default.createElement(
                      'td',
                      { className: 'text-sm-right' },
                      group[1]
                    )
                  );
                })
              )
            )
          )
        )
      );
    }
  }]);

  return Dashboard;
}(_react.Component)) || _class);
exports.default = Dashboard;

},{"../../common/config":19,"../../stores/dashboard":32,"../../ux/viz":34,"ext-react":13,"react":"react"}],23:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NotFound = function (_Component) {
  _inherits(NotFound, _Component);

  function NotFound() {
    _classCallCheck(this, NotFound);

    return _possibleConstructorReturn(this, (NotFound.__proto__ || Object.getPrototypeOf(NotFound)).apply(this, arguments));
  }

  _createClass(NotFound, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'section',
        null,
        _react2.default.createElement(
          'h1',
          null,
          'Not Found'
        )
      );
    }
  }]);

  return NotFound;
}(_react.Component);

exports.default = NotFound;

},{"react":"react"}],24:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _card = require('../../services/card');

var _card2 = _interopRequireDefault(_card);

var _bootstrap = require('../bootstrap');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SearchForm = function (_Component) {
  _inherits(SearchForm, _Component);

  function SearchForm() {
    _classCallCheck(this, SearchForm);

    return _possibleConstructorReturn(this, (SearchForm.__proto__ || Object.getPrototypeOf(SearchForm)).apply(this, arguments));
  }

  _createClass(SearchForm, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'section',
        null,
        _react2.default.createElement(
          'div',
          { className: 'row' },
          _react2.default.createElement(
            'div',
            { className: 'col-sm-4 offset-sm-2 form-group' },
            _react2.default.createElement(_bootstrap.Text, { placeholder: 'Card Name' })
          ),
          _react2.default.createElement(
            'div',
            { className: 'col-sm-4 form-group' },
            _react2.default.createElement(_bootstrap.Text, { placeholder: 'Card Type' })
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'row' },
          _react2.default.createElement(
            'div',
            { className: 'col-sm-4 offset-sm-2 form-group' },
            _react2.default.createElement(_bootstrap.Text, { placeholder: 'Armor Usable' })
          ),
          _react2.default.createElement(
            'div',
            { className: 'col-sm-4 form-group' },
            _react2.default.createElement(_bootstrap.Text, { placeholder: 'Weapon Usable' })
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'text-sm-center' },
          _react2.default.createElement(_bootstrap.Button, { type: 'primary', text: 'Filter', onClick: function onClick() {
              return _this2.onSearch();
            } }),
          _react2.default.createElement(_bootstrap.Button, { text: 'Clear' })
        )
      );
    }
  }, {
    key: 'onSearch',
    value: function onSearch() {
      _card2.default.search({ type: 'Melee' });
    }
  }]);

  return SearchForm;
}(_react.Component);

exports.default = SearchForm;

},{"../../services/card":29,"../bootstrap":21,"react":"react"}],25:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _family = require('../../stores/family');

var _family2 = _interopRequireDefault(_family);

var _extReact = require('ext-react');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SearchResult = (_dec = (0, _extReact.Container)({
  stores: [_family2.default]
}), _dec(_class = function (_Component) {
  _inherits(SearchResult, _Component);

  function SearchResult() {
    _classCallCheck(this, SearchResult);

    return _possibleConstructorReturn(this, (SearchResult.__proto__ || Object.getPrototypeOf(SearchResult)).apply(this, arguments));
  }

  _createClass(SearchResult, [{
    key: 'render',
    value: function render() {
      console.log(this.props.stores.FamilyStore);
      return _react2.default.createElement('section', null);
    }
  }]);

  return SearchResult;
}(_react.Component)) || _class);
exports.default = SearchResult;

},{"../../stores/family":33,"ext-react":13,"react":"react"}],26:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _searchForm = require('./search-form');

var _searchForm2 = _interopRequireDefault(_searchForm);

var _searchResult = require('./search-result');

var _searchResult2 = _interopRequireDefault(_searchResult);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Search = function (_Component) {
  _inherits(Search, _Component);

  function Search() {
    _classCallCheck(this, Search);

    return _possibleConstructorReturn(this, (Search.__proto__ || Object.getPrototypeOf(Search)).apply(this, arguments));
  }

  _createClass(Search, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'section',
        null,
        _react2.default.createElement(
          'h1',
          null,
          'Search'
        ),
        _react2.default.createElement(_searchForm2.default, null),
        _react2.default.createElement(_searchResult2.default, null)
      );
    }
  }]);

  return Search;
}(_react.Component);

exports.default = Search;

},{"./search-form":24,"./search-result":25,"react":"react"}],27:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _rcModel = require('rc-model');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Test = (_dec = (0, _rcModel.Store)({
  endpoint: '/api/test',
  mutations: {
    post: {
      type: _rcModel.MutationType.POST,
      path: '/api/test'
    },
    put: {
      type: _rcModel.MutationType.PUT,
      path: '/api/test'
    }
  }
}), _dec(_class = function (_Component) {
  _inherits(Test, _Component);

  function Test() {
    _classCallCheck(this, Test);

    return _possibleConstructorReturn(this, (Test.__proto__ || Object.getPrototypeOf(Test)).apply(this, arguments));
  }

  _createClass(Test, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var data = this.props.store.data;

      return _react2.default.createElement(
        'section',
        { className: 'row' },
        _react2.default.createElement(
          'div',
          { className: 'col-sm-12' },
          JSON.stringify(data)
        ),
        _react2.default.createElement(
          'div',
          { className: 'col-sm-3' },
          _react2.default.createElement(
            'button',
            { className: 'btn btn-sm', onClick: function onClick() {
                return _this2.handlePost();
              } },
            'Post'
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'col-sm-3' },
          _react2.default.createElement(
            'button',
            { className: 'btn btn-sm', onClick: function onClick() {
                return _this2.handlePut();
              } },
            'Put'
          )
        )
      );
    }
  }, {
    key: 'handlePost',
    value: function handlePost() {
      this.props.store.post({
        record: {},
        next: function next(response) {
          console.log(response);
        },
        error: function error(e) {
          console.log(e.error);
        }
      });
    }
  }, {
    key: 'handlePut',
    value: function handlePut() {
      this.props.store.put({
        record: {},
        next: function next(response) {
          console.log(response);
        }
      });
    }
  }]);

  return Test;
}(_react.Component)) || _class);
exports.default = Test;

},{"rc-model":18,"react":"react"}],28:[function(require,module,exports){
'use strict';

require('babel-polyfill');

var _app = require('./components/app');

var _app2 = _interopRequireDefault(_app);

var _extReact = require('ext-react');

var _extReact2 = _interopRequireDefault(_extReact);

var _common = require('./services/common');

var _common2 = _interopRequireDefault(_common);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_extReact2.default.bootstrap({
  selector: 'react-root',
  component: _app2.default,
  init: _common2.default.initApp
});

},{"./components/app":20,"./services/common":30,"babel-polyfill":"babel-polyfill","ext-react":13}],29:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class;

var _extReact = require('ext-react');

var _card = require('../stores/card');

var _card2 = _interopRequireDefault(_card);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CardService = (0, _extReact.Service)(_class = function () {
  function CardService() {
    _classCallCheck(this, CardService);
  }

  _createClass(CardService, [{
    key: 'search',
    value: function search(criteria) {
      _card2.default.params = criteria;
      _card2.default.load();
    }
  }]);

  return CardService;
}()) || _class;

exports.default = CardService;

},{"../stores/card":31,"ext-react":13}],30:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class;

var _extReact = require('ext-react');

var _extReact2 = _interopRequireDefault(_extReact);

var _config = require('../common/config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CommonService = (0, _extReact.Service)(_class = function () {
  function CommonService() {
    _classCallCheck(this, CommonService);
  }

  _createClass(CommonService, [{
    key: 'initApp',
    value: function () {
      var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.t0 = _config2.default;
                _context.next = 3;
                return _extReact2.default.ajax({ url: '/api/init' });

              case 3:
                _context.t1 = _context.sent;

                _context.t0.add.call(_context.t0, _context.t1);

              case 5:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function initApp() {
        return _ref.apply(this, arguments);
      }

      return initApp;
    }()
  }]);

  return CommonService;
}()) || _class;

exports.default = CommonService;

},{"../common/config":19,"ext-react":13}],31:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _class;

var _extReact = require('ext-react');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CardStore = (0, _extReact.Store)(_class = function CardStore() {
  _classCallCheck(this, CardStore);

  this.proxy = {
    url: '/api/cards',
    method: 'post'
  };
}) || _class;

exports.default = CardStore;

},{"ext-react":13}],32:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _class;

var _extReact = require('ext-react');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DashboardStore = (0, _extReact.Store)(_class = function DashboardStore() {
  _classCallCheck(this, DashboardStore);

  this.proxy = {
    url: '/api/dashboard'
  };
  this.autoLoad = true;
}) || _class;

exports.default = DashboardStore;

},{"ext-react":13}],33:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _class;

var _extReact = require('ext-react');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FamilyStore = (0, _extReact.Store)(_class = function FamilyStore() {
  _classCallCheck(this, FamilyStore);

  this.proxy = {
    url: '/api/family'
  };
}) || _class;

exports.default = FamilyStore;

},{"ext-react":13}],34:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _extReact = require('ext-react');

var _extReact2 = _interopRequireDefault(_extReact);

var _reactDom = require('react-dom');

var _c = require('c3');

var _c2 = _interopRequireDefault(_c);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Viz = function (_Component) {
  _inherits(Viz, _Component);

  function Viz() {
    _classCallCheck(this, Viz);

    return _possibleConstructorReturn(this, (Viz.__proto__ || Object.getPrototypeOf(Viz)).apply(this, arguments));
  }

  _createClass(Viz, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.renderChart(this.props.config);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.renderChart(nextProps.config);
    }
  }, {
    key: 'renderChart',
    value: function renderChart(config) {
      config = _extReact2.default.extend({}, config, {
        bindto: (0, _reactDom.findDOMNode)(this)
      });
      _c2.default.generate(config);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('section', null);
    }
  }]);

  return Viz;
}(_react.Component);

exports.default = Viz;

},{"c3":"c3","ext-react":13,"react":"react","react-dom":"react-dom"}]},{},[28])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJub2RlX21vZHVsZXMvZXh0LXJlYWN0L2Rpc3QvYXBwL2NvbnRhaW5lci5qcyIsIm5vZGVfbW9kdWxlcy9leHQtcmVhY3QvZGlzdC9hcHAvc2VydmljZS5qcyIsIm5vZGVfbW9kdWxlcy9leHQtcmVhY3QvZGlzdC9jb21wb25lbnRzL3JvdXRlci5qcyIsIm5vZGVfbW9kdWxlcy9leHQtcmVhY3QvZGlzdC9jb3JlL2V4dC5qcyIsIm5vZGVfbW9kdWxlcy9leHQtcmVhY3QvZGlzdC9jb3JlL2xpc3QuanMiLCJub2RlX21vZHVsZXMvZXh0LXJlYWN0L2Rpc3QvY29yZS9tYXAuanMiLCJub2RlX21vZHVsZXMvZXh0LXJlYWN0L2Rpc3QvY29yZS9zdHJpbmcuanMiLCJub2RlX21vZHVsZXMvZXh0LXJlYWN0L2Rpc3QvZGF0YS9hamF4LmpzIiwibm9kZV9tb2R1bGVzL2V4dC1yZWFjdC9kaXN0L2RhdGEvY2FjaGUuanMiLCJub2RlX21vZHVsZXMvZXh0LXJlYWN0L2Rpc3QvZGF0YS9tb2RlbC5qcyIsIm5vZGVfbW9kdWxlcy9leHQtcmVhY3QvZGlzdC9kYXRhL3N0b3JlLmpzIiwibm9kZV9tb2R1bGVzL2V4dC1yZWFjdC9kaXN0L21peGluL29ic2VydmFibGUuanMiLCJub2RlX21vZHVsZXMvZXh0LXJlYWN0L2Rpc3QvcmV4dC5qcyIsIm5vZGVfbW9kdWxlcy9yYy1tb2RlbC9kaXN0L2FqYXgveGhyLmpzIiwibm9kZV9tb2R1bGVzL3JjLW1vZGVsL2Rpc3QvY29yZS9tYXAuanMiLCJub2RlX21vZHVsZXMvcmMtbW9kZWwvZGlzdC9kZWNvcmF0b3Ivc3RvcmUuanMiLCJub2RlX21vZHVsZXMvcmMtbW9kZWwvZGlzdC9pbmRleC5qcyIsInNyY1xcanNcXGNvbW1vblxcY29uZmlnLmpzIiwic3JjXFxqc1xcY29tcG9uZW50c1xcYXBwLmpzeCIsInNyY1xcanNcXGNvbXBvbmVudHNcXGJvb3RzdHJhcC5qc3giLCJzcmNcXGpzXFxjb21wb25lbnRzXFxkYXNoYm9hcmRcXGRhc2hib2FyZC5qc3giLCJzcmNcXGpzXFxjb21wb25lbnRzXFxub3Rmb3VuZC5qc3giLCJzcmNcXGpzXFxjb21wb25lbnRzXFxzZWFyY2hcXHNlYXJjaC1mb3JtLmpzeCIsInNyY1xcanNcXGNvbXBvbmVudHNcXHNlYXJjaFxcc2VhcmNoLXJlc3VsdC5qc3giLCJzcmNcXGpzXFxjb21wb25lbnRzXFxzZWFyY2hcXHNlYXJjaC5qc3giLCJzcmNcXGpzXFxjb21wb25lbnRzXFx0ZXN0XFx0ZXN0LmpzeCIsInNyY1xcanNcXG1haW4uanMiLCJzcmNcXGpzXFxzZXJ2aWNlc1xcY2FyZC5qcyIsInNyY1xcanNcXHNlcnZpY2VzXFxjb21tb24uanMiLCJzcmNcXGpzXFxzdG9yZXNcXGNhcmQuanMiLCJzcmNcXGpzXFxzdG9yZXNcXGRhc2hib2FyZC5qcyIsInNyY1xcanNcXHN0b3Jlc1xcZmFtaWx5LmpzIiwic3JjXFxqc1xcdXhcXHZpei5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeEpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaElBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6SUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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LENBQWlCLFVBQVUsTUFBM0I7QUFDRDs7O2dDQUVXLE0sRUFBUTtBQUNsQixlQUFTLG1CQUFLLE1BQUwsQ0FBWSxFQUFaLEVBQWdCLE1BQWhCLEVBQXdCO0FBQy9CLGdCQUFRLDJCQUFZLElBQVo7QUFEdUIsT0FBeEIsQ0FBVDtBQUdBLGtCQUFHLFFBQUgsQ0FBWSxNQUFaO0FBQ0Q7Ozs2QkFFUTtBQUNQLGFBQU8sOENBQVA7QUFDRDs7Ozs7O2tCQWxCa0IsRyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9saXN0ID0gcmVxdWlyZSgnLi4vY29yZS9saXN0Jyk7XG5cbnZhciBfbGlzdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9saXN0KTtcblxudmFyIF9tYXAgPSByZXF1aXJlKCcuLi9jb3JlL21hcCcpO1xuXG52YXIgX21hcDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9tYXApO1xuXG52YXIgX29ic2VydmFibGUgPSByZXF1aXJlKCcuLi9taXhpbi9vYnNlcnZhYmxlJyk7XG5cbnZhciBfb2JzZXJ2YWJsZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9vYnNlcnZhYmxlKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2FzeW5jVG9HZW5lcmF0b3IoZm4pIHsgcmV0dXJuIGZ1bmN0aW9uICgpIHsgdmFyIGdlbiA9IGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7IGZ1bmN0aW9uIHN0ZXAoa2V5LCBhcmcpIHsgdHJ5IHsgdmFyIGluZm8gPSBnZW5ba2V5XShhcmcpOyB2YXIgdmFsdWUgPSBpbmZvLnZhbHVlOyB9IGNhdGNoIChlcnJvcikgeyByZWplY3QoZXJyb3IpOyByZXR1cm47IH0gaWYgKGluZm8uZG9uZSkgeyByZXNvbHZlKHZhbHVlKTsgfSBlbHNlIHsgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh2YWx1ZSkudGhlbihmdW5jdGlvbiAodmFsdWUpIHsgc3RlcChcIm5leHRcIiwgdmFsdWUpOyB9LCBmdW5jdGlvbiAoZXJyKSB7IHN0ZXAoXCJ0aHJvd1wiLCBlcnIpOyB9KTsgfSB9IHJldHVybiBzdGVwKFwibmV4dFwiKTsgfSk7IH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoY29uZmlnKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoV3JhcHBlZENvbXBvbmVudCkge1xuICAgIHJldHVybiBmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICAgICAgX2luaGVyaXRzKF9jbGFzcywgX0NvbXBvbmVudCk7XG5cbiAgICAgIGZ1bmN0aW9uIF9jbGFzcyhwcm9wcykge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgX2NsYXNzKTtcblxuICAgICAgICB2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoX2NsYXNzLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoX2NsYXNzKSkuY2FsbCh0aGlzLCBwcm9wcykpO1xuXG4gICAgICAgIF90aGlzLnN0YXRlID0ge1xuICAgICAgICAgIHN0b3Jlczoge31cbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgICAgfVxuXG4gICAgICBfY3JlYXRlQ2xhc3MoX2NsYXNzLCBbe1xuICAgICAgICBrZXk6ICdjb21wb25lbnRXaWxsTW91bnQnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgICAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICAgICAgdmFyIHN0b3JlcyA9IF9saXN0Mi5kZWZhdWx0Lm9mKGNvbmZpZy5zdG9yZXMpLnJlZHVjZShmdW5jdGlvbiAoc3RvcmVzLCBzdG9yZSkge1xuICAgICAgICAgICAgc3RvcmUuc3Vic2NyaWJlKF90aGlzMi5vbkRhdGFDaGFuZ2VkLmJpbmQoX3RoaXMyKSk7XG4gICAgICAgICAgICBzdG9yZXNbc3RvcmUuc3RvcmVJZF0gPSBzdG9yZTtcbiAgICAgICAgICAgIHJldHVybiBzdG9yZXM7XG4gICAgICAgICAgfSwge30pO1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHsgc3RvcmVzOiBzdG9yZXMgfTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdjb21wb25lbnREaWRNb3VudCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgdmFyIF9yZWYgPSBfYXN5bmNUb0dlbmVyYXRvcihyZWdlbmVyYXRvclJ1bnRpbWUubWFyayhmdW5jdGlvbiBfY2FsbGVlKCkge1xuICAgICAgICAgICAgdmFyIHN0b3JlcywgbmFtZTtcbiAgICAgICAgICAgIHJldHVybiByZWdlbmVyYXRvclJ1bnRpbWUud3JhcChmdW5jdGlvbiBfY2FsbGVlJChfY29udGV4dCkge1xuICAgICAgICAgICAgICB3aGlsZSAoMSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2NvbnRleHQucHJldiA9IF9jb250ZXh0Lm5leHQpIHtcbiAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgc3RvcmVzID0gdGhpcy5zdGF0ZS5zdG9yZXM7XG4gICAgICAgICAgICAgICAgICAgIF9jb250ZXh0LnQwID0gcmVnZW5lcmF0b3JSdW50aW1lLmtleXMoc3RvcmVzKTtcblxuICAgICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICBpZiAoKF9jb250ZXh0LnQxID0gX2NvbnRleHQudDAoKSkuZG9uZSkge1xuICAgICAgICAgICAgICAgICAgICAgIF9jb250ZXh0Lm5leHQgPSA5O1xuICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgbmFtZSA9IF9jb250ZXh0LnQxLnZhbHVlO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICghc3RvcmVzW25hbWVdLmF1dG9Mb2FkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgX2NvbnRleHQubmV4dCA9IDc7XG4gICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBfY29udGV4dC5uZXh0ID0gNztcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHN0b3Jlc1tuYW1lXS5sb2FkKCk7XG5cbiAgICAgICAgICAgICAgICAgIGNhc2UgNzpcbiAgICAgICAgICAgICAgICAgICAgX2NvbnRleHQubmV4dCA9IDI7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICBjYXNlIDk6XG4gICAgICAgICAgICAgICAgICBjYXNlICdlbmQnOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2NvbnRleHQuc3RvcCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgX2NhbGxlZSwgdGhpcyk7XG4gICAgICAgICAgfSkpO1xuXG4gICAgICAgICAgZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgICAgICByZXR1cm4gX3JlZi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBjb21wb25lbnREaWRNb3VudDtcbiAgICAgICAgfSgpXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ2NvbXBvbmVudFdpbGxVbm1vdW50JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgICAgICAgX21hcDIuZGVmYXVsdC5vZih0aGlzLnN0YXRlLnN0b3JlKS5lYWNoKGZ1bmN0aW9uIChzdG9yZUlkLCBzdG9yZSkge1xuICAgICAgICAgICAgc3RvcmUudW5zdWJzY3JpYmUoX3RoaXMzLm9uRGF0YUNoYW5nZWQpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ3JlbmRlcicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICAgICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFdyYXBwZWRDb21wb25lbnQsIF9leHRlbmRzKHt9LCB0aGlzLnN0YXRlLCB0aGlzLnByb3BzKSk7XG4gICAgICAgIH1cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAncHJlcGFyZVN0b3JlcycsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBwcmVwYXJlU3RvcmVzKHN0b3Jlcykge1xuICAgICAgICAgIHZhciBfdGhpczQgPSB0aGlzO1xuXG4gICAgICAgICAgcmV0dXJuIF9saXN0Mi5kZWZhdWx0Lm9mKGNvbmZpZy5zdG9yZXMpLnJlZHVjZShmdW5jdGlvbiAoc3RvcmVzLCBzdG9yZSkge1xuICAgICAgICAgICAgc3RvcmUuc3Vic2NyaWJlKF90aGlzNC5vbkRhdGFDaGFuZ2VkKTtcbiAgICAgICAgICAgIHN0b3Jlc1tzdG9yZS5uYW1lXSA9IHN0b3JlO1xuICAgICAgICAgICAgcmV0dXJuIHN0b3JlcztcbiAgICAgICAgICB9LCB7fSk7XG4gICAgICAgIH1cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnb25EYXRhQ2hhbmdlZCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBvbkRhdGFDaGFuZ2VkKHN0b3JlKSB7XG4gICAgICAgICAgdmFyIHN0b3JlcyA9IHRoaXMuc3RhdGUuc3RvcmVzO1xuXG4gICAgICAgICAgc3RvcmVzW3N0b3JlLm5hbWVdID0gc3RvcmU7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4geyBzdG9yZXM6IHN0b3JlcyB9O1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XSk7XG5cbiAgICAgIHJldHVybiBfY2xhc3M7XG4gICAgfShfcmVhY3QuQ29tcG9uZW50KTtcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChTZXJ2aWNlKSB7XG4gIHJldHVybiBuZXcgU2VydmljZSgpO1xufTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLkxpbmsgPSBleHBvcnRzLlJvdXRlID0gdW5kZWZpbmVkO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfb2JzZXJ2YWJsZSA9IHJlcXVpcmUoJy4uL21peGluL29ic2VydmFibGUnKTtcblxudmFyIF9vYnNlcnZhYmxlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX29ic2VydmFibGUpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMob2JqLCBrZXlzKSB7IHZhciB0YXJnZXQgPSB7fTsgZm9yICh2YXIgaSBpbiBvYmopIHsgaWYgKGtleXMuaW5kZXhPZihpKSA+PSAwKSBjb250aW51ZTsgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBpKSkgY29udGludWU7IHRhcmdldFtpXSA9IG9ialtpXTsgfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIElOREVYX1JPVVRFID0gJy8nO1xuXG52YXIgZ2V0Um91dGUgPSBmdW5jdGlvbiBnZXRSb3V0ZSgpIHtcbiAgcmV0dXJuIHdpbmRvdy5sb2NhdGlvbi5oYXNoLnN1YnN0cmluZygxKSB8fCAnLyc7XG59O1xuXG52YXIgbWF0Y2hQYXRoID0gZnVuY3Rpb24gbWF0Y2hQYXRoKF9yZWYpIHtcbiAgdmFyIGluZGV4ID0gX3JlZi5pbmRleCxcbiAgICAgIHBhdGggPSBfcmVmLnBhdGg7XG5cbiAgdmFyIHJvdXRlID0gZ2V0Um91dGUoKTtcbiAgaWYgKGluZGV4ICYmIHJvdXRlID09PSBJTkRFWF9ST1VURSkgcmV0dXJuIHRydWU7XG4gIHJldHVybiByb3V0ZS5zdGFydHNXaXRoKHBhdGgpO1xufTtcblxudmFyIFJvdXRlID0gZXhwb3J0cy5Sb3V0ZSA9IGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhSb3V0ZSwgX0NvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gUm91dGUocHJvcHMpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUm91dGUpO1xuXG4gICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKFJvdXRlLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoUm91dGUpKS5jYWxsKHRoaXMsIHByb3BzKSk7XG5cbiAgICBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgIG1hdGNoOiBtYXRjaFBhdGgocHJvcHMpXG4gICAgfTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoUm91dGUsIFt7XG4gICAga2V5OiAnY29tcG9uZW50RGlkTW91bnQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICBfb2JzZXJ2YWJsZTIuZGVmYXVsdC5mcm9tRXZlbnQod2luZG93LCAnaGFzaGNoYW5nZScpLnN1YnNjcmliZShmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfdGhpczIuc2V0U3RhdGUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiB7IG1hdGNoOiBtYXRjaFBhdGgoX3RoaXMyLnByb3BzKSB9O1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3JlbmRlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHZhciBtYXRjaCA9IHRoaXMuc3RhdGUubWF0Y2gsXG4gICAgICAgICAgY29tcG9uZW50ID0gdGhpcy5wcm9wcy5jb21wb25lbnQ7XG5cblxuICAgICAgaWYgKCFjb21wb25lbnQpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignY29tcG9uZW50IHByb3BzIHNob3VsZCBub3QgYmUgbnVsbCcpO1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG1hdGNoID8gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoY29tcG9uZW50KSA6IG51bGw7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFJvdXRlO1xufShfcmVhY3QuQ29tcG9uZW50KTtcblxudmFyIExpbmsgPSBleHBvcnRzLkxpbmsgPSBmdW5jdGlvbiAoX0NvbXBvbmVudDIpIHtcbiAgX2luaGVyaXRzKExpbmssIF9Db21wb25lbnQyKTtcblxuICBmdW5jdGlvbiBMaW5rKHByb3BzKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIExpbmspO1xuXG4gICAgdmFyIF90aGlzMyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChMaW5rLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoTGluaykpLmNhbGwodGhpcywgcHJvcHMpKTtcblxuICAgIF90aGlzMy5zdGF0ZSA9IHtcbiAgICAgIG1hdGNoOiBtYXRjaFBhdGgoeyBwYXRoOiBwcm9wcy50byB9KVxuICAgIH07XG4gICAgcmV0dXJuIF90aGlzMztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhMaW5rLCBbe1xuICAgIGtleTogJ2NvbXBvbmVudERpZE1vdW50JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICB2YXIgX3RoaXM0ID0gdGhpcztcblxuICAgICAgX29ic2VydmFibGUyLmRlZmF1bHQuZnJvbUV2ZW50KHdpbmRvdywgJ2hhc2hjaGFuZ2UnKS5zdWJzY3JpYmUoZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX3RoaXM0LnNldFN0YXRlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4geyBtYXRjaDogbWF0Y2hQYXRoKHsgcGF0aDogX3RoaXM0LnByb3BzLnRvIH0pIH07XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAncmVuZGVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgdG8gPSBfcHJvcHMudG8sXG4gICAgICAgICAgY2xhc3NOYW1lID0gX3Byb3BzLmNsYXNzTmFtZSxcbiAgICAgICAgICBfcHJvcHMkYWN0aXZlQ2xhc3NOYW0gPSBfcHJvcHMuYWN0aXZlQ2xhc3NOYW1lLFxuICAgICAgICAgIGFjdGl2ZUNsYXNzTmFtZSA9IF9wcm9wcyRhY3RpdmVDbGFzc05hbSA9PT0gdW5kZWZpbmVkID8gJ2FjdGl2ZScgOiBfcHJvcHMkYWN0aXZlQ2xhc3NOYW0sXG4gICAgICAgICAgb3RoZXJzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9wcm9wcywgWyd0bycsICdjbGFzc05hbWUnLCAnYWN0aXZlQ2xhc3NOYW1lJ10pO1xuXG4gICAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoJ2EnLCBfZXh0ZW5kcyh7IGhyZWY6ICcjJyArIHRvLCBjbGFzc05hbWU6IHRvID09PSBnZXRSb3V0ZSgpID8gW2NsYXNzTmFtZSwgYWN0aXZlQ2xhc3NOYW1lXS5qb2luKCcgJykgOiBjbGFzc05hbWUgfSwgb3RoZXJzKSk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIExpbms7XG59KF9yZWFjdC5Db21wb25lbnQpOyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgRXh0ID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBFeHQoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEV4dCk7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoRXh0LCBbe1xuICAgIGtleTogXCJnZXRCeUlkXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldEJ5SWQoaWQpIHtcbiAgICAgIHJldHVybiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImV4dGVuZFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBleHRlbmQoKSB7XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbi5hcHBseShudWxsLCBhcmd1bWVudHMpOyAvLyBpbW11dGFibGUgb2JqZWN0XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIEV4dDtcbn0oKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gbmV3IEV4dCgpOyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgRU1QVFlfTElTVCA9IFtdO1xuXG52YXIgTGlzdCA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gTGlzdCh2YWx1ZSkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBMaXN0KTtcblxuICAgIHRoaXMuYXJyYXkgPSBFTVBUWV9MSVNUO1xuICAgIGlmICh2YWx1ZSAmJiB2YWx1ZS5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLmFycmF5ID0gdmFsdWUubGVuZ3RoID4gMSA/IHZhbHVlIDogdmFsdWVbMF0gPyB2YWx1ZVswXSA6IEVNUFRZX0xJU1Q7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKExpc3QsIFt7XG4gICAga2V5OiBcImNvbGxlY3RcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29sbGVjdCgpIHtcbiAgICAgIHJldHVybiB0aGlzLmFycmF5O1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJlYWNoXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGVhY2goaXRlcmF0ZWUpIHtcbiAgICAgIGZvciAodmFyIGluZGV4ID0gMCwgaXRlbTsgKGl0ZW0gPSB0aGlzLmFycmF5W2luZGV4XSkgIT0gbnVsbDsgKytpbmRleCkge1xuICAgICAgICBpdGVyYXRlZShpdGVtLCBpbmRleCwgdGhpcy5hcnJheSk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIm1hcFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBtYXAoaXRlcmF0ZWUpIHtcbiAgICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICAgIHRoaXMuZWFjaChmdW5jdGlvbiAoaXRlbSwgaW5kZXgsIGFycmF5KSB7XG4gICAgICAgIHJldHVybiByZXN1bHRbaW5kZXhdID0gaXRlcmF0ZWUoaXRlbSwgaW5kZXgsIGFycmF5KTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5hcnJheSA9IHJlc3VsdDtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZWR1Y2VcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVkdWNlKGl0ZXJhdGVlLCBhY2N1bXVsYXRvcikge1xuICAgICAgdGhpcy5lYWNoKGZ1bmN0aW9uIChpdGVtLCBpbmRleCwgYXJyYXkpIHtcbiAgICAgICAgcmV0dXJuIGFjY3VtdWxhdG9yID0gaXRlcmF0ZWUoYWNjdW11bGF0b3IsIGl0ZW0sIGluZGV4LCBhcnJheSk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBhY2N1bXVsYXRvcjtcbiAgICB9XG4gIH1dLCBbe1xuICAgIGtleTogXCJvZlwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBvZigpIC8qLi4udmFsdWVzKi97XG4gICAgICByZXR1cm4gbmV3IExpc3QoYXJndW1lbnRzKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gTGlzdDtcbn0oKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gTGlzdDsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB1bmRlZmluZWQ7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfbGlzdCA9IHJlcXVpcmUoJy4vbGlzdCcpO1xuXG52YXIgX2xpc3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbGlzdCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBFTVBUWV9NQVAgPSB7fTtcblxudmFyIE1hcCA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gTWFwKGtleVZhbHVlcykge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBNYXApO1xuXG4gICAgdGhpcy5tYXAgPSBFTVBUWV9NQVA7XG4gICAgaWYgKGtleVZhbHVlcykge1xuICAgICAgaWYgKGtleVZhbHVlcy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgdGhpcy5tYXAgPSBrZXlWYWx1ZXNbMF07XG4gICAgICB9IGVsc2UgaWYgKGtleVZhbHVlcy5sZW5ndGggJSAyICE9PSAwKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyB2YWx1ZSBmb3Iga2V5OiAnICsga2V5VmFsdWVzW2tleVZhbHVlcy5sZW5ndGggLSAxXSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmb3IgKHZhciBpbmRleCA9IDAsIGVsZW1lbnQ7IChlbGVtZW50ID0ga2V5VmFsdWVzW2luZGV4XSkgIT0gbnVsbDsgaW5kZXggKz0gMikge1xuICAgICAgICAgIHRoaXMubWFwW2VsZW1lbnRdID0ga2V5VmFsdWVzW2luZGV4ICsgMV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoTWFwLCBbe1xuICAgIGtleTogJ2VhY2gnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBlYWNoKGl0ZXJhdGVlKSB7XG4gICAgICBmb3IgKHZhciBrZXkgaW4gdGhpcy5tYXApIHtcbiAgICAgICAgaXRlcmF0ZWUoa2V5LCB0aGlzLm1hcFtrZXldLCB0aGlzLm1hcCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdrZXlzJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24ga2V5cygpIHtcbiAgICAgIHJldHVybiBfbGlzdDIuZGVmYXVsdC5vZihPYmplY3Qua2V5cyh0aGlzLm1hcCkpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3ZhbHVlcycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHZhbHVlcygpIHtcbiAgICAgIHJldHVybiBfbGlzdDIuZGVmYXVsdC5vZihPYmplY3QudmFsdWVzKHRoaXMubWFwKSk7XG4gICAgfVxuICB9XSwgW3tcbiAgICBrZXk6ICdvZicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9mKCkgLyouLi5rZXlWYWx1ZXMqL3tcbiAgICAgIHJldHVybiBuZXcgTWFwKGFyZ3VtZW50cyk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIE1hcDtcbn0oKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gTWFwOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIFN0cmluZyA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gU3RyaW5nKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBTdHJpbmcpO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKFN0cmluZywgW3tcbiAgICBrZXk6ICd0b1F1ZXJ5U3RyaW5nJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gdG9RdWVyeVN0cmluZyhwYXJhbXMsIHNlcCwgZW5jb2RlKSB7XG4gICAgICBzZXAgPSBzZXAgPT09IHVuZGVmaW5lZCA/ICcmJyA6IHNlcDtcbiAgICAgIGVuY29kZSA9IGVuY29kZSA9PT0gZmFsc2UgPyBmdW5jdGlvbiAocykge1xuICAgICAgICByZXR1cm4gcztcbiAgICAgIH0gOiBlbmNvZGVVUklDb21wb25lbnQ7XG5cbiAgICAgIHZhciBwYWlycyA9IFtdO1xuICAgICAgZm9yICh2YXIga2V5IGluIHBhcmFtcykge1xuICAgICAgICBwYWlycy5wdXNoKGtleSArICc9JyArIGVuY29kZShwYXJhbXNba2V5XSkpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHBhaXJzLmpvaW4oc2VwKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gU3RyaW5nO1xufSgpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBuZXcgU3RyaW5nKCk7IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX3N0cmluZyA9IHJlcXVpcmUoJy4uL2NvcmUvc3RyaW5nJyk7XG5cbnZhciBfc3RyaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3N0cmluZyk7XG5cbnZhciBfZXh0ID0gcmVxdWlyZSgnLi4vY29yZS9leHQnKTtcblxudmFyIF9leHQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZXh0KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2FzeW5jVG9HZW5lcmF0b3IoZm4pIHsgcmV0dXJuIGZ1bmN0aW9uICgpIHsgdmFyIGdlbiA9IGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7IGZ1bmN0aW9uIHN0ZXAoa2V5LCBhcmcpIHsgdHJ5IHsgdmFyIGluZm8gPSBnZW5ba2V5XShhcmcpOyB2YXIgdmFsdWUgPSBpbmZvLnZhbHVlOyB9IGNhdGNoIChlcnJvcikgeyByZWplY3QoZXJyb3IpOyByZXR1cm47IH0gaWYgKGluZm8uZG9uZSkgeyByZXNvbHZlKHZhbHVlKTsgfSBlbHNlIHsgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh2YWx1ZSkudGhlbihmdW5jdGlvbiAodmFsdWUpIHsgc3RlcChcIm5leHRcIiwgdmFsdWUpOyB9LCBmdW5jdGlvbiAoZXJyKSB7IHN0ZXAoXCJ0aHJvd1wiLCBlcnIpOyB9KTsgfSB9IHJldHVybiBzdGVwKFwibmV4dFwiKTsgfSk7IH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIEFqYXggPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIEFqYXgoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEFqYXgpO1xuXG4gICAgX2V4dDIuZGVmYXVsdC5leHRlbmQoQWpheC5wcm90b3R5cGUsIHtcbiAgICAgIHhocjogbmV3IFhNTEh0dHBSZXF1ZXN0KCksXG4gICAgICBhamF4QmVmb3JlOiBmdW5jdGlvbiBhamF4QmVmb3JlKCkgey8qIHRvIGJlIGltcGxlbWVudGVkICovfSxcbiAgICAgIGFqYXhFcnJvcjogZnVuY3Rpb24gYWpheEVycm9yKGVycm9yKSB7LyogdG8gYmUgaW1wbGVtZW50ZWQgKi99LFxuICAgICAgYWpheENvbXBsZXRlOiBmdW5jdGlvbiBhamF4Q29tcGxldGUoKSB7LyogdG8gYmUgaW1wbGVtZW50ZWQgKi99LFxuICAgICAgQkFTRV9VUkw6IG51bGxcbiAgICB9KTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhBamF4LCBbe1xuICAgIGtleTogJ3JlcXVlc3QnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgX3JlZiA9IF9hc3luY1RvR2VuZXJhdG9yKHJlZ2VuZXJhdG9yUnVudGltZS5tYXJrKGZ1bmN0aW9uIF9jYWxsZWUoX3JlZjIpIHtcbiAgICAgICAgdmFyIHVybCA9IF9yZWYyLnVybCxcbiAgICAgICAgICAgIF9yZWYyJG1ldGhvZCA9IF9yZWYyLm1ldGhvZCxcbiAgICAgICAgICAgIG1ldGhvZCA9IF9yZWYyJG1ldGhvZCA9PT0gdW5kZWZpbmVkID8gJ2dldCcgOiBfcmVmMiRtZXRob2QsXG4gICAgICAgICAgICBwYXJhbXMgPSBfcmVmMi5wYXJhbXMsXG4gICAgICAgICAgICBuZXh0ID0gX3JlZjIubmV4dCxcbiAgICAgICAgICAgIGVycm9yID0gX3JlZjIuZXJyb3IsXG4gICAgICAgICAgICBjb21wbGV0ZSA9IF9yZWYyLmNvbXBsZXRlO1xuICAgICAgICB2YXIgcmVzcG9uc2U7XG4gICAgICAgIHJldHVybiByZWdlbmVyYXRvclJ1bnRpbWUud3JhcChmdW5jdGlvbiBfY2FsbGVlJChfY29udGV4dCkge1xuICAgICAgICAgIHdoaWxlICgxKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKF9jb250ZXh0LnByZXYgPSBfY29udGV4dC5uZXh0KSB7XG4gICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICBfY29udGV4dC5wcmV2ID0gMDtcblxuICAgICAgICAgICAgICAgIHRoaXMuYWpheEJlZm9yZSgpO1xuICAgICAgICAgICAgICAgIF9jb250ZXh0Lm5leHQgPSA0O1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnByb21pc2UoeyB1cmw6IHVybCwgbWV0aG9kOiBtZXRob2QsIHBhcmFtczogcGFyYW1zIH0pO1xuXG4gICAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICByZXNwb25zZSA9IF9jb250ZXh0LnNlbnQ7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0LmFicnVwdCgncmV0dXJuJywgbmV4dCA/IG5leHQocmVzcG9uc2UpIDogcmVzcG9uc2UpO1xuXG4gICAgICAgICAgICAgIGNhc2UgODpcbiAgICAgICAgICAgICAgICBfY29udGV4dC5wcmV2ID0gODtcbiAgICAgICAgICAgICAgICBfY29udGV4dC50MCA9IF9jb250ZXh0WydjYXRjaCddKDApO1xuXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignQ2Fubm90IGdldCByZXNwb25zZSBmcm9tIHNlcnZlciBmb3IgdXJsIFsnICsgdXJsICsgJ10gY2F1c2VkIGJ5OiAnICsgX2NvbnRleHQudDApO1xuICAgICAgICAgICAgICAgIHRoaXMuYWpheEVycm9yKF9jb250ZXh0LnQwKTtcbiAgICAgICAgICAgICAgICBlcnJvciAmJiBlcnJvcihfY29udGV4dC50MCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0LmFicnVwdCgncmV0dXJuJywgbnVsbCk7XG5cbiAgICAgICAgICAgICAgY2FzZSAxNDpcbiAgICAgICAgICAgICAgICBfY29udGV4dC5wcmV2ID0gMTQ7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmFqYXhDb21wbGV0ZSgpO1xuICAgICAgICAgICAgICAgIGNvbXBsZXRlICYmIGNvbXBsZXRlKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0LmZpbmlzaCgxNCk7XG5cbiAgICAgICAgICAgICAgY2FzZSAxODpcbiAgICAgICAgICAgICAgY2FzZSAnZW5kJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gX2NvbnRleHQuc3RvcCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSwgX2NhbGxlZSwgdGhpcywgW1swLCA4LCAxNCwgMThdXSk7XG4gICAgICB9KSk7XG5cbiAgICAgIGZ1bmN0aW9uIHJlcXVlc3QoX3gpIHtcbiAgICAgICAgcmV0dXJuIF9yZWYuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJlcXVlc3Q7XG4gICAgfSgpXG4gIH0sIHtcbiAgICBrZXk6ICdwcm9taXNlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcHJvbWlzZShzZXR0aW5ncykge1xuICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgX3RoaXMuY3JlYXRlUmVxdWVzdChzZXR0aW5ncywgZnVuY3Rpb24gKGVyciwgcmVzKSB7XG4gICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIHJlc29sdmUocmVzKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjcmVhdGVSZXF1ZXN0JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY3JlYXRlUmVxdWVzdChfcmVmMywgZG9uZSkge1xuICAgICAgdmFyIHVybCA9IF9yZWYzLnVybCxcbiAgICAgICAgICBtZXRob2QgPSBfcmVmMy5tZXRob2QsXG4gICAgICAgICAgcGFyYW1zID0gX3JlZjMucGFyYW1zO1xuXG4gICAgICB0aGlzLkJBU0VfVVJMICYmICh1cmwgPSB0aGlzLkJBU0VfVVJMICsgJy8nICsgdXJsKShtZXRob2QgPT09ICdnZXQnICYmIHBhcmFtcyAhPT0gbnVsbCkgJiYgKHVybCA9IHVybCArICc/JyArIF9zdHJpbmcyLmRlZmF1bHQudG9RdWVyeVN0cmluZyhwYXJhbXMpKTtcbiAgICAgIHZhciB4aHIgPSB0aGlzLnhocjtcbiAgICAgIHhoci5vcGVuKG1ldGhvZCwgdXJsLCB0cnVlKTtcbiAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOCcpO1xuICAgICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHhoci5yZWFkeVN0YXRlID09PSBYTUxIdHRwUmVxdWVzdC5ET05FKSB7XG4gICAgICAgICAgaWYgKHhoci5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgICAgZG9uZShudWxsLCBKU09OLnBhcnNlKHhoci5yZXNwb25zZVRleHQpKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgZG9uZShKU09OLnBhcnNlKHhoci5yZXNwb25zZVRleHQpKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgZG9uZSh4aHIucmVzcG9uc2VUZXh0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICB4aHIuc2VuZChwYXJhbXMgIT09IG51bGwgPyBKU09OLnN0cmluZ2lmeShwYXJhbXMpIDogbnVsbCk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIEFqYXg7XG59KCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IG5ldyBBamF4KCk7IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgQ2FjaGUgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIENhY2hlKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBDYWNoZSk7XG5cbiAgICB0aGlzLl9jYWNoZSA9IHt9O1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKENhY2hlLCBbe1xuICAgIGtleTogJ2hhc0xvY2FsU3RvcmFnZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGhhc0xvY2FsU3RvcmFnZSgpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiAnbG9jYWxTdG9yYWdlJyBpbiB3aW5kb3cgJiYgd2luZG93LmxvY2FsU3RvcmFnZSAhPT0gbnVsbDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2dldCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldChrZXkpIHtcbiAgICAgIGlmICh0aGlzLmhhc0xvY2FsU3RvcmFnZSgpKSB7XG4gICAgICAgIHJldHVybiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpIHx8IHVuZGVmaW5lZDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jYWNoZVtrZXldIHx8IHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdzZXQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXQoa2V5LCB2YWx1ZSkge1xuICAgICAgaWYgKHRoaXMuaGFzTG9jYWxTdG9yYWdlKCkpIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCB2YWx1ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9jYWNoZVtrZXldID0gdmFsdWU7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAncmVtb3ZlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVtb3ZlKGtleSkge1xuICAgICAgaWYgKCFrZXkpIHtcbiAgICAgICAgdGhpcy5fY2FjaGUgPSB7fTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5oYXNMb2NhbFN0b3JhZ2UoKSkge1xuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShrZXkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZGVsZXRlIHRoaXMuX2NhY2hlW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIENhY2hlO1xufSgpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBuZXcgQ2FjaGUoKTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB1bmRlZmluZWQ7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfZXh0ID0gcmVxdWlyZSgnLi4vY29yZS9leHQnKTtcblxudmFyIF9leHQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZXh0KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIE1vZGVsID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBNb2RlbChkYXRhKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIE1vZGVsKTtcblxuICAgIHRoaXMucGhhbnRvbSA9IF9leHQyLmRlZmF1bHQuZXh0ZW5kKHt9LCBkYXRhKTtcbiAgICB0aGlzLmRhdGEgPSB7fTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhNb2RlbCwgW3tcbiAgICBrZXk6ICdzZXQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXQoZmllbGROYW1lLCBuZXdWYWx1ZSkge1xuICAgICAgdGhpcy5kYXRhW2ZpZWxkTmFtZV0gPSBuZXdWYWx1ZTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gTW9kZWw7XG59KCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IE1vZGVsOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxudmFyIF9leHQgPSByZXF1aXJlKCcuLi9jb3JlL2V4dCcpO1xuXG52YXIgX2V4dDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9leHQpO1xuXG52YXIgX2xpc3QgPSByZXF1aXJlKCcuLi9jb3JlL2xpc3QnKTtcblxudmFyIF9saXN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2xpc3QpO1xuXG52YXIgX2FqYXggPSByZXF1aXJlKCcuL2FqYXgnKTtcblxudmFyIF9hamF4MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2FqYXgpO1xuXG52YXIgX21vZGVsID0gcmVxdWlyZSgnLi9tb2RlbCcpO1xuXG52YXIgX21vZGVsMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX21vZGVsKTtcblxudmFyIF9vYnNlcnZhYmxlID0gcmVxdWlyZSgnLi4vbWl4aW4vb2JzZXJ2YWJsZScpO1xuXG52YXIgX29ic2VydmFibGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfb2JzZXJ2YWJsZSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9hc3luY1RvR2VuZXJhdG9yKGZuKSB7IHJldHVybiBmdW5jdGlvbiAoKSB7IHZhciBnZW4gPSBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgeyBmdW5jdGlvbiBzdGVwKGtleSwgYXJnKSB7IHRyeSB7IHZhciBpbmZvID0gZ2VuW2tleV0oYXJnKTsgdmFyIHZhbHVlID0gaW5mby52YWx1ZTsgfSBjYXRjaCAoZXJyb3IpIHsgcmVqZWN0KGVycm9yKTsgcmV0dXJuOyB9IGlmIChpbmZvLmRvbmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0gZWxzZSB7IHJldHVybiBQcm9taXNlLnJlc29sdmUodmFsdWUpLnRoZW4oZnVuY3Rpb24gKHZhbHVlKSB7IHN0ZXAoXCJuZXh0XCIsIHZhbHVlKTsgfSwgZnVuY3Rpb24gKGVycikgeyBzdGVwKFwidGhyb3dcIiwgZXJyKTsgfSk7IH0gfSByZXR1cm4gc3RlcChcIm5leHRcIik7IH0pOyB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChTdG9yZSkge1xuICBTdG9yZSA9IG5ldyBTdG9yZSgpO1xuXG4gIHZhciBEYXRhU3RvcmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gRGF0YVN0b3JlKCkge1xuICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIERhdGFTdG9yZSk7XG5cbiAgICAgIF9leHQyLmRlZmF1bHQuZXh0ZW5kKERhdGFTdG9yZS5wcm90b3R5cGUsIHtcbiAgICAgICAgYXV0b0xvYWQ6IFN0b3JlLmF1dG9Mb2FkLFxuICAgICAgICBkYXRhOiBbXSxcbiAgICAgICAgb2JzZXJ2YWJsZTogX29ic2VydmFibGUyLmRlZmF1bHQuY3JlYXRlKCksXG4gICAgICAgIG1vZGlmaWVkUmVjb3Jkczoge30sXG4gICAgICAgIHBhZ2VTaXplOiBTdG9yZS5wYWdlU2l6ZSxcbiAgICAgICAgcHJveHk6IFN0b3JlLnByb3h5LFxuICAgICAgICBzdG9yZUlkOiBTdG9yZS5jb25zdHJ1Y3Rvci5uYW1lXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoRGF0YVN0b3JlLCBbe1xuICAgICAga2V5OiAnc3Vic2NyaWJlJyxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBzdWJzY3JpYmUob2JzZXJ2ZXIpIHtcbiAgICAgICAgdGhpcy5vYnNlcnZhYmxlLnN1YnNjcmliZShvYnNlcnZlcik7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiAndW5zdWJzY3JpYmUnLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHVuc3Vic2NyaWJlKG9ic2VydmVyKSB7XG4gICAgICAgIHRoaXMub2JzZXJ2YWJsZS51bnN1YnNjcmliZShvYnNlcnZlcik7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiAncmVtb3ZlQWxsJyxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW1vdmVBbGwoKSB7XG4gICAgICAgIHRoaXMuZGF0YSA9IFtdO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogJ2xvYWREYXRhJyxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBsb2FkRGF0YShkYXRhKSB7XG4gICAgICAgIHRoaXMuZGF0YSA9IHRoaXMucHJveHkucmVhZGVyICYmIHRoaXMucHJveHkucmVhZGVyLnJvb3RQcm9wZXJ0eSA/IGRhdGFbdGhpcy5wcm94eS5yZWFkZXIucm9vdFByb3BlcnR5XSA6IGRhdGE7XG4gICAgICAgIGlmICh0aGlzLnBhZ2VTaXplKSB7XG4gICAgICAgICAgdGhpcy5wYWdlID0gZGF0YTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm9ic2VydmFibGUuY2FsbCh0aGlzKTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6ICdsb2FkJyxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfcmVmID0gX2FzeW5jVG9HZW5lcmF0b3IocmVnZW5lcmF0b3JSdW50aW1lLm1hcmsoZnVuY3Rpb24gX2NhbGxlZShwcm94eSkge1xuICAgICAgICAgIHZhciByZXNwb25zZTtcbiAgICAgICAgICByZXR1cm4gcmVnZW5lcmF0b3JSdW50aW1lLndyYXAoZnVuY3Rpb24gX2NhbGxlZSQoX2NvbnRleHQpIHtcbiAgICAgICAgICAgIHdoaWxlICgxKSB7XG4gICAgICAgICAgICAgIHN3aXRjaCAoX2NvbnRleHQucHJldiA9IF9jb250ZXh0Lm5leHQpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICBfY29udGV4dC5uZXh0ID0gMjtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBfYWpheDIuZGVmYXVsdC5yZXF1ZXN0KHByb3h5IHx8IHRoaXMucHJveHkpO1xuXG4gICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgcmVzcG9uc2UgPSBfY29udGV4dC5zZW50O1xuXG4gICAgICAgICAgICAgICAgICByZXNwb25zZSAmJiB0aGlzLmxvYWREYXRhKHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBfY29udGV4dC5hYnJ1cHQoJ3JldHVybicsIHRoaXMpO1xuXG4gICAgICAgICAgICAgICAgY2FzZSA1OlxuICAgICAgICAgICAgICAgIGNhc2UgJ2VuZCc6XG4gICAgICAgICAgICAgICAgICByZXR1cm4gX2NvbnRleHQuc3RvcCgpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSwgX2NhbGxlZSwgdGhpcyk7XG4gICAgICAgIH0pKTtcblxuICAgICAgICBmdW5jdGlvbiBsb2FkKF94KSB7XG4gICAgICAgICAgcmV0dXJuIF9yZWYuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBsb2FkO1xuICAgICAgfSgpXG4gICAgfSwge1xuICAgICAga2V5OiAnbG9hZFBhZ2UnLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGxvYWRQYWdlKHBhZ2UpIHtcbiAgICAgICAgdmFyIHByb3h5ID0gX2V4dDIuZGVmYXVsdC5leHRlbmQoe30sIHRoaXMucHJveHksIHsgdXJsOiB0aGlzLnByb3h5LnVybCArICc/cGFnZT0nICsgcGFnZSB9KTtcbiAgICAgICAgcmV0dXJuIGxvYWQocHJveHkpO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogJ2NvbW1pdENoYW5nZXMnLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNvbW1pdENoYW5nZXMoKSB7XG4gICAgICAgIHRoaXMubW9kaWZpZWRSZWNvcmRzID0ge307XG4gICAgICAgIHRoaXMub2JzZXJ2YWJsZS5jYWxsKHRoaXMpO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogJ3VwZGF0ZVJlY29yZCcsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gdXBkYXRlUmVjb3JkKHJlY29yZCwgZmllbGROYW1lLCBuZXdWYWx1ZSkge1xuICAgICAgICAhdGhpcy5tb2RpZmllZFJlY29yZHNbcmVjb3JkLmlkXSAmJiAodGhpcy5tb2RpZmllZFJlY29yZHNbcmVjb3JkLmlkXSA9IG5ldyBfbW9kZWwyLmRlZmF1bHQocmVjb3JkKSk7XG4gICAgICAgIHZhciBtb2RpZmllZFJlY29yZCA9IHRoaXMubW9kaWZpZWRSZWNvcmRzW3JlY29yZC5pZF07XG4gICAgICAgIG1vZGlmaWVkUmVjb3JkLnNldChmaWVsZE5hbWUsIG5ld1ZhbHVlKTtcbiAgICAgICAgcmVjb3JkW2ZpZWxkTmFtZV0gPSBuZXdWYWx1ZTtcbiAgICAgICAgdGhpcy5vYnNlcnZhYmxlLmNhbGwodGhpcyk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiAncmVqZWN0Q2hhbmdlcycsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gcmVqZWN0Q2hhbmdlcygpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgICBfbGlzdDIuZGVmYXVsdC5vZih0aGlzLmRhdGEpLmVhY2goZnVuY3Rpb24gKHJlY29yZCwgaW5kZXgsIGRhdGEpIHtcbiAgICAgICAgICBpZiAoX3RoaXMubW9kaWZpZWRSZWNvcmRzW3JlY29yZC5pZF0pIHtcbiAgICAgICAgICAgIGRhdGFbaW5kZXhdID0gX2V4dDIuZGVmYXVsdC5leHRlbmQoe30sIF90aGlzLm1vZGlmaWVkUmVjb3Jkc1tyZWNvcmQuaWRdLnBoYW50b20pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuY29tbWl0Q2hhbmdlcygpO1xuICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBEYXRhU3RvcmU7XG4gIH0oKTtcblxuICByZXR1cm4gbmV3IERhdGFTdG9yZSgpO1xufTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB1bmRlZmluZWQ7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfZXh0ID0gcmVxdWlyZSgnLi4vY29yZS9leHQnKTtcblxudmFyIF9leHQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZXh0KTtcblxudmFyIF9saXN0ID0gcmVxdWlyZSgnLi4vY29yZS9saXN0Jyk7XG5cbnZhciBfbGlzdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9saXN0KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIEV2ZW50T2JzZXJ2YWJsZSA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gRXZlbnRPYnNlcnZhYmxlKHRhcmdldCwgZXZlbnROYW1lKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEV2ZW50T2JzZXJ2YWJsZSk7XG5cbiAgICBfZXh0Mi5kZWZhdWx0LmV4dGVuZChFdmVudE9ic2VydmFibGUucHJvdG90eXBlLCB7XG4gICAgICB0YXJnZXQ6IHRhcmdldCxcbiAgICAgIGV2ZW50TmFtZTogZXZlbnROYW1lXG4gICAgfSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoRXZlbnRPYnNlcnZhYmxlLCBbe1xuICAgIGtleTogJ3N1YnNjcmliZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHN1YnNjcmliZShzdWJzY3JpYmVyKSB7XG4gICAgICB0aGlzLnRhcmdldC5hZGRFdmVudExpc3RlbmVyKHRoaXMuZXZlbnROYW1lLCBzdWJzY3JpYmVyKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gRXZlbnRPYnNlcnZhYmxlO1xufSgpO1xuXG52YXIgT2JzZXJ2YWJsZSA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gT2JzZXJ2YWJsZSgpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgT2JzZXJ2YWJsZSk7XG5cbiAgICB0aGlzLm9ic2VydmVycyA9IFtdO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKE9ic2VydmFibGUsIFt7XG4gICAga2V5OiAnc3Vic2NyaWJlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gc3Vic2NyaWJlKG9ic2VydmVyKSB7XG4gICAgICB0aGlzLm9ic2VydmVycy5wdXNoKG9ic2VydmVyKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICd1bnN1YnNjcmliZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHVuc3Vic2NyaWJlKG9ic2VydmVyKSB7XG4gICAgICBfbGlzdDIuZGVmYXVsdC5vZih0aGlzLm9ic2VydmVycykuZWFjaChmdW5jdGlvbiAodmFsdWUsIGluZGV4LCBvYnNlcnZlcnMpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlID09PSBvYnNlcnZlciAmJiBkZWxldGUgb2JzZXJ2ZXJzW2luZGV4XTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2NhbGwnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjYWxsKCkge1xuICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICAgIH1cblxuICAgICAgX2xpc3QyLmRlZmF1bHQub2YodGhpcy5vYnNlcnZlcnMpLmVhY2goZnVuY3Rpb24gKG9ic2VydmVyKSB7XG4gICAgICAgIHJldHVybiBvYnNlcnZlci5hcHBseShfdGhpcywgYXJncyk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1dLCBbe1xuICAgIGtleTogJ2NyZWF0ZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNyZWF0ZSgpIHtcbiAgICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZSgpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2Zyb21FdmVudCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGZyb21FdmVudCh0YXJnZXQsIGV2ZW50TmFtZSkge1xuICAgICAgcmV0dXJuIG5ldyBFdmVudE9ic2VydmFibGUodGFyZ2V0LCBldmVudE5hbWUpO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBPYnNlcnZhYmxlO1xufSgpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBPYnNlcnZhYmxlOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuTGluayA9IGV4cG9ydHMuUm91dGUgPSBleHBvcnRzLk9ic2VydmFibGUgPSBleHBvcnRzLkNvbnRhaW5lciA9IGV4cG9ydHMuU2VydmljZSA9IGV4cG9ydHMuTW9kZWwgPSBleHBvcnRzLlN0b3JlID0gZXhwb3J0cy5DYWNoZSA9IGV4cG9ydHMuQWpheCA9IGV4cG9ydHMuTWFwID0gZXhwb3J0cy5MaXN0ID0gZXhwb3J0cy5TdHJpbmcgPSB1bmRlZmluZWQ7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7IC8qKlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogaW5kZXguanNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBUaGlzIGlzIHRoZSBlbnRyeSBmaWxlIGZvciB0aGUgYXBwbGljYXRpb24sIG9ubHkgc2V0dXAgYW5kIGJvaWxlcnBsYXRlIGNvZGUuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cblxudmFyIF9zdHJpbmcgPSByZXF1aXJlKCcuL2NvcmUvc3RyaW5nJyk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnU3RyaW5nJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc3RyaW5nKS5kZWZhdWx0O1xuICB9XG59KTtcblxudmFyIF9saXN0ID0gcmVxdWlyZSgnLi9jb3JlL2xpc3QnKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaXN0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbGlzdCkuZGVmYXVsdDtcbiAgfVxufSk7XG5cbnZhciBfbWFwID0gcmVxdWlyZSgnLi9jb3JlL21hcCcpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ01hcCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX21hcCkuZGVmYXVsdDtcbiAgfVxufSk7XG5cbnZhciBfYWpheCA9IHJlcXVpcmUoJy4vZGF0YS9hamF4Jyk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnQWpheCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2FqYXgpLmRlZmF1bHQ7XG4gIH1cbn0pO1xuXG52YXIgX2NhY2hlID0gcmVxdWlyZSgnLi9kYXRhL2NhY2hlJyk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnQ2FjaGUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jYWNoZSkuZGVmYXVsdDtcbiAgfVxufSk7XG5cbnZhciBfc3RvcmUgPSByZXF1aXJlKCcuL2RhdGEvc3RvcmUnKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdTdG9yZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3N0b3JlKS5kZWZhdWx0O1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTW9kZWwnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zdG9yZSkuZGVmYXVsdDtcbiAgfVxufSk7XG5cbnZhciBfc2VydmljZSA9IHJlcXVpcmUoJy4vYXBwL3NlcnZpY2UnKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdTZXJ2aWNlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2VydmljZSkuZGVmYXVsdDtcbiAgfVxufSk7XG5cbnZhciBfY29udGFpbmVyID0gcmVxdWlyZSgnLi9hcHAvY29udGFpbmVyJyk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnQ29udGFpbmVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY29udGFpbmVyKS5kZWZhdWx0O1xuICB9XG59KTtcblxudmFyIF9vYnNlcnZhYmxlID0gcmVxdWlyZSgnLi9taXhpbi9vYnNlcnZhYmxlJyk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnT2JzZXJ2YWJsZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX29ic2VydmFibGUpLmRlZmF1bHQ7XG4gIH1cbn0pO1xuXG52YXIgX3JvdXRlciA9IHJlcXVpcmUoJy4vY29tcG9uZW50cy9yb3V0ZXInKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdSb3V0ZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9yb3V0ZXIuUm91dGU7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaW5rJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX3JvdXRlci5MaW5rO1xuICB9XG59KTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3JlYWN0RG9tID0gcmVxdWlyZSgncmVhY3QtZG9tJyk7XG5cbnZhciBfZXh0ID0gcmVxdWlyZSgnLi9jb3JlL2V4dCcpO1xuXG52YXIgX2V4dDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9leHQpO1xuXG52YXIgX2FqYXgyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYWpheCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9hc3luY1RvR2VuZXJhdG9yKGZuKSB7IHJldHVybiBmdW5jdGlvbiAoKSB7IHZhciBnZW4gPSBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgeyBmdW5jdGlvbiBzdGVwKGtleSwgYXJnKSB7IHRyeSB7IHZhciBpbmZvID0gZ2VuW2tleV0oYXJnKTsgdmFyIHZhbHVlID0gaW5mby52YWx1ZTsgfSBjYXRjaCAoZXJyb3IpIHsgcmVqZWN0KGVycm9yKTsgcmV0dXJuOyB9IGlmIChpbmZvLmRvbmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0gZWxzZSB7IHJldHVybiBQcm9taXNlLnJlc29sdmUodmFsdWUpLnRoZW4oZnVuY3Rpb24gKHZhbHVlKSB7IHN0ZXAoXCJuZXh0XCIsIHZhbHVlKTsgfSwgZnVuY3Rpb24gKGVycikgeyBzdGVwKFwidGhyb3dcIiwgZXJyKTsgfSk7IH0gfSByZXR1cm4gc3RlcChcIm5leHRcIik7IH0pOyB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBSZXh0ID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBSZXh0KCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBSZXh0KTtcblxuICAgIF9leHQyLmRlZmF1bHQuZXh0ZW5kKFJleHQucHJvdG90eXBlLCB7XG4gICAgICBleHRlbmQ6IF9leHQyLmRlZmF1bHQuZXh0ZW5kLFxuICAgICAgYWpheDogZnVuY3Rpb24gYWpheChzZXR0aW5ncykge1xuICAgICAgICByZXR1cm4gX2FqYXgyLmRlZmF1bHQucmVxdWVzdChzZXR0aW5ncyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoUmV4dCwgW3tcbiAgICBrZXk6ICdib290c3RyYXAnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgX3JlZiA9IF9hc3luY1RvR2VuZXJhdG9yKHJlZ2VuZXJhdG9yUnVudGltZS5tYXJrKGZ1bmN0aW9uIF9jYWxsZWUoX3JlZjIpIHtcbiAgICAgICAgdmFyIHNlbGVjdG9yID0gX3JlZjIuc2VsZWN0b3IsXG4gICAgICAgICAgICBjb21wb25lbnQgPSBfcmVmMi5jb21wb25lbnQsXG4gICAgICAgICAgICBpbml0ID0gX3JlZjIuaW5pdDtcbiAgICAgICAgcmV0dXJuIHJlZ2VuZXJhdG9yUnVudGltZS53cmFwKGZ1bmN0aW9uIF9jYWxsZWUkKF9jb250ZXh0KSB7XG4gICAgICAgICAgd2hpbGUgKDEpIHtcbiAgICAgICAgICAgIHN3aXRjaCAoX2NvbnRleHQucHJldiA9IF9jb250ZXh0Lm5leHQpIHtcbiAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIGlmICghd2luZG93LmxvY2F0aW9uLmhhc2gpIHtcbiAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gJy8nO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBfY29udGV4dC5uZXh0ID0gMztcbiAgICAgICAgICAgICAgICByZXR1cm4gaW5pdCgpO1xuXG4gICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAoMCwgX3JlYWN0RG9tLnJlbmRlcikoX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoY29tcG9uZW50LCB7fSksIF9leHQyLmRlZmF1bHQuZ2V0QnlJZChzZWxlY3RvcikpO1xuXG4gICAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgY2FzZSAnZW5kJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gX2NvbnRleHQuc3RvcCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSwgX2NhbGxlZSwgdGhpcyk7XG4gICAgICB9KSk7XG5cbiAgICAgIGZ1bmN0aW9uIGJvb3RzdHJhcChfeCkge1xuICAgICAgICByZXR1cm4gX3JlZi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gYm9vdHN0cmFwO1xuICAgIH0oKVxuICB9XSk7XG5cbiAgcmV0dXJuIFJleHQ7XG59KCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IG5ldyBSZXh0KCk7IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5NdXRhdGlvblR5cGUgPSB1bmRlZmluZWQ7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfc3RyaW5nID0gcmVxdWlyZSgnLi8uLi9jb3JlL3N0cmluZycpO1xuXG52YXIgX3N0cmluZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zdHJpbmcpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfYXN5bmNUb0dlbmVyYXRvcihmbikgeyByZXR1cm4gZnVuY3Rpb24gKCkgeyB2YXIgZ2VuID0gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHsgZnVuY3Rpb24gc3RlcChrZXksIGFyZykgeyB0cnkgeyB2YXIgaW5mbyA9IGdlbltrZXldKGFyZyk7IHZhciB2YWx1ZSA9IGluZm8udmFsdWU7IH0gY2F0Y2ggKGVycm9yKSB7IHJlamVjdChlcnJvcik7IHJldHVybjsgfSBpZiAoaW5mby5kb25lKSB7IHJlc29sdmUodmFsdWUpOyB9IGVsc2UgeyByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHZhbHVlKS50aGVuKGZ1bmN0aW9uICh2YWx1ZSkgeyBzdGVwKFwibmV4dFwiLCB2YWx1ZSk7IH0sIGZ1bmN0aW9uIChlcnIpIHsgc3RlcChcInRocm93XCIsIGVycik7IH0pOyB9IH0gcmV0dXJuIHN0ZXAoXCJuZXh0XCIpOyB9KTsgfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgTXV0YXRpb25UeXBlID0gZXhwb3J0cy5NdXRhdGlvblR5cGUgPSB7XG4gIFBPU1Q6ICdwb3N0JyxcbiAgUFVUOiAncHV0JyxcbiAgREVMRVRFOiAnZGVsZXRlJ1xufTtcblxudmFyIFhociA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gWGhyKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBYaHIpO1xuXG4gICAgdGhpcy5CQVNFX1VSTCA9IG51bGw7XG4gICAgdGhpcy54aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICB0aGlzLmFqYXhCZWZvcmUgPSBmdW5jdGlvbiAoKSB7LyogdG8gYmUgaW1wbGVtZW50ZWQgKi99O1xuICAgIHRoaXMuYWpheEVycm9yID0gZnVuY3Rpb24gKGVycm9yKSB7LyogdG8gYmUgaW1wbGVtZW50ZWQgKi99O1xuICAgIHRoaXMuYWpheENvbXBsZXRlID0gZnVuY3Rpb24gKCkgey8qIHRvIGJlIGltcGxlbWVudGVkICovfTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhYaHIsIFt7XG4gICAga2V5OiAnYWpheCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBfcmVmID0gX2FzeW5jVG9HZW5lcmF0b3IocmVnZW5lcmF0b3JSdW50aW1lLm1hcmsoZnVuY3Rpb24gX2NhbGxlZShfcmVmMikge1xuICAgICAgICB2YXIgdXJsID0gX3JlZjIudXJsLFxuICAgICAgICAgICAgX3JlZjIkbWV0aG9kID0gX3JlZjIubWV0aG9kLFxuICAgICAgICAgICAgbWV0aG9kID0gX3JlZjIkbWV0aG9kID09PSB1bmRlZmluZWQgPyAnR0VUJyA6IF9yZWYyJG1ldGhvZCxcbiAgICAgICAgICAgIHJlY29yZCA9IF9yZWYyLnJlY29yZCxcbiAgICAgICAgICAgIG5leHQgPSBfcmVmMi5uZXh0LFxuICAgICAgICAgICAgZXJyb3IgPSBfcmVmMi5lcnJvcixcbiAgICAgICAgICAgIGNvbXBsZXRlID0gX3JlZjIuY29tcGxldGU7XG4gICAgICAgIHZhciByZXNwb25zZTtcbiAgICAgICAgcmV0dXJuIHJlZ2VuZXJhdG9yUnVudGltZS53cmFwKGZ1bmN0aW9uIF9jYWxsZWUkKF9jb250ZXh0KSB7XG4gICAgICAgICAgd2hpbGUgKDEpIHtcbiAgICAgICAgICAgIHN3aXRjaCAoX2NvbnRleHQucHJldiA9IF9jb250ZXh0Lm5leHQpIHtcbiAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIF9jb250ZXh0LnByZXYgPSAwO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5hamF4QmVmb3JlKCk7XG4gICAgICAgICAgICAgICAgX2NvbnRleHQubmV4dCA9IDQ7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucHJvbWlzZSh7IHVybDogdXJsLCBtZXRob2Q6IG1ldGhvZCwgcmVjb3JkOiByZWNvcmQgfSk7XG5cbiAgICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgIHJlc3BvbnNlID0gX2NvbnRleHQuc2VudDtcblxuICAgICAgICAgICAgICAgIG5leHQgJiYgbmV4dChyZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgX2NvbnRleHQubmV4dCA9IDEyO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgIGNhc2UgODpcbiAgICAgICAgICAgICAgICBfY29udGV4dC5wcmV2ID0gODtcbiAgICAgICAgICAgICAgICBfY29udGV4dC50MCA9IF9jb250ZXh0WydjYXRjaCddKDApO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5hamF4RXJyb3IoX2NvbnRleHQudDApO1xuICAgICAgICAgICAgICAgIGVycm9yICYmIGVycm9yKF9jb250ZXh0LnQwKTtcblxuICAgICAgICAgICAgICBjYXNlIDEyOlxuICAgICAgICAgICAgICAgIF9jb250ZXh0LnByZXYgPSAxMjtcblxuICAgICAgICAgICAgICAgIHRoaXMuYWpheENvbXBsZXRlKCk7XG4gICAgICAgICAgICAgICAgY29tcGxldGUgJiYgY29tcGxldGUoKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gX2NvbnRleHQuZmluaXNoKDEyKTtcblxuICAgICAgICAgICAgICBjYXNlIDE2OlxuICAgICAgICAgICAgICBjYXNlICdlbmQnOlxuICAgICAgICAgICAgICAgIHJldHVybiBfY29udGV4dC5zdG9wKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9LCBfY2FsbGVlLCB0aGlzLCBbWzAsIDgsIDEyLCAxNl1dKTtcbiAgICAgIH0pKTtcblxuICAgICAgZnVuY3Rpb24gYWpheChfeCkge1xuICAgICAgICByZXR1cm4gX3JlZi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gYWpheDtcbiAgICB9KClcbiAgfSwge1xuICAgIGtleTogJ3Byb21pc2UnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBwcm9taXNlKHNldHRpbmdzKSB7XG4gICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBfdGhpcy5yZXF1ZXN0KHNldHRpbmdzLCBmdW5jdGlvbiAoZXJyLCByZXMpIHtcbiAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmVzb2x2ZShyZXMpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3JlcXVlc3QnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZXF1ZXN0KF9yZWYzLCBkb25lKSB7XG4gICAgICB2YXIgdXJsID0gX3JlZjMudXJsLFxuICAgICAgICAgIG1ldGhvZCA9IF9yZWYzLm1ldGhvZCxcbiAgICAgICAgICByZWNvcmQgPSBfcmVmMy5yZWNvcmQ7XG5cbiAgICAgIGlmICh0aGlzLkJBU0VfVVJMKSB7XG4gICAgICAgIHVybCA9IHRoaXMuQkFTRV9VUkwgKyAnLycgKyB1cmw7XG4gICAgICB9XG4gICAgICBpZiAobWV0aG9kID09PSAnZ2V0JyAmJiByZWNvcmQgIT09IG51bGwpIHtcbiAgICAgICAgdXJsID0gdXJsICsgJz8nICsgX3N0cmluZzIuZGVmYXVsdC50b1F1ZXJ5U3RyaW5nKHJlY29yZCk7XG4gICAgICB9XG4gICAgICB2YXIgeGhyID0gdGhpcy54aHI7XG4gICAgICB4aHIub3BlbihtZXRob2QsIHVybCwgdHJ1ZSk7XG4gICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcignQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLTgnKTtcbiAgICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh4aHIucmVhZHlTdGF0ZSA9PT0gWE1MSHR0cFJlcXVlc3QuRE9ORSkge1xuICAgICAgICAgIGlmICh4aHIuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICAgIGRvbmUobnVsbCwgSlNPTi5wYXJzZSh4aHIucmVzcG9uc2VUZXh0KSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgIGRvbmUoSlNPTi5wYXJzZSh4aHIucmVzcG9uc2VUZXh0KSk7XG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgIGRvbmUoeGhyLnJlc3BvbnNlVGV4dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgeGhyLnNlbmQocmVjb3JkICE9PSBudWxsID8gSlNPTi5zdHJpbmdpZnkocmVjb3JkKSA6IG51bGwpO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBYaHI7XG59KCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IG5ldyBYaHIoKTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBFTVBUWV9NQVAgPSB7fTtcblxudmFyIE1hcCA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gTWFwKGtleVZhbHVlcykge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBNYXApO1xuXG4gICAgdGhpcy5tYXAgPSBFTVBUWV9NQVA7XG4gICAgaWYgKGtleVZhbHVlcykge1xuICAgICAgaWYgKGtleVZhbHVlcy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgdGhpcy5tYXAgPSBrZXlWYWx1ZXNbMF07XG4gICAgICB9IGVsc2UgaWYgKGtleVZhbHVlcy5sZW5ndGggJSAyICE9PSAwKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyB2YWx1ZSBmb3Iga2V5OiAnICsga2V5VmFsdWVzW2tleVZhbHVlcy5sZW5ndGggLSAxXSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmb3IgKHZhciBpbmRleCA9IDAsIGVsZW1lbnQ7IChlbGVtZW50ID0ga2V5VmFsdWVzW2luZGV4XSkgIT0gbnVsbDsgaW5kZXggKz0gMikge1xuICAgICAgICAgIHRoaXMubWFwW2VsZW1lbnRdID0ga2V5VmFsdWVzW2luZGV4ICsgMV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoTWFwLCBbe1xuICAgIGtleTogJ2VhY2gnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBlYWNoKGl0ZXJhdGVlKSB7XG4gICAgICBmb3IgKHZhciBrZXkgaW4gdGhpcy5tYXApIHtcbiAgICAgICAgaXRlcmF0ZWUoa2V5LCB0aGlzLm1hcFtrZXldLCB0aGlzLm1hcCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gIH1dLCBbe1xuICAgIGtleTogJ29mJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gb2YoKSAvKi4uLmtleVZhbHVlcyove1xuICAgICAgcmV0dXJuIG5ldyBNYXAoYXJndW1lbnRzKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gTWFwO1xufSgpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBNYXA7IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfbWFwID0gcmVxdWlyZSgnLi8uLi9jb3JlL21hcCcpO1xuXG52YXIgX21hcDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9tYXApO1xuXG52YXIgX3hociA9IHJlcXVpcmUoJy4vLi4vYWpheC94aHInKTtcblxudmFyIF94aHIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfeGhyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgc3RvcmUgPSBmdW5jdGlvbiBzdG9yZShjb25maWcpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChXcmFwcGVkQ29tcG9uZW50KSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gICAgICBfaW5oZXJpdHMoX2NsYXNzLCBfQ29tcG9uZW50KTtcblxuICAgICAgZnVuY3Rpb24gX2NsYXNzKHByb3BzKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBfY2xhc3MpO1xuXG4gICAgICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChfY2xhc3MuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihfY2xhc3MpKS5jYWxsKHRoaXMsIHByb3BzKSk7XG5cbiAgICAgICAgX3RoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgc3RvcmU6IHtcbiAgICAgICAgICAgIGRhdGE6IG51bGxcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICAgIH1cblxuICAgICAgX2NyZWF0ZUNsYXNzKF9jbGFzcywgW3tcbiAgICAgICAga2V5OiAnY29tcG9uZW50V2lsbE1vdW50JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICAgICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgICAgIHZhciBzdG9yZSA9IHRoaXMuc3RhdGUuc3RvcmU7XG5cbiAgICAgICAgICBfbWFwMi5kZWZhdWx0Lm9mKGNvbmZpZy5tdXRhdGlvbnMpLmVhY2goZnVuY3Rpb24gKG5hbWUsIG11dGF0b3IpIHtcbiAgICAgICAgICAgIHN0b3JlW25hbWVdID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIF90aGlzMi5jb21taXRVcGRhdGUobXV0YXRvciwgb3B0aW9ucyk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ2NvbXBvbmVudERpZE1vdW50JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgICAgICAgdmFyIGVuZHBvaW50ID0gY29uZmlnLmVuZHBvaW50O1xuXG4gICAgICAgICAgaWYgKCFlbmRwb2ludCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICB2YXIgcmVjb3JkID0gZW5kcG9pbnQuaW5pdGlhbFZhcmlhYmxlcyA/IGVuZHBvaW50LmluaXRpYWxWYXJpYWJsZXMoKSA6IG51bGw7XG4gICAgICAgICAgZW5kcG9pbnQgPSBlbmRwb2ludC5uYW1lIHx8IGVuZHBvaW50O1xuICAgICAgICAgIF94aHIyLmRlZmF1bHQuYWpheCh7XG4gICAgICAgICAgICB1cmw6IGVuZHBvaW50LFxuICAgICAgICAgICAgcmVjb3JkOiByZWNvcmQsXG4gICAgICAgICAgICBuZXh0OiBmdW5jdGlvbiBuZXh0KHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgIHZhciBuZXh0ID0gY29uZmlnLm5leHQsXG4gICAgICAgICAgICAgICAgICBzdG9yZSA9IF90aGlzMy5zdGF0ZS5zdG9yZTtcblxuICAgICAgICAgICAgICBzdG9yZS5kYXRhID0gbmV4dCA/IG5leHQocmVzcG9uc2UpIDogcmVzcG9uc2U7XG4gICAgICAgICAgICAgIF90aGlzMy5zZXRTdGF0ZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgc3RvcmU6IHN0b3JlIH07XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ2NvbW1pdFVwZGF0ZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBjb21taXRVcGRhdGUobXV0YXRvciwgb3B0aW9ucykge1xuICAgICAgICAgIHZhciBlbmRwb2ludCA9IG9wdGlvbnMucGF0aCB8fCBtdXRhdG9yLnBhdGg7XG4gICAgICAgICAgX3hocjIuZGVmYXVsdC5hamF4KHtcbiAgICAgICAgICAgIHVybDogZW5kcG9pbnQsXG4gICAgICAgICAgICBtZXRob2Q6IG11dGF0b3IudHlwZSxcbiAgICAgICAgICAgIHJlY29yZDogb3B0aW9ucy5yZWNvcmQsXG4gICAgICAgICAgICBuZXh0OiBvcHRpb25zLm5leHQsXG4gICAgICAgICAgICBlcnJvcjogb3B0aW9ucy5lcnJvcixcbiAgICAgICAgICAgIGNvbXBsZXRlOiBvcHRpb25zLmNvbXBsZXRlXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAncmVuZGVyJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgICAgICB2YXIgc3RvcmUgPSB0aGlzLnN0YXRlLnN0b3JlO1xuXG4gICAgICAgICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFdyYXBwZWRDb21wb25lbnQsIF9leHRlbmRzKHt9LCB0aGlzLnByb3BzLCB7IHN0b3JlOiBzdG9yZSB9KSk7XG4gICAgICAgIH1cbiAgICAgIH1dKTtcblxuICAgICAgcmV0dXJuIF9jbGFzcztcbiAgICB9KF9yZWFjdC5Db21wb25lbnQpO1xuICB9O1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gc3RvcmU7IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX3hociA9IHJlcXVpcmUoJy4vYWpheC94aHInKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdYaHInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF94aHIpLmRlZmF1bHQ7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdNdXRhdGlvblR5cGUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfeGhyLk11dGF0aW9uVHlwZTtcbiAgfVxufSk7XG5cbnZhciBfc3RvcmUgPSByZXF1aXJlKCcuL2RlY29yYXRvci9zdG9yZScpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1N0b3JlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc3RvcmUpLmRlZmF1bHQ7XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfSIsImNsYXNzIENvbmZpZyB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLl9jb25maWcgPSB7XHJcbiAgICAgIERPTlVUX0NIQVJUX0NPTkZJRzoge1xyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIGNvbHVtbnM6IFtdLFxyXG4gICAgICAgICAgdHlwZTogJ2RvbnV0J1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZG9udXQ6IHtcclxuICAgICAgICAgIHRpdGxlOiAnQ2FyZHMgcGVyIFR5cGUnXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhZGQoY29uZmlnKSB7XHJcbiAgICBPYmplY3QuYXNzaWduKHRoaXMuX2NvbmZpZywgY29uZmlnKVxyXG4gIH1cclxuXHJcbiAgZ2V0KGtleSkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2NvbmZpZ1trZXldXHJcbiAgfVxyXG5cclxuICBzZXQoa2V5LCB2YWx1ZSkge1xyXG4gICAgdGhpcy5fY29uZmlnW2tleV0gPSB2YWx1ZVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmV3IENvbmZpZyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgUm91dGUsIExpbmsgfSBmcm9tICdleHQtcmVhY3QnXHJcbmltcG9ydCBDb25maWcgZnJvbSAnfi9jb21tb24vY29uZmlnJ1xyXG5pbXBvcnQgTm90Rm91bmQgZnJvbSAnLi9ub3Rmb3VuZCdcclxuaW1wb3J0IERhc2hib2FyZCBmcm9tICcuL2Rhc2hib2FyZC9kYXNoYm9hcmQnXHJcbmltcG9ydCBTZWFyY2ggZnJvbSAnLi9zZWFyY2gvc2VhcmNoJ1xyXG5pbXBvcnQgVGVzdCBmcm9tICcuL3Rlc3QvdGVzdCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIDxzZWN0aW9uIGNsYXNzTmFtZT1cImQtZmxleCBmbGV4LWNvbHVtblwiPlxyXG4gICAgICA8aGVhZGVyPlxyXG4gICAgICAgIDxuYXYgY2xhc3NOYW1lPVwibmF2YmFyIG5hdmJhci10b2dnbGVhYmxlLW1kXCI+XHJcbiAgICAgICAgICA8TGluayB0bz1cIi9cIiBjbGFzc05hbWU9XCJuYXZiYXItYnJhbmRcIj5SZWFjdCBDTVM8L0xpbms+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbGxhcHNlIG5hdmJhci1jb2xsYXBzZVwiPlxyXG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2YmFyLW5hdiBtci1hdXRvXCI+XHJcbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICA8TGluayB0bz1cIi9cIiBjbGFzc05hbWU9XCJuYXYtbGlua1wiPkRhc2hib2FyZDwvTGluaz5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgdG89XCIvc2VhcmNoXCIgY2xhc3NOYW1lPVwibmF2LWxpbmtcIj5TZWFyY2g8L0xpbms+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgIDxMaW5rIHRvPVwiL3JlcG9ydGluZ1wiIGNsYXNzTmFtZT1cIm5hdi1saW5rXCI+UmVwb3J0aW5nPC9MaW5rPlxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICA8TGluayB0bz1cIi9hdWRpdC10cmFpbHNcIiBjbGFzc05hbWU9XCJuYXYtbGlua1wiPkF1ZGl0IFRyYWlsczwvTGluaz5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgdG89XCIvYW5hbHl0aWNzXCIgY2xhc3NOYW1lPVwibmF2LWxpbmtcIj5BbmFseXRpY3M8L0xpbms+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgIDxMaW5rIHRvPVwiL2FkbWluaXN0cmF0aW9uXCIgY2xhc3NOYW1lPVwibmF2LWxpbmtcIj5BZG1pbmlzdHJhdGlvbjwvTGluaz5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJuYXZiYXItdGV4dFwiPlxyXG4gICAgICAgICAgICAgIEhlbGxvLCA8c3Ryb25nPntDb25maWcuZ2V0KCduYW1lJyl9PC9zdHJvbmc+XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvbmF2PlxyXG4gICAgICA8L2hlYWRlcj5cclxuICAgICAgPG1haW4gY2xhc3NOYW1lPVwiZmxleFwiPlxyXG4gICAgICAgIDxSb3V0ZSBpbmRleCBjb21wb25lbnQ9e0Rhc2hib2FyZH0gLz5cclxuICAgICAgICA8Um91dGUgcGF0aD1cIi9zZWFyY2hcIiBjb21wb25lbnQ9e1NlYXJjaH0gLz5cclxuICAgICAgICA8Um91dGUgcGF0aD1cIi90ZXN0XCIgY29tcG9uZW50PXtUZXN0fSAvPlxyXG4gICAgICAgIDxSb3V0ZSBub3Rmb3VuZCBjb21wb25lbnQ9e05vdEZvdW5kfSAvPlxyXG4gICAgICA8L21haW4+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgfVxyXG59IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xyXG5cclxuZXhwb3J0IGNvbnN0IEJ1dHRvbiA9ICh7IHR5cGUgPSAnc2Vjb25kYXJ5JywgY2xhc3NOYW1lID0gJycsIHRleHQsIGNoaWxkcmVuLCAuLi5vdGhlcnMgfSkgPT4ge1xyXG4gIGNsYXNzTmFtZSA9IGBidG4gYnRuLXNtIGJ0bi0ke3R5cGV9ICR7Y2xhc3NOYW1lfWBcclxuICByZXR1cm4gPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPXtjbGFzc05hbWV9IHsuLi5vdGhlcnN9Pnt0ZXh0IHx8IGNoaWxkcmVufTwvYnV0dG9uPlxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgVGV4dCA9ICh7IGNsYXNzTmFtZSA9ICcnLCAuLi5vdGhlcnMgfSkgPT4ge1xyXG4gIGNsYXNzTmFtZSA9IGBmb3JtLWNvbnRyb2wgZm9ybS1jb250cm9sLXNtICR7Y2xhc3NOYW1lfWBcclxuICByZXR1cm4gPGlucHV0IGNsYXNzTmFtZT17Y2xhc3NOYW1lfSB0eXBlPVwidGV4dFwiIHsuLi5vdGhlcnN9IC8+XHJcbn0iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBSZXh0LCB7IENvbnRhaW5lciB9IGZyb20gJ2V4dC1yZWFjdCdcclxuaW1wb3J0IERhc2hib2FyZFN0b3JlIGZyb20gJ34vc3RvcmVzL2Rhc2hib2FyZCdcclxuaW1wb3J0IEFwcENvbmZpZyBmcm9tICd+L2NvbW1vbi9jb25maWcnXHJcbmltcG9ydCBWaXogZnJvbSAnfi91eC92aXonXHJcblxyXG5jb25zdCBET05VVF9DSEFSVF9DT05GSUcgPSBBcHBDb25maWcuZ2V0KCdET05VVF9DSEFSVF9DT05GSUcnKVxyXG5cclxuQENvbnRhaW5lcih7XHJcbiAgc3RvcmVzOiBbRGFzaGJvYXJkU3RvcmVdXHJcbn0pXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERhc2hib2FyZCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgY29uZmlnID0gRE9OVVRfQ0hBUlRfQ09ORklHLFxyXG4gICAgICAgICAgeyBkYXRhIH0gPSB0aGlzLnByb3BzLnN0b3Jlcy5EYXNoYm9hcmRTdG9yZVxyXG5cclxuICAgIGNvbmZpZy5kYXRhLmNvbHVtbnMgPSBkYXRhXHJcblxyXG4gICAgcmV0dXJuIDxzZWN0aW9uPlxyXG4gICAgICA8aDE+RGFzaGJvYXJkPC9oMT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgZGFzaGJvYXJkLXN0YXRcIj5cclxuICAgICAgICB7ZGF0YSAmJiBkYXRhLm1hcChncm91cCA9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tNFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGNhcmQgJHtncm91cFswXX1gfT5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYmxvY2tcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmlzdWFsXCI+PGkgY2xhc3NOYW1lPVwiZmEgZmEtNXggZmEtdXNlcnNcIiAvPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXRhaWxcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJudW1iZXJcIj57Z3JvdXBbMV19PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVzY1wiPntncm91cFswXX08L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8cD48L3A+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tOFwiPlxyXG4gICAgICAgICAgPFZpeiBjb25maWc9e2NvbmZpZ30gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS00XCI+XHJcbiAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGUgdGFibGUtc20gdGFibGUtaG92ZXIgdGFibGUtc3RyaXBlZFwiPlxyXG4gICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgPHRoPlR5cGU8L3RoPlxyXG4gICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cInRleHQtc20tcmlnaHRcIj5Ub3RhbCBDYXJkczwvdGg+XHJcbiAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgIHtkYXRhICYmIGRhdGEubWFwKGdyb3VwID0+XHJcbiAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgIDx0ZD57Z3JvdXBbMF19PC90ZD5cclxuICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRleHQtc20tcmlnaHRcIj57Z3JvdXBbMV19PC90ZD5cclxuICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gIH1cclxufSIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5vdEZvdW5kIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gPHNlY3Rpb24+XHJcbiAgICAgIDxoMT5Ob3QgRm91bmQ8L2gxPlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gIH1cclxufSIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IENhcmRTZXJ2aWNlIGZyb20gJ34vc2VydmljZXMvY2FyZCdcclxuaW1wb3J0IHsgQnV0dG9uLCBUZXh0IH0gZnJvbSAnfi9jb21wb25lbnRzL2Jvb3RzdHJhcCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlYXJjaEZvcm0gZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiA8c2VjdGlvbj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS00IG9mZnNldC1zbS0yIGZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgIDxUZXh0IHBsYWNlaG9sZGVyPVwiQ2FyZCBOYW1lXCIgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS00IGZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgIDxUZXh0IHBsYWNlaG9sZGVyPVwiQ2FyZCBUeXBlXCIgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tNCBvZmZzZXQtc20tMiBmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICA8VGV4dCBwbGFjZWhvbGRlcj1cIkFybW9yIFVzYWJsZVwiIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tNCBmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICA8VGV4dCBwbGFjZWhvbGRlcj1cIldlYXBvbiBVc2FibGVcIiAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXNtLWNlbnRlclwiPlxyXG4gICAgICAgIDxCdXR0b24gdHlwZT1cInByaW1hcnlcIiB0ZXh0PVwiRmlsdGVyXCIgb25DbGljaz17KCkgPT4gdGhpcy5vblNlYXJjaCgpfSAvPlxyXG4gICAgICAgIDxCdXR0b24gdGV4dD1cIkNsZWFyXCIgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgfVxyXG5cclxuICBvblNlYXJjaCgpIHtcclxuICAgIENhcmRTZXJ2aWNlLnNlYXJjaCh7IHR5cGU6ICdNZWxlZScgfSlcclxuICB9XHJcbn0iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBGYW1pbHlTdG9yZSBmcm9tICd+L3N0b3Jlcy9mYW1pbHknXHJcbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gJ2V4dC1yZWFjdCdcclxuXHJcblxyXG5AQ29udGFpbmVyKHtcclxuICBzdG9yZXM6IFtGYW1pbHlTdG9yZV1cclxufSlcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VhcmNoUmVzdWx0IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLnByb3BzLnN0b3Jlcy5GYW1pbHlTdG9yZSlcclxuICAgIHJldHVybiA8c2VjdGlvbj48L3NlY3Rpb24+XHJcbiAgfVxyXG59IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgU2VhcmNoRm9ybSBmcm9tICcuL3NlYXJjaC1mb3JtJ1xyXG5pbXBvcnQgU2VhcmNoUmVzdWx0IGZyb20gJy4vc2VhcmNoLXJlc3VsdCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlYXJjaCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIDxzZWN0aW9uPlxyXG4gICAgICA8aDE+U2VhcmNoPC9oMT5cclxuICAgICAgPFNlYXJjaEZvcm0gLz5cclxuICAgICAgPFNlYXJjaFJlc3VsdCAvPlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gIH1cclxufSIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgU3RvcmUsIE11dGF0aW9uVHlwZSB9IGZyb20gJ3JjLW1vZGVsJ1xyXG5cclxuQFN0b3JlKHtcclxuICBlbmRwb2ludDogJy9hcGkvdGVzdCcsXHJcbiAgbXV0YXRpb25zOiB7XHJcbiAgICBwb3N0OiB7XHJcbiAgICAgIHR5cGU6IE11dGF0aW9uVHlwZS5QT1NULFxyXG4gICAgICBwYXRoOiAnL2FwaS90ZXN0J1xyXG4gICAgfSxcclxuICAgIHB1dDoge1xyXG4gICAgICB0eXBlOiBNdXRhdGlvblR5cGUuUFVULFxyXG4gICAgICBwYXRoOiAnL2FwaS90ZXN0J1xyXG4gICAgfVxyXG4gIH1cclxufSlcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGVzdCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyBkYXRhIH0gPSB0aGlzLnByb3BzLnN0b3JlXHJcbiAgICByZXR1cm4gPHNlY3Rpb24gY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTEyXCI+e0pTT04uc3RyaW5naWZ5KGRhdGEpfTwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS0zXCI+PGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXNtXCIgb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVQb3N0KCl9PlBvc3Q8L2J1dHRvbj48L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tM1wiPjxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1zbVwiIG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlUHV0KCl9PlB1dDwvYnV0dG9uPjwvZGl2PlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gIH1cclxuXHJcbiAgaGFuZGxlUG9zdCgpIHtcclxuICAgIHRoaXMucHJvcHMuc3RvcmUucG9zdCh7XHJcbiAgICAgIHJlY29yZDoge30sXHJcbiAgICAgIG5leHQ6IChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKVxyXG4gICAgICB9LFxyXG4gICAgICBlcnJvcjogKGUpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlLmVycm9yKVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgaGFuZGxlUHV0KCkge1xyXG4gICAgdGhpcy5wcm9wcy5zdG9yZS5wdXQoe1xyXG4gICAgICByZWNvcmQ6IHt9LFxyXG4gICAgICBuZXh0OiAocmVzcG9uc2UpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSlcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcbn0iLCJpbXBvcnQgJ2JhYmVsLXBvbHlmaWxsJ1xyXG5pbXBvcnQgQXBwIGZyb20gJy4vY29tcG9uZW50cy9hcHAnXHJcbmltcG9ydCBSZXh0IGZyb20gJ2V4dC1yZWFjdCdcclxuaW1wb3J0IENvbW1vblNlcnZpY2UgZnJvbSAnLi9zZXJ2aWNlcy9jb21tb24nXHJcblxyXG5SZXh0LmJvb3RzdHJhcCh7XHJcbiAgc2VsZWN0b3I6ICdyZWFjdC1yb290JyxcclxuICBjb21wb25lbnQ6IEFwcCxcclxuICBpbml0OiBDb21tb25TZXJ2aWNlLmluaXRBcHBcclxufSkiLCJpbXBvcnQgeyBTZXJ2aWNlIH0gZnJvbSAnZXh0LXJlYWN0J1xyXG5pbXBvcnQgQ2FyZFN0b3JlIGZyb20gJ34vc3RvcmVzL2NhcmQnXHJcblxyXG5AU2VydmljZVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYXJkU2VydmljZSB7XHJcbiAgc2VhcmNoKGNyaXRlcmlhKSB7XHJcbiAgICBDYXJkU3RvcmUucGFyYW1zID0gY3JpdGVyaWFcclxuICAgIENhcmRTdG9yZS5sb2FkKClcclxuICB9XHJcbn0iLCJpbXBvcnQgUmV4dCwgeyBTZXJ2aWNlIH0gZnJvbSAnZXh0LXJlYWN0J1xyXG5pbXBvcnQgQ29uZmlnIGZyb20gJ34vY29tbW9uL2NvbmZpZydcclxuXHJcbkBTZXJ2aWNlXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbW1vblNlcnZpY2Uge1xyXG4gIGFzeW5jIGluaXRBcHAoKSB7XHJcbiAgICBDb25maWcuYWRkKGF3YWl0IFJleHQuYWpheCh7IHVybDogJy9hcGkvaW5pdCcgfSkpXHJcbiAgfVxyXG59IiwiaW1wb3J0IHsgU3RvcmUgfSBmcm9tICdleHQtcmVhY3QnXHJcblxyXG5AU3RvcmVcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FyZFN0b3JlIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMucHJveHkgPSB7XHJcbiAgICAgIHVybDogJy9hcGkvY2FyZHMnLFxyXG4gICAgICBtZXRob2Q6ICdwb3N0J1xyXG4gICAgfVxyXG4gIH1cclxufSIsImltcG9ydCB7IFN0b3JlIH0gZnJvbSAnZXh0LXJlYWN0J1xyXG5cclxuQFN0b3JlXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERhc2hib2FyZFN0b3JlIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMucHJveHkgPSB7XHJcbiAgICAgIHVybDogJy9hcGkvZGFzaGJvYXJkJ1xyXG4gICAgfVxyXG4gICAgdGhpcy5hdXRvTG9hZCA9IHRydWVcclxuICB9XHJcbn0iLCJpbXBvcnQgeyBTdG9yZSB9IGZyb20gJ2V4dC1yZWFjdCdcclxuXHJcbkBTdG9yZVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGYW1pbHlTdG9yZSB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLnByb3h5ID0ge1xyXG4gICAgICB1cmw6ICcvYXBpL2ZhbWlseSdcclxuICAgIH1cclxuICB9XHJcbn0iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBSZXh0IGZyb20gJ2V4dC1yZWFjdCdcclxuaW1wb3J0IHsgZmluZERPTU5vZGUgfSBmcm9tICdyZWFjdC1kb20nXHJcbmltcG9ydCBjMyBmcm9tICdjMydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZpeiBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICB0aGlzLnJlbmRlckNoYXJ0KHRoaXMucHJvcHMuY29uZmlnKVxyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcclxuICAgIHRoaXMucmVuZGVyQ2hhcnQobmV4dFByb3BzLmNvbmZpZylcclxuICB9XHJcblxyXG4gIHJlbmRlckNoYXJ0KGNvbmZpZykge1xyXG4gICAgY29uZmlnID0gUmV4dC5leHRlbmQoe30sIGNvbmZpZywge1xyXG4gICAgICBiaW5kdG86IGZpbmRET01Ob2RlKHRoaXMpXHJcbiAgICB9KVxyXG4gICAgYzMuZ2VuZXJhdGUoY29uZmlnKVxyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIDxzZWN0aW9uIC8+O1xyXG4gIH1cclxufSJdfQ==
