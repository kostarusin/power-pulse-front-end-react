import{h as N,g as re,x as T,r as p,j as e,L as ie,i as y,u as S,k as M,l as ae}from"./index-1423ac4d.js";import{B as V,M as U}from"./ButtonModal-4098230c.js";import{i as q}from"./icons-b3b0c61d.js";const oe=t=>t.exercises.loading,ce=t=>t.exercises,B=t=>t.exercises.data,le=()=>{const t=N(oe),s=N(ce);return{loading:t,exercises:s}};var J={exports:{}},de="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",pe=de,ue=pe;function K(){}function Q(){}Q.resetWarningCache=K;var me=function(){function t(n,a,i,o,r,l){if(l!==ue){var d=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw d.name="Invariant Violation",d}}t.isRequired=t;function s(){return t}var c={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:s,element:t,elementType:t,instanceOf:s,node:t,objectOf:s,oneOf:s,oneOfType:s,shape:s,exact:s,checkPropTypes:Q,resetWarningCache:K};return c.PropTypes=c,c};J.exports=me();var C=J.exports;const k=re(C);var D=typeof window>"u"?p.useEffect:p.useLayoutEffect,he=({isPlaying:t,duration:s,startAt:c=0,updateInterval:n=0,onComplete:a,onUpdate:i})=>{let[o,r]=p.useState(c),l=p.useRef(0),d=p.useRef(c),g=p.useRef(c*-1e3),u=p.useRef(null),h=p.useRef(null),f=p.useRef(null),m=w=>{let _=w/1e3;if(h.current===null){h.current=_,u.current=requestAnimationFrame(m);return}let v=_-h.current,b=l.current+v;h.current=_,l.current=b;let R=d.current+(n===0?b:(b/n|0)*n),L=d.current+b,A=typeof s=="number"&&L>=s;r(A?s:R),A||(u.current=requestAnimationFrame(m))},P=()=>{u.current&&cancelAnimationFrame(u.current),f.current&&clearTimeout(f.current),h.current=null},E=p.useCallback(w=>{P(),l.current=0;let _=typeof w=="number"?w:c;d.current=_,r(_),t&&(u.current=requestAnimationFrame(m))},[t,c]);return D(()=>{if(i==null||i(o),s&&o>=s){g.current+=s*1e3;let{shouldRepeat:w=!1,delay:_=0,newStartAt:v}=(a==null?void 0:a(g.current/1e3))||{};w&&(f.current=setTimeout(()=>E(v),_*1e3))}},[o,s]),D(()=>(t&&(u.current=requestAnimationFrame(m)),P),[t,s,n]),{elapsedTime:o,reset:E}},xe=(t,s,c)=>{let n=t/2,a=s/2,i=n-a,o=2*i,r=c==="clockwise"?"1,0":"0,1",l=2*Math.PI*i;return{path:`m ${n},${a} a ${i},${i} 0 ${r} 0,${o} a ${i},${i} 0 ${r} 0,-${o}`,pathLength:l}},G=(t,s)=>t===0||t===s?0:typeof s=="number"?t-s:0,ge=t=>({position:"relative",width:t,height:t}),fe={display:"flex",justifyContent:"center",alignItems:"center",position:"absolute",left:0,top:0,width:"100%",height:"100%"},X=(t,s,c,n,a)=>{if(n===0)return s;let i=(a?n-t:t)/n;return s+c*i},Y=t=>{var s,c;return(c=(s=t.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,(n,a,i,o)=>`#${a}${a}${i}${i}${o}${o}`).substring(1).match(/.{2}/g))==null?void 0:s.map(n=>parseInt(n,16)))!=null?c:[]},ye=(t,s)=>{var c;let{colors:n,colorsTime:a,isSmoothColorTransition:i=!0}=t;if(typeof n=="string")return n;let o=(c=a==null?void 0:a.findIndex((h,f)=>h>=s&&s>=a[f+1]))!=null?c:-1;if(!a||o===-1)return n[0];if(!i)return n[o];let r=a[o]-s,l=a[o]-a[o+1],d=Y(n[o]),g=Y(n[o+1]),u=!!t.isGrowing;return`rgb(${d.map((h,f)=>X(r,h,g[f]-h,l,u)|0).join(",")})`},_e=t=>{let{duration:s,initialRemainingTime:c,updateInterval:n,size:a=180,strokeWidth:i=12,trailStrokeWidth:o,isPlaying:r=!1,isGrowing:l=!1,rotation:d="clockwise",onComplete:g,onUpdate:u}=t,h=p.useRef(),f=Math.max(i,o??0),{path:m,pathLength:P}=xe(a,f,d),{elapsedTime:E}=he({isPlaying:r,duration:s,startAt:G(s,c),updateInterval:n,onUpdate:typeof u=="function"?_=>{let v=Math.ceil(s-_);v!==h.current&&(h.current=v,u(v))}:void 0,onComplete:typeof g=="function"?_=>{var v;let{shouldRepeat:b,delay:R,newInitialRemainingTime:L}=(v=g(_))!=null?v:{};if(b)return{shouldRepeat:b,delay:R,newStartAt:G(s,L)}}:void 0}),w=s-E;return{elapsedTime:E,path:m,pathLength:P,remainingTime:Math.ceil(w),rotation:d,size:a,stroke:ye(t,w),strokeDashoffset:X(E,0,P,s,l),strokeWidth:i}},Z=t=>{let{children:s,strokeLinecap:c,trailColor:n,trailStrokeWidth:a}=t,{path:i,pathLength:o,stroke:r,strokeDashoffset:l,remainingTime:d,elapsedTime:g,size:u,strokeWidth:h}=_e(t);return T.createElement("div",{style:ge(u)},T.createElement("svg",{viewBox:`0 0 ${u} ${u}`,width:u,height:u,xmlns:"http://www.w3.org/2000/svg"},T.createElement("path",{d:i,fill:"none",stroke:n??"#d9d9d9",strokeWidth:a??h}),T.createElement("path",{d:i,fill:"none",stroke:r,strokeLinecap:c??"round",strokeWidth:h,strokeDasharray:o,strokeDashoffset:l})),typeof s=="function"&&T.createElement("div",{style:fe},s({remainingTime:d,elapsedTime:g,color:r})))};Z.displayName="CountdownCircleTimer";const je="_module_container_14pez_5",ve="_left_side_14pez_11",we="_timer_14pez_17",be="_play_14pez_23",ke="_calories_14pez_30",Ee="_calories_amount_14pez_36",Pe="_right_side_14pez_40",Te="_gif_14pez_47",Ne="_exercise_descr_14pez_53",Ce="_exercise_div_14pez_59",Se="_type_14pez_70",Ie="_type_descr_14pez_76",x={module_container:je,left_side:ve,timer:we,play:be,calories:ke,calories_amount:Ee,right_side:Pe,gif:Te,exercise_descr:Ne,exercise_div:Ce,type:Se,type_descr:Ie},ze=({exercise:t})=>{const[s,c]=p.useState(0),[n,a]=p.useState(0),[i,o]=p.useState(!1);p.useEffect(()=>{let d;return i?d=setInterval(()=>{c(g=>{const u=g+1;return console.log("duration",u),u===180&&(clearInterval(d),o(!1)),u})},1e3):clearInterval(d),()=>{clearInterval(d)}},[i,o]),p.useEffect(()=>{const d=(s/60*t.burnedCalories/3).toFixed();a(d)},[s]);const r=()=>{o(d=>!d)},l=d=>d.charAt(0).toUpperCase()+d.slice(1);return e.jsxs("div",{className:x.module_container,children:[e.jsxs("div",{className:x.left_side,children:[e.jsx("img",{className:x.gif,src:t.gifUrl,alt:"Exercise technique"}),e.jsxs("div",{className:x.timer,children:[e.jsx(Z,{isPlaying:i,strokeWidth:4,duration:180,size:124,isGrowing:!0,rotation:"counterclockwise",colors:["#E6533C"],trailColor:["#323232"],children:({remainingTime:d})=>{const g=Math.floor(d/60),u=d%60;return`${String(g).padStart(2,"0")}:${String(u).padStart(2,"0")}`}}),!i&&e.jsx("svg",{className:x.play,onClick:r,children:e.jsx("use",{href:q+"#icon-play"})}),i&&e.jsx("svg",{className:x.play,onClick:r,children:e.jsx("use",{href:q+"#icon-pause-square"})}),e.jsxs("p",{className:x.calories,children:["Burned calories: ",e.jsx("span",{className:x.calories_amount,children:n})]})]})]}),e.jsxs("div",{className:x.right_side,children:[e.jsxs("div",{className:x.exercise_descr,children:[e.jsxs("div",{className:x.exercise_div,children:[e.jsx("p",{className:x.type,children:"Name"}),e.jsx("p",{className:x.type_descr,children:l(t.name)})]}),e.jsxs("div",{className:x.exercise_div,children:[e.jsx("p",{className:x.type,children:"Target"}),e.jsx("p",{className:x.type_descr,children:l(t.target)})]}),e.jsxs("div",{className:x.exercise_div,children:[e.jsx("p",{className:x.type,children:"Body Part"}),e.jsx("p",{className:x.type_descr,children:l(t.bodyPart)})]}),e.jsxs("div",{className:x.exercise_div,children:[e.jsx("p",{className:x.type,children:"Equipment"}),e.jsx("p",{className:x.type_descr,children:l(t.equipment)})]})]}),e.jsx(V,{btnType:"button",text:"Add to diary"})]})]})},Re="_container_1kxge_1",Le="_pic_1kxge_10",$e="_welldone_1kxge_14",We="_amount_container_1kxge_20",qe="_text_1kxge_27",Me="_amount_1kxge_20",Be="_links_1kxge_37",Fe="_link_1kxge_37",Oe="_svg_1kxge_51",j={container:Re,pic:Le,welldone:$e,amount_container:We,text:qe,amount:Me,links:Be,link:Fe,svg:Oe},Ae="/power-pulse-front-end-react/assets/thumb_up-47cb592a.png",Ue=()=>e.jsxs("div",{className:j.container,children:[e.jsx("img",{className:j.pic,src:Ae,alt:"Well done"}),e.jsx("p",{className:j.welldone,children:"Well done"}),e.jsxs("div",{className:j.amount_container,children:[e.jsxs("p",{className:j.text,children:["Your time: ",e.jsx("span",{className:j.amount,children:"0"})]}),e.jsxs("p",{className:j.text,children:["Burned calories: ",e.jsx("span",{className:j.amount,children:"0"})]})]}),e.jsxs("div",{className:j.links,children:[e.jsx(V,{btnType:"button",text:"Next exercise"}),e.jsxs(ie,{to:"/",className:j.link,children:["To the diary",e.jsx("svg",{className:j.svg,children:e.jsx("use",{href:q+"#icon-arrow-modal"})})]})]})]}),F=y.ul`
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
`,De=y.li`
  position: relative;
  cursor: pointer;
`,Ge=y.img`
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
`,Ye=y.div`
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
`,He=y.h3`
  font-size: 20px;
  line-height: 1.2;

  color: var(--white-color);

  @media screen and (min-width: 375px) {
    font-size: 24px;
    line-height: 1.33;
  }
`,Ve=y.p`
  font-size: 12px;
  line-height: 1.5;

  color: rgba(239, 237, 232, 0.4);
`,Je="/power-pulse-front-end-react/assets/0-default-fa91a1ec.jpg",I=({exercisesItem:t,handleFilterClick:s,handleSetExName:c})=>{const{name:n,filter:a,imgURL:i}=t,o=l=>{s("Waist"),c(l)},r=l=>l.slice(0,1).toUpperCase()+l.slice(1);return e.jsxs(De,{onClick:()=>o(n),children:[e.jsx(Ge,{src:i||Je,alt:n}),e.jsxs(Ye,{children:[e.jsx(He,{children:r(n)}),e.jsx(Ve,{children:a})]})]})};I.propTypes={exercisesItem:C.PropTypes.object};const Ke="/power-pulse-front-end-react/assets/sprite-2fdf8fa9.svg",O=y.div`
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
`,Qe=y.li`
  margin-top: 32px;
`,z=({itemsPerPage:t,totalItems:s,currentPage:c,onPageChange:n})=>{const a=Math.ceil(s/t),i=r=>{r>=1&&r<=a&&n(r)},o=()=>{const r=[];for(let l=1;l<=a;l++)r.push(e.jsx(Qe,{className:`page-item ${l===c?"active":""}`,children:e.jsxs("button",{className:"page-link",onClick:()=>i(l),children:[l,l===c&&e.jsx("svg",{children:e.jsx("use",{href:`${Ke}#pagination-btn`})})]})},l));return r};return e.jsx("nav",{"aria-label":"Pagination",children:e.jsx("ul",{className:"pagination",children:o()})})};z.propTypes={itemsPerPage:k.number.isRequired,totalItems:k.number.isRequired,currentPage:k.number.isRequired,onPageChange:k.func.isRequired};const ee=({handleFilterClick:t,handleSetExName:s})=>{const c=S();p.useEffect(()=>{c(M())},[c]);const n=N(B),[a,i]=p.useState(1);console.log(n);const o=()=>{const m=window.innerWidth;return m>=768&&m<=1439?9:10},[r,l]=p.useState(o),d=()=>{l(o())};p.useEffect(()=>(window.addEventListener("resize",d),d(),()=>{window.removeEventListener("resize",d)}),[]);const g=m=>{i(m)};console.log();const u=a*r,h=u-r,f=n.bodyParts.slice(h,u);return e.jsxs(O,{children:[e.jsx(F,{children:f.map(m=>e.jsx(I,{exercisesItem:m,handleFilterClick:t,handleSetExName:s},m._id))}),r<n.length&&e.jsx(z,{itemsPerPage:r,totalItems:n.length,currentPage:a,onPageChange:g})]})};ee.propTypes={bodyParts:k.array};const Xe=y.div`
  padding-left: 20px;
  padding-right: 20px;
  margin-top: 10px;

  @media screen and (min-width: 1440px) {
    padding-left: 96px;
    width: 1440px;
    margin-left: auto;
    margin-right: auto;
  }
`,Ze=y.li`
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
  }
`,H=y.h2`
  color: #efede8;
  font-size: 24px;
  font-weight: 700;
  line-height: 1.16;
  margin-bottom: 20px;
`,te=({handleFilterClick:t,handleSetExName:s})=>{const c=S();p.useEffect(()=>{c(M())},[c]);const n=N(B),[a,i]=p.useState(1),o=()=>{const m=window.innerWidth;return m>=768&&m<=1439?9:10},[r,l]=p.useState(o),d=()=>{l(o())};p.useEffect(()=>(window.addEventListener("resize",d),d(),()=>{window.removeEventListener("resize",d)}),[]);const g=m=>{i(m)},u=a*r,h=u-r,f=n.muscles.slice(h,u);return e.jsxs(O,{children:[e.jsx(F,{children:f.map(m=>e.jsx(I,{exercisesItem:m,handleFilterClick:t,handleSetExName:s},m._id))}),r<n.muscles.length&&e.jsx(z,{itemsPerPage:r,totalItems:n.muscles.length,currentPage:a,onPageChange:g})]})};te.propTypes={exercises:k.array};const se=({handleFilterClick:t,handleSetExName:s})=>{const c=S();p.useEffect(()=>{c(M())},[c]);const n=N(B),[a,i]=p.useState(1),o=()=>{const m=window.innerWidth;return m>=768&&m<=1439?9:(m<375||m>=1440,10)},[r,l]=p.useState(o),d=()=>{l(o())};p.useEffect(()=>(window.addEventListener("resize",d),d(),()=>{window.removeEventListener("resize",d)}),[]);const g=m=>{i(m)},u=a*r,h=u-r,f=n.equipment.slice(h,u);return e.jsxs(O,{children:[e.jsx(F,{children:f.map(m=>e.jsx(I,{exercisesItem:m,handleFilterClick:t,handleSetExName:s},m._id))}),r<n.equipment.length&&e.jsx(z,{itemsPerPage:r,totalItems:n.equipment.length,currentPage:a,onPageChange:g})]})};se.propTypes={equipment:k.array};const et=y.ul`
  display: flex;
  gap: 28px;
  margin-bottom: 48px;
  @media screen and (min-width: 1440px) {
    padding-right: 96px;
  }
`,$=y.li`
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
`,W=y.button`
  color: rgba(239, 237, 232, 0.4);
  font-size: 14px;
  font-weight: 400;

  background-color: var(--black-color);

  &.active {
    color: #efede8;
  }
`,ne=({activeFilter:t,handleFilterClick:s})=>e.jsxs(et,{children:[e.jsx($,{className:t==="Body parts"?"active":"",children:e.jsx(W,{type:"button",onClick:()=>s("Body parts"),className:t==="Body parts"?"active":"",children:"Body parts"})}),e.jsx($,{className:t==="Muscules"?"active":"",children:e.jsx(W,{type:"button",onClick:()=>s("Muscules"),className:t==="Muscules"?"active":"",children:"Muscules"})}),e.jsx($,{className:t==="Equipment"?"active":"",children:e.jsx(W,{type:"button",onClick:()=>s("Equipment"),className:t==="Equipment"?"active":"",children:"Equipment"})})]});ne.propTypes={activeFilter:C.PropTypes.string,handleFilterClick:C.PropTypes.func};const tt=()=>{const[t,s]=p.useState("Body part"),[c,n]=p.useState(""),a=r=>{n(r)},i=r=>{s(r)},o=r=>r.slice(0,1).toUpperCase()+r.slice(1);return e.jsxs(Xe,{children:[e.jsxs(Ze,{children:[e.jsx(H,{children:"Exercises"}),e.jsx(H,{children:o(c)}),e.jsx(ne,{activeFilter:t,handleFilterClick:i})]}),t==="Body parts"&&e.jsx(ee,{handleFilterClick:i,handleSetExName:a}),t==="Muscules"&&e.jsx(te,{handleFilterClick:i,handleSetExName:a}),t==="Equipment"&&e.jsx(se,{handleFilterClick:i,handleSetExName:a})]})},it=()=>{const t=S();le();const[s,c]=p.useState(!1),[n,a]=p.useState(!1);p.useEffect(()=>{t(ae())},[t]);const i=()=>{c(l=>!l)},o=()=>{a(l=>!l)},r={_id:"64f2458d6f67bc34bae4f813",bodyPart:"upper arms",equipment:"barbell",gifUrl:"https://ftp.goit.study/img/power-pulse/gifs/0038.gif",name:"barbell drag curl",target:"biceps",burnedCalories:84,time:3};return e.jsxs("div",{children:["Exercises",e.jsx(tt,{}),e.jsx("button",{type:"button",onClick:i,children:"TEST Open exercise"}),s&&e.jsx(U,{onClose:i,children:e.jsx(ze,{exercise:r})}),e.jsx("button",{type:"button",onClick:o,children:"TEST Open exercise"}),n&&e.jsx(U,{onClose:o,children:e.jsx(Ue,{exercise:r})})]})};export{it as default};
