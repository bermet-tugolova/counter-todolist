(this["webpackJsonpcounter-redux"]=this["webpackJsonpcounter-redux"]||[]).push([[0],{19:function(t,e,n){},29:function(t,e,n){},30:function(t,e,n){"use strict";n.r(e);var c=n(0),o=n.n(c),r=n(5),u=n.n(r),i=(n(19),"INCREASE_COUNT"),l="DECREASE_COUNT",s=n(2),a=n(1),j=function(){var t=Object(s.b)(),e=Object(s.c)((function(t){return t.counter})),n=Object(s.d)();return console.log(n.getState()),Object(a.jsxs)("div",{children:[Object(a.jsx)("button",{onClick:function(){return t({type:l})},children:"-"}),e.count,Object(a.jsx)("button",{onClick:function(){return t({type:i})},children:"+"})]})},d=n(3),b={count:0},O=n(10),p=n(14),h="ADD_TODO",f="TOGGLE_TODO",x="DELETE_TODO",y=[],v=Object(d.b)({todolist:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case h:return[].concat(Object(p.a)(t),[{text:e.payload,complete:!1}]);case f:return t.map((function(t,n){return n===e.payload?Object(O.a)(Object(O.a)({},t),{},{complete:!t.complete}):t}));case x:return t.filter((function(t,n){return n!==e.payload}));default:return t}},counter:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case i:return{count:t.count+1};case l:return{count:t.count-1};default:return t}}}),m=n(13),g=(n(29),function(t){var e=t.todo,n=t.id,c=Object(s.b)();return Object(a.jsx)("div",{children:Object(a.jsxs)("span",{style:{textDecoration:e.complete?"line-through":"none"},children:[e.text,Object(a.jsx)("button",{className:"btn2",onClick:function(){return c(function(t){return{type:f,payload:t}}(n))},children:"complete"}),Object(a.jsx)("button",{className:"btn2",onClick:function(){return c(function(t){return{type:x,payload:t}}(n))},children:"X"})]})})}),C={width:"500px",marginLeft:"600px",marginTop:"120px"},D=function(){var t=Object(c.useState)(""),e=Object(m.a)(t,2),n=e[0],o=e[1],r=Object(s.c)((function(t){return t.todolist})),u=Object(s.b)();return Object(a.jsxs)("div",{className:"todo",style:C,children:[Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{style:{fontSize:"45px",fontFamily:"cursive"},children:"To do list"}),Object(a.jsx)("input",{placeholder:"type smth ...",value:n,onChange:function(t){return o(t.target.value)}}),Object(a.jsx)("button",{onClick:function(){return u({type:h,payload:n})},children:"ADD"})]}),Object(a.jsx)("ul",{children:r.map((function(t,e){return Object(a.jsx)(g,{todo:t,id:e},e)}))})]})},E=Object(d.c)(v);function T(){return Object(a.jsxs)(s.a,{store:E,children:[Object(a.jsx)(j,{}),Object(a.jsx)(D,{})]})}u.a.render(Object(a.jsx)(o.a.StrictMode,{children:Object(a.jsx)(T,{})}),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.1306b180.chunk.js.map