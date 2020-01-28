(this["webpackJsonpentrance-monitor-client"]=this["webpackJsonpentrance-monitor-client"]||[]).push([[0],{105:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(7),l=n.n(c),o=(n(79),n(80),n(81),n(19)),i=n(25),u=n(13),s=n.n(u),d=n(17),f=function(){var e,t,n,a=arguments;return s.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return e=a.length>0&&void 0!==a[0]?a[0]:"",t=a.length>1&&void 0!==a[1]?a[1]:{},r.next=4,s.a.awrap(fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}));case 4:return n=r.sent,r.next=7,s.a.awrap(n.json());case 7:return r.abrupt("return",r.sent);case 8:case"end":return r.stop()}}))},m=n(135),g=n(140),v=n(139),h=n(65),p=n.n(h),b=n(66),E=n.n(b),w=n(141),O=n(22),k=n(39),S=n.n(k),y=Object(m.a)((function(e){return{container:{position:"absolute",width:"100%",height:"100%",backgroundColor:"#244e7b",alignContent:"center",justifyContent:"center",color:"white"},gridCellCentered:{justifyContent:"center",alignContent:"center",display:"grid"},textField:{"& label, & input":{color:"white"},"& fieldset":{borderColor:"rgba(255, 255, 255, 0.23)"},"& .MuiOutlinedInput-root.Mui-focused":{"& .MuiOutlinedInput-notchedOutline":{borderColor:"white",borderWidth:"2px"}},"& .MuiFormLabel-root.Mui-focused":{color:"white"},"& .MuiOutlinedInput-root:hover":{"& .MuiOutlinedInput-notchedOutline":{borderColor:"rgba(255, 255, 255, 0.87)"}}},links:{"& a":{color:"white"},"& a:visited":{color:"white"}},indicatorsCell:{display:"grid",justifyContent:"right"},focusLockCell:{display:"grid",justifyItems:"center",alignItems:"center"},link:{cursor:"pointer",textDecoration:"underline"}}})),j=function(){var e=Object(a.useState)(!1),t=Object(d.a)(e,2),n=t[0],c=t[1],l=Object(a.useState)(null),i=Object(d.a)(l,2),u=i[0],f=i[1],m=Object(a.useState)(!1),h=Object(d.a)(m,2),b=h[0],k=h[1],j=Object(a.useState)(!1),x=Object(d.a)(j,2),I=x[0],C=x[1],N=Object(a.useState)(!0),H=Object(d.a)(N,2),G=H[0],_=H[1],M=y();Object(a.useEffect)((function(){var e=localStorage.getItem("guestsBacklog");e&&e.length>0&&B()}),[]);var A=r.a.createRef(),D=function(e){var t;return s.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return c(!0),k(!1),f(!1),t=A.current,null==e&&(e={guestId:A.current.value}),n.abrupt("return",S()({method:"post",url:"https://entrance-monitor.azurewebsites.net/addGuest",timeout:5e3,data:e}).then((function(e){return c(!1),null!=e.data&&e.data.success?k(!0):f(!0),t.value="",t.focus(),I&&C(!1),e.data})).catch((function(n){return f(!0),C(!0),T({guestId:e.guestId}),t.value="",{success:!1}})).finally((function(){c(!1)})));case 6:case"end":return n.stop()}}))},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.guestId;c(!0),k(!1),f(!1),null==t&&(t=A.current.value);var n=JSON.parse(localStorage.getItem("guestsBacklog"));null==n&&(n=[]),null==n.find((function(e){return e.guestId===t}))&&(n.push({guestId:t,arrival_time:(new Date).toISOString()}),localStorage.setItem("guestsBacklog",JSON.stringify(n))),c(!1),k(!0),A.current&&(A.current.value="")},B=function(){var e=JSON.parse(localStorage.getItem("guestsBacklog"));if(null!=e){var t=[];e.forEach((function(e){return s.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:t.push(D(e));case 1:case"end":return n.stop()}}))})),S.a.all(t).then(S.a.spread((function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.every((function(e){return e&&e.success}))&&localStorage.setItem("guestsBacklog",JSON.stringify([]))})))}},F=function(e){if(e&&e.preventDefault(),A.current&&""!==A.current.value){var t=A.current.value.match(/\D/);if(t&&t.length>0)return f(!0),void k(!1)}I?T():D()},L=function(){if(G){var e=A.current;null!=e&&(setTimeout((function(){return e.focus()}),1),console.log("focused!"))}};return G&&setTimeout((function(){return L()}),1),r.a.createElement(r.a.Fragment,null,r.a.createElement(O.b,{className:M.container,columns:"1fr auto 1fr",rows:"1fr auto auto 1fr",areas:["nav title indicators","focusLock form hiddenSubmit",". loader .",". . ."]},r.a.createElement(O.a,{area:"nav",className:M.links},r.a.createElement(o.b,{to:"/client/viewGuests"}," View Guests ")," ",r.a.createElement("br",null),r.a.createElement(o.b,{to:"/client/viewExpected"}," Expected ")),r.a.createElement(O.a,{area:"title"},"Entrance Monitoring System"),r.a.createElement(O.a,{area:"form"},r.a.createElement("form",{onSubmit:F},r.a.createElement(g.a,{id:"outlined-required",label:"Guest ID",className:M.textField,margin:"normal",variant:"outlined",inputRef:A,autoFocus:!0,disabled:n,inputProps:{onBlur:L}}))),r.a.createElement(O.a,{area:"indicators",className:M.indicatorsCell},r.a.createElement("div",null,I?r.a.createElement("div",null," Offline, try ",r.a.createElement("span",{onClick:B,className:M.link}," reconnecting ")," "):null)),r.a.createElement(O.a,{area:"focusLock",className:M.focusLockCell},"Focus lock",r.a.createElement(w.a,{checked:G,onChange:function(){return _(!G)},value:"focusLock",color:"secondary"})),r.a.createElement(O.a,{area:"hiddenSubmit",onClick:F}),r.a.createElement(O.a,{area:"loader",className:M.gridCellCentered},u?r.a.createElement("div",{style:{color:"red"}}," ",r.a.createElement(p.a,null)," "):null,n?r.a.createElement(v.a,{color:"inherit"}):null,b?r.a.createElement("div",{style:{color:"".concat(I?"orange":"lime")}},r.a.createElement(E.a,null)):null)))},x=n(38),I=(n(61),function(){var e=Object(a.useState)(null),t=Object(d.a)(e,2),n=t[0],c=t[1];return Object(a.useEffect)((function(){!function(){var e;s.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:if(n){t.next=5;break}return t.next=3,s.a.awrap(f("https://entrance-monitor.azurewebsites.net/allGuests"));case 3:e=t.sent,c(e.results);case 5:case"end":return t.stop()}}))}()})),r.a.createElement("div",null,n?r.a.createElement(r.a.Fragment,null,r.a.createElement(o.b,{to:"/client/"}," Add Guest ")," ",r.a.createElement("br",null),r.a.createElement(o.b,{to:"/client/viewExpected"}," Expected ")," ",r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("div",null,"Total Guests: ",n.length),r.a.createElement(x.a,{data:n,filterable:!0,defaultFilterMethod:function(e,t){return String(t[e.id]).includes(e.value)},columns:[{Header:"DB Info",columns:[{Header:"ID",accessor:"id"}]},{Header:"Guest Info",columns:[{Header:"Personal Number",accessor:"guest_id",filterMethod:function(e,t){return t[e.id].startsWith(e.value)}},{Header:"Name",accessor:"guest_name"},{Header:"Rank",accessor:"rank"},{Header:"Unit",accessor:"unit"}]},{Header:"Arrival Info",columns:[{Header:"Arrival Time",accessor:"arrival_time",Cell:function(e){return r.a.createElement("span",null,e.value?new Date(e.value).toLocaleTimeString():null)}}]}],defaultPageSize:10,className:"-striped -highlight"})):null)}),C=n(67),N=function(){var e,t=Object(a.useState)(null),n=Object(d.a)(t,2),c=n[0],l=n[1],i=Object(a.useState)(null),u=Object(d.a)(i,2),m=u[0],g=u[1],v=Object(a.useState)(null),h=Object(d.a)(v,2),p=h[0],b=h[1];(Object(a.useEffect)((function(){!function(){var e;s.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:if(m){t.next=5;break}return t.next=3,s.a.awrap(f("https://entrance-monitor.azurewebsites.net/allExpectedGuests"));case 3:e=t.sent,g(e.results);case 5:case"end":return t.stop()}}))}()})),Object(a.useEffect)((function(){!function(){var e;s.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:if(p){t.next=5;break}return t.next=3,s.a.awrap(f("https://entrance-monitor.azurewebsites.net/allGuests"));case 3:e=t.sent,b(e.results);case 5:case"end":return t.stop()}}))}()})),m&&p&&!c)&&l(m.map((function(t){return Object(C.a)({},t,{arrived:p.some((function(e){return e.guest_id===t.guest_id})),arrival_time:null!=(e=p.find((function(e){return t.guest_id===e.guest_id})))?e.arrival_time:null})})));return r.a.createElement("div",null,c?r.a.createElement(r.a.Fragment,null,r.a.createElement(o.b,{to:"/client/"}," Add Guest ")," ",r.a.createElement("br",null),r.a.createElement(o.b,{to:"/client/viewGuests"}," View Guests ")," ",r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("div",null,"Total Guests: ",c.filter((function(e){return e.arrived})).length," / ",c.length),r.a.createElement(x.a,{data:c,filterable:!0,defaultFilterMethod:function(e,t){return String(t[e.id]).includes(e.value)},columns:[{Header:"DB Info",columns:[{Header:"ID",accessor:"id"}]},{Header:"Guest Info",columns:[{Header:"Personal Number",accessor:"guest_id",filterMethod:function(e,t){return String(t[e.id]).startsWith(e.value)}},{Header:"Name",accessor:"guest_name"},{Header:"Rank",accessor:"rank"},{Header:"Unit",accessor:"unit"},{Header:"Arrived",accessor:"arrival_time",Cell:function(e){return r.a.createElement("span",null,r.a.createElement("span",{style:{color:e.value?"#57d500":"#ff2e00"}},"\u25cf")," ",e.value?"Yes "+new Date(e.value).toLocaleTimeString():"No")}}]}],defaultPageSize:10,className:"-striped -highlight"})):null)};var H=function(){return r.a.createElement(o.a,null,r.a.createElement(i.a,{exact:!0,path:"/client/"},r.a.createElement(j,null)),r.a.createElement(i.a,{exact:!0,path:"/client/viewGuests"},r.a.createElement(I,null)),r.a.createElement(i.a,{exact:!0,path:"/client/viewExpected"},r.a.createElement(N,null)))},G=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function _(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}l.a.render(r.a.createElement(H,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");G?(!function(e,t){fetch(e).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):_(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):_(t,e)}))}}()},74:function(e,t,n){e.exports=n(105)},79:function(e,t,n){},80:function(e,t,n){e.exports=n.p+"static/media/logo.25bf045c.svg"},81:function(e,t,n){}},[[74,1,2]]]);
//# sourceMappingURL=main.33ca3008.chunk.js.map