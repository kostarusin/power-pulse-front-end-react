import{u as T,g as de,x as C,r as p,e as N,j as e,i as pe,L as ue,k as z,l as X}from"./index-5ec86e3b.js";import{B as Z,M as V}from"./ButtonModal-f1cb9bce.js";import{i as F}from"./icons-def18795.js";import{s as m}from"./styled-components.browser.esm-8e47f42f.js";import"./emotion-unitless.esm-f0048d07.js";const xe=t=>t.exercises.loading,ee=t=>t.exercises,A=t=>t.exercises.bodyParts,O=()=>{const t=T(xe),s=T(ee),r=T(A);return{loading:t,exercises:s,bodyParts:r}};var te={exports:{}},he="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",me=he,ge=me;function se(){}function ne(){}ne.resetWarningCache=se;var fe=function(){function t(i,n,c,o,a,l){if(l!==ge){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}t.isRequired=t;function s(){return t}var r={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:s,element:t,elementType:t,instanceOf:s,node:t,objectOf:s,oneOf:s,oneOfType:s,shape:s,exact:s,checkPropTypes:ne,resetWarningCache:se};return r.PropTypes=r,r};te.exports=fe();var L=te.exports;const P=de(L);var Y=typeof window>"u"?p.useEffect:p.useLayoutEffect,ye=({isPlaying:t,duration:s,startAt:r=0,updateInterval:i=0,onComplete:n,onUpdate:c})=>{let[o,a]=p.useState(r),l=p.useRef(0),u=p.useRef(r),y=p.useRef(r*-1e3),x=p.useRef(null),h=p.useRef(null),b=p.useRef(null),d=j=>{let w=j/1e3;if(h.current===null){h.current=w,x.current=requestAnimationFrame(d);return}let _=w-h.current,E=l.current+_;h.current=w,l.current=E;let $=u.current+(i===0?E:(E/i|0)*i),B=u.current+E,G=typeof s=="number"&&B>=s;a(G?s:$),G||(x.current=requestAnimationFrame(d))},k=()=>{x.current&&cancelAnimationFrame(x.current),b.current&&clearTimeout(b.current),h.current=null},f=p.useCallback(j=>{k(),l.current=0;let w=typeof j=="number"?j:r;u.current=w,a(w),t&&(x.current=requestAnimationFrame(d))},[t,r]);return Y(()=>{if(c==null||c(o),s&&o>=s){y.current+=s*1e3;let{shouldRepeat:j=!1,delay:w=0,newStartAt:_}=(n==null?void 0:n(y.current/1e3))||{};j&&(b.current=setTimeout(()=>f(_),w*1e3))}},[o,s]),Y(()=>(t&&(x.current=requestAnimationFrame(d)),k),[t,s,i]),{elapsedTime:o,reset:f}},we=(t,s,r)=>{let i=t/2,n=s/2,c=i-n,o=2*c,a=r==="clockwise"?"1,0":"0,1",l=2*Math.PI*c;return{path:`m ${i},${n} a ${c},${c} 0 ${a} 0,${o} a ${c},${c} 0 ${a} 0,-${o}`,pathLength:l}},H=(t,s)=>t===0||t===s?0:typeof s=="number"?t-s:0,be=t=>({position:"relative",width:t,height:t}),je={display:"flex",justifyContent:"center",alignItems:"center",position:"absolute",left:0,top:0,width:"100%",height:"100%"},ie=(t,s,r,i,n)=>{if(i===0)return s;let c=(n?i-t:t)/i;return s+r*c},J=t=>{var s,r;return(r=(s=t.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,(i,n,c,o)=>`#${n}${n}${c}${c}${o}${o}`).substring(1).match(/.{2}/g))==null?void 0:s.map(i=>parseInt(i,16)))!=null?r:[]},ve=(t,s)=>{var r;let{colors:i,colorsTime:n,isSmoothColorTransition:c=!0}=t;if(typeof i=="string")return i;let o=(r=n==null?void 0:n.findIndex((h,b)=>h>=s&&s>=n[b+1]))!=null?r:-1;if(!n||o===-1)return i[0];if(!c)return i[o];let a=n[o]-s,l=n[o]-n[o+1],u=J(i[o]),y=J(i[o+1]),x=!!t.isGrowing;return`rgb(${u.map((h,b)=>ie(a,h,y[b]-h,l,x)|0).join(",")})`},_e=t=>{let{duration:s,initialRemainingTime:r,updateInterval:i,size:n=180,strokeWidth:c=12,trailStrokeWidth:o,isPlaying:a=!1,isGrowing:l=!1,rotation:u="clockwise",onComplete:y,onUpdate:x}=t,h=p.useRef(),b=Math.max(c,o??0),{path:d,pathLength:k}=we(n,b,u),{elapsedTime:f}=ye({isPlaying:a,duration:s,startAt:H(s,r),updateInterval:i,onUpdate:typeof x=="function"?w=>{let _=Math.ceil(s-w);_!==h.current&&(h.current=_,x(_))}:void 0,onComplete:typeof y=="function"?w=>{var _;let{shouldRepeat:E,delay:$,newInitialRemainingTime:B}=(_=y(w))!=null?_:{};if(E)return{shouldRepeat:E,delay:$,newStartAt:H(s,B)}}:void 0}),j=s-f;return{elapsedTime:f,path:d,pathLength:k,remainingTime:Math.ceil(j),rotation:u,size:n,stroke:ve(t,j),strokeDashoffset:ie(f,0,k,s,l),strokeWidth:c}},re=t=>{let{children:s,strokeLinecap:r,trailColor:i,trailStrokeWidth:n}=t,{path:c,pathLength:o,stroke:a,strokeDashoffset:l,remainingTime:u,elapsedTime:y,size:x,strokeWidth:h}=_e(t);return C.createElement("div",{style:be(x)},C.createElement("svg",{viewBox:`0 0 ${x} ${x}`,width:x,height:x,xmlns:"http://www.w3.org/2000/svg"},C.createElement("path",{d:c,fill:"none",stroke:i??"#d9d9d9",strokeWidth:n??h}),C.createElement("path",{d:c,fill:"none",stroke:a,strokeLinecap:r??"round",strokeWidth:h,strokeDasharray:o,strokeDashoffset:l})),typeof s=="function"&&C.createElement("div",{style:je},s({remainingTime:u,elapsedTime:y,color:a})))};re.displayName="CountdownCircleTimer";const ke="_module_container_14pez_5",Ee="_left_side_14pez_11",Pe="_timer_14pez_17",Te="_play_14pez_23",Ne="_calories_14pez_30",Ce="_calories_amount_14pez_36",Se="_right_side_14pez_40",Ie="_gif_14pez_47",Le="_exercise_descr_14pez_53",ze="_exercise_div_14pez_59",We="_type_14pez_70",Re="_type_descr_14pez_76",g={module_container:ke,left_side:Ee,timer:Pe,play:Te,calories:Ne,calories_amount:Ce,right_side:Se,gif:Ie,exercise_descr:Le,exercise_div:ze,type:We,type_descr:Re},$e=({exercise:t,toggleExerciseModal:s,toggleSuccessModal:r,setExercise:i})=>{const[n,c]=p.useState(0),[o,a]=p.useState(0),[l,u]=p.useState(!1),y=N();p.useEffect(()=>{let f;return l?f=setInterval(()=>{c(j=>{const w=j+1;return console.log("duration",w),w===180&&(clearInterval(f),u(!1)),w})},1e3):clearInterval(f),()=>{clearInterval(f)}},[l,u]),p.useEffect(()=>{const f=(n/60*t.burnedCalories/3).toFixed();a(f)},[n,t.burnedCalories]);const x=()=>{u(f=>!f)},h=f=>f.charAt(0).toUpperCase()+f.slice(1),b=new Date().toLocaleDateString("en-GB",{day:"2-digit",month:"2-digit",year:"numeric"}).replace(/\//g,"-"),d=Math.floor(n/60),k=()=>{y(pe({date:b,credentials:{doneExercises:[{exercise:t._id,time:d,calories:o}]}})),i({time:d,calories:o}),s(),r()};return e.jsxs("div",{className:g.module_container,children:[e.jsxs("div",{className:g.left_side,children:[e.jsx("img",{className:g.gif,src:t.gifUrl,alt:"Exercise technique"}),e.jsxs("div",{className:g.timer,children:[e.jsx(re,{isPlaying:l,strokeWidth:4,duration:180,size:124,isGrowing:!0,rotation:"counterclockwise",colors:["#E6533C"],trailColor:["#323232"],children:({remainingTime:f})=>{const j=Math.floor(f/60),w=f%60;return`${String(j).padStart(2,"0")}:${String(w).padStart(2,"0")}`}}),!l&&e.jsx("svg",{className:g.play,onClick:x,children:e.jsx("use",{href:F+"#icon-play"})}),l&&e.jsx("svg",{className:g.play,onClick:x,children:e.jsx("use",{href:F+"#icon-pause-square"})}),e.jsxs("p",{className:g.calories,children:["Burned calories:"," ",e.jsx("span",{className:g.calories_amount,children:o})]})]})]}),e.jsxs("div",{className:g.right_side,children:[e.jsxs("div",{className:g.exercise_descr,children:[e.jsxs("div",{className:g.exercise_div,children:[e.jsx("p",{className:g.type,children:"Name"}),e.jsx("p",{className:g.type_descr,children:h(t.name)})]}),e.jsxs("div",{className:g.exercise_div,children:[e.jsx("p",{className:g.type,children:"Target"}),e.jsx("p",{className:g.type_descr,children:h(t.target)})]}),e.jsxs("div",{className:g.exercise_div,children:[e.jsx("p",{className:g.type,children:"Body Part"}),e.jsx("p",{className:g.type_descr,children:h(t.bodyPart)})]}),e.jsxs("div",{className:g.exercise_div,children:[e.jsx("p",{className:g.type,children:"Equipment"}),e.jsx("p",{className:g.type_descr,children:h(t.equipment)})]})]}),e.jsx(Z,{btnType:"button",text:"Add to diary",onClick:k,disabled:d<1})]})]})},Be="_container_1kxge_1",qe="_pic_1kxge_10",Me="_welldone_1kxge_14",Fe="_amount_container_1kxge_20",Oe="_text_1kxge_27",Ae="_amount_1kxge_20",De="_links_1kxge_37",Ue="_link_1kxge_37",Ge="_svg_1kxge_51",v={container:Be,pic:qe,welldone:Me,amount_container:Fe,text:Oe,amount:Ae,links:De,link:Ue,svg:Ge},Ve="/power-pulse-front-end-react/assets/thumb_up-47cb592a.png",Ye=({exercise:t})=>(console.log(t),e.jsxs("div",{className:v.container,children:[e.jsx("img",{className:v.pic,src:Ve,alt:"Well done"}),e.jsx("p",{className:v.welldone,children:"Well done"}),e.jsxs("div",{className:v.amount_container,children:[e.jsxs("p",{className:v.text,children:["Your time: ",e.jsx("span",{className:v.amount,children:t.time})]}),e.jsxs("p",{className:v.text,children:["Burned calories:"," ",e.jsx("span",{className:v.amount,children:t.calories})]})]}),e.jsxs("div",{className:v.links,children:[e.jsx(Z,{btnType:"button",text:"Next exercise"}),e.jsxs(ue,{to:"/diary",className:v.link,children:["To the diary",e.jsx("svg",{className:v.svg,children:e.jsx("use",{href:F+"#icon-arrow-modal"})})]})]})]})),D=m.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  @media screen and (min-width: 1440px) {
    flex-wrap: wrap;
    justify-content: start;
    column-gap: 22px;
  }
`,He=m.li`
  position: relative;
  cursor: pointer;
`,Je=m.img`
  display: block;
  width: 100%;
  height: 206px;
  height: auto;
  border: 1px #efede8;
  border-radius: 12px;

  filter: brightness(40%);

  @media screen and (min-width: 375px) {
    width: 335px;
    height: 206px;
  }

  @media screen and (min-width: 768px) {
    width: 224px;
    height: 206px;
  }
`,Ke=m.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: auto;
`,Qe=m.h3`
  font-size: 20px;
  line-height: 1.2;

  color: var(--white-color);

  @media screen and (min-width: 375px) {
    font-size: 24px;
    line-height: 1.33;
  }
`,Xe=m.p`
  font-size: 12px;
  line-height: 1.5;

  color: rgba(239, 237, 232, 0.4);
`,Ze="/power-pulse-front-end-react/assets/0-default-fa91a1ec.jpg",W=({exercisesItem:t,handleFilterClick:s,handleSetExName:r})=>{const{name:i,filter:n,imgURL:c}=t,o=l=>{s("Waist"),r(l)},a=l=>l.slice(0,1).toUpperCase()+l.slice(1);return e.jsxs(He,{onClick:()=>o(i),children:[e.jsx(Je,{src:c||Ze,alt:i}),e.jsxs(Ke,{children:[e.jsx(Qe,{children:a(i)}),e.jsx(Xe,{children:n})]})]})};W.propTypes={exercisesItem:L.PropTypes.object};const I="/power-pulse-front-end-react/assets/sprite-2fdf8fa9.svg",U=m.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 90px;
  height: 100vh;

  ul.pagination {
    display: flex;
    list-style: none;
    padding: 0;
    justify-content: center;
    margin-top: 32px;
  }

  li.page-item {
    margin: 0 4px;
  }

  button.page-link {
    border: none;
    background-color: #fff;
    padding: 0;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    cursor: pointer;
    transition: background-color 0.2s ease;
    font-size: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  button.page-link:not(.active) {
    background-color: rgba(239, 237, 232, 0.1);
  }

  li.page-item.active button.page-link {
    padding: 0;
  }

  li.page-item.active button.page-link svg {
    width: 14px;
    height: 14px;
  }

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
    justify-content: baseline;
    height: 100%;
  }
`,et=m.li`
  margin-top: 32px;
`,R=({itemsPerPage:t,totalItems:s,currentPage:r,onPageChange:i})=>{const n=Math.ceil(s/t),c=a=>{a>=1&&a<=n&&i(a)},o=()=>{const a=[];for(let l=1;l<=n;l++)a.push(e.jsx(et,{className:`page-item ${l===r?"active":""}`,children:e.jsxs("button",{className:"page-link",onClick:()=>c(l),children:[l,l===r&&e.jsx("svg",{children:e.jsx("use",{href:`${I}#pagination-btn`})})]})},l));return a};return e.jsx("nav",{"aria-label":"Pagination",children:e.jsx("ul",{className:"pagination",children:o()})})};R.propTypes={itemsPerPage:P.number.isRequired,totalItems:P.number.isRequired,currentPage:P.number.isRequired,onPageChange:P.func.isRequired};const ae=({handleFilterClick:t,handleSetExName:s})=>{const r=N(),{bodyParts:i}=O();console.log(i.bodyParts),p.useEffect(()=>{r(z())},[r]);const[n,c]=p.useState(1),o=()=>{const d=window.innerWidth;return d>=768&&d<=1439?9:10},[a,l]=p.useState(o),u=()=>{l(o())};p.useEffect(()=>(window.addEventListener("resize",u),u(),()=>{window.removeEventListener("resize",u)}),[]);const y=d=>{c(d)};console.log();const x=n*a,h=x-a,b=i.bodyParts.slice(h,x);return e.jsxs(U,{children:[e.jsx(D,{children:b.map(d=>e.jsx(W,{exercisesItem:d,handleFilterClick:t,handleSetExName:s},d._id))}),a<i.bodyParts.length&&e.jsx(R,{itemsPerPage:a,totalItems:i.bodyParts.length,currentPage:n,onPageChange:y})]})};ae.propTypes={bodyParts:P.array};const tt=m.div`
  padding-left: 20px;
  padding-right: 20px;
  margin-top: 10px;

  @media screen and (min-width: 1440px) {
    padding-left: 96px;
    width: 1440px;
    margin-left: auto;
    margin-right: auto;
  }
`,st=m.li`
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
  }
