(this.webpackJsonprewards_store=this.webpackJsonprewards_store||[]).push([[0],{14:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var n=c(0),r=c(1),s=c.n(r),a=c(7),i=c.n(a),j=c(3),o=c.n(j),u=c(5),l=c(2),b=s.a.createContext({});function d(e){var t=e.children,c=Object(r.useState)({}),s=Object(l.a)(c,2),a=s[0],i=s[1],j=Object(r.useState)([]),d=Object(l.a)(j,2),h=d[0],O=d[1],p=Object(r.useState)(!1),x=Object(l.a)(p,2),f=x[0],v=x[1];function m(){return(m=Object(u.a)(o.a.mark((function e(){var t,c,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return v(!0),e.prev=1,t={"Content-Type":"application/json",Accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmFjMjQ0OWI5NTIzZTAwMjA3ZTFmYzMiLCJpYXQiOjE2MDUxMTcwMDF9.vHMYlEKnpSVDSejVVyittmqUhIQ9pbD2U5CvqwQYJ4I"},e.next=5,fetch("https://coding-challenge-api.aerolab.co/user/me",{headers:t});case 5:return c=e.sent,e.next=8,c.json();case 8:return n=e.sent,i(n),v(!1),e.abrupt("return",a);case 14:e.prev=14,e.t0=e.catch(1),console.log(e.t0);case 17:case"end":return e.stop()}}),e,null,[[1,14]])})))).apply(this,arguments)}function g(){return(g=Object(u.a)(o.a.mark((function e(){var t,c,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return v(!0),e.prev=1,t={"Content-Type":"application/json",Accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWRkOWU5OTQ0NGZlNDAwNmRhOTkyNGQiLCJpYXQiOjE1OTE1ODIzNjF9.-f40dyUIGFsBSB_PTeBGdSLI58I21-QBJNi9wkODcKk"},e.next=5,fetch("https://coding-challenge-api.aerolab.co/products",{headers:t});case 5:return c=e.sent,e.next=8,c.json();case 8:return n=e.sent,O(n),v(!1),e.abrupt("return",a);case 14:e.prev=14,e.t0=e.catch(1),console.log(e.t0);case 17:case"end":return e.stop()}}),e,null,[[1,14]])})))).apply(this,arguments)}return Object(r.useEffect)((function(){i(function(){return m.apply(this,arguments)}()),O(function(){return g.apply(this,arguments)}())}),[]),Object(n.jsx)(b.Provider,{value:{loading:f,userData:a,productsData:h},children:t})}c(14);var h=function(){return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)("div",{className:"header",children:Object(n.jsx)("h2",{children:"Electronics"})})})};var O=function(){return Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)("div",{className:"search-bar",children:[Object(n.jsx)("div",{className:"products-count",children:Object(n.jsx)("h4",{children:"16 of 32 products"})}),Object(n.jsx)("div",{className:"sort",children:"Sort by:"}),Object(n.jsxs)("div",{className:"buttons",children:[Object(n.jsx)("button",{children:"Most recent"}),Object(n.jsx)("button",{children:"Lowest Price"}),Object(n.jsx)("button",{children:"Highest Price"})]}),Object(n.jsx)("button",{className:"next-page",children:">"}),Object(n.jsx)("button",{className:"next-page",children:"<"})]})})},p=c(6);var x=c.p+"static/media/buy-blue.c5c4f01c.svg";var f=function(e){e._id;var t=e.category,c=(e.cost,e.img),r=e.name;return Object(n.jsxs)("div",{className:"product-card",children:[Object(n.jsx)("img",{src:x,alt:"buy-icon",className:"buy-icon"}),Object(n.jsx)("img",{src:c.url,alt:""}),Object(n.jsxs)("div",{className:"text-box",children:[Object(n.jsx)("h4",{children:t}),Object(n.jsx)("h3",{children:r})]}),undefined]})};var v=function(){var e=Object(r.useContext)(b),t=(e.userData,e.setUserData,Object(r.useContext)(b).productsData),c=Object(r.useState)([]),s=Object(l.a)(c,2),a=s[0],i=s[1];return Object(r.useEffect)((function(){i(t)}),[t,a]),Object(n.jsx)(n.Fragment,{children:Object(n.jsx)("div",{className:"card-container",children:a.length&&a.map((function(e){return Object(r.createElement)(f,Object(p.a)(Object(p.a)({},e),{},{key:e._id}))}))})})};var m=function(){return Object(n.jsxs)("div",{className:"footer",children:[Object(n.jsx)("div",{children:Object(n.jsx)("h4",{children:"16 of 32 products"})}),Object(n.jsx)("button",{children:">"}),Object(n.jsx)("button",{children:"<"})]})};var g=function(){return Object(n.jsx)("div",{className:"App",children:Object(n.jsx)(d,{children:Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)(h,{}),Object(n.jsx)(O,{}),Object(n.jsx)(v,{}),Object(n.jsx)(m,{})]})})})},I=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,16)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,s=t.getLCP,a=t.getTTFB;c(e),n(e),r(e),s(e),a(e)}))};i.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(g,{})}),document.getElementById("root")),I()}},[[15,1,2]]]);
//# sourceMappingURL=main.b44da0f4.chunk.js.map