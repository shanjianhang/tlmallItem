"use strict";

(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control36_vTRl9c: function getData_control36_vTRl9c(elem) {},
    doAction_uiControl26_tGk4V2: function doAction_uiControl26_tGk4V2(data, elem) {
      //返回
      if (data.eventType == 'click') {
        ysp.customHelper.back();
      }
    },
    getTemplate_uiControl26_tGk4V2: function getTemplate_uiControl26_tGk4V2() {
      var selfTemplate = "import {Component} from 'react'; \nimport {CommonHeader} from 'ysp-custom-components';\nexport default class extends Component{\n  render(){\n    return (\n    \t<CommonHeader \n       data={{centerText:\"\u9001\u9605\"}} \n       backIsShow = {true}\n       back={(e)=>{\n          var handler = this.props.customHandler;\n          if(handler){\n            handler({\n              eventType:'click'\n            })\n          }\n        }}\n        />\n    )\t\n  }\n}";
      return "'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require('react');\n\nvar _yspCustomComponents = require('ysp-custom-components');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));\n  }\n\n  _createClass(_class, [{\n    key: 'render',\n    value: function render() {\n      var _this2 = this;\n\n      return React.createElement(_yspCustomComponents.CommonHeader, {\n        data: { centerText: \"\u9001\u9605\" },\n        backIsShow: true,\n        back: function back(e) {\n          var handler = _this2.props.customHandler;\n          if (handler) {\n            handler({\n              eventType: 'click'\n            });\n          }\n        }\n      });\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;";
    },
    getData_control44_9fouJd: function (elem) {
      if (!elem) {
        return;
      }var data = {};if (elem.querySelectorAll('td')) {
        [].forEach.call(elem.querySelectorAll('td'), function (item, index) {
          index == 0 ? data.title = item.textContent.trim() : data.content = item.textContent.replace(/\s*/g, "").trim();
        });
      }return data;
    },
    doAction_uiControl32_771ANL: function (data, elem) {},
    getTemplate_uiControl32_771ANL: function getTemplate_uiControl32_771ANL() {
      var selfTemplate = "import {\n  Component\n} from 'react';\nimport {\n\tCustomHeader,Dialog,Alert\n} from 'ysp-custom-components';\nexport default class extends Component {\n  constructor(){\n    super();\n  }\n  \n  render() {\n    var _this = this;\n    var data = _this.props.data.customData;\n    return (\n      <div className=\"ysp-process-tosend\">\n        <span>{data!=null&&data.title}</span>\n        <div>\n        \t<span>{data!=null&&data.content}</span>\n        </div>\n        \n      </div>\n    )\n  }\n}";
      return "'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require('react');\n\nvar _yspCustomComponents = require('ysp-custom-components');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this));\n  }\n\n  _createClass(_class, [{\n    key: 'render',\n    value: function render() {\n      var _this = this;\n      var data = _this.props.data.customData;\n      return React.createElement(\n        'div',\n        { className: 'ysp-process-tosend' },\n        React.createElement(\n          'span',\n          null,\n          data != null && data.title\n        ),\n        React.createElement(\n          'div',\n          null,\n          React.createElement(\n            'span',\n            null,\n            data != null && data.content\n          )\n        )\n      );\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;";
    },
    getData_control46_D2yhGn: function (elem) {
      if (!elem) {
        return;
      }var data = {};var content = [];if (elem.querySelector('td')) {
        data.title = elem.querySelector('td').textContent.trim();if (elem.querySelector('td.field')) {
          // console.log(45678);
          [].forEach.call(elem.querySelector('td.field span').querySelectorAll('a'), function (item, intdex) {
            content.push(item.textContent.replace(/\s/g, ""));
          });
        }data.content = content;
      }return data;
    },
    doAction_uiControl33_U758D3: function (data, elem) {
      var eventType = data.eventType;if (eventType == 'click') {
        elem.querySelector("#field5spanBtn").click();
      }
    },
    getTemplate_uiControl33_U758D3: function getTemplate_uiControl33_U758D3() {
      var selfTemplate = "import {\n  Component\n} from 'react';\nimport {\n\tCommonHeader,Dialog\n} from 'ysp-custom-components';\nexport default class extends Component {\n  constructor(){\n    super();\n  }\n  \n  btnClick=(e)=>{\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'click'\n      });\n    }\n  }\n  \n  render() {\n    var _this = this;\n    var data = _this.props.data.customData||{};\n    var content = data.content||[];\n    \n    return (\n      <div className=\"ysp-process-tosend\">\n        <div className=\"receive-people\" onClick={_this.btnClick.bind(_this)}>{data.title}</div>\n        <div>\n        {content.length>0&&content.map((item,index)=>{\n          return <span>{item}</span>\n        })}\n        </div>\n      </div>\n    )\n  }\n}";
      return "'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require('react');\n\nvar _yspCustomComponents = require('ysp-custom-components');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    var _this2 = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this));\n\n    _this2.btnClick = function (e) {\n      var handler = _this2.props.customHandler;\n      if (handler) {\n        handler({\n          eventType: 'click'\n        });\n      }\n    };\n\n    return _this2;\n  }\n\n  _createClass(_class, [{\n    key: 'render',\n    value: function render() {\n      var _this = this;\n      var data = _this.props.data.customData || {};\n      var content = data.content || [];\n\n      return React.createElement(\n        'div',\n        { className: 'ysp-process-tosend' },\n        React.createElement(\n          'div',\n          { className: 'receive-people', onClick: _this.btnClick.bind(_this) },\n          data.title\n        ),\n        React.createElement(\n          'div',\n          null,\n          content.length > 0 && content.map(function (item, index) {\n            return React.createElement(\n              'span',\n              null,\n              item\n            );\n          })\n        )\n      );\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;";
    },
    getData_control47_1IOAA9: function (elem) {
      if (!elem) {
        return;
      }return elem.textContent.trim();
    },
    doAction_uiControl44_NNaxLK: function (data, elem) {},
    getTemplate_uiControl44_NNaxLK: function getTemplate_uiControl44_NNaxLK() {
      var selfTemplate = "import { Component } from 'react';\nimport { CustomHeader } from 'ysp-custom-components';\n\nexport default class extends Component {\n  \n  render(){\n      var data = this.props.customData;\n      return <div className=\"ysp-manager-audit-title-icon ysp-manager-audit-title-icon-top\"><span>{data}</span></div>;\n  }\n}";
      return "'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require('react');\n\nvar _yspCustomComponents = require('ysp-custom-components');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));\n  }\n\n  _createClass(_class, [{\n    key: 'render',\n    value: function render() {\n      var data = this.props.customData;\n      return React.createElement(\n        'div',\n        { className: 'ysp-manager-audit-title-icon ysp-manager-audit-title-icon-top' },\n        React.createElement(\n          'span',\n          null,\n          data\n        )\n      );\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;";
    },
    getData_control49_6E1Lqo: function (elem) {
      if (!elem) {
        return;
      }return elem.textContent.trim();
    },
    doAction_uiControl46_3gBXm5: function (data, elem) {},
    getTemplate_uiControl46_3gBXm5: function getTemplate_uiControl46_3gBXm5() {
      var selfTemplate = "import { Component } from 'react';\nimport { CustomHeader } from 'ysp-custom-components';\n\nexport default class extends Component {\n  \n  render(){\n      var data = this.props.customData;\n      return <div className=\"ysp-manager-audit-title-icon\" style={{border: 'none'}}><span>{data}</span></div>;\n  }\n}";
      return "'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require('react');\n\nvar _yspCustomComponents = require('ysp-custom-components');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));\n  }\n\n  _createClass(_class, [{\n    key: 'render',\n    value: function render() {\n      var data = this.props.customData;\n      return React.createElement(\n        'div',\n        { className: 'ysp-manager-audit-title-icon', style: { border: 'none' } },\n        React.createElement(\n          'span',\n          null,\n          data\n        )\n      );\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;";
    },
    getData_control50_tgZ1OL: function (elem) {},
    doAction_uiControl47_Plqa3E: function (data, elem) {
      var eventType = data.eventType;if (eventType == 'dataChange') {
        var p = document.createElement('p');elem.contentDocument.querySelector('body').innerHTML = "";elem.contentDocument.querySelector('body').appendChild(p).textContent = data.dataCustom;
      }
    },
    getTemplate_uiControl47_Plqa3E: function getTemplate_uiControl47_Plqa3E() {
      var selfTemplate = "import { Component } from 'react';\nimport { CustomHeader } from 'ysp-custom-components';\n\nexport default class extends Component {\n  constructor(){\n    super();\n  }\n\n  onChange=(e)=>{\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        data:e.target.value,\n        eventType:'dataChange'\n      })\n    }\n  }\n\n  render(){\n    var _this = this;\n    return (\n      \n        <div className=\"ysp-textarea-content\"><textarea onChange={_this.onChange.bind(_this)}></textarea></div>\n    )\n  }\n}";
      return "'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require('react');\n\nvar _yspCustomComponents = require('ysp-custom-components');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    var _this2 = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this));\n\n    _this2.onChange = function (e) {\n      var handler = _this2.props.customHandler;\n      if (handler) {\n        handler({\n          data: e.target.value,\n          eventType: 'dataChange'\n        });\n      }\n    };\n\n    return _this2;\n  }\n\n  _createClass(_class, [{\n    key: 'render',\n    value: function render() {\n      var _this = this;\n      return React.createElement(\n        'div',\n        { className: 'ysp-textarea-content' },\n        React.createElement('textarea', { onChange: _this.onChange.bind(_this) })\n      );\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;";
    },
    getData_control51_X0XISJ: function (elem) {
      if (!elem) {
        return;
      }return elem.querySelector('td').textContent;
    },
    doAction_uiControl48_5aBqKz: function (data, elem) {
      var clickType = data.eventType;if (clickType === 'docClick') {
        elem.querySelector('.Browser').click();
      }
    },
    getTemplate_uiControl48_5aBqKz: function getTemplate_uiControl48_5aBqKz() {
      var selfTemplate = "import {\n  Component\n} from 'react';\nimport {\n\tCommonHeader,Dialog\n} from 'ysp-custom-components';\nexport default class extends Component {\n  constructor(props){\n    super(props);\n  }\n  \n  btnClick(e){\n    let handler=this.props.customHandler;\n    var target=e.target;\n    if(handler){\n      handler({\n        eventType:\"docClick\"\n      })\n    }\n  }\n  render() {\n    var _this = this;\n    var data = this.props.customData||[];\n    if(data==\"\"){\n      return null\n    }\n    return (\n      <div className=\"ysp-manageraudit-relate-doc\">\n        <span style={{'color':'#000'}}>{data}</span>\n        <div className=\"border-bottom\"><span onClick={_this.btnClick.bind(_this)} className=\"ysp-search-icon\"></span></div>\n      </div>\n    )\n  }\n}";
      return "'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require('react');\n\nvar _yspCustomComponents = require('ysp-custom-components');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class(props) {\n    _classCallCheck(this, _class);\n\n    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));\n  }\n\n  _createClass(_class, [{\n    key: 'btnClick',\n    value: function btnClick(e) {\n      var handler = this.props.customHandler;\n      var target = e.target;\n      if (handler) {\n        handler({\n          eventType: \"docClick\"\n        });\n      }\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var _this = this;\n      var data = this.props.customData || [];\n      if (data == \"\") {\n        return null;\n      }\n      return React.createElement(\n        'div',\n        { className: 'ysp-manageraudit-relate-doc' },\n        React.createElement(\n          'span',\n          { style: { 'color': '#000' } },\n          data\n        ),\n        React.createElement(\n          'div',\n          { className: 'border-bottom' },\n          React.createElement('span', { onClick: _this.btnClick.bind(_this), className: 'ysp-search-icon' })\n        )\n      );\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;";
    },
    getData_control52_kec7kF: function (elem) {
      if (!elem) {
        return;
      }return elem.querySelector('td').textContent;
    },
    doAction_uiControl49_L3E20q: function (data, elem) {
      var clickType = data.eventType;if (clickType === 'docClick') {
        elem.querySelector('.Browser').click();
      }
    },
    getTemplate_uiControl49_L3E20q: function getTemplate_uiControl49_L3E20q() {
      var selfTemplate = "import {\n  Component\n} from 'react';\nimport {\n\tCustomHeader,Dialog,Alert\n} from 'ysp-custom-components';\nexport default class extends Component {\n  constructor(props){\n    super(props);\n  }\n  btnClick(e){//\u5BA2\u6237\u4FE1\u606F\u548C\u5BA2\u6237\u7ECF\u8425\u4FE1\u606F\u5207\u6362\n    let handler=this.props.customHandler;\n    var target=e.target;\n    if(handler){\n      handler({\n        eventType:\"docClick\"\n      })\n    }\n  }\n  render() {\n    var _this = this;\n    var data = this.props.customData;\n    if(data==\"\"){\n      return null\n    }\n    return (\n      <div className=\"ysp-manageraudit-relate-doc\">\n        <span style={{'color':'#000'}}>{data}</span>\n        <span><span onClick={_this.btnClick.bind(_this)} className=\"ysp-search-icon\"></span></span>\n      </div>\n    )\n  }\n}";
      return "'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require('react');\n\nvar _yspCustomComponents = require('ysp-custom-components');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class(props) {\n    _classCallCheck(this, _class);\n\n    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));\n  }\n\n  _createClass(_class, [{\n    key: 'btnClick',\n    value: function btnClick(e) {\n      //\u5BA2\u6237\u4FE1\u606F\u548C\u5BA2\u6237\u7ECF\u8425\u4FE1\u606F\u5207\u6362\n      var handler = this.props.customHandler;\n      var target = e.target;\n      if (handler) {\n        handler({\n          eventType: \"docClick\"\n        });\n      }\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var _this = this;\n      var data = this.props.customData;\n      if (data == \"\") {\n        return null;\n      }\n      return React.createElement(\n        'div',\n        { className: 'ysp-manageraudit-relate-doc' },\n        React.createElement(\n          'span',\n          { style: { 'color': '#000' } },\n          data\n        ),\n        React.createElement(\n          'span',\n          null,\n          React.createElement('span', { onClick: _this.btnClick.bind(_this), className: 'ysp-search-icon' })\n        )\n      );\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;";
    },
    getData_control53_rAs9ta: function (elem) {
      if (!elem) {
        return;
      }return elem.querySelector('td').textContent;
    },
    doAction_uiControl50_sXUbSz: function (data, elem) {},
    getTemplate_uiControl50_sXUbSz: function getTemplate_uiControl50_sXUbSz() {
      var selfTemplate = "import { Component } from 'react';\nimport { CustomHeader } from 'ysp-custom-components';\n\nexport default class extends Component {\n  \n  render(){\n      var data = this.props.customData;\n    if(data==\"\"){\n      return null\n    }\n      return <div className=\"ysp-manager-audit-title-icon\">\n        <span>{data}</span>\n        <i className=\"relate-files\"></i>\n      </div>;\n  }\n}";
      return "'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require('react');\n\nvar _yspCustomComponents = require('ysp-custom-components');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));\n  }\n\n  _createClass(_class, [{\n    key: 'render',\n    value: function render() {\n      var data = this.props.customData;\n      if (data == \"\") {\n        return null;\n      }\n      return React.createElement(\n        'div',\n        { className: 'ysp-manager-audit-title-icon' },\n        React.createElement(\n          'span',\n          null,\n          data\n        ),\n        React.createElement('i', { className: 'relate-files' })\n      );\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;";
    },
    getData_control48_NQzpsQ: function getData_control48_NQzpsQ(elem) {},
    doAction_uiControl45_L1FoST: function doAction_uiControl45_L1FoST(data, elem) {},
    getTemplate_uiControl45_L1FoST: function getTemplate_uiControl45_L1FoST() {
      var selfTemplate = "module.exports = React.createClass({\n  render: function() {\n    return (\n      <div className=\"background-gray\"></div>\n    )\n  }\n});";
      return "\"use strict\";\n\nmodule.exports = React.createClass({\n  displayName: \"exports\",\n\n  render: function render() {\n    return React.createElement(\"div\", { className: \"background-gray\" });\n  }\n});";
    },
    getData_control55_MzxyGc: function getData_control55_MzxyGc(elem) {},
    doAction_uiControl52_oXDrxJ: function doAction_uiControl52_oXDrxJ(data, elem) {},
    getTemplate_uiControl52_oXDrxJ: function getTemplate_uiControl52_oXDrxJ() {
      var selfTemplate = "module.exports = React.createClass({\n  render: function() {\n    return (\n      <div className=\"background-gray\"></div>\n    )\n  }\n});";
      return "\"use strict\";\n\nmodule.exports = React.createClass({\n  displayName: \"exports\",\n\n  render: function render() {\n    return React.createElement(\"div\", { className: \"background-gray\" });\n  }\n});";
    },
    getData_control207_sku89v: function (elem) {},
    doAction_uiControl189_wN5iH2: function (data, elem) {
      if (data.eventType == 'click') {
        ysp.customHelper.openWin();
      }
    },
    getTemplate_uiControl189_wN5iH2: function () {
      var selfTemplate = "module.exports = React.createClass({\n  render: function() {\n    return (\n      <div onClick={(e)=>{\n          var handler = this.props.customHandler;\n          if(handler){\n            handler({\n              eventType:'click'\n            })\n          }\n        }}>\n        \u6D4B\u8BD5opener - \u4F20\u503C\u662F\u5426\u6210\u529F\n      </div>\n    )\n  }\n});";
      return "'use strict';\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  render: function render() {\n    var _this = this;\n\n    return React.createElement(\n      'div',\n      { onClick: function onClick(e) {\n          var handler = _this.props.customHandler;\n          if (handler) {\n            handler({\n              eventType: 'click'\n            });\n          }\n        } },\n      '\\u6D4B\\u8BD5opener - \\u4F20\\u503C\\u662F\\u5426\\u6210\\u529F'\n    );\n  }\n});";
    },
    getData_control214_gktHg0: function (elem) {},
    doAction_uiControl196_avlwS1: function (data, elem) {
      if (data.eventType == "click") {
        if (elem.ownerDocument.getElementById('rightMenuIframe')) {
          var iframeBody = elem.ownerDocument.getElementById('rightMenuIframe').contentDocument.body;if ($(iframeBody).find("button").length > 0) {
            $(iframeBody).find("button").eq(0)[0].click();console.log($(iframeBody).find("button").eq(0).text());
          }
        }
      }
    },
    getTemplate_uiControl196_avlwS1: function () {
      var selfTemplate = "module.exports = React.createClass({\n  click:function(e){\n    var handler=this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:\"click\"\n      })\n    }\n  },\n  render: function() {\n    return (\n      <div onClick={this.click.bind(this)} className=\"ysp-process-tosend-submit\">\n        \u63D0\u4EA4\n      </div>\n    )\n  }\n});";
      return "\"use strict\";\n\nmodule.exports = React.createClass({\n  displayName: \"exports\",\n\n  click: function click(e) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \"click\"\n      });\n    }\n  },\n  render: function render() {\n    return React.createElement(\n      \"div\",\n      { onClick: this.click.bind(this), className: \"ysp-process-tosend-submit\" },\n      \"\\u63D0\\u4EA4\"\n    );\n  }\n});";
    }
  });
})(window, ysp);