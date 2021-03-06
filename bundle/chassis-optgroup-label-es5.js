'use strict';

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ChassisOptgroupLabel = function (_HTMLElement) {
  (0, _inherits3.default)(ChassisOptgroupLabel, _HTMLElement);

  function ChassisOptgroupLabel() {
    (0, _classCallCheck3.default)(this, ChassisOptgroupLabel);

    var _this = (0, _possibleConstructorReturn3.default)(this, (ChassisOptgroupLabel.__proto__ || (0, _getPrototypeOf2.default)(ChassisOptgroupLabel)).call(this));

    _this.attachShadow({ mode: 'open' });

    var container = document.createElement('div');
    container.insertAdjacentHTML('afterbegin', _this.templateString);

    var template = container.querySelector('template');

    if ('content' in template) {
      _this.shadowRoot.appendChild(template.content.cloneNode(true));
    } else {
      template.childNodes.forEach(function (child) {
        _this.shadowRoot.appendChild(child.cloneNode(true));
      });
    }

    template = null;
    return _this;
  }

  (0, _createClass3.default)(ChassisOptgroupLabel, [{
    key: 'connectedCallback',
    value: function connectedCallback() {}
  }, {
    key: 'templateString',
    get: function get() {
      return '<template><style>@charset UTF-8; @charset "UTF-8";:host{contain:content;display:flex;max-width:100%}:host *,:host :after,:host :before{box-sizing:border-box}chassis-optgroup-label{contain:content;display:flex;max-width:100%}:host :after,:host :before,chassis-optgroup-label *{box-sizing:border-box}</style><slot name="afterbegin"></slot><slot name="beforelabel"></slot><slot></slot><slot name="afterlabel"></slot><slot name="beforeend"></slot></template>';
    }
  }]);
  return ChassisOptgroupLabel;
}(HTMLElement);

customElements.define('chassis-optgroup-label', ChassisOptgroupLabel);