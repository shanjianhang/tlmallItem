(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control5_5GxFa5: function (elem) {
      if (!elem && ysp.customHelper.getTargetMenus) {
        return;
      }var WorkSpace = ysp.customHelper.getTargetMenus(["工作台", "拜访总览"], ['门店信息录入']);var Achievement = ysp.customHelper.getTargetMenus(["销售业绩总览", "事业部达成", "项目达成", "产品达成", "分公司达成", "办事处达成", "销售人员达成", "客户门店达成", "年度销售达成(新)"]);var InFormation = ysp.customHelper.getTargetMenus([]);var ClientOrStore = ysp.customHelper.getTargetMenus([]);var atMe = ysp.customHelper.IconNum.atMe || 0;var summary = ysp.customHelper.IconNum.summary || 0;if (!atMe || !summary) {
        atMe = localStorage.getItem('atMe');summary = localStorage.getItem('summary');if (summary == null) {
          summary = 0;
        }if (atMe == null) {
          atMe = 0;
        }
      }return { WorkSpace: WorkSpace, Achievement: Achievement, InFormation: InFormation, ClientOrStore: ClientOrStore, IconNum: { atMe: atMe, summary: summary } };
    }, doAction_uiControl5_Arkp0J: function (data, elem) {
      if (data.eventType == 'testClick') {
        elem.ownerDocument.defaultView.open(data.dataCustom);
      } //下拉刷新 , 因模版原因,现刷新原网页实现
      if (data.eventType == 'getIconNum') {
        if (ysp.appMain.isIOS()) {
          top.EAPI.postMessageToNative('GetIconNum', '');
        } else {
          ysp.customHelper.AndroidGetIconNum();
        }
      }if (data.eventType == 'reload') {
        elem.ownerDocument.defaultView.location.reload();if (ysp.appMain.isIOS()) {
          top.EAPI.postMessageToNative('GetIconNum', '');
        } else {
          ysp.customHelper.AndroidGetIconNum();
        }
      }if (data.eventType == 'click') {
        //IOS端获取当前网速方法
        //top.EAPI.postMessageToNative('IOSLine', '');
        var src = data.dataCustom.url;var title = data.dataCustom.title;if (title == '拜访总览') {
          openUrl(src, title);
        } else {
          elem.ownerDocument.defaultView.open(src);
        }
      } //图标尺寸  48 * 48   文字大小 17px
      if (data.eventType == 'click_infomation') {
        var src = data.dataCustom.url;var title = data.dataCustom.title;openUrl(src, title);
      } //请求大数据参数接口 . 拼接地址进行跳转
      function openUrl(src, title) {
        ysp.appMain.showLoading();var xhr = new XMLHttpRequest();xhr.onreadystatechange = function () {
          if (xhr.readyState == 4) {
            var obj = JSON.parse(xhr.response);var branch = obj.branch.match(/\d+/) ? obj.branch.match(/\d+/)[0] : obj.branch;if (obj.position == '总部领导' || obj.position == '事业部总经理' || obj.position == '产品经理' || obj.position == '大客户业务部总经理' || obj.position == '总部客户经理' || obj.position == '电商平台运营中心客户管理部' || obj.position == '电商平台运营中心产品运营部' || obj.position == '电商平台运营中心商务管理部' || obj.position == '事业部商务人员' || obj.position == '智能生活馆') {
              src = title == '产品上下架' && src.indexOf('?') == -1 && src.indexOf('&') == -1 ? src + '/querySku4Manager?a=1&filter_userId=' + obj.userId + '&encoder=' + obj.encoder + '&username=' + obj.userId : src.indexOf('?') != -1 && src.indexOf('&') != -1 ? src + '&filter_userId=' + obj.userId + '&encoder=' + obj.encoder + '&username=' + obj.userId + '&a=1' : src.indexOf('?') == -1 && src.indexOf('&') == -1 ? src + '?filter_userId=' + obj.userId + '&encoder=' + obj.encoder + '&username=' + obj.userId + '&a=1' : src.indexOf('?') != -1 && src.indexOf('&') == -1 && src.split('?')[1].length > 0 ? src + '&filter_userId=' + obj.userId + '&encoder=' + obj.encoder + '&username=' + obj.userId + '&a=1' : src + 'filter_userId=' + obj.userId + '&encoder=' + obj.encoder + '&username=' + obj.userId + '&a=1';
            } else if (obj.position == '分公司分总' || obj.position == '品牌经理' || obj.position == '分公司电商中心经理') {
              src = title == '产品上下架' && src.indexOf('?') == -1 && src.indexOf('&') == -1 ? src + '/querySku4Manager?a=1&filter_userId=' + obj.userId + '&encoder=' + obj.encoder + '&username=' + obj.userId + '&branch=' + branch + '&a=1' : src.indexOf('?') != -1 && src.indexOf('&') != -1 ? src + '&filter_userId=' + obj.userId + '&encoder=' + obj.encoder + '&username=' + obj.userId + '&branch=' + branch + '&a=1' : src.indexOf('?') == -1 && src.indexOf('&') == -1 ? src + '?filter_userId=' + obj.userId + '&encoder=' + obj.encoder + '&username=' + obj.userId + '&branch=' + branch + '&firstFlag' : src.indexOf('?') != -1 && src.indexOf('&') == -1 && src.split('?')[1].length > 0 ? src + '&filter_userId=' + obj.userId + '&encoder=' + obj.encoder + '&username=' + obj.userId + '&branch=' + branch + '&a=1' : src + 'filter_userId=' + obj.userId + '&encoder=' + obj.encoder + '&username=' + obj.userId + '&branch=' + branch + '&a=1';
            } else if (obj.position == '办事处主任' || obj.position == '销售代表') {
              src = title == '产品上下架' && src.indexOf('?') == -1 && src.indexOf('&') == -1 ? src + '/querySku?a=1&filter_userId=' + obj.userId + '&encoder=' + obj.encoder + '&username=' + obj.userId + '&a=1' + '&branch=' + branch : src.indexOf('?') != -1 && src.indexOf('&') != -1 ? src + '&filter_userId=' + obj.userId + '&encoder=' + obj.encoder + '&username=' + obj.userId + '&a=1' + '&branch=' + branch : src.indexOf('?') == -1 && src.indexOf('&') == -1 ? src + '?filter_userId=' + obj.userId + '&encoder=' + obj.encoder + '&username=' + obj.userId + '&firstFlag' : src.indexOf('?') != -1 && src.indexOf('&') == -1 && src.split('?')[1].length > 0 ? src + '&filter_userId=' + obj.userId + '&encoder=' + obj.encoder + '&username=' + obj.userId + '&a=1' : src + 'filter_userId=' + obj.userId + '&encoder=' + obj.encoder + '&username=' + obj.userId + '&a=1' + '&branch=' + branch;
            }ysp.appMain.showLoading();elem.ownerDocument.defaultView.open(src);
          }
        };xhr.open('POST', 'http://pttlcrm.com/pttlCrm/homepage/getUserIdAndEncoder', false);xhr.send();
      } // if (data.eventType == 'isNeedLoad') {
      //   if (top.EAPI.isAndroid()) {
      //     top.yspCheckIn.isRefresh(false);
      //   }
      // }
    },
    getTemplate_uiControl5_Arkp0J: function () {
      var selfTemplate = "import {Component} from 'react';\nexport default class extends Component{\n  constructor(){\n  super();\n \xA0 var _this = this; window.addEventListener('touchstart',_this.TouchStart.bind(_this),false);\n    window.addEventListener('touchmove',_this.TouchMove.bind(_this),false);\n    window.addEventListener('touchend',_this.TouchEnd.bind(_this),false);\n    _this.canefresh = false;\n    _this.startY = 0;\n    _this.endY = 0;\n    _this.padding=0;\n  }\n  componentDidMount(){\n    var _this = this ;\n    var handler = _this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'getIconNum'\n      })\n      // handler({\n      //   eventType:'isNeedLoad'\n      // })\n    }\n  }\n \xA0TouchStart(e){\n    var _this = this;\n    _this.startY = e.touches[0].pageY;\n if(e.target.ownerDocument.defaultView.document.querySelector('.view-wrapper') && e.target.ownerDocument.defaultView.document.querySelector('.view-wrapper').scrollTop <=0 && _this.startY < 150){\n      _this.canefresh = true;\n    }\n    \n  }\n  TouchMove(e){\n    var _this = this;\n    if(!_this.canefresh){\n      return ;\n    }\n    _this.endY = e.touches[0].pageY;\n    if(_this.endY - _this.startY > 60 && _this.refs.Menus && _this.endY < 400){\n      _this.padding = (_this.endY - _this.startY)/2;\n      _this.refs.Menus.style.paddingTop = _this.padding+'px';\n    }\n    var height = e.target.ownerDocument.defaultView.document.body.clientHeight;\n    var width = e.target.ownerDocument.defaultView.document.body.clientWidth;\n    if(_this.endY > 480 || (width-e.touches[0].pageX < 10) || (_this.endY - _this.startY > 260  && _this.padding > 150)){\n      _this.TouchEnd()\n    }\n  }\n  TouchEnd(e){\n    var _this = this;\n    if(!_this.canefresh){\n      return ;\n    }\n    if(((_this.endY - _this.startY) > 260) && _this.canefresh && _this.endY > 10 && _this.padding > 150){\n \xA0 \xA0 \xA0var handler = _this.props.customHandler;\n      if(handler){\n        handler({\n          eventType:'reload'\n        })\n      }\n    }else if(_this.endY > 480){\n      _this.endY = 0;\n      _this.startY = 0;\n      _this.canefresh = false;\n      _this.padding = 0;\n      if(_this.refs.Menus){\n        var paddingNum = parseInt(_this.refs.Menus.style.paddingTop.split('p')[0]);\n      var timer = setInterval(function(){\n        if( paddingNum > 0){\n          paddingNum -= 5;\n          _this.refs.Menus.style.paddingTop = paddingNum+'px';\n        }else{\n          _this.refs.Menus.style.paddingTop = '0px';\n          clearInterval(timer);\n        }\n      },10)\n      }\n    }\n    _this.endY = 0;\n    _this.startY = 0;\n    _this.canefresh = false;\n    _this.padding = 0;\n \xA0 \xA0if(_this.refs.Menus){\n      //_this.refs.Menus.style.paddingTop = '0px';\n      var paddingNum = parseInt(_this.refs.Menus.style.paddingTop.split('p')[0]);\n      var timer = setInterval(function(){\n        if( paddingNum > 0){\n          paddingNum -= 5;\n          _this.refs.Menus.style.paddingTop = paddingNum+'px';\n        }else{\n          _this.refs.Menus.style.paddingTop = '0px';\n          clearInterval(timer);\n        }\n      },10)\n    }\n       \n  }\n  onClick(e){\n    var _this = this;\n    if(e.target.nodeName != \"LI\"){\n      if(e.target.nodeName == 'SPAN'){\n        e.target = e.target.parentNode\n      }else if(e.target.nodeName == 'UL'){\n        e.target = e.target.querySelectorAll('li');\n      }\n    }\n    var handler = _this.props.customHandler;\n    if(handler){\n      handler({\n        data:{url:e.target.dataset.url,title:e.target.querySelector('.Menus-content').textContent},\n        eventType:'click'\n      })\n    }\n  }\n  onClick_infomation(e){\n    var _this = this;\n    if(e.target.nodeName != \"LI\"){\n      if(e.target.nodeName == 'SPAN'){\n        e.target = e.target.parentNode\n      }else if(e.target.nodeName == 'UL'){\n        e.target = e.target.children\n      }\n    }\n    var handler = _this.props.customHandler;\n    if(handler){\n      handler({\n        data:{url:e.target.dataset.url,title:e.target.querySelector('.Menus-content').textContent},\n \xA0 \xA0 \xA0 \xA0eventType:'click_infomation'\n      })\n    }\n  }\n  render(){\n \xA0 \xA0var _this = this;\n    var WorkSpace = this.props.customData.WorkSpace;\n    var Achievement = this.props.customData.Achievement;\n    var InFormation = this.props.customData.InFormation;\n \xA0 \xA0var ClientOrStore = this.props.customData.ClientOrStore\n    var atMe = this.props.customData.IconNum.atMe;\n    var summary = this.props.customData.IconNum.summary;\n \xA0 \xA0return(\n \xA0  \t<div className='ysp-Menus-All' ref='Menus'>\n        {WorkSpace.length ==0 ? '' :<ul onClick={_this.onClick.bind(_this)} className='ysp-Menus-all-WorkSpace'>\n          <div className='ysp-Menus-title'>\n          <span className='Menus-head'>\u6211\u7684\u5DE5\u4F5C</span>\n          </div>\n          {WorkSpace && WorkSpace.map((item,index)=>{\n            return(\n \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0<li data-url={item.url} className='Menus-list'>\n                <span className={item.code}>{(item.name.indexOf('@')!==-1)||(item.name.indexOf('\u62DC\u8BBF\u67E5\u770B')!=-1)?item.name.substr(1,1):item.name.substr(0,1)}\n                  <span></span>\n                </span>\n                {(item.name == '@\u6211\u7684\u62A5\u544A' && atMe != '0' ) && <i className='atMe'>{atMe}</i> }\n                {(item.name == '\u6C47\u62A5\u603B\u7ED3' && summary != '0' ) && <i className='summary'>{summary}</i>}\n                <span className='Menus-content'>{item.name}</span>\n              </li>\n            )\n          })}\n        </ul>}\n        {Achievement.length == 0 ? '' : <ul onClick={_this.onClick_infomation.bind(_this)} className='ysp-Menus-all-Achievement'>\n          <div className='ysp-Menus-title'><span className='Menus-head'>\u4E1A\u7EE9\u8FBE\u6210</span>\n          </div>\n          {Achievement && Achievement.map((item,index)=>{\n            return(\n \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0<li data-url={item.url} className='Menus-list'>\n                <span className={item.code}>{item.name.substr(0,1)}\n                  <span></span>\n                </span>\n                <span className='Menus-content'>{item.name}</span>\n              </li>\n            )\n          })}\n        </ul>}\n        {InFormation.length == 0 ? '' : <ul onClick={_this.onClick_infomation.bind(_this)} className='ysp-Menus-all-InFormation'>\n          <div className='ysp-Menus-title'><span className='Menus-head'>\u6570\u636E\u770B\u677F</span>\n          </div>\n          {InFormation && InFormation.map((item,index)=>{\n            return(\n \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0<li data-url={item.url} className='Menus-list'>\n                <span className={item.code}>\n                  {item.name == '\u5206\u8D27\u5BA2\u6237\u67E5\u8BE2' ? \"\u5BA2\" : item.name.substr(0,1)}\n                  <span></span>\n                </span>\n                <span className='Menus-content'>{item.name}\n                </span>\n              </li>\n            )\n          })}\n        </ul>}\n        {ClientOrStore.length == 0 ? '' : <ul onClick={_this.onClick.bind(_this)} className='ysp-Menus-all-ClientOrStore'>\n \xA0 \xA0 \xA0 \xA0 \xA0<div className='ysp-Menus-title'>\n            <span className='Menus-head'>\u5BA2\u6237&\u95E8\u5E97</span>\n          </div>\n          {ClientOrStore && ClientOrStore.map((item,index)=>{\n            return(\n \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0<li data-url={item.url} className='Menus-list'>\n                <span className={item.code}>{item.name.substr(0,1)}\n                  <span></span>\n                </span>\n                <span className='Menus-content'>{item.name}\n                </span>\n              </li>\n            )\n          })}\n        </ul>}\n      </div>\n    )\n  }\n}";
      return "'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require('react');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    var _this2 = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this));\n\n    var _this = _this2;window.addEventListener('touchstart', _this.TouchStart.bind(_this), false);\n    window.addEventListener('touchmove', _this.TouchMove.bind(_this), false);\n    window.addEventListener('touchend', _this.TouchEnd.bind(_this), false);\n    _this.canefresh = false;\n    _this.startY = 0;\n    _this.endY = 0;\n    _this.padding = 0;\n    return _this2;\n  }\n\n  _createClass(_class, [{\n    key: 'componentDidMount',\n    value: function componentDidMount() {\n      var _this = this;\n      var handler = _this.props.customHandler;\n      if (handler) {\n        handler({\n          eventType: 'getIconNum'\n        });\n        // handler({\n        //   eventType:'isNeedLoad'\n        // })\n      }\n    }\n  }, {\n    key: 'TouchStart',\n    value: function TouchStart(e) {\n      var _this = this;\n      _this.startY = e.touches[0].pageY;\n      if (e.target.ownerDocument.defaultView.document.querySelector('.view-wrapper') && e.target.ownerDocument.defaultView.document.querySelector('.view-wrapper').scrollTop <= 0 && _this.startY < 150) {\n        _this.canefresh = true;\n      }\n    }\n  }, {\n    key: 'TouchMove',\n    value: function TouchMove(e) {\n      var _this = this;\n      if (!_this.canefresh) {\n        return;\n      }\n      _this.endY = e.touches[0].pageY;\n      if (_this.endY - _this.startY > 60 && _this.refs.Menus && _this.endY < 400) {\n        _this.padding = (_this.endY - _this.startY) / 2;\n        _this.refs.Menus.style.paddingTop = _this.padding + 'px';\n      }\n      var height = e.target.ownerDocument.defaultView.document.body.clientHeight;\n      var width = e.target.ownerDocument.defaultView.document.body.clientWidth;\n      if (_this.endY > 480 || width - e.touches[0].pageX < 10 || _this.endY - _this.startY > 260 && _this.padding > 150) {\n        _this.TouchEnd();\n      }\n    }\n  }, {\n    key: 'TouchEnd',\n    value: function TouchEnd(e) {\n      var _this = this;\n      if (!_this.canefresh) {\n        return;\n      }\n      if (_this.endY - _this.startY > 260 && _this.canefresh && _this.endY > 10 && _this.padding > 150) {\n        var handler = _this.props.customHandler;\n        if (handler) {\n          handler({\n            eventType: 'reload'\n          });\n        }\n      } else if (_this.endY > 480) {\n        _this.endY = 0;\n        _this.startY = 0;\n        _this.canefresh = false;\n        _this.padding = 0;\n        if (_this.refs.Menus) {\n          var paddingNum = parseInt(_this.refs.Menus.style.paddingTop.split('p')[0]);\n          var timer = setInterval(function () {\n            if (paddingNum > 0) {\n              paddingNum -= 5;\n              _this.refs.Menus.style.paddingTop = paddingNum + 'px';\n            } else {\n              _this.refs.Menus.style.paddingTop = '0px';\n              clearInterval(timer);\n            }\n          }, 10);\n        }\n      }\n      _this.endY = 0;\n      _this.startY = 0;\n      _this.canefresh = false;\n      _this.padding = 0;\n      if (_this.refs.Menus) {\n        //_this.refs.Menus.style.paddingTop = '0px';\n        var paddingNum = parseInt(_this.refs.Menus.style.paddingTop.split('p')[0]);\n        var timer = setInterval(function () {\n          if (paddingNum > 0) {\n            paddingNum -= 5;\n            _this.refs.Menus.style.paddingTop = paddingNum + 'px';\n          } else {\n            _this.refs.Menus.style.paddingTop = '0px';\n            clearInterval(timer);\n          }\n        }, 10);\n      }\n    }\n  }, {\n    key: 'onClick',\n    value: function onClick(e) {\n      var _this = this;\n      if (e.target.nodeName != \"LI\") {\n        if (e.target.nodeName == 'SPAN') {\n          e.target = e.target.parentNode;\n        } else if (e.target.nodeName == 'UL') {\n          e.target = e.target.querySelectorAll('li');\n        }\n      }\n      var handler = _this.props.customHandler;\n      if (handler) {\n        handler({\n          data: { url: e.target.dataset.url, title: e.target.querySelector('.Menus-content').textContent },\n          eventType: 'click'\n        });\n      }\n    }\n  }, {\n    key: 'onClick_infomation',\n    value: function onClick_infomation(e) {\n      var _this = this;\n      if (e.target.nodeName != \"LI\") {\n        if (e.target.nodeName == 'SPAN') {\n          e.target = e.target.parentNode;\n        } else if (e.target.nodeName == 'UL') {\n          e.target = e.target.children;\n        }\n      }\n      var handler = _this.props.customHandler;\n      if (handler) {\n        handler({\n          data: { url: e.target.dataset.url, title: e.target.querySelector('.Menus-content').textContent },\n          eventType: 'click_infomation'\n        });\n      }\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var _this = this;\n      var WorkSpace = this.props.customData.WorkSpace;\n      var Achievement = this.props.customData.Achievement;\n      var InFormation = this.props.customData.InFormation;\n      var ClientOrStore = this.props.customData.ClientOrStore;\n      var atMe = this.props.customData.IconNum.atMe;\n      var summary = this.props.customData.IconNum.summary;\n      return React.createElement(\n        'div',\n        { className: 'ysp-Menus-All', ref: 'Menus' },\n        WorkSpace.length == 0 ? '' : React.createElement(\n          'ul',\n          { onClick: _this.onClick.bind(_this), className: 'ysp-Menus-all-WorkSpace' },\n          React.createElement(\n            'div',\n            { className: 'ysp-Menus-title' },\n            React.createElement(\n              'span',\n              { className: 'Menus-head' },\n              '\\u6211\\u7684\\u5DE5\\u4F5C'\n            )\n          ),\n          WorkSpace && WorkSpace.map(function (item, index) {\n            return React.createElement(\n              'li',\n              { 'data-url': item.url, className: 'Menus-list' },\n              React.createElement(\n                'span',\n                { className: item.code },\n                item.name.indexOf('@') !== -1 || item.name.indexOf('\u62DC\u8BBF\u67E5\u770B') != -1 ? item.name.substr(1, 1) : item.name.substr(0, 1),\n                React.createElement('span', null)\n              ),\n              item.name == '@\u6211\u7684\u62A5\u544A' && atMe != '0' && React.createElement(\n                'i',\n                { className: 'atMe' },\n                atMe\n              ),\n              item.name == '\u6C47\u62A5\u603B\u7ED3' && summary != '0' && React.createElement(\n                'i',\n                { className: 'summary' },\n                summary\n              ),\n              React.createElement(\n                'span',\n                { className: 'Menus-content' },\n                item.name\n              )\n            );\n          })\n        ),\n        Achievement.length == 0 ? '' : React.createElement(\n          'ul',\n          { onClick: _this.onClick_infomation.bind(_this), className: 'ysp-Menus-all-Achievement' },\n          React.createElement(\n            'div',\n            { className: 'ysp-Menus-title' },\n            React.createElement(\n              'span',\n              { className: 'Menus-head' },\n              '\\u4E1A\\u7EE9\\u8FBE\\u6210'\n            )\n          ),\n          Achievement && Achievement.map(function (item, index) {\n            return React.createElement(\n              'li',\n              { 'data-url': item.url, className: 'Menus-list' },\n              React.createElement(\n                'span',\n                { className: item.code },\n                item.name.substr(0, 1),\n                React.createElement('span', null)\n              ),\n              React.createElement(\n                'span',\n                { className: 'Menus-content' },\n                item.name\n              )\n            );\n          })\n        ),\n        InFormation.length == 0 ? '' : React.createElement(\n          'ul',\n          { onClick: _this.onClick_infomation.bind(_this), className: 'ysp-Menus-all-InFormation' },\n          React.createElement(\n            'div',\n            { className: 'ysp-Menus-title' },\n            React.createElement(\n              'span',\n              { className: 'Menus-head' },\n              '\\u6570\\u636E\\u770B\\u677F'\n            )\n          ),\n          InFormation && InFormation.map(function (item, index) {\n            return React.createElement(\n              'li',\n              { 'data-url': item.url, className: 'Menus-list' },\n              React.createElement(\n                'span',\n                { className: item.code },\n                item.name == '\u5206\u8D27\u5BA2\u6237\u67E5\u8BE2' ? \"\u5BA2\" : item.name.substr(0, 1),\n                React.createElement('span', null)\n              ),\n              React.createElement(\n                'span',\n                { className: 'Menus-content' },\n                item.name\n              )\n            );\n          })\n        ),\n        ClientOrStore.length == 0 ? '' : React.createElement(\n          'ul',\n          { onClick: _this.onClick.bind(_this), className: 'ysp-Menus-all-ClientOrStore' },\n          '\\xA0 \\xA0 \\xA0 \\xA0 \\xA0',\n          React.createElement(\n            'div',\n            { className: 'ysp-Menus-title' },\n            React.createElement(\n              'span',\n              { className: 'Menus-head' },\n              '\\u5BA2\\u6237&\\u95E8\\u5E97'\n            )\n          ),\n          ClientOrStore && ClientOrStore.map(function (item, index) {\n            return React.createElement(\n              'li',\n              { 'data-url': item.url, className: 'Menus-list' },\n              React.createElement(\n                'span',\n                { className: item.code },\n                item.name.substr(0, 1),\n                React.createElement('span', null)\n              ),\n              React.createElement(\n                'span',\n                { className: 'Menus-content' },\n                item.name\n              )\n            );\n          })\n        )\n      );\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;";
    }
  }, "index");
})(window, ysp);