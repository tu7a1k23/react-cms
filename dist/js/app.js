(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
'use strict';

require('babel-polyfill');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _routes = require('./routes/routes');

var _routes2 = _interopRequireDefault(_routes);

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _config = require('./common/config');

var _config2 = _interopRequireDefault(_config);

var _utils = require('./common/utils');

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

global.jQuery = require('jquery');
global.Tether = require('tether');

(0, _jquery2.default)(document).ajaxError(function (e, jqxhr, settings) {
  if (jqxhr.responseText) {
    try {
      var response = JSON.parse(jqxhr.responseText);
      console.error(response.message);
    } catch (e) {
      console.error(jqxhr.responseText);
    }
  }
});

(0, _jquery2.default)(_asyncToGenerator(regeneratorRuntime.mark(function _callee() {
  var initialConfiguration;
  return regeneratorRuntime.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return _jquery2.default.ajax({
            url: '/api/init',
            type: 'GET',
            contentType: 'application/json; charset=utf-8'
          });

        case 2:
          initialConfiguration = _context.sent;

          _config2.default.init(initialConfiguration);
          (0, _reactDom.render)(_react2.default.createElement(_routes2.default, null), document.getElementById('react-root'));

        case 5:
        case 'end':
          return _context.stop();
      }
    }
  }, _callee, undefined);
})));

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./common/config":2,"./common/utils":3,"./routes/routes":11,"babel-polyfill":"babel-polyfill","jquery":"jquery","react":"react","react-dom":"react-dom","tether":"tether"}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AppConfig = function () {
  function AppConfig() {
    _classCallCheck(this, AppConfig);

    this._config = {
      size: [10, 20, 50, 100, 200, 500]
    };
  }

  _createClass(AppConfig, [{
    key: "init",
    value: function init(config) {
      this._config = Object.assign({}, this._config, config);
    }
  }, {
    key: "get",
    value: function get(key) {
      return this._config[key];
    }
  }, {
    key: "set",
    value: function set(key, value) {
      this._config[key] = value;
    }
  }]);

  return AppConfig;
}();

exports.default = new AppConfig();

},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Utils = function () {
  function Utils() {
    _classCallCheck(this, Utils);

    this.toastType = {
      success: {
        title: 'Success',
        background: 'success',
        icon: 'check'
      },
      error: {
        title: 'Error',
        background: 'danger',
        icon: 'info'
      },
      warning: {
        title: 'Warning',
        background: 'warning',
        icon: 'exclamation'
      },
      info: {
        title: 'Information',
        background: 'info',
        icon: 'info'
      }
    };
  }

  _createClass(Utils, [{
    key: 'beforeProcessing',
    value: function beforeProcessing() {
      (0, _jquery2.default)("#ajax-loader").show();
    }
  }, {
    key: 'afterProcessing',
    value: function afterProcessing() {
      (0, _jquery2.default)("#ajax-loader").hide();
    }
  }, {
    key: 'ajaxRequest',
    value: function () {
      var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(url, method, data) {
        var response;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.beforeProcessing();
                _context.prev = 1;
                _context.next = 4;
                return _jquery2.default.ajax({
                  url: url,
                  type: method,
                  contentType: 'application/json; charset=utf-8',
                  data: method === 'GET' ? data || null : data ? JSON.stringify(data) : null
                });

              case 4:
                response = _context.sent;

                this.afterProcessing();
                return _context.abrupt('return', response);

              case 9:
                _context.prev = 9;
                _context.t0 = _context['catch'](1);

                console.error(_context.t0);
                this.afterProcessing();
                return _context.abrupt('return', null);

              case 14:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this, [[1, 9]]);
      }));

      function ajaxRequest(_x, _x2, _x3) {
        return _ref.apply(this, arguments);
      }

      return ajaxRequest;
    }()
  }, {
    key: 'showToast',
    value: function showToast(type, message) {
      var reactNotify = (0, _jquery2.default)('#notification'),
          notification = '<div class="alert alert-' + this.toastType[type].background + ' container-fluid" role="alert">\n            <div class="row">\n              <div class="col-sm-12">\n                <h6 class="font-weight-bold">' + this.toastType[type].title + '</h6>\n              </div>\n            </div>\n            <div class="row">\n              <div class="col-sm-2">\n                <i class="fa fa-2x fa-' + this.toastType[type].icon + '-circle"></i>\n              </div>\n              <div class="col-sm-10">\n                ' + message + '\n              </div>\n            </div>\n          </div>';
      reactNotify.html(notification);
      reactNotify.fadeIn().fadeOut(3000, 'swing', function () {
        reactNotify.html('');
      });
    }
  }, {
    key: 'showNoResultFoundMessage',
    value: function showNoResultFoundMessage() {
      this.showToast('info', 'No result found.');
    }
  }, {
    key: 'onEnter',
    value: function onEnter(e, fn) {
      if (e.key === 'Enter') {
        fn(e.target.value);
      }
    }
  }]);

  return Utils;
}();

exports.default = new Utils();

},{"jquery":"jquery"}],4:[function(require,module,exports){
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

var Dashboard = function (_Component) {
  _inherits(Dashboard, _Component);

  function Dashboard(props) {
    _classCallCheck(this, Dashboard);

    var _this = _possibleConstructorReturn(this, (Dashboard.__proto__ || Object.getPrototypeOf(Dashboard)).call(this, props));

    _this.state = {
      data: {
        summary: [],
        total: 0
      }
    };
    return _this;
  }

  _createClass(Dashboard, [{
    key: "render",
    value: function render() {
      var _state$data = this.state.data,
          summary = _state$data.summary,
          total = _state$data.total;

      return _react2.default.createElement(
        "section",
        { className: "row" },
        _react2.default.createElement(
          "div",
          { className: "col-sm-8" },
          _react2.default.createElement("div", { id: "donut-chart" })
        ),
        _react2.default.createElement(
          "div",
          { className: "col-sm-4" },
          _react2.default.createElement(
            "table",
            { className: "table table-sm table-hover table-striped" },
            _react2.default.createElement(
              "thead",
              null,
              _react2.default.createElement(
                "tr",
                null,
                _react2.default.createElement(
                  "th",
                  null,
                  "Status"
                ),
                _react2.default.createElement(
                  "th",
                  { className: "text-sm-right" },
                  "Total Records"
                )
              )
            ),
            _react2.default.createElement(
              "tbody",
              null,
              summary.map(function (sum) {
                return _react2.default.createElement(
                  "tr",
                  null,
                  _react2.default.createElement(
                    "td",
                    null,
                    sum[0]
                  ),
                  _react2.default.createElement(
                    "td",
                    { className: "text-sm-right" },
                    sum[1]
                  )
                );
              })
            ),
            _react2.default.createElement(
              "tfoot",
              null,
              _react2.default.createElement(
                "tr",
                null,
                _react2.default.createElement("th", null),
                _react2.default.createElement(
                  "th",
                  { className: "text-sm-right" },
                  total
                )
              )
            )
          )
        )
      );
    }
  }]);

  return Dashboard;
}(_react.Component);

exports.default = Dashboard;

},{"react":"react"}],5:[function(require,module,exports){
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

var NotFound = function (_Component) {
  _inherits(NotFound, _Component);

  function NotFound() {
    _classCallCheck(this, NotFound);

    return _possibleConstructorReturn(this, (NotFound.__proto__ || Object.getPrototypeOf(NotFound)).apply(this, arguments));
  }

  _createClass(NotFound, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "section",
        { className: "text-sm-center" },
        "Sorry, this page is not available"
      );
    }
  }]);

  return NotFound;
}(_react.Component);

exports.default = NotFound;

},{"react":"react"}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _bootstrap = require('./ux/bootstrap');

