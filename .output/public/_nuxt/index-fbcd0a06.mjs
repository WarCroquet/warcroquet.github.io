import{_ as c,d as r,o as i,c as _,w as t,a as e,f as u,g as p,h as d}from"./entry-e01419c4.mjs";import{L as m}from"./LayoutMain-212e62fa.mjs";import{s as f}from"./main-47dfe43e.mjs";const y=r({__name:"index",setup(s,{expose:a}){a();const o={someFunc:async()=>{console.log(await f())},LayoutMain:m};return Object.defineProperty(o,"__isScriptSetup",{enumerable:!1,value:!0}),o}}),v=e("h3",null,"NEW GAME",-1),P=e("select",{class:"select"},[e("option",{disabled:"disabled",selected:"selected",value:""},"Select players"),e("option",{value:"1"},"1 Player"),e("option",{value:"2"},"2 Players"),e("option",{value:"3"},"3 Players"),e("option",{value:"4"},"4 Players"),e("option",{value:"5"},"5 Players"),e("option",{value:"6"},"6 Players"),e("option",{value:"7"},"7 Players"),e("option",{value:"8"},"8 Players")],-1),h={class:"link"},x=p("NEXT");function N(s,a,n,o,b,L){const l=d;return i(),_(o.LayoutMain,null,{footer:t(()=>[e("div",h,[u(l,{to:"createPlayers",class:"btn btn-yellow"},{default:t(()=>[x]),_:1})])]),default:t(()=>[v,e("h2",{onClick:o.someFunc},"NUMBER OF PLAYERS"),P]),_:1})}var B=c(y,[["render",N]]);export{B as default};
