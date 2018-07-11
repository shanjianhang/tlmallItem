(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control23_5agOhX: function (elem) {},
    doAction_uiControl23_t26RJN: function (data, elem) {
      var type = data.eventType;if (type == "back") {
        //ysp.appMain.back();
        // if (ysp.appMain.isIOS() || ysp.appMain.isAndroid()) {
        //   top.EAPI.closeWindow();
        // } else {
        //   ysp.appMain.back();
        // } 
        ysp.appMain.back();
      }
    },
    getTemplate_uiControl23_t26RJN: function () {
      var selfTemplate = "import {Component} from 'react'; \nimport {CustomHeader} from 'ysp-custom-components';\nexport default class extends Component{\n  render () {\n    var _this=this;\n    return(\n      <div>\n      \t<CustomHeader \n           data={{centerText:\"\u5FD8\u6253\u5361\u7533\u8BF7\",rightText:\"\"}} \n           backIsShow={true} \n           back={()=>{ \n              let handler = _this.props.customHandler;\n              if (handler) {\n                handler({\n                  eventType: 'back'\n                });\n              }\n           }} \n           filterIsShow={false}\n        \t />\n      \t<div style={{height:\"2.7rem\"}}></div>\n      </div>\n      )\n    }\n}";
      return "'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require('react');\n\nvar _yspCustomComponents = require('ysp-custom-components');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));\n  }\n\n  _createClass(_class, [{\n    key: 'render',\n    value: function render() {\n      var _this = this;\n      return React.createElement(\n        'div',\n        null,\n        React.createElement(_yspCustomComponents.CustomHeader, {\n          data: { centerText: \"\u5FD8\u6253\u5361\u7533\u8BF7\", rightText: \"\" },\n          backIsShow: true,\n          back: function back() {\n            var handler = _this.props.customHandler;\n            if (handler) {\n              handler({\n                eventType: 'back'\n              });\n            }\n          },\n          filterIsShow: false\n        }),\n        React.createElement('div', { style: { height: \"2.7rem\" } })\n      );\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;";
    },
    getData_control24_NnciIJ: function (elem) {
      if (!elem) {
        return;
      }var data = { date: "", opts: [], pserror: [], select: "" };var ipt = elem.querySelector("#HPS_AWE002_HDR_PDATE");data.date = ipt.value.replace(/\//g, "-");data.pserror.push(ipt.getAttribute("class"));var opt = elem.querySelector("#HPS_AWE002_HDR_HPS_FG_PUNCH").querySelectorAll("option");data.pserror.push(elem.querySelector("select").getAttribute("class"));[].forEach.call(opt, function (item, index) {
        data.opts.push(item.textContent.trim());if (item.selected) {
          data.select = item.textContent;
        }
      });return data;
    },
    doAction_uiControl24_Zfin7m: function (data, elem) {
      if (data.eventType == "selclick") {
        var d = data.dataCustom;elem.querySelector("#HPS_AWE002_HDR_HPS_FG_PUNCH").querySelectorAll("option")[d].selected = true;elem.querySelector("#HPS_AWE002_HDR_HPS_FG_PUNCH").dispatchEvent(new Event("change"));
      } else if (data.eventType == "dateBlur") {
        var d = data.dataCustom;elem.querySelector("#HPS_AWE002_HDR_PDATE").value = d.replace(/-/g, "/");elem.querySelector("#HPS_AWE002_HDR_PDATE").dispatchEvent(new Event("change"));
      }
    },
    getTemplate_uiControl24_Zfin7m: function () {
      var selfTemplate = "\nimport {Component} from 'react';\n\nexport default class extends React.Component{\n    selClick(e) {\n   var handler=this.props.customHandler;\n    var target=e.target;\n    if(handler){\n      handler({\n        data:target.selectedIndex,\n        eventType:\"selclick\"\n      })\n    }\n  }\n\tdateBlur(e){\n    var target=e.target;\n    var handler=this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:\"dateBlur\",\n        data:target.value\n      })\n    }\n  }\n  render(){\n    var data = this.props.data.customData;\n    var _this = this;\n    return (\n    <div>\n        {data?<div className=\"ysp-con-box ysp-bottom-default\">\n        <div class=\"ysp-lists\">\n          <div class=\"ysp-l\"><em class=\"star\">*</em>\u5FD8\u6253\u5361\u65E5\u671F</div>\n          <div class=\"ysp-r\"><AInput type=\"date\" placeholder=\"\u8BF7\u9009\u62E9\" value={data && data.date} class={\"date-time \"+data.pserror[0]} onChange={_this.dateBlur.bind(_this)}/></div>\n\t\t\t\t</div>\n        <div class=\"ysp-lists\">\n          <div class=\"ysp-l\"><em class=\"star\">*</em>\u5FD8\u6253\u5361\u7C7B\u578B</div>\n          <div class=\"ysp-r\"><select class={\"sel-type \"+data.pserror[1]} onChange={_this.selClick.bind(_this)}>{\n              data && data.opts.length>0 && data.opts.map(function(item,index){\n                return(<option selected={data.select==item? \"selected\":\"\"}>{item}</option>)\n              })\n            }</select></div>\n\t\t\t\t</div>\n      </div>:<div></div>}\n\t\t\t\n    </div>\n    )\n  }\n};";
      return "\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require(\"react\");\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_React$Component) {\n  _inherits(_class, _React$Component);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));\n  }\n\n  _createClass(_class, [{\n    key: \"selClick\",\n    value: function selClick(e) {\n      var handler = this.props.customHandler;\n      var target = e.target;\n      if (handler) {\n        handler({\n          data: target.selectedIndex,\n          eventType: \"selclick\"\n        });\n      }\n    }\n  }, {\n    key: \"dateBlur\",\n    value: function dateBlur(e) {\n      var target = e.target;\n      var handler = this.props.customHandler;\n      if (handler) {\n        handler({\n          eventType: \"dateBlur\",\n          data: target.value\n        });\n      }\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var data = this.props.data.customData;\n      var _this = this;\n      return React.createElement(\n        \"div\",\n        null,\n        data ? React.createElement(\n          \"div\",\n          { className: \"ysp-con-box ysp-bottom-default\" },\n          React.createElement(\n            \"div\",\n            { \"class\": \"ysp-lists\" },\n            React.createElement(\n              \"div\",\n              { \"class\": \"ysp-l\" },\n              React.createElement(\n                \"em\",\n                { \"class\": \"star\" },\n                \"*\"\n              ),\n              \"\\u5FD8\\u6253\\u5361\\u65E5\\u671F\"\n            ),\n            React.createElement(\n              \"div\",\n              { \"class\": \"ysp-r\" },\n              React.createElement(AInput, { type: \"date\", placeholder: \"\\u8BF7\\u9009\\u62E9\", value: data && data.date, \"class\": \"date-time \" + data.pserror[0], onChange: _this.dateBlur.bind(_this) })\n            )\n          ),\n          React.createElement(\n            \"div\",\n            { \"class\": \"ysp-lists\" },\n            React.createElement(\n              \"div\",\n              { \"class\": \"ysp-l\" },\n              React.createElement(\n                \"em\",\n                { \"class\": \"star\" },\n                \"*\"\n              ),\n              \"\\u5FD8\\u6253\\u5361\\u7C7B\\u578B\"\n            ),\n            React.createElement(\n              \"div\",\n              { \"class\": \"ysp-r\" },\n              React.createElement(\n                \"select\",\n                { \"class\": \"sel-type \" + data.pserror[1], onChange: _this.selClick.bind(_this) },\n                data && data.opts.length > 0 && data.opts.map(function (item, index) {\n                  return React.createElement(\n                    \"option\",\n                    { selected: data.select == item ? \"selected\" : \"\" },\n                    item\n                  );\n                })\n              )\n            )\n          )\n        ) : React.createElement(\"div\", null)\n      );\n    }\n  }]);\n\n  return _class;\n}(React.Component);\n\nexports.default = _class;\n;";
    },
    getData_control26_eNalGN: function (elem) {
      if (!elem) {
        return;
      }var data = { vall: [], grey: [] };var save = elem.querySelector("#HPS_AWE_WRK_SAVE_BTN");var sub = elem.querySelector("#HPS_AWE_WRK_SUBMIT_BTN");if (save) {
        data.vall.push(save.value);if (save.disabled == true) {
          data.grey.push("disabled");
        } else {
          data.grey.push("");
        }
      }if (sub) {
        data.vall.push(sub.value);if (sub.disabled == true) {
          data.grey.push("disabled");
        } else {
          data.grey.push("");
        }
      }return data;
    },
    doAction_uiControl26_ynkiKT: function (data, elem) {
      if (data.eventType == "click1") {
        var data = data.customData;elem.querySelector("#HPS_AWE_WRK_SUBMIT_BTN").click();
      } else if (data.eventType == "click2") {
        elem.querySelector("#HPS_AWE_WRK_SAVE_BTN").click();
      }
    },
    getTemplate_uiControl26_ynkiKT: function () {
      var selfTemplate = "import {Component} from 'react';\n\nexport default class extends React.Component{\n  handlerClick1(e) {\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        data:[e.target.className,e.target.value],\n        eventType:\"click1\"\n      })\n    }\n  }\n    handlerClick2(e) {\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        data:[e.target.className,e.target.value],\n        eventType:\"click2\"\n      })\n    }\n  }\n\n  render(){\n    var data = this.props.customData;\n    return (\n      <div>\n        {data&&data.vall && data.vall.length>0?\n        <div className=\"ysp-btn-box\">\n            <button className={\"ysp-sel-btn \"+data.grey[1]} onClick={this.handlerClick1.bind(this)}>{data.vall[1]}</button>\n        <button className={\"ysp-save-btn \"+data.grey[0]} onClick={this.handlerClick2.bind(this)}>{data.vall[0]}</button>\n        </div>\n          :\n        <div></div>\n        }\n      \n      </div>\n    )\n  }\n};";
      return "\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require(\"react\");\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_React$Component) {\n  _inherits(_class, _React$Component);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));\n  }\n\n  _createClass(_class, [{\n    key: \"handlerClick1\",\n    value: function handlerClick1(e) {\n      var handler = this.props.customHandler;\n      if (handler) {\n        handler({\n          data: [e.target.className, e.target.value],\n          eventType: \"click1\"\n        });\n      }\n    }\n  }, {\n    key: \"handlerClick2\",\n    value: function handlerClick2(e) {\n      var handler = this.props.customHandler;\n      if (handler) {\n        handler({\n          data: [e.target.className, e.target.value],\n          eventType: \"click2\"\n        });\n      }\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var data = this.props.customData;\n      return React.createElement(\n        \"div\",\n        null,\n        data && data.vall && data.vall.length > 0 ? React.createElement(\n          \"div\",\n          { className: \"ysp-btn-box\" },\n          React.createElement(\n            \"button\",\n            { className: \"ysp-sel-btn \" + data.grey[1], onClick: this.handlerClick1.bind(this) },\n            data.vall[1]\n          ),\n          React.createElement(\n            \"button\",\n            { className: \"ysp-save-btn \" + data.grey[0], onClick: this.handlerClick2.bind(this) },\n            data.vall[0]\n          )\n        ) : React.createElement(\"div\", null)\n      );\n    }\n  }]);\n\n  return _class;\n}(React.Component);\n\nexports.default = _class;\n;";
    },
    getData_control27_m3fHk5: function (elem) {
      //提示弹框
      if (elem && elem.getAttribute("role") == "alertdialog") {
        return ysp.customHelper.alert(elem);
      } else {
        return;
      }
    },
    doAction_uiControl27_a55LCI: function (data, elem) {
      if (data.eventType == "btnClick") {
        if (data.dataCustom == "sure") {
          elem.querySelector("input[value='确定']").click();
        } else {
          elem.querySelector("input[value='取消']").click();
        }
      }
    },
    getTemplate_uiControl27_a55LCI: function () {
      var selfTemplate = "import {Component} from 'react'; \nimport {CustomAlert} from 'ysp-custom-components';\nexport default class extends Component{\n  btnClick(e){\n    var target=e.target;\n    var handler=this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:\"btnClick\",\n        data:target.className\n      })\n    }\n  }\n  render () {\n    var _this=this;\n    var data=this.props.customData;\n    return(\n      <div>\n      \t{data? <CustomAlert\n           data={data}\n          btnClick={_this.btnClick.bind(_this)}\n        />:<div></div>}\n      </div>\n      )\n    }\n}";
      return "'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require('react');\n\nvar _yspCustomComponents = require('ysp-custom-components');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));\n  }\n\n  _createClass(_class, [{\n    key: 'btnClick',\n    value: function btnClick(e) {\n      var target = e.target;\n      var handler = this.props.customHandler;\n      if (handler) {\n        handler({\n          eventType: \"btnClick\",\n          data: target.className\n        });\n      }\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var _this = this;\n      var data = this.props.customData;\n      return React.createElement(\n        'div',\n        null,\n        data ? React.createElement(_yspCustomComponents.CustomAlert, {\n          data: data,\n          btnClick: _this.btnClick.bind(_this)\n        }) : React.createElement('div', null)\n      );\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;";
    },

    getData_control30_QSE6y1: function (elem) {
      if (!elem) {
        return;
      }var data = { vall: [], pserror: [] };var st = elem.querySelector("#HPS_AWE002_HDR_START_TIME");var end = elem.querySelector("#HPS_AWE002_HDR_END_TIME");if (st) {
        data.vall.push(st.value);data.pserror.push(st.getAttribute("class"));
      }if (end) {
        data.vall.push(end.value);data.pserror.push(end.getAttribute("class"));
      }return data;
    },
    doAction_uiControl30_sFLbvU: function (data, elem) {
      if (data.eventType == "timechange1") {
        var d = data.dataCustom;elem.querySelector("#HPS_AWE002_HDR_START_TIME").value = d;elem.querySelector("#HPS_AWE002_HDR_START_TIME").dispatchEvent(new Event("change"));
      } else if (data.eventType == "timechange2") {
        var d = data.dataCustom;elem.querySelector("#HPS_AWE002_HDR_END_TIME").value = d;elem.querySelector("#HPS_AWE002_HDR_END_TIME").dispatchEvent(new Event("change"));
      }
    },
    getTemplate_uiControl30_sFLbvU: function () {
      var selfTemplate = "\nimport {Component} from 'react';\n\nexport default class extends React.Component{\n    timeChange1(e) {\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        data:e.target.value,\n        eventType:\"timechange1\"\n      })\n    }\n  }\n      timeChange2(e) {\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        data:e.target.value,\n        eventType:\"timechange2\"\n      })\n    }\n  }\n  render(){\n    const data = this.props.data.customData;\n    var _this = this;\n    return (\n      <div>\n        {\n          data && data.vall.length!=1?\n          <div className=\"ysp-con-box ysp-bottom-default\">\n        <div className=\"ysp-lists\">\n        <span className=\"ysp-l ysp-tit\"><em className=\"star\">*</em>\u5FD8\u8BB0\u65F6\u95F4</span>\n            <span className=\"ysp-r\">{data&&data.pserror&&data.pserror[0]? <AInput type=\"text\" className={\"time-ipt \"+data.pserror[0]} value={data.vall[0]} onChange={_this.timeChange1.bind(_this)} />:\"\"}<em className=\"bolang\">~</em>{data&&data.pserror&&data.pserror[1]? <AInput type=\"text\" className={\"time-ipt \"+data.pserror[1]} value={data.vall[1]} onChange={_this.timeChange2.bind(_this)} />:\"\"}</span>\n       </div>\n      </div>\n            :\n         <div className=\"ysp-con-box ysp-bottom-default\">\n        <div className=\"ysp-lists\">\n        <span className=\"ysp-l ysp-tit\"><em className=\"star\">*</em>\u5FD8\u8BB0\u65F6\u95F4</span>\n            <span className=\"ysp-r\">{data&&data.pserror&&data.pserror[0]? <AInput type=\"text\" className={\"time-ipt-one \"+data.pserror[0]} value={data.vall[0]} onChange={_this.timeChange1.bind(_this)} />:\"\"}</span>\n       </div>\n      </div>\n        }\n      \n        </div>\n    )\n  }\n};";
      return "\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require(\"react\");\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_React$Component) {\n  _inherits(_class, _React$Component);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));\n  }\n\n  _createClass(_class, [{\n    key: \"timeChange1\",\n    value: function timeChange1(e) {\n      var handler = this.props.customHandler;\n      if (handler) {\n        handler({\n          data: e.target.value,\n          eventType: \"timechange1\"\n        });\n      }\n    }\n  }, {\n    key: \"timeChange2\",\n    value: function timeChange2(e) {\n      var handler = this.props.customHandler;\n      if (handler) {\n        handler({\n          data: e.target.value,\n          eventType: \"timechange2\"\n        });\n      }\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var data = this.props.data.customData;\n      var _this = this;\n      return React.createElement(\n        \"div\",\n        null,\n        data && data.vall.length != 1 ? React.createElement(\n          \"div\",\n          { className: \"ysp-con-box ysp-bottom-default\" },\n          React.createElement(\n            \"div\",\n            { className: \"ysp-lists\" },\n            React.createElement(\n              \"span\",\n              { className: \"ysp-l ysp-tit\" },\n              React.createElement(\n                \"em\",\n                { className: \"star\" },\n                \"*\"\n              ),\n              \"\\u5FD8\\u8BB0\\u65F6\\u95F4\"\n            ),\n            React.createElement(\n              \"span\",\n              { className: \"ysp-r\" },\n              data && data.pserror && data.pserror[0] ? React.createElement(AInput, { type: \"text\", className: \"time-ipt \" + data.pserror[0], value: data.vall[0], onChange: _this.timeChange1.bind(_this) }) : \"\",\n              React.createElement(\n                \"em\",\n                { className: \"bolang\" },\n                \"~\"\n              ),\n              data && data.pserror && data.pserror[1] ? React.createElement(AInput, { type: \"text\", className: \"time-ipt \" + data.pserror[1], value: data.vall[1], onChange: _this.timeChange2.bind(_this) }) : \"\"\n            )\n          )\n        ) : React.createElement(\n          \"div\",\n          { className: \"ysp-con-box ysp-bottom-default\" },\n          React.createElement(\n            \"div\",\n            { className: \"ysp-lists\" },\n            React.createElement(\n              \"span\",\n              { className: \"ysp-l ysp-tit\" },\n              React.createElement(\n                \"em\",\n                { className: \"star\" },\n                \"*\"\n              ),\n              \"\\u5FD8\\u8BB0\\u65F6\\u95F4\"\n            ),\n            React.createElement(\n              \"span\",\n              { className: \"ysp-r\" },\n              data && data.pserror && data.pserror[0] ? React.createElement(AInput, { type: \"text\", className: \"time-ipt-one \" + data.pserror[0], value: data.vall[0], onChange: _this.timeChange1.bind(_this) }) : \"\"\n            )\n          )\n        )\n      );\n    }\n  }]);\n\n  return _class;\n}(React.Component);\n\nexports.default = _class;\n;";
    },
    getData_control60_WdiTkQ: function (elem) {
      if (elem && elem.querySelector("div[id*='SAVED']") && elem.querySelector("div[id*='SAVED']").style.display == "block") {
        return true;
      } else {
        return;
      }
    },
    doAction_uiControl59_M1UzqX: function (data, elem) {},
    getTemplate_uiControl59_M1UzqX: function () {
      var selfTemplate = "import {Component} from \"react\";\nexport default class extends Component{\n  render(){\n    var data=this.props.customData;\n    return(\n    \t<div>\n      \t{data? \n          <div className=\"savedModal\">\n\t\t\t\t\t\t<div className=\"saveContent\">\n            \t<div>\u221A</div>\n              <div>\u5DF2\u4FDD\u5B58</div>\n            </div>\n          </div>:\n          <div></div>\n        }\n      </div>\n    )\n  }\n}";
      return "\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require(\"react\");\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));\n  }\n\n  _createClass(_class, [{\n    key: \"render\",\n    value: function render() {\n      var data = this.props.customData;\n      return React.createElement(\n        \"div\",\n        null,\n        data ? React.createElement(\n          \"div\",\n          { className: \"savedModal\" },\n          React.createElement(\n            \"div\",\n            { className: \"saveContent\" },\n            React.createElement(\n              \"div\",\n              null,\n              \"\\u221A\"\n            ),\n            React.createElement(\n              \"div\",\n              null,\n              \"\\u5DF2\\u4FDD\\u5B58\"\n            )\n          )\n        ) : React.createElement(\"div\", null)\n      );\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;";
    },
    getData_control63_hcBgKO: function (elem) {
      if (!elem) {
        return;
      }var disabedMask = elem && elem.querySelector("#HPS_AWE_WRK_SUBMIT_BTN") && elem.querySelector("#HPS_AWE_WRK_SUBMIT_BTN").disabled;if (elem && disabedMask) {
        return true;
      }
    },
    doAction_uiControl97_kT2v2t: function (data, elem) {},
    getTemplate_uiControl97_kT2v2t: function () {
      var selfTemplate = "import {Component} from \"react\";\nexport default class extends Component{\n  render(){\n    var data=this.props.customData;\n    return(\n    \t<div>\n      \t{data? <div className=\"disableMask\">\n      </div>:\"\"}\n      </div>\n    )\n  }\n}";
      return "\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require(\"react\");\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));\n  }\n\n  _createClass(_class, [{\n    key: \"render\",\n    value: function render() {\n      var data = this.props.customData;\n      return React.createElement(\n        \"div\",\n        null,\n        data ? React.createElement(\"div\", { className: \"disableMask\" }) : \"\"\n      );\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;";
    }
  }, "forgetCard");
})(window, ysp);