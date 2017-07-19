(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

require('babel-polyfill');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _extReact = require('ext-react');

var _extReact2 = _interopRequireDefault(_extReact);

var _common = require('./services/common');

var _common2 = _interopRequireDefault(_common);

var _viewport = require('./components/viewport/viewport');

var _viewport2 = _interopRequireDefault(_viewport);

var _card = require('./components/card/card');

var _card2 = _interopRequireDefault(_card);

var _notfound = require('./components/notfound/notfound');

var _notfound2 = _interopRequireDefault(_notfound);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

_extReact2.default.launch(_asyncToGenerator(regeneratorRuntime.mark(function _callee() {
  return regeneratorRuntime.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return _common2.default.initApp();

        case 2:
          return _context.abrupt('return', _react2.default.createElement(_viewport2.default, null));

        case 3:
        case 'end':
          return _context.stop();
      }
    }
  }, _callee, undefined);
})));

},{"./components/card/card":3,"./components/notfound/notfound":4,"./components/viewport/viewport":7,"./services/common":8,"babel-polyfill":"babel-polyfill","ext-react":"ext-react","react":"react"}],2:[function(require,module,exports){
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

},{}],3:[function(require,module,exports){
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

var _card = require('../../stores/card');

var _card2 = _interopRequireDefault(_card);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Card = (_dec = (0, _extReact.Route)('/'), _dec(_class = function (_Component) {
  _inherits(Card, _Component);

  function Card() {
    _classCallCheck(this, Card);

    return _possibleConstructorReturn(this, (Card.__proto__ || Object.getPrototypeOf(Card)).apply(this, arguments));
  }

  _createClass(Card, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      _card2.default.load();
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _extReact.Container,
        { className: 'panel-body' },
        _react2.default.createElement(
          'h1',
          null,
          'Characters'
        ),
        _react2.default.createElement(
          _extReact.Grid,
          { store: _card2.default },
          _react2.default.createElement('div', { text: 'ID', dataIndex: 'Id', style: { width: 150 } }),
          _react2.default.createElement('div', { text: 'Name', dataIndex: 'Name' }),
          _react2.default.createElement('div', { text: 'Type', dataIndex: 'Type' }),
          _react2.default.createElement('div', { text: 'Type', dataIndex: 'Class' }),
          _react2.default.createElement('div', { text: 'STR', dataIndex: 'STR', style: { width: 50, textAlign: 'center' } }),
          _react2.default.createElement('div', { text: 'AGI', dataIndex: 'AGI', style: { width: 50, textAlign: 'center' } }),
          _react2.default.createElement('div', { text: 'HP', dataIndex: 'HP', style: { width: 50, textAlign: 'center' } }),
          _react2.default.createElement('div', { text: 'DEX', dataIndex: 'DEX', style: { width: 50, textAlign: 'center' } }),
          _react2.default.createElement('div', { text: 'INT', dataIndex: 'INT', style: { width: 50, textAlign: 'center' } }),
          _react2.default.createElement('div', { text: 'SEN', dataIndex: 'SEN', style: { width: 50, textAlign: 'center' } }),
          _react2.default.createElement('div', { text: 'Armor Usable', dataIndex: 'ArmorUsable' })
        )
      );
    }
  }]);

  return Card;
}(_react.Component)) || _class);
exports.default = Card;

},{"../../stores/card":9,"ext-react":"ext-react","react":"react"}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _dec, _dec2, _class;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _extReact = require('ext-react');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _default = (_dec = (0, _extReact.Route)('*'), _dec2 = (0, _extReact.Component)({
  view: function view(_ref) {
    var $view = _ref.$view;
    return _react2.default.createElement(
      _extReact.Container,
      { className: 'panel-body' },
      _react2.default.createElement(
        'h1',
        null,
        $view.title
      )
    );
  }
}), _dec(_class = _dec2(_class = function _default() {
  _classCallCheck(this, _default);

  this.title = 'Not Found';
}) || _class) || _class);

