webpackJsonp([0],{"991W":function(t,e){},Db0X:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n("7+uW"),a={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var i=n("VU/8")({name:"App"},a,!1,function(t){n("neBk")},null,null).exports,r=n("/ocq"),o={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"cate"},[n("ul",{staticClass:"cate-body"},t._l(t.cate,function(e){return n("li",{key:e.id,staticClass:"cate-body-list"},[n("router-link",{staticClass:"cate-list-href",attrs:{to:{path:"/jxkh",query:{type:e.url}}}},[n("h5",{staticClass:"cate-list-text"},[t._v(t._s(e.name))])])],1)}),0)])},staticRenderFns:[]};var c=n("VU/8")({name:"cate",data:function(){return{msg:"文字单位测试",cate:[{id:"1",name:"绩效考核(组长)",url:"zsld"},{id:"1",name:"绩效考核(组员)",url:"qtld"},{id:"1",name:"绩效考核(统筹)",url:"bmzj"},{id:"1",name:"绩效考核(公司通用)",url:"common"},{id:"1",name:"项目考核",url:"project"},{id:"1",name:"定岗定级考核",url:"assess"}]}}},o,!1,function(t){n("Tbbc")},null,null).exports,d={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"headBody"},[n("h4",{staticClass:"headBody-h3"},[t._v(t._s(t.msg))]),t._v(" "),n("ul",{staticClass:"headBody-title"},t._l(t.textData,function(e,s){return n("li",{key:s},[n("span",[t._v(t._s(e.title))]),t._v("："),n("span",[t._v(t._s(e.data))])])}),0)])},staticRenderFns:[]};var l=n("VU/8")({name:"headw",data:function(){return{msg:"日常行为考核表",textData:[{title:"姓名",data:"张三"},{title:"职位",data:"web前端"},{title:"部门",data:"项目部"},{title:"考核日期",data:"2020-04-01"}]}}},d,!1,function(t){n("Db0X")},null,null).exports,u={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"tip-box"},[e("div",{staticClass:"tip"},[this._v("\n\t\t"+this._s(this.msg)+"\n\t")])])},staticRenderFns:[]};var p={name:"tableBody",components:{Tip:n("VU/8")({name:"tip",data:function(){return{msg:"提交成功"}}},u,!1,function(t){n("bKMG")},null,null).exports},data:function(){return{msg:"this is tableBody.vue test",tableData:[{id:"1",type:"出勤考核5%",content:"全勤",cate:"优秀",score:"5",zsld:"张三",qtld:"李四",bmzj:"杨广",rowspan:"",isHidden:!1},{id:"2",type:"出勤考核5%",content:"偶尔请假、迟到（一次扣一分）",cate:"优秀",score:"5",zsld:"张三",qtld:"李四",bmzj:"杨广",rowspan:"",isHidden:!1},{id:"3",type:"日常管理5%",content:"能按照公司规定完成打卡、填写考核表、绩效考核等相关工作",cate:"优秀",score:"5",zsld:"张三",qtld:"李四",bmzj:"杨广",rowspan:"",isHidden:!1},{id:"4",type:"出勤考核5%",content:"经常迟到、请假或旷工情况",cate:"优秀",score:"5",zsld:"张三",qtld:"李四",bmzj:"杨广",rowspan:"",isHidden:!1},{id:"5",type:"日常管理5%",content:"出现未能按照公司规定完成打卡、填写考核表、绩效考核等相关工作三次以内的",cate:"优秀",score:"5",zsld:"张三",qtld:"李四",bmzj:"杨广",rowspan:"",isHidden:!1},{id:"6",type:"日常管理5%",content:"出现未能按照公司规定完成打卡、填写考核表、绩效考核等相关工作三次以上的",cate:"优秀",score:"5",zsld:"张三",qtld:"李四",bmzj:"杨广",rowspan:"",isHidden:!1},{id:"7",type:"责任感15%",content:"信守职责，勇于承担责任，主动维护公司利益。工作细致、严谨，热情主动完成岗位本职工作，能很好的完成任务",cate:"优秀",score:"5",zsld:"张三",qtld:"李四",bmzj:"杨广",rowspan:"",isHidden:!1},{id:"8",type:"责任感15%",content:"工作努力，为实现目标竭尽全力态度积极。勇于挑战、不畏困难，能较好地完成任务",cate:"优秀",score:"5",zsld:"张三",qtld:"李四",bmzj:"杨广",rowspan:"",isHidden:!1},{id:"9",type:"责任感15%",content:"有责任心，能自动自发地完成任务、忠于本岗位职守，能够在本岗位上面维护公司利益",cate:"优秀",score:"5",zsld:"张三",qtld:"李四",bmzj:"杨广",rowspan:"",isHidden:!1},{id:"10",type:"责任感15%",content:"交付的工作需要督促才能完成、在公司督促下能够维护公司利益",cate:"优秀",score:"5",zsld:"张三",qtld:"李四",bmzj:"杨广",rowspan:"",isHidden:!1},{id:"11",type:"责任感15%",content:"敷衍了事、态度傲慢、无责任心、做事粗心大意、损害公司利益",cate:"优秀",score:"5",zsld:"张三",qtld:"李四",bmzj:"杨广",rowspan:"",isHidden:!1}],newTableData:[],tipFlag:!1,showType:"",showTypeS:""}},methods:{listSort:function(t){return function(e,n){var s=e[t],a=n[t];return s<a?-1:s>a?1:0}},getRepeatNum:function(t){for(var e={},n=[],s=0,a=t.length;s<a;s++){var i=t[s].type;e[i]=e[i]+1||1}var r=function(e){c=(t||[]).findIndex(function(t){return t.type==e}),n.push(c)};for(var o in e){var c;r(o)}return[e,n]},getResetList:function(t){for(var e=this.$options.methods.getRepeatNum(this.tableData.sort(this.$options.methods.listSort("type"))),n=0;n<t.length;n++){for(var s in e[0])t[n].type==s&&(t[n].rowspan=e[0][s]);for(var a in e[1])n==e[1][a]&&(t[n].isHidden=!0)}return t},tipShow:function(){var t=this;this.tipFlag=!0,setTimeout(function(){t.tipFlag=!1},1500)}},created:function(){switch(this.newTableData=this.getResetList(this.tableData),this.showTypeS=this.$route.query.type,console.log(this.showTypeS),this.$route.query.type){case"zsld":this.showType="直属领导";break;case"qtld":this.showType="其他领导"}},beforeMount:function(){},mounted:function(){}},h={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tableBody"},[n("table",{staticClass:"tableBody-table",attrs:{border:"1",cellspacing:"0",cellpadding:"0"}},[n("thead",[n("tr",{staticClass:"tableBody-tr"},[n("th",{attrs:{colspan:"2"}},[t._v("项目及考核内容")]),t._v(" "),n("th",{attrs:{colspan:"2"}},[t._v(" 分值\t")]),t._v(" "),n("th",[t._v(t._s(t.showType))])])]),t._v(" "),n("tbody",[t._l(t.tableData,function(e){return n("tr",{key:e.id,staticClass:"tableBody-tr tableBody-tr-two"},[n("td",{directives:[{name:"show",rawName:"v-show",value:e.isHidden,expression:"item.isHidden"}],staticClass:"vertical",attrs:{rowspan:e.rowspan}},[t._v("\n\t\t\t\t\t"+t._s(e.type)+"\n\t\t\t\t")]),t._v(" "),n("td",{staticStyle:{"max-width":"3rem"}},[t._v(t._s(e.content)+" ")]),t._v(" "),n("td",[t._v(t._s(e.cate))]),t._v(" "),n("td",[t._v(t._s(e.score))]),t._v(" "),n("td",[n("input",{staticClass:"td-input",attrs:{type:"",name:""},domProps:{value:e[t.showTypeS]}})])])}),t._v(" "),t._m(0)],2)]),t._v(" "),n("div",{staticClass:"btn"},[n("button",{staticClass:"btn-submit",attrs:{type:"button"},on:{click:function(e){return t.tipShow()}}},[t._v("\n\t\t\t提交\n\t\t")])]),t._v(" "),n("transition",{attrs:{name:"slide-fade"}},[n("Tip",{directives:[{name:"show",rawName:"v-show",value:t.tipFlag,expression:"tipFlag"}]})],1)],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",{attrs:{colspan:"4"}},[this._v("得分合计")]),this._v(" "),e("td",[this._v("10")])])}]};var v={name:"jxkh",data:function(){return{msg:"文字单位测试"}},components:{HeadBody:l,TableBody:n("VU/8")(p,h,!1,function(t){n("T4K5")},null,null).exports}},m={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"homeBody"},[e("HeadBody"),this._v(" "),e("TableBody")],1)},staticRenderFns:[]};var f=n("VU/8")(v,m,!1,function(t){n("yBz1")},null,null).exports;s.a.use(r.a);var _=new r.a({routes:[{path:"/",name:"cate",component:c},{path:"/cate/:type",component:f},{path:"/jxkh",name:"jxkh",component:f}]});n("QKTF"),n("991W");s.a.config.productionTip=!1,new s.a({el:"#app",router:_,components:{App:i},template:"<App/>"})},T4K5:function(t,e){},Tbbc:function(t,e){},bKMG:function(t,e){},neBk:function(t,e){},yBz1:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.865a8a24c328080be67b.js.map