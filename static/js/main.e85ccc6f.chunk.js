(this.webpackJsonprewards_store=this.webpackJsonprewards_store||[]).push([[0],{14:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c(1),r=c.n(s),a=c(7),i=c.n(a),j=c(3),o=c.n(j),u=c(5),l=c(2),b=r.a.createContext({});function d(e){var t=e.children,c=Object(s.useState)({}),r=Object(l.a)(c,2),a=r[0],i=r[1],j=Object(s.useState)([]),d=Object(l.a)(j,2),O=d[0],h=d[1],p=Object(s.useState)(!1),x=Object(l.a)(p,2),f=x[0],v=x[1];function m(){return(m=Object(u.a)(o.a.mark((function e(){var t,c,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return v(!0),e.prev=1,t={"Content-Type":"application/json",Accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmFjMjQ0OWI5NTIzZTAwMjA3ZTFmYzMiLCJpYXQiOjE2MDUxMTcwMDF9.vHMYlEKnpSVDSejVVyittmqUhIQ9pbD2U5CvqwQYJ4I"},e.next=5,fetch("https://coding-challenge-api.aerolab.co/user/me",{headers:t});case 5:return c=e.sent,e.next=8,c.json();case 8:return n=e.sent,i(n),v(!1),e.abrupt("return",a);case 14:e.prev=14,e.t0=e.catch(1),console.log(e.t0);case 17:case"end":return e.stop()}}),e,null,[[1,14]])})))).apply(this,arguments)}function g(){return(g=Object(u.a)(o.a.mark((function e(){var t,c,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return v(!0),e.prev=1,t={"Content-Type":"application/json",Accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWRkOWU5OTQ0NGZlNDAwNmRhOTkyNGQiLCJpYXQiOjE1OTE1ODIzNjF9.-f40dyUIGFsBSB_PTeBGdSLI58I21-QBJNi9wkODcKk"},e.next=5,fetch("https://coding-challenge-api.aerolab.co/products",{headers:t});case 5:return c=e.sent,e.next=8,c.json();case 8:return n=e.sent,h(n),v(!1),e.abrupt("return",a);case 14:e.prev=14,e.t0=e.catch(1),console.log(e.t0);case 17:case"end":return e.stop()}}),e,null,[[1,14]])})))).apply(this,arguments)}return Object(s.useEffect)((function(){i(function(){return m.apply(this,arguments)}()),h(function(){return g.apply(this,arguments)}())}),[]),Object(n.jsx)(b.Provider,{value:{loading:f,userData:a,productsData:O},children:t})}c(14);var O=c.p+"static/media/coin.b8bc711d.svg";var h=function(e){var t=Object(s.useContext)(b),c=t.userData,r=(t.setUserData,Object(s.useState)({})),a=Object(l.a)(r,2),i=a[0],j=a[1];return Object(s.useEffect)((function(){j(c)}),[c,i]),console.log(i),Object(n.jsxs)("div",{className:"user-header",children:[Object(n.jsxs)("div",{className:"kite",children:[" ",Object(n.jsx)("img",{src:O,alt:""})]}),Object(n.jsxs)("div",{className:"right",children:[Object(n.jsx)("p",{children:i.name}),Object(n.jsxs)("div",{className:"points-tag",children:[Object(n.jsx)("p",{children:i.points}),Object(n.jsxs)("div",{className:"coin",children:[" ",Object(n.jsx)("img",{src:O,alt:""})]})]})]})]})};var p=function(){return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)("div",{className:"header",children:Object(n.jsx)("h2",{children:"Electronics"})})})};var x=function(){return Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)("div",{className:"search-bar",children:[Object(n.jsx)("div",{className:"products-count",children:Object(n.jsx)("h4",{children:"16 of 32 products"})}),Object(n.jsx)("div",{className:"sort",children:"Sort by:"}),Object(n.jsxs)("div",{className:"buttons",children:[Object(n.jsx)("button",{children:"Most recent"}),Object(n.jsx)("button",{children:"Lowest Price"}),Object(n.jsx)("button",{children:"Highest Price"})]}),Object(n.jsx)("button",{className:"next-page",children:">"}),Object(n.jsx)("button",{className:"next-page",children:"<"})]})})},f=c(6);var v=c.p+"static/media/buy-blue.c5c4f01c.svg";var m=function(e){e._id;var t=e.category,c=e.cost,r=e.img,a=e.name,i=Object(s.useContext)(b),j=i.userData,o=(i.setUserData,Object(s.useState)({})),u=Object(l.a)(o,2),d=u[0],h=u[1];return Object(s.useEffect)((function(){h(j)}),[j,d]),Object(n.jsxs)("div",{className:"product-card",children:[d.points>c?Object(n.jsx)("img",{src:v,alt:"buy-icon",className:"buy-icon"}):Object(n.jsxs)("div",{className:"te-faltan",children:[Object(n.jsxs)("p",{children:["Te faltan ",c-d.points]}),Object(n.jsx)("img",{src:O,alt:"",srcset:""})," "]}),Object(n.jsx)("img",{src:r.url,alt:""}),Object(n.jsxs)("div",{className:"text-box",children:[Object(n.jsx)("h4",{children:t}),Object(n.jsx)("h3",{children:a})]}),undefined]})};var g=function(){var e=Object(s.useContext)(b),t=(e.userData,e.setUserData,Object(s.useContext)(b).productsData),c=Object(s.useState)([]),r=Object(l.a)(c,2),a=r[0],i=r[1];return Object(s.useEffect)((function(){i(t)}),[t,a]),Object(n.jsx)(n.Fragment,{children:Object(n.jsx)("div",{className:"card-container",children:a.length&&a.map((function(e){return Object(s.createElement)(m,Object(f.a)(Object(f.a)({},e),{},{key:e._id}))}))})})};var N=function(){return Object(n.jsxs)("div",{className:"footer",children:[Object(n.jsx)("div",{children:Object(n.jsx)("h4",{children:"16 of 32 products"})}),Object(n.jsx)("button",{children:">"}),Object(n.jsx)("button",{children:"<"})]})};var I=function(){return Object(n.jsx)("div",{className:"App",children:Object(n.jsx)(d,{children:Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)(h,{}),Object(n.jsx)(p,{}),Object(n.jsx)(x,{}),Object(n.jsx)(g,{}),Object(n.jsx)(N,{})]})})})},y=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,16)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,r=t.getLCP,a=t.getTTFB;c(e),n(e),s(e),r(e),a(e)}))};i.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(I,{})}),document.getElementById("root")),y()}},[[15,1,2]]]);
//# sourceMappingURL=main.e85ccc6f.chunk.js.map