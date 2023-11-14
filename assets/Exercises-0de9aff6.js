import{h as z,g as ee,x as N,r as u,j as t,L as te,i as f,u as A,k as O}from"./index-187677b2.js";import{B as U,M as W}from"./ButtonModal-8a78edc4.js";import{i as $}from"./icons-0f6731c0.js";const se=e=>e.exercises.loading,D=e=>e.exercises,ne=()=>{const e=z(se),s=z(D);return{loading:e,exercises:s}};var G={exports:{}},re="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",ie=re,ae=ie;function Y(){}function H(){}H.resetWarningCache=Y;var oe=function(){function e(n,o,r,i,a,d){if(d!==ae){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}e.isRequired=e;function s(){return e}var c={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:s,element:e,elementType:e,instanceOf:s,node:e,objectOf:s,oneOf:s,oneOfType:s,shape:s,exact:s,checkPropTypes:H,resetWarningCache:Y};return c.PropTypes=c,c};G.exports=oe();var P=G.exports;const T=ee(P);var M=typeof window>"u"?u.useEffect:u.useLayoutEffect,ce=({isPlaying:e,duration:s,startAt:c=0,updateInterval:n=0,onComplete:o,onUpdate:r})=>{let[i,a]=u.useState(c),d=u.useRef(0),l=u.useRef(c),x=u.useRef(c*-1e3),p=u.useRef(null),h=u.useRef(null),_=u.useRef(null),g=b=>{let y=b/1e3;if(h.current===null){h.current=y,p.current=requestAnimationFrame(g);return}let v=y-h.current,w=d.current+v;h.current=y,d.current=w;let C=l.current+(n===0?w:(w/n|0)*n),S=l.current+w,L=typeof s=="number"&&S>=s;a(L?s:C),L||(p.current=requestAnimationFrame(g))},E=()=>{p.current&&cancelAnimationFrame(p.current),_.current&&clearTimeout(_.current),h.current=null},k=u.useCallback(b=>{E(),d.current=0;let y=typeof b=="number"?b:c;l.current=y,a(y),e&&(p.current=requestAnimationFrame(g))},[e,c]);return M(()=>{if(r==null||r(i),s&&i>=s){x.current+=s*1e3;let{shouldRepeat:b=!1,delay:y=0,newStartAt:v}=(o==null?void 0:o(x.current/1e3))||{};b&&(_.current=setTimeout(()=>k(v),y*1e3))}},[i,s]),M(()=>(e&&(p.current=requestAnimationFrame(g)),E),[e,s,n]),{elapsedTime:i,reset:k}},le=(e,s,c)=>{let n=e/2,o=s/2,r=n-o,i=2*r,a=c==="clockwise"?"1,0":"0,1",d=2*Math.PI*r;return{path:`m ${n},${o} a ${r},${r} 0 ${a} 0,${i} a ${r},${r} 0 ${a} 0,-${i}`,pathLength:d}},q=(e,s)=>e===0||e===s?0:typeof s=="number"?e-s:0,de=e=>({position:"relative",width:e,height:e}),pe={display:"flex",justifyContent:"center",alignItems:"center",position:"absolute",left:0,top:0,width:"100%",height:"100%"},V=(e,s,c,n,o)=>{if(n===0)return s;let r=(o?n-e:e)/n;return s+c*r},B=e=>{var s,c;return(c=(s=e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,(n,o,r,i)=>`#${o}${o}${r}${r}${i}${i}`).substring(1).match(/.{2}/g))==null?void 0:s.map(n=>parseInt(n,16)))!=null?c:[]},ue=(e,s)=>{var c;let{colors:n,colorsTime:o,isSmoothColorTransition:r=!0}=e;if(typeof n=="string")return n;let i=(c=o==null?void 0:o.findIndex((h,_)=>h>=s&&s>=o[_+1]))!=null?c:-1;if(!o||i===-1)return n[0];if(!r)return n[i];let a=o[i]-s,d=o[i]-o[i+1],l=B(n[i]),x=B(n[i+1]),p=!!e.isGrowing;return`rgb(${l.map((h,_)=>V(a,h,x[_]-h,d,p)|0).join(",")})`},me=e=>{let{duration:s,initialRemainingTime:c,updateInterval:n,size:o=180,strokeWidth:r=12,trailStrokeWidth:i,isPlaying:a=!1,isGrowing:d=!1,rotation:l="clockwise",onComplete:x,onUpdate:p}=e,h=u.useRef(),_=Math.max(r,i??0),{path:g,pathLength:E}=le(o,_,l),{elapsedTime:k}=ce({isPlaying:a,duration:s,startAt:q(s,c),updateInterval:n,onUpdate:typeof p=="function"?y=>{let v=Math.ceil(s-y);v!==h.current&&(h.current=v,p(v))}:void 0,onComplete:typeof x=="function"?y=>{var v;let{shouldRepeat:w,delay:C,newInitialRemainingTime:S}=(v=x(y))!=null?v:{};if(w)return{shouldRepeat:w,delay:C,newStartAt:q(s,S)}}:void 0}),b=s-k;return{elapsedTime:k,path:g,pathLength:E,remainingTime:Math.ceil(b),rotation:l,size:o,stroke:ue(e,b),strokeDashoffset:V(k,0,E,s,d),strokeWidth:r}},J=e=>{let{children:s,strokeLinecap:c,trailColor:n,trailStrokeWidth:o}=e,{path:r,pathLength:i,stroke:a,strokeDashoffset:d,remainingTime:l,elapsedTime:x,size:p,strokeWidth:h}=me(e);return N.createElement("div",{style:de(p)},N.createElement("svg",{viewBox:`0 0 ${p} ${p}`,width:p,height:p,xmlns:"http://www.w3.org/2000/svg"},N.createElement("path",{d:r,fill:"none",stroke:n??"#d9d9d9",strokeWidth:o??h}),N.createElement("path",{d:r,fill:"none",stroke:a,strokeLinecap:c??"round",strokeWidth:h,strokeDasharray:i,strokeDashoffset:d})),typeof s=="function"&&N.createElement("div",{style:pe},s({remainingTime:l,elapsedTime:x,color:a})))};J.displayName="CountdownCircleTimer";const he="_module_container_14pez_5",xe="_left_side_14pez_11",ge="_timer_14pez_17",fe="_play_14pez_23",ye="_calories_14pez_30",_e="_calories_amount_14pez_36",je="_right_side_14pez_40",ve="_gif_14pez_47",be="_exercise_descr_14pez_53",we="_exercise_div_14pez_59",ke="_type_14pez_70",Ee="_type_descr_14pez_76",m={module_container:he,left_side:xe,timer:ge,play:fe,calories:ye,calories_amount:_e,right_side:je,gif:ve,exercise_descr:be,exercise_div:we,type:ke,type_descr:Ee},Ne=({exercise:e})=>{const[s,c]=u.useState(0),[n,o]=u.useState(0),[r,i]=u.useState(!1);u.useEffect(()=>{let l;return r?l=setInterval(()=>{c(x=>{const p=x+1;return console.log("duration",p),p===180&&(clearInterval(l),i(!1)),p})},1e3):clearInterval(l),()=>{clearInterval(l)}},[r,i]),u.useEffect(()=>{const l=(s/60*e.burnedCalories/3).toFixed();o(l)},[s]);const a=()=>{i(l=>!l)},d=l=>l.charAt(0).toUpperCase()+l.slice(1);return t.jsxs("div",{className:m.module_container,children:[t.jsxs("div",{className:m.left_side,children:[t.jsx("img",{className:m.gif,src:e.gifUrl,alt:"Exercise technique"}),t.jsxs("div",{className:m.timer,children:[t.jsx(J,{isPlaying:r,strokeWidth:4,duration:180,size:124,isGrowing:!0,rotation:"counterclockwise",colors:["#E6533C"],trailColor:["#323232"],children:({remainingTime:l})=>{const x=Math.floor(l/60),p=l%60;return`${String(x).padStart(2,"0")}:${String(p).padStart(2,"0")}`}}),!r&&t.jsx("svg",{className:m.play,onClick:a,children:t.jsx("use",{href:$+"#icon-play"})}),r&&t.jsx("svg",{className:m.play,onClick:a,children:t.jsx("use",{href:$+"#icon-pause-square"})}),t.jsxs("p",{className:m.calories,children:["Burned calories: ",t.jsx("span",{className:m.calories_amount,children:n})]})]})]}),t.jsxs("div",{className:m.right_side,children:[t.jsxs("div",{className:m.exercise_descr,children:[t.jsxs("div",{className:m.exercise_div,children:[t.jsx("p",{className:m.type,children:"Name"}),t.jsx("p",{className:m.type_descr,children:d(e.name)})]}),t.jsxs("div",{className:m.exercise_div,children:[t.jsx("p",{className:m.type,children:"Target"}),t.jsx("p",{className:m.type_descr,children:d(e.target)})]}),t.jsxs("div",{className:m.exercise_div,children:[t.jsx("p",{className:m.type,children:"Body Part"}),t.jsx("p",{className:m.type_descr,children:d(e.bodyPart)})]}),t.jsxs("div",{className:m.exercise_div,children:[t.jsx("p",{className:m.type,children:"Equipment"}),t.jsx("p",{className:m.type_descr,children:d(e.equipment)})]})]}),t.jsx(U,{btnType:"button",text:"Add to diary"})]})]})},Te="_container_1kxge_1",Pe="_pic_1kxge_10",Ce="_welldone_1kxge_14",Se="_amount_container_1kxge_20",Ie="_text_1kxge_27",Re="_amount_1kxge_20",ze="_links_1kxge_37",$e="_link_1kxge_37",Le="_svg_1kxge_51",j={container:Te,pic:Pe,welldone:Ce,amount_container:Se,text:Ie,amount:Re,links:ze,link:$e,svg:Le},We="/power-pulse-front-end-react/assets/thumb_up-47cb592a.png",Me=()=>t.jsxs("div",{className:j.container,children:[t.jsx("img",{className:j.pic,src:We,alt:"Well done"}),t.jsx("p",{className:j.welldone,children:"Well done"}),t.jsxs("div",{className:j.amount_container,children:[t.jsxs("p",{className:j.text,children:["Your time: ",t.jsx("span",{className:j.amount,children:"0"})]}),t.jsxs("p",{className:j.text,children:["Burned calories: ",t.jsx("span",{className:j.amount,children:"0"})]})]}),t.jsxs("div",{className:j.links,children:[t.jsx(U,{btnType:"button",text:"Next exercise"}),t.jsxs(te,{to:"/",className:j.link,children:["To the diary",t.jsx("svg",{className:j.svg,children:t.jsx("use",{href:$+"#icon-arrow-modal"})})]})]})]}),qe=f.ul`
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
`,Be=f.li`
  position: relative;
  cursor: pointer;
`,Fe=f.img`
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
`,Ae=f.div`
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
`,Oe=f.h3`
  font-size: 20px;
  line-height: 1.2;

  color: var(--white-color);

  @media screen and (min-width: 375px) {
    font-size: 24px;
    line-height: 1.33;
  }
`,Ue=f.p`
  font-size: 12px;
  line-height: 1.5;

  color: rgba(239, 237, 232, 0.4);
`,De="/power-pulse-front-end-react/assets/0-default-fa91a1ec.jpg",K=({exercisesItem:e,handleFilterClick:s,handleSetExName:c})=>{const{name:n,filter:o,gifURL:r}=e,i=d=>{s("Waist"),c(d)},a=d=>d.slice(0,1).toUpperCase()+d.slice(1);return t.jsxs(Be,{onClick:()=>i(n),children:[t.jsx(Fe,{src:r||De,alt:n}),t.jsxs(Ae,{children:[t.jsx(Oe,{children:a(n)}),t.jsx(Ue,{children:o})]})]})};K.propTypes={exercisesItem:P.PropTypes.object};const Ge=f.div`
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
`,Ye=f.li`
  margin-top: 32px;
`,Q=({itemsPerPage:e,totalItems:s,currentPage:c,onPageChange:n})=>{const o=Math.ceil(s/e),r=a=>{a>=1&&a<=o&&n(a)},i=()=>{const a=[];for(let d=1;d<=o;d++)a.push(t.jsx(Ye,{className:`page-item ${d===c?"active":""}`,children:t.jsx("button",{className:"page-link",onClick:()=>r(d),children:d})},d));return a};return t.jsx("nav",{"aria-label":"Pagination",children:t.jsx("ul",{className:"pagination",children:i()})})};Q.propTypes={itemsPerPage:T.number.isRequired,totalItems:T.number.isRequired,currentPage:T.number.isRequired,onPageChange:T.func.isRequired};const X=({handleFilterClick:e,handleSetExName:s})=>{const c=A();u.useEffect(()=>{c(O())},[c]);const n=z(D),[o,r]=u.useState(1),i=()=>{const g=window.innerWidth;return g>=768&&g<=1439?9:10},[a,d]=u.useState(i),l=()=>{d(i())};u.useEffect(()=>(window.addEventListener("resize",l),l(),()=>{window.removeEventListener("resize",l)}),[]);const x=g=>{r(g)},p=o*a,h=p-a,_=n.bodyPart.slice(h,p);return t.jsxs(Ge,{children:[t.jsx(qe,{children:_.map(g=>t.jsx(K,{exercisesItem:g,handleFilterClick:e,handleSetExName:s},g._id))}),a<n.bodyPart.length&&t.jsx(Q,{itemsPerPage:a,totalItems:n.bodyPart.length,currentPage:o,onPageChange:x})]})};X.propTypes={exercises:T.array};const He=f.div`
  padding-left: 20px;
  padding-right: 20px;
  margin-top: 10px;

  @media screen and (min-width: 1440px) {
    padding-left: 96px;
    width: 1440px;
    margin-left: auto;
    margin-right: auto;
  }
`,Ve=f.li`
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
  }
`,F=f.h2`
  color: #efede8;
  font-size: 24px;
  font-weight: 700;
  line-height: 1.16;
  margin-bottom: 20px;
`,Je=f.ul`
  display: flex;
  gap: 28px;
  margin-bottom: 48px;
  @media screen and (min-width: 1440px) {
    padding-right: 96px;
  }
`,I=f.li`
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
`,R=f.button`
  color: rgba(239, 237, 232, 0.4);
  font-size: 14px;
  font-weight: 400;

  background-color: var(--black-color);

  &.active {
    color: #efede8;
  }
`,Z=({activeFilter:e,handleFilterClick:s})=>t.jsxs(Je,{children:[t.jsx(I,{className:e==="Body parts"?"active":"",children:t.jsx(R,{type:"button",onClick:()=>s("Body parts"),className:e==="Body parts"?"active":"",children:"Body parts"})}),t.jsx(I,{className:e==="Muscules"?"active":"",children:t.jsx(R,{type:"button",onClick:()=>s("Muscules"),className:e==="Muscules"?"active":"",children:"Muscules"})}),t.jsx(I,{className:e==="Equipment"?"active":"",children:t.jsx(R,{type:"button",onClick:()=>s("Equipment"),className:e==="Equipment"?"active":"",children:"Equipment"})})]});Z.propTypes={activeFilter:P.PropTypes.string,handleFilterClick:P.PropTypes.func};const Ke=()=>{const[e,s]=u.useState("Body part"),[c,n]=u.useState(""),o=a=>{n(a)},r=a=>{s(a)},i=a=>a.slice(0,1).toUpperCase()+a.slice(1);return t.jsxs(He,{children:[t.jsxs(Ve,{children:[t.jsx(F,{children:"Exercises"}),t.jsx(F,{children:i(c)}),t.jsx(Z,{activeFilter:e,handleFilterClick:r})]}),e==="Body parts"&&t.jsx(X,{handleFilterClick:r,handleSetExName:o})]})},et=()=>{const e=A(),{exercises:s}=ne();console.log(s);const[c,n]=u.useState(!1),[o,r]=u.useState(!1);u.useEffect(()=>{e(O())},[e]);const i=()=>{n(l=>!l)},a=()=>{r(l=>!l)},d={_id:"64f2458d6f67bc34bae4f813",bodyPart:"upper arms",equipment:"barbell",gifUrl:"https://ftp.goit.study/img/power-pulse/gifs/0038.gif",name:"barbell drag curl",target:"biceps",burnedCalories:84,time:3};return t.jsxs("div",{children:["Exercises",t.jsx(Ke,{}),t.jsx("button",{type:"button",onClick:i,children:"TEST Open exercise"}),c&&t.jsx(W,{onClose:i,children:t.jsx(Ne,{exercise:d})}),t.jsx("button",{type:"button",onClick:a,children:"TEST Open exercise"}),o&&t.jsx(W,{onClose:a,children:t.jsx(Me,{exercise:d})})]})};export{et as default};