`,K=m.h2`
  color: #efede8;
  font-size: 24px;
  font-weight: 700;
  line-height: 1.16;
  margin-bottom: 20px;
`,oe=({handleFilterClick:t,handleSetExName:s})=>{const r=N();p.useEffect(()=>{r(z())},[r]);const i=T(A),[n,c]=p.useState(1),o=()=>{const d=window.innerWidth;return d>=768&&d<=1439?9:10},[a,l]=p.useState(o),u=()=>{l(o())};p.useEffect(()=>(window.addEventListener("resize",u),u(),()=>{window.removeEventListener("resize",u)}),[]);const y=d=>{c(d)},x=n*a,h=x-a,b=i.muscles.slice(h,x);return e.jsxs(U,{children:[e.jsx(D,{children:b.map(d=>e.jsx(W,{exercisesItem:d,handleFilterClick:t,handleSetExName:s},d._id))}),a<i.muscles.length&&e.jsx(R,{itemsPerPage:a,totalItems:i.muscles.length,currentPage:n,onPageChange:y})]})};oe.propTypes={exercises:P.array};const ce=({handleFilterClick:t,handleSetExName:s})=>{const r=N();p.useEffect(()=>{r(z())},[r]);const i=T(A),[n,c]=p.useState(1),o=()=>{const d=window.innerWidth;return d>=768&&d<=1439?9:(d<375||d>=1440,10)},[a,l]=p.useState(o),u=()=>{l(o())};p.useEffect(()=>(window.addEventListener("resize",u),u(),()=>{window.removeEventListener("resize",u)}),[]);const y=d=>{c(d)},x=n*a,h=x-a,b=i.equipment.slice(h,x);return e.jsxs(U,{children:[e.jsx(D,{children:b.map(d=>e.jsx(W,{exercisesItem:d,handleFilterClick:t,handleSetExName:s},d._id))}),a<i.equipment.length&&e.jsx(R,{itemsPerPage:a,totalItems:i.equipment.length,currentPage:n,onPageChange:y})]})};ce.propTypes={equipment:P.array};const nt=m.ul`
  display: flex;
  gap: 28px;
  margin-bottom: 48px;
  @media screen and (min-width: 1440px) {
    padding-right: 96px;
  }
