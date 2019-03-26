(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control34_AGnJ0n: function (elem) {},
    doAction_uiControl34_23A4HP: function (data, elem) {
      // if (data.eventType == 'AndroidBack') {
      //   ysp.customHelper.AndroidBackURL = "http://pttlcrm.com/pttlCrm/res/page/visitManager/customerWorkspace/customerWorkspace.html";
      //   ysp.customHelper.AndroidBackModel = 'customerWorkspace';
      //   ysp.customHelper.AndroidBackFlag = 'destination';
      // }
      if (data.eventType == 'back') {
        if (!top.EAPI.isAndroid()) {
          ysp.appMain.back(); //ysp.customHelper.BackReload();
        } else {
          //ysp.customHelper.AndroidBackFn();
          ysp.appMain.back();
        }
      }if (data.eventType == 'map') {
        top.locationBegin();
      }
    },
    getTemplate_uiControl34_23A4HP: function () {
      var selfTemplate = "import {Component} from 'react'; \nimport {CustomHeader} from 'ysp-custom-components';\nexport default class extends Component{\n   componentDidMount(){\n    var _this = this;\n \xA0 \xA0var {customHandler} = _this.props;\n    customHandler({\n      eventType:'AndroidBack'\n    })\n  } \n   render = () => {\n       var _this = this;\n       return (\n         <CustomHeader \n           data={{centerText:\"\u62DC\u8BBF\u7B7E\u51FA\",rightText:\"\u7B5B\u9009\"}} \n           backIsShow={true} \n           back={()=>{ \n              var handler = _this.props.customHandler;\n              if (handler) {\n                handler({\n                  eventType: 'back'\n                });\n              }\n           }} \n           filterIsShow={false} \n           filter={()=>{console.info(\"header filter ...\")}}\n           mapLoad={true}\n           map={()=>{\n             var handler = _this.props.customHandler;\n             if(handler){\n               handler({\n                 eventType:'map'\n               })\n             }\n             }\n           }/>\n       );\n   }\n}";
      return '\'use strict\';\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require(\'react\');\n\nvar _yspCustomComponents = require(\'ysp-custom-components\');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class() {\n    var _ref;\n\n    var _temp, _this2, _ret;\n\n    _classCallCheck(this, _class);\n\n    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    return _ret = (_temp = (_this2 = _possibleConstructorReturn(this, (_ref = _class.__proto__ || Object.getPrototypeOf(_class)).call.apply(_ref, [this].concat(args))), _this2), _this2.render = function () {\n      var _this = _this2;\n      return React.createElement(_yspCustomComponents.CustomHeader, {\n        data: { centerText: "\u62DC\u8BBF\u7B7E\u51FA", rightText: "\u7B5B\u9009" },\n        backIsShow: true,\n        back: function back() {\n          var handler = _this.props.customHandler;\n          if (handler) {\n            handler({\n              eventType: \'back\'\n            });\n          }\n        },\n        filterIsShow: false,\n        filter: function filter() {\n          console.info("header filter ...");\n        },\n        mapLoad: true,\n        map: function map() {\n          var handler = _this.props.customHandler;\n          if (handler) {\n            handler({\n              eventType: \'map\'\n            });\n          }\n        } });\n    }, _temp), _possibleConstructorReturn(_this2, _ret);\n  }\n\n  _createClass(_class, [{\n    key: \'componentDidMount\',\n    value: function componentDidMount() {\n      var _this = this;\n      var customHandler = _this.props.customHandler;\n\n      customHandler({\n        eventType: \'AndroidBack\'\n      });\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;';
    },
    getData_control35_Pqo7A1: function (elem) {
      if (elem) {
        var data = {};data.Time = elem.querySelector('.customersign-mapcontent-textbottomspan').textContent;data.Textarea = elem.querySelector('#remarktextname').value;data.button = elem.querySelector('.customersigin-mapbutton').querySelectorAll('span').length;data.address = elem.querySelector('#address').textContent;data.state = elem.querySelector('.customersign-active') ? true : false;data.lng = elem.querySelector('#longitude').textContent;data.lat = elem.querySelector('#latitude').textContent;data.customerLng = elem.querySelector('#csLongitude').value;data.customerLat = elem.querySelector('#csLatitude').value;
      }return data;return;
    },
    doAction_uiControl35_7KemyS: function (data, elem) {
      switch (data.eventType) {case 'blur':
          Value(data.customData);break;case 'value':
          jd(data.customData);break;}function Value(data) {
        elem.querySelector('#remarktextname').value = data;
      }function jd(data) {
        var jing = data.jing;var wei = data.wei;var dz = data.dizhi;elem.ownerDocument.querySelector('#longitude').innerHTML = jing;elem.ownerDocument.querySelector('#latitude').innerHTML = wei;elem.ownerDocument.querySelector('#address').innerHTML = dz;
      }
    },
    getTemplate_uiControl35_7KemyS: function () {
      var selfTemplate = 'import {\n  Component\n} from \'react\';\nexport default class extends Component {\xA0\n  constructor(props) {\n    super(props);\n    this.state = {\n      Time: props.customData.Time,\n      Address: props.customData.address,\n      Textarea: props.customData.Textarea,\n      signoutState:props.customData.state,\n      jing : props.customData.lng,\n      wei:props.customData.lat,\n      customnerLng : props.customData.customerLng || false,\n      customnerLat : props.customData.customerLat || false\n    }\n    var _this = this;\n    this.firstUpdate = true;\n    this.confim = false;\n  }\n  componentWillReceiveProps(nextProps){\n\n    this.setState({\n      signoutState:nextProps.customData.state\n    })\n    if(this.state.signoutState == false){\n    this.setState({\n      Address: nextProps.customData.address,\n      jing:nextProps.customData.lng,\n      wei:nextProps.customData.lat\n    })\n    }\n  }\n  componentDidUpdate(){\n  var _this = this;\n  if(this.state.signoutState && this.firstUpdate){\n    setLocation = function(location) {\n      //let address = arg.address;\n      _this.showMap(location)\n    }\n    //locationBegin();\n    }else if (this.state.signoutState == false){\n      _this.oldMap();\n    }\n  }\n  componentDidMount() {\n    window.nullAddRess = function(){\n \xA0 \xA0 \xA0alert(\'\u5B9A\u4F4D\u5931\u8D25 ! \u8BF7\u67E5\u770B\u5B9A\u4F4D\u6743\u9650\u662F\u5426\u5F00\u542F\');\n    }\n    if (this.state.signoutState == false){\n      this.oldMap();\n    }else{\n      var _this = this;\n  if(this.state.signoutState && this.firstUpdate){\n    this.firstUpdate = false\n    setLocation = function(location) {\n      //let address = arg.address;\n      _this.showMap(location)\n    }\n    //locationBegin();\n    }\n    }\n  }\n  showMap=(location) =>{\n    debugger;\n    var _this = this;\n    var map = new BMap.Map(\'NewMap\');\n    var point = new BMap.Point(location.point.lng, location.point.lat)\n    map.centerAndZoom(point, 16);\n    map.enableScrollWheelZoom(true);\n    map.clearOverlays();\n    var myIcons = new BMap.Icon("http://pttlcrm.com/pttlCrm/res/images/ysp-map-customer-address.png", new BMap.Size(20,50));\n    var marker = new BMap.Marker(point,{icon:myIcons}); // \u521B\u5EFA\u6807\u6CE8\n    map.addOverlay(marker); // \u5C06\u6807\u6CE8\u6DFB\u52A0\u5230\u5730\u56FE\u4E2D\n    map.panTo(point);\n    //\u521B\u5EFA500\u7C73\u70ED\u533A - - \n \xA0 \xA0//\u70ED\u533A\u5185\u663E\u793A\u5BA2\u6237\u5730\u5740 . \u6839\u636Eip\u5B9A\u4F4D\n \xA0  \tvar circle = new BMap.Circle(point,500,{fillColor:"blue", strokeWeight: 1 ,fillOpacity: 0.2, strokeOpacity: 0.2});\n    \tmap.addOverlay(circle);\n \xA0 \xA0\tvar local = \xA0new BMap.LocalSearch(map, {renderOptions: {map: map, autoViewport: false}}); \n \xA0 \xA0\tlocal.searchNearby(\'\',point,500);\n    if(this.state.customnerLng != \'\' && this.state.customnerLat != \'\'){\n        var old_point = new BMap.Point(this.state.customnerLng,this.state.customnerLat);\n      var myIcon = new BMap.Icon("http://pttlcrm.com/pttlCrm/res/images/ysp-map-adress.png", new BMap.Size(20,50));\n        var marker = new BMap.Marker(old_point,{icon:myIcon});  // \u521B\u5EFA\u6807\u6CE8\n        map.addOverlay(marker);              // \u5C06\u6807\u6CE8\u6DFB\u52A0\u5230\u5730\u56FE\u4E2D\n        // map.panTo(new_point);\n    }\n    \n      this.setState({\n      Address:location.address\n    })\n    this.setState ({\n      jing :location.point.lng,\n      wei : location.point.lat\n    })\n    var handler = this.props.customHandler;\n      if(handler){\n        handler({\n          data:{jing:this.state.jing,wei:this.state.wei,dizhi:location.address},\n          eventType:\'value\'\n        })\n      }\n  }\n  oldMap=()=>{\n    this.refs.NewMap.style.height =\'0px\'\n    this.refs.oldMap.style.height = \'300px\'\n    var map = new BMap.Map(this.refs.oldMap);\n    var point = new BMap.Point(this.state.jing,this.state.wei);\n    map.centerAndZoom(point,16);\n \xA0 \xA0map.enableScrollWheelZoom(true);\n\t\t\tmap.clearOverlays(); \n    var myIcons = new BMap.Icon("http://pttlcrm.com/pttlCrm/res/images/ysp-map-customer-address.png", new BMap.Size(20,50));\n\t\t\tvar new_point = new BMap.Point(this.state.jing,this.state.wei);\n\t\t\tvar marker = new BMap.Marker(new_point,{icon:myIcons});  // \u521B\u5EFA\u6807\u6CE8\n\t\t\tmap.addOverlay(marker);              // \u5C06\u6807\u6CE8\u6DFB\u52A0\u5230\u5730\u56FE\u4E2D\n\t\t\tmap.panTo(new_point); \n    \n    if(this.state.customnerLng != \'\' && this.state.customnerLat != \'\'){\n        var old_point = new BMap.Point(this.state.customnerLng,this.state.customnerLat);\n      \tvar myIcon = new BMap.Icon("http://pttlcrm.com/pttlCrm/res/images/ysp-map-adress.png", new BMap.Size(20,50));\n        var marker = new BMap.Marker(old_point,{icon:myIcon});  // \u521B\u5EFA\u6807\u6CE8\n        map.addOverlay(marker);              // \u5C06\u6807\u6CE8\u6DFB\u52A0\u5230\u5730\u56FE\u4E2D\n        // map.panTo(new_point);\n    }\n  }\n  /*\u62FF\u5230\u5730\u5740*/\n  render() {\n    return (\n        <div class=\'common-sign\'>\n          <div id=\'NewMap\' ref="NewMap"></div>\n        \t<div id=\'oldMap\' ref=\'oldMap\'></div>\n        \t<div className=\'common-sign-content\'>\n            <div className=\'common-sign-time\'>\n            \t<span>\u7B7E\u51FA\u65F6\u95F4<span>*</span></span><span>{this.props.customData.Time}</span> \n            </div>\n            <div  className=\'common-sign-address\'>\n            \t<span>\u7B7E\u51FA\u5730\u5740<span>*</span></span><span>{this.state.Address}</span>\n            </div>\n          </div>\n          <hr style={{borderTop:\'16px solid #eee\'}}/>\n          <div className=\'common-sign-textarea\'>\n            <div>\n          \t<span>\u5907\u6CE8:</span>\n            {\n            \tthis.props.customData.button == 1 ? <textarea value = {this.props.customData.Textarea} disabled></textarea> : <textarea \n onFocus={(e)=>{\n                  if(e.target.value == \'\u8BF7\u586B\u5199\u5907\u6CE8\u5185\u5BB9\'){\n                    e.target.value = \'\';\n                  }\n                  e.target.style.color=\'#343434\';\n                }} onBlur={(e)=>{\n                  \tvar handler = this.props.customHandler;\n                  if(handler){\n                    handler({\n                      data:e.target.value,\n                      eventType:\'blur\'\n                    })\n                  }\n                }}\n>\u8BF7\u586B\u5199\u5907\u6CE8\u5185\u5BB9</textarea>    \n            }\n          </div>\n        </div>\n        {this.state.customnerLng == \'\'? <div className=\'alert\' style={{padding:\'5px\',textAlign:\'center\',fontWeight:\'600\'}}><span style={{color:\'red\'}}>*\u6CE8:</span>\u5F53\u524D\u5BA2\u6237\u6216\u95E8\u5E97\u7F3A\u5931\u8BE6\u7EC6\u5730\u5740\u6216\u7ECF\u7EAC\u5EA6</div>:<div></div>}\n      </div>\n    )\n  }\n}';
      return '\'use strict\';\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require(\'react\');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class(props) {\n    _classCallCheck(this, _class);\n\n    var _this2 = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));\n\n    _this2.showMap = function (location) {\n      debugger;\n      var _this = _this2;\n      var map = new BMap.Map(\'NewMap\');\n      var point = new BMap.Point(location.point.lng, location.point.lat);\n      map.centerAndZoom(point, 16);\n      map.enableScrollWheelZoom(true);\n      map.clearOverlays();\n      var myIcons = new BMap.Icon("http://pttlcrm.com/pttlCrm/res/images/ysp-map-customer-address.png", new BMap.Size(20, 50));\n      var marker = new BMap.Marker(point, { icon: myIcons }); // \u521B\u5EFA\u6807\u6CE8\n      map.addOverlay(marker); // \u5C06\u6807\u6CE8\u6DFB\u52A0\u5230\u5730\u56FE\u4E2D\n      map.panTo(point);\n      //\u521B\u5EFA500\u7C73\u70ED\u533A - - \n      //\u70ED\u533A\u5185\u663E\u793A\u5BA2\u6237\u5730\u5740 . \u6839\u636Eip\u5B9A\u4F4D\n      var circle = new BMap.Circle(point, 500, { fillColor: "blue", strokeWeight: 1, fillOpacity: 0.2, strokeOpacity: 0.2 });\n      map.addOverlay(circle);\n      var local = new BMap.LocalSearch(map, { renderOptions: { map: map, autoViewport: false } });\n      local.searchNearby(\'\', point, 500);\n      if (_this2.state.customnerLng != \'\' && _this2.state.customnerLat != \'\') {\n        var old_point = new BMap.Point(_this2.state.customnerLng, _this2.state.customnerLat);\n        var myIcon = new BMap.Icon("http://pttlcrm.com/pttlCrm/res/images/ysp-map-adress.png", new BMap.Size(20, 50));\n        var marker = new BMap.Marker(old_point, { icon: myIcon }); // \u521B\u5EFA\u6807\u6CE8\n        map.addOverlay(marker); // \u5C06\u6807\u6CE8\u6DFB\u52A0\u5230\u5730\u56FE\u4E2D\n        // map.panTo(new_point);\n      }\n\n      _this2.setState({\n        Address: location.address\n      });\n      _this2.setState({\n        jing: location.point.lng,\n        wei: location.point.lat\n      });\n      var handler = _this2.props.customHandler;\n      if (handler) {\n        handler({\n          data: { jing: _this2.state.jing, wei: _this2.state.wei, dizhi: location.address },\n          eventType: \'value\'\n        });\n      }\n    };\n\n    _this2.oldMap = function () {\n      _this2.refs.NewMap.style.height = \'0px\';\n      _this2.refs.oldMap.style.height = \'300px\';\n      var map = new BMap.Map(_this2.refs.oldMap);\n      var point = new BMap.Point(_this2.state.jing, _this2.state.wei);\n      map.centerAndZoom(point, 16);\n      map.enableScrollWheelZoom(true);\n      map.clearOverlays();\n      var myIcons = new BMap.Icon("http://pttlcrm.com/pttlCrm/res/images/ysp-map-customer-address.png", new BMap.Size(20, 50));\n      var new_point = new BMap.Point(_this2.state.jing, _this2.state.wei);\n      var marker = new BMap.Marker(new_point, { icon: myIcons }); // \u521B\u5EFA\u6807\u6CE8\n      map.addOverlay(marker); // \u5C06\u6807\u6CE8\u6DFB\u52A0\u5230\u5730\u56FE\u4E2D\n      map.panTo(new_point);\n\n      if (_this2.state.customnerLng != \'\' && _this2.state.customnerLat != \'\') {\n        var old_point = new BMap.Point(_this2.state.customnerLng, _this2.state.customnerLat);\n        var myIcon = new BMap.Icon("http://pttlcrm.com/pttlCrm/res/images/ysp-map-adress.png", new BMap.Size(20, 50));\n        var marker = new BMap.Marker(old_point, { icon: myIcon }); // \u521B\u5EFA\u6807\u6CE8\n        map.addOverlay(marker); // \u5C06\u6807\u6CE8\u6DFB\u52A0\u5230\u5730\u56FE\u4E2D\n        // map.panTo(new_point);\n      }\n    };\n\n    _this2.state = {\n      Time: props.customData.Time,\n      Address: props.customData.address,\n      Textarea: props.customData.Textarea,\n      signoutState: props.customData.state,\n      jing: props.customData.lng,\n      wei: props.customData.lat,\n      customnerLng: props.customData.customerLng || false,\n      customnerLat: props.customData.customerLat || false\n    };\n    var _this = _this2;\n    _this2.firstUpdate = true;\n    _this2.confim = false;\n    return _this2;\n  }\n\n  _createClass(_class, [{\n    key: \'componentWillReceiveProps\',\n    value: function componentWillReceiveProps(nextProps) {\n\n      this.setState({\n        signoutState: nextProps.customData.state\n      });\n      if (this.state.signoutState == false) {\n        this.setState({\n          Address: nextProps.customData.address,\n          jing: nextProps.customData.lng,\n          wei: nextProps.customData.lat\n        });\n      }\n    }\n  }, {\n    key: \'componentDidUpdate\',\n    value: function componentDidUpdate() {\n      var _this = this;\n      if (this.state.signoutState && this.firstUpdate) {\n        setLocation = function setLocation(location) {\n          //let address = arg.address;\n          _this.showMap(location);\n        };\n        //locationBegin();\n      } else if (this.state.signoutState == false) {\n        _this.oldMap();\n      }\n    }\n  }, {\n    key: \'componentDidMount\',\n    value: function componentDidMount() {\n      window.nullAddRess = function () {\n        alert(\'\u5B9A\u4F4D\u5931\u8D25 ! \u8BF7\u67E5\u770B\u5B9A\u4F4D\u6743\u9650\u662F\u5426\u5F00\u542F\');\n      };\n      if (this.state.signoutState == false) {\n        this.oldMap();\n      } else {\n        var _this = this;\n        if (this.state.signoutState && this.firstUpdate) {\n          this.firstUpdate = false;\n          setLocation = function setLocation(location) {\n            //let address = arg.address;\n            _this.showMap(location);\n          };\n          //locationBegin();\n        }\n      }\n    }\n  }, {\n    key: \'render\',\n\n    /*\u62FF\u5230\u5730\u5740*/\n    value: function render() {\n      var _this3 = this;\n\n      return React.createElement(\n        \'div\',\n        { \'class\': \'common-sign\' },\n        React.createElement(\'div\', { id: \'NewMap\', ref: \'NewMap\' }),\n        React.createElement(\'div\', { id: \'oldMap\', ref: \'oldMap\' }),\n        React.createElement(\n          \'div\',\n          { className: \'common-sign-content\' },\n          React.createElement(\n            \'div\',\n            { className: \'common-sign-time\' },\n            React.createElement(\n              \'span\',\n              null,\n              \'\\u7B7E\\u51FA\\u65F6\\u95F4\',\n              React.createElement(\n                \'span\',\n                null,\n                \'*\'\n              )\n            ),\n            React.createElement(\n              \'span\',\n              null,\n              this.props.customData.Time\n            )\n          ),\n          React.createElement(\n            \'div\',\n            { className: \'common-sign-address\' },\n            React.createElement(\n              \'span\',\n              null,\n              \'\\u7B7E\\u51FA\\u5730\\u5740\',\n              React.createElement(\n                \'span\',\n                null,\n                \'*\'\n              )\n            ),\n            React.createElement(\n              \'span\',\n              null,\n              this.state.Address\n            )\n          )\n        ),\n        React.createElement(\'hr\', { style: { borderTop: \'16px solid #eee\' } }),\n        React.createElement(\n          \'div\',\n          { className: \'common-sign-textarea\' },\n          React.createElement(\n            \'div\',\n            null,\n            React.createElement(\n              \'span\',\n              null,\n              \'\\u5907\\u6CE8:\'\n            ),\n            this.props.customData.button == 1 ? React.createElement(\'textarea\', { value: this.props.customData.Textarea, disabled: true }) : React.createElement(\n              \'textarea\',\n              {\n                onFocus: function onFocus(e) {\n                  if (e.target.value == \'\u8BF7\u586B\u5199\u5907\u6CE8\u5185\u5BB9\') {\n                    e.target.value = \'\';\n                  }\n                  e.target.style.color = \'#343434\';\n                }, onBlur: function onBlur(e) {\n                  var handler = _this3.props.customHandler;\n                  if (handler) {\n                    handler({\n                      data: e.target.value,\n                      eventType: \'blur\'\n                    });\n                  }\n                }\n              },\n              \'\\u8BF7\\u586B\\u5199\\u5907\\u6CE8\\u5185\\u5BB9\'\n            )\n          )\n        ),\n        this.state.customnerLng == \'\' ? React.createElement(\n          \'div\',\n          { className: \'alert\', style: { padding: \'5px\', textAlign: \'center\', fontWeight: \'600\' } },\n          React.createElement(\n            \'span\',\n            { style: { color: \'red\' } },\n            \'*\\u6CE8:\'\n          ),\n          \'\\u5F53\\u524D\\u5BA2\\u6237\\u6216\\u95E8\\u5E97\\u7F3A\\u5931\\u8BE6\\u7EC6\\u5730\\u5740\\u6216\\u7ECF\\u7EAC\\u5EA6\'\n        ) : React.createElement(\'div\', null)\n      );\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;';
    },
    getData_control36_opODzW: function (elem) {
      var data = {};if (ysp.customHelper.tipMsg.getMsg()) {
        data.postMessage = ysp.customHelper.tipMsg.getMsg();
      } else {
        data.postMessage = "";
      }if (ysp.customHelper.tipMsg.cancelText()) {
        data.cancel = ysp.customHelper.tipMsg.cancelText();
      } else {
        data.cancel = "";
      }return data;
    },
    doAction_uiControl36_0IbJvV: function (data, elem) {
      if (data.eventType == "confirmClick") {
        ysp.customHelper.tipMsg.confirm();
      }if (data.eventType == "cancelClick") {
        ysp.customHelper.tipMsg.cancel();
      }
    },
    getTemplate_uiControl36_0IbJvV: function () {
      var selfTemplate = 'import {\n  Component\n} from \'react\';\nimport {\n\tAlert\n} from \'ysp-custom-components\';\nexport default class extends Component {\n  render(){\n    var _this=this;\n    var data=this.props.customData;\n     return(\n    \t<div>\n        {data.postMessage=="" ? "" : \n          <Alert\n            content={data.postMessage}\n            cancelText={data.cancel}\n            dismiss={\n              (e)=>{\n                var handler=this.props.customHandler;\n                if(handler){\n                  handler({\n                    eventType:"confirmClick"\n                  })\n                }\n              }\n            }\n            cancel={\n             (e)=>{\n                var handler=this.props.customHandler;\n                if(handler){\n                  handler({\n                    eventType:"cancelClick"\n                  })\n                }\n              }\n           }\n          />\n        }\n      </div>\n    )\n  }\n}';
      return '\'use strict\';\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require(\'react\');\n\nvar _yspCustomComponents = require(\'ysp-custom-components\');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));\n  }\n\n  _createClass(_class, [{\n    key: \'render\',\n    value: function render() {\n      var _this3 = this;\n\n      var _this = this;\n      var data = this.props.customData;\n      return React.createElement(\n        \'div\',\n        null,\n        data.postMessage == "" ? "" : React.createElement(_yspCustomComponents.Alert, {\n          content: data.postMessage,\n          cancelText: data.cancel,\n          dismiss: function dismiss(e) {\n            var handler = _this3.props.customHandler;\n            if (handler) {\n              handler({\n                eventType: "confirmClick"\n              });\n            }\n          },\n          cancel: function cancel(e) {\n            var handler = _this3.props.customHandler;\n            if (handler) {\n              handler({\n                eventType: "cancelClick"\n              });\n            }\n          }\n        })\n      );\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;';
    },
    getData_control37_U9Hb3C: function (elem) {
      if (elem) {
        var data = {};data.button = elem.querySelectorAll('span').length;return data;
      }return '';
    },
    doAction_uiControl37_cSFts4: function (data, elem) {
      if (data.eventType == 'click') {
        var cwin = elem.ownerDocument.defaultView;if (elem.querySelector('.customersign-active')) {
          var execute = function execute() {
            var flag = false;if (cwin.signOutStatus == "completed") {
              //ysp.appMain.back(); 
              cwin && cwin.close();flag = true;cwin.signOutStatus = undefined;setTimeout(function () {
                var url = "http://pttlcrm.com/pttlCrm/res/page/visitManager/customerWorkspace/customerWorkspace.html"; //ysp.appMain.reloadPage(url); //           var targetWin = ysp.customHelper.getWinFromRTByName('firstLevelIframeContainer');
                //           if (targetWin) {
                //             targetWin.location.reload();
                //           }
                //更换返回方法 BackReload()回到工作台
                //ysp.appMain.back();
                ysp.customHelper.BackReload();
              }, 1000);
            }if (!cwin.signOutStatus || !elem) {
              flag = true;
            }if (!flag) {
              setTimeout(execute.bind(this), 200);
            }
          };elem.ownerDocument.querySelector('.customersign-active').click();var cwin = elem.ownerDocument.defaultView;setTimeout(execute.bind(this), 300); //     if (ysp.customHelper.tipMsg.getMsg()) {
          //       function callback() {
          //         var targetWin = ysp.customHelper.getWinFromRTByName('firstLevelIframeContainer');
          //         if (targetWin) {
          //           targetWin.location.reload();
          //         }
          //       }
          //       ysp.customHelper.refreshWinAfterWinName('sencondLevelIframeContainer', callback);
          //     } else {
          //       setTimeout(function () {
          //         if (!ysp.customHelper.tipMsg.getMsg()) {
          //           var targetWin = ysp.customHelper.getWinFromRTByName('firstLevelIframeContainer');
          //           targetWin.location.reload();
          //           ysp.customHelper.back();
          //           function callback() {
          //             targetWin = ysp.customHelper.getWinFromRTByName('firstLevelIframeContainer');
          //             if (targetWin) {
          //               targetWin.location.reload();
          //             }
          //           }
          //           ysp.customHelper.refreshWinAfterWinName('sencondLevelIframeContainer', callback);
          //         }
          //       }, 100);
          //       clearTimeout();
          //     }
        }
      }
    },
    getTemplate_uiControl37_cSFts4: function () {
      var selfTemplate = 'import {Component} from \'react\';\nexport default class extends Component{\n  render=()=>{\n    var buttonLength = this.props.customData.button;\n    return(\n      <div className=\'ysp-visitSign-commit\'>\n        {\n          buttonLength == 1 ? "" : <button className=\'signout\' onClick={(e)=>{\n            var handler = this.props.customHandler;\n            if(handler){\n              handler({\n                eventType:\'click\'\n              })\n            }\n          }}>\u7B7E\u51FA</button>\n        }\n      </div>\n    )\n  }\n}';
      return '\'use strict\';\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\n\nvar _react = require(\'react\');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class() {\n    var _ref;\n\n    var _temp, _this, _ret;\n\n    _classCallCheck(this, _class);\n\n    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = _class.__proto__ || Object.getPrototypeOf(_class)).call.apply(_ref, [this].concat(args))), _this), _this.render = function () {\n      var buttonLength = _this.props.customData.button;\n      return React.createElement(\n        \'div\',\n        { className: \'ysp-visitSign-commit\' },\n        buttonLength == 1 ? "" : React.createElement(\n          \'button\',\n          { className: \'signout\', onClick: function onClick(e) {\n              var handler = _this.props.customHandler;\n              if (handler) {\n                handler({\n                  eventType: \'click\'\n                });\n              }\n            } },\n          \'\\u7B7E\\u51FA\'\n        )\n      );\n    }, _temp), _possibleConstructorReturn(_this, _ret);\n  }\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;';
    }
  }, "visitSignOut");
})(window, ysp);