exports.default = _default;

},{"ext-react":"ext-react","react":"react"}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _default = function (_Component) {
  _inherits(_default, _Component);

  function _default() {
    _classCallCheck(this, _default);

    return _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).apply(this, arguments));
  }

  _createClass(_default, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "footer",
        null,
        _react2.default.createElement(
          "div",
          { className: "row text-center" },
          "\xA9 2017 huytrongnguyen"
        )
      );
    }
  }]);

  return _default;
}(_react.Component);

exports.default = _default;

},{"react":"react"}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _extReact = require('ext-react');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _default = function (_Component) {
  _inherits(_default, _Component);

  function _default() {
    _classCallCheck(this, _default);

    return _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).apply(this, arguments));
  }

  _createClass(_default, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'header',
        { className: 'bg-inverse' },
        _react2.default.createElement(
          'div',
          { className: 'brand' },
          'React CMS'
        ),
        _react2.default.createElement(
          'div',
          { className: 'navbar' },
          _react2.default.createElement(
            'ul',
            { className: 'navbar-nav mr-auto' },
            _react2.default.createElement(
              _extReact.Link,
              { to: '/', className: 'nav-item' },
              'Characters'
            ),
            _react2.default.createElement(
              _extReact.Link,
              { to: '/items', className: 'nav-item' },
              'Items'
            )
          ),
          _react2.default.createElement(
            'div',
            null,
            'Hello, ',
            _react2.default.createElement(
              'strong',
              null,
              _extReact.Cache.get('configuration').name
            )
          )
        )
      );
    }
  }]);

  return _default;
}(_react.Component);

exports.default = _default;

},{"ext-react":"ext-react","react":"react"}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _extReact = require('ext-react');

var _header = require('./header');

var _header2 = _interopRequireDefault(_header);

var _footer = require('./footer');

var _footer2 = _interopRequireDefault(_footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _default = function (_Component) {
  _inherits(_default, _Component);

  function _default() {
    _classCallCheck(this, _default);

    return _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).apply(this, arguments));
  }

  _createClass(_default, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _extReact.Container,
        null,
        _react2.default.createElement(_header2.default, null),
        _react2.default.createElement(
          _extReact.Container,
          { hbox: true },
          _react2.default.createElement(
            _extReact.Container,
            { id: 'main-container' },
            _react2.default.createElement(_extReact.HashRouter, null)
          )
        ),
        _react2.default.createElement(_footer2.default, null)
      );
    }
  }]);

  return _default;
}(_react.Component);

