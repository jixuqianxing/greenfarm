(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["me.goodsEdit"],{"139a":function(t,e,r){"use strict";r("6680")},"28e1":function(t,e,r){"use strict";r.d(e,"g",(function(){return a})),r.d(e,"l",(function(){return n})),r.d(e,"k",(function(){return o})),r.d(e,"m",(function(){return s})),r.d(e,"j",(function(){return u})),r.d(e,"e",(function(){return l})),r.d(e,"c",(function(){return c})),r.d(e,"d",(function(){return d})),r.d(e,"a",(function(){return p})),r.d(e,"f",(function(){return m})),r.d(e,"n",(function(){return h})),r.d(e,"o",(function(){return f})),r.d(e,"b",(function(){return g})),r.d(e,"i",(function(){return v})),r.d(e,"h",(function(){return b}));var i=r("b775");function a(t){return Object(i["a"])({url:"/product/queryTopN",method:"get",params:t})}function n(t){return Object(i["a"])({url:"/product/queryByCategory",method:"get",params:t})}function o(t){return Object(i["a"])({url:"/product/query",method:"get",params:t})}function s(t){return Object(i["a"])({url:"/product/queryById",method:"get",params:t})}function u(t){return Object(i["a"])({url:"/product/queryComment",method:"get",params:t})}function l(t){return Object(i["a"])({url:"/product/like",method:"put",params:t})}function c(t){return Object(i["a"])({url:"/product/add",method:"post",data:t})}function d(t){return Object(i["a"])({url:"/product/box",method:"post",data:t})}function p(t){return Object(i["a"])({url:"/shopping-cart/add",method:"post",params:t})}function m(t){return Object(i["a"])({url:"/shopping-cart/queryByUserName",method:"post",params:t})}function h(t){return Object(i["a"])({url:"/shopping-cart/remove",method:"post",params:t})}function f(t){return Object(i["a"])({url:"/shopping-cart/update",method:"post",params:t})}function g(t){return Object(i["a"])({url:"/order/add",method:"post",data:t})}function v(t){return Object(i["a"])({url:"/product/queryByFarmId",method:"get",params:t})}function b(t){return Object(i["a"])({url:"/plant-task/queryPlantTaskByProductId",method:"get",params:t})}},"2d97":function(t,e,r){"use strict";r.r(e);var i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"goods-edit"},[r("van-form",{attrs:{"validate-first":""},on:{failed:t.onFailed,submit:t.submit}},[r("van-cell-group",[r("van-field",{attrs:{value:t.owner,readonly:"","input-align":"right",label:"Owner",placeholder:"Please enter"}}),r("van-field",{attrs:{value:t.origin,readonly:"","input-align":"right",label:"Origin",placeholder:"Beijing"}})],1),r("van-cell-group",{staticStyle:{"margin-top":"0.26rem"}},[r("van-field",{attrs:{"input-align":"right",label:"Name",placeholder:"Enter plant name",required:"",rules:[{required:!0,message:"please input"}]},model:{value:t.productName,callback:function(e){t.productName=e},expression:"productName"}}),r("van-field",{attrs:{"input-align":"right",label:"Type",placeholder:"input"},scopedSlots:t._u([{key:"input",fn:function(){return[r("van-dropdown-menu",{staticStyle:{"padding-right":"0.2rem"},attrs:{"active-color":"#00B459"}},[r("van-dropdown-item",{attrs:{options:t.typeOptions},model:{value:t.type,callback:function(e){t.type=e},expression:"type"}})],1)]},proxy:!0}])}),r("van-field",{staticClass:"price",attrs:{"input-align":"right",label:"Price",type:"number",placeholder:"0",required:"",rules:[{required:!0,message:"please input"}]},model:{value:t.price,callback:function(e){t.price=e},expression:"price"}}),r("van-field",{staticClass:"weight",attrs:{"input-align":"right",label:"Weight",type:"number",placeholder:"0",required:"",rules:[{required:!0,message:"please input"}]},model:{value:t.weight,callback:function(e){t.weight=e},expression:"weight"}}),r("van-field",{attrs:{"input-align":"right",label:"Quantity",type:"number",placeholder:"Enter the number",required:"",rules:[{required:!0,message:"please input"}]},model:{value:t.quantity,callback:function(e){t.quantity=e},expression:"quantity"}}),r("van-field",{attrs:{"input-align":"right",label:"Certification",placeholder:"Enter award"},model:{value:t.certification,callback:function(e){t.certification=e},expression:"certification"}}),r("van-field",{staticClass:"weight",attrs:{"input-align":"right",label:"Carbon emissions",type:"number",placeholder:"0"},model:{value:t.carbonEmission,callback:function(e){t.carbonEmission=e},expression:"carbonEmission"}}),r("van-field",{attrs:{"input-align":"right",label:"Consumable integral",type:"number",placeholder:"0"},model:{value:t.integral,callback:function(e){t.integral=e},expression:"integral"}}),r("van-field",{staticClass:"price",attrs:{"input-align":"right",label:"Contributions",type:"number",placeholder:"0"},model:{value:t.contributions,callback:function(e){t.contributions=e},expression:"contributions"}}),r("div",{staticClass:"introduction"},[r("div",{staticClass:"title"},[t._v("Introduction")]),r("van-field",{attrs:{autosize:"",rows:"5",type:"textarea",clearable:"",maxlength:"100","show-word-limit":"",placeholder:"Please enter produce detail."},model:{value:t.advice,callback:function(e){t.advice=e},expression:"advice"}})],1)],1),r("van-popup",{directives:[{name:"show",rawName:"v-show",value:t.chooseType,expression:"chooseType"}],attrs:{position:"bottom"}},[r("van-picker",{attrs:{title:"picker","show-toolbar":"",columns:["VEGETABLES","FRUIT","SEEDS","FERTILIZER"]}})],1),r("div",{staticClass:"box"},[r("div",{staticClass:"boxtitle"},[r("span",{staticClass:"required"},[t._v("*")]),t._v(" Upload Images or Videos ")]),r("div",{staticClass:"boxcontent"},[t._l(t.videoList,(function(e){return r("div",{key:e,staticClass:"fileload",on:{click:function(r){t.videoPopupShow=!0,t.videoUrl=e.video}}},[r("img",{attrs:{src:t.imgurl(e.pic)}}),r("div",{staticClass:"videoIcon"},[r("svg-icon",{staticStyle:{"font-size":"0.4rem"},attrs:{iconClass:"begin"}})],1)])})),t._l(t.picList,(function(e,i){return r("div",{key:i,staticClass:"fileload"},[r("img",{attrs:{src:t.imgurl(e)},on:{click:function(e){return t.viewImg(i)}}})])})),t.uploadLoading?r("div",{staticClass:"fileload",staticStyle:{display:"flex","align-items":"center","justify-content":"center"}},[r("van-loading")],1):r("div",{staticClass:"fileload",on:{click:function(e){return t.upload()}}},[r("svg-icon",{staticStyle:{"font-size":"1.4rem"},attrs:{iconClass:"camera-blue-add"}})],1),t._l(4,(function(t){return r("div",{key:t,staticClass:"fileload"})}))],2)]),r("div",{staticClass:"commitBtn",attrs:{"native-type":"submit"}},[r("van-button",{attrs:{round:"",block:"",type:"info","native-type":"submit"}},[t._v("Upload Now")])],1)],1),t.videoPopupShow?r("div",{staticStyle:{position:"fixed","z-index":"2000",top:"0",left:"0",right:"0",bottom:"0",background:"#000"}},[r("div",{staticStyle:{width:"100%",background:"#fff",padding:"0.2rem 0.3rem","font-size":"0.4rem"},on:{click:function(e){t.videoPopupShow=!1}}},[r("van-icon",{staticStyle:{"padding-left":"0.06rem"},attrs:{name:"arrow-left",color:"#333333",size:"0.4rem"}})],1),r("div",{staticStyle:{height:"calc(100% - 0.9rem)",position:"relative"},attrs:{id:"videoContainer"}},[r("video",{staticStyle:{width:"100vw",height:"100%","background-color":"#000"},attrs:{src:t.videourl(t.videoUrl),controls:"controls",autoplay:""}})])]):t._e()],1)},a=[],n=r("28a2"),o=r("28e1"),s=r("d415"),u={components:{[n["a"].Component.name]:n["a"].Component},data(){return{chooseType:!1,owner:this.$store.state.user.username,origin:"",videoList:[],picList:[],advice:"",certification:"",quantity:"",weight:"",type:"fruit",price:"",productName:"",carbonEmission:"",integral:"",contributions:"",typeOptions:[{text:"vegetables",value:"vegetables"},{text:"fruit",value:"fruit"},{text:"seeds",value:"seeds"},{text:"fertilizer",value:"fertilizer"}],videoPopupShow:!1,videoUrl:"",uploadLoading:!1}},watch:{videoPopupShow(t,e){if(t){let t=document.body.scrollTop||document.documentElement.scrollTop;document.body.style.cssText+="position:fixed;width:100%;top:-"+t+"px;"}else{let t=document.body;t.style.position="";let e=t.style.top;document.body.scrollTop=document.documentElement.scrollTop=-parseInt(e),t.style.top=""}}},mounted(){this.queryFarm()},methods:{queryFarm(){Object(s["d"])({id:this.$route.query.farmId}).then(t=>{t.data&&(this.origin=t.data.location,this.owner=t.data.username)}).catch(t=>{console.log(t)})},submit(){if(0==this.picList.length)return void this.$toast({position:"bottom",message:"Please Upload Images"});let t=[];this.videoList.forEach(e=>{t.push(e.pic+","+e.video)}),Object(o["c"])({taskId:this.$route.query.taskId,farmId:this.$route.query.farmId,stepId:this.$route.query.stepId,landId:this.$route.query.landId,carbonCredit:this.integral,carbonEmission:this.carbonEmission,category:this.type,createTime:"2021-06-30T07:22:14.973Z",donateAmount:this.contributions,identifications:this.certification,introduction:this.introduction,likeNumber:0,modifyTime:"2021-06-30T07:22:14.973Z",number:this.quantity,price:this.price,productId:0,productName:this.productName,remark:"string",saleNumber:0,username:this.$store.state.user.username,imageUrl:this.picList,vedioUrl:t,weight:this.weight}).then(t=>{this.$router.replace({name:"goodsResult"})}).catch(t=>{console.log(t)})},upload(){this.uploadLoading=!0;let t=this;window.UMJSBridge.callHandler("jumpCamera",{type:0,maxSelectable:9,mimeType:2,maxRecordTime:30,capture:!0},(function(t){})),window.UMJSBridge.registerHandler("jumpCamera",e=>{this.uploadLoading=!1,e&&("video"==e[0].type?e[0].success?(this.videoList.push({video:e[0].uFileId,pic:e[1].uFileId}),this.but="but-2",this.hidding="hidding"):t.$toast({message:"upload failed",position:"bottom"}):"picture"==e[0].type?e.forEach(t=>{t.success&&(this.picList.push(t.uFileId),this.but="but-2",this.hidding="hidding")}):t.$toast({message:"upload failed",position:"bottom"}))})},imgurl(t){return"http://ec2-52-80-243-127.cn-north-1.compute.amazonaws.com.cn:8081/file/download?url="+t},videourl(t){return"http://ec2-52-80-243-127.cn-north-1.compute.amazonaws.com.cn:8081/file/play?url="+t},viewImg(t){let e=[];this.picList.forEach(t=>{e.push("http://ec2-52-80-243-127.cn-north-1.compute.amazonaws.com.cn:8081/file/download?url="+t)}),Object(n["a"])({images:e,startPosition:t})},onFailed(t){console.log("failed",t)}}},l=u,c=(r("139a"),r("2877")),d=Object(c["a"])(l,i,a,!1,null,"73fdcbe4",null);e["default"]=d.exports},5288:function(t,e,r){"use strict";r.r(e);var i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"goods-box"},[r("van-form",{attrs:{"validate-first":""},on:{failed:t.onFailed,submit:t.submit}},[r("van-cell-group",[r("van-field",{attrs:{value:t.address,readonly:"","input-align":"right",label:"Home address",placeholder:"Please enter",rows:"1",autosize:"",type:"textarea"}}),r("van-field",{attrs:{value:t.receiver,readonly:"","input-align":"right",label:"Receiver",placeholder:"Please enter"}}),r("van-field",{attrs:{value:t.phone,readonly:"","input-align":"right",label:"Phone",placeholder:"Please enter"}})],1),r("van-cell-group",{staticStyle:{"margin-top":"0.26rem"}},[r("van-field",{attrs:{value:t.owner,readonly:"","input-align":"right",label:"Owner",placeholder:"Please enter"}}),r("van-field",{attrs:{clearable:"",value:t.origin,readonly:"","input-align":"right",label:"Origin",placeholder:"Please enter"}}),r("van-field",{attrs:{clearable:"","input-align":"right",label:"Produce Name",placeholder:"Please enter"},model:{value:t.productName,callback:function(e){t.productName=e},expression:"productName"}}),r("van-field",{attrs:{"input-align":"right",label:"Type",placeholder:"input"},scopedSlots:t._u([{key:"input",fn:function(){return[r("van-dropdown-menu",{staticStyle:{"padding-right":"0.2rem"},attrs:{"active-color":"#00B459"}},[r("van-dropdown-item",{attrs:{options:t.typeOptions},model:{value:t.type,callback:function(e){t.type=e},expression:"type"}})],1)]},proxy:!0}])}),r("van-field",{staticClass:"weight",attrs:{"input-align":"right",label:"Weight",type:"number",placeholder:"0",rules:[{required:!0,message:"please input"}]},model:{value:t.weight,callback:function(e){t.weight=e},expression:"weight"}})],1),r("van-popup",{directives:[{name:"show",rawName:"v-show",value:t.chooseType,expression:"chooseType"}],attrs:{position:"bottom"}},[r("van-picker",{attrs:{title:"picker","show-toolbar":"",columns:["VEGETABLES","FRUIT","SEEDS","FERTILIZER"]}})],1),r("div",{staticClass:"commitBtn"},[r("van-button",{class:{commitBtnActive:t.activeCommit},attrs:{round:"",block:"",type:"info","native-type":"submit"}},[t._v("Confirm")])],1)],1)],1)},a=[],n=r("28e1"),o=r("696f"),s={data(){return{activeCommit:!1,address:"address",receiver:"receiver",phone:"phone",chooseType:!1,owner:this.$store.state.user.username,origin:"origin",productName:"",type:"fruit",weight:"",typeOptions:[{text:"vegetables",value:"vegetables"},{text:"fruit",value:"fruit"},{text:"seeds",value:"seeds"},{text:"fertilizer",value:"fertilizer"}]}},watch:{productName(t,e){t?!e&&this.weight&&(this.activeCommit=!0):this.activeCommit=!1},weight(t,e){t?!e&&this.productName&&(this.activeCommit=!0):this.activeCommit=!1}},mounted(){this.querySubscriber()},methods:{querySubscriber(){Object(o["c"])({taskId:this.$route.query.taskId}).then(t=>{t.data.location&&(this.address=t.data.location),t.data.username&&(this.receiver=t.data.username),t.data.phone&&(this.phone=t.data.phone),t.data.farmOwner&&(this.owner=t.data.farmOwner),t.data.farmLocation&&(this.origin=t.data.farmLocation)}).catch(t=>{console.log(t)})},submit(){console.log({category:this.type,farmId:this.$route.query.farmId,landId:this.$route.query.landId,productName:this.productName,stepId:this.$route.query.stepId,taskId:this.$route.query.taskId,username:this.$store.state.user.username,weight:this.weight}),Object(n["d"])({category:this.type,farmId:this.$route.query.farmId,landId:this.$route.query.landId,productName:this.productName,stepId:this.$route.query.stepId,taskId:this.$route.query.taskId,username:this.$store.state.user.username,weight:this.weight}).then(t=>{this.$router.back()}).catch(t=>{console.log(t)})},onFailed(t){console.log("failed",t)}}},u=s,l=(r("c115"),r("2877")),c=Object(l["a"])(u,i,a,!1,null,"8b2b929e",null);e["default"]=c.exports},6680:function(t,e,r){},"696f":function(t,e,r){"use strict";r.d(e,"b",(function(){return a})),r.d(e,"a",(function(){return n})),r.d(e,"c",(function(){return o}));var i=r("b775");function a(t){return Object(i["a"])({url:"/rent/queryRentLands",method:"get",params:t})}function n(t){return Object(i["a"])({url:"/rent/add",method:"post",data:t})}function o(t){return Object(i["a"])({url:"/rent/querySubscriber",method:"get",params:t})}},"79ed":function(t,e,r){},c115:function(t,e,r){"use strict";r("79ed")},d415:function(t,e,r){"use strict";r.d(e,"a",(function(){return a})),r.d(e,"c",(function(){return n})),r.d(e,"b",(function(){return o})),r.d(e,"e",(function(){return s})),r.d(e,"d",(function(){return u})),r.d(e,"f",(function(){return l})),r.d(e,"h",(function(){return c})),r.d(e,"g",(function(){return d})),r.d(e,"k",(function(){return p})),r.d(e,"i",(function(){return m})),r.d(e,"j",(function(){return h}));var i=r("b775");function a(t){return Object(i["a"])({url:"/farm/add",method:"post",data:t})}function n(t){return Object(i["a"])({url:"/farm/query",method:"get",params:t})}function o(t){return Object(i["a"])({url:"/farm/queryAll",method:"get",params:t})}function s(t){return Object(i["a"])({url:"/farm/queryByLocation",method:"get",params:t})}function u(t){return Object(i["a"])({url:"/farm/queryById",method:"get",params:t})}function l(t){return Object(i["a"])({url:"/farm/queryByProductName",method:"get",params:t})}function c(t){return Object(i["a"])({url:"/farm/queryByUserName",method:"get",params:t})}function d(t){return Object(i["a"])({url:"/farm/queryByTotalArea",method:"get",params:t})}function p(t){return Object(i["a"])({url:"/farm/revise",method:"put",data:t})}function m(t){return Object(i["a"])({url:"/seed/query",method:"get",params:t})}function h(t){return Object(i["a"])({url:"/seed/queryById",method:"get",params:t})}}}]);