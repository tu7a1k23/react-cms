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

_extReact2.default.launch(_react2.default.createElement(_viewport2.default, null));

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

},{"../common/config":2,"ext-react":"ext-react"}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extReact = require('ext-react');

exports.default = (0, _extReact.Store)({
  storeId: 'CardStore',
  proxy: {
    url: '/data/card.json'
  }
});

},{"ext-react":"ext-react"}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvYXBwLmpzIiwic3JjL2pzL2NvbW1vbi9jb25maWcuanMiLCJzcmMvanMvY29tcG9uZW50cy9jYXJkL2NhcmQuanN4Iiwic3JjL2pzL2NvbXBvbmVudHMvbm90Zm91bmQvbm90Zm91bmQuanN4Iiwic3JjL2pzL2NvbXBvbmVudHMvdmlld3BvcnQvZm9vdGVyLmpzeCIsInNyYy9qcy9jb21wb25lbnRzL3ZpZXdwb3J0L2hlYWRlci5qc3giLCJzcmMvanMvY29tcG9uZW50cy92aWV3cG9ydC92aWV3cG9ydC5qc3giLCJzcmMvanMvc2VydmljZXMvY29tbW9uLmpzIiwic3JjL2pzL3N0b3Jlcy9jYXJkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBLG1CQUFLLE1BQUwsQ0FBWSx1REFBWjs7Ozs7Ozs7Ozs7OztJQ1JNLE07QUFDSixvQkFBYztBQUFBOztBQUNaLFNBQUssT0FBTCxHQUFlO0FBQ2IsMEJBQW9CO0FBQ2xCLGNBQU07QUFDSixtQkFBUyxFQURMO0FBRUosZ0JBQU07QUFGRixTQURZO0FBS2xCLGVBQU87QUFDTCxpQkFBTztBQURGO0FBTFc7QUFEUCxLQUFmO0FBV0Q7Ozs7d0JBRUcsTSxFQUFRO0FBQ1YsYUFBTyxNQUFQLENBQWMsS0FBSyxPQUFuQixFQUE0QixNQUE1QjtBQUNEOzs7d0JBRUcsRyxFQUFLO0FBQ1AsYUFBTyxLQUFLLE9BQUwsQ0FBYSxHQUFiLENBQVA7QUFDRDs7O3dCQUVHLEcsRUFBSyxLLEVBQU87QUFDZCxXQUFLLE9BQUwsQ0FBYSxHQUFiLElBQW9CLEtBQXBCO0FBQ0Q7Ozs7OztrQkFHWSxJQUFJLE1BQUosRTs7Ozs7Ozs7Ozs7Ozs7QUM1QmY7Ozs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7O0lBR3FCLEksV0FEcEIscUJB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QTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7NkJBR1c7QUFDUCxhQUFPO0FBQUE7QUFBQTtBQUNMLDZEQURLO0FBRUw7QUFBQTtBQUFBLFlBQVcsVUFBWDtBQUNFO0FBQUE7QUFBQSxjQUFXLElBQUcsZ0JBQWQ7QUFDRTtBQURGO0FBREYsU0FGSztBQU9MO0FBUEssT0FBUDtBQVNEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hCSDs7OztBQUNBOzs7Ozs7Ozs7O0lBR3FCLGE7Ozs7Ozs7Ozs7Ozs7Ozt1QkFFQSxtQkFBSyxJQUFMLENBQVUsRUFBRSxLQUFLLFdBQVAsRUFBVixDOzs7Ozs0QkFBVixHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0JBRlUsYTs7Ozs7Ozs7O0FDSnJCOztrQkFFZSxxQkFBTTtBQUNuQixXQUFTLFdBRFU7QUFFbkIsU0FBTztBQUNMLFNBQUs7QUFEQTtBQUZZLENBQU4sQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQgJ2JhYmVsLXBvbHlmaWxsJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmV4dCBmcm9tICdleHQtcmVhY3QnO1xuaW1wb3J0IENvbW1vblNlcnZpY2UgZnJvbSAnLi9zZXJ2aWNlcy9jb21tb24nO1xuaW1wb3J0IFZpZXdwb3J0IGZyb20gJy4vY29tcG9uZW50cy92aWV3cG9ydC92aWV3cG9ydCc7XG5pbXBvcnQgQ2FyZCBmcm9tICcuL2NvbXBvbmVudHMvY2FyZC9jYXJkJztcbmltcG9ydCBOb3RGb3VuZCBmcm9tICcuL2NvbXBvbmVudHMvbm90Zm91bmQvbm90Zm91bmQnO1xuXG5SZXh0LmxhdW5jaCg8Vmlld3BvcnQgLz4pOyIsImNsYXNzIENvbmZpZyB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuX2NvbmZpZyA9IHtcbiAgICAgIERPTlVUX0NIQVJUX0NPTkZJRzoge1xuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgY29sdW1uczogW10sXG4gICAgICAgICAgdHlwZTogJ2RvbnV0J1xuICAgICAgICB9LFxuICAgICAgICBkb251dDoge1xuICAgICAgICAgIHRpdGxlOiAnQ2FyZHMgcGVyIFR5cGUnXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBhZGQoY29uZmlnKSB7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLl9jb25maWcsIGNvbmZpZylcbiAgfVxuXG4gIGdldChrZXkpIHtcbiAgICByZXR1cm4gdGhpcy5fY29uZmlnW2tleV1cbiAgfVxuXG4gIHNldChrZXksIHZhbHVlKSB7XG4gICAgdGhpcy5fY29uZmlnW2tleV0gPSB2YWx1ZVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBDb25maWciLCJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFJvdXRlLCBDb250YWluZXIsIEdyaWQgfSBmcm9tICdleHQtcmVhY3QnO1xuaW1wb3J0IENhcmRTdG9yZSBmcm9tICd+L3N0b3Jlcy9jYXJkJztcblxuQFJvdXRlKCcvJylcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhcmQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBDYXJkU3RvcmUubG9hZCgpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiA8Q29udGFpbmVyIGNsYXNzTmFtZT1cInBhbmVsLWJvZHlcIj5cbiAgICAgIDxoMT5DaGFyYWN0ZXJzPC9oMT5cbiAgICAgIDxHcmlkIHN0b3JlPXtDYXJkU3RvcmV9PlxuICAgICAgICA8ZGl2IHRleHQ9XCJJRFwiIGRhdGFJbmRleD1cIklkXCIgc3R5bGU9e3t3aWR0aDoxNTB9fSAvPlxuICAgICAgICA8ZGl2IHRleHQ9XCJOYW1lXCIgZGF0YUluZGV4PVwiTmFtZVwiIC8+XG4gICAgICAgIDxkaXYgdGV4dD1cIlR5cGVcIiBkYXRhSW5kZXg9XCJUeXBlXCIgLz5cbiAgICAgICAgPGRpdiB0ZXh0PVwiVHlwZVwiIGRhdGFJbmRleD1cIkNsYXNzXCIgLz5cbiAgICAgICAgPGRpdiB0ZXh0PVwiU1RSXCIgZGF0YUluZGV4PVwiU1RSXCIgc3R5bGU9e3t3aWR0aDo1MCx0ZXh0QWxpZ246J2NlbnRlcid9fSAvPlxuICAgICAgICA8ZGl2IHRleHQ9XCJBR0lcIiBkYXRhSW5kZXg9XCJBR0lcIiBzdHlsZT17e3dpZHRoOjUwLHRleHRBbGlnbjonY2VudGVyJ319IC8+XG4gICAgICAgIDxkaXYgdGV4dD1cIkhQXCIgZGF0YUluZGV4PVwiSFBcIiBzdHlsZT17e3dpZHRoOjUwLHRleHRBbGlnbjonY2VudGVyJ319IC8+XG4gICAgICAgIDxkaXYgdGV4dD1cIkRFWFwiIGRhdGFJbmRleD1cIkRFWFwiIHN0eWxlPXt7d2lkdGg6NTAsdGV4dEFsaWduOidjZW50ZXInfX0gLz5cbiAgICAgICAgPGRpdiB0ZXh0PVwiSU5UXCIgZGF0YUluZGV4PVwiSU5UXCIgc3R5bGU9e3t3aWR0aDo1MCx0ZXh0QWxpZ246J2NlbnRlcid9fSAvPlxuICAgICAgICA8ZGl2IHRleHQ9XCJTRU5cIiBkYXRhSW5kZXg9XCJTRU5cIiBzdHlsZT17e3dpZHRoOjUwLHRleHRBbGlnbjonY2VudGVyJ319IC8+XG4gICAgICAgIDxkaXYgdGV4dD1cIkFybW9yIFVzYWJsZVwiIGRhdGFJbmRleD1cIkFybW9yVXNhYmxlXCIgLz5cbiAgICAgIDwvR3JpZD5cbiAgICA8L0NvbnRhaW5lcj5cbiAgfVxufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBSb3V0ZSwgQ29tcG9uZW50LCBDb250YWluZXIgfSBmcm9tICdleHQtcmVhY3QnO1xuXG5AUm91dGUoJyonKVxuQENvbXBvbmVudCh7XG4gIHZpZXc6ICh7ICR2aWV3IH0pID0+IDxDb250YWluZXIgY2xhc3NOYW1lPVwicGFuZWwtYm9keVwiPjxoMT57JHZpZXcudGl0bGV9PC9oMT48L0NvbnRhaW5lcj5cbn0pXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMudGl0bGUgPSAnTm90IEZvdW5kJztcbiAgfVxufSIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiA8Zm9vdGVyPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgdGV4dC1jZW50ZXJcIj4mY29weTsgMjAxNyBodXl0cm9uZ25ndXllbjwvZGl2PlxuICAgIDwvZm9vdGVyPjtcbiAgfVxufSIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMaW5rLCBDYWNoZSB9IGZyb20gJ2V4dC1yZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiA8aGVhZGVyIGNsYXNzTmFtZT1cImJnLWludmVyc2VcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnJhbmRcIj5SZWFjdCBDTVM8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyXCI+XG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXZiYXItbmF2IG1yLWF1dG9cIj5cbiAgICAgICAgICA8TGluayB0bz1cIi9cIiBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPkNoYXJhY3RlcnM8L0xpbms+XG4gICAgICAgICAgPExpbmsgdG89XCIvaXRlbXNcIiBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPkl0ZW1zPC9MaW5rPlxuICAgICAgICA8L3VsPlxuICAgICAgICA8ZGl2PkhlbGxvLCA8c3Ryb25nPntDYWNoZS5nZXQoJ2NvbmZpZ3VyYXRpb24nKS5uYW1lfTwvc3Ryb25nPjwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9oZWFkZXI+O1xuICB9XG59IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IENvbnRhaW5lciwgSGFzaFJvdXRlciB9IGZyb20gJ2V4dC1yZWFjdCc7XG5pbXBvcnQgSGVhZGVyIGZyb20gJy4vaGVhZGVyJztcbmltcG9ydCBGb290ZXIgZnJvbSAnLi9mb290ZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gPENvbnRhaW5lcj5cbiAgICAgIDxIZWFkZXIgLz5cbiAgICAgIDxDb250YWluZXIgaGJveD5cbiAgICAgICAgPENvbnRhaW5lciBpZD1cIm1haW4tY29udGFpbmVyXCI+XG4gICAgICAgICAgPEhhc2hSb3V0ZXIgLz5cbiAgICAgICAgPC9Db250YWluZXI+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICAgIDxGb290ZXIgLz5cbiAgICA8L0NvbnRhaW5lcj47XG4gIH1cbn0iLCJpbXBvcnQgUmV4dCwgeyBTZXJ2aWNlIH0gZnJvbSAnZXh0LXJlYWN0J1xuaW1wb3J0IENvbmZpZyBmcm9tICd+L2NvbW1vbi9jb25maWcnXG5cbkBTZXJ2aWNlXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb21tb25TZXJ2aWNlIHtcbiAgYXN5bmMgaW5pdEFwcCgpIHtcbiAgICBDb25maWcuYWRkKGF3YWl0IFJleHQuYWpheCh7IHVybDogJy9hcGkvaW5pdCcgfSkpXG4gIH1cbn0iLCJpbXBvcnQgeyBTdG9yZSB9IGZyb20gJ2V4dC1yZWFjdCdcblxuZXhwb3J0IGRlZmF1bHQgU3RvcmUoe1xuICBzdG9yZUlkOiAnQ2FyZFN0b3JlJyxcbiAgcHJveHk6IHtcbiAgICB1cmw6ICcvZGF0YS9jYXJkLmpzb24nXG4gIH1cbn0pIl19
