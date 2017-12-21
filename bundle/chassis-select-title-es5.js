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

var ChassisSelectTitle = function (_HTMLElement) {
  (0, _inherits3.default)(ChassisSelectTitle, _HTMLElement);

  function ChassisSelectTitle() {
    (0, _classCallCheck3.default)(this, ChassisSelectTitle);

    var _this = (0, _possibleConstructorReturn3.default)(this, (ChassisSelectTitle.__proto__ || (0, _getPrototypeOf2.default)(ChassisSelectTitle)).call(this));

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

  (0, _createClass3.default)(ChassisSelectTitle, [{
    key: 'connectedCallback',
    value: function connectedCallback() {
      this._appendCaret();
    }
  }, {
    key: '_appendCaret',
    value: function _appendCaret() {
      var xmlns = 'http://www.w3.org/2000/svg';var width = 24;var height = 24;var caret = document.createElementNS(xmlns, 'svg');caret.slot = 'beforeend';caret.setAttributeNS(null, 'width', width);caret.setAttributeNS(null, 'height', height);caret.setAttributeNS(null, 'viewBox', '0 0 ' + width + ' ' + height);caret.setAttributeNS(null, 'fill', 'none');caret.setAttributeNS(null, 'stroke', 'currentColor');caret.setAttributeNS(null, 'stroke-width', '3');caret.setAttributeNS(null, 'stroke-linecap', 'square');caret.setAttributeNS(null, 'stroke-linejoin', 'miter');var shape = document.createElementNS(xmlns, 'polyline');shape.setAttributeNS(null, 'points', '6 9 12 15 18 9');caret.appendChild(shape);this.appendChild(caret);
    }
  }, {
    key: 'templateString',
    get: function get() {
      return '<template><style>@charset UTF-8; @charset "UTF-8";:host{contain:content;display:flex;max-width:100%}:host *,:host :after,:host :before{box-sizing:border-box}chassis-select-title{contain:content;display:flex;max-width:100%}:host :after,:host :before,chassis-select-title *{box-sizing:border-box}</style><slot name="afterbegin"></slot><slot name="beforetitle"></slot><slot id="title"></slot><slot name="aftertitle"></slot><slot name="beforeend"></slot></template>';
    }
  }, {
    key: 'title',
    get: function get() {
      return this.shadowRoot.querySelector('#title').innerHTML;
    },
    set: function set(value) {
      this.shadowRoot.querySelector('#title').innerHTML = value;
    }
  }]);
  return ChassisSelectTitle;
}(HTMLElement);

customElements.define('chassis-select-title', ChassisSelectTitle);