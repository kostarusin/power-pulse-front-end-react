import{r as d,w as l,j as c}from"./index-8d39e628.js";import{i as _}from"./emotion-unitless.esm-7bcbe2e4.js";const i="_modal_backdrop_9cakv_1",m="_modal_content_9cakv_10",u="_close_x_9cakv_23",a={modal_backdrop:i,modal_content:m,close_x:u},x=document.querySelector("#modal-root"),h=({onClose:o,children:e})=>{d.useEffect(()=>{const t=r=>{r.code==="Escape"&&o()};return window.addEventListener("keydown",t),()=>{window.removeEventListener("keydown",t)}},[o]);const n=t=>{t.currentTarget===t.target&&o()},s=()=>{o()};return l.createPortal(c.jsx("div",{className:a.modal_backdrop,onClick:n,children:c.jsxs("div",{className:a.modal_content,children:[c.jsx("svg",{className:a.close_x,onClick:s,children:c.jsx("use",{href:_+"#icon-x"})}),e]})}),x)},k="_button_18r3s_1",p={button:k},w=({btnType:o,text:e,onClick:n,disabled:s})=>c.jsx("button",{type:o,className:p.button,onClick:n,disabled:s,children:e});export{w as B,h as M};
