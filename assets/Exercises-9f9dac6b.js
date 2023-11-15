import{u as S,g as de,x as N,r as d,a as T,j as e,k as pe,L as ue,l as C,m as xe}from"./index-72dd566f.js";import{B as X,M as O}from"./ButtonModal-0299e137.js";import{i as A}from"./icons-bd889691.js";import{s as m}from"./styled-components.browser.esm-5debbd47.js";import"./emotion-unitless.esm-f0048d07.js";const he=t=>t.exercises.loading,me=t=>t.exercises,D=t=>t.exercises.bodyParts,I=()=>{const t=S(he),s=S(me),i=S(D);return{loading:t,exercises:s,bodyParts:i}};var Z={exports:{}},ge="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",fe=ge,ye=fe;function ee(){}function te(){}te.resetWarningCache=ee;var we=function(){function t(n,r,c,a,o,l){if(l!==ye){var p=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw p.name="Invariant Violation",p}}t.isRequired=t;function s(){return t}var i={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:s,element:t,elementType:t,instanceOf:s,node:t,objectOf:s,oneOf:s,oneOfType:s,shape:s,exact:s,checkPropTypes:te,resetWarningCache:ee};return i.PropTypes=i,i};Z.exports=we();var W=Z.exports;const P=de(W);var Y=typeof window>"u"?d.useEffect:d.useLayoutEffect,be=({isPlaying:t,duration:s,startAt:i=0,updateInterval:n=0,onComplete:r,onUpdate:c})=>{let[a,o]=d.useState(i),l=d.useRef(0),p=d.useRef(i),f=d.useRef(i*-1e3),u=d.useRef(null),h=d.useRef(null),g=d.useRef(null),x=j=>{let b=j/1e3;if(h.current===null){h.current=b,u.current=requestAnimationFrame(x);return}let _=b-h.current,E=l.current+_;h.current=b,l.current=E;let M=p.current+(n===0?E:(E/n|0)*n),q=p.current+E,V=typeof s=="number"&&q>=s;o(V?s:M),V||(u.current=requestAnimationFrame(x))},k=()=>{u.current&&cancelAnimationFrame(u.current),g.current&&clearTimeout(g.current),h.current=null},w=d.useCallback(j=>{k(),l.current=0;let b=typeof j=="number"?j:i;p.current=b,o(b),t&&(u.current=requestAnimationFrame(x))},[t,i]);return Y(()=>{if(c==null||c(a),s&&a>=s){f.current+=s*1e3;let{shouldRepeat:j=!1,delay:b=0,newStartAt:_}=(r==null?void 0:r(f.current/1e3))||{};j&&(g.current=setTimeout(()=>w(_),b*1e3))}},[a,s]),Y(()=>(t&&(u.current=requestAnimationFrame(x)),k),[t,s,n]),{elapsedTime:a,reset:w}},je=(t,s,i)=>{let n=t/2,r=s/2,c=n-r,a=2*c,o=i==="clockwise"?"1,0":"0,1",l=2*Math.PI*c;return{path:`m ${n},${r} a ${c},${c} 0 ${o} 0,${a} a ${c},${c} 0 ${o} 0,-${a}`,pathLength:l}},H=(t,s)=>t===0||t===s?0:typeof s=="number"?t-s:0,ve=t=>({position:"relative",width:t,height:t}),_e={display:"flex",justifyContent:"center",alignItems:"center",position:"absolute",left:0,top:0,width:"100%",height:"100%"},se=(t,s,i,n,r)=>{if(n===0)return s;let c=(r?n-t:t)/n;return s+i*c},J=t=>{var s,i;return(i=(s=t.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,(n,r,c,a)=>`#${r}${r}${c}${c}${a}${a}`).substring(1).match(/.{2}/g))==null?void 0:s.map(n=>parseInt(n,16)))!=null?i:[]},ke=(t,s)=>{var i;let{colors:n,colorsTime:r,isSmoothColorTransition:c=!0}=t;if(typeof n=="string")return n;let a=(i=r==null?void 0:r.findIndex((h,g)=>h>=s&&s>=r[g+1]))!=null?i:-1;if(!r||a===-1)return n[0];if(!c)return n[a];let o=r[a]-s,l=r[a]-r[a+1],p=J(n[a]),f=J(n[a+1]),u=!!t.isGrowing;return`rgb(${p.map((h,g)=>se(o,h,f[g]-h,l,u)|0).join(",")})`},Ee=t=>{let{duration:s,initialRemainingTime:i,updateInterval:n,size:r=180,strokeWidth:c=12,trailStrokeWidth:a,isPlaying:o=!1,isGrowing:l=!1,rotation:p="clockwise",onComplete:f,onUpdate:u}=t,h=d.useRef(),g=Math.max(c,a??0),{path:x,pathLength:k}=je(r,g,p),{elapsedTime:w}=be({isPlaying:o,duration:s,startAt:H(s,i),updateInterval:n,onUpdate:typeof u=="function"?b=>{let _=Math.ceil(s-b);_!==h.current&&(h.current=_,u(_))}:void 0,onComplete:typeof f=="function"?b=>{var _;let{shouldRepeat:E,delay:M,newInitialRemainingTime:q}=(_=f(b))!=null?_:{};if(E)return{shouldRepeat:E,delay:M,newStartAt:H(s,q)}}:void 0}),j=s-w;return{elapsedTime:w,path:x,pathLength:k,remainingTime:Math.ceil(j),rotation:p,size:r,stroke:ke(t,j),strokeDashoffset:se(w,0,k,s,l),strokeWidth:c}},ne=t=>{let{children:s,strokeLinecap:i,trailColor:n,trailStrokeWidth:r}=t,{path:c,pathLength:a,stroke:o,strokeDashoffset:l,remainingTime:p,elapsedTime:f,size:u,strokeWidth:h}=Ee(t);return N.createElement("div",{style:ve(u)},N.createElement("svg",{viewBox:`0 0 ${u} ${u}`,width:u,height:u,xmlns:"http://www.w3.org/2000/svg"},N.createElement("path",{d:c,fill:"none",stroke:n??"#d9d9d9",strokeWidth:r??h}),N.createElement("path",{d:c,fill:"none",stroke:o,strokeLinecap:i??"round",strokeWidth:h,strokeDasharray:a,strokeDashoffset:l})),typeof s=="function"&&N.createElement("div",{style:_e},s({remainingTime:p,elapsedTime:f,color:o})))};ne.displayName="CountdownCircleTimer";const Pe="_module_container_14pez_5",Te="_left_side_14pez_11",Ce="_timer_14pez_17",Ne="_play_14pez_23",Se="_calories_14pez_30",Ie="_calories_amount_14pez_36",Le="_right_side_14pez_40",ze="_gif_14pez_47",We="_exercise_descr_14pez_53",Re="_exercise_div_14pez_59",$e="_type_14pez_70",Me="_type_descr_14pez_76",y={module_container:Pe,left_side:Te,timer:Ce,play:Ne,calories:Se,calories_amount:Ie,right_side:Le,gif:ze,exercise_descr:We,exercise_div:Re,type:$e,type_descr:Me},ie=({exercise:t,toggleExerciseModal:s,toggleSuccessModal:i,setExercise:n})=>{const[r,c]=d.useState(0),[a,o]=d.useState(0),[l,p]=d.useState(!1),f=T();d.useEffect(()=>{let w;return l?w=setInterval(()=>{c(j=>{const b=j+1;return console.log("duration",b),b===180&&(clearInterval(w),p(!1)),b})},1e3):clearInterval(w),()=>{clearInterval(w)}},[l,p]),d.useEffect(()=>{const w=(r/60*t.burnedCalories/3).toFixed();o(w)},[r,t.burnedCalories]);const u=()=>{p(w=>!w)},h=w=>w.charAt(0).toUpperCase()+w.slice(1),g=new Date().toLocaleDateString("en-GB",{day:"2-digit",month:"2-digit",year:"numeric"}).replace(/\//g,"-"),x=Math.floor(r/60),k=()=>{f(pe({date:g,credentials:{doneExercises:[{exercise:t._id,time:x,calories:a}]}})),n({time:x,calories:a}),s(),i()};return e.jsxs("div",{className:y.module_container,children:[e.jsxs("div",{className:y.left_side,children:[e.jsx("img",{className:y.gif,src:t.gifUrl,alt:"Exercise technique"}),e.jsxs("div",{className:y.timer,children:[e.jsx(ne,{isPlaying:l,strokeWidth:4,duration:180,size:124,isGrowing:!0,rotation:"counterclockwise",colors:["#E6533C"],trailColor:["#323232"],children:({remainingTime:w})=>{const j=Math.floor(w/60),b=w%60;return`${String(j).padStart(2,"0")}:${String(b).padStart(2,"0")}`}}),!l&&e.jsx("svg",{className:y.play,onClick:u,children:e.jsx("use",{href:A+"#icon-play"})}),l&&e.jsx("svg",{className:y.play,onClick:u,children:e.jsx("use",{href:A+"#icon-pause-square"})}),e.jsxs("p",{className:y.calories,children:["Burned calories:"," ",e.jsx("span",{className:y.calories_amount,children:a})]})]})]}),e.jsxs("div",{className:y.right_side,children:[e.jsxs("div",{className:y.exercise_descr,children:[e.jsxs("div",{className:y.exercise_div,children:[e.jsx("p",{className:y.type,children:"Name"}),e.jsx("p",{className:y.type_descr,children:h(t.name)})]}),e.jsxs("div",{className:y.exercise_div,children:[e.jsx("p",{className:y.type,children:"Target"}),e.jsx("p",{className:y.type_descr,children:h(t.target)})]}),e.jsxs("div",{className:y.exercise_div,children:[e.jsx("p",{className:y.type,children:"Body Part"}),e.jsx("p",{className:y.type_descr,children:h(t.bodyPart)})]}),e.jsxs("div",{className:y.exercise_div,children:[e.jsx("p",{className:y.type,children:"Equipment"}),e.jsx("p",{className:y.type_descr,children:h(t.equipment)})]})]}),e.jsx(X,{btnType:"button",text:"Add to diary",onClick:k,disabled:x<1})]})]})},qe="_container_1kxge_1",Be="_pic_1kxge_10",Fe="_welldone_1kxge_14",Oe="_amount_container_1kxge_20",Ae="_text_1kxge_27",De="_amount_1kxge_20",Ue="_links_1kxge_37",Ge="_link_1kxge_37",Ve="_svg_1kxge_51",v={container:qe,pic:Be,welldone:Fe,amount_container:Oe,text:Ae,amount:De,links:Ue,link:Ge,svg:Ve},Ye="/power-pulse-front-end-react/assets/thumb_up-47cb592a.png",re=({exercise:t})=>(console.log(t),e.jsxs("div",{className:v.container,children:[e.jsx("img",{className:v.pic,src:Ye,alt:"Well done"}),e.jsx("p",{className:v.welldone,children:"Well done"}),e.jsxs("div",{className:v.amount_container,children:[e.jsxs("p",{className:v.text,children:["Your time: ",e.jsx("span",{className:v.amount,children:t.time})]}),e.jsxs("p",{className:v.text,children:["Burned calories:"," ",e.jsx("span",{className:v.amount,children:t.calories})]})]}),e.jsxs("div",{className:v.links,children:[e.jsx(X,{btnType:"button",text:"Next exercise"}),e.jsxs(ue,{to:"/diary",className:v.link,children:["To the diary",e.jsx("svg",{className:v.svg,children:e.jsx("use",{href:A+"#icon-arrow-modal"})})]})]})]})),U=m.ul`
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
`,Ze="/power-pulse-front-end-react/assets/0-default-fa91a1ec.jpg",R=({exercisesItem:t,handleFilterClick:s,handleSetExName:i})=>{const{name:n,filter:r,imgURL:c}=t,a=l=>{s("Waist"),i(l)},o=l=>l.slice(0,1).toUpperCase()+l.slice(1);return e.jsxs(He,{onClick:()=>a(n),children:[e.jsx(Je,{src:c||Ze,alt:n}),e.jsxs(Ke,{children:[e.jsx(Qe,{children:o(n)}),e.jsx(Xe,{children:r})]})]})};R.propTypes={exercisesItem:W.PropTypes.object};const z="/power-pulse-front-end-react/assets/sprite-2fdf8fa9.svg",G=m.div`
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
`,$=({itemsPerPage:t,totalItems:s,currentPage:i,onPageChange:n})=>{const r=Math.ceil(s/t),c=o=>{o>=1&&o<=r&&n(o)},a=()=>{const o=[];for(let l=1;l<=r;l++)o.push(e.jsx(et,{className:`page-item ${l===i?"active":""}`,children:e.jsxs("button",{className:"page-link",onClick:()=>c(l),children:[l,l===i&&e.jsx("svg",{children:e.jsx("use",{href:`${z}#pagination-btn`})})]})},l));return o};return e.jsx("nav",{"aria-label":"Pagination",children:e.jsx("ul",{className:"pagination",children:a()})})};$.propTypes={itemsPerPage:P.number.isRequired,totalItems:P.number.isRequired,currentPage:P.number.isRequired,onPageChange:P.func.isRequired};const ae=({handleFilterClick:t,handleSetExName:s})=>{const i=T(),{bodyParts:n}=I();console.log(n.bodyParts),d.useEffect(()=>{i(C())},[i]);const[r,c]=d.useState(1),a=()=>{const x=window.innerWidth;return x>=768&&x<=1439?9:10},[o,l]=d.useState(a),p=()=>{l(a())};d.useEffect(()=>(window.addEventListener("resize",p),p(),()=>{window.removeEventListener("resize",p)}),[]);const f=x=>{c(x)};console.log();const u=r*o,h=u-o,g=n.bodyParts.slice(h,u);return e.jsxs(G,{children:[e.jsx(U,{children:g.map(x=>e.jsx(R,{exercisesItem:x,handleFilterClick:t,handleSetExName:s},x._id))}),o<n.bodyParts.length&&e.jsx($,{itemsPerPage:o,totalItems:n.bodyParts.length,currentPage:r,onPageChange:f})]})};ae.propTypes={bodyParts:P.array};const tt=m.div`
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
`,oe=({handleFilterClick:t,handleSetExName:s})=>{const i=T();d.useEffect(()=>{i(C())},[i]);const n=S(D),[r,c]=d.useState(1),a=()=>{const x=window.innerWidth;return x>=768&&x<=1439?9:10},[o,l]=d.useState(a),p=()=>{l(a())};d.useEffect(()=>(window.addEventListener("resize",p),p(),()=>{window.removeEventListener("resize",p)}),[]);const f=x=>{c(x)},u=r*o,h=u-o,g=n.muscles.slice(h,u);return e.jsxs(G,{children:[e.jsx(U,{children:g.map(x=>e.jsx(R,{exercisesItem:x,handleFilterClick:t,handleSetExName:s},x._id))}),o<n.muscles.length&&e.jsx($,{itemsPerPage:o,totalItems:n.muscles.length,currentPage:r,onPageChange:f})]})};oe.propTypes={exercises:P.array};const ce=({handleFilterClick:t,handleSetExName:s})=>{const i=T();d.useEffect(()=>{i(C())},[i]);const n=S(D),[r,c]=d.useState(1),a=()=>{const x=window.innerWidth;return x>=768&&x<=1439?9:(x<375||x>=1440,10)},[o,l]=d.useState(a),p=()=>{l(a())};d.useEffect(()=>(window.addEventListener("resize",p),p(),()=>{window.removeEventListener("resize",p)}),[]);const f=x=>{c(x)},u=r*o,h=u-o,g=n.equipment.slice(h,u);return e.jsxs(G,{children:[e.jsx(U,{children:g.map(x=>e.jsx(R,{exercisesItem:x,handleFilterClick:t,handleSetExName:s},x._id))}),o<n.equipment.length&&e.jsx($,{itemsPerPage:o,totalItems:n.equipment.length,currentPage:r,onPageChange:f})]})};ce.propTypes={equipment:P.array};const nt=m.ul`
  display: flex;
  gap: 28px;
  margin-bottom: 48px;
  @media screen and (min-width: 1440px) {
    padding-right: 96px;
  }
`,B=m.li`
  color:  var(--greyEx);
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
    background-color: var(--orange);
  }

  &.active {
    color: var(--white);
  }
`,F=m.button`
  color:var(--grayEx);
  font-size: 14px;
  font-weight: 400;
  border: none;
  background-color: var(--black);

  &.active {
    color: var(--white);
  }
`,le=({activeFilter:t,handleFilterClick:s})=>e.jsxs(nt,{children:[e.jsx(B,{className:t==="Body parts"?"active":"",children:e.jsx(F,{type:"button",onClick:()=>s("Body parts"),className:t==="Body parts"?"active":"",children:"Body parts"})}),e.jsx(B,{className:t==="Muscules"?"active":"",children:e.jsx(F,{type:"button",onClick:()=>s("Muscules"),className:t==="Muscules"?"active":"",children:"Muscules"})}),e.jsx(B,{className:t==="Equipment"?"active":"",children:e.jsx(F,{type:"button",onClick:()=>s("Equipment"),className:t==="Equipment"?"active":"",children:"Equipment"})})]});le.propTypes={activeFilter:W.PropTypes.string,handleFilterClick:W.PropTypes.func};const it=m.li`
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
`,L={cardLabel:"Workout",btnLabel:"Start",list:{burnedCalories:"Burned calories:",bodyPart:"Body part:",target:"Target:"}},Q=t=>t.slice(0,1).toUpperCase()+t.slice(1),gt=({toggleExerciseModal:t})=>{const s=T();d.useEffect(()=>{s(C())},[s]);const{exercises:i}=I();return console.log(i),e.jsxs(it,{children:[e.jsxs(rt,{children:[e.jsx(at,{children:L.cardLabel}),e.jsxs(ot,{onClick:()=>{t(i)},type:"button",children:[L.btnLabel,e.jsx("span",{children:e.jsx(ct,{children:e.jsx("use",{href:`${z}#icon-arrow-right`})})})]})]}),e.jsxs(lt,{children:[e.jsx(ut,{children:e.jsxs(pt,{width:24,height:24,children:[e.jsx("use",{href:`${z}#icon-run-exercises`}),e.jsx("use",{href:`${z}#icon-running-stick-figure`})]})}),e.jsxs(dt,{children:[Q(i.name)," "]})]}),e.jsx(xt,{children:Object.keys(L.list).map(n=>e.jsxs(ht,{children:[L.list[n],e.jsx(mt,{children:Q(String(i[n]))})]},n))})]})},ft=m.div`
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
`,jt="/power-pulse-front-end-react/assets/Waist1-17196d5b.jpg",vt=({exerciseName:t})=>{const[s,i]=d.useState(""),[n,r]=d.useState(null),c=T(),{bodyParts:a}=I();console.log(a.bodyParts),d.useEffect(()=>{c(C())},[c]);const l=a.bodyParts.concat(a.equipment).concat(a.muscles);console.log(l);const p=l.filter(g=>g.bodyParts||g.muscles||g.equipment===t),f=g=>{r(g)},u=()=>{r(null)},h=()=>{i("well")};return e.jsxs(e.Fragment,{children:[n&&e.jsx(O,{isOpenModalToggle:u,children:s!=="well"?e.jsx(ie,{data:n,closeModal:u,onClick:h}):e.jsx(re,{closeModal:u,data:n,onClick:u})}),e.jsxs(ft,{children:[e.jsx(wt,{children:p.length?p.slice(0,50).map(g=>e.jsx(gt,{data:g,openModalToggle:f},g._id)):e.jsx(bt,{children:"There is not exercises downloaded else, please try choose this categorie later!!!"})}),e.jsx(yt,{src:jt,alt:"image"})]})]})},_t=()=>{const[t,s]=d.useState("Body part"),[i,n]=d.useState(""),r=o=>{n(o)},c=o=>{s(o)},a=o=>o.slice(0,1).toUpperCase()+o.slice(1);return e.jsxs(tt,{children:[e.jsxs(st,{children:[e.jsx(K,{children:"Exercises"}),e.jsx(K,{children:a(i)}),e.jsx(le,{activeFilter:t,handleFilterClick:c})]}),t==="Body parts"&&e.jsx(ae,{handleFilterClick:c,handleSetExName:r}),t==="Muscules"&&e.jsx(oe,{handleFilterClick:c,handleSetExName:r}),t==="Equipment"&&e.jsx(ce,{handleFilterClick:c,handleSetExName:r}),t==="Waist"&&e.jsx(vt,{exerciseName:i})]})},Nt=()=>{const t=T(),{exercises:s}=I(),{bodyParts:i}=I();console.log(s),console.log(i);const[n,r]=d.useState(!1),[c,a]=d.useState(!1),[o,l]=d.useState({});d.useEffect(()=>{t(xe())},[t]),d.useEffect(()=>{t(C())},[t]);const p=()=>{r(h=>!h)},f=()=>{a(h=>!h)},u={_id:"64f2458d6f67bc34bae4f813",bodyPart:"upper arms",equipment:"barbell",gifUrl:"https://ftp.goit.study/img/power-pulse/gifs/0038.gif",name:"barbell drag curl",target:"biceps",burnedCalories:84,time:3};return e.jsxs("div",{children:[e.jsx(_t,{}),e.jsx("button",{type:"button",onClick:p,children:"TEST Open exercise"}),n&&e.jsx(O,{onClose:p,children:e.jsx(ie,{exercise:u,toggleExerciseModal:p,toggleSuccessModal:f,setExercise:l})}),c&&e.jsx(O,{onClose:f,children:e.jsx(re,{exercise:o})})]})};export{Nt as default};
