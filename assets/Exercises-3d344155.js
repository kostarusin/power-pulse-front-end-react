import{u as P,g as le,x as N,r as p,j as e,L as de,e as C,i as F,k as Q}from"./index-2de18e7c.js";import{B as X,M as G}from"./ButtonModal-86c9bcfc.js";import{i as M}from"./icons-53429391.js";import{s as h}from"./styled-components.browser.esm-ccf7ecce.js";import"./emotion-unitless.esm-f0048d07.js";const pe=t=>t.exercises.loading,Z=t=>t.exercises,O=t=>t.exercises.data,ue=()=>{const t=P(pe),s=P(Z);return{loading:t,exercises:s}};var ee={exports:{}},xe="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",he=xe,me=he;function te(){}function se(){}se.resetWarningCache=te;var ge=function(){function t(n,i,o,c,a,d){if(d!==me){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}t.isRequired=t;function s(){return t}var r={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:s,element:t,elementType:t,instanceOf:s,node:t,objectOf:s,oneOf:s,oneOfType:s,shape:s,exact:s,checkPropTypes:se,resetWarningCache:te};return r.PropTypes=r,r};ee.exports=ge();var z=ee.exports;const k=le(z);var V=typeof window>"u"?p.useEffect:p.useLayoutEffect,fe=({isPlaying:t,duration:s,startAt:r=0,updateInterval:n=0,onComplete:i,onUpdate:o})=>{let[c,a]=p.useState(r),d=p.useRef(0),l=p.useRef(r),f=p.useRef(r*-1e3),u=p.useRef(null),m=p.useRef(null),y=p.useRef(null),x=v=>{let w=v/1e3;if(m.current===null){m.current=w,u.current=requestAnimationFrame(x);return}let j=w-m.current,_=d.current+j;m.current=w,d.current=_;let R=l.current+(n===0?_:(_/n|0)*n),$=l.current+_,D=typeof s=="number"&&$>=s;a(D?s:R),D||(u.current=requestAnimationFrame(x))},T=()=>{u.current&&cancelAnimationFrame(u.current),y.current&&clearTimeout(y.current),m.current=null},E=p.useCallback(v=>{T(),d.current=0;let w=typeof v=="number"?v:r;l.current=w,a(w),t&&(u.current=requestAnimationFrame(x))},[t,r]);return V(()=>{if(o==null||o(c),s&&c>=s){f.current+=s*1e3;let{shouldRepeat:v=!1,delay:w=0,newStartAt:j}=(i==null?void 0:i(f.current/1e3))||{};v&&(y.current=setTimeout(()=>E(j),w*1e3))}},[c,s]),V(()=>(t&&(u.current=requestAnimationFrame(x)),T),[t,s,n]),{elapsedTime:c,reset:E}},ye=(t,s,r)=>{let n=t/2,i=s/2,o=n-i,c=2*o,a=r==="clockwise"?"1,0":"0,1",d=2*Math.PI*o;return{path:`m ${n},${i} a ${o},${o} 0 ${a} 0,${c} a ${o},${o} 0 ${a} 0,-${c}`,pathLength:d}},Y=(t,s)=>t===0||t===s?0:typeof s=="number"?t-s:0,we=t=>({position:"relative",width:t,height:t}),be={display:"flex",justifyContent:"center",alignItems:"center",position:"absolute",left:0,top:0,width:"100%",height:"100%"},ne=(t,s,r,n,i)=>{if(n===0)return s;let o=(i?n-t:t)/n;return s+r*o},H=t=>{var s,r;return(r=(s=t.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,(n,i,o,c)=>`#${i}${i}${o}${o}${c}${c}`).substring(1).match(/.{2}/g))==null?void 0:s.map(n=>parseInt(n,16)))!=null?r:[]},je=(t,s)=>{var r;let{colors:n,colorsTime:i,isSmoothColorTransition:o=!0}=t;if(typeof n=="string")return n;let c=(r=i==null?void 0:i.findIndex((m,y)=>m>=s&&s>=i[y+1]))!=null?r:-1;if(!i||c===-1)return n[0];if(!o)return n[c];let a=i[c]-s,d=i[c]-i[c+1],l=H(n[c]),f=H(n[c+1]),u=!!t.isGrowing;return`rgb(${l.map((m,y)=>ne(a,m,f[y]-m,d,u)|0).join(",")})`},ve=t=>{let{duration:s,initialRemainingTime:r,updateInterval:n,size:i=180,strokeWidth:o=12,trailStrokeWidth:c,isPlaying:a=!1,isGrowing:d=!1,rotation:l="clockwise",onComplete:f,onUpdate:u}=t,m=p.useRef(),y=Math.max(o,c??0),{path:x,pathLength:T}=ye(i,y,l),{elapsedTime:E}=fe({isPlaying:a,duration:s,startAt:Y(s,r),updateInterval:n,onUpdate:typeof u=="function"?w=>{let j=Math.ceil(s-w);j!==m.current&&(m.current=j,u(j))}:void 0,onComplete:typeof f=="function"?w=>{var j;let{shouldRepeat:_,delay:R,newInitialRemainingTime:$}=(j=f(w))!=null?j:{};if(_)return{shouldRepeat:_,delay:R,newStartAt:Y(s,$)}}:void 0}),v=s-E;return{elapsedTime:E,path:x,pathLength:T,remainingTime:Math.ceil(v),rotation:l,size:i,stroke:je(t,v),strokeDashoffset:ne(E,0,T,s,d),strokeWidth:o}},ie=t=>{let{children:s,strokeLinecap:r,trailColor:n,trailStrokeWidth:i}=t,{path:o,pathLength:c,stroke:a,strokeDashoffset:d,remainingTime:l,elapsedTime:f,size:u,strokeWidth:m}=ve(t);return N.createElement("div",{style:we(u)},N.createElement("svg",{viewBox:`0 0 ${u} ${u}`,width:u,height:u,xmlns:"http://www.w3.org/2000/svg"},N.createElement("path",{d:o,fill:"none",stroke:n??"#d9d9d9",strokeWidth:i??m}),N.createElement("path",{d:o,fill:"none",stroke:a,strokeLinecap:r??"round",strokeWidth:m,strokeDasharray:c,strokeDashoffset:d})),typeof s=="function"&&N.createElement("div",{style:be},s({remainingTime:l,elapsedTime:f,color:a})))};ie.displayName="CountdownCircleTimer";const _e="_module_container_14pez_5",ke="_left_side_14pez_11",Ee="_timer_14pez_17",Pe="_play_14pez_23",Te="_calories_14pez_30",Ne="_calories_amount_14pez_36",Ce="_right_side_14pez_40",Se="_gif_14pez_47",Ie="_exercise_descr_14pez_53",ze="_exercise_div_14pez_59",Le="_type_14pez_70",We="_type_descr_14pez_76",g={module_container:_e,left_side:ke,timer:Ee,play:Pe,calories:Te,calories_amount:Ne,right_side:Ce,gif:Se,exercise_descr:Ie,exercise_div:ze,type:Le,type_descr:We},Re=({exercise:t})=>{const[s,r]=p.useState(0),[n,i]=p.useState(0),[o,c]=p.useState(!1);p.useEffect(()=>{let l;return o?l=setInterval(()=>{r(f=>{const u=f+1;return console.log("duration",u),u===180&&(clearInterval(l),c(!1)),u})},1e3):clearInterval(l),()=>{clearInterval(l)}},[o,c]),p.useEffect(()=>{const l=(s/60*t.burnedCalories/3).toFixed();i(l)},[s]);const a=()=>{c(l=>!l)},d=l=>l.charAt(0).toUpperCase()+l.slice(1);return e.jsxs("div",{className:g.module_container,children:[e.jsxs("div",{className:g.left_side,children:[e.jsx("img",{className:g.gif,src:t.gifUrl,alt:"Exercise technique"}),e.jsxs("div",{className:g.timer,children:[e.jsx(ie,{isPlaying:o,strokeWidth:4,duration:180,size:124,isGrowing:!0,rotation:"counterclockwise",colors:["#E6533C"],trailColor:["#323232"],children:({remainingTime:l})=>{const f=Math.floor(l/60),u=l%60;return`${String(f).padStart(2,"0")}:${String(u).padStart(2,"0")}`}}),!o&&e.jsx("svg",{className:g.play,onClick:a,children:e.jsx("use",{href:M+"#icon-play"})}),o&&e.jsx("svg",{className:g.play,onClick:a,children:e.jsx("use",{href:M+"#icon-pause-square"})}),e.jsxs("p",{className:g.calories,children:["Burned calories: ",e.jsx("span",{className:g.calories_amount,children:n})]})]})]}),e.jsxs("div",{className:g.right_side,children:[e.jsxs("div",{className:g.exercise_descr,children:[e.jsxs("div",{className:g.exercise_div,children:[e.jsx("p",{className:g.type,children:"Name"}),e.jsx("p",{className:g.type_descr,children:d(t.name)})]}),e.jsxs("div",{className:g.exercise_div,children:[e.jsx("p",{className:g.type,children:"Target"}),e.jsx("p",{className:g.type_descr,children:d(t.target)})]}),e.jsxs("div",{className:g.exercise_div,children:[e.jsx("p",{className:g.type,children:"Body Part"}),e.jsx("p",{className:g.type_descr,children:d(t.bodyPart)})]}),e.jsxs("div",{className:g.exercise_div,children:[e.jsx("p",{className:g.type,children:"Equipment"}),e.jsx("p",{className:g.type_descr,children:d(t.equipment)})]})]}),e.jsx(X,{btnType:"button",text:"Add to diary"})]})]})},$e="_container_1kxge_1",qe="_pic_1kxge_10",Be="_welldone_1kxge_14",Me="_amount_container_1kxge_20",Fe="_text_1kxge_27",Oe="_amount_1kxge_20",Ae="_links_1kxge_37",Ue="_link_1kxge_37",De="_svg_1kxge_51",b={container:$e,pic:qe,welldone:Be,amount_container:Me,text:Fe,amount:Oe,links:Ae,link:Ue,svg:De},Ge="/power-pulse-front-end-react/assets/thumb_up-47cb592a.png",Ve=()=>e.jsxs("div",{className:b.container,children:[e.jsx("img",{className:b.pic,src:Ge,alt:"Well done"}),e.jsx("p",{className:b.welldone,children:"Well done"}),e.jsxs("div",{className:b.amount_container,children:[e.jsxs("p",{className:b.text,children:["Your time: ",e.jsx("span",{className:b.amount,children:"0"})]}),e.jsxs("p",{className:b.text,children:["Burned calories: ",e.jsx("span",{className:b.amount,children:"0"})]})]}),e.jsxs("div",{className:b.links,children:[e.jsx(X,{btnType:"button",text:"Next exercise"}),e.jsxs(de,{to:"/",className:b.link,children:["To the diary",e.jsx("svg",{className:b.svg,children:e.jsx("use",{href:M+"#icon-arrow-modal"})})]})]})]}),A=h.ul`
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
`,Ye=h.li`
  position: relative;
  cursor: pointer;
`,He=h.img`
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
`,Je=h.div`
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
`,Ke=h.h3`
  font-size: 20px;
  line-height: 1.2;

  color: var(--white-color);

  @media screen and (min-width: 375px) {
    font-size: 24px;
    line-height: 1.33;
  }
`,Qe=h.p`
  font-size: 12px;
  line-height: 1.5;

  color: rgba(239, 237, 232, 0.4);
`,Xe="/power-pulse-front-end-react/assets/0-default-fa91a1ec.jpg",L=({exercisesItem:t,handleFilterClick:s,handleSetExName:r})=>{const{name:n,filter:i,imgURL:o}=t,c=d=>{s("Waist"),r(d)},a=d=>d.slice(0,1).toUpperCase()+d.slice(1);return e.jsxs(Ye,{onClick:()=>c(n),children:[e.jsx(He,{src:o||Xe,alt:n}),e.jsxs(Je,{children:[e.jsx(Ke,{children:a(n)}),e.jsx(Qe,{children:i})]})]})};L.propTypes={exercisesItem:z.PropTypes.object};const I="/power-pulse-front-end-react/assets/sprite-2fdf8fa9.svg",U=h.div`
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
`,Ze=h.li`
  margin-top: 32px;
`,W=({itemsPerPage:t,totalItems:s,currentPage:r,onPageChange:n})=>{const i=Math.ceil(s/t),o=a=>{a>=1&&a<=i&&n(a)},c=()=>{const a=[];for(let d=1;d<=i;d++)a.push(e.jsx(Ze,{className:`page-item ${d===r?"active":""}`,children:e.jsxs("button",{className:"page-link",onClick:()=>o(d),children:[d,d===r&&e.jsx("svg",{children:e.jsx("use",{href:`${I}#pagination-btn`})})]})},d));return a};return e.jsx("nav",{"aria-label":"Pagination",children:e.jsx("ul",{className:"pagination",children:c()})})};W.propTypes={itemsPerPage:k.number.isRequired,totalItems:k.number.isRequired,currentPage:k.number.isRequired,onPageChange:k.func.isRequired};const re=({handleFilterClick:t,handleSetExName:s})=>{const r=C();p.useEffect(()=>{r(F())},[r]);const n=P(O),[i,o]=p.useState(1);console.log(n);const c=()=>{const x=window.innerWidth;return x>=768&&x<=1439?9:10},[a,d]=p.useState(c),l=()=>{d(c())};p.useEffect(()=>(window.addEventListener("resize",l),l(),()=>{window.removeEventListener("resize",l)}),[]);const f=x=>{o(x)};console.log();const u=i*a,m=u-a,y=n.bodyParts.slice(m,u);return e.jsxs(U,{children:[e.jsx(A,{children:y.map(x=>e.jsx(L,{exercisesItem:x,handleFilterClick:t,handleSetExName:s},x._id))}),a<n.length&&e.jsx(W,{itemsPerPage:a,totalItems:n.length,currentPage:i,onPageChange:f})]})};re.propTypes={bodyParts:k.array};const et=h.div`
  padding-left: 20px;
  padding-right: 20px;
  margin-top: 10px;

  @media screen and (min-width: 1440px) {
    padding-left: 96px;
    width: 1440px;
    margin-left: auto;
    margin-right: auto;
  }
`,tt=h.li`
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
  }
`,J=h.h2`
  color: #efede8;
  font-size: 24px;
  font-weight: 700;
  line-height: 1.16;
  margin-bottom: 20px;
`,ae=({handleFilterClick:t,handleSetExName:s})=>{const r=C();p.useEffect(()=>{r(F())},[r]);const n=P(O),[i,o]=p.useState(1),c=()=>{const x=window.innerWidth;return x>=768&&x<=1439?9:10},[a,d]=p.useState(c),l=()=>{d(c())};p.useEffect(()=>(window.addEventListener("resize",l),l(),()=>{window.removeEventListener("resize",l)}),[]);const f=x=>{o(x)},u=i*a,m=u-a,y=n.muscles.slice(m,u);return e.jsxs(U,{children:[e.jsx(A,{children:y.map(x=>e.jsx(L,{exercisesItem:x,handleFilterClick:t,handleSetExName:s},x._id))}),a<n.muscles.length&&e.jsx(W,{itemsPerPage:a,totalItems:n.muscles.length,currentPage:i,onPageChange:f})]})};ae.propTypes={exercises:k.array};const oe=({handleFilterClick:t,handleSetExName:s})=>{const r=C();p.useEffect(()=>{r(F())},[r]);const n=P(O),[i,o]=p.useState(1),c=()=>{const x=window.innerWidth;return x>=768&&x<=1439?9:(x<375||x>=1440,10)},[a,d]=p.useState(c),l=()=>{d(c())};p.useEffect(()=>(window.addEventListener("resize",l),l(),()=>{window.removeEventListener("resize",l)}),[]);const f=x=>{o(x)},u=i*a,m=u-a,y=n.equipment.slice(m,u);return e.jsxs(U,{children:[e.jsx(A,{children:y.map(x=>e.jsx(L,{exercisesItem:x,handleFilterClick:t,handleSetExName:s},x._id))}),a<n.equipment.length&&e.jsx(W,{itemsPerPage:a,totalItems:n.equipment.length,currentPage:i,onPageChange:f})]})};oe.propTypes={equipment:k.array};const st=h.ul`
  display: flex;
  gap: 28px;
  margin-bottom: 48px;
  @media screen and (min-width: 1440px) {
    padding-right: 96px;
  }
`,q=h.li`
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
`,B=h.button`
  color: rgba(239, 237, 232, 0.4);
  font-size: 14px;
  font-weight: 400;

  background-color: var(--black-color);

  &.active {
    color: #efede8;
  }
`,ce=({activeFilter:t,handleFilterClick:s})=>e.jsxs(st,{children:[e.jsx(q,{className:t==="Body parts"?"active":"",children:e.jsx(B,{type:"button",onClick:()=>s("Body parts"),className:t==="Body parts"?"active":"",children:"Body parts"})}),e.jsx(q,{className:t==="Muscules"?"active":"",children:e.jsx(B,{type:"button",onClick:()=>s("Muscules"),className:t==="Muscules"?"active":"",children:"Muscules"})}),e.jsx(q,{className:t==="Equipment"?"active":"",children:e.jsx(B,{type:"button",onClick:()=>s("Equipment"),className:t==="Equipment"?"active":"",children:"Equipment"})})]});ce.propTypes={activeFilter:z.PropTypes.string,handleFilterClick:z.PropTypes.func};const nt=h.li`
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
`,it=h.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`,rt=h.p`
  font-size: 12px;
  font-weight: 700;
  line-height: normal;
  color: #fff;

  padding: 5px 7.5px;
  border-radius: 4px;
  background: rgba(239, 237, 232, 0.05);
  text-transform: uppercase;
