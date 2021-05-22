(this.webpackJsonptimer=this.webpackJsonptimer||[]).push([[0],{18:function(e,t,n){},19:function(e,t,n){},23:function(e,t,n){"use strict";n.r(t);var c,r,s,a,i=n(0),o=n(9),d=n.n(o),l=(n(18),n(2)),p=n(13),u=(n(19),n(3)),j=n(4),b=n(1),x=j.a.div(c||(c=Object(u.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin: 0 auto;\n  padding: 10px;\n  width: 500px;\n  border: 2px solid #000000;\n"]))),h=j.a.button(r||(r=Object(u.a)(["\n  display: block;\n  padding: 20px 40px;\n  border: none;\n  cursor: pointer;\n  font-size: 14px;\n  font-weight: 700;\n  background-color: #cccccc;\n"]))),O=function(e){var t=e.startTimer,n=e.stopTimer,c=e.pauseTimer,r=e.resetTimer,s=e.currentState;return Object(b.jsxs)(x,{children:["stopped"===s||"paused"===s?Object(b.jsx)(h,{onClick:t,children:"Start"}):Object(b.jsx)(h,{onClick:n,children:"Stop"}),Object(b.jsx)(h,{disabled:"stopped"===s||"paused"===s,onClick:c,children:"Pause"}),Object(b.jsx)(h,{disabled:"stopped"===s,onClick:r,children:"Reset"})]})},f=function(e){var t=function(e){return e>=0&&e<10?"0"+e:e};return{totalSeconds:e,seconds:t(e%60),minutes:t(Math.floor(e/60)),hours:t(Math.floor(e/60/60))}},m=j.a.div(s||(s=Object(u.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin: 0 auto;\n  padding: 10px;\n  width: 500px;\n  border: 2px solid #000000;\n"]))),S=j.a.div(a||(a=Object(u.a)(["\n  width: 150px;\n  border: 1px solid #444444;\n  h3 {\n    margin: 10px 20px;\n    padding: 10px 0;\n    font-size: 18px;\n    font-weight: 700;\n    border-bottom: 1px solid #444444;\n  }\n  span {\n    display: block;\n    margin: 10px 20px;\n    padding: 10px 0;\n    font-size: 36px;\n    font-weight: 700;    \n  }\n"]))),g=function(e){var t=e.totalSeconds,n=f(t),c=n.hours,r=n.minutes,s=n.seconds;return Object(b.jsxs)(m,{children:[Object(b.jsxs)(S,{children:[Object(b.jsx)("h3",{children:"Hours"}),Object(b.jsx)("span",{children:c})]}),Object(b.jsxs)(S,{children:[Object(b.jsx)("h3",{children:"Minutes"}),Object(b.jsx)("span",{children:r})]}),Object(b.jsxs)(S,{children:[Object(b.jsx)("h3",{children:"Seconds"}),Object(b.jsx)("span",{children:s})]})]})};var v=function(){var e,t=Object(i.useState)({totalSeconds:0,currentState:"stopped"}),n=Object(p.a)(t,2),c=n[0],r=n[1];Object(i.useEffect)((function(){"runned"===c.currentState&&s()}));var s=function(){e=setTimeout((function(){"runned"===c.currentState&&r(Object(l.a)(Object(l.a)({},c),{},{totalSeconds:c.totalSeconds+1}))}),1e3)};return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)("h1",{children:"Timer"}),Object(b.jsxs)("div",{className:"timer__wrapper",children:[Object(b.jsx)(g,{totalSeconds:c.totalSeconds}),Object(b.jsx)(O,{startTimer:function(){r(Object(l.a)(Object(l.a)({},c),{},{currentState:"runned"})),clearInterval(e)},pauseTimer:function(){r(Object(l.a)(Object(l.a)({},c),{},{currentState:"paused"})),clearInterval(e)},stopTimer:function(){r(Object(l.a)(Object(l.a)({},c),{},{totalSeconds:0,currentState:"stopped"})),clearInterval(e)},resetTimer:function(){r(Object(l.a)(Object(l.a)({},c),{},{totalSeconds:0,currentState:"runned"})),clearInterval(e)},currentState:c.currentState})]})]})},T=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,24)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),c(e),r(e),s(e),a(e)}))};d.a.render(Object(b.jsx)(v,{}),document.getElementById("root")),T()}},[[23,1,2]]]);
//# sourceMappingURL=main.b20ce3bc.chunk.js.map