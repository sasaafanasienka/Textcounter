(this["webpackJsonp06-text-counter"]=this["webpackJsonp06-text-counter"]||[]).push([[0],{38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){},50:function(e,t,n){},51:function(e,t,n){},70:function(e,t,n){},71:function(e,t,n){},72:function(e,t,n){},73:function(e,t,n){},79:function(e,t,n){},80:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(1),o=n.n(c),i=n(3),s=n.n(i),r=(n(38),n(18)),l=n(21),u=(n(39),n(40),n.p+"static/media/avatar.d9df8d24.jpg");var d=function(){return Object(a.jsxs)("div",{className:"about-author",children:[Object(a.jsx)("img",{className:"about-author__avatar",src:u,alt:"\u0424\u043e\u0442\u043e \u0430\u0432\u0442\u043e\u0440\u0430"}),Object(a.jsx)("h1",{className:"about-author__title",children:" \u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440 \u0410\u0444\u0430\u043d\u0430\u0441\u0435\u043d\u043a\u043e "}),Object(a.jsx)("h2",{className:"about-author__subtitle",children:" Junior Frontend-\u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a "}),Object(a.jsx)("a",{href:"./",children:Object(a.jsx)("p",{className:"footer__text",children:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"})})]})},h=n(6),j=(n(41),n(4)),b=n(5),p=n(8),m=n(7),g=(n(42),function(e){Object(p.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(j.a)(this,n),(a=t.call(this,e)).state={},a}return Object(b.a)(n,[{key:"render",value:function(){var e="tool-button",t=null;return!0===this.props.isActive&&(e="tool-button tool-button_active",t=this.props.onClick),Object(a.jsx)("button",{className:e,children:Object(a.jsx)("img",{className:"tool-button__icon",onClick:t,src:this.props.icon,alt:this.props.type})})}}]),n}(o.a.Component)),x={light:{id:0,name:"\u0421\u0432\u0435\u0442\u043b\u0430\u044f \u0442\u0435\u043c\u0430",modifierClass:"",background:"#eeeeee"},dark:{id:1,name:"\u0422\u0435\u043c\u043d\u0430\u044f \u0442\u0435\u043c\u0430",modifierClass:"_dark",background:"#222222"}},v=o.a.createContext();function f(e,t){return 0===e.id?t:"".concat(t," ").concat(t).concat(e.modifierClass)}n(43);var O=function(){var e=f(o.a.useContext(v),"popup-message");return Object(a.jsx)("p",{className:"".concat(e," popup-message_unactive")})};var _=function(e){var t=f(o.a.useContext(v),"text__input");return Object(a.jsx)("div",{className:"text",children:Object(a.jsx)("textarea",{onChange:function(){e.onChangeText(document.querySelector(".text__input").value)},className:t,type:"text",placeholder:"\u0412\u0430\u0448 \u0442\u0435\u043a\u0441\u0442"})})},y=(n(44),n(45),{"\u0437\u043d\u0430\u043a":["\u0437\u043d\u0430\u043a","\u0437\u043d\u0430\u043a\u0430","\u0437\u043d\u0430\u043a\u043e\u0432"],"\u0441\u043b\u043e\u0432\u043e":["\u0441\u043b\u043e\u0432\u043e","\u0441\u043b\u043e\u0432\u0430","\u0441\u043b\u043e\u0432"],"\u0430\u0431\u0437\u0430\u0446":["\u0430\u0431\u0437\u0430\u0446","\u0430\u0431\u0437\u0430\u0446\u0430","\u0430\u0431\u0437\u0430\u0446\u0435\u0432"]}),k=["01","21","31","41","51","61","71","81","91"],C=["02","03","04","22","23","24","32","33","34","42","43","44","52","53","54","62","63","64","72","73","74","82","83","84","92","93","94"];function S(e,t){var n=0,a="";return n=e.toString().slice(-2).length<2?"0".concat(e.toString().slice(-2)):e.toString().slice(-2),a=k.includes(n)?y[t][0]:C.includes(n)?y[t][1]:y[t][2],"".concat(e," ").concat(a)}var N=function(e){var t=f(o.a.useContext(v),"stat__number");return Object(a.jsxs)("div",{className:"stat",children:[Object(a.jsx)("p",{className:t,children:S(e.textValue.length,"\u0437\u043d\u0430\u043a")}),Object(a.jsx)("p",{className:t,children:S(e.textValue.toLowerCase().replace(/\n/g," ").split(" ").filter((function(e){return""!==e})).length,"\u0441\u043b\u043e\u0432\u043e")}),Object(a.jsx)("p",{className:t,children:S(e.textValue.split("\n").filter((function(e){return""!==e})).length,"\u0430\u0431\u0437\u0430\u0446")})]})},T=(n(46),n(47),n(2)),w=n.p+"static/media/paste_icon.661daeb2.svg";function L(e,t,n,a){var c=document.querySelector(".popup-message");c.classList.add("popup-message_active"),window.innerWidth/2>e?c.style.left="".concat(e,"px"):c.style.right="".concat(window.innerWidth-e,"px"),window.innerHeight/2>t?c.style.top="".concat(t,"px"):c.style.bottom="".concat(window.innerHeight-t,"px"),c.style.color=a,c.innerText=n,c.classList.remove("popup-message_unactive"),setTimeout((function(){c.classList.add("popup-message_unactive"),c.classList.remove("popup-message_active")}),3e3)}o.a.Component;var F=n.p+"static/media/copy_icon_light.b7b0ee85.svg",I=n.p+"static/media/copy_icon_dark.2bd53001.svg";var J=function(e){var t;return t="light"===e.theme?F:I,Object(a.jsx)(g,{type:"copy",icon:t,isActive:e.isActive,onClick:function(e){var t=document.querySelector(".text__input").value;navigator.clipboard.writeText(t),L(e.clientX,e.clientY,"\u0421\u043a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u043d\u043e \u0432 \u0431\u0443\u0444\u0435\u0440","green")}})},V=n.p+"static/media/delete_icon.7a2212e7.svg",q=function(){function e(){Object(j.a)(this,e)}return Object(b.a)(e,[{key:"remove",value:function(e){localStorage.removeItem(e),localStorage.setItem([e],JSON.stringify({}))}},{key:"checkLocalStorage",value:function(){return void 0===localStorage.recycle&&localStorage.setItem("recycle",JSON.stringify({})),JSON.parse(localStorage.recycle)}},{key:"loadToLocalStorage",value:function(e){console.log(localStorage);var t=this.makeItemForRecycle(e),n=this.checkLocalStorage();n[t.deleteTime.toString()]=t,localStorage.setItem("recycle",JSON.stringify(n)),console.log(localStorage)}},{key:"addTo",value:function(e,t){var n=this.loadFrom(e);n[t.deleteTime.toString()]=t,this.loadTo(e,n)}},{key:"loadTo",value:function(e,t){localStorage.setItem(e,JSON.stringify(t))}},{key:"loadFrom",value:function(e){return void 0===localStorage[e]&&localStorage.setItem([e],JSON.stringify({})),JSON.parse(localStorage[e])}}]),e}(),A=["\u044f\u043d\u0432\u0430\u0440\u044f","\u0444\u0435\u0432\u0440\u0430\u043b\u044f","\u043c\u0430\u0440\u0442\u0430","\u0430\u043f\u0440\u0435\u043b\u044f","\u043c\u0430\u044f","\u0438\u044e\u043d\u044f","\u0438\u044e\u043b\u044f","\u0430\u0432\u0433\u0443\u0441\u0442\u0430","\u0441\u0435\u043d\u0442\u044f\u0431\u0440\u044f","\u043e\u043a\u0442\u044f\u0431\u0440\u044f","\u043d\u043e\u044f\u0431\u0440\u044f","\u0434\u0435\u043a\u0430\u0431\u0440\u044f"];n(48);var P=function(e){var t="button button_".concat(e.type),n=e.color;return Object(a.jsxs)("button",{onClick:e.onClick,className:t,style:{background:n},children:[function(){var t="button__icon_".concat(e.type);return e.icon?Object(a.jsx)("img",{className:t,alt:e.icon,src:e.icon}):null}(),e.counter&&0!==e.counter?Object(a.jsx)("div",{className:"button__counter",children:e.counter}):null,e.text?e.text:null]})},G=(n(49),n.p+"static/media/close.1287881a.svg"),B=function(e){Object(p.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(j.a)(this,n),(a=t.call(this,e)).state={type:a.props.type},a.close=a.close.bind(Object(T.a)(a)),a}return Object(b.a)(n,[{key:"close",value:function(){document.querySelector(".".concat(this.props.classToClose)).classList.remove("".concat(this.props.classToClose,"_active"))}},{key:"render",value:function(){return Object(a.jsx)("button",{onClick:this.close,className:"button-close-popup",children:Object(a.jsx)("img",{src:G,alt:"close"})})}}]),n}(o.a.Component),E=(n(50),function(e){Object(p.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(j.a)(this,n),(a=t.call(this,e)).state={},a}return Object(b.a)(n,[{key:"render",value:function(){return Object(a.jsx)("p",{className:"popup-title",children:this.props.title})}}]),n}(o.a.Component)),H=(n(51),function(e){Object(p.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(j.a)(this,n),(a=t.call(this,e)).state={},a}return Object(b.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("div",{className:"popup",children:[Object(a.jsx)(E,{title:this.props.title}),Object(a.jsx)(B,{classToClose:"popup"}),this.props.content]})}}]),n}(o.a.Component)),W=new q,D=(o.a.Component,n.p+"static/media/darktheme_icon.5712200e.svg"),M=n.p+"static/media/lighttheme_icon.e321a497.svg";var R=function(e){var t,n=o.a.useContext(v);return t=0===n.id?D:M,Object(a.jsx)(g,{type:"toggle theme",icon:t,isActive:!0,onClick:function(){0===n.id?e.onChangeTheme("dark"):e.onChangeTheme("light")}})};var X=function(e){var t;t=0===o.a.useContext(v).id?"light":"dark";var n=!0;return 0===e.textValue.length&&(n=!1),Object(a.jsxs)("div",{className:"toolbar",children:[Object(a.jsx)(R,{onChangeTheme:e.onChangeTheme}),Object(a.jsx)(J,{theme:t,isActive:n,onChangeText:function(){e.onChangeText()}}),Object(a.jsx)(O,{})]})},Y=n.p+"static/media/fish.51d9f3be.svg",z=n(31),K=n.n(z),Q=function(e){Object(p.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(j.a)(this,n),(a=t.call(this,e)).state={},a.textGen=a.textGen.bind(Object(T.a)(a)),a.editText=a.editText.bind(Object(T.a)(a)),a.sendTextToStatCount=a.sendTextToStatCount.bind(Object(T.a)(a)),a}return Object(b.a)(n,[{key:"sendTextToStatCount",value:function(e){this.props.onChangeText(e)}},{key:"editText",value:function(e){return e.replace(/\\n\\n/g,"\n")}},{key:"textGen",value:function(){var e=this;K.a.get("https://fish-text.ru/get?type=paragraph&number=10").then((function(t){var n=e.editText(t.data.text);document.querySelector(".text__input").value=document.querySelector(".text__input").value+n,e.sendTextToStatCount(document.querySelector(".text__input").value)})).catch((function(){console.log("Error in server request")}))}},{key:"render",value:function(){return Object(a.jsx)(P,{type:"main",color:"red",onClick:this.textGen,icon:Y,alt:"fish text button"})}}]),n}(o.a.Component),U=n.p+"static/media/logo.4a5d448b.svg",Z=(n(70),new q),$=function(e){Object(p.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(j.a)(this,n),(a=t.call(this,e)).state={key:a.props.keyProp,title:a.props.title,time:a.props.time,length:a.props.length},a.recover=a.recover.bind(Object(T.a)(a)),a.refreshStat=a.refreshStat.bind(Object(T.a)(a)),a}return Object(b.a)(n,[{key:"refreshStat",value:function(){this.props.onChangeText()}},{key:"recover",value:function(){var e=Z.loadFrom("recycle");document.querySelector(".text__input").value=e[this.state.key].text,this.refreshStat()}},{key:"render",value:function(){var e=this.props.keyProp,t=this.props.title,n=this.props.time,c=this.props.length;return Object(a.jsx)("div",{className:"recycle-item",children:Object(a.jsxs)("button",{className:"recycle-item__button",onClick:this.recover,children:[Object(a.jsx)("p",{className:"recycle-item__title",children:t}),Object(a.jsx)("p",{className:"recycle-item__subtitle",children:S(c,"\u0437\u043d\u0430\u043a")}),Object(a.jsx)("p",{className:"recycle-item__subtitle",children:n})]})},e)}}]),n}(o.a.Component),ee=n.p+"static/media/recycle.e52d6c54.svg",te=(n(71),new q),ne=(o.a.Component,new q,o.a.Component,n(72),n.p+"static/media/logo_fb_light.1b53cc59.svg"),ae=n.p+"static/media/logo_github_light.b54a62b8.svg",ce=n.p+"static/media/logo_linkedin_light.89ce2e72.svg",oe=n.p+"static/media/logo_telegram_light.c3f7acaa.svg",ie=n.p+"static/media/logo_fb_dark.bbfc0d48.svg",se=n.p+"static/media/logo_github_dark.e9062407.svg",re=n.p+"static/media/logo_linkedin_dark.5e1d4a88.svg",le=n.p+"static/media/logo_telegram_dark.8e95b74e.svg";var ue=function(){var e,t,n,c,i=o.a.useContext(v),s=f(i,"footer__text");return 0===i.id?(e=ne,t=ae,n=ce,c=oe):(e=ie,t=se,n=re,c=le),Object(a.jsxs)("div",{className:"footer",children:[Object(a.jsx)("a",{className:"footer__link",href:"./about",children:Object(a.jsx)("p",{className:s,children:"\xa9 \u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440 \u0410\u0444\u0430\u043d\u0430\u0441\u0435\u043d\u043a\u043e, 2021 | \u041e\u0431 \u0430\u0432\u0442\u043e\u0440\u0435"})}),Object(a.jsxs)("div",{className:"footer__social-links",children:[Object(a.jsx)("a",{className:"footer__icon-link",href:"https://www.facebook.com/sasaafanasienka",children:Object(a.jsx)("img",{src:e,alt:"Facebook logo"})}),Object(a.jsx)("a",{className:"footer__icon-link",href:"https://github.com/sasaafanasienka",children:Object(a.jsx)("img",{src:t,alt:"Facebook logo"})}),Object(a.jsx)("a",{className:"footer__icon-link",href:"https://www.linkedin.com/in/\u0430\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440-\u0430\u0444\u0430\u043d\u0430\u0441\u0435\u043d\u043a\u043e-bb672b15a/",children:Object(a.jsx)("img",{src:n,alt:"LinkedIn logo"})}),Object(a.jsx)("a",{className:"footer__icon-link",href:"https://t.me/sanya2020327",children:Object(a.jsx)("img",{src:c,alt:"telegram logo"})})]})]})},de=new q;var he=function(e){void 0===localStorage.recycle&&de.loadTo("recycle",{});var t=f(o.a.useContext(v),"main");return Object(a.jsxs)("div",{className:t,children:[Object(a.jsx)(_,{onChangeText:e.onChangeText}),Object(a.jsx)(X,{textValue:e.textValue,onChangeTheme:e.onChangeTheme}),Object(a.jsx)(ue,{})]})},je=(n(73),n.p+"static/media/logo_dark.21fd0ed5.svg");var be=function(e){var t,n=o.a.useContext(v),c=f(n,"header");return t=0===n.id?U:je,Object(a.jsxs)("header",{className:c,children:[Object(a.jsx)("img",{className:"header__logo",alt:"app logo",src:t}),Object(a.jsx)(N,{textValue:e.textValue}),Object(a.jsx)(Q,{onChangeText:e.onChangeText})]})};var pe=function(){var e=o.a.useState("dark"),t=Object(l.a)(e,2),n=t[0],c=t[1],i=o.a.useState(""),s=Object(l.a)(i,2),r=s[0],u=s[1];return Object(a.jsx)(v.Provider,{value:x[n],children:Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(be,{textValue:r,onChangeText:u}),Object(a.jsx)(h.b,{exact:!0,path:"/",children:Object(a.jsx)(he,{textValue:r,onChangeTheme:c,onChangeText:u})}),Object(a.jsx)(h.b,{path:"/about",children:Object(a.jsx)(d,{})}),Object(a.jsx)(h.b,{path:"*",children:Object(a.jsx)(h.a,{to:"/"})})]})})},me=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,81)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,o=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),o(e),i(e)}))};n(79);s.a.render(Object(a.jsx)(o.a.StrictMode,{children:Object(a.jsx)(r.a,{children:Object(a.jsx)(pe,{})})}),document.getElementById("root")),me()}},[[80,1,2]]]);
//# sourceMappingURL=main.4581e1df.chunk.js.map