`,q=m.li`
  color: rgba(239, 237, 232, 0.4);
  font-size: 14px;
  font-weight: 400;
  line-height: 1.28;
  position: relative;

  &.active::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    bottom: -8px;
    width: 100%;
    height: 4px;
    border-radius: 2px;
    background-color: var(--orange-color);
  }

  &.active {
    color: #efede8;
  }
`,M=m.button`
  color: rgba(239, 237, 232, 0.4);
  font-size: 14px;
  font-weight: 400;

  background-color: var(--black-color);

  &.active {
    color: #efede8;
  }
`,le=({activeFilter:t,handleFilterClick:s})=>e.jsxs(nt,{children:[e.jsx(q,{className:t==="Body parts"?"active":"",children:e.jsx(M,{type:"button",onClick:()=>s("Body parts"),className:t==="Body parts"?"active":"",children:"Body parts"})}),e.jsx(q,{className:t==="Muscules"?"active":"",children:e.jsx(M,{type:"button",onClick:()=>s("Muscules"),className:t==="Muscules"?"active":"",children:"Muscules"})}),e.jsx(q,{className:t==="Equipment"?"active":"",children:e.jsx(M,{type:"button",onClick:()=>s("Equipment"),className:t==="Equipment"?"active":"",children:"Equipment"})})]});le.propTypes={activeFilter:L.PropTypes.string,handleFilterClick:L.PropTypes.func};const it=m.li`
  width: 100%;
  min-height: 141px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.2);
  background: rgba(239, 237, 232, 0.05);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media screen and (max-width: 767px) {
    margin: 0 auto;
  }
  @media screen and (min-width: 375px) {
    width: 335px;
  }
  @media screen and (min-width: 768px) {
    width: calc((100% - 16px) / 2);
  }

  @media screen and (min-width: 1440px) {
    width: 370px;
  }