`,at=h.button`
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
`,ot=h.svg`
  width: 13px;
  height: 13px;

  @media screen and (min-width: 768px) {
    width: 16px;
    height: 16px;
  }
`,ct=h.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`,lt=h.h3`
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
`,dt=h.svg`
  width: 16px;
  height: 16px;
`,pt=h.span`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--beige-color);

  border-radius: 50%;

  width: 24px;
  height: 24px;
`,ut=h.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 4px 16px;
`,xt=h.li`
  display: flex;
  flex-direction: row;
  gap: 4px;
  color: rgba(239, 237, 232, 0.4);
  font-size: 12px;
  line-height: 1.5;
`,ht=h.span`
  color: var(--white-color);
`,S={cardLabel:"Workout",btnLabel:"Start",list:{burnedCalories:"Burned calories:",bodyPart:"Body part:",target:"Target:"}},K=t=>t.slice(0,1).toUpperCase()+t.slice(1),mt=({exercises:t,toggleExerciseModal:s})=>e.jsxs(nt,{children:[e.jsxs(it,{children:[e.jsx(rt,{children:S.cardLabel}),e.jsxs(at,{onClick:()=>{s(t)},type:"button",children:[S.btnLabel,e.jsx("span",{children:e.jsx(ot,{children:e.jsx("use",{href:`${I}#icon-arrow-right`})})})]})]}),e.jsxs(ct,{children:[e.jsx(pt,{children:e.jsxs(dt,{width:24,height:24,children:[e.jsx("use",{href:`${I}#icon-run-exercises`}),e.jsx("use",{href:`${I}#icon-running-stick-figure`})]})}),e.jsxs(lt,{children:[K(t.name)," "]})]}),e.jsx(ut,{children:Object.keys(S.list).map(r=>e.jsxs(xt,{children:[S.list[r],e.jsx(ht,{children:K(String(t[r]))})]},r))})]}),gt=h.div`
  display: flex;
