(this["webpackJsonpsimple-react-homeworks"]=this["webpackJsonpsimple-react-homeworks"]||[]).push([[0],[,,,,,,function(e,a,t){e.exports={someClass:"Affairs_someClass__2TTr4",button:"Affairs_button__1O2yj"}},function(e,a,t){e.exports={received:"Message_received__2rQ83",avatar:"Message_avatar__15X-D",message:"Message_message__1n5si",name:"Message_name__2_hGS",text:"Message_text__37dPQ",time:"Message_time__OISMu"}},function(e,a,t){e.exports={received:"AlternativeMessage_received__1YS3-",avatar:"AlternativeMessage_avatar__3Qpuy",message:"AlternativeMessage_message__fs7SW",name:"AlternativeMessage_name__WpUkP",text:"AlternativeMessage_text__ETbxS",time:"AlternativeMessage_time__1TOiS"}},,function(e,a,t){e.exports={input:"SuperInputText_input__1uEL3",superInput:"SuperInputText_superInput__3Taaz",errorInput:"SuperInputText_errorInput__w3hm2",error:"SuperInputText_error__2H1od"}},,,function(e,a,t){e.exports={testMenu:"Header_testMenu__26Tsz",active:"Header_active__2z6oU"}},function(e,a,t){e.exports={someClass:"Greeting_someClass__1B06L",error:"Greeting_error__3z7m0",correct:"Greeting_correct__3QIuq",textError:"Greeting_textError__nOvCB",count:"Greeting_count__Lv9vz"}},,function(e,a,t){e.exports={default:"SuperButton_default__3MN8a",red:"SuperButton_red__zJ_Wt",button:"SuperButton_button__IHHSX",blink:"SuperButton_blink__2i7nk"}},function(e,a,t){e.exports={label:"SuperCheckbox_label__2h7yn",checkBox:"SuperCheckbox_checkBox__NCddL",spanClassName:"SuperCheckbox_spanClassName__cpLLh"}},,function(e,a,t){e.exports={blue:"HW4_blue__2R_Sh",column:"HW4_column__1kxkY",testSpanError:"HW4_testSpanError__2I-U_"}},,,,,,,function(e,a,t){e.exports={App:"App_App__PC_K7"}},,,function(e,a,t){e.exports=t(40)},,,,,function(e,a,t){},,,,,,function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(25),c=t.n(l),s=(t(34),t(26)),o=t.n(s),u=t(13),i=t.n(u),m=t(5),_=t(1),E=t(7),d=t.n(E);var v=function(e){return r.a.createElement("div",{className:d.a.received},r.a.createElement("img",{className:d.a.avatar,src:e.avatar}),r.a.createElement("div",{className:d.a.message},r.a.createElement("div",{className:d.a.name},e.name),r.a.createElement("div",{className:d.a.text},e.message),r.a.createElement("div",{className:d.a.time},e.time)))},p=t(8),f=t.n(p);var h=function(e){return r.a.createElement("div",{className:f.a.received},r.a.createElement("img",{className:f.a.avatar,src:e.avatar}),r.a.createElement("div",{className:f.a.message},r.a.createElement("div",{className:f.a.name},e.name),r.a.createElement("div",{className:f.a.text},e.message),r.a.createElement("div",{className:f.a.time},e.time)))},b="https://png.pngtree.com/element_our/20190530/ourlarge/pngtree-520-couple-avatar-boy-avatar-little-dinosaur-cartoon-cute-image_1263411.jpg",g="Roman",C="\u0417\u0434\u0435\u0441\u044c \u043e\u0447\u0435\u043d\u044c \u0438\u043d\u0442\u0435\u0440\u0435\u0441\u043d\u044b\u0439 \u0442\u0435\u043a\u0441\u0442. \u0442\u044b \u0442\u0430\u043a\u043e\u0435 \u043b\u044e\u0431\u0438\u0448\u044c. \u0417\u0434\u0435\u0441\u044c \u043e\u0447\u0435\u043d\u044c \u0438\u043d\u0442\u0435\u0440\u0435\u0441\u043d\u044b\u0439 \u0442\u0435\u043a\u0441\u0442. \u0442\u044b \u0442\u0430\u043a\u043e\u0435 \u043b\u044e\u0431\u0438\u0448\u044c. \u0417\u0434\u0435\u0441\u044c \u043e\u0447\u0435\u043d\u044c \u0438\u043d\u0442\u0435\u0440\u0435\u0441\u043d\u044b\u0439 \u0442\u0435\u043a\u0441\u0442. \u0442\u044b \u0442\u0430\u043a\u043e\u0435 \u043b\u044e\u0431\u0438\u0448\u044c",N="22:00";var k=function(){return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 1",r.a.createElement(v,{avatar:b,name:g,message:C,time:N}),r.a.createElement(h,{avatar:b,name:g,message:C,time:N}),r.a.createElement("hr",null),r.a.createElement("hr",null))},x=t(4),S=t(6),O=t.n(S);var y=function(e){return r.a.createElement("div",{className:O.a.someClass},r.a.createElement("div",null,e.affair.name),r.a.createElement("div",null,e.affair.priority),r.a.createElement("button",{onClick:function(){e.deleteAffairCallback(e.affair._id)}},"X"))};var j=function(e){var a=e.data.map((function(a){return r.a.createElement(y,{key:a._id,affair:a,deleteAffairCallback:e.deleteAffairCallback})}));return r.a.createElement("div",null,a,r.a.createElement("button",{className:O.a.button,onClick:function(){e.setFilter("all")}},"All"),r.a.createElement("button",{className:O.a.button,onClick:function(){e.setFilter("high")}},"High"),r.a.createElement("button",{className:O.a.button,onClick:function(){e.setFilter("middle")}},"Middle"),r.a.createElement("button",{className:O.a.button,onClick:function(){e.setFilter("low")}},"Low"))},w=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var M=function(){var e=Object(n.useState)(w),a=Object(x.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)("all"),s=Object(x.a)(c,2),o=s[0],u=s[1],i=function(e,a){return"all"===a?e:e.filter((function(e){return e.priority===a}))}(t,o);return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 2",r.a.createElement(j,{data:i,setFilter:u,deleteAffairCallback:function(e){return l(function(e,a){return e.filter((function(e){return e._id!==a}))}(t,e))}}),r.a.createElement("hr",null),r.a.createElement("hr",null))},A=t(28),I=t(14),T=t.n(I),P=function(e){var a=e.name,t=e.onKeyPressCallback,n=e.setNameCallback,l=e.addUser,c=e.error,s=e.totalUsers,o=T.a.correct;return""!==c&&(o=T.a.error),r.a.createElement("div",null,r.a.createElement("input",{value:a,onChange:n,onKeyPress:t,className:o}),r.a.createElement("button",{onClick:l},"add"),r.a.createElement("span",{className:T.a.count},s),r.a.createElement("div",{className:T.a.textError},c))},U=function(e){var a=e.users,t=e.addUserCallback,l=Object(n.useState)(""),c=Object(x.a)(l,2),s=c[0],o=c[1],u=Object(n.useState)(""),i=Object(x.a)(u,2),m=i[0],_=i[1],E=function(){""!==s?(t(s),_(""),alert("Hello, ".concat(s,"!")),o("")):(_("ERROR"),o(""))},d=a.length;return r.a.createElement(P,{name:s,setNameCallback:function(e){o(e.currentTarget.value)},onKeyPressCallback:function(e){"Enter"===e.key&&E()},addUser:E,error:m,totalUsers:d})},B=t(42);var H=function(){var e=Object(n.useState)([]),a=Object(x.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 3",r.a.createElement(U,{users:t,addUserCallback:function(e){var a={_id:Object(B.a)(),name:e};l([a].concat(Object(A.a)(t)))}}),r.a.createElement("hr",null),r.a.createElement("hr",null))},J=t(9),L=t(10),R=t.n(L),W=function(e){e.type;var a=e.onChange,t=e.onChangeText,n=e.onKeyPress,l=e.onEnter,c=e.error,s=(e.className,e.spanClassName),o=Object(J.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),u="".concat(R.a.error," ").concat(s||""),i="".concat(R.a.input," ").concat(c?R.a.errorInput:R.a.superInput," ").concat(R.a.className);return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",Object.assign({type:"text",onChange:function(e){a&&a(e),t&&t(e.currentTarget.value)},onKeyPress:function(e){n&&n(e),l&&"Enter"===e.key&&l()},className:i},o)),c&&r.a.createElement("span",{className:u},c))},K=t(19),z=t.n(K),F=t(16),G=t.n(F),Q=function(e){var a=e.red,t=e.className,n=Object(J.a)(e,["red","className"]),l="".concat(G.a.button," ").concat(a?G.a.red:G.a.default," ").concat(t);return r.a.createElement("button",Object.assign({className:l},n))},X=t(17),Y=t.n(X),q=function(e){e.type;var a=e.onChange,t=e.onChangeChecked,n=e.className,l=(e.spanClassName,e.children),c=Object(J.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),s="".concat(Y.a.checkbox," ").concat(n||"");return r.a.createElement("label",{className:Y.a.label},r.a.createElement("input",Object.assign({type:"checkbox",onChange:function(e){a&&a(e),t&&t(e.currentTarget.checked)},className:s},c)),l&&r.a.createElement("span",{className:Y.a.spanClassName},l))};var D=function(){var e=Object(n.useState)(""),a=Object(x.a)(e,2),t=a[0],l=a[1],c=t?"":"error",s=function(){c?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(t)},o=Object(n.useState)(!1),u=Object(x.a)(o,2),i=u[0],m=u[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 4",r.a.createElement("div",{className:z.a.column},r.a.createElement(W,{value:t,onChangeText:l,onEnter:s,error:c}),r.a.createElement(W,{className:z.a.blue}),r.a.createElement(Q,null,"default"),r.a.createElement(Q,{red:!0,onClick:s},"delete "),r.a.createElement(Q,{disabled:!0},"disabled"),r.a.createElement(q,{checked:i,onChangeChecked:m},"some text "),r.a.createElement(q,{checked:i,onChange:function(e){return m(e.currentTarget.checked)}})),r.a.createElement("hr",null),r.a.createElement("hr",null))};var $=function(){return r.a.createElement("div",null,r.a.createElement(k,null),r.a.createElement(M,null),r.a.createElement(H,null),r.a.createElement(D,null))};var V=function(){return r.a.createElement("div",null,r.a.createElement("div",null,"404"),r.a.createElement("div",null,"Page not found!"),r.a.createElement("div",null,"\u0443\u043a\u0440\u0430\u0441\u0438\u043b"),r.a.createElement("img",{src:"https://avatars.githubusercontent.com/u/60825546?v=4"}))};var Z=function(){return r.a.createElement("div",null,"JUNIOR")};var ee=function(){return r.a.createElement("div",null,"JUNIOR PLUS")},ae="/pre-junior",te="/junior",ne="/junior-plus";var re=function(){return r.a.createElement("div",null,r.a.createElement(_.d,null,r.a.createElement(_.b,{path:"/",exact:!0,render:function(){return r.a.createElement(_.a,{to:ae})}}),r.a.createElement(_.b,{path:ae,render:function(){return r.a.createElement($,null)}}),r.a.createElement(_.b,{path:te,render:function(){return r.a.createElement(Z,null)}}),r.a.createElement(_.b,{path:ne,render:function(){return r.a.createElement(ee,null)}}),r.a.createElement(_.b,{render:function(){return r.a.createElement(V,null)}})))};var le=function(){return r.a.createElement("div",null,r.a.createElement("ul",{className:i.a.testMenu},r.a.createElement("li",null,r.a.createElement("a",null,"Menu"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(m.b,{to:ae,activeClassName:i.a.active},"Pre-Junior")),r.a.createElement("li",null,r.a.createElement(m.b,{to:te,activeClassName:i.a.active},"Junior")),r.a.createElement("li",null,r.a.createElement(m.b,{to:ne,activeClassName:i.a.active},"Junior-Plus"))))))};var ce=function(){return r.a.createElement("div",null,r.a.createElement(m.a,null,r.a.createElement("div",null,"react homeworks:"),r.a.createElement(le,null),r.a.createElement(re,null)))};var se=function(){return r.a.createElement("div",{className:o.a.App},r.a.createElement(ce,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(se,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[29,1,2]]]);
//# sourceMappingURL=main.b8a04bfc.chunk.js.map