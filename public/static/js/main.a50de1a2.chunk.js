(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{26:function(e,t,r){},27:function(e,t,r){"use strict";r.r(t);var n=r(1),s=r(11),a=r.n(s),i=r(2),o=r(0);var c=function(){var e={footer:{position:"relative",textAlign:"center",width:"100%",bottom:"0",left:"0",backgroundColor:"#9dc7d5",zIndex:"15000",height:"5%"},footerText:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",padding:"0",margin:"0"}};return Object(o.jsx)("div",{style:e.footer,children:Object(o.jsx)("p",{style:e.footerText,children:"Aleksi Heikkil\xe4 2021"})})},l=r(13),u=r(9),d=r.n(u),p=r(15);var j=function(e){var t={popupBackground:{position:"fixed",width:"100%",height:"100%",top:"0",left:"0",right:"0",bottom:"0",margin:"auto",backgroundColor:"rgba(0,0,0, 0.5)",zIndex:"15000"},popupBox:{position:"absolute",backgroundColor:"white",borderRadius:"15px",overflowY:"auto"},popupBoxContent:{left:"50%",top:"50%",position:"absolute",transform:"translate(-50%, -50%)",textAlign:"center"}},r=Object(n.useState)(""),s=Object(i.a)(r,2),a=s[0],c=s[1],u=Object(n.useState)(""),j=Object(i.a)(u,2),b=j[0],m=j[1],h=Object(n.useState)(""),x=Object(i.a)(h,2),g=x[0],O=x[1],f=e.markers,k=e.setMarkers,v=e.currMarker,y=e.setCurrMarker,M=e.setIsPopupVisible;function C(e,t){return w.apply(this,arguments)}function w(){return(w=Object(p.a)(d.a.mark((function e(t,r){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("https://nominatim.openstreetmap.org/reverse.php?lat="+t+"&lon="+r+"&zoom=18&format=jsonv2").then((function(e){return e.json()})).then((function(e){return e})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function S(){return(S=Object(p.a)(d.a.mark((function e(t){var r,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C(t.lat,t.lng);case 2:r=e.sent,n="",r&&(r.address.road&&r.address.house_number?n=r.address.road+" "+r.address.house_number:r.address.road&&(n=r.address.road)),t.address=n,k([].concat(Object(l.a)(f),[t])),y(null);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(o.jsx)("div",{style:t.popupBackground,onClick:function(){return M(!1)},children:Object(o.jsx)("div",{style:t.popupBox,id:"popupBox",onClick:function(e){return e.stopPropagation()},children:Object(o.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=v;t.name=a,t.startTime=b,t.stopTime=g,function(e){S.apply(this,arguments)}(t),M(!1)},style:t.popupBoxContent,children:[Object(o.jsx)("h1",{children:"Marker information"}),Object(o.jsxs)("p",{id:"popupText",children:["Name:",Object(o.jsx)("input",{required:!0,type:"text",name:"name",value:a,onChange:function(e){c(e.target.value)}})]}),Object(o.jsxs)("p",{id:"popupText",children:["Open from:",Object(o.jsx)("input",{required:!0,type:"time",name:"name",value:b,onChange:function(e){m(e.target.value)}})]}),Object(o.jsxs)("p",{id:"popupText",children:["Open to:",Object(o.jsx)("input",{required:!0,type:"time",name:"name",value:g,onChange:function(e){O(e.target.value)}})]}),Object(o.jsx)("p",{children:Object(o.jsx)("input",{id:"popupButton",type:"submit",value:"Submit"})})]})})})},b=r(28),m=r(31),h=r(32),x=r(16),g=r(4),O=r(29),f=r(30);var k=function(e){var t=e.marker,r=t.startTime,n=t.stopTime;return Object(o.jsx)("div",{children:function(){var e=new Date;e.setFullYear(1996),e.setMonth(2),e.setDate(13);var t=new Date,s=r.split(":"),a=Object(i.a)(s,2),o=a[0],c=a[1];t.setFullYear(1996),t.setMonth(2),t.setDate(13),t.setHours(+o),t.setMinutes(c);var l=new Date,u=n.split(":"),d=Object(i.a)(u,2),p=d[0],j=d[1];return l.setFullYear(1996),l.setMonth(2),l.setDate(13),l.setHours(+p),l.setMinutes(j),+e>=+t&&e<l||l<t&&(e<l||e>t)}()?Object(o.jsx)("p",{children:"Currently open"}):Object(o.jsx)("p",{children:"Currently closed"})})};var v=function(e){var t=e.markers,r=e.marker,n=e.setMarkers;return Object(o.jsxs)("div",{children:[Object(o.jsxs)("p",{children:[t.indexOf(r)+1,". Marker: ",r.lat+" "+r.lng]}),Object(o.jsxs)("p",{children:["Marker name: ",r.name]}),""!==r.address?Object(o.jsxs)("p",{children:["Address: ",r.address]}):Object(o.jsx)(o.Fragment,{}),Object(o.jsxs)("p",{children:["Open hours: ",r.startTime," - ",r.stopTime]}),Object(o.jsx)(k,{marker:r}),Object(o.jsx)("button",{onClick:function(){return function(e){var r=t.indexOf(e);if(r>-1){var s=Object(l.a)(t);s.splice(r,1),n(s)}}(r)},children:"Remove marker"})]})};var y=function(e){var t=e.markers,r=e.setMarkers;return Object(b.b)({click:function(t){e.setCurrMarker(t.latlng),e.setIsPopupVisible(!0)}}),Object(o.jsx)(o.Fragment,{children:t.map((function(e){return Object(o.jsx)(O.a,{position:e,icon:new g.Icon({iconUrl:x.a,iconSize:[25,41],iconAnchor:[12,41]}),children:Object(o.jsx)(f.a,{children:Object(o.jsx)(v,{marker:e,markers:t,setMarkers:r})})},e.lat+" "+e.lng)}))})};r(25);var M=function(e){var t={map:{height:"100%",width:"100%",position:"absolute"},main:{float:"left",position:"relative"},container:{}};function r(){var e=Object(b.a)();return Object(n.useEffect)((function(){e.invalidateSize()}),[e]),null}return Object(o.jsx)("div",{style:t.main,id:"map",children:Object(o.jsx)("div",{className:"map__container",style:t.container,children:Object(o.jsxs)(m.a,{center:[60.17054205960518,24.9414674394951],zoom:13,style:t.map,whenCreated:e.setMap,children:[Object(o.jsx)(r,{}),Object(o.jsx)(y,{markers:e.markers,setMarkers:e.setMarkers,setCurrMarker:e.setCurrMarker,setIsPopupVisible:e.setIsPopupVisible}),Object(o.jsx)(h.a,{attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"})]})})})};var C=function(e){var t={sidebar:{height:"100%",top:"0",left:"0",textAlign:"center",float:"left",backgroundColor:"lightblue",width:"25%"},marker:{backgroundColor:"#c1e7f3",borderRadius:"15px",margin:"5px",padding:"25px"},markers:{marginLeft:"auto",marginRight:"auto",borderRadius:"15px",backgroundColor:"rgb(159 206 221)",overflowY:"auto",maxHeight:"75%",width:"95%"},headerDiv:{},buttonDiv:{display:"flex",padding:"25px",justifyContent:"center"}},r=e.map,n=e.markers,s=e.setMarkers;return Object(o.jsxs)("div",{style:t.sidebar,id:"sidebar",children:[Object(o.jsxs)("div",{style:t.headerDiv,children:[Object(o.jsx)("h1",{style:{margin:"10px 0 0 0"},children:"Maps-app"}),Object(o.jsxs)("div",{style:t.buttonDiv,children:[Object(o.jsx)("p",{style:{marginRight:"25px"},children:"List of markers"}),0!==n.length?Object(o.jsx)("button",{style:{marginLeft:"25px"},onClick:function(){return s([]),void sessionStorage.clear()},children:"Clear all markers"}):Object(o.jsx)("button",{disabled:!0,style:{marginLeft:"25px"},children:"Clear all markers"})]})]}),Object(o.jsx)("div",{style:t.markers,children:0!==n.length?n.map((function(e){return Object(o.jsx)("div",{style:t.marker,onClick:function(){return function(e){r.setView(e,r.getZoom())}(e)},children:Object(o.jsx)(v,{marker:e,markers:n,setMarkers:s})},e.lat+" "+e.lng)})):Object(o.jsxs)("div",{children:[Object(o.jsx)("p",{children:"Nothing here yet..."}),Object(o.jsx)("p",{children:"Click on the map to add new markers"})]})})]})};var w=function(e){var t=Object(n.useState)("10000"),r=Object(i.a)(t,2),s=r[0],a=r[1],c={sidebar:{height:"100%",position:"absolute",top:"0",left:"0",textAlign:"center",float:"left",backgroundColor:"lightblue",width:"100%",zIndex:s},marker:{backgroundColor:"#c1e7f3",borderRadius:"15px",margin:"5px",padding:"25px"},markers:{marginLeft:"auto",marginRight:"auto",borderRadius:"15px",backgroundColor:"rgb(159 206 221)",overflowY:"auto",maxHeight:"75%",width:"95%"},headerDiv:{},buttonDiv:{display:"flex",padding:"25px",justifyContent:"center"}},l=e.map,u=e.markers,d=e.setMarkers,p=e.mapToggled;return Object(n.useEffect)((function(){a(p?"10000":"-10000")}),[p]),Object(o.jsxs)("div",{style:c.sidebar,id:"sidebarmobile",children:[Object(o.jsxs)("div",{style:c.headerDiv,children:[Object(o.jsx)("h1",{style:{margin:"10px 0 0 0"},children:"Maps-app"}),Object(o.jsxs)("div",{style:c.buttonDiv,children:[Object(o.jsx)("p",{style:{marginRight:"25px"},children:"List of markers"}),0!==u.length?Object(o.jsx)("button",{style:{marginLeft:"25px"},onClick:function(){return d([]),void sessionStorage.clear()},children:"Clear all markers"}):Object(o.jsx)("button",{disabled:!0,style:{marginLeft:"25px"},children:"Clear all markers"})]})]}),Object(o.jsx)("div",{style:c.markers,children:0!==u.length?u.map((function(e){return Object(o.jsx)("div",{style:c.marker,onClick:function(){return function(e){l.setView(e,l.getZoom())}(e)},children:Object(o.jsx)(v,{marker:e,markers:u,setMarkers:d})},e.lat+" "+e.lng)})):Object(o.jsxs)("div",{children:[Object(o.jsx)("p",{children:"Nothing here yet..."}),Object(o.jsx)("p",{children:"Click on the map to add new markers"})]})})]})};var S=function(e){var t=e.markers,r=e.setMarkers,n=e.setMap,s=e.map;return Object(o.jsxs)("div",{style:{display:"flex",height:"95%"},children:[Object(o.jsx)(C,{markers:t,setMarkers:r,map:s}),Object(o.jsx)(w,{markers:t,setMarkers:r,map:s,mapToggled:e.mapToggled}),Object(o.jsx)(M,{markers:t,setMarkers:r,setCurrMarker:e.setCurrMarker,setMap:n,setIsPopupVisible:e.setIsPopupVisible,mapToggled:e.mapToggled,setMapToggled:e.setMapToggled})]})};var T=function(){var e=JSON.parse(sessionStorage.getItem("markers"));e||(e=[]);var t=Object(n.useState)(e),r=Object(i.a)(t,2),s=r[0],a=r[1],l=Object(n.useState)(null),u=Object(i.a)(l,2),d=u[0],p=u[1],b=Object(n.useState)(null),m=Object(i.a)(b,2),h=m[0],x=m[1],g=Object(n.useState)(!1),O=Object(i.a)(g,2),f=O[0],k=O[1],v=Object(n.useState)(!1),y=Object(i.a)(v,2),M=y[0],C=y[1];return Object(n.useEffect)((function(){sessionStorage.setItem("markers",JSON.stringify(s))}),[s]),Object(o.jsxs)("div",{style:{height:"100%"},children:[Object(o.jsx)("button",{id:"listButton",onClick:function(){C(!M)},children:"View"}),Object(o.jsx)(S,{markers:s,setMarkers:a,map:d,setMap:p,setIsPopupVisible:k,setCurrMarker:x,mapToggled:M,setMapToggled:C}),Object(o.jsx)(c,{}),f?Object(o.jsx)(j,{markers:s,setMarkers:a,currMarker:h,setCurrMarker:x,setIsPopupVisible:k}):Object(o.jsx)(o.Fragment,{})]})};r(26);a.a.render(Object(o.jsx)(T,{}),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.a50de1a2.chunk.js.map