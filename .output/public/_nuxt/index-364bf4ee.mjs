import{_ as l,d as c,o as _,c as d,w as n,a as o,g as u,t as m,h as p,n as f,k as g,l as h}from"./entry-4945a9e1.mjs";import{L as x}from"./LayoutMain-c51384ef.mjs";import{s as M}from"./main-47dfe43e.mjs";const N=c({__name:"index",setup(s,{expose:t}){t();const e={someFunc:async()=>{console.log(await M())},LayoutMain:x};return Object.defineProperty(e,"__isScriptSetup",{enumerable:!1,value:!0}),e}}),k=o("h3",null,"NEW GAME",-1),y={class:"link"},L=g("JOIN GAME");function v(s,t,a,e,w,E){const r=h;return _(),d(e.LayoutMain,null,{footer:n(()=>[o("div",y,[u(r,{to:"game",class:"btn btn-yellow"},{default:n(()=>[L]),_:1}),o("p",null,"Message is: "+m(s.message),1),p(o("input",{"onUpdate:modelValue":t[0]||(t[0]=i=>s.message=i),placeholder:"edit me"},null,512),[[f,s.message]])])]),default:n(()=>[k,o("h2",{onClick:e.someFunc},"NUMBER OF PLAYERS")]),_:1})}var S=l(N,[["render",v]]);export{S as default};
