(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control242_z8l5mX: function (elem) {},
    doAction_uiControl236_I1bfFg: function (data, elem) {
      if (data.eventType === 'back') {
        var doc = elem.ownerDocument;var targetEl = doc.querySelector('#clientMenu');ysp.customHelper.toPlan(targetEl, "门店详情", "storeDetails");
      }
    },
    getTemplate_uiControl236_I1bfFg: function () {
      var selfTemplate = "import {Component} from 'react'; \nimport {CustomHeader} from 'ysp-custom-components';\nexport default class extends Component{\n   \n   render = () => {\n       let _this = this;\n       return (\n         <CustomHeader\n           data={{centerText:\"\u95E8\u5E97\u9500\u552E\u8FBE\u6210\",rightText:\"\u7B5B\u9009\"}} \n           backIsShow={true} \n           back={()=>{ \n              let handler = _this.props.customHandler;\n              if (handler) {\n                handler({\n                  eventType: 'back'\n                });\n              }\n           }} \n           filterIsShow={false} \n           filter={()=>{console.info(\"header filter ...\")}}/>\n       );\n   }\n}";
      return "'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = require('react');\n\nvar _yspCustomComponents = require('ysp-custom-components');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class() {\n    var _ref;\n\n    var _temp, _this2, _ret;\n\n    _classCallCheck(this, _class);\n\n    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    return _ret = (_temp = (_this2 = _possibleConstructorReturn(this, (_ref = _class.__proto__ || Object.getPrototypeOf(_class)).call.apply(_ref, [this].concat(args))), _this2), _this2.render = function () {\n      var _this = _this2;\n      return React.createElement(_yspCustomComponents.CustomHeader, {\n        data: { centerText: \"\u95E8\u5E97\u9500\u552E\u8FBE\u6210\", rightText: \"\u7B5B\u9009\" },\n        backIsShow: true,\n        back: function back() {\n          var handler = _this.props.customHandler;\n          if (handler) {\n            handler({\n              eventType: 'back'\n            });\n          }\n        },\n        filterIsShow: false,\n        filter: function filter() {\n          console.info(\"header filter ...\");\n        } });\n    }, _temp), _possibleConstructorReturn(_this2, _ret);\n  }\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;";
    },

    getData_control244_hHUJPp: function (elem) {
      if (!elem) {
        return [];
      }var data = { subContent: [], dataLoading: [], dataTipMsg: [] };var forms = elem.ownerDocument.querySelectorAll("iframe") && elem.ownerDocument.querySelectorAll("iframe")[0].contentDocument.querySelector("#queryForm");if (forms) {
        var jqGrid = forms.querySelector("#jqGrid_wrapper").querySelector("#table_list_1").querySelector("tbody");var trs = jqGrid.querySelectorAll("tr");for (var i = 1; i < trs.length; i++) {
          var aa = [];var month = trs[i].querySelectorAll("td") && trs[i].querySelectorAll("td")[0].textContent;var xm = trs[i].querySelectorAll("td") && trs[i].querySelectorAll("td")[2].textContent;var cpxl = trs[i].querySelectorAll("td") && trs[i].querySelectorAll("td")[5].textContent;var jx = trs[i].querySelectorAll("td") && trs[i].querySelectorAll("td")[6].textContent;var mbxl = trs[i].querySelectorAll("td") && trs[i].querySelectorAll("td")[8].textContent;var sjxl = trs[i].querySelectorAll("td") && trs[i].querySelectorAll("td")[10].textContent;var mbxse = trs[i].querySelectorAll("td") && trs[i].querySelectorAll("td")[9].textContent;var sjxse = trs[i].querySelectorAll("td") && trs[i].querySelectorAll("td")[11].textContent;var xsdc = trs[i].querySelectorAll("td") && trs[i].querySelectorAll("td")[12].textContent;var xsedc = trs[i].querySelectorAll("td") && trs[i].querySelectorAll("td")[13].textContent;aa.push(month);aa.push(xm);aa.push(cpxl);aa.push(jx);aa.push(mbxl);aa.push(sjxl);aa.push(mbxse);aa.push(sjxse);aa.push(xsdc);aa.push(xsedc);data.subContent.push(aa);
        } //   if (jqGrid) {
        //     var data = ysp.customHelper.getTableData(jqGrid, ['产品系列', "机型", "目标销量", "实际销量", "目标销售额", "实际销售额", "销量达成", "销售额达成"]); //var data = content.Shift();
        //     if (data) {
        //       var content = data.content.slice(1);
        //     }
        //     return content;
        //   }
      }var loading = elem.ownerDocument.querySelectorAll("iframe") && elem.ownerDocument.querySelectorAll("iframe")[0].contentDocument.querySelector(".loading-box");var loadingStyle = loading.style.display;if (loadingStyle === 'none') {
        data.dataLoading.push(false);
      } else {
        data.dataLoading.push(true);
      }var loadingTipMsg = ysp.customHelper.tipMsg.getLoading();data.dataTipMsg.push(loadingTipMsg);return data;
    },
    doAction_uiControl238_NtA6Rl: function (data, elem) {},
    getTemplate_uiControl238_NtA6Rl: function () {
      var selfTemplate = 'import {\n  Component\n} from \'react\';\nimport {\n  CustomHeader\n} from \'ysp-custom-components\';\nexport default class extends Component {\n  render = () => {\n    var  _this = this;\n    var data = (this.props.customData && this.props.customData.subContent) || [];\n    var dataLoading = (this.props.customData && this.props.customData.dataLoading[0]);\n    var dataTipMsg = (this.props.customData && this.props.customData.dataTipMsg[0]);\n    if (data.length == 0 && dataLoading == false && dataTipMsg == null) {\n      return (<div className="ysp-no-data">\n        \t\t\t\t<div></div>\n                <div>\u6682\u65F6\u6CA1\u6709\u6570\u636E~</div>  \n        \t\t\t</div>);\n    }\n    return (\n      <div className="ysp-store-sales-reacheds-wrapper">\n         {data.map((item,index)=>{\n          return (\n                <div className="ysp-store-sales-reacheds-content-wrapper">\n                 <div>{item[2]}</div>\n                 <div>\n                   <span>\u673A\u578B:</span>\n                   <span>{item[3]}</span>\n                 </div>\n                 <div>\n                   <span>\u76EE\u6807\u9500\u91CF:</span>\n                   <span>{item[4]}</span>\n                 </div>\n                 \n                 <div>\n                   <div>\n                     <span>\u5B9E\u9645\u9500\u91CF:</span>\n                     <span>{item[5]}</span>\n                   </div>\n                   <div>\n                     <span>{item[8]}</span>\n                     <span>{item[9]}</span>\n                   </div>\n                 </div>\n                 \n                 <div>\n                   <div>\n                     <span>\u76EE\u6807\u9500\u552E\u989D:</span>\n                     <span>{item[6]}</span>\n                   </div>\n                   <div>\n                     <span>\u9500\u91CF\u8FBE\u6210\u7387</span>\n                     <span>\u9500\u552E\u989D\u8FBE\u6210\u7387</span>\n                   </div>\n                 </div>\n                 \n                 <div>\n                   <span>\u5B9E\u9645\u9500\u552E\u989D:</span>\n                   <span>{item[7]}</span>\n                 </div>\n                </div>\n             );\n             \n           }) \n         }  \n    </div>\n    );\n  }\n}';
      return '\'use strict\';\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\n\nvar _react = require(\'react\');\n\nvar _yspCustomComponents = require(\'ysp-custom-components\');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class() {\n    var _ref;\n\n    var _temp, _this2, _ret;\n\n    _classCallCheck(this, _class);\n\n    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    return _ret = (_temp = (_this2 = _possibleConstructorReturn(this, (_ref = _class.__proto__ || Object.getPrototypeOf(_class)).call.apply(_ref, [this].concat(args))), _this2), _this2.render = function () {\n      var _this = _this2;\n      var data = _this2.props.customData && _this2.props.customData.subContent || [];\n      var dataLoading = _this2.props.customData && _this2.props.customData.dataLoading[0];\n      var dataTipMsg = _this2.props.customData && _this2.props.customData.dataTipMsg[0];\n      if (data.length == 0 && dataLoading == false && dataTipMsg == null) {\n        return React.createElement(\n          \'div\',\n          { className: \'ysp-no-data\' },\n          React.createElement(\'div\', null),\n          React.createElement(\n            \'div\',\n            null,\n            \'\\u6682\\u65F6\\u6CA1\\u6709\\u6570\\u636E~\'\n          )\n        );\n      }\n      return React.createElement(\n        \'div\',\n        { className: \'ysp-store-sales-reacheds-wrapper\' },\n        data.map(function (item, index) {\n          return React.createElement(\n            \'div\',\n            { className: \'ysp-store-sales-reacheds-content-wrapper\' },\n            React.createElement(\n              \'div\',\n              null,\n              item[2]\n            ),\n            React.createElement(\n              \'div\',\n              null,\n              React.createElement(\n                \'span\',\n                null,\n                \'\\u673A\\u578B:\'\n              ),\n              React.createElement(\n                \'span\',\n                null,\n                item[3]\n              )\n            ),\n            React.createElement(\n              \'div\',\n              null,\n              React.createElement(\n                \'span\',\n                null,\n                \'\\u76EE\\u6807\\u9500\\u91CF:\'\n              ),\n              React.createElement(\n                \'span\',\n                null,\n                item[4]\n              )\n            ),\n            React.createElement(\n              \'div\',\n              null,\n              React.createElement(\n                \'div\',\n                null,\n                React.createElement(\n                  \'span\',\n                  null,\n                  \'\\u5B9E\\u9645\\u9500\\u91CF:\'\n                ),\n                React.createElement(\n                  \'span\',\n                  null,\n                  item[5]\n                )\n              ),\n              React.createElement(\n                \'div\',\n                null,\n                React.createElement(\n                  \'span\',\n                  null,\n                  item[8]\n                ),\n                React.createElement(\n                  \'span\',\n                  null,\n                  item[9]\n                )\n              )\n            ),\n            React.createElement(\n              \'div\',\n              null,\n              React.createElement(\n                \'div\',\n                null,\n                React.createElement(\n                  \'span\',\n                  null,\n                  \'\\u76EE\\u6807\\u9500\\u552E\\u989D:\'\n                ),\n                React.createElement(\n                  \'span\',\n                  null,\n                  item[6]\n                )\n              ),\n              React.createElement(\n                \'div\',\n                null,\n                React.createElement(\n                  \'span\',\n                  null,\n                  \'\\u9500\\u91CF\\u8FBE\\u6210\\u7387\'\n                ),\n                React.createElement(\n                  \'span\',\n                  null,\n                  \'\\u9500\\u552E\\u989D\\u8FBE\\u6210\\u7387\'\n                )\n              )\n            ),\n            React.createElement(\n              \'div\',\n              null,\n              React.createElement(\n                \'span\',\n                null,\n                \'\\u5B9E\\u9645\\u9500\\u552E\\u989D:\'\n              ),\n              React.createElement(\n                \'span\',\n                null,\n                item[7]\n              )\n            )\n          );\n        })\n      );\n    }, _temp), _possibleConstructorReturn(_this2, _ret);\n  }\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;';
    },
    getData_control246_e7OQhN: function (elem) {
      if (!elem) {
        return [];
      }var forms = elem.ownerDocument.querySelectorAll("iframe") && elem.ownerDocument.querySelectorAll("iframe")[0].contentDocument.querySelector("#queryForm");if (forms) {
        var prev = forms.querySelector('#prev_pager_list_1') && forms.querySelector('#prev_pager_list_1').classList.contains('ui-disabled');var next = forms.querySelector('#next_pager_list_1') && forms.querySelector('#next_pager_list_1').classList.contains('ui-disabled');return { prev: prev, next: next };
      }
    },
    doAction_uiControl240_uQAFwz: function (data, elem) {
      if (data.eventType == 'prevpage') {
        elem.ownerDocument.querySelector('#prev_pager_list_1 span').click();
      }if (data.eventType == 'nextpage') {
        elem.ownerDocument.querySelector('#next_pager_list_1 span').click();
      }
    },
    getTemplate_uiControl240_uQAFwz: function () {
      var selfTemplate = 'import { Pagination } from \'ysp-custom-components\';\nexport default class extends React.Component {\n  constructor(props){\n    super(props);\n    this.state={\n      nprev:props.customData && props.customData.prev || false,\n      nnext:props.customData && props.customData.next || false\n    }\n  }\n  componentWillReceiveProps(nextProps){\n    this.setState({\n      nprev:nextProps.customData && nextProps.customData.prev,\n      nnext:nextProps.customData && nextProps.customData.next\n    })\n  }\n  render(){\n    return (\n      <div style={{display: (this.props.customData.prev && this.props.customData.next) ? \'none\': \'block\'}}>\n        <Pagination \n          prev={()=>{\n            const handler = this.props.customHandler;\n            if(handler){\n              handler({\n                eventType: \'prevpage\'\n              });\n            }\n          }}\n          disabledPrev={this.props.customData && this.props.customData.prev}\n          next={()=>{\n            const handler = this.props.customHandler;\n            if(handler){\n              handler({\n                eventType: \'nextpage\'\n              })\n            }\n          }}\n           disabledNext={this.props.customData && this.props.customData.next}\n          />\n      </div>\n    )\n  }\n}';
      return '\'use strict\';\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _yspCustomComponents = require(\'ysp-custom-components\');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_React$Component) {\n  _inherits(_class, _React$Component);\n\n  function _class(props) {\n    _classCallCheck(this, _class);\n\n    var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));\n\n    _this.state = {\n      nprev: props.customData && props.customData.prev || false,\n      nnext: props.customData && props.customData.next || false\n    };\n    return _this;\n  }\n\n  _createClass(_class, [{\n    key: \'componentWillReceiveProps\',\n    value: function componentWillReceiveProps(nextProps) {\n      this.setState({\n        nprev: nextProps.customData && nextProps.customData.prev,\n        nnext: nextProps.customData && nextProps.customData.next\n      });\n    }\n  }, {\n    key: \'render\',\n    value: function render() {\n      var _this2 = this;\n\n      return React.createElement(\n        \'div\',\n        { style: { display: this.props.customData.prev && this.props.customData.next ? \'none\' : \'block\' } },\n        React.createElement(_yspCustomComponents.Pagination, {\n          prev: function prev() {\n            var handler = _this2.props.customHandler;\n            if (handler) {\n              handler({\n                eventType: \'prevpage\'\n              });\n            }\n          },\n          disabledPrev: this.props.customData && this.props.customData.prev,\n          next: function next() {\n            var handler = _this2.props.customHandler;\n            if (handler) {\n              handler({\n                eventType: \'nextpage\'\n              });\n            }\n          },\n          disabledNext: this.props.customData && this.props.customData.next\n        })\n      );\n    }\n  }]);\n\n  return _class;\n}(React.Component);\n\nexports.default = _class;';
    }
  });
})(window, ysp);