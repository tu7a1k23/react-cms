(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{}],2:[function(require,module,exports){
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CardCreate = (_dec = (0, _extReact.Route)('/cards/create'), _dec(_class = function (_Component) {
  _inherits(CardCreate, _Component);

  function CardCreate() {
    _classCallCheck(this, CardCreate);

    return _possibleConstructorReturn(this, (CardCreate.__proto__ || Object.getPrototypeOf(CardCreate)).apply(this, arguments));
  }

  _createClass(CardCreate, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'h1',
        null,
        'CardCreate'
      );
    }
  }]);

  return CardCreate;
}(_react.Component)) || _class);
exports.default = CardCreate;

},{"ext-react":"ext-react","react":"react"}],3:[function(require,module,exports){
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CardDetail = (_dec = (0, _extReact.Route)('/cards/:id'), _dec(_class = function (_Component) {
  _inherits(CardDetail, _Component);

  function CardDetail() {
    _classCallCheck(this, CardDetail);

    return _possibleConstructorReturn(this, (CardDetail.__proto__ || Object.getPrototypeOf(CardDetail)).apply(this, arguments));
  }

  _createClass(CardDetail, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'h1',
        null,
        this.props.params.id
      );
    }
  }]);

  return CardDetail;
}(_react.Component)) || _class);
exports.default = CardDetail;

},{"ext-react":"ext-react","react":"react"}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _dec2, _class;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _d = require('d3');

var d3 = _interopRequireWildcard(_d);

var _extReact = require('ext-react');

var _dashboard = require('./dashboard.view');

var _dashboard2 = _interopRequireDefault(_dashboard);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _default = (_dec = (0, _extReact.Route)('/'), _dec2 = (0, _extReact.Component)({
  view: _dashboard2.default
}), _dec(_class = _dec2(_class = function () {
  function _default() {
    _classCallCheck(this, _default);

    this.title = 'Dashboard';
  }

  _createClass(_default, [{
    key: 'renderChart',
    value: function renderChart() {
      this.renderPieChart();
      this.renderDonutChart();
    }
  }, {
    key: 'renderPieChart',
    value: function renderPieChart() {
      var dataset = [{ label: 'Abulia', count: 10 }, { label: 'Betelgeuse', count: 20 }, { label: 'Cantaloupe', count: 30 }, { label: 'Dijkstra', count: 40 }],
          width = 360,
          height = 360,
          radius = Math.min(width, height) / 2,

      // color = d3.scaleOrdinal(d3.schemeCategory20b),
      color = d3.scaleOrdinal().range(['#A60F2B', '#648C85', '#B3F2C9', '#528C18', '#C3F25C']),
          svg = d3.select('#pie').append('svg').attr('width', width).attr('height', height).append('g').attr('transform', 'translate(' + width / 2 + ',' + height / 2 + ')'),
          arc = d3.arc().innerRadius(0).outerRadius(radius),
          pie = d3.pie().value(function (d) {
        return d.count;
      }).sort(null),
          path = svg.selectAll('path').data(pie(dataset)).enter().append('path').attr('d', arc).attr('fill', function (d, i) {
        return color(d.data.label);
      });
    }
  }, {
    key: 'renderDonutChart',
    value: function renderDonutChart() {
      var dataset = [{ label: 'Abulia', count: 10 }, { label: 'Betelgeuse', count: 20 }, { label: 'Cantaloupe', count: 30 }, { label: 'Dijkstra', count: 40 }],
          width = 360,
          height = 360,
          radius = Math.min(width, height) / 2,
          donutWidth = 75,

      // color = d3.scaleOrdinal(d3.schemeCategory20b),
      color = d3.scaleOrdinal().range(['#A60F2B', '#648C85', '#B3F2C9', '#528C18', '#C3F25C']),
          svg = d3.select('#donut').append('svg').attr('width', width).attr('height', height).append('g').attr('transform', 'translate(' + width / 2 + ',' + height / 2 + ')'),
          arc = d3.arc().innerRadius(radius - donutWidth).outerRadius(radius),
          pie = d3.pie().value(function (d) {
        return d.count;
      }).sort(null),
          path = svg.selectAll('path').data(pie(dataset)).enter().append('path').attr('d', arc).attr('fill', function (d, i) {
        return color(d.data.label);
      }),
          legendRectSize = 18,
          legendSpacing = 4,
          legend = svg.selectAll('.legend').data(color.domain()).enter().append('g').attr('class', 'legend').attr('transform', function (d, i) {
        var height = legendRectSize + legendSpacing,
            offset = height * color.domain().length / 2,
            horz = -2 * legendRectSize,
            vert = i * height - offset;
        return 'translate(' + horz + ',' + vert + ')';
      }),
          tooltip = d3.select('#donut').append('div').attr('class', 'tooltip');
      legend.append('rect').attr('width', legendRectSize).attr('height', legendRectSize).style('fill', color).style('stroke', color);
      legend.append('text').attr('x', legendRectSize + legendSpacing).attr('y', legendRectSize - legendSpacing).text(function (d) {
        return d;
      });
      tooltip.append('div').attr('class', 'label');
      tooltip.append('div').attr('class', 'count');
      tooltip.append('div').attr('class', 'percent');
      path.on('mouseover', function (d) {
        var total = d3.sum(dataset.map(function (d) {
          return d.count;
        })),
            percent = Math.round(1000 * d.data.count / total) / 10;
        tooltip.select('.label').html(d.data.label);
        tooltip.select('.count').html(d.data.count);
        tooltip.select('.percent').html(percent + '%');
        tooltip.style('position', 'absolute').style('display', 'block');
      });
      path.on('mousemove', function (d) {
        return tooltip.style('top', d3.event.layerY + 10 + 'px').style('left', d3.event.layerX + 10 + 'px');
      });
      path.on('mouseout', function () {
        return tooltip.style('display', 'none');
      });
    }
  }]);

  return _default;
}()) || _class) || _class);