var _utils = require('../common/utils');

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SearchForm = function (_Component) {
  _inherits(SearchForm, _Component);

  function SearchForm(props) {
    _classCallCheck(this, SearchForm);

    var _this = _possibleConstructorReturn(this, (SearchForm.__proto__ || Object.getPrototypeOf(SearchForm)).call(this, props));

    _this.state = {
      fields: {
        anyField: '',
        status: '',
        division: '',
        activity: '',
        product: ''
      }
    };
    return _this;
  }

  _createClass(SearchForm, [{
    key: 'updateForm',
    value: function updateForm(value, fieldName) {
      var fields = this.state.fields;

      fields[fieldName] = value;
      this.setState(function () {
        return { fields: fields };
      });
    }
  }, {
    key: 'onSearch',
    value: function onSearch() {
      var criteria = Object.assign({}, this.state.fields); // immutable object
      this.props.doSearch(criteria);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var fields = this.state.fields;

      return _react2.default.createElement(
        'section',
        null,
        _react2.default.createElement(
          'div',
          { className: 'form-inline' },
          _react2.default.createElement(
            'div',
            { className: 'form-group' },
            _react2.default.createElement(_bootstrap.Field, { placeholder: 'Search on any field',
              value: fields.anyField,
              onChange: function onChange(e) {
                return _this2.updateForm(e.target.value, 'anyField');
              },
              onKeyPress: function onKeyPress(e) {
                return _utils2.default.onEnter(e, _this2.onSearch.bind(_this2));
              } })
          ),
          _react2.default.createElement(
            'div',
            { className: 'form-group' },
            _react2.default.createElement(
              _bootstrap.DropDown,
              { value: fields.status,
                onChange: function onChange(e) {
                  return _this2.updateForm(e.target.value, 'status');
                } },
              _react2.default.createElement(
                'option',
                { value: '' },
                'All Statuses'
              ),
              _react2.default.createElement(
                'option',
                { value: 'DRAFT' },
                'DRAFT'
              ),
              _react2.default.createElement(
                'option',
                { value: 'IN_PROCESS' },
                'IN_PROCESS'
              ),
              _react2.default.createElement(
                'option',
                { value: 'PROCESSING' },
                'PROCESSING'
              ),
              _react2.default.createElement(
                'option',
                { value: 'PROCESSED' },
                'PROCESSED'
              ),
              _react2.default.createElement(
                'option',
                { value: 'ERROR' },
                'ERROR'
              ),
              _react2.default.createElement(
                'option',
                { value: 'SEEDED' },
                'SEEDED'
              ),
              _react2.default.createElement(
                'option',
                { value: 'AWAITING' },
                'AWAITING'
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'form-group' },
            _react2.default.createElement(
              _bootstrap.DropDown,
              { value: fields.division,
                onChange: function onChange(e) {
                  return _this2.updateForm(e.target.value, 'division');
                } },
              _react2.default.createElement(
                'option',
                { value: '' },
                'All Divisions'
              ),
              _react2.default.createElement(
                'option',
                { value: '1' },
                'Division 1'
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'form-group' },
            _react2.default.createElement(
              _bootstrap.Btn,
              { type: 'primary', onClick: function onClick() {
                  return _this2.onSearch();
                } },
              'Search'
            )
          )
        ),
        fields.division && _react2.default.createElement(
          'div',
          { className: 'form-inline' },
          _react2.default.createElement(
            'div',
            { className: 'form-group' },
            _react2.default.createElement(
              _bootstrap.DropDown,
              { value: fields.activity,
                onChange: function onChange(e) {
                  return _this2.updateForm(e.target.value, 'activity');
                } },
              _react2.default.createElement(
                'option',
                { value: '' },
                'All Activities'
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'form-group' },
            _react2.default.createElement(
              _bootstrap.DropDown,
              { value: fields.product,
                onChange: function onChange(e) {
                  return _this2.updateForm(e.target.value, 'product');
                } },
              _react2.default.createElement(
                'option',
                { value: '' },
                'All Products'
              )
            )
          )
        )
      );
    }
  }]);

  return SearchForm;
}(_react.Component);

exports.default = SearchForm;

},{"../common/utils":3,"./ux/bootstrap":9,"react":"react"}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _bootstrap = require('./ux/bootstrap');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SearchResult = function (_Component) {
  _inherits(SearchResult, _Component);

  function SearchResult() {
    _classCallCheck(this, SearchResult);

    return _possibleConstructorReturn(this, (SearchResult.__proto__ || Object.getPrototypeOf(SearchResult)).apply(this, arguments));
  }

  _createClass(SearchResult, [{
    key: 'render',
    value: function render() {
      var data = this.props.data;

      return _react2.default.createElement(
        'section',
        { className: 'flex' },
        _react2.default.createElement(
          _bootstrap.BootGrid,
          { data: data },
          _react2.default.createElement('div', { header: 'ID', style: { width: '50px' }, dataIndex: 'id' }),
          _react2.default.createElement('div', { header: 'Name', style: { width: '150px' }, dataIndex: 'name' }),
          _react2.default.createElement('div', { header: 'Status', style: { width: '100px' }, dataIndex: 'status' }),
          _react2.default.createElement('div', { header: 'Division', style: { width: '350px' }, dataIndex: 'division' }),
          _react2.default.createElement('div', { header: 'Activity', style: { width: '350px' }, dataIndex: 'activity' }),
          _react2.default.createElement('div', { header: 'Product', style: { width: '350px' }, dataIndex: 'product' }),
          _react2.default.createElement('div', { header: 'Description', style: { width: '800px' }, dataIndex: 'desc' }),
          _react2.default.createElement('div', { header: 'Actions', style: { width: '150px' } })
        )
      );
    }
  }]);

  return SearchResult;
}(_react.Component);

exports.default = SearchResult;

},{"./ux/bootstrap":9,"react":"react"}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

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

  function Search(props) {
    _classCallCheck(this, Search);

    var _this = _possibleConstructorReturn(this, (Search.__proto__ || Object.getPrototypeOf(Search)).call(this, props));

    var data = [];
    for (var id = 0; id < 10; ++id) {
      data.push({
        id: id,
        name: 'Name ' + id,
        status: 'PROCESSED',
        division: 'Division ' + (id % 10 + 1),
        activity: 'Activity ' + (id % 100 + 1),
        product: 'Name ' + (id % 1000 + 1),
        desc: ''
      });
    }
    _this.state = { data: data };
    return _this;
  }

  _createClass(Search, [{
    key: 'doSearch',
    value: function doSearch(criteria) {}
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'section',
        { className: 'vbox' },
        _react2.default.createElement(
          'nav',
          { className: 'breadcrumb' },
          _react2.default.createElement(
            _reactRouter.Link,
            { to: '/dashboard', className: 'breadcrumb-item' },
            'Dashboard'
          ),
          _react2.default.createElement(
            'span',
            { className: 'breadcrumb-item active' },
            'Search'
          )
        ),
        _react2.default.createElement(_searchForm2.default, { doSearch: this.doSearch.bind(this) }),
        _react2.default.createElement(_searchResult2.default, { data: this.state.data })
      );
    }
  }]);

  return Search;
}(_react.Component);

exports.default = Search;

},{"./search-form":6,"./search-result":7,"react":"react","react-router":"react-router"}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BootGrid = exports.Btn = exports.DropDown = exports.Field = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Field = exports.Field = function (_Component) {
  _inherits(Field, _Component);

  function Field() {
    _classCallCheck(this, Field);

    return _possibleConstructorReturn(this, (Field.__proto__ || Object.getPrototypeOf(Field)).apply(this, arguments));
  }

  _createClass(Field, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          value = _props.value,
          className = _props.className,
          others = _objectWithoutProperties(_props, ['value', 'className']);

      return _react2.default.createElement('input', _extends({ type: 'text', className: 'form-control form-control-sm' + (className || ''), value: value }, others));
    }
  }]);

  return Field;
}(_react.Component);

var DropDown = exports.DropDown = function (_Component2) {
  _inherits(DropDown, _Component2);

  function DropDown() {
    _classCallCheck(this, DropDown);

    return _possibleConstructorReturn(this, (DropDown.__proto__ || Object.getPrototypeOf(DropDown)).apply(this, arguments));
  }

  _createClass(DropDown, [{
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          value = _props2.value,
          className = _props2.className,
          children = _props2.children,
          others = _objectWithoutProperties(_props2, ['value', 'className', 'children']);

      return _react2.default.createElement(
        'select',
        _extends({ className: 'form-control form-control-sm' + (className || ''), value: value }, others),
        children
      );
    }
  }]);

  return DropDown;
}(_react.Component);

var Btn = exports.Btn = function (_Component3) {
  _inherits(Btn, _Component3);

  function Btn() {
    _classCallCheck(this, Btn);

    return _possibleConstructorReturn(this, (Btn.__proto__ || Object.getPrototypeOf(Btn)).apply(this, arguments));
  }

  _createClass(Btn, [{
    key: 'render',
    value: function render() {
      var _props3 = this.props,
          type = _props3.type,
          className = _props3.className,
          text = _props3.text,
          children = _props3.children,
          others = _objectWithoutProperties(_props3, ['type', 'className', 'text', 'children']);

      return _react2.default.createElement(
        'button',
        _extends({ type: 'button', className: 'btn btn-sm btn-' + (type || 'secondary') + ' ' + (className || '') }, others),
        text || children
      );
    }
  }]);

  return Btn;
}(_react.Component);

var BootGrid = exports.BootGrid = function (_Component4) {
  _inherits(BootGrid, _Component4);

  function BootGrid() {
    _classCallCheck(this, BootGrid);

    return _possibleConstructorReturn(this, (BootGrid.__proto__ || Object.getPrototypeOf(BootGrid)).apply(this, arguments));
  }

  _createClass(BootGrid, [{
    key: 'render',
    value: function render() {
      var _props4 = this.props,
          data = _props4.data,
          children = _props4.children,
          others = _objectWithoutProperties(_props4, ['data', 'children']),
          columns = children.map(function (child) {
        return child.props;
      });

      return _react2.default.createElement(
        'section',
        { className: 'vbox' },
        _react2.default.createElement(
          'section',
          { className: 'flex' },
          _react2.default.createElement(
            'table',
            _extends({ className: 'table table-sm table-striped table-bordered table-responsive' }, others),
            _react2.default.createElement(
              'thead',
              null,
              _react2.default.createElement(
                'tr',
                null,
                columns.map(function (column, index) {
                  var header = column.header,
                      others = _objectWithoutProperties(column, ['header']);

                  return _react2.default.createElement(
                    'th',
                    _extends({ key: index }, others),
                    header || ''
                  );
                })
              )
            ),
            _react2.default.createElement(
              'tbody',
              null,
              data.map(function (entity) {
                return _react2.default.createElement(
                  'tr',
                  { id: entity.id },
                  columns.map(function (column) {
                    var dataIndex = column.dataIndex,
                        others = _objectWithoutProperties(column, ['dataIndex']);

                    return _react2.default.createElement(
                      'td',
                      others,
                      entity[dataIndex]
                    );
                  })
                );
              })
            )
          )
        )
      );
    }
  }]);

  return BootGrid;
}(_react.Component);

},{"react":"react"}],10:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _config = require('../common/config');

var _config2 = _interopRequireDefault(_config);

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Layout = function (_Component) {
  _inherits(Layout, _Component);

  function Layout() {
    _classCallCheck(this, Layout);

    return _possibleConstructorReturn(this, (Layout.__proto__ || Object.getPrototypeOf(Layout)).apply(this, arguments));
  }

  _createClass(Layout, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'section',
        { className: 'vbox' },
        _react2.default.createElement(
          'header',
          null,
          _react2.default.createElement(
            'nav',
            { className: 'navbar navbar-toggleable-md navbar-light bg-faded' },
            _react2.default.createElement(
              'a',
              { className: 'navbar-brand', href: '/' },
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
                    _reactRouter.IndexLink,
                    { to: '/', className: 'nav-link', activeClassName: 'active' },
                    'Dashboard'
                  )
                ),
                _react2.default.createElement(
                  'li',
                  { className: 'nav-item' },
                  _react2.default.createElement(
                    _reactRouter.Link,
                    { to: '/search', className: 'nav-link', activeClassName: 'active' },
                    'Search'
                  )
                ),
                _react2.default.createElement(
                  'li',
                  { className: 'nav-item' },
                  _react2.default.createElement(
                    _reactRouter.Link,
                    { to: '/audit-trail', className: 'nav-link', activeClassName: 'active' },
                    'Audit Trail'
                  )
                ),
                _react2.default.createElement(
                  'li',
                  { className: 'nav-item' },
                  _react2.default.createElement(
                    _reactRouter.Link,
                    { to: '/monitoring', className: 'nav-link', activeClassName: 'active' },
                    'Monitoring'
                  )
                ),
                _react2.default.createElement(
                  'li',
                  { className: 'nav-item' },
                  _react2.default.createElement(
                    _reactRouter.Link,
                    { to: '/administration', className: 'nav-link', activeClassName: 'active' },
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
          this.props.children
        ),
        _react2.default.createElement(
          'footer',
          { className: 'navbar navbar-toggleable-md navbar-light bg-faded' },
          _react2.default.createElement(
            'div',
            { className: 'container-fluid' },
            _react2.default.createElement(
              'p',
              { className: 'text-muted' },
              '\xA92017 React CMS'
            )
          )
        )
      );
    }
  }]);

  return Layout;
}(_react.Component);

