(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mall.shopping"],{"0974":function(t,e,o){"use strict";o("c4fa")},"28e1":function(t,e,o){"use strict";o.d(e,"g",(function(){return s})),o.d(e,"l",(function(){return c})),o.d(e,"k",(function(){return n})),o.d(e,"m",(function(){return a})),o.d(e,"j",(function(){return i})),o.d(e,"e",(function(){return u})),o.d(e,"c",(function(){return d})),o.d(e,"d",(function(){return l})),o.d(e,"a",(function(){return m})),o.d(e,"f",(function(){return p})),o.d(e,"n",(function(){return h})),o.d(e,"o",(function(){return f})),o.d(e,"b",(function(){return g})),o.d(e,"i",(function(){return b})),o.d(e,"h",(function(){return v}));var r=o("b775");function s(t){return Object(r["a"])({url:"/product/queryTopN",method:"get",params:t})}function c(t){return Object(r["a"])({url:"/product/queryByCategory",method:"get",params:t})}function n(t){return Object(r["a"])({url:"/product/query",method:"get",params:t})}function a(t){return Object(r["a"])({url:"/product/queryById",method:"get",params:t})}function i(t){return Object(r["a"])({url:"/product/queryComment",method:"get",params:t})}function u(t){return Object(r["a"])({url:"/product/like",method:"put",params:t})}function d(t){return Object(r["a"])({url:"/product/add",method:"post",data:t})}function l(t){return Object(r["a"])({url:"/product/box",method:"post",data:t})}function m(t){return Object(r["a"])({url:"/shopping-cart/add",method:"post",params:t})}function p(t){return Object(r["a"])({url:"/shopping-cart/queryByUserName",method:"post",params:t})}function h(t){return Object(r["a"])({url:"/shopping-cart/remove",method:"post",params:t})}function f(t){return Object(r["a"])({url:"/shopping-cart/update",method:"post",params:t})}function g(t){return Object(r["a"])({url:"/order/add",method:"post",data:t})}function b(t){return Object(r["a"])({url:"/product/queryByFarmId",method:"get",params:t})}function v(t){return Object(r["a"])({url:"/plant-task/queryPlantTaskByProductId",method:"get",params:t})}},"4d55":function(t,e,o){"use strict";var r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"card goods-card"},[o("div",{staticClass:"img"},[o("img",{attrs:{src:t.imgurl(t.item.imageUrl&&t.item.imageUrl.length>0?t.item.imageUrl[0]:""),alt:""}})]),o("div",{staticClass:"name"},[t._v(t._s(t.item.productName)+"*"+t._s(t.item.weight)+"KG")]),o("div",{staticClass:"foot"},[o("div",{staticClass:"price"},[o("span",{staticClass:"dolar"},[t._v("$")]),t._v(" "+t._s(parseFloat(t.item.price).toFixed(2))+" ")]),o("div",{staticClass:"like",on:{click:function(e){return e.stopPropagation(),t.likeClick(t.item)}}},[o("svg-icon",{staticStyle:{"font-size":"0.28rem"},attrs:{iconClass:"like"}}),t._v(" "+t._s(t.item.likeNumber)+" ")],1)])])},s=[],c=o("28e1"),n={name:"RecommendGoods",data(){return{}},props:{item:{type:Object,default:()=>{}}},mounted(){},methods:{imgurl(t,e){return"http://ec2-52-80-243-127.cn-north-1.compute.amazonaws.com.cn:8081/file/download?url="+t},likeClick(t){Object(c["e"])({isLike:!0,productId:t.productId,username:this.$store.state.user.username}).then(e=>{this.$toast({position:"bottom",message:"success!"}),t.likeNumber=0+t.likeNumber+1}).catch(t=>{console.log(t)})}}},a=n,i=(o("0974"),o("2877")),u=Object(i["a"])(a,r,s,!1,null,"cfb6e732",null);e["a"]=u.exports},"5fd4":function(t,e,o){"use strict";o.d(e,"c",(function(){return s})),o.d(e,"b",(function(){return c})),o.d(e,"a",(function(){return n})),o.d(e,"d",(function(){return a})),o.d(e,"e",(function(){return i}));var r=o("b775");function s(t){return Object(r["a"])({url:"/plant-task/query",method:"get",params:t})}function c(t){return Object(r["a"])({url:"/carbon-footprint/queryFromDashboard",method:"get",params:t})}function n(t){return Object(r["a"])({url:"/carbon-footprint/query",method:"get",params:t})}function a(t){return Object(r["a"])({url:"/recommendation/queryFarms",method:"get",params:t})}function i(t){return Object(r["a"])({url:"/recommendation/queryProducts",method:"get",params:t})}},"6a87":function(t,e,o){"use strict";o.r(e);var r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"shopping"},[o("div",{staticClass:"cartlist"},[0==t.goodsList.length?o("div",{staticClass:"emp"},[o("svg-icon",{staticStyle:{"font-size":"0.44rem"},attrs:{iconClass:"shopping-cart"}}),o("span",[t._v("Empty")])],1):t._e(),t._l(t.goodsList,(function(e){return o("div",{key:e.cartId,staticClass:"list"},[o("van-swipe-cell",{scopedSlots:t._u([{key:"right",fn:function(){return[o("van-button",{staticClass:"delete-button",attrs:{square:"",text:"Remove",type:"danger"},on:{click:function(o){return t.removeItem(e)}}})]},proxy:!0}],null,!0)},[o("div",{staticClass:"cart"},[o("van-checkbox",{attrs:{"checked-color":"#08C25E"},on:{click:function(o){return t.checkSingle(e)}},model:{value:e.select,callback:function(o){t.$set(e,"select",o)},expression:"item.select"}}),o("CarList",{attrs:{goodsInfo:e},on:{refresh:function(e){return t.loadCart()},calculate:function(e){return t.calculateTotal()}}})],1)])],1)}))],2),o("div",{staticClass:"block"},[o("div",{staticClass:"block-title"},[o("svg-icon",{staticStyle:{"font-size":"0.44rem"},attrs:{iconClass:"recommend goods"}}),o("span",[t._v("Recommended Produce")])],1),t._l(t.recommendProductsList,(function(e,r){return o("RecommendGoods",{key:r,attrs:{item:e},nativeOn:{click:function(o){return t.$router.push("/mall/goods/detail/"+e.productId)}}})}))],2),o("van-divider",{staticClass:"footer"}),o("div",{staticClass:"submit-box"},[o("van-checkbox",{attrs:{"checked-color":"#08C25E"},on:{click:t.setAll},model:{value:t.checkAll,callback:function(e){t.checkAll=e},expression:"checkAll"}},[o("span",{staticClass:"text"},[t._v("ALL")])]),o("div",{staticClass:"price"},[o("span",{staticClass:"label"},[t._v("Total:")]),o("span",{staticClass:"num"},[t._v("$"+t._s(parseFloat(t.totalPrice).toFixed(2)))])]),o("div",{staticClass:"btn",on:{click:t.onSubmit}},[t._v("Account")])],1)],1)},s=[],c=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticStyle:{width:"calc(100% - 1rem)"}},[o("van-card",{scopedSlots:t._u([{key:"thumb",fn:function(){return[o("img",{staticClass:"avatar",attrs:{src:t.imgurl(t.goodsInfo.imageUrl?t.goodsInfo.imageUrl:""),alt:""},on:{click:t.viewDetail}})]},proxy:!0},{key:"title",fn:function(){return[o("div",{staticClass:"name"},[t._v(t._s(t.productItem.productName)+"*"+t._s(t.productItem.weight)+"KG")])]},proxy:!0},{key:"tags",fn:function(){return[o("div",{staticClass:"tags"},[o("div",{staticClass:"price"},[t._v("$"+t._s(parseFloat(t.productItem.price).toFixed(2)))]),o("div",{staticClass:"step"},[o("van-stepper",{attrs:{"button-size":"20px",theme:"round"},on:{change:t.updateNumCart},model:{value:t.goodsInfo.number,callback:function(e){t.$set(t.goodsInfo,"number",e)},expression:"goodsInfo.number"}})],1)])]},proxy:!0}])})],1)},n=[],a=o("28e1"),i={name:"CartList",data(){return{productItem:{}}},methods:{viewDetail(){this.$router.push({name:"goodsDetail",params:{goodsId:this.goodsInfo.productId}})},imgurl(t,e){return"http://ec2-52-80-243-127.cn-north-1.compute.amazonaws.com.cn:8081/file/download?url="+t},getProductDetails(){Object(a["m"])({productId:this.goodsInfo.productId}).then(t=>{0!==t.data.length&&(this.productItem=t.data[0])}).catch(t=>{this.productItem={},console.log(t)})},updateNumCart(t){""==t&&(t=1);let e={username:this.goodsInfo.username,productId:this.goodsInfo.productId,count:t};Object(a["o"])(e).then(t=>{this.$emit("calculate")}).catch(t=>{console.log(t)})},removeItem(){let t={username:this.goodsInfo.username,productId:this.goodsInfo.productId};Object(a["n"])(t).then(t=>{this.$emit("refresh")}).catch(t=>{this.$emit("refresh"),console.log(t)})}},props:{goodsInfo:{type:Object,default:()=>{}}},mounted(){this.getProductDetails()}},u=i,d=(o("97fc"),o("2877")),l=Object(d["a"])(u,c,n,!1,null,"6ee2d378",null),m=l.exports,p=o("4d55"),h=o("5fd4"),f=o("2f62"),g={name:"ShoppingCart",components:{CarList:m,RecommendGoods:p["a"]},data(){return{goodsList:[],checkAll:!1,recommendProductsList:[],totalPrice:0,currentPrice:3,currentNumber:0}},computed:{...Object(f["b"])({username:t=>t.user.username||"jack"})},methods:{async getCurrent(t){try{let e=[],o=0,r=0,s=0;const c=await Object(a["f"])({username:this.username});return e=c.data,e.forEach(e=>{e.productId==t&&(o=e.number,r=e.price,s=r*o)}),s}catch(e){console.log(e)}},async calculateTotal(){this.$store.dispatch("cartGoods/clearGoodsList");let t=0;for(let e=0,o=this.goodsList.length;e<o;e++)if(this.goodsList[e].select){let o=await this.getCurrent(this.goodsList[e].productId),r=t+o;t=r,this.$store.dispatch("cartGoods/setGoodsList",this.goodsList[e].productId)}else t=t;this.totalPrice=t},stepperActive(t){t.select=!0,this.checkSingle(t)},onSubmit(){this.totalPrice>0?this.$router.push({name:"orderEdit"}):this.$toast({message:"unselected!"})},checkSingle(t){let e=!0;this.goodsList.forEach(t=>{t.select||(e=!1)}),this.checkAll=e,this.calculateTotal()},appendObject(){this.goodsList.forEach(t=>{this.$set(t,"select",!1)})},loadCart(){this.checkAll=!1,this.totalPrice=0,Object(a["f"])({username:this.username}).then(t=>{this.goodsList=t.data,this.appendObject()}).catch(t=>{console.log(t)})},getRecommendProducts(){Object(h["e"])({username:this.username}).then(t=>{this.recommendProductsList=t.data}).catch(t=>{console.log(t)})},setAll(){this.checkAll?this.goodsList.forEach(t=>{t.select=!0}):this.goodsList.forEach(t=>{t.select=!1}),this.calculateTotal()},removeItem(t){let e={username:t.username,productId:t.productId};Object(a["n"])(e).then(t=>{this.loadCart()}).catch(t=>{this.loadCart(),console.log(t)})}},mounted(){this.$store.dispatch("cartGoods/clearGoodsList"),this.getRecommendProducts(),this.loadCart()}},b=g,v=(o("83da"),Object(d["a"])(b,r,s,!1,null,"34327750",null));e["default"]=v.exports},"83da":function(t,e,o){"use strict";o("d573")},"97fc":function(t,e,o){"use strict";o("ccb2")},c4fa:function(t,e,o){},ccb2:function(t,e,o){},d573:function(t,e,o){}}]);