exports.default = _default;

},{"./footer":5,"./header":6,"ext-react":"ext-react","react":"react"}],8:[function(require,module,exports){
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
                _context.t0 = _extReact.Cache;
                _context.next = 3;
                return _extReact2.default.ajax({ url: 'data/configuration.json' });

              case 3:
                _context.t1 = _context.sent;

                _context.t0.set.call(_context.t0, 'configuration', _context.t1);

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

},{"../common/config":2,"ext-react":"ext-react"}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extReact = require('ext-react');

exports.default = (0, _extReact.Store)({
  storeId: 'CardStore',
  proxy: {
    url: 'data/card.json'
  }
});

},{"ext-react":"ext-react"}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvYXBwLmpzIiwic3JjL2pzL2NvbW1vbi9jb25maWcuanMiLCJzcmMvanMvY29tcG9uZW50cy9jYXJkL2NhcmQuanN4Iiwic3JjL2pzL2NvbXBvbmVudHMvbm90Zm91bmQvbm90Zm91bmQuanN4Iiwic3JjL2pzL2NvbXBvbmVudHMvdmlld3BvcnQvZm9vdGVyLmpzeCIsInNyYy9qcy9jb21wb25lbnRzL3ZpZXdwb3J0L2hlYWRlci5qc3giLCJzcmMvanMvY29tcG9uZW50cy92aWV3cG9ydC92aWV3cG9ydC5qc3giLCJzcmMvanMvc2VydmljZXMvY29tbW9uLmpzIiwic3JjL2pzL3N0b3Jlcy9jYXJkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7O0FBRUEsbUJBQUssTUFBTCwyQ0FBWTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFDSixpQkFBYyxPQUFkLEVBREk7O0FBQUE7QUFBQSwyQ0FFSCx1REFGRzs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxDQUFaOzs7Ozs7Ozs7Ozs7O0lDUk0sTTtBQUNKLG9CQUFjO0FBQUE7O0FBQ1osU0FBSyxPQUFMLEdBQWU7QUFDYiwwQkFBb0I7QUFDbEIsY0FBTTtBQUNKLG1CQUFTLEVBREw7QUFFSixnQkFBTTtBQUZGLFNBRFk7QUFLbEIsZUFBTztBQUNMLGlCQUFPO0FBREY7QUFMVztBQURQLEtBQWY7QUFXRDs7Ozt3QkFFRyxNLEVBQVE7QUFDVixhQUFPLE1BQVAsQ0FBYyxLQUFLLE9BQW5CLEVBQTRCLE1BQTVCO0FBQ0Q7Ozt3QkFFRyxHLEVBQUs7QUFDUCxhQUFPLEtBQUssT0FBTCxDQUFhLEdBQWIsQ0FBUDtBQUNEOzs7d0JBRUcsRyxFQUFLLEssRUFBTztBQUNkLFdBQUssT0FB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QUE7QUFBQTtBQUFTLDhCQUFNLEdBQU4sQ0FBVSxlQUFWLEVBQTJCO0FBQXBDO0FBQVo7QUFMRjtBQUZLLE9BQVA7QUFVRDs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZkg7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs2QkFHVztBQUNQLGFBQU87QUFBQTtBQUFBO0FBQ0wsNkRBREs7QUFFTDtBQUFBO0FBQUEsWUFBVyxVQUFYO0FBQ0U7QUFBQTtBQUFBLGNBQVcsSUFBRyxnQkFBZDtBQUNFO0FBREY7QUFERixTQUZLO0FBT0w7QUFQSyxPQUFQO0FBU0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEJIOzs7O0FBQ0E7Ozs7Ozs7Ozs7SUFHcUIsYTs7Ozs7Ozs7Ozs7Ozs7O3VCQUVnQixtQkFBSyxJQUFMLENBQVUsRUFBRSxLQUFLLHlCQUFQLEVBQVYsQzs7Ozs7NEJBQTNCLEcsbUJBQUksZTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tCQUZPLGE7Ozs7Ozs7OztBQ0pyQjs7a0JBRWUscUJBQU07QUFDbkIsV0FBUyxXQURVO0FBRW5CLFNBQU87QUFDTCxTQUFLO0FBREE7QUFGWSxDQUFOLEMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0ICdiYWJlbC1wb2x5ZmlsbCc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJleHQgZnJvbSAnZXh0LXJlYWN0JztcbmltcG9ydCBDb21tb25TZXJ2aWNlIGZyb20gJy4vc2VydmljZXMvY29tbW9uJztcbmltcG9ydCBWaWV3cG9ydCBmcm9tICcuL2NvbXBvbmVudHMvdmlld3BvcnQvdmlld3BvcnQnO1xuaW1wb3J0IENhcmQgZnJvbSAnLi9jb21wb25lbnRzL2NhcmQvY2FyZCc7XG5pbXBvcnQgTm90Rm91bmQgZnJvbSAnLi9jb21wb25lbnRzL25vdGZvdW5kL25vdGZvdW5kJztcblxuUmV4dC5sYXVuY2goYXN5bmMgKCkgPT4ge1xuICBhd2FpdCBDb21tb25TZXJ2aWNlLmluaXRBcHAoKTtcbiAgcmV0dXJuIDxWaWV3cG9ydCAvPlxufSk7IiwiY2xhc3MgQ29uZmlnIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5fY29uZmlnID0ge1xuICAgICAgRE9OVVRfQ0hBUlRfQ09ORklHOiB7XG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICBjb2x1bW5zOiBbXSxcbiAgICAgICAgICB0eXBlOiAnZG9udXQnXG4gICAgICAgIH0sXG4gICAgICAgIGRvbnV0OiB7XG4gICAgICAgICAgdGl0bGU6ICdDYXJkcyBwZXIgVHlwZSdcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGFkZChjb25maWcpIHtcbiAgICBPYmplY3QuYXNzaWduKHRoaXMuX2NvbmZpZywgY29uZmlnKVxuICB9XG5cbiAgZ2V0KGtleSkge1xuICAgIHJldHVybiB0aGlzLl9jb25maWdba2V5XVxuICB9XG5cbiAgc2V0KGtleSwgdmFsdWUpIHtcbiAgICB0aGlzLl9jb25maWdba2V5XSA9IHZhbHVlXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IENvbmZpZyIsImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUm91dGUsIENvbnRhaW5lciwgR3JpZCB9IGZyb20gJ2V4dC1yZWFjdCc7XG5pbXBvcnQgQ2FyZFN0b3JlIGZyb20gJ34vc3RvcmVzL2NhcmQnO1xuXG5AUm91dGUoJy8nKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FyZCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIENhcmRTdG9yZS5sb2FkKCk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIDxDb250YWluZXIgY2xhc3NOYW1lPVwicGFuZWwtYm9keVwiPlxuICAgICAgPGgxPkNoYXJhY3RlcnM8L2gxPlxuICAgICAgPEdyaWQgc3RvcmU9e0NhcmRTdG9yZX0+XG4gICAgICAgIDxkaXYgdGV4dD1cIklEXCIgZGF0YUluZGV4PVwiSWRcIiBzdHlsZT17e3dpZHRoOjE1MH19IC8+XG4gICAgICAgIDxkaXYgdGV4dD1cIk5hbWVcIiBkYXRhSW5kZXg9XCJOYW1lXCIgLz5cbiAgICAgICAgPGRpdiB0ZXh0PVwiVHlwZVwiIGRhdGFJbmRleD1cIlR5cGVcIiAvPlxuICAgICAgICA8ZGl2IHRleHQ9XCJUeXBlXCIgZGF0YUluZGV4PVwiQ2xhc3NcIiAvPlxuICAgICAgICA8ZGl2IHRleHQ9XCJTVFJcIiBkYXRhSW5kZXg9XCJTVFJcIiBzdHlsZT17e3dpZHRoOjUwLHRleHRBbGlnbjonY2VudGVyJ319IC8+XG4gICAgICAgIDxkaXYgdGV4dD1cIkFHSVwiIGRhdGFJbmRleD1cIkFHSVwiIHN0eWxlPXt7d2lkdGg6NTAsdGV4dEFsaWduOidjZW50ZXInfX0gLz5cbiAgICAgICAgPGRpdiB0ZXh0PVwiSFBcIiBkYXRhSW5kZXg9XCJIUFwiIHN0eWxlPXt7d2lkdGg6NTAsdGV4dEFsaWduOidjZW50ZXInfX0gLz5cbiAgICAgICAgPGRpdiB0ZXh0PVwiREVYXCIgZGF0YUluZGV4PVwiREVYXCIgc3R5bGU9e3t3aWR0aDo1MCx0ZXh0QWxpZ246J2NlbnRlcid9fSAvPlxuICAgICAgICA8ZGl2IHRleHQ9XCJJTlRcIiBkYXRhSW5kZXg9XCJJTlRcIiBzdHlsZT17e3dpZHRoOjUwLHRleHRBbGlnbjonY2VudGVyJ319IC8+XG4gICAgICAgIDxkaXYgdGV4dD1cIlNFTlwiIGRhdGFJbmRleD1cIlNFTlwiIHN0eWxlPXt7d2lkdGg6NTAsdGV4dEFsaWduOidjZW50ZXInfX0gLz5cbiAgICAgICAgPGRpdiB0ZXh0PVwiQXJtb3IgVXNhYmxlXCIgZGF0YUluZGV4PVwiQXJtb3JVc2FibGVcIiAvPlxuICAgICAgPC9HcmlkPlxuICAgIDwvQ29udGFpbmVyPlxuICB9XG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFJvdXRlLCBDb21wb25lbnQsIENvbnRhaW5lciB9IGZyb20gJ2V4dC1yZWFjdCc7XG5cbkBSb3V0ZSgnKicpXG5AQ29tcG9uZW50KHtcbiAgdmlldzogKHsgJHZpZXcgfSkgPT4gPENvbnRhaW5lciBjbGFzc05hbWU9XCJwYW5lbC1ib2R5XCI+PGgxPnskdmlldy50aXRsZX08L2gxPjwvQ29udGFpbmVyPlxufSlcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy50aXRsZSA9ICdOb3QgRm91bmQnO1xuICB9XG59IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIDxmb290ZXI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyB0ZXh0LWNlbnRlclwiPiZjb3B5OyAyMDE3IGh1eXRyb25nbmd1eWVuPC9kaXY+XG4gICAgPC9mb290ZXI+O1xuICB9XG59IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IExpbmssIENhY2hlIH0gZnJvbSAnZXh0LXJlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIDxoZWFkZXIgY2xhc3NOYW1lPVwiYmctaW52ZXJzZVwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJicmFuZFwiPlJlYWN0IENNUzwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXJcIj5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdmJhci1uYXYgbXItYXV0b1wiPlxuICAgICAgICAgIDxMaW5rIHRvPVwiL1wiIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+Q2hhcmFjdGVyczwvTGluaz5cbiAgICAgICAgICA8TGluayB0bz1cIi9pdGVtc1wiIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+SXRlbXM8L0xpbms+XG4gICAgICAgIDwvdWw+XG4gICAgICAgIDxkaXY+SGVsbG8sIDxzdHJvbmc+e0NhY2hlLmdldCgnY29uZmlndXJhdGlvbicpLm5hbWV9PC9zdHJvbmc+PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2hlYWRlcj47XG4gIH1cbn0iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQ29udGFpbmVyLCBIYXNoUm91dGVyIH0gZnJvbSAnZXh0LXJlYWN0JztcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9oZWFkZXInO1xuaW1wb3J0IEZvb3RlciBmcm9tICcuL2Zvb3Rlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiA8Q29udGFpbmVyPlxuICAgICAgPEhlYWRlciAvPlxuICAgICAgPENvbnRhaW5lciBoYm94PlxuICAgICAgICA8Q29udGFpbmVyIGlkPVwibWFpbi1jb250YWluZXJcIj5cbiAgICAgICAgICA8SGFzaFJvdXRlciAvPlxuICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgPEZvb3RlciAvPlxuICAgIDwvQ29udGFpbmVyPjtcbiAgfVxufSIsImltcG9ydCBSZXh0LCB7IFNlcnZpY2UsIENhY2hlIH0gZnJvbSAnZXh0LXJlYWN0J1xuaW1wb3J0IENvbmZpZyBmcm9tICd+L2NvbW1vbi9jb25maWcnXG5cbkBTZXJ2aWNlXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb21tb25TZXJ2aWNlIHtcbiAgYXN5bmMgaW5pdEFwcCgpIHtcbiAgICBDYWNoZS5zZXQoJ2NvbmZpZ3VyYXRpb24nLCBhd2FpdCBSZXh0LmFqYXgoeyB1cmw6ICdkYXRhL2NvbmZpZ3VyYXRpb24uanNvbicgfSkpO1xuICB9XG59IiwiaW1wb3J0IHsgU3RvcmUgfSBmcm9tICdleHQtcmVhY3QnXG5cbmV4cG9ydCBkZWZhdWx0IFN0b3JlKHtcbiAgc3RvcmVJZDogJ0NhcmRTdG9yZScsXG4gIHByb3h5OiB7XG4gICAgdXJsOiAnZGF0YS9jYXJkLmpzb24nXG4gIH1cbn0pIl19