exports.default = Layout;

},{"../common/config":2,"react":"react","react-router":"react-router"}],11:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _layout = require('../layouts/layout');

var _layout2 = _interopRequireDefault(_layout);

var _dashboard = require('../components/dashboard');

var _dashboard2 = _interopRequireDefault(_dashboard);

var _search = require('../components/search');

var _search2 = _interopRequireDefault(_search);

var _notfound = require('../components/notfound');

var _notfound2 = _interopRequireDefault(_notfound);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Routes = function (_Component) {
  _inherits(Routes, _Component);

  function Routes() {
    _classCallCheck(this, Routes);

    return _possibleConstructorReturn(this, (Routes.__proto__ || Object.getPrototypeOf(Routes)).apply(this, arguments));
  }

  _createClass(Routes, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _reactRouter.Router,
        { history: _reactRouter.hashHistory },
        _react2.default.createElement(
          _reactRouter.Route,
          { path: '/', component: _layout2.default },
          _react2.default.createElement(_reactRouter.IndexRoute, { component: _dashboard2.default }),
          _react2.default.createElement(_reactRouter.Route, { path: '/search', component: _search2.default }),
          _react2.default.createElement(_reactRouter.Route, { path: '*', component: _notfound2.default })
        )
      );
    }
  }]);

  return Routes;
}(_react.Component);

