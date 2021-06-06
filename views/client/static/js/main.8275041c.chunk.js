(this["webpackJsonpentrance-monitor-client"]=this["webpackJsonpentrance-monitor-client"]||[]).push([[0],{105:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(7),l=n.n(c),o=(n(79),n(11)),i=n.n(o),u=n(14),s=(n(81),n(82),n(19)),d=n(25),f="https://entrance-monitor.azurewebsites.net",m=function(){var e,t,n,a,r=arguments;return i.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:return e=r.length>0&&void 0!==r[0]?r[0]:"",t=r.length>1&&void 0!==r[1]?r[1]:{},c.next=4,i.a.awrap(fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}));case 4:return n=c.sent,a={},c.prev=6,c.next=9,i.a.awrap(n.json());case 9:a=c.sent,c.next=14;break;case 12:c.prev=12,c.t0=c.catch(6);case 14:return c.abrupt("return",a);case 15:case"end":return c.stop()}}),null,null,[[6,12]])},g=n(135),v=n(140),p=n(139),h=n(65),b=n.n(h),E=n(66),w=n.n(E),S=n(141),O=n(22),k=n(39),y=n.n(k),j=Object(g.a)((function(e){return{container:{position:"absolute",width:"100%",height:"100%",backgroundColor:"#244e7b",alignContent:"center",justifyContent:"center",color:"white"},gridCellCentered:{justifyContent:"center",alignContent:"center",display:"grid"},textField:{"& label, & input":{color:"white"},"& fieldset":{borderColor:"rgba(255, 255, 255, 0.23)"},"& .MuiOutlinedInput-root.Mui-focused":{"& .MuiOutlinedInput-notchedOutline":{borderColor:"white",borderWidth:"2px"}},"& .MuiFormLabel-root.Mui-focused":{color:"white"},"& .MuiOutlinedInput-root:hover":{"& .MuiOutlinedInput-notchedOutline":{borderColor:"rgba(255, 255, 255, 0.87)"}}},links:{"& a":{color:"white"},"& a:visited":{color:"white"}},indicatorsCell:{display:"grid",justifyContent:"right"},focusLockCell:{display:"grid",justifyItems:"center",alignItems:"center"},link:{cursor:"pointer",textDecoration:"underline"}}})),x=function(){var e=Object(a.useState)(!1),t=Object(u.a)(e,2),n=t[0],c=t[1],l=Object(a.useState)(null),o=Object(u.a)(l,2),d=o[0],m=o[1],g=Object(a.useState)(!1),h=Object(u.a)(g,2),E=h[0],k=h[1],x=Object(a.useState)(!1),I=Object(u.a)(x,2),C=I[0],N=(I[1],Object(a.useState)(!0)),H=Object(u.a)(N,2),G=H[0],B=H[1],M=j();Object(a.useEffect)((function(){var e=localStorage.getItem("guestsBacklog");e&&e.length>0&&A()}),[]);var _=r.a.createRef(),D=function(e){var t;return i.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return c(!0),k(!1),m(!1),t=_.current,null==e&&(e={guestId:_.current.value}),n.abrupt("return",y()({method:"post",url:"".concat(f,"/addGuest"),timeout:5e3,data:e}).then((function(e){return c(!1),null!=e.data&&e.data.success?k(!0):m(!0),t.value="",t.focus(),e.data})).catch((function(n){return m(!0),T({guestId:e.guestId}),t.value="",{success:!1}})).finally((function(){c(!1)})));case 6:case"end":return n.stop()}}))},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.guestId;c(!0),k(!1),m(!1),null==t&&(t=_.current.value);var n=JSON.parse(localStorage.getItem("guestsBacklog"));null==n&&(n=[]),null==n.find((function(e){return e.guestId===t}))&&(n.push({guestId:t,arrival_time:(new Date).toISOString()}),localStorage.setItem("guestsBacklog",JSON.stringify(n))),c(!1),k(!0),_.current&&(_.current.value="")},A=function(){var e=JSON.parse(localStorage.getItem("guestsBacklog"));if(null!=e){var t=[];e.forEach((function(e){return i.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:t.push(D(e));case 1:case"end":return n.stop()}}))})),y.a.all(t).then(y.a.spread((function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.every((function(e){return e&&e.success}))&&localStorage.setItem("guestsBacklog",JSON.stringify([]))})))}},L=function(e){if(e&&e.preventDefault(),_.current&&""!==_.current.value){var t=_.current.value.match(/\D/);if(t&&t.length>0)return m(!0),void k(!1)}C?T():D()},F=function(){if(G){var e=_.current;null!=e&&(setTimeout((function(){return e.focus()}),1),console.log("focused!"))}};return G&&setTimeout((function(){return F()}),1),r.a.createElement(r.a.Fragment,null,r.a.createElement(O.b,{className:M.container,columns:"1fr auto 1fr",rows:"1fr auto auto 1fr",areas:["nav title indicators","focusLock form hiddenSubmit",". loader .",". . ."]},r.a.createElement(O.a,{area:"nav",className:M.links},r.a.createElement(s.b,{to:"/client/viewGuests"}," View Guests ")," ",r.a.createElement("br",null),r.a.createElement(s.b,{to:"/client/viewExpected"}," Expected ")),r.a.createElement(O.a,{area:"title"},"Entrance Monitoring System"),r.a.createElement(O.a,{area:"form"},r.a.createElement("form",{onSubmit:L},r.a.createElement(v.a,{id:"outlined-required",label:"Guest ID",className:M.textField,margin:"normal",variant:"outlined",inputRef:_,autoFocus:!0,disabled:n,inputProps:{onBlur:F}}))),r.a.createElement(O.a,{area:"indicators",className:M.indicatorsCell},r.a.createElement("div",null,null!=JSON.parse(localStorage.getItem("guestsBacklog"))&&JSON.parse(localStorage.getItem("guestsBacklog")).length>0?r.a.createElement("div",{style:{fontSize:"2em"}}," \u05e0\u05ea\u05d5\u05e0\u05d9\u05dd \u05dc\u05d0 \u05e9\u05de\u05d5\u05e8\u05d9\u05dd ,\u05d0\u05e0\u05d0 ",r.a.createElement("span",{onClick:A,className:M.link}," \u05e9\u05dc\u05d7 ")," ",r.a.createElement("span",{id:"testStorage"}," ")," ",r.a.createElement("span",{onClick:function(){return document.getElementById("testStorage").innerHTML=localStorage.getItem("guestsBacklog")}}," test ")," "):null)),r.a.createElement(O.a,{area:"focusLock",className:M.focusLockCell},"Focus lock",r.a.createElement(S.a,{checked:G,onChange:function(){return B(!G)},value:"focusLock",color:"secondary"})),r.a.createElement(O.a,{area:"hiddenSubmit",onClick:L}),r.a.createElement(O.a,{area:"loader",className:M.gridCellCentered},d?r.a.createElement("div",{style:{color:"red"}}," ",r.a.createElement(b.a,null)," "):null,n?r.a.createElement(p.a,{color:"inherit"}):null,E?r.a.createElement("div",{style:{color:"".concat(C?"orange":"lime")}},r.a.createElement(w.a,null)):null)))},I=n(38),C=(n(61),function(){var e=Object(a.useState)(null),t=Object(u.a)(e,2),n=t[0],c=t[1];return Object(a.useEffect)((function(){!function(){var e;i.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:if(n){t.next=5;break}return t.next=3,i.a.awrap(m("".concat(f,"/allGuests")));case 3:e=t.sent,c(e.results);case 5:case"end":return t.stop()}}))}()})),r.a.createElement("div",null,n?r.a.createElement(r.a.Fragment,null,r.a.createElement(s.b,{to:"/client/"}," Add Guest ")," ",r.a.createElement("br",null),r.a.createElement(s.b,{to:"/client/viewExpected"}," Expected ")," ",r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("div",null,"Total Guests: ",n.length),r.a.createElement(I.a,{data:n,filterable:!0,defaultFilterMethod:function(e,t){return String(t[e.id]).includes(e.value)},columns:[{Header:"DB Info",columns:[{Header:"ID",accessor:"id"}]},{Header:"Guest Info",columns:[{Header:"Personal Number",accessor:"guest_id",filterMethod:function(e,t){return t[e.id].startsWith(e.value)}},{Header:"Name",accessor:"guest_name"},{Header:"Rank",accessor:"rank"},{Header:"Unit",accessor:"unit"}]},{Header:"Arrival Info",columns:[{Header:"Arrival Time",accessor:"arrival_time",Cell:function(e){return r.a.createElement("span",null,e.value?new Date(e.value).toLocaleTimeString():null)}}]}],defaultPageSize:10,className:"-striped -highlight"})):null)}),N=n(67),H=function(){var e,t=Object(a.useState)(null),n=Object(u.a)(t,2),c=n[0],l=n[1],o=Object(a.useState)(null),d=Object(u.a)(o,2),g=d[0],v=d[1],p=Object(a.useState)(null),h=Object(u.a)(p,2),b=h[0],E=h[1];(Object(a.useEffect)((function(){!function(){var e;i.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:if(g){t.next=5;break}return t.next=3,i.a.awrap(m("".concat(f,"/allExpectedGuests")));case 3:e=t.sent,v(e.results);case 5:case"end":return t.stop()}}))}()})),Object(a.useEffect)((function(){!function(){var e;i.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:if(b){t.next=5;break}return t.next=3,i.a.awrap(m("".concat(f,"/allGuests")));case 3:e=t.sent,E(e.results);case 5:case"end":return t.stop()}}))}()})),g&&b&&!c)&&l(g.map((function(t){return Object(N.a)({},t,{arrived:b.some((function(e){return e.guest_id===t.guest_id})),arrival_time:null!=(e=b.find((function(e){return t.guest_id===e.guest_id})))?e.arrival_time:null})})));return r.a.createElement("div",null,c?r.a.createElement(r.a.Fragment,null,r.a.createElement(s.b,{to:"/client/"}," Add Guest ")," ",r.a.createElement("br",null),r.a.createElement(s.b,{to:"/client/viewGuests"}," View Guests ")," ",r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("div",null,"Total Guests: ",c.filter((function(e){return e.arrived})).length," / ",c.length),r.a.createElement(I.a,{data:c,filterable:!0,defaultFilterMethod:function(e,t){return String(t[e.id]).includes(e.value)},columns:[{Header:"DB Info",columns:[{Header:"ID",accessor:"id"}]},{Header:"Guest Info",columns:[{Header:"Personal Number",accessor:"guest_id",filterMethod:function(e,t){return String(t[e.id]).startsWith(e.value)}},{Header:"Name",accessor:"guest_name"},{Header:"Rank",accessor:"rank"},{Header:"Unit",accessor:"unit"},{Header:"Arrived",accessor:"arrival_time",Cell:function(e){return r.a.createElement("span",null,r.a.createElement("span",{style:{color:e.value?"#57d500":"#ff2e00"}},"\u25cf")," ",e.value?"Yes "+new Date(e.value).toLocaleTimeString():"No")}}]}],defaultPageSize:10,className:"-striped -highlight"})):null)},G=function(e){var t=e.verify,n=Object(a.useRef)();return r.a.createElement("div",null,"login",r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),m("".concat(f,"/token"),{password:n.current.value}).then((function(){return t()}))}},r.a.createElement("input",{ref:n,type:"password"}),r.a.createElement("button",{type:"submit"}," login ")))};var B=function(){var e=Object(a.useState)(!1),t=Object(u.a)(e,2),n=t[0],c=t[1],l=function(){return i.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.awrap(fetch("".concat(f,"/verify")));case 2:200===e.sent.status&&c(!0);case 4:case"end":return e.stop()}}))};return n||l(),n?r.a.createElement(s.a,null,r.a.createElement(d.b,{exact:!0,path:"/client/"},r.a.createElement(x,null)),r.a.createElement(d.b,{exact:!0,path:"/client/login"},n?r.a.createElement(d.a,{to:"/client/"}):null,r.a.createElement(G,{verify:l})),r.a.createElement(d.b,{exact:!0,path:"/client/viewGuests"},r.a.createElement(C,null)),r.a.createElement(d.b,{exact:!0,path:"/client/viewExpected"},r.a.createElement(H,null))):r.a.createElement(G,{verify:l})},M=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function _(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}l.a.render(r.a.createElement(B,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");M?(!function(e,t){fetch(e).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):_(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):_(t,e)}))}}()},74:function(e,t,n){e.exports=n(105)},79:function(e,t,n){},81:function(e,t,n){e.exports=n.p+"static/media/logo.25bf045c.svg"},82:function(e,t,n){}},[[74,1,2]]]);
//# sourceMappingURL=main.8275041c.chunk.js.map