`,rt=m.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`,at=m.p`
  font-size: 12px;
  font-weight: 700;
  line-height: normal;
  color: #fff;

  padding: 5px 7.5px;
  border-radius: 4px;
  background: rgba(239, 237, 232, 0.05);
  text-transform: uppercase;
`,ot=m.button`
  background: transparent;
  border: none;
  color: var(--orange-color);
  font-size: 16px;
  line-height: 1.5;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  /* &::after {
    content: url(../../../../src/components/MainExercises/Waist/img/Icon.svg);
    display: block;
    width: 16px;
    height: 16px;
  } */

  &:hover {
    color: var(--white-color);
  }
  &:focus {
    color: var(--white-color);
  }
`,ct=m.svg`
  width: 13px;
  height: 13px;

  @media screen and (min-width: 768px) {
    width: 16px;
    height: 16px;
  }
`,lt=m.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`,dt=m.h3`
  position: relative;
  font-size: 24px;
  line-height: 1.333;
  color: var(--white-color);

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding-left: 8px;
  width: 263px;

  @media screen and (min-width: 768px) {
    width: 285px;
  }
`,pt=m.svg`
  width: 16px;
  height: 16px;
`,ut=m.span`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--beige-color);

  border-radius: 50%;

  width: 24px;
  height: 24px;
