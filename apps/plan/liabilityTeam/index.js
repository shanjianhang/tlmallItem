'use strict';

(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control149_vXIRK2: function getData_control149_vXIRK2(elem) {},
    doAction_uiControl146_BrXk3O: function doAction_uiControl146_BrXk3O(data, elem) {
      if (data.eventType === 'back') {
        var doc = elem.ownerDocument;var targetEl = doc.querySelector('#clientMenu');ysp.customHelper.toPlan(targetEl, "客户详情", "clientInfo");
      }
    },
    getTemplate_uiControl146_BrXk3O: function getTemplate_uiControl146_BrXk3O() {
      var selfTemplate = 'import {Component} from \'react\'; \nimport {CustomHeader} from \'ysp-custom-components\';\nexport default class extends Component{\n   \n   render = () => {\n       let _this = this;\n       return (\n         <CustomHeader \n           data={{centerText:"\u8D23\u4EFB\u56E2\u961F\u89C6\u56FE",rightText:"\u7B5B\u9009"}} \n           backIsShow={true} \n           back={()=>{ \n              let handler = _this.props.customHandler;\n              if (handler) {\n                handler({\n                  eventType: \'back\'\n                });\n              }\n           }} \n           filterIsShow={false} \n           filter={()=>{console.info("header filter ...")}}/>\n       );\n   }\n}';
      return '\'use strict\';\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\n\nvar _react = require(\'react\');\n\nvar _yspCustomComponents = require(\'ysp-custom-components\');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class() {\n    var _ref;\n\n    var _temp, _this2, _ret;\n\n    _classCallCheck(this, _class);\n\n    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    return _ret = (_temp = (_this2 = _possibleConstructorReturn(this, (_ref = _class.__proto__ || Object.getPrototypeOf(_class)).call.apply(_ref, [this].concat(args))), _this2), _this2.render = function () {\n      var _this = _this2;\n      return React.createElement(_yspCustomComponents.CustomHeader, {\n        data: { centerText: "\u8D23\u4EFB\u56E2\u961F\u89C6\u56FE", rightText: "\u7B5B\u9009" },\n        backIsShow: true,\n        back: function back() {\n          var handler = _this.props.customHandler;\n          if (handler) {\n            handler({\n              eventType: \'back\'\n            });\n          }\n        },\n        filterIsShow: false,\n        filter: function filter() {\n          console.info("header filter ...");\n        } });\n    }, _temp), _possibleConstructorReturn(_this2, _ret);\n  }\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;';
    },
    getData_control150_ATVAwg: function (elem) {
      if (!elem) {
        return [];
      }var content = ysp.customHelper.getTableData(elem, ['姓名', '角色', '手机号', "电子邮箱"]);return content;
    },
    doAction_uiControl147_TtWl3b: function (data, elem) {},
    getTemplate_uiControl147_TtWl3b: function getTemplate_uiControl147_TtWl3b() {
      var selfTemplate = "import {\n  Component\n} from 'react';\nimport {\n  CustomHeader\n} from 'ysp-custom-components';\nexport default class extends Component {\n  render = () => {\n    var  _this = this;\n    var data = (this.props.customData && this.props.customData.content) || [];\n    if (data.length == 0) {\n      return (<div className=\"ysp-no-data\">\n        \t\t\t\t<div></div>\n                <div>\u6682\u65F6\u6CA1\u6709\u6570\u636E~</div>  \n        \t\t\t</div>);\n    }\n    return (\n      <div className=\"ysp-blame-team-wrapper\">\n         {data.map((item,index)=>{\n             return (\n                <div className=\"ysp-blame-team-content-wrapper\">\n                 <div>\n                   <span>{item[0]}</span>\n                   <span>{item[1]}</span>\n                 </div>\n                 <div>\n                   <div>\n                     <span></span>\n                     <span>\u7535\u5B50\u90AE\u4EF6</span>\n                   </div>\n                   <div>\n                     <span>{item[3]}</span>\n                   </div>\n                 </div>\n                 \n                 <div>\n                   <div>\n                     <span></span>\n                     <span>\u7535\u8BDD</span>\n                   </div>\n                   <div>\n                     <span>{item[2]}</span>\n                   </div>\n                 </div>\n\n                </div>\n             );\n           }) \n         }  \n    </div>\n    );\n  }\n}";
      return '\'use strict\';\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\n\nvar _react = require(\'react\');\n\nvar _yspCustomComponents = require(\'ysp-custom-components\');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class() {\n    var _ref;\n\n    var _temp, _this2, _ret;\n\n    _classCallCheck(this, _class);\n\n    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    return _ret = (_temp = (_this2 = _possibleConstructorReturn(this, (_ref = _class.__proto__ || Object.getPrototypeOf(_class)).call.apply(_ref, [this].concat(args))), _this2), _this2.render = function () {\n      var _this = _this2;\n      var data = _this2.props.customData && _this2.props.customData.content || [];\n      if (data.length == 0) {\n        return React.createElement(\n          \'div\',\n          { className: \'ysp-no-data\' },\n          React.createElement(\'div\', null),\n          React.createElement(\n            \'div\',\n            null,\n            \'\\u6682\\u65F6\\u6CA1\\u6709\\u6570\\u636E~\'\n          )\n        );\n      }\n      return React.createElement(\n        \'div\',\n        { className: \'ysp-blame-team-wrapper\' },\n        data.map(function (item, index) {\n          return React.createElement(\n            \'div\',\n            { className: \'ysp-blame-team-content-wrapper\' },\n            React.createElement(\n              \'div\',\n              null,\n              React.createElement(\n                \'span\',\n                null,\n                item[0]\n              ),\n              React.createElement(\n                \'span\',\n                null,\n                item[1]\n              )\n            ),\n            React.createElement(\n              \'div\',\n              null,\n              React.createElement(\n                \'div\',\n                null,\n                React.createElement(\'span\', null),\n                React.createElement(\n                  \'span\',\n                  null,\n                  \'\\u7535\\u5B50\\u90AE\\u4EF6\'\n                )\n              ),\n              React.createElement(\n                \'div\',\n                null,\n                React.createElement(\n                  \'span\',\n                  null,\n                  item[3]\n                )\n              )\n            ),\n            React.createElement(\n              \'div\',\n              null,\n              React.createElement(\n                \'div\',\n                null,\n                React.createElement(\'span\', null),\n                React.createElement(\n                  \'span\',\n                  null,\n                  \'\\u7535\\u8BDD\'\n                )\n              ),\n              React.createElement(\n                \'div\',\n                null,\n                React.createElement(\n                  \'span\',\n                  null,\n                  item[2]\n                )\n              )\n            )\n          );\n        })\n      );\n    }, _temp), _possibleConstructorReturn(_this2, _ret);\n  }\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;';
    }
  });
})(window, ysp);