exports.default = _default;

},{"./dashboard.view":5,"d3":"d3","ext-react":"ext-react","react":"react"}],5:[function(require,module,exports){
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

var DashboardView = function (_Component) {
  _inherits(DashboardView, _Component);

  function DashboardView() {
    _classCallCheck(this, DashboardView);

    return _possibleConstructorReturn(this, (DashboardView.__proto__ || Object.getPrototypeOf(DashboardView)).apply(this, arguments));
  }

  _createClass(DashboardView, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.vm.renderChart();
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
          this.props.vm.title
        ),
        _react2.default.createElement(
          'div',
          { className: 'row' },
          _react2.default.createElement(
            'div',
            { className: 'col-3' },
            _react2.default.createElement('div', { id: 'pie' })
          ),
          _react2.default.createElement(
            'div',
            { className: 'col-3' },
            _react2.default.createElement('div', { id: 'donut' })
          )
        )
      );
    }
  }]);

  return DashboardView;
}(_react.Component);

exports.default = DashboardView;

},{"ext-react":"ext-react","react":"react"}],6:[function(require,module,exports){
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
    var vm = _ref.vm;
    return _react2.default.createElement(
      _extReact.Container,
      { className: 'panel-body' },
      _react2.default.createElement(
        'h1',
        null,
        vm.title
      )
    );
  }
}), _dec(_class = _dec2(_class = function _default() {
  _classCallCheck(this, _default);

  this.title = 'Not Found';
}) || _class) || _class);

exports.default = _default;

},{"ext-react":"ext-react","react":"react"}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _extReact = require('ext-react');

var _card = require('../../stores/card');

var _card2 = _interopRequireDefault(_card);

var _searchForm = require('./search-form.view');

var _searchForm2 = _interopRequireDefault(_searchForm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _default = (_dec = (0, _extReact.Component)({
  componentAs: 'searchForm',
  view: _searchForm2.default
}), _dec(_class = function () {
  function _default() {
    _classCallCheck(this, _default);
  }

  _createClass(_default, [{
    key: 'search',
    value: function search() {
      _card2.default.load();
    }
  }]);

  return _default;
}()) || _class);

exports.default = _default;

},{"../../stores/card":17,"./search-form.view":8,"ext-react":"ext-react"}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _desc, _value, _class;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _extReact = require('ext-react');

var _cardType = require('../../stores/card-type');

var _cardType2 = _interopRequireDefault(_cardType);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

var _default = (_class = function (_Component) {
  _inherits(_default, _Component);

  function _default() {
    _classCallCheck(this, _default);

    return _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).apply(this, arguments));
  }

  _createClass(_default, [{
    key: 'render',
    value: function render(_ref) {
      var searchForm = _ref.searchForm;

      return _react2.default.createElement(
        'section',
        { className: 'form-group form-inline' },
        _react2.default.createElement(_extReact.Field, { className: 'mr-sm' }),
        _react2.default.createElement(_extReact.Button, { className: 'primary mr-sm', text: 'Search', onClick: searchForm.search })
      );
    }
  }]);

  return _default;
}(_react.Component), (_applyDecoratedDescriptor(_class.prototype, 'render', [_extReact.withProps], Object.getOwnPropertyDescriptor(_class.prototype, 'render'), _class.prototype)), _class);

exports.default = _default;

},{"../../stores/card-type":16,"ext-react":"ext-react","react":"react"}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _extReact = require('ext-react');

var _card = require('../../stores/card');

var _card2 = _interopRequireDefault(_card);

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
        _react2.default.createElement(
          _extReact.Grid,
          { store: _card2.default },
          _react2.default.createElement('div', { text: 'ID', dataIndex: 'Id', className: 'text-center', style: { width: 150 } }),
          _react2.default.createElement('div', { text: 'Name', dataIndex: 'Name', className: 'text-center', style: { width: 250 } }),
          _react2.default.createElement('div', { text: 'Type', dataIndex: 'Type', className: 'text-center', style: { width: 100 } }),
          _react2.default.createElement('div', { text: 'Introduction', dataIndex: 'Introduction', className: 'text-center', style: { width: 1000 } }),
          _react2.default.createElement('div', { text: 'STR', dataIndex: 'STR', className: 'text-center', style: { width: 50 } }),
          _react2.default.createElement('div', { text: 'AGI', dataIndex: 'AGI', className: 'text-center', style: { width: 50 } }),
          _react2.default.createElement('div', { text: 'HP', dataIndex: 'HP', className: 'text-center', style: { width: 50 } }),
          _react2.default.createElement('div', { text: 'DEX', dataIndex: 'DEX', className: 'text-center', style: { width: 50 } }),
          _react2.default.createElement('div', { text: 'INT', dataIndex: 'INT', className: 'text-center', style: { width: 50 } }),
          _react2.default.createElement('div', { text: 'SEN', dataIndex: 'SEN', className: 'text-center', style: { width: 50 } }),
          _react2.default.createElement('div', { text: 'Armor', dataIndex: 'ArmorUsable', className: 'text-center', style: { width: 100 } }),
          _react2.default.createElement('div', { text: 'Weapon', dataIndex: 'WeaponUsable', className: 'text-center', style: { width: 100 } })
        )
      );
    }
  }]);

  return _default;
}(_react.Component);