exports.default = Routes;

},{"../components/dashboard":4,"../components/notfound":5,"../components/search":8,"../layouts/layout":10,"react":"react","react-router":"react-router"}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmNcXGVzXFxzcmNcXGVzXFxhcHAuanN4Iiwic3JjXFxlc1xcY29tbW9uXFxjb25maWcuanMiLCJzcmNcXGVzXFxjb21tb25cXHV0aWxzLmpzIiwic3JjXFxlc1xcY29tcG9uZW50c1xcZGFzaGJvYXJkLmpzeCIsInNyY1xcZXNcXGNvbXBvbmVudHNcXG5vdGZvdW5kLmpzeCIsInNyY1xcZXNcXGNvbXBvbmVudHNcXHNlYXJjaC1mb3JtLmpzeCIsInNyY1xcZXNcXGNvbXBvbmVudHNcXHNlYXJjaC1yZXN1bHQuanN4Iiwic3JjXFxlc1xcY29tcG9uZW50c1xcc2VhcmNoLmpzeCIsInNyY1xcZXNcXGNvbXBvbmVudHNcXHV4XFxib290c3RyYXAuanN4Iiwic3JjXFxlc1xcbGF5b3V0c1xcbGF5b3V0LmpzeCIsInNyY1xcZXNcXHJvdXRlc1xccm91dGVzLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztBQ0FBOztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7O0FBRUEsT0FBTyxNQUFQLEdBQWdCLFFBQVEsUUFBUixDQUFoQjtBQUNBLE9BQU8sTUFBUCxHQUFnQixRQUFRLFFBQVIsQ0FBaEI7O0FBRUEsc0JBQUUsUUFBRixFQUFZLFNBQVosQ0FBc0IsVUFBQyxDQUFELEVBQUksS0FBSixFQUFXLFFBQVgsRUFBd0I7QUFDNUMsTUFBSSxNQUFNLFlBQVYsRUFBd0I7QUFDdEIsUUFBSTtBQUNGLFVBQU0sV0FBVyxLQUFLLEtBQUwsQ0FBVyxNQUFNLFlBQWpCLENBQWpCO0FBQ0EsY0FBUSxLQUFSLENBQWMsU0FBUyxPQUF2QjtBQUNELEtBSEQsQ0FHRSxPQUFPLENBQVAsRUFBVTtBQUNWLGNBQVEsS0FBUixDQUFjLE1BQU0sWUFBcEI7QUFDRDtBQUNGO0FBQ0YsQ0FURDs7QUFXQSxnRUFBRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUNtQyxpQkFBRSxJQUFGLENBQU87QUFDdEMsaUJBQUssV0FEaUM7QUFFdEMsa0JBQU0sS0FGZ0M7QUFHdEMseUJBQWE7QUFIeUIsV0FBUCxDQURuQzs7QUFBQTtBQUNNLDhCQUROOztBQU1BLDJCQUFVLElBQVYsQ0FBZSxvQkFBZjtBQUNBLGdDQUFPLHFEQUFQLEVBQW1CLFNBQVMsY0FBVCxDQUF3QixZQUF4QixDQUFuQjs7QUFQQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxDQUFGOzs7Ozs7Ozs7Ozs7Ozs7SUN0Qk0sUztBQUNKLHVCQUFjO0FBQUE7O0FBQ1osU0FBSyxPQUFMLEdBQWU7QUFDYixZQUFNLENBQUMsRUFBRCxFQUFLLEVBQUwsRUFBUyxFQUFULEVBQWEsR0FBYixFQUFrQixHQUFsQixFQUF1QixHQUF2QjtBQURPLEtBQWY7QUFHRDs7Ozt5QkFFSSxNLEVBQVE7QUFDWCxXQUFLLE9BQUwsR0FBZSxPQUFPLE1BQVAsQ0FBYyxFQUFkLEVBQWtCLEtBQUssT0FBdkIsRUFBZ0MsTUFBaEMsQ0FBZjtBQUNEOzs7d0JBRUcsRyxFQUFLO0FBQ1AsYUFBTyxLQUFLLE9BQUwsQ0FBYSxHQUFiLENBQVA7QUFDRDs7O3dCQUVHLEcsRUFBSyxLLEVBQU87QUFDZCxXQUFLLE9BQUwsQ0FBYSxHQUFiLElBQW9CLEtBQXBCO0FBQ0Q7Ozs7OztrQkFHWSxJQUFJLFNBQUosRTs7Ozs7Ozs7Ozs7QUNwQmY7Ozs7Ozs7Ozs7SUFFTSxLO0FBQ0osbUJBQWM7QUFBQTs7QUFDWixTQUFLLFNBQUwsR0FBaUI7QUFDZixlQUFTO0FBQ1AsZUFBTyxTQURBO0FBRVAsb0JBQVksU0FGTDtBQUdQLGNBQU07QUFIQyxPQURNO0FBTWYsYUFBTztBQUNMLGVBQU8sT0FERjtBQUVMLG9CQUFZLFFBRlA7QUFHTCxjQUFNO0FBSEQsT0FOUTtBQVdmLGVBQVM7QUFDUCxlQUFPLFNBREE7QUFFUCxvQkFBWSxTQUZMO0FBR1AsY0FBTTtBQUhDLE9BWE07QUFnQmYsWUFBTTtBQUNKLGVBQU8sYUFESDtBQUVKLG9CQUFZLE1BRlI7QUFHSixjQUFNO0FBSEY7QUFoQlMsS0FBakI7QUFzQkQ7Ozs7dUNBRWtCO0FBQ2pCLDRCQUFFLGNBQUYsRUFBa0IsSUFBbEI7QUFDRDs7O3NDQUVpQjtBQUNoQiw0QkFBRSxjQUFGLEVBQWtCLElBQWxCO0FBQ0Q7Ozs7NEVBRWlCLEcsRUFBSyxNLEVBQVEsSTs7Ozs7O0FBQzdCLHFCQUFLLGdCQUFMOzs7dUJBRXlCLGlCQUFFLElBQUYsQ0FBTztBQUM1Qix1QkFBSyxHQUR1QjtBQUU1Qix3QkFBTSxNQUZzQjtBQUc1QiwrQkFBYSxpQ0FIZTtBQUk1Qix3QkFBTSxXQUFXLEtBQVgsR0FBb0IsUUFBUSxJQUE1QixHQUFxQyxPQUFPLEtBQUssU0FBTCxDQUFlLElBQWYsQ0FBUCxHQUE4QjtBQUo3QyxpQkFBUCxDOzs7QUFBakIsd0I7O0FBTU4scUJBQUssZUFBTDtpREFDTyxROzs7Ozs7QUFFUCx3QkFBUSxLQUFSO0FBQ0EscUJBQUssZUFBTDtpREFDTyxJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OEJBSUQsSSxFQUFNLE8sRUFBUztBQUN2QixVQUFNLGNBQWMsc0JBQUUsZUFBRixDQUFwQjtBQUFBLFVBQ00sNENBQTBDLEtBQUssU0FBTCxDQUFlLElBQWYsRUFBcUIsVUFBL0QsNEpBR3FDLEtBQUssU0FBTCxDQUFlLElBQWYsRUFBcUIsS0FIMUQsb0tBUThCLEtBQUssU0FBTCxDQUFlLElBQWYsRUFBcUIsSUFSbkQsb0dBV1EsT0FYUixpRUFETjtBQWdCQSxrQkFBWSxJQUFaLENBQWlCLFlBQWpCO0FBQ0Esa0JBQVksTUFBWixHQUFxQixPQUFyQixDQUE2QixJQUE3QixFQUFtQyxPQUFuQyxFQUE0QyxZQUFNO0FBQ2hELG9CQUFZLElBQVosQ0FBaUIsRUFBakI7QUFDRCxPQUZEO0FBR0Q7OzsrQ0FFMEI7QUFDekIsV0FBSyxTQUFMLENBQWUsTUFBZixFQUF1QixrQkFBdkI7QUFDRDs7OzRCQUVPLEMsRUFBRyxFLEVBQUk7QUFDYixVQUFJLEVBQUUsR0FBRixLQUFVLE9BQWQsRUFBdUI7QUFDckIsV0FBRyxFQUFFLE1BQUYsQ0FBUyxLQUFaO0FBQ0Q7QUFDRjs7Ozs7O2tCQUdZLElBQUksS0FBSixFOzs7Ozs7Ozs7Ozs7QUN4RmY7Ozs7Ozs7Ozs7OztJQUVxQixTOzs7QUFDbkIscUJBQVksS0FBWixFQUFtQjtBQUFBOztBQUFBLHNIQUNYLEtBRFc7O0FBRWpCLFVBQUssS0FBTCxHQUFhO0FBQ1gsWUFBTTtBQUNKLGlCQUFTLEVBREw7QUFFSixlQUFPO0FBRkg7QUFESyxLQUFiO0FBRmlCO0FBUWxCOzs7OzZCQUVRO0FBQUEsd0JBQ29CLEtBQUssS0FBTCxDQUFXLElBRC9CO0FBQUEsVUFDQyxPQURELGVBQ0MsT0FERDtBQUFBLFVBQ1UsS0FEVixlQUNVLEtBRFY7O0FBRVAsYUFBTztBQUFBO0FBQUEsVUFBUyxXQUFVLEtBQW5CO0FBQ0w7QUFBQTtBQUFBLFlBQUssV0FBVSxVQUFmO0FBQ0UsaURBQUssSUFBRyxhQUFSO0FBREYsU0FESztBQUlMO0FBQUE7QUFBQSxZQUFLLFdBQVUsVUFBZjtBQUNFO0FBQUE7QUFBQSxjQUFPLFdBQVUsMENBQWpCO0FBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERjtBQUVFO0FBQUE7QUFBQSxvQkFBSSxXQUFVLGVBQWQ7QUFBQTtBQUFBO0FBRkY7QUFERixhQURGO0FBT0U7QUFBQTtBQUFBO0FBQ0csc0JBQVEsR0FBUixDQUFZO0FBQUEsdUJBQ1g7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQUssd0JBQUksQ0FBSjtBQUFMLG1CQURGO0FBRUU7QUFBQTtBQUFBLHNCQUFJLFdBQVUsZUFBZDtBQUErQix3QkFBSSxDQUFKO0FBQS9CO0FBRkYsaUJBRFc7QUFBQSxlQUFaO0FBREgsYUFQRjtBQWVFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUNFLHlEQURGO0FBRUU7QUFBQTtBQUFBLG9CQUFJLFdBQVUsZUFBZDtBQUErQjtBQUEvQjtBQUZGO0FBREY7QUFmRjtBQURGO0FBSkssT0FBUDtBQTZCRDs7Ozs7O2tCQTFDa0IsUzs7Ozs7Ozs7Ozs7O0FDRnJCOzs7Ozs7Ozs7Ozs7SUFFcUIsUTs7Ozs7Ozs7Ozs7NkJBQ1Y7QUFDUCxhQUFPO0FBQUE7QUFBQSxVQUFTLFdBQVUsZ0JBQW5CO0FBQUE7QUFBQSxPQUFQO0FBR0Q7Ozs7OztrQkFMa0IsUTs7Ozs7Ozs7Ozs7O0FDRnJCOzs7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQixVOzs7QUFDbkIsc0JBQVksS0FBWixFQUFtQjtBQUFBOztBQUFBLHdIQUNYLEtBRFc7O0FBRWpCLFVBQUssS0FBTCxHQUFhO0FBQ1gsY0FBUTtBQUNOLGtCQUFVLEVBREo7QUFFTixnQkFBUSxFQUZGO0FBR04sa0JBQVUsRUFISjtBQUlOLGtCQUFVLEVBSko7QUFLTixpQkFBUztBQUxIO0FBREcsS0FBYjtBQUZpQjtBQVdsQjs7OzsrQkFFVSxLLEVBQU8sUyxFQUFXO0FBQUEsVUFDbkIsTUFEbUIsR0FDUixLQUFLLEtBREcsQ0FDbkIsTUFEbUI7O0FBRTNCLGFBQU8sU0FBUCxJQUFvQixLQUFwQjtBQUNBLFdBQUssUUFBTCxDQUFjO0FBQUEsZUFBTyxFQUFFLGNBQUYsRUFBUDtBQUFBLE9BQWQ7QUFDRDs7OytCQUVVO0FBQ1QsVUFBTSxXQUFXLE9BQU8sTUFBUCxDQUFjLEVBQWQsRUFBa0IsS0FBSyxLQUFMLENBQVcsTUFBN0IsQ0FBakIsQ0FEUyxDQUM4QztBQUN2RCxXQUFLLEtBQUwsQ0FBVyxRQUFYLENBQW9CLFFBQXBCO0FBQ0Q7Ozs2QkFFUTtBQUFBOztBQUFBLFVBQ0MsTUFERCxHQUNZLEtBQUssS0FEakIsQ0FDQyxNQUREOztBQUVQLGFBQU87QUFBQTtBQUFBO0FBQ0w7QUFBQTtBQUFBLFlBQUssV0FBVSxhQUFmO0FBQ0U7QUFBQTtBQUFBLGNBQUssV0FBVSxZQUFmO0FBQ0UsOERBQVEsYUFBWSxxQkFBcEI7QUFDUSxxQkFBTyxPQUFPLFFBRHRCO0FBRVEsd0JBQVUsa0JBQUMsQ0FBRDtBQUFBLHVCQUFPLE9BQUssVUFBTCxDQUFnQixFQUFFLE1BQUYsQ0FBUyxLQUF6QixFQUFnQyxVQUFoQyxDQUFQO0FBQUEsZUFGbEI7QUFHUSwwQkFBWSxvQkFBQyxDQUFEO0FBQUEsdUJBQU8sZ0JBQU0sT0FBTixDQUFjLENBQWQsRUFBaUIsT0FBSyxRQUFMLENBQWMsSUFBZCxRQUFqQixDQUFQO0FBQUEsZUFIcEI7QUFERixXQURGO0FBT0U7QUFBQTtBQUFBLGNBQUssV0FBVSxZQUFmO0FBQ0U7QUFBQTtBQUFBLGdCQUFVLE9BQU8sT0FBTyxNQUF4QjtBQUNVLDBCQUFVLGtCQUFDLENBQUQ7QUFBQSx5QkFBTyxPQUFLLFVBQUwsQ0FBZ0IsRUFBRSxNQUFGLENBQVMsS0FBekIsRUFBZ0MsUUFBaEMsQ0FBUDtBQUFBLGlCQURwQjtBQUVFO0FBQUE7QUFBQSxrQkFBUSxPQUFNLEVBQWQ7QUFBQTtBQUFBLGVBRkY7QUFHRTtBQUFBO0FBQUEsa0JBQVEsT0FBTSxPQUFkO0FBQUE7QUFBQSxlQUhGO0FBSUU7QUFBQTtBQUFBLGtCQUFRLE9BQU0sWUFBZDtBQUFBO0FBQUEsZUFKRjtBQUtFO0FBQUE7QUFBQSxrQkFBUSxPQUFNLFlBQWQ7QUFBQTtBQUFBLGVBTEY7QUFNRTtBQUFBO0FBQUEsa0JBQVEsT0FBTSxXQUFkO0FBQUE7QUFBQSxlQU5GO0FBT0U7QUFBQTtBQUFBLGtCQUFRLE9BQU0sT0FBZDtBQUFBO0FBQUEsZUFQRjtBQVFFO0FBQUE7QUFBQSxrQkFBUSxPQUFNLFFBQWQ7QUFBQTtBQUFBLGVBUkY7QUFTRTtBQUFBO0FBQUEsa0JBQVEsT0FBTSxVQUFkO0FBQUE7QUFBQTtBQVRGO0FBREYsV0FQRjtBQW9CRTtBQUFBO0FBQUEsY0FBSyxXQUFVLFlBQWY7QUFDRTtBQUFBO0FBQUEsZ0JBQVUsT0FBTyxPQUFPLFFBQXhCO0FBQ1UsMEJBQVUsa0JBQUMsQ0FBRDtBQUFBLHlCQUFPLE9BQUssVUFBTCxDQUFnQixFQUFFLE1BQUYsQ0FBUyxLQUF6QixFQUFnQyxVQUFoQyxDQUFQO0FBQUEsaUJBRHBCO0FBRUU7QUFBQTtBQUFBLGtCQUFRLE9BQU0sRUFBZDtBQUFBO0FBQUEsZUFGRjtBQUdFO0FBQUE7QUFBQSxrQkFBUSxPQUFNLEdBQWQ7QUFBQTtBQUFBO0FBSEY7QUFERixXQXBCRjtBQTJCRTtBQUFBO0FBQUEsY0FBSyxXQUFVLFlBQWY7QUFDRTtBQUFBO0FBQUEsZ0JBQUssTUFBSyxTQUFWLEVBQW9CLFNBQVM7QUFBQSx5QkFBTSxPQUFLLFFBQUwsRUFBTjtBQUFBLGlCQUE3QjtBQUFBO0FBQUE7QUFERjtBQTNCRixTQURLO0FBZ0NKLGVBQU8sUUFBUCxJQUFtQjtBQUFBO0FBQUEsWUFBSyxXQUFVLGFBQWY7QUFDbEI7QUFBQTtBQUFBLGNBQUssV0FBVSxZQUFmO0FBQ0U7QUFBQTtBQUFBLGdCQUFVLE9BQU8sT0FBTyxRQUF4QjtBQUNVLDBCQUFVLGtCQUFDLENBQUQ7QUFBQSx5QkFBTyxPQUFLLFVBQUwsQ0FBZ0IsRUFBRSxNQUFGLENBQVMsS0FBekIsRUFBZ0MsVUFBaEMsQ0FBUDtBQUFBLGlCQURwQjtBQUVFO0FBQUE7QUFBQSxrQkFBUSxPQUFNLEVBQWQ7QUFBQTtBQUFBO0FBRkY7QUFERixXQURrQjtBQU9sQjtBQUFBO0FBQUEsY0FBSyxXQUFVLFlBQWY7QUFDRTtBQUFBO0FBQUEsZ0JBQVUsT0FBTyxPQUFPLE9BQXhCO0FBQ1UsMEJBQVUsa0JBQUMsQ0FBRDtBQUFBLHlCQUFPLE9BQUssVUFBTCxDQUFnQixFQUFFLE1BQUYsQ0FBUyxLQUF6QixFQUFnQyxTQUFoQyxDQUFQO0FBQUEsaUJBRHBCO0FBRUU7QUFBQTtBQUFBLGtCQUFRLE9BQU0sRUFBZDtBQUFBO0FBQUE7QUFGRjtBQURGO0FBUGtCO0FBaENmLE9BQVA7QUErQ0Q7Ozs7OztrQkExRWtCLFU7Ozs7Ozs7Ozs7OztBQ0pyQjs7OztBQUNBOzs7Ozs7Ozs7O0lBRXFCLFk7Ozs7Ozs7Ozs7OzZCQUNWO0FBQUEsVUFDQyxJQURELEdBQ1UsS0FBSyxLQURmLENBQ0MsSUFERDs7QUFFUCxhQUFPO0FBQUE7QUFBQSxVQUFTLFdBQVUsTUFBbkI7QUFDTDtBQUFBO0FBQUEsWUFBVSxNQUFNLElBQWhCO0FBQ0UsaURBQUssUUFBTyxJQUFaLEVBQWlCLE9BQU8sRUFBRSxPQUFPLE1BQVQsRUFBeEIsRUFBMkMsV0FBVSxJQUFyRCxHQURGO0FBRUUsaURBQUssUUFBTyxNQUFaLEVBQW1CLE9BQU8sRUFBRSxPQUFPLE9BQVQsRUFBMUIsRUFBOEMsV0FBVSxNQUF4RCxHQUZGO0FBR0UsaURBQUssUUFBTyxRQUFaLEVBQXFCLE9BQU8sRUFBRSxPQUFPLE9BQVQsRUFBNUIsRUFBZ0QsV0FBVSxRQUExRCxHQUhGO0FBSUUsaURBQUssUUFBTyxVQUFaLEVBQXVCLE9BQU8sRUFBRSxPQUFPLE9BQVQsRUFBOUIsRUFBa0QsV0FBVSxVQUE1RCxHQUpGO0FBS0UsaURBQUssUUFBTyxVQUFaLEVBQXVCLE9BQU8sRUFBRSxPQUFPLE9BQVQsRUFBOUIsRUFBa0QsV0FBVSxVQUE1RCxHQUxGO0FBTUUsaURBQUssUUFBTyxTQUFaLEVBQXNCLE9BQU8sRUFBRSxPQUFPLE9BQVQsRUFBN0IsRUFBaUQsV0FBVSxTQUEzRCxHQU5GO0FBT0UsaURBQUssUUFBTyxhQUFaLEVBQTBCLE9BQU8sRUFBRSxPQUFPLE9BQVQsRUFBakMsRUFBcUQsV0FBVSxNQUEvRCxHQVBGO0FBUUUsaURBQUssUUFBTyxTQUFaLEVBQXNCLE9BQU8sRUFBRSxPQUFPLE9BQVQsRUFBN0I7QUFSRjtBQURLLE9BQVA7QUFZRDs7Ozs7O2tCQWZrQixZOzs7Ozs7Ozs7Ozs7QUNIckI7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUIsTTs7O0FBQ25CLGtCQUFZLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxnSEFDWCxLQURXOztBQUVqQixRQUFNLE9BQU8sRUFBYjtBQUNBLFNBQUssSUFBSSxLQUFLLENBQWQsRUFBaUIsS0FBSyxFQUF0QixFQUEwQixFQUFFLEVBQTVCLEVBQWdDO0FBQzlCLFdBQUssSUFBTCxDQUFVO0FBQ1IsY0FEUTtBQUVSLHdCQUFjLEVBRk47QUFHUixnQkFBUSxXQUhBO0FBSVIsaUNBQXNCLEtBQUssRUFBTCxHQUFVLENBQWhDLENBSlE7QUFLUixpQ0FBc0IsS0FBSyxHQUFMLEdBQVcsQ0FBakMsQ0FMUTtBQU1SLDRCQUFpQixLQUFLLElBQUwsR0FBWSxDQUE3QixDQU5RO0FBT1IsY0FBTTtBQVBFLE9BQVY7QUFTRDtBQUNELFVBQUssS0FBTCxHQUFhLEVBQUUsVUFBRixFQUFiO0FBZGlCO0FBZWxCOzs7OzZCQUVRLFEsRUFBVSxDQUVsQjs7OzZCQUVRO0FBQ1AsYUFBTztBQUFBO0FBQUEsVUFBUyxXQUFVLE1BQW5CO0FBQ0w7QUFBQTtBQUFBLFlBQUssV0FBVSxZQUFmO0FBQ0U7QUFBQTtBQUFBLGNBQU0sSUFBRyxZQUFULEVBQXNCLFdBQVUsaUJBQWhDO0FBQUE7QUFBQSxXQURGO0FBRUU7QUFBQTtBQUFBLGNBQU0sV0FBVSx3QkFBaEI7QUFBQTtBQUFBO0FBRkYsU0FESztBQUtMLDhEQUFZLFVBQVUsS0FBSyxRQUFMLENBQWMsSUFBZCxDQUFtQixJQUFuQixDQUF0QixHQUxLO0FBTUwsZ0VBQWMsTUFBTSxLQUFLLEtBQUwsQ0FBVyxJQUEvQjtBQU5LLE9BQVA7QUFRRDs7Ozs7O2tCQS9Ca0IsTTs7Ozs7Ozs7Ozs7Ozs7QUNMckI7Ozs7Ozs7Ozs7Ozs7O0lBRWEsSyxXQUFBLEs7Ozs7Ozs7Ozs7OzZCQUNGO0FBQUEsbUJBQ2lDLEtBQUssS0FEdEM7QUFBQSxVQUNDLEtBREQsVUFDQyxLQUREO0FBQUEsVUFDUSxTQURSLFVBQ1EsU0FEUjtBQUFBLFVBQ3NCLE1BRHRCOztBQUVQLGFBQU8sa0RBQU8sTUFBSyxNQUFaLEVBQW1CLDZDQUEwQyxhQUFhLEVBQXZELENBQW5CLEVBQWdGLE9BQU8sS0FBdkYsSUFBa0csTUFBbEcsRUFBUDtBQUNEOzs7Ozs7SUFHVSxRLFdBQUEsUTs7Ozs7Ozs7Ozs7NkJBQ0Y7QUFBQSxvQkFDMkMsS0FBSyxLQURoRDtBQUFBLFVBQ0MsS0FERCxXQUNDLEtBREQ7QUFBQSxVQUNRLFNBRFIsV0FDUSxTQURSO0FBQUEsVUFDbUIsUUFEbkIsV0FDbUIsUUFEbkI7QUFBQSxVQUNnQyxNQURoQzs7QUFFUCxhQUFPO0FBQUE7QUFBQSxtQkFBUSw2Q0FBMEMsYUFBYSxFQUF2RCxDQUFSLEVBQXFFLE9BQU8sS0FBNUUsSUFBdUYsTUFBdkY7QUFDSjtBQURJLE9BQVA7QUFHRDs7Ozs7O0lBR1UsRyxXQUFBLEc7Ozs7Ozs7Ozs7OzZCQUNGO0FBQUEsb0JBQ2dELEtBQUssS0FEckQ7QUFBQSxVQUNDLElBREQsV0FDQyxJQUREO0FBQUEsVUFDTyxTQURQLFdBQ08sU0FEUDtBQUFBLFVBQ2tCLElBRGxCLFdBQ2tCLElBRGxCO0FBQUEsVUFDd0IsUUFEeEIsV0FDd0IsUUFEeEI7QUFBQSxVQUNxQyxNQURyQzs7QUFFUCxhQUFPO0FBQUE7QUFBQSxtQkFBUSxNQUFLLFFBQWIsRUFBc0IsZ0NBQTZCLFFBQVEsV0FBckMsV0FBb0QsYUFBYSxFQUFqRSxDQUF0QixJQUFpRyxNQUFqRztBQUNKLGdCQUFRO0FBREosT0FBUDtBQUdEOzs7Ozs7SUFHVSxRLFdBQUEsUTs7Ozs7Ozs7Ozs7NkJBQ0Y7QUFBQSxvQkFDK0IsS0FBSyxLQURwQztBQUFBLFVBQ0MsSUFERCxXQUNDLElBREQ7QUFBQSxVQUNPLFFBRFAsV0FDTyxRQURQO0FBQUEsVUFDb0IsTUFEcEI7QUFBQSxVQUVMLE9BRkssR0FFSyxTQUFTLEdBQVQsQ0FBYTtBQUFBLGVBQVMsTUFBTSxLQUFmO0FBQUEsT0FBYixDQUZMOztBQUlQLGFBQU87QUFBQTtBQUFBLFVBQVMsV0FBVSxNQUFuQjtBQUNMO0FBQUE7QUFBQSxZQUFTLFdBQVUsTUFBbkI7QUFDRTtBQUFBO0FBQUEsdUJBQU8sV0FBVSw4REFBakIsSUFBb0YsTUFBcEY7QUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFDRyx3QkFBUSxHQUFSLENBQVksVUFBQyxNQUFELEVBQVMsS0FBVCxFQUFtQjtBQUFBLHNCQUN0QixNQURzQixHQUNBLE1BREEsQ0FDdEIsTUFEc0I7QUFBQSxzQkFDWCxNQURXLDRCQUNBLE1BREE7O0FBRTlCLHlCQUFPO0FBQUE7QUFBQSwrQkFBSSxLQUFLLEtBQVQsSUFBcUIsTUFBckI7QUFBK0IsOEJBQVU7QUFBekMsbUJBQVA7QUFDRCxpQkFIQTtBQURIO0FBREYsYUFERjtBQVVFO0FBQUE7QUFBQTtBQUNHLG1CQUFLLEdBQUwsQ0FBUztBQUFBLHVCQUNSO0FBQUE7QUFBQSxvQkFBSSxJQUFJLE9BQU8sRUFBZjtBQUNHLDBCQUFRLEdBQVIsQ0FBWSxrQkFBVTtBQUFBLHdCQUNiLFNBRGEsR0FDWSxNQURaLENBQ2IsU0FEYTtBQUFBLHdCQUNDLE1BREQsNEJBQ1ksTUFEWjs7QUFFckIsMkJBQU87QUFBQTtBQUFTLDRCQUFUO0FBQW1CLDZCQUFPLFNBQVA7QUFBbkIscUJBQVA7QUFDRCxtQkFIQTtBQURILGlCQURRO0FBQUEsZUFBVDtBQURIO0FBVkY7QUFERjtBQURLLE9BQVA7QUF5QkQ7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6REg7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7O0lBRXFCLE07Ozs7Ozs7Ozs7OzZCQUNWO0FBQ1AsYUFBTztBQUFBO0FBQUEsVUFBUyxXQUFVLE1BQW5CO0FBQ0w7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLGNBQUssV0FBVSxtREFBZjtBQUNFO0FBQUE7QUFBQSxnQkFBRyxXQUFVLGNBQWIsRUFBNEIsTUFBSyxHQUFqQztBQUFBO0FBQUEsYUFERjtBQUVFO0FBQUE7QUFBQSxnQkFBSyxXQUFVLDBCQUFmO0FBQ0U7QUFBQTtBQUFBLGtCQUFJLFdBQVUsb0JBQWQ7QUFDRTtBQUFBO0FBQUEsb0JBQUksV0FBVSxVQUFkO0FBQ0U7QUFBQTtBQUFBLHNCQUFXLElBQUcsR0FBZCxFQUFrQixXQUFVLFVBQTVCLEVBQXVDLGlCQUFnQixRQUF2RDtBQUFBO0FBQUE7QUFERixpQkFERjtBQUlFO0FBQUE7QUFBQSxvQkFBSSxXQUFVLFVBQWQ7QUFDRTtBQUFBO0FBQUEsc0JBQU0sSUFBRyxTQUFULEVBQW1CLFdBQVUsVUFBN0IsRUFBd0MsaUJBQWdCLFFBQXhEO0FBQUE7QUFBQTtBQURGLGlCQUpGO0FBT0U7QUFBQTtBQUFBLG9CQUFJLFdBQVUsVUFBZDtBQUNFO0FBQUE7QUFBQSxzQkFBTSxJQUFHLGNBQVQsRUFBd0IsV0FBVSxVQUFsQyxFQUE2QyxpQkFBZ0IsUUFBN0Q7QUFBQTtBQUFBO0FBREYsaUJBUEY7QUFVRTtBQUFBO0FBQUEsb0JBQUksV0FBVSxVQUFkO0FBQ0U7QUFBQTtBQUFBLHNCQUFNLElBQUcsYUFBVCxFQUF1QixXQUFVLFVBQWpDLEVBQTRDLGlCQUFnQixRQUE1RDtBQUFBO0FBQUE7QUFERixpQkFWRjtBQWFFO0FBQUE7QUFBQSxvQkFBSSxXQUFVLFVBQWQ7QUFDRTtBQUFBO0FBQUEsc0JBQU0sSUFBRyxpQkFBVCxFQUEyQixXQUFVLFVBQXJDLEVBQWdELGlCQUFnQixRQUFoRTtBQUFBO0FBQUE7QUFERjtBQWJGLGVBREY7QUFrQkU7QUFBQTtBQUFBLGtCQUFNLFdBQVUsYUFBaEI7QUFBQTtBQUNTO0FBQUE7QUFBQTtBQUFTLG1DQUFVLEdBQVYsQ0FBYyxNQUFkO0FBQVQ7QUFEVDtBQWxCRjtBQUZGO0FBREYsU0FESztBQTRCTDtBQUFBO0FBQUEsWUFBTSxXQUFVLE1BQWhCO0FBQ0csZUFBSyxLQUFMLENBQVc7QUFEZCxTQTVCSztBQStCTDtBQUFBO0FBQUEsWUFBUSxXQUFVLG1EQUFsQjtBQUNFO0FBQUE7QUFBQSxjQUFLLFdBQVUsaUJBQWY7QUFDRTtBQUFBO0FBQUEsZ0JBQUcsV0FBVSxZQUFiO0FBQUE7QUFBQTtBQURGO0FBREY7QUEvQkssT0FBUDtBQXFDRDs7Ozs7O2tCQXZDa0IsTTs7Ozs7Ozs7Ozs7O0FDSnJCOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQixNOzs7Ozs7Ozs7Ozs2QkFDVjtBQUNQLGFBQU87QUFBQTtBQUFBLFVBQVEsaUNBQVI7QUFDTDtBQUFBO0FBQUEsWUFBTyxNQUFLLEdBQVosRUFBZ0IsMkJBQWhCO0FBQ0UsbUVBQVksOEJBQVosR0FERjtBQUVFLDhEQUFPLE1BQUssU0FBWixFQUFzQiwyQkFBdEIsR0FGRjtBQUdFLDhEQUFPLE1BQUssR0FBWixFQUFnQiw2QkFBaEI7QUFIRjtBQURLLE9BQVA7QUFPRDs7Ozs7O2tCQVRrQixNIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImltcG9ydCAnYmFiZWwtcG9seWZpbGwnO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyByZW5kZXIgfSBmcm9tICdyZWFjdC1kb20nO1xyXG5pbXBvcnQgUm91dGVzIGZyb20gJy4vcm91dGVzL3JvdXRlcyc7XHJcbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XHJcbmltcG9ydCBBcHBDb25maWcgZnJvbSAnLi9jb21tb24vY29uZmlnJztcclxuaW1wb3J0IFV0aWxzIGZyb20gJy4vY29tbW9uL3V0aWxzJztcclxuXHJcbmdsb2JhbC5qUXVlcnkgPSByZXF1aXJlKCdqcXVlcnknKTtcclxuZ2xvYmFsLlRldGhlciA9IHJlcXVpcmUoJ3RldGhlcicpO1xyXG5cclxuJChkb2N1bWVudCkuYWpheEVycm9yKChlLCBqcXhociwgc2V0dGluZ3MpID0+IHtcclxuICBpZiAoanF4aHIucmVzcG9uc2VUZXh0KSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IEpTT04ucGFyc2UoanF4aHIucmVzcG9uc2VUZXh0KTtcclxuICAgICAgY29uc29sZS5lcnJvcihyZXNwb25zZS5tZXNzYWdlKTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihqcXhoci5yZXNwb25zZVRleHQpO1xyXG4gICAgfVxyXG4gIH1cclxufSk7XHJcblxyXG4kKGFzeW5jICgpID0+IHtcclxuICBjb25zdCBpbml0aWFsQ29uZmlndXJhdGlvbiA9IGF3YWl0ICQuYWpheCh7XHJcbiAgICAgIHVybDogJy9hcGkvaW5pdCcsXHJcbiAgICAgIHR5cGU6ICdHRVQnLFxyXG4gICAgICBjb250ZW50VHlwZTogJ2FwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLTgnXHJcbiAgfSk7XHJcbiAgQXBwQ29uZmlnLmluaXQoaW5pdGlhbENvbmZpZ3VyYXRpb24pO1xyXG4gIHJlbmRlcig8Um91dGVzIC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVhY3Qtcm9vdCcpKTtcclxufSk7XHJcbiIsImNsYXNzIEFwcENvbmZpZyB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLl9jb25maWcgPSB7XHJcbiAgICAgIHNpemU6IFsxMCwgMjAsIDUwLCAxMDAsIDIwMCwgNTAwXVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaW5pdChjb25maWcpIHtcclxuICAgIHRoaXMuX2NvbmZpZyA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuX2NvbmZpZywgY29uZmlnKTtcclxuICB9XHJcblxyXG4gIGdldChrZXkpIHtcclxuICAgIHJldHVybiB0aGlzLl9jb25maWdba2V5XTtcclxuICB9XHJcblxyXG4gIHNldChrZXksIHZhbHVlKSB7XHJcbiAgICB0aGlzLl9jb25maWdba2V5XSA9IHZhbHVlO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmV3IEFwcENvbmZpZzsiLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xyXG5cclxuY2xhc3MgVXRpbHMge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy50b2FzdFR5cGUgPSB7XHJcbiAgICAgIHN1Y2Nlc3M6IHtcclxuICAgICAgICB0aXRsZTogJ1N1Y2Nlc3MnLFxyXG4gICAgICAgIGJhY2tncm91bmQ6ICdzdWNjZXNzJyxcclxuICAgICAgICBpY29uOiAnY2hlY2snXHJcbiAgICAgIH0sXHJcbiAgICAgIGVycm9yOiB7XHJcbiAgICAgICAgdGl0bGU6ICdFcnJvcicsXHJcbiAgICAgICAgYmFja2dyb3VuZDogJ2RhbmdlcicsXHJcbiAgICAgICAgaWNvbjogJ2luZm8nXHJcbiAgICAgIH0sXHJcbiAgICAgIHdhcm5pbmc6IHtcclxuICAgICAgICB0aXRsZTogJ1dhcm5pbmcnLFxyXG4gICAgICAgIGJhY2tncm91bmQ6ICd3YXJuaW5nJyxcclxuICAgICAgICBpY29uOiAnZXhjbGFtYXRpb24nXHJcbiAgICAgIH0sXHJcbiAgICAgIGluZm86IHtcclxuICAgICAgICB0aXRsZTogJ0luZm9ybWF0aW9uJyxcclxuICAgICAgICBiYWNrZ3JvdW5kOiAnaW5mbycsXHJcbiAgICAgICAgaWNvbjogJ2luZm8nXHJcbiAgICAgIH0sXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBiZWZvcmVQcm9jZXNzaW5nKCkge1xyXG4gICAgJChcIiNhamF4LWxvYWRlclwiKS5zaG93KCk7XHJcbiAgfVxyXG5cclxuICBhZnRlclByb2Nlc3NpbmcoKSB7XHJcbiAgICAkKFwiI2FqYXgtbG9hZGVyXCIpLmhpZGUoKTtcclxuICB9XHJcblxyXG4gIGFzeW5jIGFqYXhSZXF1ZXN0KHVybCwgbWV0aG9kLCBkYXRhKSB7XHJcbiAgICB0aGlzLmJlZm9yZVByb2Nlc3NpbmcoKTtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgJC5hamF4KHtcclxuICAgICAgICB1cmw6IHVybCxcclxuICAgICAgICB0eXBlOiBtZXRob2QsXHJcbiAgICAgICAgY29udGVudFR5cGU6ICdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04JyxcclxuICAgICAgICBkYXRhOiBtZXRob2QgPT09ICdHRVQnID8gKGRhdGEgfHwgbnVsbCkgOiAoZGF0YSA/IEpTT04uc3RyaW5naWZ5KGRhdGEpIDogbnVsbClcclxuICAgICAgfSk7XHJcbiAgICAgIHRoaXMuYWZ0ZXJQcm9jZXNzaW5nKCk7XHJcbiAgICAgIHJldHVybiByZXNwb25zZTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihlKTtcclxuICAgICAgdGhpcy5hZnRlclByb2Nlc3NpbmcoKTtcclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzaG93VG9hc3QodHlwZSwgbWVzc2FnZSkge1xyXG4gICAgY29uc3QgcmVhY3ROb3RpZnkgPSAkKCcjbm90aWZpY2F0aW9uJyksXHJcbiAgICAgICAgICBub3RpZmljYXRpb24gPSBgPGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LSR7dGhpcy50b2FzdFR5cGVbdHlwZV0uYmFja2dyb3VuZH0gY29udGFpbmVyLWZsdWlkXCIgcm9sZT1cImFsZXJ0XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTEyXCI+XHJcbiAgICAgICAgICAgICAgICA8aDYgY2xhc3M9XCJmb250LXdlaWdodC1ib2xkXCI+JHt0aGlzLnRvYXN0VHlwZVt0eXBlXS50aXRsZX08L2g2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMlwiPlxyXG4gICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS0yeCBmYS0ke3RoaXMudG9hc3RUeXBlW3R5cGVdLmljb259LWNpcmNsZVwiPjwvaT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTEwXCI+XHJcbiAgICAgICAgICAgICAgICAke21lc3NhZ2V9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+YDtcclxuICAgIHJlYWN0Tm90aWZ5Lmh0bWwobm90aWZpY2F0aW9uKTtcclxuICAgIHJlYWN0Tm90aWZ5LmZhZGVJbigpLmZhZGVPdXQoMzAwMCwgJ3N3aW5nJywgKCkgPT4ge1xyXG4gICAgICByZWFjdE5vdGlmeS5odG1sKCcnKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc2hvd05vUmVzdWx0Rm91bmRNZXNzYWdlKCkge1xyXG4gICAgdGhpcy5zaG93VG9hc3QoJ2luZm8nLCAnTm8gcmVzdWx0IGZvdW5kLicpO1xyXG4gIH1cclxuXHJcbiAgb25FbnRlcihlLCBmbikge1xyXG4gICAgaWYgKGUua2V5ID09PSAnRW50ZXInKSB7XHJcbiAgICAgIGZuKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBVdGlsczsiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGFzaGJvYXJkIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIHN1bW1hcnk6IFtdLFxyXG4gICAgICAgIHRvdGFsOiAwXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHsgc3VtbWFyeSwgdG90YWwgfSA9IHRoaXMuc3RhdGUuZGF0YTtcclxuICAgIHJldHVybiA8c2VjdGlvbiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tOFwiPlxyXG4gICAgICAgIDxkaXYgaWQ9XCJkb251dC1jaGFydFwiIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS00XCI+XHJcbiAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInRhYmxlIHRhYmxlLXNtIHRhYmxlLWhvdmVyIHRhYmxlLXN0cmlwZWRcIj5cclxuICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgIDx0aD5TdGF0dXM8L3RoPlxyXG4gICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJ0ZXh0LXNtLXJpZ2h0XCI+VG90YWwgUmVjb3JkczwvdGg+XHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICB7c3VtbWFyeS5tYXAoc3VtID0+XHJcbiAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgPHRkPntzdW1bMF19PC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0ZXh0LXNtLXJpZ2h0XCI+e3N1bVsxXX08L3RkPlxyXG4gICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgPHRmb290PlxyXG4gICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgPHRoPjwvdGg+XHJcbiAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cInRleHQtc20tcmlnaHRcIj57dG90YWx9PC90aD5cclxuICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgIDwvdGZvb3Q+XHJcbiAgICAgICAgPC90YWJsZT5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L3NlY3Rpb24+O1xyXG4gIH1cclxufSIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOb3RGb3VuZCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIDxzZWN0aW9uIGNsYXNzTmFtZT1cInRleHQtc20tY2VudGVyXCI+XHJcbiAgICAgIFNvcnJ5LCB0aGlzIHBhZ2UgaXMgbm90IGF2YWlsYWJsZVxyXG4gICAgPC9zZWN0aW9uPjtcclxuICB9XHJcbn0iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBGaWVsZCwgRHJvcERvd24sIEJ0biB9IGZyb20gJy4vdXgvYm9vdHN0cmFwJztcclxuaW1wb3J0IFV0aWxzIGZyb20gJ34vY29tbW9uL3V0aWxzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlYXJjaEZvcm0gZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBmaWVsZHM6IHtcclxuICAgICAgICBhbnlGaWVsZDogJycsXHJcbiAgICAgICAgc3RhdHVzOiAnJyxcclxuICAgICAgICBkaXZpc2lvbjogJycsXHJcbiAgICAgICAgYWN0aXZpdHk6ICcnLFxyXG4gICAgICAgIHByb2R1Y3Q6ICcnLFxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB1cGRhdGVGb3JtKHZhbHVlLCBmaWVsZE5hbWUpIHtcclxuICAgIGNvbnN0IHsgZmllbGRzIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgZmllbGRzW2ZpZWxkTmFtZV0gPSB2YWx1ZTtcclxuICAgIHRoaXMuc2V0U3RhdGUoKCkgPT4gKHsgZmllbGRzIH0pKTtcclxuICB9XHJcblxyXG4gIG9uU2VhcmNoKCkge1xyXG4gICAgY29uc3QgY3JpdGVyaWEgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnN0YXRlLmZpZWxkcyk7IC8vIGltbXV0YWJsZSBvYmplY3RcclxuICAgIHRoaXMucHJvcHMuZG9TZWFyY2goY3JpdGVyaWEpO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyBmaWVsZHMgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICByZXR1cm4gPHNlY3Rpb24+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1pbmxpbmVcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgIDxGaWVsZCAgcGxhY2Vob2xkZXI9XCJTZWFyY2ggb24gYW55IGZpZWxkXCJcclxuICAgICAgICAgICAgICAgICAgdmFsdWU9e2ZpZWxkcy5hbnlGaWVsZH1cclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB0aGlzLnVwZGF0ZUZvcm0oZS50YXJnZXQudmFsdWUsICdhbnlGaWVsZCcpfVxyXG4gICAgICAgICAgICAgICAgICBvbktleVByZXNzPXsoZSkgPT4gVXRpbHMub25FbnRlcihlLCB0aGlzLm9uU2VhcmNoLmJpbmQodGhpcykpfSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgPERyb3BEb3duIHZhbHVlPXtmaWVsZHMuc3RhdHVzfSBcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHRoaXMudXBkYXRlRm9ybShlLnRhcmdldC52YWx1ZSwgJ3N0YXR1cycpfT5cclxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPkFsbCBTdGF0dXNlczwvb3B0aW9uPlxyXG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiRFJBRlRcIj5EUkFGVDwvb3B0aW9uPlxyXG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiSU5fUFJPQ0VTU1wiPklOX1BST0NFU1M8L29wdGlvbj5cclxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlBST0NFU1NJTkdcIj5QUk9DRVNTSU5HPC9vcHRpb24+XHJcbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJQUk9DRVNTRURcIj5QUk9DRVNTRUQ8L29wdGlvbj5cclxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkVSUk9SXCI+RVJST1I8L29wdGlvbj5cclxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlNFRURFRFwiPlNFRURFRDwvb3B0aW9uPlxyXG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiQVdBSVRJTkdcIj5BV0FJVElORzwvb3B0aW9uPlxyXG4gICAgICAgICAgPC9Ecm9wRG93bj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgIDxEcm9wRG93biB2YWx1ZT17ZmllbGRzLmRpdmlzaW9ufSBcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHRoaXMudXBkYXRlRm9ybShlLnRhcmdldC52YWx1ZSwgJ2RpdmlzaW9uJyl9PlxyXG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCI+QWxsIERpdmlzaW9uczwvb3B0aW9uPlxyXG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMVwiPkRpdmlzaW9uIDE8L29wdGlvbj5cclxuICAgICAgICAgIDwvRHJvcERvd24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICA8QnRuIHR5cGU9XCJwcmltYXJ5XCIgb25DbGljaz17KCkgPT4gdGhpcy5vblNlYXJjaCgpfT5TZWFyY2g8L0J0bj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIHtmaWVsZHMuZGl2aXNpb24gJiYgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWlubGluZVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgPERyb3BEb3duIHZhbHVlPXtmaWVsZHMuYWN0aXZpdHl9IFxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy51cGRhdGVGb3JtKGUudGFyZ2V0LnZhbHVlLCAnYWN0aXZpdHknKX0+XHJcbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIj5BbGwgQWN0aXZpdGllczwvb3B0aW9uPlxyXG4gICAgICAgICAgPC9Ecm9wRG93bj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgIDxEcm9wRG93biB2YWx1ZT17ZmllbGRzLnByb2R1Y3R9IFxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy51cGRhdGVGb3JtKGUudGFyZ2V0LnZhbHVlLCAncHJvZHVjdCcpfT5cclxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPkFsbCBQcm9kdWN0czwvb3B0aW9uPlxyXG4gICAgICAgICAgPC9Ecm9wRG93bj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+fVxyXG4gICAgPC9zZWN0aW9uPjtcclxuICB9XHJcbn0iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBCb290R3JpZCB9IGZyb20gJy4vdXgvYm9vdHN0cmFwJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlYXJjaFJlc3VsdCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyBkYXRhIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgcmV0dXJuIDxzZWN0aW9uIGNsYXNzTmFtZT1cImZsZXhcIj5cclxuICAgICAgPEJvb3RHcmlkIGRhdGE9e2RhdGF9PlxyXG4gICAgICAgIDxkaXYgaGVhZGVyPVwiSURcIiBzdHlsZT17eyB3aWR0aDogJzUwcHgnIH19IGRhdGFJbmRleD1cImlkXCIgLz5cclxuICAgICAgICA8ZGl2IGhlYWRlcj1cIk5hbWVcIiBzdHlsZT17eyB3aWR0aDogJzE1MHB4JyB9fSBkYXRhSW5kZXg9XCJuYW1lXCIgLz5cclxuICAgICAgICA8ZGl2IGhlYWRlcj1cIlN0YXR1c1wiIHN0eWxlPXt7IHdpZHRoOiAnMTAwcHgnIH19IGRhdGFJbmRleD1cInN0YXR1c1wiIC8+XHJcbiAgICAgICAgPGRpdiBoZWFkZXI9XCJEaXZpc2lvblwiIHN0eWxlPXt7IHdpZHRoOiAnMzUwcHgnIH19IGRhdGFJbmRleD1cImRpdmlzaW9uXCIgLz5cclxuICAgICAgICA8ZGl2IGhlYWRlcj1cIkFjdGl2aXR5XCIgc3R5bGU9e3sgd2lkdGg6ICczNTBweCcgfX0gZGF0YUluZGV4PVwiYWN0aXZpdHlcIiAvPlxyXG4gICAgICAgIDxkaXYgaGVhZGVyPVwiUHJvZHVjdFwiIHN0eWxlPXt7IHdpZHRoOiAnMzUwcHgnIH19IGRhdGFJbmRleD1cInByb2R1Y3RcIiAvPlxyXG4gICAgICAgIDxkaXYgaGVhZGVyPVwiRGVzY3JpcHRpb25cIiBzdHlsZT17eyB3aWR0aDogJzgwMHB4JyB9fSBkYXRhSW5kZXg9XCJkZXNjXCIgLz5cclxuICAgICAgICA8ZGl2IGhlYWRlcj1cIkFjdGlvbnNcIiBzdHlsZT17eyB3aWR0aDogJzE1MHB4JyB9fSAvPlxyXG4gICAgICA8L0Jvb3RHcmlkPlxyXG4gICAgPC9zZWN0aW9uPjtcclxuICB9XHJcbn0iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyJztcclxuaW1wb3J0IFNlYXJjaEZvcm0gZnJvbSAnLi9zZWFyY2gtZm9ybSc7XHJcbmltcG9ydCBTZWFyY2hSZXN1bHQgZnJvbSAnLi9zZWFyY2gtcmVzdWx0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlYXJjaCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIGNvbnN0IGRhdGEgPSBbXTtcclxuICAgIGZvciAobGV0IGlkID0gMDsgaWQgPCAxMDsgKytpZCkge1xyXG4gICAgICBkYXRhLnB1c2goe1xyXG4gICAgICAgIGlkLFxyXG4gICAgICAgIG5hbWU6IGBOYW1lICR7aWR9YCxcclxuICAgICAgICBzdGF0dXM6ICdQUk9DRVNTRUQnLFxyXG4gICAgICAgIGRpdmlzaW9uOiBgRGl2aXNpb24gJHtpZCAlIDEwICsgMX1gLFxyXG4gICAgICAgIGFjdGl2aXR5OiBgQWN0aXZpdHkgJHtpZCAlIDEwMCArIDF9YCxcclxuICAgICAgICBwcm9kdWN0OiBgTmFtZSAke2lkICUgMTAwMCArIDF9YCxcclxuICAgICAgICBkZXNjOiAnJ1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIHRoaXMuc3RhdGUgPSB7IGRhdGEgfTtcclxuICB9XHJcblxyXG4gIGRvU2VhcmNoKGNyaXRlcmlhKSB7XHJcblxyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIDxzZWN0aW9uIGNsYXNzTmFtZT1cInZib3hcIj5cclxuICAgICAgPG5hdiBjbGFzc05hbWU9XCJicmVhZGNydW1iXCI+XHJcbiAgICAgICAgPExpbmsgdG89XCIvZGFzaGJvYXJkXCIgY2xhc3NOYW1lPVwiYnJlYWRjcnVtYi1pdGVtXCI+RGFzaGJvYXJkPC9MaW5rPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJyZWFkY3J1bWItaXRlbSBhY3RpdmVcIj5TZWFyY2g8L3NwYW4+XHJcbiAgICAgIDwvbmF2PlxyXG4gICAgICA8U2VhcmNoRm9ybSBkb1NlYXJjaD17dGhpcy5kb1NlYXJjaC5iaW5kKHRoaXMpfSAvPlxyXG4gICAgICA8U2VhcmNoUmVzdWx0IGRhdGE9e3RoaXMuc3RhdGUuZGF0YX0gLz5cclxuICAgIDwvc2VjdGlvbj47XHJcbiAgfVxyXG59IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmV4cG9ydCBjbGFzcyBGaWVsZCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyB2YWx1ZSwgY2xhc3NOYW1lLCAuLi5vdGhlcnMgfSA9IHRoaXMucHJvcHM7XHJcbiAgICByZXR1cm4gPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPXtgZm9ybS1jb250cm9sIGZvcm0tY29udHJvbC1zbSR7Y2xhc3NOYW1lIHx8ICcnfWB9IHZhbHVlPXt2YWx1ZX0gey4uLm90aGVyc30gLz47XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRHJvcERvd24gZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHsgdmFsdWUsIGNsYXNzTmFtZSwgY2hpbGRyZW4sIC4uLm90aGVycyB9ID0gdGhpcy5wcm9wcztcclxuICAgIHJldHVybiA8c2VsZWN0IGNsYXNzTmFtZT17YGZvcm0tY29udHJvbCBmb3JtLWNvbnRyb2wtc20ke2NsYXNzTmFtZSB8fCAnJ31gfSB2YWx1ZT17dmFsdWV9IHsuLi5vdGhlcnN9PlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L3NlbGVjdD47XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQnRuIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7IHR5cGUsIGNsYXNzTmFtZSwgdGV4dCwgY2hpbGRyZW4sIC4uLm90aGVycyB9ID0gdGhpcy5wcm9wcztcclxuICAgIHJldHVybiA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9e2BidG4gYnRuLXNtIGJ0bi0ke3R5cGUgfHwgJ3NlY29uZGFyeSd9ICR7Y2xhc3NOYW1lIHx8ICcnfWB9IHsuLi5vdGhlcnN9PlxyXG4gICAgICB7dGV4dCB8fCBjaGlsZHJlbn1cclxuICAgIDwvYnV0dG9uPjtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBCb290R3JpZCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyBkYXRhLCBjaGlsZHJlbiwgLi4ub3RoZXJzIH0gPSB0aGlzLnByb3BzLFxyXG4gICAgICBjb2x1bW5zID0gY2hpbGRyZW4ubWFwKGNoaWxkID0+IGNoaWxkLnByb3BzKTtcclxuXHJcbiAgICByZXR1cm4gPHNlY3Rpb24gY2xhc3NOYW1lPVwidmJveFwiPlxyXG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJmbGV4XCI+XHJcbiAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInRhYmxlIHRhYmxlLXNtIHRhYmxlLXN0cmlwZWQgdGFibGUtYm9yZGVyZWQgdGFibGUtcmVzcG9uc2l2ZVwiIHsuLi5vdGhlcnN9PlxyXG4gICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAge2NvbHVtbnMubWFwKChjb2x1bW4sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB7IGhlYWRlciwgLi4ub3RoZXJzIH0gPSBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gPHRoIGtleT17aW5kZXh9IHsgLi4ub3RoZXJzIH0+e2hlYWRlciB8fCAnJ308L3RoPlxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAge2RhdGEubWFwKGVudGl0eSA9PlxyXG4gICAgICAgICAgICAgIDx0ciBpZD17ZW50aXR5LmlkfT5cclxuICAgICAgICAgICAgICAgIHtjb2x1bW5zLm1hcChjb2x1bW4gPT4ge1xyXG4gICAgICAgICAgICAgICAgICBjb25zdCB7IGRhdGFJbmRleCwgLi4ub3RoZXJzIH0gPSBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICAgIHJldHVybiA8dGQgeyAuLi5vdGhlcnMgfT57ZW50aXR5W2RhdGFJbmRleF19PC90ZD5cclxuICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgIDwvdGFibGU+XHJcbiAgICAgIDwvc2VjdGlvbj5cclxuICAgIDwvc2VjdGlvbj47XHJcbiAgfVxyXG59IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEFwcENvbmZpZyBmcm9tICd+L2NvbW1vbi9jb25maWcnO1xyXG5pbXBvcnQgeyBJbmRleExpbmssIExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGF5b3V0IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gPHNlY3Rpb24gY2xhc3NOYW1lPVwidmJveFwiPlxyXG4gICAgICA8aGVhZGVyPlxyXG4gICAgICAgIDxuYXYgY2xhc3NOYW1lPVwibmF2YmFyIG5hdmJhci10b2dnbGVhYmxlLW1kIG5hdmJhci1saWdodCBiZy1mYWRlZFwiPlxyXG4gICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2YmFyLWJyYW5kXCIgaHJlZj1cIi9cIj5SZWFjdCBDTVM8L2E+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbGxhcHNlIG5hdmJhci1jb2xsYXBzZVwiPlxyXG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2YmFyLW5hdiBtci1hdXRvXCI+XHJcbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICA8SW5kZXhMaW5rIHRvPVwiL1wiIGNsYXNzTmFtZT1cIm5hdi1saW5rXCIgYWN0aXZlQ2xhc3NOYW1lPVwiYWN0aXZlXCI+RGFzaGJvYXJkPC9JbmRleExpbms+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgIDxMaW5rIHRvPVwiL3NlYXJjaFwiIGNsYXNzTmFtZT1cIm5hdi1saW5rXCIgYWN0aXZlQ2xhc3NOYW1lPVwiYWN0aXZlXCI+U2VhcmNoPC9MaW5rPlxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICA8TGluayB0bz1cIi9hdWRpdC10cmFpbFwiIGNsYXNzTmFtZT1cIm5hdi1saW5rXCIgYWN0aXZlQ2xhc3NOYW1lPVwiYWN0aXZlXCI+QXVkaXQgVHJhaWw8L0xpbms+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgIDxMaW5rIHRvPVwiL21vbml0b3JpbmdcIiBjbGFzc05hbWU9XCJuYXYtbGlua1wiIGFjdGl2ZUNsYXNzTmFtZT1cImFjdGl2ZVwiPk1vbml0b3Jpbmc8L0xpbms+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgIDxMaW5rIHRvPVwiL2FkbWluaXN0cmF0aW9uXCIgY2xhc3NOYW1lPVwibmF2LWxpbmtcIiBhY3RpdmVDbGFzc05hbWU9XCJhY3RpdmVcIj5BZG1pbmlzdHJhdGlvbjwvTGluaz5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJuYXZiYXItdGV4dFwiPlxyXG4gICAgICAgICAgICAgIEhlbGxvLCA8c3Ryb25nPntBcHBDb25maWcuZ2V0KCduYW1lJyl9PC9zdHJvbmc+XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvbmF2PlxyXG4gICAgICA8L2hlYWRlcj5cclxuICAgICAgPG1haW4gY2xhc3NOYW1lPVwiZmxleFwiPlxyXG4gICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxyXG4gICAgICA8L21haW4+XHJcbiAgICAgIDxmb290ZXIgY2xhc3NOYW1lPVwibmF2YmFyIG5hdmJhci10b2dnbGVhYmxlLW1kIG5hdmJhci1saWdodCBiZy1mYWRlZFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkXCI+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkXCI+JmNvcHk7MjAxNyBSZWFjdCBDTVM8L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZm9vdGVyPlxyXG4gICAgPC9zZWN0aW9uPjtcclxuICB9XHJcbn0iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBSb3V0ZXIsIFJvdXRlLCBJbmRleFJvdXRlLCBoYXNoSGlzdG9yeSB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnfi9sYXlvdXRzL2xheW91dCc7XHJcbmltcG9ydCBEYXNoYm9hcmQgZnJvbSAnfi9jb21wb25lbnRzL2Rhc2hib2FyZCc7XHJcbmltcG9ydCBTZWFyY2ggZnJvbSAnfi9jb21wb25lbnRzL3NlYXJjaCc7XHJcbmltcG9ydCBOb3RGb3VuZCBmcm9tICd+L2NvbXBvbmVudHMvbm90Zm91bmQnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUm91dGVzIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gPFJvdXRlciBoaXN0b3J5PXtoYXNoSGlzdG9yeX0+XHJcbiAgICAgIDxSb3V0ZSBwYXRoPVwiL1wiIGNvbXBvbmVudD17TGF5b3V0fT5cclxuICAgICAgICA8SW5kZXhSb3V0ZSBjb21wb25lbnQ9e0Rhc2hib2FyZH0gLz5cclxuICAgICAgICA8Um91dGUgcGF0aD1cIi9zZWFyY2hcIiBjb21wb25lbnQ9e1NlYXJjaH0gLz5cclxuICAgICAgICA8Um91dGUgcGF0aD1cIipcIiBjb21wb25lbnQ9e05vdEZvdW5kfSAvPlxyXG4gICAgICA8L1JvdXRlPlxyXG4gICAgPC9Sb3V0ZXI+O1xyXG4gIH1cclxufSJdfQ==
