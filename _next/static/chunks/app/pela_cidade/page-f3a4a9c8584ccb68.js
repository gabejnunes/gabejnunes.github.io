(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[467],{1356:function(e,t,r){Promise.resolve().then(r.bind(r,2114))},2114:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return h}});var s=r(7437),a=r(2265),o=r(9064),n=r(3426),i=r(8513),l=r(3584),c=r(5662),d=r(134),u=e=>{let{message:t}=e;return(0,s.jsxs)("div",{className:"bg-amber-600 mt-4 p-2 rounded-xl text-center text-white",children:["Est\xe1 em regi\xe3o metropolitana!",(0,s.jsx)("br",{}),"(",t,")"]})},m=e=>{let{message:t}=e;return(0,s.jsx)("div",{className:"rounded-xl mt-4 ",children:(0,s.jsxs)("div",{className:"bg-red-600 rounded-xl p-2 text-center text-white",children:["Est\xe1 em demais regi\xf5es!",(0,s.jsx)("br",{}),"(",t,")",(0,s.jsx)("button",{className:"bg-red-700 mt-1 p-1 rounded-xl w-full text-center hover:bg-red-800",children:"Como orientar o cliente?"})]})})},h=()=>{let[e,t]=(0,a.useState)([]),[r,h]=(0,a.useState)(""),[f,x]=(0,a.useState)([]),[g,p]=(0,a.useState)(""),[w,v]=(0,a.useState)([]),[j,y]=(0,a.useState)(!1),[S,E]=(0,a.useState)(!1),b=new i.Z,[N,_]=(0,a.useState)(null),[B,R]=(0,a.useState)(null),[F,Z]=(0,a.useState)(!1),[I,O]=(0,a.useState)(!1),[k,C]=(0,a.useState)(!1);return(0,a.useEffect)(()=>{F||(async()=>{try{_(await b.getEstados()),Z(!0)}catch(e){console.log(e),alert(c.c),window.location.href="../"}})(),j?(h(""),p(""),x([]),O(!1),R([]),C(!1)):""!=r&&null!=document.getElementById("estadoSearchBar")&&(document.getElementById("estadoSearchBar").value=r.nome),S?(I||(async()=>{try{R(await b.getMunicipiosFromEstado(r.id)),O(!0)}catch(e){console.log(e),alert(c.c),window.location.href="../"}})(),p(""),t([]),C(!1)):""==g||null==document.getElementById("cidadeSearchBar")||(document.getElementById("cidadeSearchBar").value=g.nome,k||fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados/"+r.id+"/regioes-metropolitanas").then(e=>e.json()).then(e=>{let t=e.filter(e=>e.municipios.some(e=>e.id===g.id));v(t)}))},[r,g,j,S,k]),(0,s.jsx)("div",{className:"h-full flex justify-center m-8",children:(0,s.jsx)("section",{className:"rounded-xl bg-slate-100 h-[28rem] w-96 overflow-y-auto",children:(0,s.jsxs)("div",{className:"m-4",children:[(()=>{if(null!=N)return(0,s.jsxs)("div",{children:[(0,s.jsx)("div",{className:"font-semibold",children:"Qual \xe9 o estado?"}),(0,s.jsx)(o.Z,{id:"estadoSearchBar",placeholder:"Digite o estado",maxLength:100,data:N,searchFor:"nome",setSearchResults:t,isFocused:y}),(0,s.jsx)(n.Z,{id:"estadoSearchResults",searchResults:e,orderBy:"nome",setSelectedResult:h,setSearchResults:t})]})})(),!j&&(()=>{if(""!=r&&B!=[])return(0,s.jsxs)("div",{className:"mt-4",children:[(0,s.jsx)("div",{className:"font-semibold",children:"Qual \xe9 a cidade?"}),(0,s.jsx)(o.Z,{id:"cidadeSearchBar",placeholder:"Digite a cidade",data:B,searchFor:"nome",setSearchResults:x,isFocused:E}),(0,s.jsx)(n.Z,{id:"cidadeSearchResults",searchResults:f,orderBy:"nome",setSelectedResult:p,setSearchResults:x})]})})(),!S&&""!=g&&(()=>{if(!k&&""!=r&&""!=g&&""!=document.getElementById("cidadeSearchBar").value)return l.Z.includes(g.id)?(0,s.jsx)(d.Z,{}):w.length>0?(0,s.jsx)(u,{message:w[0].nome}):(0,s.jsx)(m,{message:"N\xe3o faz parte de uma regi\xe3o metropolitana"})})()]})})})}},134:function(e,t,r){"use strict";var s=r(7437);t.Z=()=>(0,s.jsx)("div",{className:"bg-green-800 mt-4 p-2 rounded-xl text-center text-white",children:"Est\xe1 em uma capital!"})},9064:function(e,t,r){"use strict";r.d(t,{Z:function(){return i}});var s=r(7437),a=r(2265);function o(e){return e.toString().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"")}let n=(0,a.memo)(e=>{let{data:t,id:r,placeholder:n,searchFor:i,maxLength:l,setSearchResults:c,isFocused:d}=e,[u,m]=(0,a.useState)(""),h=e=>{let r=t.filter(t=>e&&o(t[i]).includes(o(e)));c(r)},f=e=>{m(e),h(e)};return(0,s.jsx)("div",{className:"w-full",children:(0,s.jsx)("input",{id:r,className:"z-0 p-2 mt-1 w-full bg-white rounded-xl",placeholder:n,value:u,autoComplete:"off",maxLength:l,onFocus:e=>{d(!0),f(e.target.value)},onBlur:()=>{d(!1)},onInput:e=>{f(e.target.value)}})})});var i=n},3426:function(e,t,r){"use strict";var s=r(7437);t.Z=e=>{let{id:t,setSearchResults:r,searchResults:a,orderBy:o,setSelectedResult:n}=e;return(0,s.jsx)("div",{id:t,className:"w-full bg-white flex flex-col rounded-xl mt-2 max-h-40 max-w-[22rem] overflow-y-auto",children:a.sort((e,t)=>{if(e[o]<t[o])return -1}).map(e=>(0,s.jsx)("button",{className:"basis-full text-left p-2 hover:bg-gray-100",onClick:t=>{n(e),r([])},children:e[o]},e.id))})}},3584:function(e,t){"use strict";t.Z=[1200401,2704302,1600303,1302603,2927408,2304400,5300108,3205309,5208707,2111300,5103403,5002704,3106200,1501402,2507507,4106902,2611606,2211001,3304557,2408102,4314902,1100205,1400100,4205407,3550308,2800308,1721e3]},5662:function(e,t,r){"use strict";r.d(t,{c:function(){return s}});let s="Um erro aconteceu :( \nVeja o log para mais informa\xe7\xf5es. Voltando \xe0 p\xe1gina inicial."},8513:function(e,t){"use strict";let r="https://servicodados.ibge.gov.br/api/v1/localidades";t.Z=class{async getEstados(){try{let e=await fetch(r+"/estados"),t=await e.json();return t}catch(e){throw Error(e)}}async getEstadoFromSigla(e){if(2==e.length){let t=await this.getEstados(),r=t.filter(t=>t.sigla==e);return r}throw Error("A sigla inserida est\xe1 com o formato incorreto (duas letras)")}async getMunicipiosFromEstado(e){try{let t=await fetch(r+"/estados/"+e+"/municipios"),s=await t.json();return s}catch(e){throw Error(e)}}async getRegioesMetropolitanasFromEstado(e){try{let t=await fetch(r+"/estados/"+e+"/regioes-metropolitanas"),s=await t.json();return s}catch(e){throw Error(e)}}async getMunicipioFromID(e){try{let t=await fetch(r+"/municipios/"+e),s=await t.json();return s}catch(e){throw Error(e)}}}},622:function(e,t,r){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var s=r(2265),a=Symbol.for("react.element"),o=(Symbol.for("react.fragment"),Object.prototype.hasOwnProperty),n=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,r){var s,l={},c=null,d=null;for(s in void 0!==r&&(c=""+r),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(d=t.ref),t)o.call(t,s)&&!i.hasOwnProperty(s)&&(l[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps)void 0===l[s]&&(l[s]=t[s]);return{$$typeof:a,type:e,key:c,ref:d,props:l,_owner:n.current}}t.jsx=l,t.jsxs=l},7437:function(e,t,r){"use strict";e.exports=r(622)}},function(e){e.O(0,[971,596,744],function(){return e(e.s=1356)}),_N_E=e.O()}]);