(this["webpackJsonp06-text-counter"]=this["webpackJsonp06-text-counter"]||[]).push([[0],{38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){},50:function(e,t,n){},74:function(e,t,n){},75:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(1),o=n.n(c),i=n(4),s=n.n(i),r=(n(38),n(18)),l=n(21),u=(n(39),n(40),n.p+"static/media/avatar.d9df8d24.jpg");var h=function(){return Object(a.jsxs)("div",{className:"about-author",children:[Object(a.jsx)("img",{className:"about-author__avatar",src:u,alt:"\u0424\u043e\u0442\u043e \u0430\u0432\u0442\u043e\u0440\u0430"}),Object(a.jsx)("h1",{className:"about-author__title",children:" \u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440 \u0410\u0444\u0430\u043d\u0430\u0441\u0435\u043d\u043a\u043e "}),Object(a.jsx)("h2",{className:"about-author__subtitle",children:" Junior Frontend-\u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a "}),Object(a.jsx)("a",{href:"./",children:Object(a.jsx)("p",{className:"footer__text",children:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"})})]})},d=n(2),g=(n(41),{light:{id:0,modifierClass:""},dark:{id:1,modifierClass:"_dark"}}),x=o.a.createContext();function j(e,t){return 0===e.id?t:"".concat(t," ").concat(t).concat(e.modifierClass)}var b=function(e){var t=j(o.a.useContext(x),"text__input");return Object(a.jsx)("div",{className:"text",children:Object(a.jsx)("textarea",{onChange:function(){e.onChangeText(document.querySelector(".text__input").value)},className:t,type:"text",placeholder:"\u0412\u0430\u0448 \u0442\u0435\u043a\u0441\u0442"})})};n(42);var p=function(){var e=j(o.a.useContext(x),"popup-message");return Object(a.jsx)("p",{className:"".concat(e," popup-message_unactive")})},m=n.p+"static/media/paste_icon_light.18612f4a.svg",v=n.p+"static/media/paste_icon_dark.f6ac4c9b.svg";function f(e,t,n,a){var c=document.querySelector(".popup-message");c.classList.add("popup-message_active"),window.innerWidth/2>e?c.style.left="".concat(e,"px"):c.style.right="".concat(window.innerWidth-e,"px"),window.innerHeight/2>t?c.style.top="".concat(t,"px"):c.style.bottom="".concat(window.innerHeight-t,"px"),c.style.color=a,c.innerText=n,c.classList.remove("popup-message_unactive"),setTimeout((function(){c.classList.add("popup-message_unactive"),c.classList.remove("popup-message_active")}),3e3)}var _=n(10),O=n(11),C=n(15),k=n(14),T=(n(43),function(e){Object(C.a)(n,e);var t=Object(k.a)(n);function n(e){var a;return Object(_.a)(this,n),(a=t.call(this,e)).state={},a}return Object(O.a)(n,[{key:"render",value:function(){var e="tool-button",t=null;return!0===this.props.isActive&&(e="tool-button tool-button_active",t=this.props.onClick),Object(a.jsx)("button",{className:e,children:Object(a.jsx)("img",{className:"tool-button__icon",onClick:t,src:this.props.icon,alt:this.props.type})})}}]),n}(o.a.Component)),y="#00ba00",N="#FF0000";var S=function(e){var t;return t="light"===e.theme?m:v,Object(a.jsx)(T,{type:"paste",icon:t,isActive:e.isActive,onClick:function(t){navigator.clipboard.readText().then((function(t){document.querySelector(".text__input").value=t,function(t){e.onChangeText(t)}(t)})).then((function(){0===document.querySelector(".text__input").value.length&&(console.log(N),f(t.clientX,t.clientY,"\u043e\u0448\u0438\u0431\u043a\u0430, \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e \u0432 \u0431\u0443\u0444\u0435\u0440\u0435 \u043d\u0430\u0445\u043e\u0434\u0438\u0442\u0441\u044f \u043d\u0435 \u0442\u0435\u043a\u0441\u0442",N))}))}})},w=n.p+"static/media/copy_icon_light.b7b0ee85.svg",A=n.p+"static/media/copy_icon_dark.2bd53001.svg";var I=function(e){var t;return t="light"===e.theme?w:A,Object(a.jsx)(T,{type:"copy",icon:t,isActive:e.isActive,onClick:function(e){var t=document.querySelector(".text__input").value;navigator.clipboard.writeText(t),f(e.clientX,e.clientY,"\u0421\u043a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u043d\u043e \u0432 \u0431\u0443\u0444\u0435\u0440",y)}})},q=n.p+"static/media/delete_icon_light.db3a8767.svg",V=n.p+"static/media/delete_icon_dark.a62aca89.svg";var F=function(e){var t;return t="light"===e.theme?q:V,Object(a.jsx)(T,{type:"clear text area",icon:t,isActive:e.isActive,onClick:function(){document.querySelector(".text__input").value="",e.onChangeText("")}})},L=n.p+"static/media/darktheme_icon.5712200e.svg",J=n.p+"static/media/lighttheme_icon.e321a497.svg";var P=function(e){var t,n=o.a.useContext(x);return t=0===n.id?L:J,Object(a.jsx)(T,{type:"toggle theme",icon:t,isActive:!0,onClick:function(){0===n.id?e.onChangeTheme("dark"):e.onChangeTheme("light")}})};n(44);var G=function(e){var t;function n(t){e.onChangeText(t)}t=0===o.a.useContext(x).id?"light":"dark";var c=!0,i=!0;return 0===e.textValue.length&&(c=!1),navigator.clipboard.readText().then((function(e){0===e.length&&(i=!1)})),Object(a.jsxs)("div",{className:"toolbar",children:[Object(a.jsx)(P,{onChangeTheme:e.onChangeTheme}),Object(a.jsx)(I,{theme:t,isActive:c,onChangeText:n}),Object(a.jsx)(S,{theme:t,isActive:i,onChangeText:n}),Object(a.jsx)(F,{theme:t,isActive:c,onChangeText:n,onChangeInRecycle:function(){console.log("toolbar on change in recycle"),e.onChangeInRecycle()},onPopupInit:function(t){e.onPopupInit(t)}}),Object(a.jsx)(p,{})]})},B=(n(45),n.p+"static/media/logo_fb_light.1b53cc59.svg"),E=n.p+"static/media/logo_github_light.b54a62b8.svg",H=n.p+"static/media/logo_linkedin_light.89ce2e72.svg",R=n.p+"static/media/logo_telegram_light.c3f7acaa.svg",W=n.p+"static/media/logo_fb_dark.bbfc0d48.svg",X=n.p+"static/media/logo_github_dark.e9062407.svg",Y=n.p+"static/media/logo_linkedin_dark.5e1d4a88.svg",D=n.p+"static/media/logo_telegram_dark.8e95b74e.svg";var M=function(){var e,t,n,c,i=o.a.useContext(x),s=j(i,"footer__text");return 0===i.id?(e=B,t=E,n=H,c=R):(e=W,t=X,n=Y,c=D),Object(a.jsxs)("div",{className:"footer",children:[Object(a.jsx)("a",{className:"footer__link",href:"./about",children:Object(a.jsx)("p",{className:s,children:"\xa9 \u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440 \u0410\u0444\u0430\u043d\u0430\u0441\u0435\u043d\u043a\u043e, 2021 | \u041e\u0431 \u0430\u0432\u0442\u043e\u0440\u0435"})}),Object(a.jsxs)("div",{className:"footer__social-links",children:[Object(a.jsx)("a",{className:"footer__icon-link",href:"https://www.facebook.com/sasaafanasienka",children:Object(a.jsx)("img",{src:e,alt:"Facebook logo"})}),Object(a.jsx)("a",{className:"footer__icon-link",href:"https://github.com/sasaafanasienka",children:Object(a.jsx)("img",{src:t,alt:"Facebook logo"})}),Object(a.jsx)("a",{className:"footer__icon-link",href:"https://www.linkedin.com/in/\u0430\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440-\u0430\u0444\u0430\u043d\u0430\u0441\u0435\u043d\u043a\u043e-bb672b15a/",children:Object(a.jsx)("img",{src:n,alt:"LinkedIn logo"})}),Object(a.jsx)("a",{className:"footer__icon-link",href:"https://t.me/sanya2020327",children:Object(a.jsx)("img",{src:c,alt:"telegram logo"})})]})]})};n(46);var z=function(e){var t=j(o.a.useContext(x),"main");return Object(a.jsxs)("div",{className:t,children:[Object(a.jsx)(b,{onChangeText:e.onChangeText}),Object(a.jsx)(G,{textValue:e.textValue,onChangeTheme:e.onChangeTheme,onChangeText:e.onChangeText}),Object(a.jsx)(M,{})]})},K=(n(47),n(48),{"\u0437\u043d\u0430\u043a":["\u0437\u043d\u0430\u043a","\u0437\u043d\u0430\u043a\u0430","\u0437\u043d\u0430\u043a\u043e\u0432"],"\u0441\u043b\u043e\u0432\u043e":["\u0441\u043b\u043e\u0432\u043e","\u0441\u043b\u043e\u0432\u0430","\u0441\u043b\u043e\u0432"],"\u0430\u0431\u0437\u0430\u0446":["\u0430\u0431\u0437\u0430\u0446","\u0430\u0431\u0437\u0430\u0446\u0430","\u0430\u0431\u0437\u0430\u0446\u0435\u0432"]}),Q=["01","21","31","41","51","61","71","81","91"],U=["02","03","04","22","23","24","32","33","34","42","43","44","52","53","54","62","63","64","72","73","74","82","83","84","92","93","94"];function Z(e,t){var n=0,a="";return n=e.toString().slice(-2).length<2?"0".concat(e.toString().slice(-2)):e.toString().slice(-2),a=Q.includes(n)?K[t][0]:U.includes(n)?K[t][1]:K[t][2],"".concat(e," ").concat(a)}var $=function(e){var t=j(o.a.useContext(x),"stat__number");return Object(a.jsxs)("div",{className:"stat",children:[Object(a.jsx)("p",{className:t,children:Z(e.textValue.length,"\u0437\u043d\u0430\u043a")}),Object(a.jsx)("p",{className:t,children:Z(e.textValue.toLowerCase().replace(/\n/g," ").split(" ").filter((function(e){return""!==e})).length,"\u0441\u043b\u043e\u0432\u043e")}),Object(a.jsx)("p",{className:t,children:Z(e.textValue.split("\n").filter((function(e){return""!==e})).length,"\u0430\u0431\u0437\u0430\u0446")})]})},ee=(n(49),n(12)),te=n.p+"static/media/fish.51d9f3be.svg";n(50);var ne=function(e){var t="button button_".concat(e.type),n=e.color;return Object(a.jsxs)("button",{onClick:e.onClick,className:t,style:{background:n},children:[function(){var t="button__icon_".concat(e.type);return e.icon?Object(a.jsx)("img",{className:t,alt:e.icon,src:e.icon}):null}(),e.counter&&0!==e.counter?Object(a.jsx)("div",{className:"button__counter",children:e.counter}):null,e.text?e.text:null]})},ae=n(31),ce=n.n(ae),oe=function(e){Object(C.a)(n,e);var t=Object(k.a)(n);function n(e){var a;return Object(_.a)(this,n),(a=t.call(this,e)).state={},a.textGen=a.textGen.bind(Object(ee.a)(a)),a.editText=a.editText.bind(Object(ee.a)(a)),a.sendTextToStatCount=a.sendTextToStatCount.bind(Object(ee.a)(a)),a}return Object(O.a)(n,[{key:"sendTextToStatCount",value:function(e){this.props.onChangeText(e)}},{key:"editText",value:function(e){return e.replace(/\\n\\n/g,"\n")}},{key:"textGen",value:function(){var e=this;ce.a.get("https://fish-text.ru/get?type=paragraph&number=10").then((function(t){var n=e.editText(t.data.text);document.querySelector(".text__input").value=document.querySelector(".text__input").value+n,e.sendTextToStatCount(document.querySelector(".text__input").value)})).catch((function(){console.log("Error in server request")}))}},{key:"render",value:function(){return Object(a.jsx)(ne,{type:"main",color:"red",onClick:this.textGen,icon:te,alt:"fish text button"})}}]),n}(o.a.Component),ie=n.p+"static/media/logo.4a5d448b.svg",se=n.p+"static/media/logo_dark.21fd0ed5.svg";var re=function(e){var t,n=o.a.useContext(x),c=j(n,"header");return t=0===n.id?ie:se,Object(a.jsxs)("header",{className:c,children:[Object(a.jsx)("img",{className:"header__logo",alt:"app logo",src:t}),Object(a.jsx)($,{textValue:e.textValue}),Object(a.jsx)(oe,{onChangeText:e.onChangeText})]})},le=function(){function e(){Object(_.a)(this,e)}return Object(O.a)(e,[{key:"check",value:function(){var e=JSON.parse(localStorage.getItem("defaultTheme"));return e||(localStorage.setItem("defaultTheme",JSON.stringify("light")),localStorage.getItem("defaultTheme"))}},{key:"set",value:function(e){localStorage.setItem("defaultTheme",JSON.stringify(e))}}]),e}();var ue=function(){var e=new le,t=e.check(),n=o.a.useState(t),c=Object(l.a)(n,2),i=c[0],s=c[1],r=o.a.useState(""),u=Object(l.a)(r,2),j=u[0],b=u[1];return Object(a.jsx)(x.Provider,{value:g[i],children:Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(re,{textValue:j,onChangeText:b}),Object(a.jsx)(d.b,{exact:!0,path:"/",children:Object(a.jsx)(z,{textValue:j,onChangeTheme:function(t){s(t),e.set(t)},onChangeText:b})}),Object(a.jsx)(d.b,{path:"/about",children:Object(a.jsx)(h,{})}),Object(a.jsx)(d.b,{path:"*",children:Object(a.jsx)(d.a,{to:"/"})})]})})},he=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,76)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,o=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),o(e),i(e)}))};n(74);s.a.render(Object(a.jsx)(o.a.StrictMode,{children:Object(a.jsx)(r.a,{children:Object(a.jsx)(ue,{})})}),document.getElementById("root")),he()}},[[75,1,2]]]);
//# sourceMappingURL=main.c899a586.chunk.js.map