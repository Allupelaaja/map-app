(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{22:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(10),i=n.n(r),o=n(13),a=n(4),s=n(24),j=n(25),l=n(26),b=n(27),h=n(28),p=n(14),d=n(3),u=(n(20),n(1));function O(){var e=Object(c.useState)([]),t=Object(a.a)(e,2),n=t[0],r=t[1];return Object(s.a)({click:function(e){var t=e.latlng;r([].concat(Object(o.a)(n),[t])),console.log(n)}}),Object(u.jsx)(u.Fragment,{children:n.map((function(e){return Object(u.jsx)(j.a,{position:e,icon:new d.Icon({iconUrl:p.a,iconSize:[25,41],iconAnchor:[12,41]}),children:Object(u.jsx)(l.a,{children:Object(u.jsxs)("div",{children:[Object(u.jsxs)("p",{children:["Marker is at ",e.lat,", ",e.lng]}),Object(u.jsx)("button",{onClick:function(){return function(e){var t=n.indexOf(e);if(t>-1){var c=Object(o.a)(n);c.splice(t,1),r(c)}console.log("marker removed")}(e)},children:"Remove marker"})]})})})}))})}var x=function(){return Object(u.jsx)("div",{className:"map__container",children:Object(u.jsxs)(b.a,{center:[60.17054205960518,24.9414674394951],zoom:13,style:{height:"90vh",width:"100%"},children:[Object(u.jsx)(O,{}),Object(u.jsx)(h.a,{attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"})]})})};var f=function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)("p",{children:"Map App"}),Object(u.jsx)(x,{})]})};i.a.render(Object(u.jsx)(f,{}),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.34165467.chunk.js.map