`,ft=h.img`
  display: none;
  @media screen and (min-width: 1440px) {
    display: block;
    width: 530px;
    height: 902px;
    /* margin-top: -100px; */
    z-index: -2;
  }
`,yt=h.ul`
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
`,wt=h.h2`
  color: #efede8;
  font-size: 24px;
  font-weight: 700;
  line-height: 1.16;
  margin-bottom: 20px;
`,bt="/power-pulse-front-end-react/assets/Waist1-17196d5b.jpg",jt=({exerciseName:t})=>{const s=C();p.useEffect(()=>{s(Q())},[s]);const n=P(Z).filter(i=>i.bodyPart||i.target||i.equipment===t);return e.jsx(e.Fragment,{children:e.jsxs(gt,{children:[e.jsx(yt,{children:n.length?n.slice(0,50).map(i=>e.jsx(mt,{data:i},i._id)):e.jsx(wt,{children:"There is not exercises downloaded else, plaese try choose this categorie later!!!"})}),e.jsx(ft,{src:bt,alt:"image"})]})})},vt=()=>{const[t,s]=p.useState("Body part"),[r,n]=p.useState(""),i=a=>{n(a)},o=a=>{s(a)},c=a=>a.slice(0,1).toUpperCase()+a.slice(1);return e.jsxs(et,{children:[e.jsxs(tt,{children:[e.jsx(J,{children:"Exercises"}),e.jsx(J,{children:c(r)}),e.jsx(ce,{activeFilter:t,handleFilterClick:o})]}),t==="Body parts"&&e.jsx(re,{handleFilterClick:o,handleSetExName:i}),t==="Muscules"&&e.jsx(ae,{handleFilterClick:o,handleSetExName:i}),t==="Equipment"&&e.jsx(oe,{handleFilterClick:o,handleSetExName:i}),t==="Waist"&&e.jsx(jt,{exerciseName:r})]})},Nt=()=>{const t=C(),{exercises:s}=ue();console.log(s);const[r,n]=p.useState(!1),[i,o]=p.useState(!1);p.useEffect(()=>{t(Q())},[t]);const c=()=>{n(l=>!l)},a=()=>{o(l=>!l)},d={_id:"64f2458d6f67bc34bae4f813",bodyPart:"upper arms",equipment:"barbell",gifUrl:"https://ftp.goit.study/img/power-pulse/gifs/0038.gif",name:"barbell drag curl",target:"biceps",burnedCalories:84,time:3};return e.jsxs("div",{children:["Exercises",e.jsx(vt,{}),e.jsx("button",{type:"button",onClick:c,children:"TEST Open exercise"}),r&&e.jsx(G,{onClose:c,children:e.jsx(Re,{exercise:d})}),e.jsx("button",{type:"button",onClick:a,children:"TEST Open exercise"}),i&&e.jsx(G,{onClose:a,children:e.jsx(Ve,{exercise:d})})]})};export{Nt as default};
