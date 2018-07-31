(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control190_B8XD6i: function (elem) {
      if (!elem) {
        return;
      }var content = ysp.customHelper.getTableData(elem, ['流程名称', '流程编号', '审批人', '内容摘要', '申请人', '流程状态', '办理时间']);var arr = ['要事追踪申请单'];var data = ysp.customHelper.getDatamove(content, arr);content.content = data.data;content.index = data.index;return content;
    },
    doAction_uiControl190_52emIC: function (data, elem) {
      var type = data.eventType,
          data = data.customData;if (type == 'td_click') {
        var arr = ['请假申请单', '销假申请单', '离职申请单', '加班申请单', '因公外出申请单', '考勤异常申请单', '员工异动申请单', '员工异动申请单V2', '招聘申请单', '员工合同续签申请单', '试用期转正申请单', '录用入职申请单', '培训申请单', '人才盘点信息表', '资产预算调整流程', '资产预算调整流程V2', '信用冻结订单释放申请流程', '资产类预算外申请流程V2', '借款/预付款申请单', '资产处理申请单', '差旅费用报销流程', '费用报销流程', '路线新增流程', '路线变更流程', '路线组变更申请', '客资/送大方/销售人员.路线批量审批', '市场用品采购流程', '总部合同审批流程', '用印申请流程', '合同审批流程', '客资批量审批', '送达方批量审批', '路线批量审批', '通用流程（知会）', '通用流程'];var flat = arr.indexOf(data.text);var hreflo = elem.querySelectorAll('tr')[++data.id].querySelector('a').onclick.toString().split("ShowPage('")[1].split("')")[0];if (flat == -1) {
          if (hreflo[0] == 'h') {
            hreflo += "&_ysp_forcepc=1";ysp.appMain.openWindow(hreflo);
          } else {
            hreflo = "http://172.16.11.61:8000" + hreflo;hreflo += "&_ysp_forcepc=1";ysp.appMain.openWindow(hreflo);
          }
        } else {
          if (ysp.appMain.isIOS()) {
            if (hreflo.indexOf('http://172.16.11.61') != -1) {
              ysp.appMain.openWindow(hreflo);
            } else {
              elem.ownerDocument.defaultView.open(hreflo);
            }
          } else {
            // elem.ownerDocument.defaultView.open(hreflo);
            // debugger;
            // ysp.appMain.openWindow(hreflo);
            elem.ownerDocument.defaultView.open(hreflo);
          }
        }
      }return false;
    },
    getTemplate_uiControl190_52emIC: function () {
      var selfTemplate = 'module.exports = React.createClass({\n  onClick:function(e){\n    var handler = this.props.customHandler,\n        target = e.target,\n        type,data={};\n    //\u70B9\u51FB\u4E8B\u4EF6   \u70B9\u51FB\u8FDB\u5165\u8BE6\u60C5\u9875\n    // if(target.tagName.toLowerCase() == \'div\'){\n      type=\'td_click\';\n      var Contentele = ysp.customHelper.getparent(target,\'Content\');\n      data.id = Contentele.getAttribute(\'data-id\');\n      data.text = Contentele.querySelectorAll(\'div.Content_item\')[0].textContent.trim();\n    // }\n    \n    \n    if(handler){\n      handler({\n        eventType:type,\n        data:data\n      })\n    }\n  },\n  onclick:function(e){\n    var handler = this.props.customHandler,\n        target = e.target;\n    //\u5224\u65AD\u662F\u5426\u4E3A\u4E0B\u5566\u6309\u94AE   \u6539\u53D8\u9690\u85CF\u7684\u5143\u7D20display\n    if(target.getAttribute(\'data-id\') == \'true\'){\n      // target = (target.tagName.toLowerCase() == \'span\')? target.parentElement:target;\n      target.setAttribute(\'data-id\',\'false\');\n      target.className = \'disbottom\';\n      target.parentElement.parentElement.querySelector(\'div.Content_disnone\').style.display = \'block\';\n    }else{\n      target.setAttribute(\'data-id\',\'true\');\n      target.className = \'distop\';\n      target.parentElement.parentElement.querySelector(\'div.Content_disnone\').style.display = \'none\';\n    }\n    //\u963B\u6B62\u4E8B\u4EF6\u5192\u6CE1\u4ECE\u800C\u6267\u884C\u7236\u5143\u7D20\u7684\u70B9\u51FB\u4E8B\u4EF6\n    e.stopPropagation()\n    // if(handler){\n    //   handler({\n    //     type:\'tag\',\n    //     data:target.getAttribute(\'data-id\')\n    //   })\n    // }\n  },\n  render: function() {\n    var data = this.props.customData,\n    \t\t_this = this;\n    if(!data){\n      return \'\';\n    }\n    var lis = data.content.map(function(ele,index){\n      return(\n      \t<div className=\'Content\' onClick={_this.onClick} data-id={data.index[index]}>\n        \t<div>\n          \t<div className=\'Content_item\'>\n            {ele[0]}</div>\n          <div className=\'Content_item\' onClick={_this.onClick}><p onClick={_this.onClick}>{data.titles[5]}</p><p onClick={_this.onClick}>{ele[5]}</p></div>\n          <div className=\'Content_item\'>\n            <p>{data.titles[2]}</p><p>{ele[2]}</p>\n          </div>\n          <div className=\'Content_item\'>\n            \t<p>{data.titles[3]}</p><p>{ele[3]}</p>\n            </div>\n            <div className=\'Content_item\'>\n            \t<p>{data.titles[4]}</p><p>{ele[4]}</p>\n            </div>\n            <div className=\'Content_item\'>\n            \t<p>{data.titles[6]}</p><p>{ele[6]}</p>\n            </div>\n\t\t\t\t\t</div>\n        </div>\n      )\n          //             <a className=\'distop\' href=\'javascript:;\' data-id=\'true\' onClick={_this.onclick} ><span></span></a>\n          // </div>\n          // <div data-id={index} className=\'Content_disnone\'>\n          //       \t<div id=\'summary\'>\n          //   \t<div>{data.titles[1]}</div>\n          //     <div>{ele[1]}</div>\n          //   </div>\n          //   <div>\n          //   \t<div>{data.titles[4]}</div>\n          //     <div>{ele[4]}</div>\n          //   </div>\n          //   <div>\n          //   \t<div>{data.titles[5]}</div>\n          //     <div>{ele[5]}</div>\n          //   </div>\n          // </div>\n\n    })\n    return (\n      <div>\n        {lis}\n      </div>\n    )\n  }\n});';
      return '\'use strict\';\n\nmodule.exports = React.createClass({\n  displayName: \'exports\',\n\n  onClick: function onClick(e) {\n    var handler = this.props.customHandler,\n        target = e.target,\n        type,\n        data = {};\n    //\u70B9\u51FB\u4E8B\u4EF6   \u70B9\u51FB\u8FDB\u5165\u8BE6\u60C5\u9875\n    // if(target.tagName.toLowerCase() == \'div\'){\n    type = \'td_click\';\n    var Contentele = ysp.customHelper.getparent(target, \'Content\');\n    data.id = Contentele.getAttribute(\'data-id\');\n    data.text = Contentele.querySelectorAll(\'div.Content_item\')[0].textContent.trim();\n    // }\n\n\n    if (handler) {\n      handler({\n        eventType: type,\n        data: data\n      });\n    }\n  },\n  onclick: function onclick(e) {\n    var handler = this.props.customHandler,\n        target = e.target;\n    //\u5224\u65AD\u662F\u5426\u4E3A\u4E0B\u5566\u6309\u94AE   \u6539\u53D8\u9690\u85CF\u7684\u5143\u7D20display\n    if (target.getAttribute(\'data-id\') == \'true\') {\n      // target = (target.tagName.toLowerCase() == \'span\')? target.parentElement:target;\n      target.setAttribute(\'data-id\', \'false\');\n      target.className = \'disbottom\';\n      target.parentElement.parentElement.querySelector(\'div.Content_disnone\').style.display = \'block\';\n    } else {\n      target.setAttribute(\'data-id\', \'true\');\n      target.className = \'distop\';\n      target.parentElement.parentElement.querySelector(\'div.Content_disnone\').style.display = \'none\';\n    }\n    //\u963B\u6B62\u4E8B\u4EF6\u5192\u6CE1\u4ECE\u800C\u6267\u884C\u7236\u5143\u7D20\u7684\u70B9\u51FB\u4E8B\u4EF6\n    e.stopPropagation();\n    // if(handler){\n    //   handler({\n    //     type:\'tag\',\n    //     data:target.getAttribute(\'data-id\')\n    //   })\n    // }\n  },\n  render: function render() {\n    var data = this.props.customData,\n        _this = this;\n    if (!data) {\n      return \'\';\n    }\n    var lis = data.content.map(function (ele, index) {\n      return React.createElement(\n        \'div\',\n        { className: \'Content\', onClick: _this.onClick, \'data-id\': data.index[index] },\n        React.createElement(\n          \'div\',\n          null,\n          React.createElement(\n            \'div\',\n            { className: \'Content_item\' },\n            ele[0]\n          ),\n          React.createElement(\n            \'div\',\n            { className: \'Content_item\', onClick: _this.onClick },\n            React.createElement(\n              \'p\',\n              { onClick: _this.onClick },\n              data.titles[5]\n            ),\n            React.createElement(\n              \'p\',\n              { onClick: _this.onClick },\n              ele[5]\n            )\n          ),\n          React.createElement(\n            \'div\',\n            { className: \'Content_item\' },\n            React.createElement(\n              \'p\',\n              null,\n              data.titles[2]\n            ),\n            React.createElement(\n              \'p\',\n              null,\n              ele[2]\n            )\n          ),\n          React.createElement(\n            \'div\',\n            { className: \'Content_item\' },\n            React.createElement(\n              \'p\',\n              null,\n              data.titles[3]\n            ),\n            React.createElement(\n              \'p\',\n              null,\n              ele[3]\n            )\n          ),\n          React.createElement(\n            \'div\',\n            { className: \'Content_item\' },\n            React.createElement(\n              \'p\',\n              null,\n              data.titles[4]\n            ),\n            React.createElement(\n              \'p\',\n              null,\n              ele[4]\n            )\n          ),\n          React.createElement(\n            \'div\',\n            { className: \'Content_item\' },\n            React.createElement(\n              \'p\',\n              null,\n              data.titles[6]\n            ),\n            React.createElement(\n              \'p\',\n              null,\n              ele[6]\n            )\n          )\n        )\n      );\n      //             <a className=\'distop\' href=\'javascript:;\' data-id=\'true\' onClick={_this.onclick} ><span></span></a>\n      // </div>\n      // <div data-id={index} className=\'Content_disnone\'>\n      //       \t<div id=\'summary\'>\n      //   \t<div>{data.titles[1]}</div>\n      //     <div>{ele[1]}</div>\n      //   </div>\n      //   <div>\n      //   \t<div>{data.titles[4]}</div>\n      //     <div>{ele[4]}</div>\n      //   </div>\n      //   <div>\n      //   \t<div>{data.titles[5]}</div>\n      //     <div>{ele[5]}</div>\n      //   </div>\n      // </div>\n    });\n    return React.createElement(\n      \'div\',\n      null,\n      lis\n    );\n  }\n});';
    },
    getData_control195_l7OwdG: function (elem) {
      if (!elem) {
        return;
      }var data = {};var span = elem.querySelector('span');data.title = span.nextSibling.nextSibling.textContent.trim();return data;
    },
    doAction_uiControl195_ArMMGb: function (data, elem) {
      if ('back' == data.eventType) {
        //ysp.appMain.back();
        // ysp.customHelper.backHome();
        ysp.runtime.Browser.activeBrowser.contentWindow.close();
      }
    },
    getTemplate_uiControl195_ArMMGb: function () {
      var selfTemplate = 'import { Header, HeaderLeft } from \'ysp-interior-components\';\nimport { back } from \'appRenderer\';\nmodule.exports = React.createClass({\n  back:function(e){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:"back"\n      })\n    }\n  },\n  render: function() {\n    var data = this.props.customData;\n    return (\n      <div className=\'titleH1\'>\n          <Header title="\u5DF2\u529E">\n    \t\t\t\t<HeaderLeft>\n      \t\t\t\t<span></span><button onClick={this.back.bind(this)}>\u8FD4\u56DE</button>\n    \t\t\t\t</HeaderLeft>\n  \t\t\t\t</Header>\n      </div>\n    )\n  }\n});';
      return "'use strict';\n\nvar _yspInteriorComponents = require('ysp-interior-components');\n\nvar _appRenderer = require('appRenderer');\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  back: function back(e) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \"back\"\n      });\n    }\n  },\n  render: function render() {\n    var data = this.props.customData;\n    return React.createElement(\n      'div',\n      { className: 'titleH1' },\n      React.createElement(\n        _yspInteriorComponents.Header,\n        { title: '\\u5DF2\\u529E' },\n        React.createElement(\n          _yspInteriorComponents.HeaderLeft,\n          null,\n          React.createElement('span', null),\n          React.createElement(\n            'button',\n            { onClick: this.back.bind(this) },\n            '\\u8FD4\\u56DE'\n          )\n        )\n      )\n    );\n  }\n});";
    },

    getData_control2_423LQM: function (elem) {
      //console.log(elem);
      if (!elem) {
        return "";
      }if (elem) {
        var data = {};data.content = [];var nodes = elem.children;for (var i = 0; i < nodes.length; i++) {
          data.content.push({ text: nodes[i].textContent.trim(), class: nodes[i].className });
        }return data;
      }
    },
    doAction_uiControl2_gIb7bP: function (data, elem) {
      if (data.eventType == 'click') {
        //debugger;
        var index = parseInt(data.dataCustom);if (index == 1) {
          var target = elem.querySelectorAll('a')[index];target.click();
        } else {
          var target = elem.querySelectorAll('a')[index - 1];target.click();
        }
      } else if (data.eventType == 'onclickpage') {
        //debugger;
        var index = parseInt(data.dataCustom[0]);var id = data.dataCustom[1];if (id == 'prevPage') {
          var target = elem.querySelectorAll('a')[index];target.click();
        } else if (id == 'nextPage') {
          var target = elem.querySelectorAll('a')[index - 1];target.click();
        }
      } else if (data.eventType == 'onclickpreOnce') {
        // debugger;
        var child = elem.querySelectorAll('a');var end = parseInt(elem.querySelector('.cpb').textContent);for (var i = end; i > 0; i--) {
          if (i == 1) {
            alert('已经到首页了');
          } else {
            child[i - 1].click();break;
          }
        }
      } else if (data.eventType == 'onClicknextOnce') {
        var child = elem.querySelectorAll('a');var start = parseInt(elem.querySelector('.cpb').textContent);for (var i = start; i < child.length; i++) {
          if (i == child.length - 1) {
            alert('已经到末页了');
          } else {
            child[i].click();break;
          }
        }
      }
    },
    getTemplate_uiControl2_gIb7bP: function () {
      var selfTemplate = 'module.exports = React.createClass({\n  onClick:function(e){\n    var handler = this.props.customHandler;\n    var target = e.target;\n    if(handler){\n      handler({\n        eventType:\'click\',\n        data:target.getAttribute(\'data-id\')\n      })\n    }\n  },\n  onclickpage:function(e){\n    var target=e.target;\n    var handler=this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:\'onclickpage\',\n        data:[target.dataset.index,target.dataset.id]\n      })\n    }\n  },\n  onclickpreOnce:function(e){\n    var handler = this.props.customHandler;\n    var target = e.target;\n    if(handler){\n      handler({\n        eventType:\'onclickpreOnce\'\n        \n      })\n    }\n  },\n  onClicknextOnce:function(e){\n    var handler = this.props.customHandler;\n    var target = e.target;\n    if(handler){\n      handler({\n        eventType:\'onClicknextOnce\',\n        \n      })\n    }\n  },\n  render: function() {\n    var data = this.props.customData;\n    if(!data){\n      return (\n        <div>\n        \t\u6682\u65E0\u6570\u636E\n        </div>\n      )\n    }\n    var str = \'<\',kr = \'|<\',\n        _this = this;\n    var lis = data.content.map(function(ele,index){\n      if(index!=0&&index!=data.content.length-1){\n        return(\n        \t<li data-id={index} onClick={_this.onClick} className={ele.class}>{ele.text}</li>\n        )\n      }\n    })\n    return (\n      <div className=\'footerbtn\'>\n        <ul>\n          <li data-id=\'prevPage\' data-index={0} onClick={_this.onclickpage.bind(_this)} className=\'ysp-prePage\'>{kr}</li>\n          <li data-id=\'prev\' onClick={_this.onclickpreOnce.bind(_this)} className=\'ysp-preOnce\'>{str}</li>\n          {lis}\n          <li data-id=\'next\' onClick={_this.onClicknextOnce.bind(_this)} className=\'ysp-nextOne\'>></li>\n          <li data-id=\'nextPage\' data-index={data.content.length-1} onClick={_this.onclickpage.bind(_this)} className=\'ysp-nextPage\'>>|</li>\n        </ul>\n      </div>\n    )\n  }\n});';
      return "'use strict';\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  onClick: function onClick(e) {\n    var handler = this.props.customHandler;\n    var target = e.target;\n    if (handler) {\n      handler({\n        eventType: 'click',\n        data: target.getAttribute('data-id')\n      });\n    }\n  },\n  onclickpage: function onclickpage(e) {\n    var target = e.target;\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: 'onclickpage',\n        data: [target.dataset.index, target.dataset.id]\n      });\n    }\n  },\n  onclickpreOnce: function onclickpreOnce(e) {\n    var handler = this.props.customHandler;\n    var target = e.target;\n    if (handler) {\n      handler({\n        eventType: 'onclickpreOnce'\n\n      });\n    }\n  },\n  onClicknextOnce: function onClicknextOnce(e) {\n    var handler = this.props.customHandler;\n    var target = e.target;\n    if (handler) {\n      handler({\n        eventType: 'onClicknextOnce'\n\n      });\n    }\n  },\n  render: function render() {\n    var data = this.props.customData;\n    if (!data) {\n      return React.createElement(\n        'div',\n        null,\n        '\\u6682\\u65E0\\u6570\\u636E'\n      );\n    }\n    var str = '<',\n        kr = '|<',\n        _this = this;\n    var lis = data.content.map(function (ele, index) {\n      if (index != 0 && index != data.content.length - 1) {\n        return React.createElement(\n          'li',\n          { 'data-id': index, onClick: _this.onClick, className: ele.class },\n          ele.text\n        );\n      }\n    });\n    return React.createElement(\n      'div',\n      { className: 'footerbtn' },\n      React.createElement(\n        'ul',\n        null,\n        React.createElement(\n          'li',\n          { 'data-id': 'prevPage', 'data-index': 0, onClick: _this.onclickpage.bind(_this), className: 'ysp-prePage' },\n          kr\n        ),\n        React.createElement(\n          'li',\n          { 'data-id': 'prev', onClick: _this.onclickpreOnce.bind(_this), className: 'ysp-preOnce' },\n          str\n        ),\n        lis,\n        React.createElement(\n          'li',\n          { 'data-id': 'next', onClick: _this.onClicknextOnce.bind(_this), className: 'ysp-nextOne' },\n          '>'\n        ),\n        React.createElement(\n          'li',\n          { 'data-id': 'nextPage', 'data-index': data.content.length - 1, onClick: _this.onclickpage.bind(_this), className: 'ysp-nextPage' },\n          '>|'\n        )\n      )\n    );\n  }\n});";
    },

    getData_control196_oLyBgO: function (elem) {
      if (!elem) {
        return;
      }var data = { content: [] };data.title = '查询条件';var trs = elem.querySelectorAll('tr'); //循环每个tr
      for (var i = 0; i < trs.length; i++) {
        var trArr = { leftTitle: [], sel: { optType: [], opt: [], opted: [] }, iptVal: [], iptType: [] };if (i == 0) {
          var tds = trs[i].querySelectorAll('td'); //循环第一行中的td
          for (var j = 0; j < tds.length; j++) {
            var tdArr = [];tdArr.push(tds[j].querySelector('label').textContent.trim());trArr.leftTitle.push(tdArr); //遍历select			
            var sel = tds[0].querySelectorAll('select');if (tds[j].querySelector('select') != null) {
              for (var k = 0; k < sel.length; k++) {
                var selArr = []; //selArr.push(sel[k].querySelector("option[selected='selected']").textContent);
                var opted = [];var opt = sel[k].querySelectorAll('option');for (var m = 0; m < opt.length; m++) {
                  // if (opt[m].selected == true) {
                  //   selArr.push(opt[m].textContent);
                  // }
                  opted.push(opt[m].selected);selArr.push(opt[m].textContent);
                }trArr.sel.opt.push(selArr);trArr.sel.opted.push(opted);trArr.sel.optType.push(sel[k].getAttribute('name'));
              }
            }
          }trArr.iptType.push(tds[1].querySelectorAll('input')[0].getAttribute('name'));trArr.iptType.push(tds[1].querySelectorAll('input')[1].getAttribute('name'));trArr.iptType.push(tds[2].querySelectorAll('input')[0].getAttribute('name'));trArr.iptVal.push(tds[1].querySelectorAll('input')[0].value);trArr.iptVal.push(tds[1].querySelectorAll('input')[1].value);trArr.iptVal.push(tds[2].querySelectorAll('input')[0].value);
        } else if (i == 1) {
          var tds = trs[i].querySelectorAll('td'); //循环第一行中的td
          for (var j = 0; j < tds.length; j++) {
            var tdArr = [];if (tds[j].textContent.replace(/\s+/g, '') != '') {
              tdArr.push(tds[j].querySelector('label').textContent.trim());trArr.leftTitle.push(tdArr); //遍历select			
              var sel = tds[2].querySelectorAll('select');if (tds[j].querySelector('select') != null) {
                for (var k = 0; k < sel.length; k++) {
                  var selArr = []; //selArr.push(sel[k].querySelector("option[selected='selected']").textContent);
                  var opt = sel[k].querySelectorAll('option'); // for (var m = 0; m < opt.length; m++) {
                  // if (opt[m].selected == true) {
                  //   selArr.push(opt[m].textContent);
                  // }
                  // selArr.push(opt[m].textContent);
                  // }
                  trArr.sel.opt.push(selArr);trArr.sel.optType.push(sel[k].getAttribute('name'));
                }
              }
            }
          }trArr.iptType.push(tds[0].querySelectorAll('input')[0].getAttribute('name'));trArr.iptType.push(tds[1].querySelectorAll('input')[0].getAttribute('name'));trArr.iptType.push(tds[1].querySelectorAll('input')[1].getAttribute('name'));trArr.iptVal.push(tds[0].querySelectorAll('input')[0].value);trArr.iptVal.push(tds[1].querySelectorAll('input')[1].checked);trArr.iptVal.push(tds[1].querySelectorAll('input')[0].checked);
        } else if (i == 2) {
          var tds = trs[i].querySelectorAll('td');for (var j = 0; j < tds.length; j++) {
            var tdArr = [];if (tds[j].textContent.trim() != "") {
              tdArr.push(tds[j].querySelector('label').textContent.trim());trArr.leftTitle.push(tdArr);
            }
          }trArr.iptType.push(tds[0].querySelectorAll('input')[0].getAttribute('name'));trArr.iptVal.push(tds[0].querySelectorAll('input')[0].value);
        } else if (i == 3) {
          trArr.btn = trs[i].querySelector('button').textContent.trim();
        }data.content.push(trArr);
      }return data;
    },
    doAction_uiControl196_xvltbE: function (data, elem) {
      if (data.eventType == 'onchange') {
        // debugger;
        var selId = data.dataCustom[0];var index = data.dataCustom[1];var txt = data.dataCustom[2];var target = elem.querySelector("select[name='" + selId + "']");elem.querySelector("select[name='" + selId + "']").querySelectorAll('option')[index].selected = true;target.dispatchEvent(new Event('change'));
      } else if (data.eventType == 'onclickDate') {
        var selId = data.dataCustom[0];var val = data.dataCustom[1];var target = elem.querySelector("input[name='" + selId + "']");target.value = val;target.focus();
      } else if (data.eventType == 'onblur') {
        var selId = data.dataCustom[0];var val = data.dataCustom[1];var target = elem.querySelector("input[name='" + selId + "']");target.value = val;
      } else if (data.eventType == 'onclickRadius') {
        var index = data.dataCustom[0];var sel = data.dataCustom[1];var target = elem.querySelectorAll("input[type='radio']")[index];target.checked = sel;target.click();
      } else if (data.eventType == 'onclickBtn') {
        var target = elem.querySelector("button");target.click();
      }
    },
    getTemplate_uiControl196_xvltbE: function () {
      var selfTemplate = "module.exports = React.createClass({\n  onchange:function(e){\n    //debugger;\n    var target=e.target;\n    var handler=this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'onchange',\n        data:[target.getAttribute('name'),target.selectedIndex]\n      })\n    }\n  },\n  onclickDate:function(e){\n    var target=e.target;\n    var handler=this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'onclickDate',\n        data:[target.getAttribute('name'),target.value]\n      })\n    }\n  },\n  onblur:function(e){\n    var target=e.target;\n    var handler=this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'onblur',\n        data:[target.getAttribute('name'),target.value]\n      })\n    }\n  },\n  onclickRadius:function(e){\n    var target=e.target;\n    var handler=this.props.customHandler;\n    var ind=target.dataset.index;\n    var sel=target.dataset.checked;\n    if(handler){\n      handler({\n        eventType:'onclickRadius',\n        data:[ind,sel]\n      })\n    }\n  },\n  onclickBtn:function(e){\n    var target=e.target;\n    var handler=this.props.customHandler;\n    \n    if(handler){\n      handler({\n        eventType:'onclickBtn',\n        \n      })\n    }\n  },\n  disclick:function(e){\n    var target = e.target;\n    if(target.className == 'Nex'){\n      target.className= 'Block';\n      var selectBar = target.parentElement.parentElement;\n      var divs = selectBar.querySelectorAll('div.ysp-selectBar-content-tt');\n      for(var i=0;i<divs.length;i++){\n        divs[i].style.display = 'none'\n      }\n      selectBar.lastChild.style.display = 'none';\n    }else{\n      target.className= 'Nex';\n      var selectBar = target.parentElement.parentElement;\n      var divs = selectBar.querySelectorAll('div.ysp-selectBar-content-tt');\n      for(var i=0;i<divs.length;i++){\n        divs[i].style.display = 'block'\n      }\n      selectBar.lastChild.style.display = 'block';\n    }\n  },\n  render: function() {\n    var data=this.props.customData;\n    var _this=this;\n   //console.log(data.content[0]);\n    var list0=data.content[0].sel.opt.map(function(d,i){ \n        var opts=d.map(function(opt,optId){\n          if(optId>=0){\n            return(\n                <option selected={data.content[0].sel.opted[i][optId]}>{opt}</option>\n            )\n          }\n            \n          \n          \n        })\n        return(              \n            <select name={data.content[0].sel.optType[i]} onChange={_this.onchange.bind(_this)}>{opts}</select>           \n        )\n    })\n \n    return (\n      <div className='ysp-selectBar-tt'>\n        <div className='ysp-selectBar-title-tt'><p>{data.title}</p><span onClick={this.disclick} className='Block'></span></div>\n        <div className='ysp-selectBar-content-tt'>\n          \t<div>\n          \t\t\t\t<p>{data.content[0].leftTitle[0]}</p>\n        \t\t\t\t\t{list0}\n              \t\t<p>\u2014></p>\n          \t</div>\n          \t<div>\n          \t\t\t\t<p>{data.content[0].leftTitle[1]}</p>\n                  <AInput type='date' name={data.content[0].iptType[0]} value={data.content[0].iptVal[0]} onBlur={_this.onclickDate.bind(_this)}/>\n                  \n                  <AInput type='date' name={data.content[0].iptType[1]} value={data.content[0].iptVal[1]} onBlur={_this.onclickDate.bind(_this)}/>\n              \t\t<p>\u81F3</p>\n          \t</div>\n          \t<div>\n          \t\t\t<p>{data.content[0].leftTitle[2]}</p>\n          \t\t\t<AInput type='text' name={data.content[0].iptType[2]} value={data.content[0].iptVal[2]} onBlur={_this.onblur.bind(_this)}/>\n          \t</div>\n          \t\n        </div>\n     \t\t<div className='ysp-selectBar-content-tt'>\n        \t\t<div>\n          \t\t\t<p>{data.content[1].leftTitle[0]}</p>\n          \t\t\t<AInput type='text' name={data.content[1].iptType[0]} value={data.content[1].iptVal[0]} onBlur={_this.onblur.bind(_this)}/>\n          \t</div>\n          \t<div>\n            \t\t<p>{data.content[1].leftTitle[1]}</p>\n              \t<p className='ysp-radius-btn-tt'>\n              \t\t\t<span data-index='0' onClick={_this.onclickRadius.bind(_this)} data-checked={data.content[1].iptVal[2]} className={data.content[1].iptVal[2]==true?\"ysp-RadiusSelected-tt\":\"ysp-RadiusUnselected-tt\"}>\u6D41\u7A0B\u7C7B\u522B\u6A21\u5F0F</span>\n                <span data-index='1' onClick={_this.onclickRadius.bind(_this)} data-checked={data.content[1].iptVal[1]} className={data.content[1].iptVal[1]==true?\"ysp-RadiusSelected-tt\":\"ysp-RadiusUnselected-tt\"}>\u65F6\u95F4\u6A21\u5F0F</span>\n              \t</p>\n                \n            </div>\n          \t\n          \t\n          \t\n        </div>\n        <div className='ysp-selectBar-content-tt'>\n        \t<div>\n          \t<p>{data.content[2].leftTitle[0]}</p>\n          \t<AInput type='text' name={data.content[2].iptType[0]} value={data.content[2].iptVal[0]} onBlur={_this.onblur.bind(_this)}/>\n          </div>\n        </div>\n        <div className='ysp-selectBarBtn-tt'>\n        \t<button onClick={_this.onclickBtn.bind(_this)}>{data.content[3].btn}</button>\n        </div>\n      </div>\n    )\n  }\n});";
      return "'use strict';\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  onchange: function onchange(e) {\n    //debugger;\n    var target = e.target;\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: 'onchange',\n        data: [target.getAttribute('name'), target.selectedIndex]\n      });\n    }\n  },\n  onclickDate: function onclickDate(e) {\n    var target = e.target;\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: 'onclickDate',\n        data: [target.getAttribute('name'), target.value]\n      });\n    }\n  },\n  onblur: function onblur(e) {\n    var target = e.target;\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: 'onblur',\n        data: [target.getAttribute('name'), target.value]\n      });\n    }\n  },\n  onclickRadius: function onclickRadius(e) {\n    var target = e.target;\n    var handler = this.props.customHandler;\n    var ind = target.dataset.index;\n    var sel = target.dataset.checked;\n    if (handler) {\n      handler({\n        eventType: 'onclickRadius',\n        data: [ind, sel]\n      });\n    }\n  },\n  onclickBtn: function onclickBtn(e) {\n    var target = e.target;\n    var handler = this.props.customHandler;\n\n    if (handler) {\n      handler({\n        eventType: 'onclickBtn'\n\n      });\n    }\n  },\n  disclick: function disclick(e) {\n    var target = e.target;\n    if (target.className == 'Nex') {\n      target.className = 'Block';\n      var selectBar = target.parentElement.parentElement;\n      var divs = selectBar.querySelectorAll('div.ysp-selectBar-content-tt');\n      for (var i = 0; i < divs.length; i++) {\n        divs[i].style.display = 'none';\n      }\n      selectBar.lastChild.style.display = 'none';\n    } else {\n      target.className = 'Nex';\n      var selectBar = target.parentElement.parentElement;\n      var divs = selectBar.querySelectorAll('div.ysp-selectBar-content-tt');\n      for (var i = 0; i < divs.length; i++) {\n        divs[i].style.display = 'block';\n      }\n      selectBar.lastChild.style.display = 'block';\n    }\n  },\n  render: function render() {\n    var data = this.props.customData;\n    var _this = this;\n    //console.log(data.content[0]);\n    var list0 = data.content[0].sel.opt.map(function (d, i) {\n      var opts = d.map(function (opt, optId) {\n        if (optId >= 0) {\n          return React.createElement(\n            'option',\n            { selected: data.content[0].sel.opted[i][optId] },\n            opt\n          );\n        }\n      });\n      return React.createElement(\n        'select',\n        { name: data.content[0].sel.optType[i], onChange: _this.onchange.bind(_this) },\n        opts\n      );\n    });\n\n    return React.createElement(\n      'div',\n      { className: 'ysp-selectBar-tt' },\n      React.createElement(\n        'div',\n        { className: 'ysp-selectBar-title-tt' },\n        React.createElement(\n          'p',\n          null,\n          data.title\n        ),\n        React.createElement('span', { onClick: this.disclick, className: 'Block' })\n      ),\n      React.createElement(\n        'div',\n        { className: 'ysp-selectBar-content-tt' },\n        React.createElement(\n          'div',\n          null,\n          React.createElement(\n            'p',\n            null,\n            data.content[0].leftTitle[0]\n          ),\n          list0,\n          React.createElement(\n            'p',\n            null,\n            '\\u2014>'\n          )\n        ),\n        React.createElement(\n          'div',\n          null,\n          React.createElement(\n            'p',\n            null,\n            data.content[0].leftTitle[1]\n          ),\n          React.createElement(AInput, { type: 'date', name: data.content[0].iptType[0], value: data.content[0].iptVal[0], onBlur: _this.onclickDate.bind(_this) }),\n          React.createElement(AInput, { type: 'date', name: data.content[0].iptType[1], value: data.content[0].iptVal[1], onBlur: _this.onclickDate.bind(_this) }),\n          React.createElement(\n            'p',\n            null,\n            '\\u81F3'\n          )\n        ),\n        React.createElement(\n          'div',\n          null,\n          React.createElement(\n            'p',\n            null,\n            data.content[0].leftTitle[2]\n          ),\n          React.createElement(AInput, { type: 'text', name: data.content[0].iptType[2], value: data.content[0].iptVal[2], onBlur: _this.onblur.bind(_this) })\n        )\n      ),\n      React.createElement(\n        'div',\n        { className: 'ysp-selectBar-content-tt' },\n        React.createElement(\n          'div',\n          null,\n          React.createElement(\n            'p',\n            null,\n            data.content[1].leftTitle[0]\n          ),\n          React.createElement(AInput, { type: 'text', name: data.content[1].iptType[0], value: data.content[1].iptVal[0], onBlur: _this.onblur.bind(_this) })\n        ),\n        React.createElement(\n          'div',\n          null,\n          React.createElement(\n            'p',\n            null,\n            data.content[1].leftTitle[1]\n          ),\n          React.createElement(\n            'p',\n            { className: 'ysp-radius-btn-tt' },\n            React.createElement(\n              'span',\n              { 'data-index': '0', onClick: _this.onclickRadius.bind(_this), 'data-checked': data.content[1].iptVal[2], className: data.content[1].iptVal[2] == true ? \"ysp-RadiusSelected-tt\" : \"ysp-RadiusUnselected-tt\" },\n              '\\u6D41\\u7A0B\\u7C7B\\u522B\\u6A21\\u5F0F'\n            ),\n            React.createElement(\n              'span',\n              { 'data-index': '1', onClick: _this.onclickRadius.bind(_this), 'data-checked': data.content[1].iptVal[1], className: data.content[1].iptVal[1] == true ? \"ysp-RadiusSelected-tt\" : \"ysp-RadiusUnselected-tt\" },\n              '\\u65F6\\u95F4\\u6A21\\u5F0F'\n            )\n          )\n        )\n      ),\n      React.createElement(\n        'div',\n        { className: 'ysp-selectBar-content-tt' },\n        React.createElement(\n          'div',\n          null,\n          React.createElement(\n            'p',\n            null,\n            data.content[2].leftTitle[0]\n          ),\n          React.createElement(AInput, { type: 'text', name: data.content[2].iptType[0], value: data.content[2].iptVal[0], onBlur: _this.onblur.bind(_this) })\n        )\n      ),\n      React.createElement(\n        'div',\n        { className: 'ysp-selectBarBtn-tt' },\n        React.createElement(\n          'button',\n          { onClick: _this.onclickBtn.bind(_this) },\n          data.content[3].btn\n        )\n      )\n    );\n  }\n});";
    },
    getData_control226_ysPTBF: function (elem) {
      if (!elem) {
        return;
      }var data = { flag: [] };data.flag.push(elem.previousElementSibling.previousElementSibling.querySelectorAll('li')[0].querySelector('a').getAttribute("class"));var lis = elem.querySelectorAll("li");for (var i = 0; i < lis.length - 1; i++) {
        var cla = lis[i].querySelector("a").getAttribute("class");data.flag.push(cla);
      }return data;
    },
    doAction_uiControl226_QGhOPy: function (data, elem) {
      if ('click' == data.eventType) {
        var title = data.dataCustom;if ('待办' == title) {
          elem.querySelectorAll("li")[0].querySelector("a").click();
        } else {
          // var url = ysp.appMain.getActiveUrl();
          // ysp.appMain.openWindow(url);
          elem.querySelectorAll("li")[1].querySelector("a").click();
        }
      }if (data.eventType == 'onclick') {
        elem.previousElementSibling.previousElementSibling.querySelectorAll('li')[0].querySelector('a').click();
      }
    },
    getTemplate_uiControl226_QGhOPy: function () {
      var selfTemplate = 'module.exports = React.createClass({\n  onclick:function(e){\n    var handler = this.props.customHandler;\n    var target = e.target;\n    if(handler){\n      handler({\n        eventType:\'onclick\'\n      })\n    }\n  },\n  handlerClick:function(e){\n    var target = e.target;\n    var title = target.dataset.title;\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        data: title,\n        eventType:\'click\'\n      })\n    }\n  },\n  render: function() {\n    var data = this.props.customData && this.props.customData.flag || [];\n    return (\n      <div class="ysp-index-title">\n        <div className = {data[0] == "active" ? "ysp-index-title-color" : "ysp-index-title-noColor"} data-title = "\u5F85\u529E" onClick={this.onclick.bind(this)}>\u65B0\u5EFA\u7533\u8BF7</div>\n        <div className = {data[1] == "active" ? "ysp-index-title-color" : "ysp-index-title-noColor"} data-title = "\u5F85\u529E" onClick={this.handlerClick.bind(this)}>\u5F85\u529E</div>\n        <div className = {data[2] == "active" ? "ysp-index-title-color" : "ysp-index-title-noColor"} data-title = "\u5DF2\u529E" onClick={this.handlerClick.bind(this)}>\u5DF2\u529E</div>\n      </div>\n    )\n  }\n});';
      return '\'use strict\';\n\nmodule.exports = React.createClass({\n  displayName: \'exports\',\n\n  onclick: function onclick(e) {\n    var handler = this.props.customHandler;\n    var target = e.target;\n    if (handler) {\n      handler({\n        eventType: \'onclick\'\n      });\n    }\n  },\n  handlerClick: function handlerClick(e) {\n    var target = e.target;\n    var title = target.dataset.title;\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        data: title,\n        eventType: \'click\'\n      });\n    }\n  },\n  render: function render() {\n    var data = this.props.customData && this.props.customData.flag || [];\n    return React.createElement(\n      \'div\',\n      { \'class\': \'ysp-index-title\' },\n      React.createElement(\n        \'div\',\n        { className: data[0] == "active" ? "ysp-index-title-color" : "ysp-index-title-noColor", \'data-title\': \'\\u5F85\\u529E\', onClick: this.onclick.bind(this) },\n        \'\\u65B0\\u5EFA\\u7533\\u8BF7\'\n      ),\n      React.createElement(\n        \'div\',\n        { className: data[1] == "active" ? "ysp-index-title-color" : "ysp-index-title-noColor", \'data-title\': \'\\u5F85\\u529E\', onClick: this.handlerClick.bind(this) },\n        \'\\u5F85\\u529E\'\n      ),\n      React.createElement(\n        \'div\',\n        { className: data[2] == "active" ? "ysp-index-title-color" : "ysp-index-title-noColor", \'data-title\': \'\\u5DF2\\u529E\', onClick: this.handlerClick.bind(this) },\n        \'\\u5DF2\\u529E\'\n      )\n    );\n  }\n});';
    },
    getData_control123_Hc2vF3: function (elem) {
      //console.log(elem);
      if (!elem) {
        return "";
      }if (elem) {
        var data = [];var nodes = elem.children;for (var i = 0; i < nodes.length; i++) {
          if (nodes[i].textContent.trim() == '...') {
            data.push({ text: nodes[i].textContent.trim(), type: 'nextPage' });
          } else {
            data.push({ text: nodes[i].textContent.trim(), class: nodes[i].className });
          }
        }return data;
      }
    },
    doAction_uiControl123_i4qnyz: function (data, elem) {
      if (data.eventType == 'click') {
        //debugger;
        var index = parseInt(data.dataCustom);if (index == 1) {
          var target = elem.querySelectorAll('a')[index];target.click();
        } else {
          var target = elem.querySelectorAll('a')[index - 1];target.click();
        }
      } else if (data.eventType == 'onclickpage') {
        //debugger;
        var index = parseInt(data.dataCustom[0]);var id = data.dataCustom[1];if (id == 'prevPage') {
          var target = elem.querySelectorAll('a')[index];target.click();
        } else if (id == 'nextPage') {
          var target = elem.querySelectorAll('a')[index - 1];target.click();
        }
      } else if (data.eventType == 'onClicknextOnce') {
        // debugger;
        var trs = elem.querySelectorAll('a');var trsLen = trs.length;if (trs[trsLen - 2].textContent.trim() == '...') {
          var target = trs[trsLen - 2];target.click();
        }
      } else if (data.eventType == 'onclickpreOnce') {
        //debugger;
        var trs = elem.querySelectorAll('a');var trsLen = trs.length;if (trs[1].textContent.trim() == '...') {
          var target = trs[1];target.click();
        }
      } // } else if (data.eventType == 'onclickpreOnce') {
      //   // debugger;
      //   var child = elem.querySelectorAll('a');
      //   var end = parseInt(elem.querySelector('.cpb').textContent);
      //   for (var i = end; i > 0; i--) {
      //     if (i == 1) {
      //       alert('已经到首页了');
      //     } else {
      //       child[i - 1].click();
      //       break;
      //     }
      //   }
      // } else if (data.eventType == 'onClicknextOnce') {
      //   var child = elem.querySelectorAll('a');
      //   var start = parseInt(elem.querySelector('.cpb').textContent);
      //   for (var i = start; i < child.length; i++) {
      //     if (i == child.length - 1) {
      //       alert('已经到末页了');
      //     } else {
      //       child[i].click();
      //       break;
      //     }
      //   }
      // }
    },
    getTemplate_uiControl123_i4qnyz: function () {
      var selfTemplate = 'module.exports = React.createClass({\n  onClick:function(e){\n    var handler = this.props.customHandler;\n    var target = e.target;\n    if(handler){\n      handler({\n        eventType:\'click\',\n        data:target.getAttribute(\'data-id\')\n      })\n    }\n  },\n  onclickpage:function(e){\n    var target=e.target;\n    var handler=this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:\'onclickpage\',\n        data:[target.dataset.index,target.dataset.id]\n      })\n    }\n  },\n  onclickpreOnce:function(e){\n    var handler = this.props.customHandler;\n    var target = e.target;\n    if(handler){\n      handler({\n        eventType:\'onclickpreOnce\'\n        \n      })\n    }\n  },\n  onClicknextOnce:function(e){\n    var handler = this.props.customHandler;\n    var target = e.target;\n    if(handler){\n      handler({\n        eventType:\'onClicknextOnce\',\n        \n      })\n    }\n  },\n  render: function() {\n    var data = this.props.customData;\n    if(!data){\n      return (\n        <div>\n        \t\n        </div>\n      )\n    }\n    var str = \'<\',kr = \'|<\',\n        _this = this;\n    var lis = data.map(function(ele,index){\n      if(index!=0&&index!=data.length-1){\n        if(ele.type!=\'nextPage\'){\n           return(\n              <li data-id={index} onClick={_this.onClick} className={ele.class}>{ele.text}</li>\n            )\n        }\n        \n      }\n    })\n    return (\n      <div className=\'footerbtn\'>\n        <ul>\n          <span>\n          \t\t<li data-id=\'prevPage\' data-index={0} onClick={_this.onclickpage.bind(_this)} className=\'ysp-prePage\'>{kr}</li>\n          \t\t{data[1].type==\'nextPage\'?<li data-id=\'prev\' onClick={_this.onclickpreOnce.bind(_this)} className=\'ysp-preOnce\'>{str}</li>:\'\'}\n          </span>\n          \n          <span className=\'ysp-pageBtnScroll-tt\'><span>{lis}</span></span>\n          <span>\n          \t\t{data[data.length-2].type==\'nextPage\'?<li data-id=\'next\' onClick={_this.onClicknextOnce.bind(_this)} className=\'ysp-nextOne\'>></li>:\'\'}\n          \t\t<li data-id=\'nextPage\' data-index={data.length-1} onClick={_this.onclickpage.bind(_this)} className=\'ysp-nextPage\'>>|</li>\n          </span>\n         \n        </ul>\n      </div>\n    )\n  }\n});';
      return "'use strict';\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  onClick: function onClick(e) {\n    var handler = this.props.customHandler;\n    var target = e.target;\n    if (handler) {\n      handler({\n        eventType: 'click',\n        data: target.getAttribute('data-id')\n      });\n    }\n  },\n  onclickpage: function onclickpage(e) {\n    var target = e.target;\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: 'onclickpage',\n        data: [target.dataset.index, target.dataset.id]\n      });\n    }\n  },\n  onclickpreOnce: function onclickpreOnce(e) {\n    var handler = this.props.customHandler;\n    var target = e.target;\n    if (handler) {\n      handler({\n        eventType: 'onclickpreOnce'\n\n      });\n    }\n  },\n  onClicknextOnce: function onClicknextOnce(e) {\n    var handler = this.props.customHandler;\n    var target = e.target;\n    if (handler) {\n      handler({\n        eventType: 'onClicknextOnce'\n\n      });\n    }\n  },\n  render: function render() {\n    var data = this.props.customData;\n    if (!data) {\n      return React.createElement('div', null);\n    }\n    var str = '<',\n        kr = '|<',\n        _this = this;\n    var lis = data.map(function (ele, index) {\n      if (index != 0 && index != data.length - 1) {\n        if (ele.type != 'nextPage') {\n          return React.createElement(\n            'li',\n            { 'data-id': index, onClick: _this.onClick, className: ele.class },\n            ele.text\n          );\n        }\n      }\n    });\n    return React.createElement(\n      'div',\n      { className: 'footerbtn' },\n      React.createElement(\n        'ul',\n        null,\n        React.createElement(\n          'span',\n          null,\n          React.createElement(\n            'li',\n            { 'data-id': 'prevPage', 'data-index': 0, onClick: _this.onclickpage.bind(_this), className: 'ysp-prePage' },\n            kr\n          ),\n          data[1].type == 'nextPage' ? React.createElement(\n            'li',\n            { 'data-id': 'prev', onClick: _this.onclickpreOnce.bind(_this), className: 'ysp-preOnce' },\n            str\n          ) : ''\n        ),\n        React.createElement(\n          'span',\n          { className: 'ysp-pageBtnScroll-tt' },\n          React.createElement(\n            'span',\n            null,\n            lis\n          )\n        ),\n        React.createElement(\n          'span',\n          null,\n          data[data.length - 2].type == 'nextPage' ? React.createElement(\n            'li',\n            { 'data-id': 'next', onClick: _this.onClicknextOnce.bind(_this), className: 'ysp-nextOne' },\n            '>'\n          ) : '',\n          React.createElement(\n            'li',\n            { 'data-id': 'nextPage', 'data-index': data.length - 1, onClick: _this.onclickpage.bind(_this), className: 'ysp-nextPage' },\n            '>|'\n          )\n        )\n      )\n    );\n  }\n});";
    }
  }, "haveDoneIndex");
})(window, ysp);