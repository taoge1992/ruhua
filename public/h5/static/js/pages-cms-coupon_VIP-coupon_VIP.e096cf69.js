(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-cms-coupon_VIP-coupon_VIP"],{"3b87":function(t,a,e){"use strict";var o,i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",{staticClass:"product"},[e("v-uni-view",{staticClass:"top"}),e("v-uni-view",{staticClass:"biao"},[e("v-uni-view",{staticClass:"biao_01"},[e("v-uni-view",{staticClass:"biao_01_l"},[t._v("VIP特权券")])],1),e("v-uni-view",{staticClass:"biao_01"},[e("v-uni-view",{staticClass:"biao_01_l"},[t._v("特权券名：")]),e("v-uni-view",{staticClass:"biao_01_r"},[e("v-uni-input",{staticClass:"uni-input",attrs:{placeholder:"最多10个字"},model:{value:t.coupon_form.name,callback:function(a){t.$set(t.coupon_form,"name",a)},expression:"coupon_form.name"}})],1)],1),e("v-uni-view",{staticClass:"biao_02"},[e("v-uni-view",{staticClass:"biao_01_l"},[t._v("面       值：")]),e("v-uni-view",{staticClass:"biao_01_r"},[e("v-uni-input",{staticClass:"uni-input",attrs:{placeholder:"0.01-1000000"},model:{value:t.coupon_form.reduce,callback:function(a){t.$set(t.coupon_form,"reduce",a)},expression:"coupon_form.reduce"}})],1)],1),e("v-uni-view",{staticClass:"biao_02"},[e("v-uni-view",{staticClass:"biao_01_l"},[t._v("使用门槛：")]),e("v-uni-view",{staticClass:"biao_02_r"},[e("v-uni-switch",{staticStyle:{transform:"scale(0.7)"},attrs:{checked:!0},on:{change:function(a){arguments[0]=a=t.$handleEvent(a),t.switch1Change.apply(void 0,arguments)}}})],1)],1),1==t.threshold?e("v-uni-view",{staticClass:"biao_02"},[e("v-uni-view",{staticClass:"biao_01_l"},[t._v("门槛金额：")]),e("v-uni-view",{staticClass:"biao_01_r"},[e("v-uni-input",{staticClass:"uni-input",attrs:{placeholder:"0.01-1000000"},model:{value:t.coupon_form.full,callback:function(a){t.$set(t.coupon_form,"full",a)},expression:"coupon_form.full"}})],1)],1):t._e()],1),e("v-uni-view",{staticClass:"H50"}),e("v-uni-view",{staticClass:"p_btn"},[e("v-uni-button",{staticClass:"pro_btn",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.sub()}}},[t._v("保存")])],1)],1)},n=[];e.d(a,"b",(function(){return i})),e.d(a,"c",(function(){return n})),e.d(a,"a",(function(){return o}))},5587:function(t,a,e){"use strict";var o=e("ee27");e("99af"),e("13d5"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i=o(e("c36f")),n=o(e("1065")),d=o(e("452e")),c=(e("cab5"),{data:function(){var t=this.getDate({format:!0}),a=this.getDate_end({format:!0});return{status:[{value:"0",name:"一次"},{value:"1",name:"无限制"}],current:0,coupon_form:{status:"",full:"",reduce:"",name:"",stock:"",sm:"",goods_ids:"0",star_time:"",end_time:"",stock_type:""},product_cate:"",set:0,category_id:1,date:t,date_end:a,time:"12:01",threshold:1,show_cate_list:!1,show_mail_list:!1,category_name:"固定时间",category_list:[{category_id:"1",category_name:"固定时间"},{category_id:"2",category_name:"领卷当日开始计算有效期"}],id:0,mail:1,mail_list:[{id:"1",name:"全部商品"},{id:"2",name:"指定商品可用"}],group:"未分组"}},components:{uniIcon:i.default,uniPopup:n.default,robbyImageUpload:d.default},computed:{startDate:function(){return this.getDate("start")},endDate:function(){return this.getDate("end")}},watch:{},onLoad:function(t){this._request(),this.id=t.id},onShow:function(){},methods:{setting:function(){this.set=1},radioChange:function(t){for(var a=0;a<this.status.length;a++)if(this.status[a].value===t.target.value){this.current=a,console.log(this.status[a].value),this.coupon_form.status=this.status[a].value;break}},getDate:function(t){var a=new Date,e=a.getFullYear(),o=a.getMonth()+1,i=(a.getMonth(),a.getDate());return"start"===t?e-=60:"end"===t&&(e+=2),o=o>9?o:"0"+o,i=i>9?i:"0"+i,"".concat(e,"-").concat(o,"-").concat(i)},getDate_end:function(t){var a=new Date,e=a.getFullYear(),o=a.getMonth()+2,i=a.getDate();return"start"===t?e-=60:"end"===t&&(e+=20),o=o>9?o:"0"+o,i=i>9?i:"0"+i,"".concat(e,"-").concat(o,"-").concat(i)},bindDateChange:function(t){this.date=t.target.value,console.log(this.date)},bindDateChange_end:function(t){this.date_end=t.target.value},switch1Change:function(){1==this.threshold?(this.threshold=0,this.coupon_form.full=0):this.threshold=1},sub:function(){var t=this;this.coupon_form.goods_ids=[1,2,3],this.coupon_form.star_time=this.date,this.coupon_form.end_time=this.date_end,this.coupon_form.stock_type="1",console.log(this.coupon_form),this.$api.http.post("shop_cms/add_vip_coupon",{stock_type:"1",full:this.coupon_form.full,name:this.coupon_form.name,reduce:this.coupon_form.reduce,status:"2"}).then((function(a){t.$api.msg("添加成功"),uni.redirectTo({url:"../couponlist/couponlist"})})),this.coupon_form={}},compressImg:function(t){console.log(t)},changeIndicatorDots:function(t){this.isYasuo=!this.isYasuo},buy:function(t){var a=this;this.$api.http.post("user/pay_vip",{type:t}).then((function(t){a.$api.msg("购买成功"),setTimeout((function(){uni.switchTab({url:"/pages/user/user"})}),1500)}))}}});a.default=c},"77ee":function(t,a,e){"use strict";e.r(a);var o=e("3b87"),i=e("fc9a");for(var n in i)"default"!==n&&function(t){e.d(a,t,(function(){return i[t]}))}(n);e("ffac");var d,c=e("f0c5"),s=Object(c["a"])(i["default"],o["b"],o["c"],!1,null,"5ab0afce",null,!1,o["a"],d);a["default"]=s.exports},d74f:function(t,a,e){var o=e("ecaf");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var i=e("4f06").default;i("991b12a6",o,!0,{sourceMap:!1,shadowMode:!1})},ecaf:function(t,a,e){var o=e("24fb");a=o(!1),a.push([t.i,"uni-page-body[data-v-5ab0afce]{background-color:#f7f6fb;font-size:14px}.pic[data-v-5ab0afce]{padding:%?20?% %?10?%}.input-view[data-v-5ab0afce]{font-size:%?28?%}.leixin[data-v-5ab0afce]{width:50vw;overflow:hidden;overflow-x:hidden;overflow-y:scroll}.xuan[data-v-5ab0afce]{padding-bottom:10px;padding-top:10px}.close-view[data-v-5ab0afce]{text-align:center;line-height:14px;height:16px;width:16px;border-radius:50%;background:#ff5053;color:#fff;position:absolute;top:-6px;right:-4px;font-size:12px}.product[data-v-5ab0afce]{background-color:#f7f6fb;height:100%}.product .head[data-v-5ab0afce]{position:relative;padding:0 5px}.product .head img[data-v-5ab0afce]{width:100%;height:150px}.product .btn[data-v-5ab0afce]{position:absolute;top:10px;right:5px}.product .btn uni-button[data-v-5ab0afce]{font-size:10px;color:red;border:none;border-radius:20px;background-color:#cbcbcb;padding:5px}.product .top[data-v-5ab0afce]{box-shadow:0 0 8px 5px #ededed;height:1px;background-color:#ededed}.product .pro_tit[data-v-5ab0afce]{padding:15px 10px 10px;border-bottom:1px solid #ededed}.product .BH[data-v-5ab0afce]{height:5px;background-color:#f2f2f2}.product .biao[data-v-5ab0afce]{background-color:#fff;margin:10px;border-radius:5px;border:1px solid #eaeaea}.product .biao span[data-v-5ab0afce]{color:red;padding-right:5px}.product .biao uni-textarea[data-v-5ab0afce]{width:100%;border-bottom:1px solid #ededed;padding:10px;height:100px}.product .biao_01[data-v-5ab0afce]{padding:10px 10px 10px;border-bottom:1px solid #ededed;display:-webkit-box;display:-webkit-flex;display:flex}.product .biao_01_l[data-v-5ab0afce]{padding-top:7px;-webkit-flex-shrink:0;flex-shrink:0}.product .biao_01_1[data-v-5ab0afce]{padding-top:5px}.product .biao_01_r[data-v-5ab0afce]{-webkit-box-flex:1;-webkit-flex-grow:1;flex-grow:1}.product .biao_01_r uni-text[data-v-5ab0afce]{padding-right:10px}.product .biao_02_r select[data-v-5ab0afce]{padding:0 10px;line-height:25px;min-width:80px;text-align:center}.product .biao_01_m[data-v-5ab0afce]{border-right:1px solid #ededed}.product .biao_02[data-v-5ab0afce]{padding:13px 10px 10px;border-bottom:1px solid #ededed;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.product .biao_03[data-v-5ab0afce]{padding:13px 10px 10px;border-bottom:1px solid #ededed;display:-webkit-box;display:-webkit-flex;display:flex}.product .biao_04[data-v-5ab0afce]{display:-webkit-box;display:-webkit-flex;display:flex;padding:10px 10px 10px;border-bottom:1px solid #ededed}.product .biao_04_l[data-v-5ab0afce]{display:-webkit-box;display:-webkit-flex;display:flex;width:50%;line-height:30px;padding-right:10px}.product .biao_04_l_i[data-v-5ab0afce]{-webkit-flex-shrink:1;flex-shrink:1}.product .biao_04_l_1[data-v-5ab0afce]{-webkit-flex-shrink:0;flex-shrink:0}.product .biao_05[data-v-5ab0afce]{padding:10px 10px 0}.product .jgkc[data-v-5ab0afce]{padding:15px 10px;border-bottom:1px solid #ededed}.product .p_btn[data-v-5ab0afce]{background:#f7f6fb;padding:0 10px 10px;position:fixed;bottom:0;width:100%;z-index:9999}.product .pro_btn[data-v-5ab0afce]{background-color:#e5e5e5;padding:10px;text-align:center;border-radius:20px;background-color:#df421d;color:#fff;width:94%}.product .guige[data-v-5ab0afce]{border:1px solid #ededed;margin:10px 20px 5px 10px;position:relative}.product .stop[data-v-5ab0afce]{position:absolute;right:-15px;top:60px}.product .stop img[data-v-5ab0afce]{width:30px;height:30px}.product .uni-input-input[data-v-5ab0afce],\n.product .uni-input[data-v-5ab0afce]{height:30px;line-height:30px}body.?%PAGE?%[data-v-5ab0afce]{background-color:#f7f6fb}",""]),t.exports=a},fc9a:function(t,a,e){"use strict";e.r(a);var o=e("5587"),i=e.n(o);for(var n in o)"default"!==n&&function(t){e.d(a,t,(function(){return o[t]}))}(n);a["default"]=i.a},ffac:function(t,a,e){"use strict";var o=e("d74f"),i=e.n(o);i.a}}]);