exports.default = _default;

},{"../../stores/card":17,"ext-react":"ext-react","react":"react"}],10:[function(require,module,exports){
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

var _searchForm = require('./search-form');

var _searchForm2 = _interopRequireDefault(_searchForm);

var _searchResult = require('./search-result');

var _searchResult2 = _interopRequireDefault(_searchResult);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Search = (_dec = (0, _extReact.Route)('/search'), _dec(_class = function (_Component) {
  _inherits(Search, _Component);

  function Search() {
    _classCallCheck(this, Search);

    return _possibleConstructorReturn(this, (Search.__proto__ || Object.getPrototypeOf(Search)).apply(this, arguments));
  }

  _createClass(Search, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _extReact.Container,
        { className: 'panel-body' },
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
}(_react.Component)) || _class);
exports.default = Search;

},{"./search-form":7,"./search-result":9,"ext-react":"ext-react","react":"react"}],11:[function(require,module,exports){
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

},{"react":"react"}],12:[function(require,module,exports){
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
        null,
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
              'Dashboard'
            ),
            _react2.default.createElement(
              _extReact.Link,
              { to: '/search', className: 'nav-item' },
              'Search'
            ),
            _react2.default.createElement(
              _extReact.Link,
              { to: '/reporting', className: 'nav-item' },
              'Reporting'
            ),
            _react2.default.createElement(
              _extReact.Link,
              { to: '/admin', className: 'nav-item' },
              'Administration'
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

},{"ext-react":"ext-react","react":"react"}],13:[function(require,module,exports){
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

},{"./footer":11,"./header":12,"ext-react":"ext-react","react":"react"}],14:[function(require,module,exports){
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

var _dashboard = require('./components/dashboard/dashboard');

var _dashboard2 = _interopRequireDefault(_dashboard);

var _search = require('./components/search/search');

var _search2 = _interopRequireDefault(_search);

var _cardCreate = require('./components/card/card-create');

var _cardCreate2 = _interopRequireDefault(_cardCreate);

var _cardDetail = require('./components/card/card-detail');

var _cardDetail2 = _interopRequireDefault(_cardDetail);

var _notfound = require('./components/notfound/notfound');

var _notfound2 = _interopRequireDefault(_notfound);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_extReact2.default.launch(_react2.default.createElement(_viewport2.default, null));

},{"./components/card/card-create":2,"./components/card/card-detail":3,"./components/dashboard/dashboard":4,"./components/notfound/notfound":6,"./components/search/search":10,"./components/viewport/viewport":13,"./services/common":15,"babel-polyfill":"babel-polyfill","ext-react":"ext-react","react":"react"}],15:[function(require,module,exports){
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

},{"../common/config":1,"ext-react":"ext-react"}],16:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extReact = require('ext-react');

exports.default = (0, _extReact.Store)({
  storeId: 'CardTypeStore',
  data: [{ id: null, code: 'MELEE', name: 'Melee' }, { id: null, code: 'SHOOT', name: 'Shoot' }, { id: null, code: 'MAGIC', name: 'Magic' }]
});

},{"ext-react":"ext-react"}],17:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extReact = require('ext-react');

