(this["webpackJsonptw2-01-quiz"]=this["webpackJsonptw2-01-quiz"]||[]).push([[0],{1:function(t,_,n){"use strict";n.r(_),n.d(_,"actionTypes",(function(){return e}));var e={MAIN_NAV_START_FETCHING:"MAIN_NAV_START_FETCHING",MAIN_NAV_FETCHED:"MAIN_NAV_FETCHED",MAIN_NAV_FETCH_ERROR:"MAIN_NAV_FETCH_ERROR",HOME_START_FETCHING:"HOME_START_FETCHING",HOME_FETCHED:"HOME_FETCHED",HOME_FETCH_ERROR:"HOME_FETCH_ERROR",ABOUT_START_FETCHING:"ABOUT_START_FETCHING",ABOUT_FETCHED:"ABOUT_FETCHED",ABOUT_FETCH_ERROR:"ABOUT_FETCH_ERROR",FOOD_MENU_START_FETCHING:"FOOD_MENU_START_FETCHING",FOOD_MENU_FETCHED:"FOOD_MENU_FETCHED",FOOD_MENU_FETCH_ERROR:"FOOD_MENU_FETCH_ERROR",FOOD_MENU_TXN_TERM_START_FETCHING:"FOOD_MENU_TXN_TERM_START_FETCHING",FOOD_MENU_TXN_TERM_FETCHED:"FOOD_MENU_TXN_TERM_FETCHED",FOOD_MENU_TXN_TERM_FETCH_ERROR:"FOOD_MENU_TXN_TERM_FETCH_ERROR",FOOD_MENU_BG_START_FETCHING:"FOOD_MENU_BG_START_FETCHING",FOOD_MENU_BG_FETCHED:"FOOD_MENU_BG_FETCHED",FOOD_MENU_BG_FETCH_ERROR:"FOOD_MENU_BG_FETCH_ERROR"}},25:function(t,_,n){},52:function(t,_,n){"use strict";n.r(_);var e=n(0),a=n.n(e),o=n(5),T=n.n(o),E=(n(25),n(6)),c=n(7),i=n(19),O=n(20),F=n(1).actionTypes,R={nav_fetching:!1,nav_fetched:!1,nav_fetch_error:"",nav_data:[],nav_dataLength:0},r=Object(c.b)({reducerMainNav:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,_=arguments.length>1?arguments[1]:void 0;switch(_.type){case F.MAIN_NAV_START_FETCHING:return{fetching:!0,nav_data:[]};case F.MAIN_NAV_FETCHED:return{nav_data:_.data,nav_fetched:!0,nav_dataLength:_.data.length};case F.MAIN_NAV_FETCH_ERROR:return{nav_fetched:!1,nav_fetching:!1,nav_fetch_error:_.error};default:return t}}}),N=Object(c.a)(O.a,Object(i.createLogger)()),s=Object(c.c)(r,N),H=n(1),d=n(4),M=n.n(d),C="https://yellow-website.com/d9-quiz",p=n(3);var h=function(){var t=Object(E.b)();return Object(e.useEffect)((function(){t(function(){var t={headers:{Accept:"application/vnd.api+json"}},_="".concat(C,"/api/menu_items/main"),n="http://localhost:3000"===window.location.origin?"./data/mainnav.json":_,e="".concat(C,"/rest/multiple-choice-question"),a="http://localhost:3000"===window.location.origin?"./data/homepage.json":e,o="".concat(C,"/rest/about"),T="http://localhost:3000"===window.location.origin?"./data/aboutpage.json":o,E="".concat(C,"/rest/food-menu"),c="http://localhost:3000"===window.location.origin?"./data/foodMenu.json":E,i="".concat(C,"/rest/food-menu-taxanomy"),O="http://localhost:3000"===window.location.origin?"./data/foodMenuTxnTerm.json":i,F="".concat(C,"/rest/food-menu-bg-image"),R="http://localhost:3000"===window.location.origin?"./data/foodMenuBG.json":F;return function(_){_({type:H.actionTypes.MAIN_NAV_START_FETCHING}),M.a.get(n,t).then((function(t){_({type:H.actionTypes.MAIN_NAV_FETCHED,data:t.data})})).catch((function(t){_({type:H.actionTypes.MAIN_NAV_FETCH_ERROR,fetched:!1,error:t})})),_({type:H.actionTypes.HOME_START_FETCHING}),M.a.get(a,t).then((function(t){_({type:H.actionTypes.HOME_FETCHED,data:t.data})})).catch((function(t){_({type:H.actionTypes.HOME_FETCH_ERROR,fetched:!1,error:t})})),_({type:H.actionTypes.ABOUT_START_FETCHING}),M.a.get(T,t).then((function(t){_({type:H.actionTypes.ABOUT_FETCHED,data:t.data})})).catch((function(t){_({type:H.actionTypes.ABOUT_FETCH_ERROR,fetched:!1,error:t})})),_({type:H.actionTypes.FOOD_MENU_START_FETCHING}),M.a.get(c,t).then((function(t){_({type:H.actionTypes.FOOD_MENU_FETCHED,data:t.data})})).catch((function(t){_({type:H.actionTypes.FOOD_MENU_FETCH_ERROR,fetched:!1,error:t})})),_({type:H.actionTypes.FOOD_MENU_TXN_TERM_START_FETCHING}),M.a.get(O,t).then((function(t){console.log("'taxanomy action",t.data),_({type:H.actionTypes.FOOD_MENU_TXN_TERM_FETCHED,data:t.data})})).catch((function(t){_({type:H.actionTypes.FOOD_MENU_TXN_TERM_FETCH_ERROR,fetched:!1,error:t})})),_({type:H.actionTypes.FOOD_MENU_BG_START_FETCHING}),M.a.get(R,t).then((function(t){console.log("'taxanomy action",t.data),_({type:H.actionTypes.FOOD_MENU_BG_FETCHED,data:t.data})})).catch((function(t){_({type:H.actionTypes.FOOD_MENU_BG_FETCH_ERROR,fetched:!1,error:t})}))}}())})),Object(p.jsx)("div",{children:"Router js"})};var u=function(){return Object(p.jsx)(E.a,{store:s,children:Object(p.jsx)(h,{})})},A=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,53)).then((function(_){var n=_.getCLS,e=_.getFID,a=_.getFCP,o=_.getLCP,T=_.getTTFB;n(t),e(t),a(t),o(t),T(t)}))};T.a.render(Object(p.jsx)(a.a.StrictMode,{children:Object(p.jsx)(u,{})}),document.getElementById("root")),A()}},[[52,1,2]]]);
//# sourceMappingURL=main.09332fc5.chunk.js.map