var C=Object.defineProperty,k=Object.defineProperties;var S=Object.getOwnPropertyDescriptors;var p=Object.getOwnPropertySymbols;var M=Object.prototype.hasOwnProperty,B=Object.prototype.propertyIsEnumerable;var f=(e,i,a)=>i in e?C(e,i,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[i]=a,l=(e,i)=>{for(var a in i||(i={}))M.call(i,a)&&f(e,a,i[a]);if(p)for(var a of p(i))B.call(i,a)&&f(e,a,i[a]);return e},h=(e,i)=>k(e,S(i));import{j as n,a as s,I as m,r as g,h as H,V as y,C as P,H as b,b as L,R as I,c as G}from"./vendor.6c6178c5.js";const O=function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const d of o.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function a(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerpolicy&&(o.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?o.credentials="include":t.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(t){if(t.ep)return;t.ep=!0;const o=a(t);fetch(t.href,o)}};O();const R=e=>{var r,t;const i=(r=e.iconBgColour)!=null?r:"#000000",a=(t=e.iconColour)!=null?t:"#ffffff";return n("span",{style:{lineHeight:e.lineHeight},onClick:e.onClick,children:s(m,h(l({viewBox:"0 0 512 512",color:"red.500"},e),{children:[n("path",{d:"M0 0h512v512H0z",fill:i,"fill-opacity":"1"}),n("path",{d:"M120.16 45A20.162 20.162 0 0 0 100 65.16v381.68A20.162 20.162 0 0 0 120.16 467h65.68A20.162 20.162 0 0 0 206 446.84V65.16A20.162 20.162 0 0 0 185.84 45h-65.68zm206 0A20.162 20.162 0 0 0 306 65.16v381.68A20.162 20.162 0 0 0 326.16 467h65.68A20.162 20.162 0 0 0 412 446.84V65.16A20.162 20.162 0 0 0 391.84 45h-65.68z",fill:a})]}))})},z=e=>{var r,t;const i=(r=e.iconBgColour)!=null?r:"#000000",a=(t=e.iconColour)!=null?t:"#ffffff";return n("span",{style:{lineHeight:e.lineHeight},onClick:e.onClick,children:s(m,h(l({viewBox:"0 0 512 512",color:"red.500"},e),{children:[n("path",{d:"M0 0h512v512H0z",fill:i,"fill-opacity":"1"})," ",n("path",{d:"M106.854 106.002a26.003 26.003 0 0 0-25.64 29.326c16 124 16 117.344 0 241.344a26.003 26.003 0 0 0 35.776 27.332l298-124a26.003 26.003 0 0 0 0-48.008l-298-124a26.003 26.003 0 0 0-10.136-1.994z",fill:a})]}))})},v=({text:e="",textColour:i="#000000",bgColour:a="#ffa033",iconColour:r,iconBgColour:t,audioPath:o,children:d})=>{const[c,V]=g.exports.useState(new H.Howl({src:[o],onplay:()=>{console.log("I am being played")}})),[w,u]=g.exports.useState(!1),x=()=>{c.play()},A=()=>{c.pause()};return s("span",{style:{borderRadius:"4px",paddingLeft:"8px",paddingRight:"8px",paddingBottom:"4px",paddingTop:"2px",color:i,background:a},children:[w?n(R,{onClick:()=>{A(),u(!1)},lineHeight:"32px",iconColour:r,iconBgColour:t}):n(z,{onClick:()=>{x(),u(!0)},lineHeight:"32px"}),s("span",{style:{paddingLeft:"8px",textIndent:"8px"},children:[e,d]})]})},D=()=>s(y,{children:[s("div",{children:["Demo of ",n("a",{href:"https://github.com/Moop204/textaudio",children:"textaudio"})," ","component using an exerpt from this"," ",n("a",{href:"https://en.wikipedia.org/wiki/Misogyny_Speech",children:"wikipedia article"}),"."]}),n(P,{paddingLeft:"20%",paddingRight:"20%",children:s(y,{children:[n(b,{children:"Misogyny Speech"}),n("div",{children:"..."}),n(b,{as:"h3",size:"lg",alignSelf:"start",textDecoration:"underline",children:"Background"}),s("div",{children:[" ",`Over the months leading up to this speech, Gillard had been criticised by parts of the Australian media and some members of the official Opposition Party based on her gender, that she was unmarried, her personal life, and that she was childless. One Liberal MP, Bill Heffernan, said she \u201Cwas unfit for leadership because she was deliberately barren" and another Sophie Mirabella, said "You won't need his [ex-PM Kevin Rudd's] taxpayer-funded nanny, will you?" regarding her ousting of the previous Prime Minister.`]}),n("div",{children:`Gillard also faced criticism for her actions as leader, reportedly being \u201Ccharacterized as unseemly and unduly brutal for a woman\u201D. Later she would reveal that she was also under constant attack by her predecessor, Kevin Rudd, saying "What shouldn't happen in politics is you shouldn't be dragged down by someone who is on your own side... When asked whether he had been involved in conversations undermining the Labor party and undermining the government, he refused to answer." There were also several instances of \u201Csexist and hateful attacks from anonymous critics" and "a plethora of pornographic and degrading images of the prime minister circulated on web sites, e-mail, and social media\u201D.`}),s("div",{children:["Her speech was part of the no confidence motion to have Peter Slipper removed as Speaker over crude and sexist texts sent to his aide.",n(v,{audioPath:"./abbott-comment.mp3",text:'Abbott stated that every day Gillard supported Slipper was "another day of shame for a government which should already have died of shame"'}),". Gillard made statements in support of Slipper and linked Abbott's motion to remarks made by Alan Jones in the then-recent Alan Jones shame controversy where the broadcaster said that Julia Gillard's father had died of shame because of his daughter's lies. Gillard said that",n(v,{audioPath:"./gillard-speech.mp3",text:'"every day in every way" Abbott was sexist and misogynist.',iconColour:"#bbbb21",iconBgColour:"#fb2221"})]}),n("div",{children:`Within the speech, Gillard noted a number of statements Abbott had previously made. In an interview Abbott had stated, "If it's true, Stavros [the interviewer], that men have more power generally speaking than women, is that a bad thing?" When another person present at this interview stated they wanted their daughter to have as much opportunity as their son, Abbott responded, "Yeah, I completely agree, but what if men are by physiology or temperament, more adapted to exercise authority or to issue command?" Gillard also said that in March 2004, Abbott stated, "Abortion is the easy way out" and that he had stood next to a sign "ditch the witch" in reference to her political role.`}),n("div",{children:"..."})]})})]});function j(){return n(L,{children:s("p",{style:{paddingLeft:"40px"},children:[" ",n(D,{})," "]})})}I.render(n(G.StrictMode,{children:n(j,{})}),document.getElementById("root"));
