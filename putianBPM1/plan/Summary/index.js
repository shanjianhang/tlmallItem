(function(win, ysp) {
    ysp.runtime.Model.extendLoadingModel({
        getData_control44_8h1JdZ: function(elem) {},
        doAction_uiControl43_xd0XdW: function(data, elem) {
            if (data.eventType == 'back') {
                ysp.appMain.back();
            }
        },
        getTemplate_uiControl43_xd0XdW: function() {
            var selfTemplate = "import {\n  Header,\n  HeaderLeft,\n  HeaderRight\n} from 'ysp-interior-components';\n\nexport default class extends React.Component {\n  constructor(props) {\n    super(props);\n  }\n  onClick=(e)=>{\n    var handler=this.props.customHandler;\n     if(handler) {                                    \n       handler({\n         // data:e.target.className,\n         data:this.props.customData,\n         eventType:'click'                         \n       })\n     }\n  }\n  render() {\n    var  _this = this;\n    var data=this.props.customData\t||\t[];\n    if(data){\n      return (\n      <Header amStyle=\"primary\" title=\"\u5DE5\u4F5C\u9879\u6267\u884C\"\tclassName=\"ysp-flex-top\">\n        <HeaderLeft>\n          <AMUI.Button amStyle=\"primary\" style={{ margin: 0 }} onClick={()=>{\n              const handler = _this.props.customHandler;\n              if (handler) {\n                handler({\n                  data:data,\n                  eventType: 'back'\n                });\n              }\n            }}>\n            <span className='icon icon-left-nav'></span>\n          </AMUI.Button>\n        </HeaderLeft>\n        <HeaderRight>\n          {\tdata ? <AMUI.Button amStyle=\"primary\" style={{ margin: 0 }}\tclassName='ysp-Receive' onClick={_this.onClick} >{data}</AMUI.Button>\t: <div style={{display:'none'}}></div>\t}\n          \n        </HeaderRight>\n      </Header>\n    \t);\n    }else{\n      return(<div style={{display:'none'}}></div>)\n    }\n  }\n}\n";
            return "'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _yspInteriorComponents = require('ysp-interior-components');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_React$Component) {\n  _inherits(_class, _React$Component);\n\n  function _class(props) {\n    _classCallCheck(this, _class);\n\n    var _this2 = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));\n\n    _this2.onClick = function (e) {\n      var handler = _this2.props.customHandler;\n      if (handler) {\n        handler({\n          // data:e.target.className,\n          data: _this2.props.customData,\n          eventType: 'click'\n        });\n      }\n    };\n\n    return _this2;\n  }\n\n  _createClass(_class, [{\n    key: 'render',\n    value: function render() {\n      var _this = this;\n      var data = this.props.customData || [];\n      if (data) {\n        return React.createElement(\n          _yspInteriorComponents.Header,\n          { amStyle: 'primary', title: '\\u5DE5\\u4F5C\\u9879\\u6267\\u884C', className: 'ysp-flex-top' },\n          React.createElement(\n            _yspInteriorComponents.HeaderLeft,\n            null,\n            React.createElement(\n              AMUI.Button,\n              { amStyle: 'primary', style: { margin: 0 }, onClick: function onClick() {\n                  var handler = _this.props.customHandler;\n                  if (handler) {\n                    handler({\n                      data: data,\n                      eventType: 'back'\n                    });\n                  }\n                } },\n              React.createElement('span', { className: 'icon icon-left-nav' })\n            )\n          ),\n          React.createElement(\n            _yspInteriorComponents.HeaderRight,\n            null,\n            data ? React.createElement(\n              AMUI.Button,\n              { amStyle: 'primary', style: { margin: 0 }, className: 'ysp-Receive', onClick: _this.onClick },\n              data\n            ) : React.createElement('div', { style: { display: 'none' } })\n          )\n        );\n      } else {\n        return React.createElement('div', { style: { display: 'none' } });\n      }\n    }\n  }]);\n\n  return _class;\n}(React.Component);\n\nexports.default = _class;";
        },
        getData_control56_KFRh9g: function(elem) {
            if (!elem) {
                return;
            }
            if (elem) {
                var data = { title: [], content: [], total: [] };
                var tTrs = elem.querySelectorAll('tr	.form_label');
                var trsLen = tTrs.length;
                for (var i = 0; i < trsLen; i++) {
                    data.title.push(tTrs[i].textContent);
                }
                var _table = elem.querySelectorAll('tr');
                if (_table.length > 2) {
                    var trs = _table;
                    var trsLen = trs.length - 1;
                    for (var i = 1; i < trsLen; i++) {
                        var tds = trs[i].querySelectorAll('td');
                        var tdsLen = tds.length;
                        var pData = [];
                        for (var j = 0; j < tdsLen; j++) {
                            pData.push(tds[j].textContent);
                        }
                        data.content.push(pData);
                    }
                    var totalTrs = elem.querySelectorAll('tbody	tr:last-child td');
                    var totalLen = totalTrs.length;
                    for (var i = 0; i < totalLen; i++) {
                        data.total.push(totalTrs[i].textContent.trim());
                    }
                }
                return data;
            }
        },
        doAction_uiControl52_bUyp3y: function(data, elem) {},
        getTemplate_uiControl52_bUyp3y: function() {
            var selfTemplate = "import {Table} from 'ysp-custom-components';\nimport {Component} from 'react';\nexport\tdefault\tclass\textends\tReact.Component{\n  render(){\n  \tvar data = this.props.customData || [];\n    if(\tdata\t&&\tdata.total.length\t&&\tdata.total.length>0\t){\n       var total=[];\n      total.push(<div\tstyle={{display:'none'}}></div>)\n      \ttotal.push(\n        \t<div\tclassName='ysp-flowsheet' style={{marginTop:'30px',marginBottom:'10px'}}>\n          \t<div>\n        \t\t\t<div className='ysp-total'>\n        \t\t\t\t<h1>\n          \t\t\t\t\u603B\u8BA1\t\n          \t\t\t</h1>\n                <ul>\n            \t\t\t{\tdata\t&&\tdata.total.map((item,i)=>{\n          \t\t\t\t\tif(i>0){\n            \t\t\t\t\treturn(\n              \t\t\t\t\t<li>\n              \t\t\t\t\t\t<span>{data.title[i+1]}</span>\n                \t\t\t\t\t<label>{item}</label>\n              \t\t\t\t\t</li>\n             \t\t\t)\t   \n          \t\t\t}\n          \t})}  \n            </ul>\n        \t\t\t</div>\n        \t\t</div>\n        \t</div>\n        )\n    }else{\n      var total=[];\n      total.push(<div\tclassName=\"ysp-no-data\">\n             \t\t\t<i></i>\n             \t\t\t<div>\u6682\u65E0\u6570\u636E</div>\n           \t\t\t</div>)\n    }\n    if(data){\n     \treturn(\n    \t\t<div className='ysp-flowsheet'>\n          {total}\n      \t\t<Table\tPassedCustomData={data}\t\t/>\n      \t</div>\n    \t) \n    }else{\n      return(\n      \t<div\tstyle={{display:'none'}}></div>\n      )\n    }\n\t}\n}";
            return "'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _yspCustomComponents = require('ysp-custom-components');\n\nvar _react = require('react');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_React$Component) {\n  _inherits(_class, _React$Component);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));\n  }\n\n  _createClass(_class, [{\n    key: 'render',\n    value: function render() {\n      var data = this.props.customData || [];\n      if (data && data.total.length && data.total.length > 0) {\n        var total = [];\n        total.push(React.createElement('div', { style: { display: 'none' } }));\n        total.push(React.createElement(\n          'div',\n          { className: 'ysp-flowsheet', style: { marginTop: '30px', marginBottom: '10px' } },\n          React.createElement(\n            'div',\n            null,\n            React.createElement(\n              'div',\n              { className: 'ysp-total' },\n              React.createElement(\n                'h1',\n                null,\n                '\\u603B\\u8BA1'\n              ),\n              React.createElement(\n                'ul',\n                null,\n                data && data.total.map(function (item, i) {\n                  if (i > 0) {\n                    return React.createElement(\n                      'li',\n                      null,\n                      React.createElement(\n                        'span',\n                        null,\n                        data.title[i + 1]\n                      ),\n                      React.createElement(\n                        'label',\n                        null,\n                        item\n                      )\n                    );\n                  }\n                })\n              )\n            )\n          )\n        ));\n      } else {\n        var total = [];\n        total.push(React.createElement(\n          'div',\n          { className: 'ysp-no-data' },\n          React.createElement('i', null),\n          React.createElement(\n            'div',\n            null,\n            '\\u6682\\u65E0\\u6570\\u636E'\n          )\n        ));\n      }\n      if (data) {\n        return React.createElement(\n          'div',\n          { className: 'ysp-flowsheet' },\n          total,\n          React.createElement(_yspCustomComponents.Table, { PassedCustomData: data })\n        );\n      } else {\n        return React.createElement('div', { style: { display: 'none' } });\n      }\n    }\n  }]);\n\n  return _class;\n}(React.Component);\n\nexports.default = _class;";
        }
    }, "Summary");
})(window, ysp);