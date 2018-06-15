(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control65_F0ivJ4: function (elem) {},
    doAction_uiControl64_q8qMaq: function (data, elem) {
      var type = data.eventType;if (type == "back") {
        ysp.appMain.back();
      }
    },
    getTemplate_uiControl64_q8qMaq: function () {
      var selfTemplate = "import {Component} from 'react'; \nimport {CustomHeader} from 'ysp-custom-components';\nexport default class extends Component{\n  render () {\n\n    var _this=this;\n    var data=this.props.customData;\n    return(\n      <div>\n      \t<CustomHeader \n           data={{centerText:\"\u5916\u6D3E\u63A2\u4EB2\u8D44\u683C\u7533\u8BF7\",rightText:\"\"}} \n           backIsShow={true} \n           back={()=>{ \n              let handler = _this.props.customHandler;\n              if (handler) {\n                handler({\n                  eventType: 'back'\n                });\n              }\n           }} \n           filterIsShow={false}\n        />\n        <div style={{height:\"2.7rem\"}}></div>\n      </div>\n      )\n    }\n}";
      return "'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require('react');\n\nvar _yspCustomComponents = require('ysp-custom-components');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));\n  }\n\n  _createClass(_class, [{\n    key: 'render',\n    value: function render() {\n\n      var _this = this;\n      var data = this.props.customData;\n      return React.createElement(\n        'div',\n        null,\n        React.createElement(_yspCustomComponents.CustomHeader, {\n          data: { centerText: \"\u5916\u6D3E\u63A2\u4EB2\u8D44\u683C\u7533\u8BF7\", rightText: \"\" },\n          backIsShow: true,\n          back: function back() {\n            var handler = _this.props.customHandler;\n            if (handler) {\n              handler({\n                eventType: 'back'\n              });\n            }\n          },\n          filterIsShow: false\n        }),\n        React.createElement('div', { style: { height: \"2.7rem\" } })\n      );\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;";
    },
    getData_control70_h70Dev: function (elem) {
      if (elem) {
        var data = { title: [], content: [] };var tds = elem.querySelectorAll("td[valign]");[].forEach.call(tds, function (d, i) {
          var obj = { options: [], selected: "", index: "", value: "", type: "" };if (d.querySelector("label")) {
            data.title.push(d.querySelector("label").textContent.trim());
          } else if (d.querySelector("select")) {
            var options = d.querySelectorAll("option");[].forEach.call(options, function (d1, i1) {
              obj.options.push(d1.textContent.trim());if (d1.selected) {
                obj.selected = d1.textContent.trim();
              }obj.index = i;obj.type = "select";
            });data.content.push(obj);
          } else if (d.querySelector("img[title*='日历']")) {
            obj.type = "time";obj.index = i;obj.value = d.querySelector("input").value.replace(/\//g, "-");data.content.push(obj);
          } else if (d.querySelector("img[title*='地']")) {
            obj.type = "search";obj.index = i;obj.value = d.querySelector("input").value;data.content.push(obj);
          }
        });return data;
      } else {
        return;
      }
    },
    doAction_uiControl69_vzkryS: function (data, elem) {},
    getTemplate_uiControl69_vzkryS: function () {
      var selfTemplate = "import {Component} from 'react'; \nimport {CustomHeader} from 'ysp-custom-components';\nexport default class extends Component{\n  inputBlur(e){}\n  \n  render(){\n    var _this=this;\n    var data=this.props.customData;\n    return(\n    \t<div className=\"ysp_visitRelative\">\n      \t{data&&data.content&&data.content.map(function(d,i){\n          return(\n          \t<div className=\"ysp_visit_list\">\n            \t<div className=\"visit_title\">\n              \t<span className=\"star\">*</span>\n                {data.title[i]}\n              </div>\n              <div className=\"visit_content\">\n                {d.type==\"search\"? <AInput value={d.value} data-index={d.index} onBlur/>: d.type==\"time\"? <AInput type=\"date\" value={d.value}/>: d.type==\"select\"? <select>{d.options.map(function(d1,i1){\n                      return(\n                      \t<option>{d1}</option>\n                      )\n                    })}</select>:<div></div>}\n              </div>\n            </div>\n          )\n        })}\n      </div>\n    )\n\t}\n}";
      return "'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require('react');\n\nvar _yspCustomComponents = require('ysp-custom-components');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));\n  }\n\n  _createClass(_class, [{\n    key: 'inputBlur',\n    value: function inputBlur(e) {}\n  }, {\n    key: 'render',\n    value: function render() {\n      var _this = this;\n      var data = this.props.customData;\n      return React.createElement(\n        'div',\n        { className: 'ysp_visitRelative' },\n        data && data.content && data.content.map(function (d, i) {\n          return React.createElement(\n            'div',\n            { className: 'ysp_visit_list' },\n            React.createElement(\n              'div',\n              { className: 'visit_title' },\n              React.createElement(\n                'span',\n                { className: 'star' },\n                '*'\n              ),\n              data.title[i]\n            ),\n            React.createElement(\n              'div',\n              { className: 'visit_content' },\n              d.type == \"search\" ? React.createElement(AInput, { value: d.value, 'data-index': d.index, onBlur: true }) : d.type == \"time\" ? React.createElement(AInput, { type: 'date', value: d.value }) : d.type == \"select\" ? React.createElement(\n                'select',\n                null,\n                d.options.map(function (d1, i1) {\n                  return React.createElement(\n                    'option',\n                    null,\n                    d1\n                  );\n                })\n              ) : React.createElement('div', null)\n            )\n          );\n        })\n      );\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;";
    },
    getData_control71_J0BsJh: function (elem) {
      if (elem) {
        var data = { name: [], leng: "" };var trs = elem.querySelectorAll("tr[id]");[].forEach.call(trs, function (d, i) {
          data.name.push(d.querySelectorAll("td")[1].textContent.trim());
        });data.leng = trs && trs.length;return data;
      }
    },
    doAction_uiControl70_7bqvxG: function (data, elem) {
      if (data.eventType == "addFile") {
        var ind = parseInt(data.dataCustom);var trs = elem.querySelectorAll("tr[id]");trs[ind - 1].querySelectorAll("td")[3].querySelector("input").click();
      } else if (data.eventType == "autoClick") {
        var ind = parseInt(data.dataCustom);var trs = elem.querySelectorAll("tr[id]");trs[ind - 1].querySelectorAll("td")[4].querySelector("a").click();
      } else if (data.eventType == "delete") {
        var ind = parseInt(data.dataCustom);var trs = elem.querySelectorAll("tr[id]");trs[ind].querySelectorAll("td")[6].querySelector("a").click();
      }
    },
    getTemplate_uiControl70_7bqvxG: function () {
      var selfTemplate = "import {Component} from 'react'; \nexport default class extends Component{\n  componentDidUpdate(){\n    if(this.props.customData.name[0]==\"\"&&this.props.customData.leng==1){\n      \n    }else{\n      this.refs.autoClick.click()\n    }\n    \n  }\n  addFile(e){\n    var target=e.target;\n    var handler=this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:\"addFile\",\n        data:target.dataset.index\n      })\n    }\n  }\n  autoClick(e){\n    var target=e.target;\n    var handler=this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:\"autoClick\",\n        data:target.dataset.index\n      })\n    }\n  }\n  delete(e){\n    var target=e.target;\n    var handler=this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:\"delete\",\n        data:target.dataset.index\n      })\n    }\n  }\n  render(){\n    var data=this.props.customData;\n    var _this=this;\n    return(\n    \t<div className=\"ysp-con-box annex-box\">\n        <div className=\"annex-tit\">\u9644\u4EF6</div>\n        <div className=\"annex-conent\">\n        \t<div className=\"annex-add\" onClick={_this.addFile.bind(_this)} data-index={data.leng}>+</div>\n          {data&&data.name&&data.name.map(function(d,i){\n              return(\n                <div className=\"annex-listItem\">\n                  {d==\"\"? <div></div>:\n                    <div>\n                      <div className=\"annex-item\">\n                        <div className={d.indexOf(\"jpg\"||\"png\")? \"pic\": d.indexOf(\"xl\")? \"excel\":d.indexOf(\"doc\")? \"doc\":d.indexOf(\"ppt\")? \"ppt\": d.indexOf(\"pdf\")? \"pdf\": d.indexOf(\"zip\")? \"zip\": d.indexOf(\"rar\")? \"rar\":\"default\"}></div>\n                        <i className=\"delete-btn\" onClick={_this.delete.bind(_this)} data-index={i}>X</i>\n                      </div>\n                      <div className=\"fileName\">{d}</div>\n                    </div>\n                  }\n                </div>\n\n              )\n          })}\n        </div>\n        <div ref=\"autoClick\" onClick={_this.autoClick.bind(_this)} data-index={data.leng}></div>\n      </div>\n    )\n  }\n}";
      return "\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require(\"react\");\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));\n  }\n\n  _createClass(_class, [{\n    key: \"componentDidUpdate\",\n    value: function componentDidUpdate() {\n      if (this.props.customData.name[0] == \"\" && this.props.customData.leng == 1) {} else {\n        this.refs.autoClick.click();\n      }\n    }\n  }, {\n    key: \"addFile\",\n    value: function addFile(e) {\n      var target = e.target;\n      var handler = this.props.customHandler;\n      if (handler) {\n        handler({\n          eventType: \"addFile\",\n          data: target.dataset.index\n        });\n      }\n    }\n  }, {\n    key: \"autoClick\",\n    value: function autoClick(e) {\n      var target = e.target;\n      var handler = this.props.customHandler;\n      if (handler) {\n        handler({\n          eventType: \"autoClick\",\n          data: target.dataset.index\n        });\n      }\n    }\n  }, {\n    key: \"delete\",\n    value: function _delete(e) {\n      var target = e.target;\n      var handler = this.props.customHandler;\n      if (handler) {\n        handler({\n          eventType: \"delete\",\n          data: target.dataset.index\n        });\n      }\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var data = this.props.customData;\n      var _this = this;\n      return React.createElement(\n        \"div\",\n        { className: \"ysp-con-box annex-box\" },\n        React.createElement(\n          \"div\",\n          { className: \"annex-tit\" },\n          \"\\u9644\\u4EF6\"\n        ),\n        React.createElement(\n          \"div\",\n          { className: \"annex-conent\" },\n          React.createElement(\n            \"div\",\n            { className: \"annex-add\", onClick: _this.addFile.bind(_this), \"data-index\": data.leng },\n            \"+\"\n          ),\n          data && data.name && data.name.map(function (d, i) {\n            return React.createElement(\n              \"div\",\n              { className: \"annex-listItem\" },\n              d == \"\" ? React.createElement(\"div\", null) : React.createElement(\n                \"div\",\n                null,\n                React.createElement(\n                  \"div\",\n                  { className: \"annex-item\" },\n                  React.createElement(\"div\", { className: d.indexOf(\"jpg\" || \"png\") ? \"pic\" : d.indexOf(\"xl\") ? \"excel\" : d.indexOf(\"doc\") ? \"doc\" : d.indexOf(\"ppt\") ? \"ppt\" : d.indexOf(\"pdf\") ? \"pdf\" : d.indexOf(\"zip\") ? \"zip\" : d.indexOf(\"rar\") ? \"rar\" : \"default\" }),\n                  React.createElement(\n                    \"i\",\n                    { className: \"delete-btn\", onClick: _this.delete.bind(_this), \"data-index\": i },\n                    \"X\"\n                  )\n                ),\n                React.createElement(\n                  \"div\",\n                  { className: \"fileName\" },\n                  d\n                )\n              )\n            );\n          })\n        ),\n        React.createElement(\"div\", { ref: \"autoClick\", onClick: _this.autoClick.bind(_this), \"data-index\": data.leng })\n      );\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;";
    },
    getData_control72_9NJcgi: function (elem) {
      //附件上传弹窗
      if (!elem) {
        return;
      }var data = [];return data;
    },
    doAction_uiControl71_URErdd: function (data, elem) {
      if (data.eventType == "selclick") {
        var d = data.dataCustom;elem.querySelector("input[type='file']").click();
      } else if (data.eventType == "upclick") {
        var d = data.dataCustom;var ipt1 = elem.querySelectorAll(".PSPUSHBUTTON")[0].querySelector("input");ipt1.click();
      } else if (data.eventType == "cancelclick") {
        var d = data.dataCustom;var ipt2 = elem.querySelectorAll(".PSPUSHBUTTON")[2].querySelector("input");ipt2.click();
      }
    },
    getTemplate_uiControl71_URErdd: function () {
      var selfTemplate = "import {Component} from 'react';\n\nexport default class extends React.Component{\n    selClick(e) {\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:\"selclick\"\n      })\n    }\n  }\n  upClick(e) {\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:\"upclick\"\n      })\n    }\n  }\n    cancelClick(e) {\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:\"cancelclick\"\n      })\n    }\n  }\n\n  render(){\n    var data = this.props.customData;\n    var _this = this;\n  return(<div>\n    {data?\n        <div className=\"ysp-pop-box\">\n          <div className=\"ysp-pop-mask\"></div>\n          <div className=\"ysp-pop-con\">\n        <h4>\u6587\u4EF6\u9644\u4EF6</h4>\n       <p onClick={_this.selClick.bind(_this)} className=\"up-annex\">\u4E0A\u4F20\u9644\u4EF6</p>\n        <button className=\"pop-two-btn\" onClick={_this.upClick.bind(_this)}>\u4E0A\u8F7D</button><button className=\"pop-two-btn\" onClick={_this.cancelClick.bind(_this)}>\u53D6\u6D88</button>\n      </div>\n      </div>\n        :\n      <div style={{display:\"none\"}}></div>\n      }\n    </div>)\n  }\n};";
      return "\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require(\"react\");\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_React$Component) {\n  _inherits(_class, _React$Component);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));\n  }\n\n  _createClass(_class, [{\n    key: \"selClick\",\n    value: function selClick(e) {\n      var handler = this.props.customHandler;\n      if (handler) {\n        handler({\n          eventType: \"selclick\"\n        });\n      }\n    }\n  }, {\n    key: \"upClick\",\n    value: function upClick(e) {\n      var handler = this.props.customHandler;\n      if (handler) {\n        handler({\n          eventType: \"upclick\"\n        });\n      }\n    }\n  }, {\n    key: \"cancelClick\",\n    value: function cancelClick(e) {\n      var handler = this.props.customHandler;\n      if (handler) {\n        handler({\n          eventType: \"cancelclick\"\n        });\n      }\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var data = this.props.customData;\n      var _this = this;\n      return React.createElement(\n        \"div\",\n        null,\n        data ? React.createElement(\n          \"div\",\n          { className: \"ysp-pop-box\" },\n          React.createElement(\"div\", { className: \"ysp-pop-mask\" }),\n          React.createElement(\n            \"div\",\n            { className: \"ysp-pop-con\" },\n            React.createElement(\n              \"h4\",\n              null,\n              \"\\u6587\\u4EF6\\u9644\\u4EF6\"\n            ),\n            React.createElement(\n              \"p\",\n              { onClick: _this.selClick.bind(_this), className: \"up-annex\" },\n              \"\\u4E0A\\u4F20\\u9644\\u4EF6\"\n            ),\n            React.createElement(\n              \"button\",\n              { className: \"pop-two-btn\", onClick: _this.upClick.bind(_this) },\n              \"\\u4E0A\\u8F7D\"\n            ),\n            React.createElement(\n              \"button\",\n              { className: \"pop-two-btn\", onClick: _this.cancelClick.bind(_this) },\n              \"\\u53D6\\u6D88\"\n            )\n          )\n        ) : React.createElement(\"div\", { style: { display: \"none\" } })\n      );\n    }\n  }]);\n\n  return _class;\n}(React.Component);\n\nexports.default = _class;\n;";
    },
    getData_control73_VOqBBU: function (elem) {
      //提示弹框
      if (elem && elem.getAttribute("role") == "alertdialog") {
        return ysp.customHelper.alert(elem);
      } else {
        return;
      }
    },
    doAction_uiControl72_NayfBa: function (data, elem) {
      if (data.eventType == "btnClick") {
        if (data.dataCustom == "sure") {
          elem.querySelector("input[value='确定']").click();
        } else {
          elem.querySelector("input[value='取消']").click();
        }
      }
    },
    getTemplate_uiControl72_NayfBa: function () {
      var selfTemplate = "import {Component} from 'react'; \nimport {CustomAlert} from 'ysp-custom-components';\nexport default class extends Component{\n  btnClick(e){\n    var target=e.target;\n    var handler=this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:\"btnClick\",\n        data:target.className\n      })\n    }\n  }\n  render () {\n    var _this=this;\n    var data=this.props.customData;\n    return(\n      <div>\n      \t{data? <CustomAlert\n           data={data}\n          btnClick={_this.btnClick.bind(_this)}\n        />:<div></div>}\n      </div>\n      )\n    }\n}";
      return "'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require('react');\n\nvar _yspCustomComponents = require('ysp-custom-components');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));\n  }\n\n  _createClass(_class, [{\n    key: 'btnClick',\n    value: function btnClick(e) {\n      var target = e.target;\n      var handler = this.props.customHandler;\n      if (handler) {\n        handler({\n          eventType: \"btnClick\",\n          data: target.className\n        });\n      }\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var _this = this;\n      var data = this.props.customData;\n      return React.createElement(\n        'div',\n        null,\n        data ? React.createElement(_yspCustomComponents.CustomAlert, {\n          data: data,\n          btnClick: _this.btnClick.bind(_this)\n        }) : React.createElement('div', null)\n      );\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;";
    }
  });
})(window, ysp);