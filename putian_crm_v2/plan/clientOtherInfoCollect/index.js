'use strict';

(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control40_ZsbA9a: function getData_control40_ZsbA9a(elem) {},
    doAction_uiControl43_9it1ms: function doAction_uiControl43_9it1ms(data, elem) {
      if (data.eventType === 'back') {
        //elem.querySelector(".btn").click();
        ysp.customHelper.back();ysp.customHelper.forceMatchModels('informationFill');
      }
    },
    getTemplate_uiControl43_9it1ms: function getTemplate_uiControl43_9it1ms() {
      var selfTemplate = 'import {Component} from \'react\'; \nimport {CustomHeader} from \'ysp-custom-components\';\nexport default class extends Component{\n   \n   render = () => {\n       let _this = this;\n       return (\n         <CustomHeader \n           data={{centerText:"\u5BA2\u6237\u5176\u4ED6\u4FE1\u606F\u91C7\u96C6",rightText:"\u7B5B\u9009"}} \n           backIsShow={true} \n           back={()=>{ \n              let handler = _this.props.customHandler;\n              if (handler) {\n                handler({\n                  eventType: \'back\'\n                });\n              }\n           }} \n           filterIsShow={false} \n           filter={()=>{console.info("header filter ...")}}/>\n       );\n   }\n}';
      return '\'use strict\';\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\n\nvar _react = require(\'react\');\n\nvar _yspCustomComponents = require(\'ysp-custom-components\');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class() {\n    var _ref;\n\n    var _temp, _this2, _ret;\n\n    _classCallCheck(this, _class);\n\n    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    return _ret = (_temp = (_this2 = _possibleConstructorReturn(this, (_ref = _class.__proto__ || Object.getPrototypeOf(_class)).call.apply(_ref, [this].concat(args))), _this2), _this2.render = function () {\n      var _this = _this2;\n      return React.createElement(_yspCustomComponents.CustomHeader, {\n        data: { centerText: "\u5BA2\u6237\u5176\u4ED6\u4FE1\u606F\u91C7\u96C6", rightText: "\u7B5B\u9009" },\n        backIsShow: true,\n        back: function back() {\n          var handler = _this.props.customHandler;\n          if (handler) {\n            handler({\n              eventType: \'back\'\n            });\n          }\n        },\n        filterIsShow: false,\n        filter: function filter() {\n          console.info("header filter ...");\n        } });\n    }, _temp), _possibleConstructorReturn(_this2, _ret);\n  }\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;';
    },
    getData_control71_VlTEnP: function getData_control71_VlTEnP(elem) {
      if (!elem) {
        return [];
      }var data = { content: [] };if (elem) {
        var messagePSIcontentborder = elem.querySelector(".messagePSIcontentborder");if (!messagePSIcontentborder) {
          return [];
        }var list = messagePSIcontentborder.querySelectorAll(".messagePSIcontentborder-content");for (var i = 0; i < list.length; i++) {
          var obj = {};var no = list[i].querySelector(".messagePSIcontentborder-content-top").querySelector(".messagePSIcontentborder-content-top-span").innerHTML;var de = list[i].querySelector(".messagePSIcontentborder-content-top").querySelector(".messagePSIcontentborder-content-top-spanlast").lastElementChild.innerHTML;var mPSIbottom = list[i].querySelector(".messagePSIcontentborder-content-bottom");if (!mPSIbottom) {
            return [];
          }var ll = mPSIbottom.querySelectorAll(".col-sm-5");var titles = [];var names = [];for (var j = 0; j <= ll.length - 1; j++) {
            titles.push(ll[j].querySelector(".messagePSIcontentborder-content-bottom-text").textContent);names.push(ll[j].querySelector(".messagePSIcontentborder-content-bottom-xm-text").textContent); //var aaa = ll[j].querySelector(".messagePSIcontentborder-content-bottom-text").textContent;
            obj.title = titles;obj.name = names;
          }obj.date = de;obj.number = no;data.content.push(obj);
        }return data;
      }
    },
    doAction_uiControl76_TAMqvJ: function doAction_uiControl76_TAMqvJ(data, elem) {
      if ('clickopen' == data.eventType) {
        var ind = data.dataCustom;var btn = elem.ownerDocument.querySelectorAll(".messagePSIcontentborder-content-bottom")[ind].querySelector("a");btn.click();ysp.customHelper.forceMatchModels('clientInfoCollectDetail');
      }
    },
    getTemplate_uiControl76_TAMqvJ: function getTemplate_uiControl76_TAMqvJ() {
      var selfTemplate = 'import {\n  Component\n} from \'react\';\nimport {\n  Pagination\n} from \'ysp-custom-components\';\nimport {\n  CustomHeader\n} from \'ysp-custom-components\';\nexport default class extends Component {\n  constructor(props) {\n    super(props);\n  }\n handlerClick = (e) => {\n    var index = e.currentTarget.dataset.index;\n    const handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        data: index,\n        eventType: \'clickopen\'\n      })\n    }\n  }\n  render = () => {\n    var data = this.props.customData && this.props.customData.content;\n    if(Object.prototype.toString.call(data).indexOf(\'Array\') == -1){\n      return (\n      \t<div style={{textAlign:\'center\'}}>\u65E0\u6570\u636E\uFF01</div>\n      )\n    }\n    return (\n      <section className=\'ysp-customerPSI\'>\n       {\n        data.length == 0 ? <div style={{textAlign:\'center\'}}>\u65E0\u6570\u636E\uFF01</div>:\n          <div>\n            {data.map((item,index)=>{\n                return(\n                  <div className = \'ysp-customerPSIcontent\'>\n                    <div>\n                      <div>\n                        <span>{item.name[1]}</span>\n                        <span>{item.number}</span>\n                      </div>\n                      <div className="ysp-customerPSIcontentname">\n                        <span>\u5BA2\u6237\u540D\u79F0\uFF1A</span>\n                        <span>{item.name[0]}</span>\n                      </div>\n                      <div>\n                        <span>\u4E0A\u6B21\u66F4\u65B0\uFF1A</span>\n                        <span>{item.date}</span>\n                      </div>\n                    </div>\n                    \n                    <div>\n                      <span onClick={this.handlerClick.bind(this)} data-index = {index}>\u5F55\u5165</span>\n                    </div>\n                  </div>\n                );\n            })}\n          </div>\n        }\n      </section>\n    );\n  }\n};';
      return '\'use strict\';\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\n\nvar _react = require(\'react\');\n\nvar _yspCustomComponents = require(\'ysp-custom-components\');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class(props) {\n    _classCallCheck(this, _class);\n\n    var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));\n\n    _this.handlerClick = function (e) {\n      var index = e.currentTarget.dataset.index;\n      var handler = _this.props.customHandler;\n      if (handler) {\n        handler({\n          data: index,\n          eventType: \'clickopen\'\n        });\n      }\n    };\n\n    _this.render = function () {\n      var data = _this.props.customData && _this.props.customData.content;\n      if (Object.prototype.toString.call(data).indexOf(\'Array\') == -1) {\n        return React.createElement(\n          \'div\',\n          { style: { textAlign: \'center\' } },\n          \'\\u65E0\\u6570\\u636E\\uFF01\'\n        );\n      }\n      return React.createElement(\n        \'section\',\n        { className: \'ysp-customerPSI\' },\n        data.length == 0 ? React.createElement(\n          \'div\',\n          { style: { textAlign: \'center\' } },\n          \'\\u65E0\\u6570\\u636E\\uFF01\'\n        ) : React.createElement(\n          \'div\',\n          null,\n          data.map(function (item, index) {\n            return React.createElement(\n              \'div\',\n              { className: \'ysp-customerPSIcontent\' },\n              React.createElement(\n                \'div\',\n                null,\n                React.createElement(\n                  \'div\',\n                  null,\n                  React.createElement(\n                    \'span\',\n                    null,\n                    item.name[1]\n                  ),\n                  React.createElement(\n                    \'span\',\n                    null,\n                    item.number\n                  )\n                ),\n                React.createElement(\n                  \'div\',\n                  { className: \'ysp-customerPSIcontentname\' },\n                  React.createElement(\n                    \'span\',\n                    null,\n                    \'\\u5BA2\\u6237\\u540D\\u79F0\\uFF1A\'\n                  ),\n                  React.createElement(\n                    \'span\',\n                    null,\n                    item.name[0]\n                  )\n                ),\n                React.createElement(\n                  \'div\',\n                  null,\n                  React.createElement(\n                    \'span\',\n                    null,\n                    \'\\u4E0A\\u6B21\\u66F4\\u65B0\\uFF1A\'\n                  ),\n                  React.createElement(\n                    \'span\',\n                    null,\n                    item.date\n                  )\n                )\n              ),\n              React.createElement(\n                \'div\',\n                null,\n                React.createElement(\n                  \'span\',\n                  { onClick: _this.handlerClick.bind(_this), \'data-index\': index },\n                  \'\\u5F55\\u5165\'\n                )\n              )\n            );\n          })\n        )\n      );\n    };\n\n    return _this;\n  }\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;\n;';
    },

    getData_control74_nIuyz8: function getData_control74_nIuyz8(elem) {
      if (!elem) return;var data = {};var item = [];data.prev = false;data.next = false;data.numberTaotal = elem.querySelector('.skip').querySelectorAll('span')[0].textContent;var lis = elem.querySelectorAll('li');for (var i = 0; i < lis.length; i++) {
        var as = lis[i].querySelectorAll('a');for (var j = 0; j < as.length; j++) {
          switch (as[j].getAttribute('title')) {case 'Go to previous page':
              data.prev = true;break;case 'Go to next page':
              data.next = true;;break;}
        }
      }data.page = elem.ownerDocument.querySelector('.messagePSIcontentborder-content').textContent != '' ? true : false;return data;
    },
    doAction_uiControl79_wNLq08: function doAction_uiControl79_wNLq08(data, elem) {
      switch (data.eventType) {case 'prev':
          prevtitle(data.dataCustom);break;case 'next':
          prevtitle(data.dataCustom);break;case 'change':
          change(data.dataCustom);break;}function change(data) {
        var input = elem.ownerDocument.querySelector('.skip-num');input.value = data;input.blur();elem.ownerDocument.querySelector('#Page').querySelector('.skip-right-icon').click();
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
    getTemplate_uiControl79_wNLq08: function getTemplate_uiControl79_wNLq08() {
      var selfTemplate = "import {\n  Component\n} from 'react';\nimport {\n  Page\n} from 'ysp-custom-components';\nexport default class extends Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      prevState: props.customData && props.customData.prev,\n      pageState: props.customData && props.customData.page,\n      nextState: props.customData && props.customData.next\n    }\n  }\n  componentWillReceiveProps(props){\n    this.setState({\n      prevState: props.customData && props.customData.prev,\n      pageState: props.customData && props.customData.page,\n      nextState: props.customData && props.customData.next\n    })\n  }\n  render() {\n    let _this = this;\n    return (\n      <div>\n      \t<Page \n          pageState = {this.state.pageState}\n      \t  prevState = {this.state.prevState}\n          nextState = {this.state.nextState}\n        \tprev={(e)=>{\n          var handler = _this.props.customHandler;\n          if(handler){\n            handler({\n              data:\"prev\",\n              eventType:'prev'\n            })\n          }\n             e.target.parentElement.querySelector('.input-serch').querySelector('input').value = '';\n        }}\n        \tpageNumber={this.props.customData && this.props.customData.numberTaotal}\n        \tnext={(e)=>{\n          var handler = _this.props.customHandler;\n          if(handler){\n            handler({\n              data:\"next\",\n              eventType:\"next\"\n            })\n          }\n            e.target.previousSibling.querySelector('input').value = '';\n        }}\n        Change={(e)=>{\n          var handler = this.props.customHandler;\n          if(handler){\n            handler({\n              data:e.target.value,\n              eventType:'change'\n            })\n          }\n        }}\n      />\n    </div>\n    )\n  }\n}\n\n\n\n";
      return "'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require('react');\n\nvar _yspCustomComponents = require('ysp-custom-components');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class(props) {\n    _classCallCheck(this, _class);\n\n    var _this2 = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));\n\n    _this2.state = {\n      prevState: props.customData && props.customData.prev,\n      pageState: props.customData && props.customData.page,\n      nextState: props.customData && props.customData.next\n    };\n    return _this2;\n  }\n\n  _createClass(_class, [{\n    key: 'componentWillReceiveProps',\n    value: function componentWillReceiveProps(props) {\n      this.setState({\n        prevState: props.customData && props.customData.prev,\n        pageState: props.customData && props.customData.page,\n        nextState: props.customData && props.customData.next\n      });\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var _this3 = this;\n\n      var _this = this;\n      return React.createElement(\n        'div',\n        null,\n        React.createElement(_yspCustomComponents.Page, {\n          pageState: this.state.pageState,\n          prevState: this.state.prevState,\n          nextState: this.state.nextState,\n          prev: function prev(e) {\n            var handler = _this.props.customHandler;\n            if (handler) {\n              handler({\n                data: \"prev\",\n                eventType: 'prev'\n              });\n            }\n            e.target.parentElement.querySelector('.input-serch').querySelector('input').value = '';\n          },\n          pageNumber: this.props.customData && this.props.customData.numberTaotal,\n          next: function next(e) {\n            var handler = _this.props.customHandler;\n            if (handler) {\n              handler({\n                data: \"next\",\n                eventType: \"next\"\n              });\n            }\n            e.target.previousSibling.querySelector('input').value = '';\n          },\n          Change: function Change(e) {\n            var handler = _this3.props.customHandler;\n            if (handler) {\n              handler({\n                data: e.target.value,\n                eventType: 'change'\n              });\n            }\n          }\n        })\n      );\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;";
    },
    getData_control73_sLhIJy: function getData_control73_sLhIJy(elem) {
      if (!elem) {
        return [];
      }if (elem) {
        var data = "";var inputVal = elem.querySelector("#customerName_search").value;if (inputVal !== null) {
          data = inputVal;
        } else {
          data = "";
        }return data;
      }
    },
    doAction_uiControl78_iHPqD0: function doAction_uiControl78_iHPqD0(data, elem) {
      if (data.eventType == 'click') {
        elem.querySelector('input').value = data.dataCustom;elem.querySelector('button').click();
      }
    },
    getTemplate_uiControl78_iHPqD0: function getTemplate_uiControl78_iHPqD0() {
      var selfTemplate = 'import {Component} from \'react\';\nimport {CustomerSerch} from \'ysp-custom-components\';\nexport default class extends Component{\n constructor(){\n   super();\n   this.state={\n     buttonState:false,\n     commitState : false,\n     commitStateBtn:false,\n     width:false\n   }\n }\n  click(e){\n    let _this=this;\n    var handler=this.props.customHandler;\n    if(handler){\n      handler({\n        data:e.target.previousSibling.value,\n        eventType:"click"\n      })\n    }\n    _this.setState({\n      buttonState:false,\n      commitState : false,\n      commitStateBtn:false,\n      width:false\n    })\n    e.target.previousSibling.value = \'\';\n  }\n  render(){\n    let _this=this;\n    return(\n    \t<CustomerSerch \n        placeholder=\'\u641C\u7D22\'\n        commitStateBtn={this.state.commitStateBtn}\n        click={_this.click.bind(_this)}\n        buttonState = {this.state.buttonState}\n        commitState = {this.state.commitState}\n        width = {this.state.width}\n        />\n    )\n  }\n}';
      return '\'use strict\';\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require(\'react\');\n\nvar _yspCustomComponents = require(\'ysp-custom-components\');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    var _this2 = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this));\n\n    _this2.state = {\n      buttonState: false,\n      commitState: false,\n      commitStateBtn: false,\n      width: false\n    };\n    return _this2;\n  }\n\n  _createClass(_class, [{\n    key: \'click\',\n    value: function click(e) {\n      var _this = this;\n      var handler = this.props.customHandler;\n      if (handler) {\n        handler({\n          data: e.target.previousSibling.value,\n          eventType: "click"\n        });\n      }\n      _this.setState({\n        buttonState: false,\n        commitState: false,\n        commitStateBtn: false,\n        width: false\n      });\n      e.target.previousSibling.value = \'\';\n    }\n  }, {\n    key: \'render\',\n    value: function render() {\n      var _this = this;\n      return React.createElement(_yspCustomComponents.CustomerSerch, {\n        placeholder: \'\\u641C\\u7D22\',\n        commitStateBtn: this.state.commitStateBtn,\n        click: _this.click.bind(_this),\n        buttonState: this.state.buttonState,\n        commitState: this.state.commitState,\n        width: this.state.width\n      });\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;';
    }
  });
})(window, ysp);