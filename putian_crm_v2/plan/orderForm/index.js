'use strict';

(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control13_FD5dAX: function getData_control13_FD5dAX(elem) {
      if (!elem) {
        return;
      }
    },
    doAction_uiControl18_E1LePc: function doAction_uiControl18_E1LePc(data, elem) {
      if (data.eventType === 'back') {
        var doc = elem.ownerDocument;var targetEl = doc.querySelector('#clientMenu');ysp.customHelper.toPlan(targetEl, "客户详情", "clientInfo");
      }
    },
    getTemplate_uiControl18_E1LePc: function getTemplate_uiControl18_E1LePc() {
      var selfTemplate = 'import {Component} from \'react\'; \nimport {CustomHeader} from \'ysp-custom-components\';\nexport default class extends Component{\n   \n   render = () => {\n       let _this = this;\n       return (\n         <CustomHeader \n           data={{centerText:"\u8BA2\u5355",rightText:"\u7B5B\u9009"}} \n           backIsShow={true} \n           back={()=>{ \n              let handler = _this.props.customHandler;\n              if (handler) {\n                handler({\n                  eventType: \'back\'\n                });\n              }\n           }} \n           filterIsShow={false} \n           filter={()=>{console.info("header filter ...")}}/>\n       );\n   }\n}';
      return '\'use strict\';\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\n\nvar _react = require(\'react\');\n\nvar _yspCustomComponents = require(\'ysp-custom-components\');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class() {\n    var _ref;\n\n    var _temp, _this2, _ret;\n\n    _classCallCheck(this, _class);\n\n    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    return _ret = (_temp = (_this2 = _possibleConstructorReturn(this, (_ref = _class.__proto__ || Object.getPrototypeOf(_class)).call.apply(_ref, [this].concat(args))), _this2), _this2.render = function () {\n      var _this = _this2;\n      return React.createElement(_yspCustomComponents.CustomHeader, {\n        data: { centerText: "\u8BA2\u5355", rightText: "\u7B5B\u9009" },\n        backIsShow: true,\n        back: function back() {\n          var handler = _this.props.customHandler;\n          if (handler) {\n            handler({\n              eventType: \'back\'\n            });\n          }\n        },\n        filterIsShow: false,\n        filter: function filter() {\n          console.info("header filter ...");\n        } });\n    }, _temp), _possibleConstructorReturn(_this2, _ret);\n  }\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;';
    },
    getData_control14_T2kLgs: function (elem) {
      if (!elem) {
        return [];
      }var content = ysp.customHelper.getTableData(elem, ['销售订单号', '状态', '客户名称', '销售订单类型', '创建时间']); // console.log(window.top.document.querySelector('#designer-root'))
      return content;
    },
    doAction_uiControl17_bsNw4L: function (data, elem) {
      var index = data.dataCustom;var aEls = elem.querySelectorAll("tr > td a"); // elem.querySelectorAll("tr > td a").click();
      if (aEls[index]) {
        var src = aEls[index].getAttribute('ordernum');src = ysp.customHelper.trim(src); //var indexWin = ysp.customHelper.getWinFromRTByName('sourcePageFrame');
        var indexWin = elem.ownerDocument.defaultView;indexWin && indexWin.open("http://192.168.1.224:8080/pttlCrm/res/page/order/orderDetail.html?orderNum=" + src, 'orderDetail'); // var win = ysp.appMain.getActiveWindow();
        // win.close();
      }
    },
    getTemplate_uiControl17_bsNw4L: function getTemplate_uiControl17_bsNw4L() {
      var selfTemplate = 'import {\n  Component\n} from \'react\';\nimport {\n  CustomHeader\n} from \'ysp-custom-components\';\nexport default class extends Component {\n  render = () => {\n    var  _this = this;\n    var data = (this.props.customData && this.props.customData.content) || [];\n    if (data.length == 0) {\n      return (<div>\u65E0\u6570\u636E</div>);\n    }\n    return (\n      <section className="ysp-orderform-list-wrapper">\n             {data.map((item,index)=>{\n                 return (\n                    <article onClick={()=>{\n                        var handler = _this.props.customHandler;\n                        if (handler) {\n                          handler({\n                            eventType: \'click\',\n                            data:index\n                          });\n                        }\n                     }}>\n                       <header className="ysp-orderform-list-header">\n                         <span>\n                           <span className=\'ysp-normal-font\'>\u9500\u552E\u8BA2\u5355\u53F7</span>\n                           <span class="ysp-normal-font">|</span>\n                           <span className=\'ysp-normal-font\'>{item[1]}</span>\n                         </span>\n                         <span>\n                           <span className=\'ysp-assistant-large-font\'>\u8BA2\u5355\u72B6\u6001</span>\n                           <span className="ysp-active-state ysp-assistant-large-font">{item[4]}</span>\n                         </span>\n                       </header>\n                       <div className="ysp-orderform-list-container">\n                         <span style={{fontSize:\'14px\'}}>{item[2]}</span>\n                       </div>\n                       <footer className="ysp-orderform-list-footer">\n                         <span>\n                           <span className=\'ysp-normal-font\'>\u8BA2\u5355\u65F6\u95F4</span>\n                           <span className=\'ysp-normal-font\'>:</span>\n                           <span>\n                             <span className=\'ysp-normal-font\'>{item[0]}</span>\n                           </span>\n                         </span>\n                         <span></span>\n                       </footer>\n                    </article>\n                 );\n               }) \n             }\n             \n         </section>\n    );\n  }\n}';
      return '\'use strict\';\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\n\nvar _react = require(\'react\');\n\nvar _yspCustomComponents = require(\'ysp-custom-components\');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class() {\n    var _ref;\n\n    var _temp, _this2, _ret;\n\n    _classCallCheck(this, _class);\n\n    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    return _ret = (_temp = (_this2 = _possibleConstructorReturn(this, (_ref = _class.__proto__ || Object.getPrototypeOf(_class)).call.apply(_ref, [this].concat(args))), _this2), _this2.render = function () {\n      var _this = _this2;\n      var data = _this2.props.customData && _this2.props.customData.content || [];\n      if (data.length == 0) {\n        return React.createElement(\n          \'div\',\n          null,\n          \'\\u65E0\\u6570\\u636E\'\n        );\n      }\n      return React.createElement(\n        \'section\',\n        { className: \'ysp-orderform-list-wrapper\' },\n        data.map(function (item, index) {\n          return React.createElement(\n            \'article\',\n            { onClick: function onClick() {\n                var handler = _this.props.customHandler;\n                if (handler) {\n                  handler({\n                    eventType: \'click\',\n                    data: index\n                  });\n                }\n              } },\n            React.createElement(\n              \'header\',\n              { className: \'ysp-orderform-list-header\' },\n              React.createElement(\n                \'span\',\n                null,\n                React.createElement(\n                  \'span\',\n                  { className: \'ysp-normal-font\' },\n                  \'\\u9500\\u552E\\u8BA2\\u5355\\u53F7\'\n                ),\n                React.createElement(\n                  \'span\',\n                  { \'class\': \'ysp-normal-font\' },\n                  \'|\'\n                ),\n                React.createElement(\n                  \'span\',\n                  { className: \'ysp-normal-font\' },\n                  item[1]\n                )\n              ),\n              React.createElement(\n                \'span\',\n                null,\n                React.createElement(\n                  \'span\',\n                  { className: \'ysp-assistant-large-font\' },\n                  \'\\u8BA2\\u5355\\u72B6\\u6001\'\n                ),\n                React.createElement(\n                  \'span\',\n                  { className: \'ysp-active-state ysp-assistant-large-font\' },\n                  item[4]\n                )\n              )\n            ),\n            React.createElement(\n              \'div\',\n              { className: \'ysp-orderform-list-container\' },\n              React.createElement(\n                \'span\',\n                { style: { fontSize: \'14px\' } },\n                item[2]\n              )\n            ),\n            React.createElement(\n              \'footer\',\n              { className: \'ysp-orderform-list-footer\' },\n              React.createElement(\n                \'span\',\n                null,\n                React.createElement(\n                  \'span\',\n                  { className: \'ysp-normal-font\' },\n                  \'\\u8BA2\\u5355\\u65F6\\u95F4\'\n                ),\n                React.createElement(\n                  \'span\',\n                  { className: \'ysp-normal-font\' },\n                  \':\'\n                ),\n                React.createElement(\n                  \'span\',\n                  null,\n                  React.createElement(\n                    \'span\',\n                    { className: \'ysp-normal-font\' },\n                    item[0]\n                  )\n                )\n              ),\n              React.createElement(\'span\', null)\n            )\n          );\n        })\n      );\n    }, _temp), _possibleConstructorReturn(_this2, _ret);\n  }\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;';
    },
    getData_control36_D9ATT6: function getData_control36_D9ATT6(elem) {
      if (!elem) return;var data = {};var item = [];data.prev = false;data.next = false;data.numberTaotal = elem.querySelector('.skip').querySelectorAll('span')[0].textContent;var lis = elem.querySelectorAll('li');for (var i = 0; i < lis.length; i++) {
        var as = lis[i].querySelectorAll('a');for (var j = 0; j < as.length; j++) {
          switch (as[j].getAttribute('title')) {case 'Go to previous page':
              data.prev = true;break;case 'Go to next page':
              data.next = true;;break;}
        }
      }data.page = elem.ownerDocument.querySelector('.content-order').querySelector("tbody").textContent != '' ? true : false;return data;
    },
    doAction_uiControl39_fQQ5s4: function doAction_uiControl39_fQQ5s4(data, elem) {
      switch (data.eventType) {case 'prev':
          prevtitle(data.dataCustom);break;case 'next':
          prevtitle(data.dataCustom);break;case 'change':
          change(data.dataCustom);break;}function change(data) {
        var input = elem.ownerDocument.querySelector('.skip-num');input.value = data;input.blur();elem.ownerDocument.querySelector('#orderPage').querySelector('.skip-right-icon').click();
      }function prevtitle(data) {
        var lis = elem.querySelectorAll('li');for (var i = 0; i < lis.length; i++) {
          var as = lis[i].querySelectorAll('a');for (var j = 0; j < as.length; j++) {
            if (data == 'prev' && as[j].getAttribute('title') == 'Go to previous page') {
              as[j].click();
            } else if (data == 'next' && as[j].getAttribute('title') == 'Go to next page') {
              as[j].click();
            }
          }
        }
      }
    },
    getTemplate_uiControl39_fQQ5s4: function getTemplate_uiControl39_fQQ5s4() {
      var selfTemplate = 'import {\n  Component\n} from \'react\';\nimport {\n  Page\n} from \'ysp-custom-components\';\nexport default class extends Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      prevState: props.customData && props.customData.prev,\n      pageState: props.customData && props.customData.page,\n      nextState: props.customData && props.customData.next\n    }\n  }\n  componentWillReceiveProps(props){\n    this.setState({\n      prevState: props.customData && props.customData.prev,\n      pageState: props.customData && props.customData.page,\n      nextState: props.customData && props.customData.next\n    })\n  }\n  render() {\n    let _this = this;\n    return (\n      <div>\n      \t<Page \n          pageState = {this.state.pageState}\n      \t  prevState = {this.state.prevState}\n          nextState = {this.state.nextState}\n        \tprev={(e)=>{\n          var handler = _this.props.customHandler;\n          if(handler){\n            handler({\n              data:"prev",\n              eventType:\'prev\'\n            })\n          }\n             e.target.parentElement.querySelector(\'.input-serch\').querySelector(\'input\').value = \'\';\n        }}\n        \tpageNumber={this.props.customData && this.props.customData.numberTaotal}\n        \tnext={(e)=>{\n          var handler = _this.props.customHandler;\n          if(handler){\n            handler({\n              data:"next",\n              eventType:"next"\n            })\n          }\n            e.target.previousSibling.querySelector(\'input\').value = \'\';\n        }}\n        Change={(e)=>{\n          var handler = this.props.customHandler;\n          if(handler){\n            handler({\n              data:e.target.value,\n              eventType:\'change\'\n            })\n          }\n        }}\n      />\n    </div>\n    )\n  }\n}';
      return '\'use strict\';\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require(\'react\');\n\nvar _yspCustomComponents = require(\'ysp-custom-components\');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class(props) {\n    _classCallCheck(this, _class);\n\n    var _this2 = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));\n\n    _this2.state = {\n      prevState: props.customData && props.customData.prev,\n      pageState: props.customData && props.customData.page,\n      nextState: props.customData && props.customData.next\n    };\n    return _this2;\n  }\n\n  _createClass(_class, [{\n    key: \'componentWillReceiveProps\',\n    value: function componentWillReceiveProps(props) {\n      this.setState({\n        prevState: props.customData && props.customData.prev,\n        pageState: props.customData && props.customData.page,\n        nextState: props.customData && props.customData.next\n      });\n    }\n  }, {\n    key: \'render\',\n    value: function render() {\n      var _this3 = this;\n\n      var _this = this;\n      return React.createElement(\n        \'div\',\n        null,\n        React.createElement(_yspCustomComponents.Page, {\n          pageState: this.state.pageState,\n          prevState: this.state.prevState,\n          nextState: this.state.nextState,\n          prev: function prev(e) {\n            var handler = _this.props.customHandler;\n            if (handler) {\n              handler({\n                data: "prev",\n                eventType: \'prev\'\n              });\n            }\n            e.target.parentElement.querySelector(\'.input-serch\').querySelector(\'input\').value = \'\';\n          },\n          pageNumber: this.props.customData && this.props.customData.numberTaotal,\n          next: function next(e) {\n            var handler = _this.props.customHandler;\n            if (handler) {\n              handler({\n                data: "next",\n                eventType: "next"\n              });\n            }\n            e.target.previousSibling.querySelector(\'input\').value = \'\';\n          },\n          Change: function Change(e) {\n            var handler = _this3.props.customHandler;\n            if (handler) {\n              handler({\n                data: e.target.value,\n                eventType: \'change\'\n              });\n            }\n          }\n        })\n      );\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;';
    }
  }, 'orderForm');
})(window, ysp);