`,xt=m.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 4px 16px;
`,ht=m.li`
  display: flex;
  flex-direction: row;
  gap: 4px;
  color: rgba(239, 237, 232, 0.4);
  font-size: 12px;
  line-height: 1.5;
`,mt=m.span`
  color: var(--white-color);
`,S={cardLabel:"Workout",btnLabel:"Start",list:{burnedCalories:"Burned calories:",bodyPart:"Body part:",target:"Target:"}},Q=t=>t.slice(0,1).toUpperCase()+t.slice(1),gt=({exercises:t,toggleExerciseModal:s})=>e.jsxs(it,{children:[e.jsxs(rt,{children:[e.jsx(at,{children:S.cardLabel}),e.jsxs(ot,{onClick:()=>{s(t)},type:"button",children:[S.btnLabel,e.jsx("span",{children:e.jsx(ct,{children:e.jsx("use",{href:`${I}#icon-arrow-right`})})})]})]}),e.jsxs(lt,{children:[e.jsx(ut,{children:e.jsxs(pt,{width:24,height:24,children:[e.jsx("use",{href:`${I}#icon-run-exercises`}),e.jsx("use",{href:`${I}#icon-running-stick-figure`})]})}),e.jsxs(dt,{children:[Q(t.name)," "]})]}),e.jsx(xt,{children:Object.keys(S.list).map(r=>e.jsxs(ht,{children:[S.list[r],e.jsx(mt,{children:Q(String(t[r]))})]},r))})]}),ft=m.div`
  display: flex;
`,yt=m.img`
  display: none;
  @media screen and (min-width: 1440px) {
    display: block;
    width: 530px;
    height: 902px;
    /* margin-top: -100px; */
    z-index: -2;
  }
`,wt=m.ul`
  overflow-y: auto;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  width: 100%;

  &::-webkit-scrollbar-thumb {
    background-color: #ef8964;
    border-radius: 12px;
  }

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(239, 237, 232, 0.1);
    border-radius: 12px;
  }

  @media screen and (min-width: 768px) {
    overflow-y: auto;
    gap: 32px 16px;
    max-width: 100%;
    max-height: 726px;
    padding-right: 10px;
  }

  @media screen and (min-width: 1440px) {
    overflow-y: auto;
    max-height: 900px;
    padding-right: 16px;
    width: 850px;
  }
`,bt=m.h2`
  color: #efede8;
  font-size: 24px;
  font-weight: 700;
  line-height: 1.16;
  margin-bottom: 20px;
`,jt="/power-pulse-front-end-react/assets/Waist1-17196d5b.jpg",vt=({exerciseName:t})=>{const s=N();p.useEffect(()=>{s(X())},[s]);const i=T(ee).filter(n=>n.bodyPart||n.target||n.equipment===t);return e.jsx(e.Fragment,{children:e.jsxs(ft,{children:[e.jsx(wt,{children:i.length?i.slice(0,50).map(n=>e.jsx(gt,{data:n},n._id)):e.jsx(bt,{children:"There is not exercises downloaded else, plaese try choose this categorie later!!!"})}),e.jsx(yt,{src:jt,alt:"image"})]})})},_t=()=>{const[t,s]=p.useState("Body part"),[r,i]=p.useState(""),n=a=>{i(a)},c=a=>{s(a)},o=a=>a.slice(0,1).toUpperCase()+a.slice(1);return e.jsxs(tt,{children:[e.jsxs(st,{children:[e.jsx(K,{children:"Exercises"}),e.jsx(K,{children:o(r)}),e.jsx(le,{activeFilter:t,handleFilterClick:c})]}),t==="Body parts"&&e.jsx(ae,{handleFilterClick:c,handleSetExName:n}),t==="Muscules"&&e.jsx(oe,{handleFilterClick:c,handleSetExName:n}),t==="Equipment"&&e.jsx(ce,{handleFilterClick:c,handleSetExName:n}),t==="Waist"&&e.jsx(vt,{exerciseName:r})]})},Ct=()=>{const t=N(),{exercises:s}=O(),{bodyParts:r}=O();console.log(s),console.log(r);const[i,n]=p.useState(!1),[c,o]=p.useState(!1),[a,l]=p.useState({});p.useEffect(()=>{t(X())},[t]),p.useEffect(()=>{t(z())},[t]);const u=()=>{n(h=>!h)},y=()=>{o(h=>!h)},x={_id:"64f2458d6f67bc34bae4f813",bodyPart:"upper arms",equipment:"barbell",gifUrl:"https://ftp.goit.study/img/power-pulse/gifs/0038.gif",name:"barbell drag curl",target:"biceps",burnedCalories:84,time:3};return e.jsxs("div",{children:["Exercises",e.jsx(_t,{}),e.jsx("button",{type:"button",onClick:u,children:"TEST Open exercise"}),i&&e.jsx(V,{onClose:u,children:e.jsx($e,{exercise:x,toggleExerciseModal:u,toggleSuccessModal:y,setExercise:l})}),c&&e.jsx(V,{onClose:y,children:e.jsx(Ye,{exercise:a})})]})};export{Ct as default};
