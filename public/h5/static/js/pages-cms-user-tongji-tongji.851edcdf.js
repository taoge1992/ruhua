(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-cms-user-tongji-tongji"],{2098:function(t,a,i){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var e={data:function(){return{data:{}}},onLoad:function(){this._load()},methods:{_load:function(){var t=this;this.$api.http.get("shop/count_order").then((function(a){t.data=a}))}},onPullDownRefresh:function(){this._load(),setTimeout((function(){uni.stopPullDownRefresh()}),2e3)}};a.default=e},"2f6d":function(t,a,i){"use strict";var e,n=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("v-uni-view",{staticClass:"tongji"},[i("v-uni-view",{staticClass:"t_tit"},[t._v("经营数据")]),i("v-uni-view",{staticClass:"t_time"},[t._v("统计时间截止9月2号")]),i("v-uni-view",{staticClass:"card"},[i("v-uni-view",{staticClass:"card_01"},[t._v("经营收入")]),t.data.total?i("v-uni-view",{staticClass:"card_02"},[t._v("¥ "+t._s(t.data.total[0].all_money_total))]):t._e(),i("v-uni-view",{staticClass:"card_03"},[i("v-uni-view",{staticClass:"card_03_1"}),i("v-uni-view",{staticClass:"card_03_1"},[t._v("消费人数"),i("br"),i("span",[t._v(t._s(t.data.total[0].all_num_total))])])],1)],1),i("v-uni-view",{staticClass:"name"},[t._v("用户数据")]),i("v-uni-view",{staticClass:"uhsj"},[i("v-uni-view",{staticClass:"uhsj_l"},[i("span",[t._v("121")]),i("br"),t._v("用户总数")]),i("v-uni-view",{staticClass:"uhsj_l"},[i("span",[t._v("38")]),i("br"),t._v("本月新用户")])],1),i("v-uni-view",{staticClass:"name"},[t._v("其他数据")]),i("v-uni-view",{staticClass:"shuju"},[i("v-uni-view",{staticClass:"sj_01"},[i("v-uni-view",{staticClass:"sj_01_1"},[t._v(t._s(t.data.today[0].today_num_total?t.data.today[0].today_num_total:0)),i("br"),t._v("今日订单")]),i("v-uni-view",{staticClass:"sj_01_1"},[t._v("¥ "+t._s(t.data.today[0].today_money_total?t.data.today[0].today_money_total:0)),i("br"),t._v("今日收益")])],1),i("v-uni-view",{staticClass:"sj_02"}),i("v-uni-view",{staticClass:"sj_01"},[i("v-uni-view",{staticClass:"sj_01_1"},[t._v(t._s(t.data.yesterday[0].yesterday_num_total?t.data.yesterday[0].yesterday_num_total:0)),i("br"),t._v("昨日订单")]),i("v-uni-view",{staticClass:"sj_01_1"},[t._v("¥ "+t._s(t.data.yesterday[0].yesterday_money_total?t.data.yesterday[0].yesterday_money_total:0)),i("br"),t._v("昨日收益")])],1)],1)],1)},s=[];i.d(a,"b",(function(){return n})),i.d(a,"c",(function(){return s})),i.d(a,"a",(function(){return e}))},"4ab6":function(t,a,i){var e=i("24fb");a=e(!1),a.push([t.i,".tongji[data-v-243dfa93]{padding:10px;font-size:14px}.tongji .t_tit[data-v-243dfa93]{font-size:22px;padding:20px 0 0;font-weight:900}.tongji .t_time[data-v-243dfa93]{padding:10px 0 15px;color:#b8b8b8;font-size:10px}.tongji .card[data-v-243dfa93]{margin:10px 0;background:-webkit-linear-gradient(top,#fa7458,#eb511b);background:linear-gradient(180deg,#fa7458,#eb511b);border-radius:5px;padding:10px;color:#fce8e3;box-shadow:2px 2px 5px 3px #fceae8}.tongji .card_01[data-v-243dfa93]{padding:5px 0 10px;color:#fce8e3}.tongji .card_02[data-v-243dfa93]{font-size:20px;border-bottom:1px solid #ffe4dc;padding-bottom:15px}.tongji .card_03[data-v-243dfa93]{display:-webkit-box;display:-webkit-flex;display:flex;line-height:20px;padding:10px 0 5px}.tongji .card_03_1[data-v-243dfa93]{width:35%}.tongji .name[data-v-243dfa93]{margin:25px 0 15px;font-size:15px;font-weight:700}.tongji .uhsj[data-v-243dfa93]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-justify-content:space-around;justify-content:space-around}.tongji .uhsj_l[data-v-243dfa93]{width:40%;text-align:center;box-shadow:0 0 5px #e5e5e5;border-radius:5px;line-height:25px;padding:15px 10px}.tongji .uhsj_l span[data-v-243dfa93]{font-size:18px;font-weight:700}.tongji .shuju[data-v-243dfa93]{background-color:#f8f8f8;border-radius:5px}.tongji .sj_01[data-v-243dfa93]{display:-webkit-box;display:-webkit-flex;display:flex}.tongji .sj_01_1[data-v-243dfa93]{width:50%;text-align:center;line-height:25px;padding:10px}.tongji .sj_02[data-v-243dfa93]{height:1px;background-color:#fff}",""]),t.exports=a},"695d":function(t,a,i){"use strict";var e=i("df44"),n=i.n(e);n.a},"7ce2":function(t,a,i){"use strict";i.r(a);var e=i("2098"),n=i.n(e);for(var s in e)"default"!==s&&function(t){i.d(a,t,(function(){return e[t]}))}(s);a["default"]=n.a},df44:function(t,a,i){var e=i("4ab6");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var n=i("4f06").default;n("0e13552c",e,!0,{sourceMap:!1,shadowMode:!1})},e550:function(t,a,i){"use strict";i.r(a);var e=i("2f6d"),n=i("7ce2");for(var s in n)"default"!==s&&function(t){i.d(a,t,(function(){return n[t]}))}(s);i("695d");var d,o=i("f0c5"),r=Object(o["a"])(n["default"],e["b"],e["c"],!1,null,"243dfa93",null,!1,e["a"],d);a["default"]=r.exports}}]);