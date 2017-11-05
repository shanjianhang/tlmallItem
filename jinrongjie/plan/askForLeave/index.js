(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control55_pqOP4L: function (elem) {},
    doAction_uiControl45_w9wCSy: function (data, elem) {
      if (data.eventType == 'click') {
        ysp.customHelper.back();
      }if (data.eventType == 'save1') {
        $(elem).click();
      }
    },
    getTemplate_uiControl45_w9wCSy: function () {
      var selfTemplate = 'import {Component} from \'react\'; \nimport {CommonHeader} from \'ysp-custom-components\';\nexport default class extends Component{\n  render(){\n    return (\n    \t<CommonHeader \n       data={{centerText:"\u8BF7\u5047/\u516C\u51FA\u6D41\u7A0B\uFF08\u65B0\uFF09"}} \n       backIsShow = {true}\n        editIsShow={true}\n        rightText = \'\u4FDD\u5B58\'\n        save={(e)=>{\n          var handler = this.props.customHandler;\n          if(handler){\n            handler({\n              eventType:\'save1\'\n            })\n          }\n        }}\n        back={(e)=>{\n          var handler = this.props.customHandler;\n          if(handler){\n            handler({\n              eventType:\'click\'\n            })\n          }\n        }}\n        />\n    )\t\n  }\n}';
      return '\'use strict\';\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require(\'react\');\n\nvar _yspCustomComponents = require(\'ysp-custom-components\');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));\n  }\n\n  _createClass(_class, [{\n    key: \'render\',\n    value: function render() {\n      var _this2 = this;\n\n      return React.createElement(_yspCustomComponents.CommonHeader, {\n        data: { centerText: "\u8BF7\u5047/\u516C\u51FA\u6D41\u7A0B\uFF08\u65B0\uFF09" },\n        backIsShow: true,\n        editIsShow: true,\n        rightText: \'\\u4FDD\\u5B58\',\n        save: function save(e) {\n          var handler = _this2.props.customHandler;\n          if (handler) {\n            handler({\n              eventType: \'save1\'\n            });\n          }\n        },\n        back: function back(e) {\n          var handler = _this2.props.customHandler;\n          if (handler) {\n            handler({\n              eventType: \'click\'\n            });\n          }\n        }\n      });\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;';
    },
    getData_control48_3VFV1d: function (elem) {
      if (!elem) {
        return;
      }if (elem) {
        var data = { basicInfo: { actEmergency: "", actMsgAlert: "" } }; /************************流程基本信息***********************/ //选中的紧急程度
        var egyArrInput = elem.querySelectorAll("table")[0].querySelectorAll("tr")[1].querySelectorAll("td")[1].querySelectorAll("input");for (var n = 0; n < egyArrInput.length; n++) {
          if (egyArrInput[n].checked) {
            data.basicInfo.actEmergency = egyArrInput[n].nextSibling.textContent;
          }
        } //选中的短信提醒
        var msgArrInput = elem.querySelectorAll("table")[0].querySelectorAll("tr")[1].querySelectorAll("td")[3].querySelectorAll("input");for (var n = 0; n < msgArrInput.length; n++) {
          if (msgArrInput[n].checked) {
            data.basicInfo.actMsgAlert = msgArrInput[n].nextSibling.textContent;
          }
        }return data;
      }
    },
    doAction_uiControl52_Ptss66: function (data, elem) {
      if (data.eventType == "click") {
        var i = data.dataCustom.i;var classname = data.dataCustom.classname;if (classname == "emergencyCheck") {
          elem.querySelectorAll("table")[0].querySelectorAll("tr")[1].querySelectorAll("td")[1].querySelectorAll("input")[i].click();
        } else if (classname == "msgCheck") {
          elem.querySelectorAll("table")[0].querySelectorAll("tr")[1].querySelectorAll("td")[3].querySelectorAll("input")[i].click();
        }
      }
    },
    getTemplate_uiControl52_Ptss66: function () {
      var selfTemplate = 'import {Component} from "react";\nexport default class extends Component{\n  onclick(e){\n    var handler=this.props.customHandler;\n    if(handler){\n      handler({\n        data:{classname:e.target.parentNode.className,i:e.target.dataset.index},\n        eventType:"click"\n      })\n    }\n  }\n  render(){\n    var egyArr=["\u6B63\u5E38","\u91CD\u8981","\u7D27\u6025"];\n    var msgArr=["\u4E0D\u77ED\u4FE1\u63D0\u9192","\u79BB\u7EBF\u77ED\u4FE1\u63D0\u9192","\u5728\u7EBF\u77ED\u4FE1\u63D0\u9192"];\n    var data=this.props.customData||[];\n    var _this=this;\n    return(\n    \t<div className="ysp_askForLeave_wrapper">\n      \t<div className="ysp_askForLeave_title">\u6D41\u7A0B\u57FA\u672C\u4FE1\u606F</div>\n        <div className="ysp_askForLeave_content">\n          <div className="ysp_emergency">\n          \t<span className="contentTitle">\u7D27\u6025\u7A0B\u5EA6</span>\n            <div className="emergencyCheck">\n            \t{egyArr.map(function(d,i){\n                return(\n                  <span className={d==data.basicInfo.actEmergency? "egyactive":""} onClick={_this.onclick.bind(_this)} data-index={i}>{d}</span>\n                )\n              })}\n            </div>\n          </div>\n          <div className="ysp_infoAlert">\n          \t<span className="contentTitle">\u77ED\u4FE1\u63D0\u9192</span>\n            <div className="msgCheck">\n            \t{msgArr.map(function(d,i){\n                return(\n                  <span className={d==data.basicInfo.actMsgAlert? "msgactive":""} data-index={i} onClick={_this.onclick.bind(_this)}>{d}</span>\n                )\n              })}\n            </div>\n          </div>\n        </div>\n      </div>\n    )\n  }\n}';
      return '"use strict";\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require("react");\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));\n  }\n\n  _createClass(_class, [{\n    key: "onclick",\n    value: function onclick(e) {\n      var handler = this.props.customHandler;\n      if (handler) {\n        handler({\n          data: { classname: e.target.parentNode.className, i: e.target.dataset.index },\n          eventType: "click"\n        });\n      }\n    }\n  }, {\n    key: "render",\n    value: function render() {\n      var egyArr = ["\u6B63\u5E38", "\u91CD\u8981", "\u7D27\u6025"];\n      var msgArr = ["\u4E0D\u77ED\u4FE1\u63D0\u9192", "\u79BB\u7EBF\u77ED\u4FE1\u63D0\u9192", "\u5728\u7EBF\u77ED\u4FE1\u63D0\u9192"];\n      var data = this.props.customData || [];\n      var _this = this;\n      return React.createElement(\n        "div",\n        { className: "ysp_askForLeave_wrapper" },\n        React.createElement(\n          "div",\n          { className: "ysp_askForLeave_title" },\n          "\\u6D41\\u7A0B\\u57FA\\u672C\\u4FE1\\u606F"\n        ),\n        React.createElement(\n          "div",\n          { className: "ysp_askForLeave_content" },\n          React.createElement(\n            "div",\n            { className: "ysp_emergency" },\n            React.createElement(\n              "span",\n              { className: "contentTitle" },\n              "\\u7D27\\u6025\\u7A0B\\u5EA6"\n            ),\n            React.createElement(\n              "div",\n              { className: "emergencyCheck" },\n              egyArr.map(function (d, i) {\n                return React.createElement(\n                  "span",\n                  { className: d == data.basicInfo.actEmergency ? "egyactive" : "", onClick: _this.onclick.bind(_this), "data-index": i },\n                  d\n                );\n              })\n            )\n          ),\n          React.createElement(\n            "div",\n            { className: "ysp_infoAlert" },\n            React.createElement(\n              "span",\n              { className: "contentTitle" },\n              "\\u77ED\\u4FE1\\u63D0\\u9192"\n            ),\n            React.createElement(\n              "div",\n              { className: "msgCheck" },\n              msgArr.map(function (d, i) {\n                return React.createElement(\n                  "span",\n                  { className: d == data.basicInfo.actMsgAlert ? "msgactive" : "", "data-index": i, onClick: _this.onclick.bind(_this) },\n                  d\n                );\n              })\n            )\n          )\n        )\n      );\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;';
    },
    getData_control58_TraKH5: function (elem) {
      if (!elem) {
        return;
      }if (elem) {
        var data = [];var trs = $(elem).children("tr");trs.each(function (i, d) {
          var rows = [[], []]; //获取所有tr里奇数行的title
          $(d).children("td:nth-child(odd)").each(function (idx, dt) {
            rows[0].push(dt.textContent);
          }); //获取所有tr偶数行的内容
          $(d).children("td:nth-child(even)").each(function (idx, dt) {
            if (dt.querySelectorAll("select").length > 0) {
              var select = [[], [], []];$(dt).find("select").children("option").each(function (i, d) {
                select[0].push(d.textContent); //选项
                if (d.selected) {
                  select[1].push(d.textContent); //选中项
                }
              });if (dt.querySelectorAll("select")[0].disabled) {
                select[2].push("disabled");
              }rows[1].push(select);
            } else if (dt.querySelectorAll("input[type='button']").length > 0) {
              var days = [];days.push(dt.textContent);days.push(dt.querySelectorAll("input[type='button']")[0].value);rows[1].push(days);
            } else {
              rows[1].push(dt.textContent.replace(/\s/g, "").trim());
            }
          });data.push(rows);
        });data.pop();return data;
      }
    },
    doAction_uiControl54_GI48cc: function (data, elem) {},
    getTemplate_uiControl54_GI48cc: function () {
      var selfTemplate = 'import {Component} from "react";\nexport default class extends Component{\n  \n  render(){\n    var data=this.props.customData||[];\n    var list=data.map(function(d1,i1){\n      return(\n      \t<div className="ysp_detail">\n        \t{\n            d1[0].map(function(d2,i2){\n              return(\n              \t<div className="ysp_detail_row">\n                  <span className="row_title">{d2}</span>\n                  {d1[1][i2] instanceof Array&&d1[1][i2][1]!="\u8BA1\u7B97\u65F6\u957F"?  (<select className={d1[1][i2][2]=="disabled"? "unSelect":"actSelect"} disabled={d1[1][i2][2]=="disabled"}>{\n                    d1[1][i2][0]instanceof Array? d1[1][i2][0].map(function(d3,i3){\n                      return (\n                      \t<option selected={d1[1][i2][1]==d3}>{d3}</option>\n                      )\n                    }):""\n                  }</select>):d1[1][i2] instanceof Array&&d1[1][i2][1]=="\u8BA1\u7B97\u65F6\u957F"? <div className="totalTime"><span>{d1[1][i2][0]}</span><span>{d1[1][i2][1]}</span></div>:<div className="row_content">{d1[1][i2]}</div>}\n                </div>\n              )\n            })\n          }\n        </div>\n      )\n    })\n    return(\n    \t<div className="ysp_detail_wrapper">\n        <div className="ysp_askForLeave_title">\u57FA\u672C\u4FE1\u606F</div>\n        {list}\n        <span className="ysp_showMore">\u663E\u793A\u66F4\u591A\u5185\u5BB9</span>\n      </div>\n    )\n  }\n}';
      return '"use strict";\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require("react");\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));\n  }\n\n  _createClass(_class, [{\n    key: "render",\n    value: function render() {\n      var data = this.props.customData || [];\n      var list = data.map(function (d1, i1) {\n        return React.createElement(\n          "div",\n          { className: "ysp_detail" },\n          d1[0].map(function (d2, i2) {\n            return React.createElement(\n              "div",\n              { className: "ysp_detail_row" },\n              React.createElement(\n                "span",\n                { className: "row_title" },\n                d2\n              ),\n              d1[1][i2] instanceof Array && d1[1][i2][1] != "\u8BA1\u7B97\u65F6\u957F" ? React.createElement(\n                "select",\n                { className: d1[1][i2][2] == "disabled" ? "unSelect" : "actSelect", disabled: d1[1][i2][2] == "disabled" },\n                d1[1][i2][0] instanceof Array ? d1[1][i2][0].map(function (d3, i3) {\n                  return React.createElement(\n                    "option",\n                    { selected: d1[1][i2][1] == d3 },\n                    d3\n                  );\n                }) : ""\n              ) : d1[1][i2] instanceof Array && d1[1][i2][1] == "\u8BA1\u7B97\u65F6\u957F" ? React.createElement(\n                "div",\n                { className: "totalTime" },\n                React.createElement(\n                  "span",\n                  null,\n                  d1[1][i2][0]\n                ),\n                React.createElement(\n                  "span",\n                  null,\n                  d1[1][i2][1]\n                )\n              ) : React.createElement(\n                "div",\n                { className: "row_content" },\n                d1[1][i2]\n              )\n            );\n          })\n        );\n      });\n      return React.createElement(\n        "div",\n        { className: "ysp_detail_wrapper" },\n        React.createElement(\n          "div",\n          { className: "ysp_askForLeave_title" },\n          "\\u57FA\\u672C\\u4FE1\\u606F"\n        ),\n        list,\n        React.createElement(\n          "span",\n          { className: "ysp_showMore" },\n          "\\u663E\\u793A\\u66F4\\u591A\\u5185\\u5BB9"\n        )\n      );\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;';
    }
  });
})(window, ysp);