exports.default = (0, _extReact.Store)({
  storeId: 'CardStore',
  proxy: {
    url: '/api/cards',
    method: 'post'
  },
  autoLoad: true
});

},{"ext-react":"ext-react"}]},{},[14])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvY29tbW9uL2NvbmZpZy5qcyIsInNyYy9qcy9jb21wb25lbnRzL2NhcmQvY2FyZC1jcmVhdGUuanN4Iiwic3JjL2pzL2NvbXBvbmVudHMvY2FyZC9jYXJkLWRldGFpbC5qc3giLCJzcmMvanMvY29tcG9uZW50cy9kYXNoYm9hcmQvZGFzaGJvYXJkLmpzIiwic3JjL2pzL2NvbXBvbmVudHMvZGFzaGJvYXJkL2Rhc2hib2FyZC52aWV3LmpzeCIsInNyYy9qcy9jb21wb25lbnRzL25vdGZvdW5kL25vdGZvdW5kLmpzeCIsInNyYy9qcy9jb21wb25lbnRzL3NlYXJjaC9zZWFyY2gtZm9ybS5qcyIsInNyYy9qcy9jb21wb25lbnRzL3NlYXJjaC9zZWFyY2gtZm9ybS52aWV3LmpzeCIsInNyYy9qcy9jb21wb25lbnRzL3NlYXJjaC9zZWFyY2gtcmVzdWx0LmpzeCIsInNyYy9qcy9jb21wb25lbnRzL3NlYXJjaC9zZWFyY2guanN4Iiwic3JjL2pzL2NvbXBvbmVudHMvdmlld3BvcnQvZm9vdGVyLmpzeCIsInNyYy9qcy9jb21wb25lbnRzL3ZpZXdwb3J0L2hlYWRlci5qc3giLCJzcmMvanMvY29tcG9uZW50cy92aWV3cG9ydC92aWV3cG9ydC5qc3giLCJzcmMvanMvbWFpbi5qcyIsInNyYy9qcy9zZXJ2aWNlcy9jb21tb24uanMiLCJzcmMvanMvc3RvcmVzL2NhcmQtdHlwZS5qcyIsInNyYy9qcy9zdG9yZXMvY2FyZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUNBTSxNO0FBQ0osb0JBQWM7QUFBQTs7QUFDWixTQUFLLE9BQUwsR0FBZTtBQUNiLDBCQUFvQjtBQUNsQixjQUFNO0FBQ0osbUJBQVMsRUFETDtBQUVKLGdCQUFNO0FBRkYsU0FEWTtBQUtsQixlQUFPO0FBQ0wsaUJBQU87QUFERjtBQUxXO0FBRFAsS0FBZjtBQVdEOzs7O3dCQUVHLE0s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LElBQUwsQ0FBVSxFQUFFLEtBQUssV0FBUCxFQUFWLEM7Ozs7OzRCQUFWLEc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQkFGVSxhOzs7Ozs7Ozs7QUNKckI7O2tCQUVlLHFCQUFNO0FBQ25CLFdBQVMsZUFEVTtBQUVuQixRQUFNLENBQ0osRUFBRSxJQUFJLElBQU4sRUFBWSxNQUFNLE9BQWxCLEVBQTJCLE1BQU0sT0FBakMsRUFESSxFQUVKLEVBQUUsSUFBSSxJQUFOLEVBQVksTUFBTSxPQUFsQixFQUEyQixNQUFNLE9BQWpDLEVBRkksRUFHSixFQUFFLElBQUksSUFBTixFQUFZLE1BQU0sT0FBbEIsRUFBMkIsTUFBTSxPQUFqQyxFQUhJO0FBRmEsQ0FBTixDOzs7Ozs7Ozs7QUNGZjs7a0JBRWUscUJBQU07QUFDbkIsV0FBUyxXQURVO0FBRW5CLFNBQU87QUFDTCxTQUFLLFlBREE7QUFFTCxZQUFRO0FBRkgsR0FGWTtBQU1uQixZQUFVO0FBTlMsQ0FBTixDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImNsYXNzIENvbmZpZyB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuX2NvbmZpZyA9IHtcbiAgICAgIERPTlVUX0NIQVJUX0NPTkZJRzoge1xuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgY29sdW1uczogW10sXG4gICAgICAgICAgdHlwZTogJ2RvbnV0J1xuICAgICAgICB9LFxuICAgICAgICBkb251dDoge1xuICAgICAgICAgIHRpdGxlOiAnQ2FyZHMgcGVyIFR5cGUnXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBhZGQoY29uZmlnKSB7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLl9jb25maWcsIGNvbmZpZylcbiAgfVxuXG4gIGdldChrZXkpIHtcbiAgICByZXR1cm4gdGhpcy5fY29uZmlnW2tleV1cbiAgfVxuXG4gIHNldChrZXksIHZhbHVlKSB7XG4gICAgdGhpcy5fY29uZmlnW2tleV0gPSB2YWx1ZVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBDb25maWciLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBSb3V0ZSB9IGZyb20gJ2V4dC1yZWFjdCdcblxuQFJvdXRlKCcvY2FyZHMvY3JlYXRlJylcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhcmRDcmVhdGUgZXh0ZW5kcyBDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIDxoMT5DYXJkQ3JlYXRlPC9oMT5cbiAgfVxufSIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFJvdXRlIH0gZnJvbSAnZXh0LXJlYWN0J1xuXG5AUm91dGUoJy9jYXJkcy86aWQnKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FyZERldGFpbCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gPGgxPnt0aGlzLnByb3BzLnBhcmFtcy5pZH08L2gxPlxuICB9XG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCAqIGFzIGQzIGZyb20gJ2QzJztcbmltcG9ydCB7IFJvdXRlLCBDb21wb25lbnQgfSBmcm9tICdleHQtcmVhY3QnO1xuaW1wb3J0IERhc2hib2FyZFZpZXcgZnJvbSAnLi9kYXNoYm9hcmQudmlldyc7XG5cbkBSb3V0ZSgnLycpXG5AQ29tcG9uZW50KHtcbiAgdmlldzogRGFzaGJvYXJkVmlld1xufSlcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy50aXRsZSA9ICdEYXNoYm9hcmQnO1xuICB9XG5cbiAgcmVuZGVyQ2hhcnQoKSB7XG4gICAgdGhpcy5yZW5kZXJQaWVDaGFydCgpO1xuICAgIHRoaXMucmVuZGVyRG9udXRDaGFydCgpO1xuICB9XG5cbiAgcmVuZGVyUGllQ2hhcnQoKSB7XG4gICAgY29uc3QgZGF0YXNldCA9IFtcbiAgICAgICAgICAgIHsgbGFiZWw6ICdBYnVsaWEnLCBjb3VudDogMTAgfSxcbiAgICAgICAgICAgIHsgbGFiZWw6ICdCZXRlbGdldXNlJywgY291bnQ6IDIwIH0sXG4gICAgICAgICAgICB7IGxhYmVsOiAnQ2FudGFsb3VwZScsIGNvdW50OiAzMCB9LFxuICAgICAgICAgICAgeyBsYWJlbDogJ0RpamtzdHJhJywgY291bnQ6IDQwIH1cbiAgICAgICAgICBdLFxuICAgICAgICAgIHdpZHRoID0gMzYwLFxuICAgICAgICAgIGhlaWdodCA9IDM2MCxcbiAgICAgICAgICByYWRpdXMgPSBNYXRoLm1pbih3aWR0aCwgaGVpZ2h0KSAvIDIsXG4gICAgICAgICAgLy8gY29sb3IgPSBkMy5zY2FsZU9yZGluYWwoZDMuc2NoZW1lQ2F0ZWdvcnkyMGIpLFxuICAgICAgICAgIGNvbG9yID0gZDMuc2NhbGVPcmRpbmFsKCkucmFuZ2UoWycjQTYwRjJCJywgJyM2NDhDODUnLCAnI0IzRjJDOScsICcjNTI4QzE4JywgJyNDM0YyNUMnXSksXG4gICAgICAgICAgc3ZnID0gZDMuc2VsZWN0KCcjcGllJylcbiAgICAgICAgICAgICAgICAgIC5hcHBlbmQoJ3N2ZycpXG4gICAgICAgICAgICAgICAgICAuYXR0cignd2lkdGgnLCB3aWR0aClcbiAgICAgICAgICAgICAgICAgIC5hdHRyKCdoZWlnaHQnLCBoZWlnaHQpXG4gICAgICAgICAgICAgICAgICAuYXBwZW5kKCdnJylcbiAgICAgICAgICAgICAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlKCcgKyAod2lkdGggLyAyKSArICAnLCcgKyAoaGVpZ2h0IC8gMikgKyAnKScpLFxuICAgICAgICAgIGFyYyA9IGQzLmFyYygpXG4gICAgICAgICAgICAgICAgICAuaW5uZXJSYWRpdXMoMClcbiAgICAgICAgICAgICAgICAgIC5vdXRlclJhZGl1cyhyYWRpdXMpLFxuICAgICAgICAgIHBpZSA9IGQzLnBpZSgpXG4gICAgICAgICAgICAgICAgICAudmFsdWUoZCA9PiBkLmNvdW50KVxuICAgICAgICAgICAgICAgICAgLnNvcnQobnVsbCksXG4gICAgICAgICAgcGF0aCA9IHN2Zy5zZWxlY3RBbGwoJ3BhdGgnKVxuICAgICAgICAgICAgICAgICAgICAuZGF0YShwaWUoZGF0YXNldCkpXG4gICAgICAgICAgICAgICAgICAgIC5lbnRlcigpXG4gICAgICAgICAgICAgICAgICAgIC5hcHBlbmQoJ3BhdGgnKVxuICAgICAgICAgICAgICAgICAgICAuYXR0cignZCcsIGFyYylcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2ZpbGwnLCAoZCwgaSkgPT4gY29sb3IoZC5kYXRhLmxhYmVsKSk7XG4gIH1cblxuICByZW5kZXJEb251dENoYXJ0KCkge1xuICAgIGNvbnN0IGRhdGFzZXQgPSBbXG4gICAgICAgICAgICB7IGxhYmVsOiAnQWJ1bGlhJywgY291bnQ6IDEwIH0sXG4gICAgICAgICAgICB7IGxhYmVsOiAnQmV0ZWxnZXVzZScsIGNvdW50OiAyMCB9LFxuICAgICAgICAgICAgeyBsYWJlbDogJ0NhbnRhbG91cGUnLCBjb3VudDogMzAgfSxcbiAgICAgICAgICAgIHsgbGFiZWw6ICdEaWprc3RyYScsIGNvdW50OiA0MCB9XG4gICAgICAgICAgXSxcbiAgICAgICAgICB3aWR0aCA9IDM2MCxcbiAgICAgICAgICBoZWlnaHQgPSAzNjAsXG4gICAgICAgICAgcmFkaXVzID0gTWF0aC5taW4od2lkdGgsIGhlaWdodCkgLyAyLFxuICAgICAgICAgIGRvbnV0V2lkdGggPSA3NSxcbiAgICAgICAgICAvLyBjb2xvciA9IGQzLnNjYWxlT3JkaW5hbChkMy5zY2hlbWVDYXRlZ29yeTIwYiksXG4gICAgICAgICAgY29sb3IgPSBkMy5zY2FsZU9yZGluYWwoKS5yYW5nZShbJyNBNjBGMkInLCAnIzY0OEM4NScsICcjQjNGMkM5JywgJyM1MjhDMTgnLCAnI0MzRjI1QyddKSxcbiAgICAgICAgICBzdmcgPSBkMy5zZWxlY3QoJyNkb251dCcpXG4gICAgICAgICAgICAgICAgICAuYXBwZW5kKCdzdmcnKVxuICAgICAgICAgICAgICAgICAgLmF0dHIoJ3dpZHRoJywgd2lkdGgpXG4gICAgICAgICAgICAgICAgICAuYXR0cignaGVpZ2h0JywgaGVpZ2h0KVxuICAgICAgICAgICAgICAgICAgLmFwcGVuZCgnZycpXG4gICAgICAgICAgICAgICAgICAuYXR0cigndHJhbnNmb3JtJywgJ3RyYW5zbGF0ZSgnICsgKHdpZHRoIC8gMikgKyAgJywnICsgKGhlaWdodCAvIDIpICsgJyknKSxcbiAgICAgICAgICBhcmMgPSBkMy5hcmMoKVxuICAgICAgICAgICAgICAgICAgLmlubmVyUmFkaXVzKHJhZGl1cyAtIGRvbnV0V2lkdGgpXG4gICAgICAgICAgICAgICAgICAub3V0ZXJSYWRpdXMocmFkaXVzKSxcbiAgICAgICAgICBwaWUgPSBkMy5waWUoKVxuICAgICAgICAgICAgICAgICAgLnZhbHVlKGQgPT4gZC5jb3VudClcbiAgICAgICAgICAgICAgICAgIC5zb3J0KG51bGwpLFxuICAgICAgICAgIHBhdGggPSBzdmcuc2VsZWN0QWxsKCdwYXRoJylcbiAgICAgICAgICAgICAgICAgICAgLmRhdGEocGllKGRhdGFzZXQpKVxuICAgICAgICAgICAgICAgICAgICAuZW50ZXIoKVxuICAgICAgICAgICAgICAgICAgICAuYXBwZW5kKCdwYXRoJylcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2QnLCBhcmMpXG4gICAgICAgICAgICAgICAgICAgIC5hdHRyKCdmaWxsJywgKGQsIGkpID0+IGNvbG9yKGQuZGF0YS5sYWJlbCkpLFxuICAgICAgICAgIGxlZ2VuZFJlY3RTaXplID0gMTgsXG4gICAgICAgICAgbGVnZW5kU3BhY2luZyA9IDQsXG4gICAgICAgICAgbGVnZW5kID0gc3ZnLnNlbGVjdEFsbCgnLmxlZ2VuZCcpXG4gICAgICAgICAgICAgICAgICAgICAgLmRhdGEoY29sb3IuZG9tYWluKCkpXG4gICAgICAgICAgICAgICAgICAgICAgLmVudGVyKClcbiAgICAgICAgICAgICAgICAgICAgICAuYXBwZW5kKCdnJylcbiAgICAgICAgICAgICAgICAgICAgICAuYXR0cignY2xhc3MnLCAnbGVnZW5kJylcbiAgICAgICAgICAgICAgICAgICAgICAuYXR0cigndHJhbnNmb3JtJywgKGQsIGkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGhlaWdodCA9IGxlZ2VuZFJlY3RTaXplICsgbGVnZW5kU3BhY2luZyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9mZnNldCA9ICBoZWlnaHQgKiBjb2xvci5kb21haW4oKS5sZW5ndGggLyAyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaG9yeiA9IC0yICogbGVnZW5kUmVjdFNpemUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0ID0gaSAqIGhlaWdodCAtIG9mZnNldDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAndHJhbnNsYXRlKCcgKyBob3J6ICsgJywnICsgdmVydCArICcpJztcbiAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICB0b29sdGlwID0gZDMuc2VsZWN0KCcjZG9udXQnKVxuICAgICAgICAgICAgICAgICAgICAgIC5hcHBlbmQoJ2RpdicpXG4gICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2NsYXNzJywgJ3Rvb2x0aXAnKTtcbiAgICBsZWdlbmQuYXBwZW5kKCdyZWN0JykuYXR0cignd2lkdGgnLCBsZWdlbmRSZWN0U2l6ZSkuYXR0cignaGVpZ2h0JywgbGVnZW5kUmVjdFNpemUpLnN0eWxlKCdmaWxsJywgY29sb3IpLnN0eWxlKCdzdHJva2UnLCBjb2xvcik7XG4gICAgbGVnZW5kLmFwcGVuZCgndGV4dCcpLmF0dHIoJ3gnLCBsZWdlbmRSZWN0U2l6ZSArIGxlZ2VuZFNwYWNpbmcpLmF0dHIoJ3knLCBsZWdlbmRSZWN0U2l6ZSAtIGxlZ2VuZFNwYWNpbmcpLnRleHQoZCA9PiBkKTtcbiAgICB0b29sdGlwLmFwcGVuZCgnZGl2JykuYXR0cignY2xhc3MnLCAnbGFiZWwnKTtcbiAgICB0b29sdGlwLmFwcGVuZCgnZGl2JykuYXR0cignY2xhc3MnLCAnY291bnQnKTtcbiAgICB0b29sdGlwLmFwcGVuZCgnZGl2JykuYXR0cignY2xhc3MnLCAncGVyY2VudCcpO1xuICAgIHBhdGgub24oJ21vdXNlb3ZlcicsIGQgPT4ge1xuICAgICAgY29uc3QgdG90YWwgPSBkMy5zdW0oZGF0YXNldC5tYXAoZCA9PiBkLmNvdW50KSksXG4gICAgICAgICAgICBwZXJjZW50ID0gTWF0aC5yb3VuZCgxMDAwICogZC5kYXRhLmNvdW50IC8gdG90YWwpIC8gMTA7XG4gICAgICB0b29sdGlwLnNlbGVjdCgnLmxhYmVsJykuaHRtbChkLmRhdGEubGFiZWwpO1xuICAgICAgdG9vbHRpcC5zZWxlY3QoJy5jb3VudCcpLmh0bWwoZC5kYXRhLmNvdW50KTtcbiAgICAgIHRvb2x0aXAuc2VsZWN0KCcucGVyY2VudCcpLmh0bWwocGVyY2VudCArICclJyk7XG4gICAgICB0b29sdGlwLnN0eWxlKCdwb3NpdGlvbicsICdhYnNvbHV0ZScpLnN0eWxlKCdkaXNwbGF5JywgJ2Jsb2NrJyk7XG4gICAgfSk7XG4gICAgcGF0aC5vbignbW91c2Vtb3ZlJywgZCA9PiB0b29sdGlwLnN0eWxlKCd0b3AnLCAoZDMuZXZlbnQubGF5ZXJZICsgMTApICsgJ3B4Jykuc3R5bGUoJ2xlZnQnLCAoZDMuZXZlbnQubGF5ZXJYICsgMTApICsgJ3B4JykpO1xuICAgIHBhdGgub24oJ21vdXNlb3V0JywgKCkgPT4gdG9vbHRpcC5zdHlsZSgnZGlzcGxheScsICdub25lJykpO1xuICB9XG59IiwiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge0NvbnRhaW5lcn0gZnJvbSAnZXh0LXJlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGFzaGJvYXJkVmlldyBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMucHJvcHMudm0ucmVuZGVyQ2hhcnQoKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gPENvbnRhaW5lciBjbGFzc05hbWU9XCJwYW5lbC1ib2R5XCI+XG4gICAgICA8aDE+e3RoaXMucHJvcHMudm0udGl0bGV9PC9oMT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTNcIj48ZGl2IGlkPVwicGllXCI+PC9kaXY+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTNcIj48ZGl2IGlkPVwiZG9udXRcIj48L2Rpdj48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvQ29udGFpbmVyPlxuICB9XG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFJvdXRlLCBDb21wb25lbnQsIENvbnRhaW5lciB9IGZyb20gJ2V4dC1yZWFjdCc7XG5cbkBSb3V0ZSgnKicpXG5AQ29tcG9uZW50KHtcbiAgdmlldzogKHsgdm0gfSkgPT4gPENvbnRhaW5lciBjbGFzc05hbWU9XCJwYW5lbC1ib2R5XCI+PGgxPnt2bS50aXRsZX08L2gxPjwvQ29udGFpbmVyPlxufSlcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy50aXRsZSA9ICdOb3QgRm91bmQnO1xuICB9XG59IiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnZXh0LXJlYWN0JztcbmltcG9ydCBDYXJkU3RvcmUgZnJvbSAnfi9zdG9yZXMvY2FyZCc7XG5pbXBvcnQgU2VhcmNoRm9ybVZpZXcgZnJvbSAnLi9zZWFyY2gtZm9ybS52aWV3JztcblxuQENvbXBvbmVudCh7XG4gIGNvbXBvbmVudEFzOiAnc2VhcmNoRm9ybScsXG4gIHZpZXc6IFNlYXJjaEZvcm1WaWV3XG59KVxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xuICBzZWFyY2goKSB7XG4gICAgQ2FyZFN0b3JlLmxvYWQoKTtcbiAgfVxufSIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB3aXRoUHJvcHMsIEZpZWxkLCBCdXR0b24gfSBmcm9tICdleHQtcmVhY3QnO1xuaW1wb3J0IENhcmRUeXBlU3RvcmUgZnJvbSAnfi9zdG9yZXMvY2FyZC10eXBlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb21wb25lbnQge1xuICBAd2l0aFByb3BzXG4gIHJlbmRlcih7IHNlYXJjaEZvcm0gfSkge1xuICAgIHJldHVybiA8c2VjdGlvbiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIGZvcm0taW5saW5lXCI+XG4gICAgICA8RmllbGQgY2xhc3NOYW1lPVwibXItc21cIiAvPlxuICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJwcmltYXJ5IG1yLXNtXCIgdGV4dD1cIlNlYXJjaFwiIG9uQ2xpY2s9e3NlYXJjaEZvcm0uc2VhcmNofSAvPlxuICAgIDwvc2VjdGlvbj47XG4gIH1cbn0iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQ29udGFpbmVyLCBHcmlkIH0gZnJvbSAnZXh0LXJlYWN0JztcbmltcG9ydCBDYXJkU3RvcmUgZnJvbSAnfi9zdG9yZXMvY2FyZCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiA8Q29udGFpbmVyPlxuICAgICAgPEdyaWQgc3RvcmU9e0NhcmRTdG9yZX0+XG4gICAgICAgIDxkaXYgdGV4dD1cIklEXCIgZGF0YUluZGV4PVwiSWRcIiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiIHN0eWxlPXt7d2lkdGg6MTUwfX0gLz5cbiAgICAgICAgPGRpdiB0ZXh0PVwiTmFtZVwiIGRhdGFJbmRleD1cIk5hbWVcIiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiIHN0eWxlPXt7d2lkdGg6MjUwfX0gLz5cbiAgICAgICAgPGRpdiB0ZXh0PVwiVHlwZVwiIGRhdGFJbmRleD1cIlR5cGVcIiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiIHN0eWxlPXt7d2lkdGg6MTAwfX0gLz5cbiAgICAgICAgPGRpdiB0ZXh0PVwiSW50cm9kdWN0aW9uXCIgZGF0YUluZGV4PVwiSW50cm9kdWN0aW9uXCIgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIiBzdHlsZT17e3dpZHRoOjEwMDB9fSAvPlxuICAgICAgICA8ZGl2IHRleHQ9XCJTVFJcIiBkYXRhSW5kZXg9XCJTVFJcIiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiIHN0eWxlPXt7d2lkdGg6NTB9fSAvPlxuICAgICAgICA8ZGl2IHRleHQ9XCJBR0lcIiBkYXRhSW5kZXg9XCJBR0lcIiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiIHN0eWxlPXt7d2lkdGg6NTB9fSAvPlxuICAgICAgICA8ZGl2IHRleHQ9XCJIUFwiIGRhdGFJbmRleD1cIkhQXCIgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIiBzdHlsZT17e3dpZHRoOjUwfX0gLz5cbiAgICAgICAgPGRpdiB0ZXh0PVwiREVYXCIgZGF0YUluZGV4PVwiREVYXCIgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIiBzdHlsZT17e3dpZHRoOjUwfX0gLz5cbiAgICAgICAgPGRpdiB0ZXh0PVwiSU5UXCIgZGF0YUluZGV4PVwiSU5UXCIgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIiBzdHlsZT17e3dpZHRoOjUwfX0gLz5cbiAgICAgICAgPGRpdiB0ZXh0PVwiU0VOXCIgZGF0YUluZGV4PVwiU0VOXCIgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIiBzdHlsZT17e3dpZHRoOjUwfX0gLz5cbiAgICAgICAgPGRpdiB0ZXh0PVwiQXJtb3JcIiBkYXRhSW5kZXg9XCJBcm1vclVzYWJsZVwiIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCIgc3R5bGU9e3t3aWR0aDoxMDB9fSAvPlxuICAgICAgICA8ZGl2IHRleHQ9XCJXZWFwb25cIiBkYXRhSW5kZXg9XCJXZWFwb25Vc2FibGVcIiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiIHN0eWxlPXt7d2lkdGg6MTAwfX0gLz5cbiAgICAgIDwvR3JpZD5cbiAgICA8L0NvbnRhaW5lcj47XG4gIH1cbn0iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBSb3V0ZSwgQ29udGFpbmVyIH0gZnJvbSAnZXh0LXJlYWN0J1xuaW1wb3J0IFNlYXJjaEZvcm0gZnJvbSAnLi9zZWFyY2gtZm9ybSdcbmltcG9ydCBTZWFyY2hSZXN1bHQgZnJvbSAnLi9zZWFyY2gtcmVzdWx0J1xuXG5AUm91dGUoJy9zZWFyY2gnKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VhcmNoIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiA8Q29udGFpbmVyIGNsYXNzTmFtZT1cInBhbmVsLWJvZHlcIj5cbiAgICAgIDxoMT5TZWFyY2g8L2gxPlxuICAgICAgPFNlYXJjaEZvcm0gLz5cbiAgICAgIDxTZWFyY2hSZXN1bHQgLz5cbiAgICA8L0NvbnRhaW5lcj5cbiAgfVxufSIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiA8Zm9vdGVyPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgdGV4dC1jZW50ZXJcIj4mY29weTsgMjAxNyBodXl0cm9uZ25ndXllbjwvZGl2PlxuICAgIDwvZm9vdGVyPjtcbiAgfVxufSIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMaW5rLCBDYWNoZSB9IGZyb20gJ2V4dC1yZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiA8aGVhZGVyPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJicmFuZFwiPlJlYWN0IENNUzwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXJcIj5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdmJhci1uYXYgbXItYXV0b1wiPlxuICAgICAgICAgIDxMaW5rIHRvPVwiL1wiIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+RGFzaGJvYXJkPC9MaW5rPlxuICAgICAgICAgIDxMaW5rIHRvPVwiL3NlYXJjaFwiIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+U2VhcmNoPC9MaW5rPlxuICAgICAgICAgIDxMaW5rIHRvPVwiL3JlcG9ydGluZ1wiIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+UmVwb3J0aW5nPC9MaW5rPlxuICAgICAgICAgIDxMaW5rIHRvPVwiL2FkbWluXCIgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5BZG1pbmlzdHJhdGlvbjwvTGluaz5cbiAgICAgICAgPC91bD5cbiAgICAgICAgPGRpdj5IZWxsbywgPHN0cm9uZz57Q2FjaGUuZ2V0KCdjb25maWd1cmF0aW9uJykubmFtZX08L3N0cm9uZz48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvaGVhZGVyPjtcbiAgfVxufSIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBDb250YWluZXIsIEhhc2hSb3V0ZXIgfSBmcm9tICdleHQtcmVhY3QnO1xuaW1wb3J0IEhlYWRlciBmcm9tICcuL2hlYWRlcic7XG5pbXBvcnQgRm9vdGVyIGZyb20gJy4vZm9vdGVyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIDxDb250YWluZXI+XG4gICAgICA8SGVhZGVyIC8+XG4gICAgICA8Q29udGFpbmVyIGhib3g+XG4gICAgICAgIDxDb250YWluZXIgaWQ9XCJtYWluLWNvbnRhaW5lclwiPlxuICAgICAgICAgIDxIYXNoUm91dGVyIC8+XG4gICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgPC9Db250YWluZXI+XG4gICAgICA8Rm9vdGVyIC8+XG4gICAgPC9Db250YWluZXI+O1xuICB9XG59IiwiaW1wb3J0ICdiYWJlbC1wb2x5ZmlsbCc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJleHQgZnJvbSAnZXh0LXJlYWN0JztcbmltcG9ydCBDb21tb25TZXJ2aWNlIGZyb20gJy4vc2VydmljZXMvY29tbW9uJztcbmltcG9ydCBWaWV3cG9ydCBmcm9tICcuL2NvbXBvbmVudHMvdmlld3BvcnQvdmlld3BvcnQnO1xuaW1wb3J0IERhc2hib2FyZCBmcm9tICcuL2NvbXBvbmVudHMvZGFzaGJvYXJkL2Rhc2hib2FyZCc7XG5pbXBvcnQgU2VhcmNoIGZyb20gJy4vY29tcG9uZW50cy9zZWFyY2gvc2VhcmNoJztcbmltcG9ydCBDYXJkQ3JlYXRlIGZyb20gJy4vY29tcG9uZW50cy9jYXJkL2NhcmQtY3JlYXRlJztcbmltcG9ydCBDYXJkRGV0YWlsIGZyb20gJy4vY29tcG9uZW50cy9jYXJkL2NhcmQtZGV0YWlsJztcbmltcG9ydCBOb3RGb3VuZCBmcm9tICcuL2NvbXBvbmVudHMvbm90Zm91bmQvbm90Zm91bmQnO1xuXG5SZXh0LmxhdW5jaCg8Vmlld3BvcnQgLz4pOyIsImltcG9ydCBSZXh0LCB7IFNlcnZpY2UgfSBmcm9tICdleHQtcmVhY3QnXG5pbXBvcnQgQ29uZmlnIGZyb20gJ34vY29tbW9uL2NvbmZpZydcblxuQFNlcnZpY2VcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbW1vblNlcnZpY2Uge1xuICBhc3luYyBpbml0QXBwKCkge1xuICAgIENvbmZpZy5hZGQoYXdhaXQgUmV4dC5hamF4KHsgdXJsOiAnL2FwaS9pbml0JyB9KSlcbiAgfVxufSIsImltcG9ydCB7IFN0b3JlIH0gZnJvbSAnZXh0LXJlYWN0J1xuXG5leHBvcnQgZGVmYXVsdCBTdG9yZSh7XG4gIHN0b3JlSWQ6ICdDYXJkVHlwZVN0b3JlJyxcbiAgZGF0YTogW1xuICAgIHsgaWQ6IG51bGwsIGNvZGU6ICdNRUxFRScsIG5hbWU6ICdNZWxlZScgfSxcbiAgICB7IGlkOiBudWxsLCBjb2RlOiAnU0hPT1QnLCBuYW1lOiAnU2hvb3QnIH0sXG4gICAgeyBpZDogbnVsbCwgY29kZTogJ01BR0lDJywgbmFtZTogJ01hZ2ljJyB9LFxuICBdXG59KTsiLCJpbXBvcnQgeyBTdG9yZSB9IGZyb20gJ2V4dC1yZWFjdCdcblxuZXhwb3J0IGRlZmF1bHQgU3RvcmUoe1xuICBzdG9yZUlkOiAnQ2FyZFN0b3JlJyxcbiAgcHJveHk6IHtcbiAgICB1cmw6ICcvYXBpL2NhcmRzJyxcbiAgICBtZXRob2Q6ICdwb3N0J1xuICB9LFxuICBhdXRvTG9hZDogdHJ1ZVxufSkiXX0=
