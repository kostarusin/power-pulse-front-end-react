import{r as a,a as l,j as e}from"./index-7b2495b4.js";const _="_modal_backdrop_ob3kn_1",x="_modal_content_ob3kn_10",p="_close_x_ob3kn_23",n={modal_backdrop:_,modal_content:x,close_x:p},m="/power-pulse-front-end-react/assets/sprite-d0bb77e8.svg",b=document.querySelector("#modal-root"),u=({onClose:c,children:r})=>{a.useEffect(()=>{const t=i=>{i.code==="Escape"&&(console.log("1",1),c())};return window.addEventListener("keydown",t),()=>{window.removeEventListener("keydown",t)}},[c]);const d=t=>{t.currentTarget===t.target&&c()},o=()=>{c()};return l.createPortal(e.jsx("div",{className:n.modal_backdrop,onClick:d,children:e.jsxs("div",{className:n.modal_content,children:[e.jsx("svg",{className:n.close_x,onClick:o,children:e.jsx("use",{href:m+"#icon-x"})}),r]})}),b)},h="_exercise_descr_bg124_9",j="_exercise_div_bg124_15",y="_type_bg124_25",v="_type_descr_bg124_31",s={exercise_descr:h,exercise_div:j,type:y,type_descr:v},g="_button_ixf7e_1",N={button:g},f=({btnType:c,text:r})=>e.jsx("button",{type:c,className:N.button,children:r}),k=({exercise:c})=>e.jsxs("div",{className:s.module_container,children:[e.jsx("div",{className:s.left_side,children:e.jsx("img",{src:"",alt:""})}),e.jsxs("div",{className:s.right_side,children:[e.jsxs("div",{className:s.exercise_descr,children:[e.jsxs("div",{className:s.exercise_div,children:[e.jsx("p",{className:s.type,children:"Name"}),e.jsx("p",{className:s.type_descr,children:c.name})]}),e.jsxs("div",{className:s.exercise_div,children:[e.jsx("p",{className:s.type,children:"Target"}),e.jsx("p",{className:s.type_descr,children:c.target})]}),e.jsxs("div",{className:s.exercise_div,children:[e.jsx("p",{className:s.type,children:"Body Part"}),e.jsx("p",{className:s.type_descr,children:c.bodyPart})]}),e.jsxs("div",{className:s.exercise_div,children:[e.jsx("p",{className:s.type,children:"Equipment"}),e.jsx("p",{className:s.type_descr,children:c.equipment})]})]}),e.jsx(f,{btnType:"submit",text:"Add to diary"})]})]}),w=()=>{const[c,r]=a.useState(!1),d=()=>{r(t=>!t)},o={_id:"64f2458d6f67bc34bae4f813",bodyPart:"upper arms",equipment:"barbell",gifUrl:"https://ftp.goit.study/img/power-pulse/gifs/0038.gif",name:"barbell drag curl",target:"biceps",burnedCalories:84,time:3};return e.jsxs("div",{children:["Exercises",e.jsx("button",{type:"button",onClick:d,children:"TEST Open exercise"}),c&&e.jsx(u,{onClose:d,children:e.jsx(k,{exercise:o})})]})};export{w as default};