(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["me.overview"],{"0978":function(t,e,n){var r={"./seed-1.png":"1a38","./seed-2.png":"b75c","./seed-3.png":"2b09","./seed-4.png":"cb8c","./seed-5.png":"558f"};function u(t){var e=a(t);return n(e)}function a(t){if(!n.o(r,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return r[t]}u.keys=function(){return Object.keys(r)},u.resolve=a,t.exports=u,u.id="0978"},1946:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"overview"},[r("div",{staticClass:"img"},[r("img",{attrs:{src:n("0978")("./seed-"+(t.$route.query.seedId%5=="0"?5:t.$route.query.seedId%5)+".png"),alt:""}})]),r("div",{staticClass:"title"},[t._v("Crop Production Data Provided by FAO")]),r("div",{staticClass:"box",domProps:{innerHTML:t._s(t.dataObj.seedIntroduction)}}),r("div",{staticClass:"null"})])},u=[],a=n("d415"),o={data(){return{title:"green plant",context:"context",dataObj:{}}},mounted(){this.getData()},methods:{getData(){let t={id:this.$route.query.seedId};Object(a["j"])(t).then(t=>{let e=t.data;e.seedIntroduction&&(e.seedIntroduction=e.seedIntroduction.replace(/\n/g,"<br/>")),this.dataObj=e})}}},d=o,c=(n("a7b1"),n("2877")),i=Object(c["a"])(d,r,u,!1,null,"20d1a863",null);e["default"]=i.exports},"1a38":function(t,e,n){t.exports=n.p+"static/img/seed-1.e8d2f588.png"},"2b09":function(t,e,n){t.exports=n.p+"static/img/seed-3.182912ba.png"},"558f":function(t,e,n){t.exports=n.p+"static/img/seed-5.53bba765.png"},a7b1:function(t,e,n){"use strict";n("dbb9")},b75c:function(t,e,n){t.exports=n.p+"static/img/seed-2.970384bf.png"},cb8c:function(t,e,n){t.exports=n.p+"static/img/seed-4.4da74a22.png"},d415:function(t,e,n){"use strict";n.d(e,"a",(function(){return u})),n.d(e,"c",(function(){return a})),n.d(e,"b",(function(){return o})),n.d(e,"e",(function(){return d})),n.d(e,"d",(function(){return c})),n.d(e,"f",(function(){return i})),n.d(e,"h",(function(){return s})),n.d(e,"g",(function(){return f})),n.d(e,"k",(function(){return m})),n.d(e,"i",(function(){return p})),n.d(e,"j",(function(){return b}));var r=n("b775");function u(t){return Object(r["a"])({url:"/farm/add",method:"post",data:t})}function a(t){return Object(r["a"])({url:"/farm/query",method:"get",params:t})}function o(t){return Object(r["a"])({url:"/farm/queryAll",method:"get",params:t})}function d(t){return Object(r["a"])({url:"/farm/queryByLocation",method:"get",params:t})}function c(t){return Object(r["a"])({url:"/farm/queryById",method:"get",params:t})}function i(t){return Object(r["a"])({url:"/farm/queryByProductName",method:"get",params:t})}function s(t){return Object(r["a"])({url:"/farm/queryByUserName",method:"get",params:t})}function f(t){return Object(r["a"])({url:"/farm/queryByTotalArea",method:"get",params:t})}function m(t){return Object(r["a"])({url:"/farm/revise",method:"put",data:t})}function p(t){return Object(r["a"])({url:"/seed/query",method:"get",params:t})}function b(t){return Object(r["a"])({url:"/seed/queryById",method:"get",params:t})}},dbb9:function(t,e,n){}}]);