(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control217_k2qBMU: function (elem) {
      if (!elem) {
        return [];
      }var data = { dataContent: [], dataLoading: [] };var content = ysp.customHelper.getTableData(elem, ["门店全称", "门店编码", "状态"]);data.dataContent.push(content);var loading = ysp.customHelper.tipMsg.getLoading();data.dataLoading.push(loading);return data;
    },
    doAction_uiControl203_6evPik: function (data, elem) {
      if (data.eventType === 'click') {
        var operation = data.dataCustom;var aEls = elem.querySelectorAll('table tr td a');[].forEach.call(aEls, function (item, index) {
          var value = ysp.customHelper.trim(item.textContent);if (value == operation) {
            item.click();
          }
        });
      }
    },
    getTemplate_uiControl203_6evPik: function () {
      var selfTemplate = "import {Component} from 'react'; \nimport {CustomHeader} from 'ysp-custom-components';\nexport default class extends Component{\n   \n   render = () => {\n     var content = (this.props.data.customData && this.props.data.customData.dataContent && this.props.data.customData.dataContent[0].content) || [];\n     var titles = (this.props.data.customData && this.props.data.customData.dataContent && this.props.data.customData.dataContent[0].titles) || [];\n     var dataLoading = (this.props.data.customData && this.props.data.customData.dataLoading[0]);\n     if(content.length == 0 && dataLoading == null){\n       return (<div className=\"ysp-no-datas\">\n        \t\t\t\t<div></div>\n                <div>\u6682\u65F6\u6CA1\u6709\u6570\u636E~</div>  \n        \t\t\t</div>);\n     }\n       return (\n         <section className='ysp-client-list-wrapper-container'>\n             { content.map((item,index)=>{\n                 return (\n                  <section className=\"ysp-client-list-wrapper\" onClick={()=>{\n                          var handler = this.props.customHandler;\n                          if (handler) {\n                            handler({\n                              eventType: 'click',\n                              data:item[0]\n                            });\n                          }\n                       }}>\n                    <article>\n                       <header className=\"ysp-client-list-header\">\n                         <span classNam='ysp-normal-large-font'>{item[0]}</span>\n                       </header>\n                       <div className=\"ysp-client-list-container\">\n                         <span>\n                           <span className=\"ysp-forbidden-state ysp-normal-font\">{titles[1]} :  </span>\n                           <span className={item[1]== \"ysp-success-state ysp-normal-font\"}>{item[1]}</span>\n                         </span>\n                         <span>\n                         \t <span className=\"ysp-forbidden-state ysp-normal-font\">{titles[2]} :  </span>\n                           <span className={item[2]== \"\u901A\u8FC7\" ? \"ysp-forbidden-state ysp-normal-font\":\"ysp-success-state ysp-normal-font\"}>{item[2]}</span>\n                         </span>\n                       </div>\n                    </article>\n                    <aside>\n                       <span className=\"ysp-entry-icon\"></span>\n                    </aside>\n                 </section>\n                 );\n               }) \n             }\n         </section>  \n       );\n   }\n}\n\n";
      return "'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = require('react');\n\nvar _yspCustomComponents = require('ysp-custom-components');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class() {\n    var _ref;\n\n    var _temp, _this, _ret;\n\n    _classCallCheck(this, _class);\n\n    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = _class.__proto__ || Object.getPrototypeOf(_class)).call.apply(_ref, [this].concat(args))), _this), _this.render = function () {\n      var content = _this.props.data.customData && _this.props.data.customData.dataContent && _this.props.data.customData.dataContent[0].content || [];\n      var titles = _this.props.data.customData && _this.props.data.customData.dataContent && _this.props.data.customData.dataContent[0].titles || [];\n      var dataLoading = _this.props.data.customData && _this.props.data.customData.dataLoading[0];\n      if (content.length == 0 && dataLoading == null) {\n        return React.createElement(\n          'div',\n          { className: 'ysp-no-datas' },\n          React.createElement('div', null),\n          React.createElement(\n            'div',\n            null,\n            '\\u6682\\u65F6\\u6CA1\\u6709\\u6570\\u636E~'\n          )\n        );\n      }\n      return React.createElement(\n        'section',\n        { className: 'ysp-client-list-wrapper-container' },\n        content.map(function (item, index) {\n          return React.createElement(\n            'section',\n            { className: 'ysp-client-list-wrapper', onClick: function onClick() {\n                var handler = _this.props.customHandler;\n                if (handler) {\n                  handler({\n                    eventType: 'click',\n                    data: item[0]\n                  });\n                }\n              } },\n            React.createElement(\n              'article',\n              null,\n              React.createElement(\n                'header',\n                { className: 'ysp-client-list-header' },\n                React.createElement(\n                  'span',\n                  { classNam: 'ysp-normal-large-font' },\n                  item[0]\n                )\n              ),\n              React.createElement(\n                'div',\n                { className: 'ysp-client-list-container' },\n                React.createElement(\n                  'span',\n                  null,\n                  React.createElement(\n                    'span',\n                    { className: 'ysp-forbidden-state ysp-normal-font' },\n                    titles[1],\n                    ' :  '\n                  ),\n                  React.createElement(\n                    'span',\n                    { className: item[1] == \"ysp-success-state ysp-normal-font\" },\n                    item[1]\n                  )\n                ),\n                React.createElement(\n                  'span',\n                  null,\n                  React.createElement(\n                    'span',\n                    { className: 'ysp-forbidden-state ysp-normal-font' },\n                    titles[2],\n                    ' :  '\n                  ),\n                  React.createElement(\n                    'span',\n                    { className: item[2] == \"\u901A\u8FC7\" ? \"ysp-forbidden-state ysp-normal-font\" : \"ysp-success-state ysp-normal-font\" },\n                    item[2]\n                  )\n                )\n              )\n            ),\n            React.createElement(\n              'aside',\n              null,\n              React.createElement('span', { className: 'ysp-entry-icon' })\n            )\n          );\n        })\n      );\n    }, _temp), _possibleConstructorReturn(_this, _ret);\n  }\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;";
    },
    getData_control218_NJJQ1X: function (elem) {},
    doAction_uiControl212_D3ZC1o: function (data, elem) {
      if (data.eventType == 'click') {
        elem.querySelector('#storeList_name').value = data.dataCustom;elem.querySelector('#storeList_search').click();
      }
    },
    getTemplate_uiControl212_D3ZC1o: function () {
      var selfTemplate = "import {Component} from 'react';\nimport {CustomerSerch} from 'ysp-custom-components';\nexport default class extends Component{\n  constructor(){\n    super();\n    this.state={\n      buttonState : false,\n      commitState : false,\n      commitStateBtn : false,\n      width:false,\n      flag:true\n    }\n  }\n  click(e){\n    var _this = this;\n    var handler = this.props.customHandler;\n      if(handler){\n        handler({\n          data:e.target.previousSibling.value,\n          eventType:'click'\n        })\n      }\n      _this.setState({\n        buttonState : false,\n        commitState : false,\n        commitStateBtn : false,\n        width:false,\n        flag:true\n      })\n    e.target.previousSibling.value = '';\n  \t}\n  render(){\n    var _this = this;\n    return(\n    \t<CustomerSerch \n        placeholder='\u641C\u7D22'\n        commitStateBtn ={this.state.commitStateBtn}\n\t\t\t\tclick={_this.click.bind(_this)}\n        buttonState = {this.state.buttonState}\n        commitState = {this.state.commitState}\n        width = {this.state.width}\n        flag = {this.state.flag}\n        />\n    )\n  }\n}";
      return "'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require('react');\n\nvar _yspCustomComponents = require('ysp-custom-components');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    var _this2 = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this));\n\n    _this2.state = {\n      buttonState: false,\n      commitState: false,\n      commitStateBtn: false,\n      width: false,\n      flag: true\n    };\n    return _this2;\n  }\n\n  _createClass(_class, [{\n    key: 'click',\n    value: function click(e) {\n      var _this = this;\n      var handler = this.props.customHandler;\n      if (handler) {\n        handler({\n          data: e.target.previousSibling.value,\n          eventType: 'click'\n        });\n      }\n      _this.setState({\n        buttonState: false,\n        commitState: false,\n        commitStateBtn: false,\n        width: false,\n        flag: true\n      });\n      e.target.previousSibling.value = '';\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var _this = this;\n      return React.createElement(_yspCustomComponents.CustomerSerch, {\n        placeholder: '\\u641C\\u7D22',\n        commitStateBtn: this.state.commitStateBtn,\n        click: _this.click.bind(_this),\n        buttonState: this.state.buttonState,\n        commitState: this.state.commitState,\n        width: this.state.width,\n        flag: this.state.flag\n      });\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;";
    },
    getData_control219_0wZxTv: function (elem) {
      if (!elem) {
        return;
      }if (ysp.customHelper.getClientEntry()) {
        return ysp.customHelper.getClientEntry() != "clientList" ? true : false;
      }
    },
    doAction_uiControl213_CltRKD: function (data, elem) {
      if (data.eventType == 'AndroidBack') {
        ysp.customHelper.AndroidBackFlag = 'default';
      }if (data.eventType == 'back') {
        if (!top.EAPI.isAndroid()) {
          ysp.appMain.back();
        } else {
          ysp.customHelper.AndroidBackFn();
        }
      }
    },
    getTemplate_uiControl213_CltRKD: function () {
      var selfTemplate = "import {Component} from 'react'; \nimport {CustomHeader} from 'ysp-custom-components';\nexport default class extends Component{\n   componentDidMount(){\n    var _this = this;\n    ysp.customHelper.AndroidBackFlag = 'default';\n    var handler = _this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'AndroidBack'\n      })\n    }\n \xA0 \xA0// const {customHandler} = _this.props;\n \xA0 \xA0// customHandler({\n \xA0 \xA0// eventType:'AndroidBack'\n \xA0 \xA0// })\n  }\n   render = () => {\n       var _this = this;\n       var flag = this.props.customData;\n       return (\n         <CustomHeader \n           data={{centerText:\"\u95E8\u5E97\u4FE1\u606F\",rightText:\"\u7B5B\u9009\"}} \n           backIsShow={true} \n           back={()=>{ \n              var handler = _this.props.customHandler;\n              if (handler) {\n                handler({\n                  eventType: 'back'\n                });\n              }\n           }} \n           filterIsShow={false} \n           filter={()=>{console.info(\"header filter ...\")}}/>\n       );\n   }\n}";
      return "'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require('react');\n\nvar _yspCustomComponents = require('ysp-custom-components');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class() {\n    var _ref;\n\n    var _temp, _this2, _ret;\n\n    _classCallCheck(this, _class);\n\n    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    return _ret = (_temp = (_this2 = _possibleConstructorReturn(this, (_ref = _class.__proto__ || Object.getPrototypeOf(_class)).call.apply(_ref, [this].concat(args))), _this2), _this2.render = function () {\n      var _this = _this2;\n      var flag = _this2.props.customData;\n      return React.createElement(_yspCustomComponents.CustomHeader, {\n        data: { centerText: \"\u95E8\u5E97\u4FE1\u606F\", rightText: \"\u7B5B\u9009\" },\n        backIsShow: true,\n        back: function back() {\n          var handler = _this.props.customHandler;\n          if (handler) {\n            handler({\n              eventType: 'back'\n            });\n          }\n        },\n        filterIsShow: false,\n        filter: function filter() {\n          console.info(\"header filter ...\");\n        } });\n    }, _temp), _possibleConstructorReturn(_this2, _ret);\n  }\n\n  _createClass(_class, [{\n    key: 'componentDidMount',\n    value: function componentDidMount() {\n      var _this = this;\n      ysp.customHelper.AndroidBackFlag = 'default';\n      var handler = _this.props.customHandler;\n      if (handler) {\n        handler({\n          eventType: 'AndroidBack'\n        });\n      }\n      // const {customHandler} = _this.props;\n      // customHandler({\n      // eventType:'AndroidBack'\n      // })\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;";
    },
    getData_control220_tTLeEO: function (elem) {
      if (!elem) return;var data = {};var item = [];data.prev = false;data.next = false;if (elem.querySelector('.skip')) {
        data.numberTaotal = (elem.querySelector('.skip').querySelectorAll('span')[0] && elem.querySelector('.skip').querySelectorAll('span')[0].textContent).replace(/[^0-9]/g, '');
      }var lis = elem.querySelectorAll('li');for (var i = 0; i < lis.length; i++) {
        var as = lis[i].querySelectorAll('a');for (var j = 0; j < as.length; j++) {
          switch (as[j].getAttribute('title')) {case 'Go to previous page':
              data.prev = true;break;case 'Go to next page':
              data.next = true;;break;}
        }
      }var liss = elem.querySelectorAll('li');for (var k = 0; k < liss.length; k++) {
        var active = liss[k].className;if (active == 'active') {
          data.currentPage = liss[k].querySelector('a').textContent;
        }
      }data.page = elem.ownerDocument.querySelector('.content-bodytable').querySelectorAll('tr').length != 0 ? true : false;return data;
    },
    doAction_uiControl214_Mm4gCP: function (data, elem) {
      switch (data.eventType) {case 'prev':
          prevtitle(data.dataCustom);break;case 'next':
          prevtitle(data.dataCustom);break;case 'click':
          click(data.dataCustom);break;}function click(data) {
        var input = elem.ownerDocument.querySelector('.skip-num');input.value = data;input.blur();elem.ownerDocument.querySelector('#Page').querySelector('.skip_right_goto').querySelector('.skip-right-icon').click();
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
    getTemplate_uiControl214_Mm4gCP: function () {
      var selfTemplate = "import {\n  Component\n} from 'react';\nimport {\n  Page\n} from 'ysp-custom-components';\nexport default class extends Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      prevState:props.customData && props.customData.prev,\n      pageState:props.customData && props.customData.page,\n      nextState:props.customData && props.customData.next\n    }\n  }\n  componentWillReceiveProps(nextProps){\n    this.setState({\n      prevState: nextProps.customData && nextProps.customData.prev,\n      pageState: nextProps.customData && nextProps.customData.page,\n      nextState: nextProps.customData && nextProps.customData.next\n    })\n  }\n  render() {\n    var _this = this;\n    return (\n      <div>\n      \t<Page \n          pageState = {this.state.pageState}\n      \t  prevState = {this.state.prevState}\n          nextState = {this.state.nextState}\n        \tprev={(e)=>{\n          var handler = _this.props.customHandler;\n          if(handler){\n            handler({\n              data:\"prev\",\n              eventType:'prev'\n            })\n          }\n            e.target.parentElement.querySelector('.input-serch').querySelector('input').value = '';\n        }}\n          currentPage = {this.props.customData && this.props.customData.currentPage}\n        \tpageNumber={this.props.customData && this.props.customData.numberTaotal}\n        \tnext={(e)=>{\n          var handler = _this.props.customHandler;\n          if(handler){\n            handler({\n              data:\"next\",\n              eventType:\"next\"\n            })\n          }\n            e.target.previousSibling.querySelector('input').value = '';\n        }}\n          Click={(e)=>{\n            var handler = this.props.customHandler;\n            var target = e.target;\n            // target.value = target.value.replace(/[^0-9]/g,'')\n            var value = target.parentElement.querySelector('input').value;\n            value = value.replace(/[^0-9]/g,'');\n            if(handler){\n              handler({\n                data:value,\n                eventType:'click'\n              })\n            }\n          }}\n          Change={(e)=>{\n            var target = e.target;\n            target.value = target.value.replace(/[^0-9]/g,'');\n          }}\n      />\n    </div>\n    )\n  }\n}\n\n\n\n";
      return "'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require('react');\n\nvar _yspCustomComponents = require('ysp-custom-components');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class(props) {\n    _classCallCheck(this, _class);\n\n    var _this2 = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));\n\n    _this2.state = {\n      prevState: props.customData && props.customData.prev,\n      pageState: props.customData && props.customData.page,\n      nextState: props.customData && props.customData.next\n    };\n    return _this2;\n  }\n\n  _createClass(_class, [{\n    key: 'componentWillReceiveProps',\n    value: function componentWillReceiveProps(nextProps) {\n      this.setState({\n        prevState: nextProps.customData && nextProps.customData.prev,\n        pageState: nextProps.customData && nextProps.customData.page,\n        nextState: nextProps.customData && nextProps.customData.next\n      });\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var _this3 = this;\n\n      var _this = this;\n      return React.createElement(\n        'div',\n        null,\n        React.createElement(_yspCustomComponents.Page, {\n          pageState: this.state.pageState,\n          prevState: this.state.prevState,\n          nextState: this.state.nextState,\n          prev: function prev(e) {\n            var handler = _this.props.customHandler;\n            if (handler) {\n              handler({\n                data: \"prev\",\n                eventType: 'prev'\n              });\n            }\n            e.target.parentElement.querySelector('.input-serch').querySelector('input').value = '';\n          },\n          currentPage: this.props.customData && this.props.customData.currentPage,\n          pageNumber: this.props.customData && this.props.customData.numberTaotal,\n          next: function next(e) {\n            var handler = _this.props.customHandler;\n            if (handler) {\n              handler({\n                data: \"next\",\n                eventType: \"next\"\n              });\n            }\n            e.target.previousSibling.querySelector('input').value = '';\n          },\n          Click: function Click(e) {\n            var handler = _this3.props.customHandler;\n            var target = e.target;\n            // target.value = target.value.replace(/[^0-9]/g,'')\n            var value = target.parentElement.querySelector('input').value;\n            value = value.replace(/[^0-9]/g, '');\n            if (handler) {\n              handler({\n                data: value,\n                eventType: 'click'\n              });\n            }\n          },\n          Change: function Change(e) {\n            var target = e.target;\n            target.value = target.value.replace(/[^0-9]/g, '');\n          }\n        })\n      );\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;";
    }
  }, "storeList");
})(window, ysp);