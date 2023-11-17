import{u as k,g as de,j as e,a as T,r as u,m as B,R as L,n as ue,L as pe,o as K}from"./index-62920c04.js";import{s as Q}from"./styled-components.browser.esm-8ca9ff3a.js";import{B as X,M as V}from"./ButtonModal-23d12f1a.js";import{i as I}from"./icons-0fa808b4.js";import"./emotion-unitless.esm-f0048d07.js";const me=s=>s.exercises.loading,Z=s=>s.exercises.exercises,U=s=>s.exercises.bodyParts,M=()=>{const s=k(me),t=k(Z),i=k(U);return{loading:s,exercises:t,bodyParts:i}};var ee={exports:{}},xe="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",he=xe,ge=he;function se(){}function te(){}te.resetWarningCache=se;var _e=function(){function s(n,c,o,a,r,l){if(l!==ge){var p=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw p.name="Invariant Violation",p}}s.isRequired=s;function t(){return s}var i={array:s,bigint:s,bool:s,func:s,number:s,object:s,string:s,symbol:s,any:s,arrayOf:t,element:s,elementType:s,instanceOf:t,node:s,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:te,resetWarningCache:se};return i.PropTypes=i,i};ee.exports=_e();var ne=ee.exports;const S=de(ne),fe="_div_1gyia_1",ye={div:fe},je="_exercisesUl_to73p_1",A={exercisesUl:je},ve="_exercisesLi_1grgt_1",be="_image_1grgt_11",Ne="_titleContainer_1grgt_57",we="_exerciseItemTitle_1grgt_85",Ee="_exerciseItemText_1grgt_109",C={exercisesLi:ve,image:be,titleContainer:Ne,exerciseItemTitle:we,exerciseItemText:Ee},Pe="/power-pulse-front-end-react/assets/0-default-fa91a1ec.jpg",F=({exercisesItem:s,handleFilterClick:t,handleSetExName:i})=>{const{name:n,filter:c,imgURL:o}=s,a=l=>{t("Waist"),i(l)},r=l=>l.slice(0,1).toUpperCase()+l.slice(1);return e.jsxs("li",{className:C.exercisesLi,onClick:()=>a(n),children:[e.jsx("img",{className:C.image,src:o||Pe,alt:n}),e.jsxs("div",{className:C.titleContainer,children:[e.jsx("h3",{className:C.exerciseItemTitle,children:r(n)}),e.jsx("p",{className:C.exerciseItemtext,children:c})]})]})};F.propTypes={exercisesItem:ne.PropTypes.object};const ke="/power-pulse-front-end-react/assets/sprite-2fdf8fa9.svg",O=Q.div`
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
`,Ie=Q.li`
  margin-top: 32px;
`,D=({itemsPerPage:s,totalItems:t,currentPage:i,onPageChange:n})=>{const c=Math.ceil(t/s),o=r=>{r>=1&&r<=c&&n(r)},a=()=>{const r=[];for(let l=1;l<=c;l++)r.push(e.jsx(Ie,{className:`page-item ${l===i?"active":""}`,children:e.jsxs("button",{className:"page-link",onClick:()=>o(l),children:[l,l===i&&e.jsx("svg",{children:e.jsx("use",{href:`${ke}#pagination-btn`})})]})},l));return r};return e.jsx("nav",{"aria-label":"Pagination",children:e.jsx("ul",{className:"pagination",children:a()})})},ie=({handleFilterClick:s,handleSetExName:t})=>{const i=T();u.useEffect(()=>{i(B())},[i]);const{bodyParts:n}=M(),[c,o]=u.useState(1),a=()=>{const d=window.innerWidth;return d>=768&&d<=1439?9:10},[r,l]=u.useState(a),p=()=>{l(a())};u.useEffect(()=>(window.addEventListener("resize",p),p(),()=>{window.removeEventListener("resize",p)}),[]);const x=d=>{o(d)},m=c*r,h=m-r;console.log(n.bodyPart,"bodyParts.bodyPart");const y=n.bodyPart?n.bodyPart.slice(h,m):[];return e.jsxs(O,{children:[e.jsx("ul",{className:A.exercisesUl,children:y.map(d=>e.jsx(F,{exercisesItem:d,handleFilterClick:s,handleSetExName:t},d._id))}),r<n.bodyPart&&r<n.bodyPart.length&&e.jsx(D,{itemsPerPage:r,totalItems:n.bodyPart.length,currentPage:c,onPageChange:x})]})};ie.propTypes={bodyParts:S.array};const Te="_exercisesWrapper_1rf9p_3",Le="_exercisesBox_1rf9p_35",Ce="_exercisesTitle_1rf9p_47",$={exercisesWrapper:Te,exercisesBox:Le,exercisesTitle:Ce},re=({handleFilterClick:s,handleSetExName:t})=>{const i=T();u.useEffect(()=>{i(B())},[i]);const n=k(U),[c,o]=u.useState(1),a=()=>{const d=window.innerWidth;return d>=768&&d<=1439?9:10},[r,l]=u.useState(a),p=()=>{l(a())};u.useEffect(()=>(window.addEventListener("resize",p),p(),()=>{window.removeEventListener("resize",p)}),[]);const x=d=>{o(d)},m=c*r,h=m-r,y=n.muscles.slice(h,m);return e.jsxs(O,{children:[e.jsx("ul",{className:A.exercisesUl,children:y.map(d=>e.jsx(F,{exercisesItem:d,handleFilterClick:s,handleSetExName:t},d._id))}),r<n.muscles.length&&e.jsx(D,{itemsPerPage:r,totalItems:n.muscles.length,currentPage:c,onPageChange:x})]})};re.propTypes={exercises:S.array};const ce=({handleFilterClick:s,handleSetExName:t})=>{const i=T();u.useEffect(()=>{i(B())},[i]);const n=k(U),[c,o]=u.useState(1),a=()=>{const d=window.innerWidth;return d>=768&&d<=1439?9:(d<375||d>=1440,10)},[r,l]=u.useState(a),p=()=>{l(a())};u.useEffect(()=>(window.addEventListener("resize",p),p(),()=>{window.removeEventListener("resize",p)}),[]);const x=d=>{o(d)},m=c*r,h=m-r,y=n.equipment.slice(h,m);return e.jsxs(O,{children:[e.jsx("ul",{className:A.exercisesUl,children:y.map(d=>e.jsx(F,{exercisesItem:d,handleFilterClick:s,handleSetExName:t},d._id))}),r<n.equipment.length&&e.jsx(D,{itemsPerPage:r,totalItems:n.equipment.length,currentPage:c,onPageChange:x})]})};ce.propTypes={equipment:S.array};const Se="_ExercisesNavList_1gj7q_1",$e="_ExercisesFilter_1gj7q_19",We="_active_1gj7q_35",Re="_FilterBtn_1gj7q_67",v={ExercisesNavList:Se,ExercisesFilter:$e,active:We,FilterBtn:Re},ae=({activeFilter:s,handleFilterClick:t})=>e.jsxs("ul",{className:v.ExercisesNavList,children:[e.jsx("li",{className:`${v.ExercisesFilter} ${s==="Body part"?v.active:""}`,children:e.jsx("button",{type:"button",onClick:()=>t("Body parts"),className:`${v.FilterBtn} ${s==="Body part"?v.active:""}`,children:"Body parts"})}),e.jsx("li",{className:`${v.ExercisesFilter} ${s==="Muscules"?v.active:""}`,children:e.jsx("button",{type:"button",onClick:()=>t("Muscules"),className:`${v.FilterBtn} ${s==="Muscules"?v.active:""}`,children:"Muscles"})}),e.jsx("li",{className:`${v.ExercisesFilter} ${s==="Equipment"?v.active:""}`,children:e.jsx("button",{type:"button",onClick:()=>t("Equipment"),className:`${v.FilterBtn} ${s==="Equipment"?v.active:""}`,children:"Equipment"})})]});ae.propTypes={activeFilter:S.string,handleFilterClick:S.func};var Y=typeof window>"u"?u.useEffect:u.useLayoutEffect,Be=({isPlaying:s,duration:t,startAt:i=0,updateInterval:n=0,onComplete:c,onUpdate:o})=>{let[a,r]=u.useState(i),l=u.useRef(0),p=u.useRef(i),x=u.useRef(i*-1e3),m=u.useRef(null),h=u.useRef(null),y=u.useRef(null),d=j=>{let f=j/1e3;if(h.current===null){h.current=f,m.current=requestAnimationFrame(d);return}let w=f-h.current,P=l.current+w;h.current=f,l.current=P;let z=p.current+(n===0?P:(P/n|0)*n),q=p.current+P,G=typeof t=="number"&&q>=t;r(G?t:z),G||(m.current=requestAnimationFrame(d))},E=()=>{m.current&&cancelAnimationFrame(m.current),y.current&&clearTimeout(y.current),h.current=null},_=u.useCallback(j=>{E(),l.current=0;let f=typeof j=="number"?j:i;p.current=f,r(f),s&&(m.current=requestAnimationFrame(d))},[s,i]);return Y(()=>{if(o==null||o(a),t&&a>=t){x.current+=t*1e3;let{shouldRepeat:j=!1,delay:f=0,newStartAt:w}=(c==null?void 0:c(x.current/1e3))||{};j&&(y.current=setTimeout(()=>_(w),f*1e3))}},[a,t]),Y(()=>(s&&(m.current=requestAnimationFrame(d)),E),[s,t,n]),{elapsedTime:a,reset:_}},Fe=(s,t,i)=>{let n=s/2,c=t/2,o=n-c,a=2*o,r=i==="clockwise"?"1,0":"0,1",l=2*Math.PI*o;return{path:`m ${n},${c} a ${o},${o} 0 ${r} 0,${a} a ${o},${o} 0 ${r} 0,-${a}`,pathLength:l}},H=(s,t)=>s===0||s===t?0:typeof t=="number"?s-t:0,ze=s=>({position:"relative",width:s,height:s}),qe={display:"flex",justifyContent:"center",alignItems:"center",position:"absolute",left:0,top:0,width:"100%",height:"100%"},oe=(s,t,i,n,c)=>{if(n===0)return t;let o=(c?n-s:s)/n;return t+i*o},J=s=>{var t,i;return(i=(t=s.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,(n,c,o,a)=>`#${c}${c}${o}${o}${a}${a}`).substring(1).match(/.{2}/g))==null?void 0:t.map(n=>parseInt(n,16)))!=null?i:[]},Me=(s,t)=>{var i;let{colors:n,colorsTime:c,isSmoothColorTransition:o=!0}=s;if(typeof n=="string")return n;let a=(i=c==null?void 0:c.findIndex((h,y)=>h>=t&&t>=c[y+1]))!=null?i:-1;if(!c||a===-1)return n[0];if(!o)return n[a];let r=c[a]-t,l=c[a]-c[a+1],p=J(n[a]),x=J(n[a+1]),m=!!s.isGrowing;return`rgb(${p.map((h,y)=>oe(r,h,x[y]-h,l,m)|0).join(",")})`},Ue=s=>{let{duration:t,initialRemainingTime:i,updateInterval:n,size:c=180,strokeWidth:o=12,trailStrokeWidth:a,isPlaying:r=!1,isGrowing:l=!1,rotation:p="clockwise",onComplete:x,onUpdate:m}=s,h=u.useRef(),y=Math.max(o,a??0),{path:d,pathLength:E}=Fe(c,y,p),{elapsedTime:_}=Be({isPlaying:r,duration:t,startAt:H(t,i),updateInterval:n,onUpdate:typeof m=="function"?f=>{let w=Math.ceil(t-f);w!==h.current&&(h.current=w,m(w))}:void 0,onComplete:typeof x=="function"?f=>{var w;let{shouldRepeat:P,delay:z,newInitialRemainingTime:q}=(w=x(f))!=null?w:{};if(P)return{shouldRepeat:P,delay:z,newStartAt:H(t,q)}}:void 0}),j=t-_;return{elapsedTime:_,path:d,pathLength:E,remainingTime:Math.ceil(j),rotation:p,size:c,stroke:Me(s,j),strokeDashoffset:oe(_,0,E,t,l),strokeWidth:o}},le=s=>{let{children:t,strokeLinecap:i,trailColor:n,trailStrokeWidth:c}=s,{path:o,pathLength:a,stroke:r,strokeDashoffset:l,remainingTime:p,elapsedTime:x,size:m,strokeWidth:h}=Ue(s);return L.createElement("div",{style:ze(m)},L.createElement("svg",{viewBox:`0 0 ${m} ${m}`,width:m,height:m,xmlns:"http://www.w3.org/2000/svg"},L.createElement("path",{d:o,fill:"none",stroke:n??"#d9d9d9",strokeWidth:c??h}),L.createElement("path",{d:o,fill:"none",stroke:r,strokeLinecap:i??"round",strokeWidth:h,strokeDasharray:a,strokeDashoffset:l})),typeof t=="function"&&L.createElement("div",{style:qe},t({remainingTime:p,elapsedTime:x,color:r})))};le.displayName="CountdownCircleTimer";const Ae="_module_container_14pez_5",Oe="_left_side_14pez_11",De="_timer_14pez_17",Ge="_play_14pez_23",Ve="_calories_14pez_30",Ye="_calories_amount_14pez_36",He="_right_side_14pez_40",Je="_gif_14pez_47",Ke="_exercise_descr_14pez_53",Qe="_exercise_div_14pez_59",Xe="_type_14pez_70",Ze="_type_descr_14pez_76",g={module_container:Ae,left_side:Oe,timer:De,play:Ge,calories:Ve,calories_amount:Ye,right_side:He,gif:Je,exercise_descr:Ke,exercise_div:Qe,type:Xe,type_descr:Ze},es=({exercise:s,toggleExerciseModal:t,toggleSuccessModal:i,setExercise:n})=>{const[c,o]=u.useState(0),[a,r]=u.useState(0),[l,p]=u.useState(!1),x=T();u.useEffect(()=>{let _;return l?_=setInterval(()=>{o(j=>{const f=j+1;return console.log("duration",f),f===180&&(clearInterval(_),p(!1)),f})},1e3):clearInterval(_),()=>{clearInterval(_)}},[l,p]),u.useEffect(()=>{const _=(c/60*s.burnedCalories/3).toFixed();r(_)},[c,s.burnedCalories]);const m=()=>{p(_=>!_)},h=_=>_.charAt(0).toUpperCase()+_.slice(1),y=new Date().toLocaleDateString("en-GB",{day:"2-digit",month:"2-digit",year:"numeric"}).replace(/\//g,"-"),d=Math.floor(c/60),E=()=>{x(ue({date:y,credentials:{doneExercises:[{exercise:s._id,time:d,calories:a}]}})),n({time:d,calories:a}),t(),i()};return e.jsxs("div",{className:g.module_container,children:[e.jsxs("div",{className:g.left_side,children:[e.jsx("img",{className:g.gif,src:s.gifUrl,alt:"Exercise technique"}),e.jsxs("div",{className:g.timer,children:[e.jsx(le,{isPlaying:l,strokeWidth:4,duration:180,size:124,isGrowing:!0,rotation:"counterclockwise",colors:["#E6533C"],trailColor:["#323232"],children:({remainingTime:_})=>{const j=Math.floor(_/60),f=_%60;return`${String(j).padStart(2,"0")}:${String(f).padStart(2,"0")}`}}),!l&&e.jsx("svg",{className:g.play,onClick:m,children:e.jsx("use",{href:I+"#icon-play"})}),l&&e.jsx("svg",{className:g.play,onClick:m,children:e.jsx("use",{href:I+"#icon-pause-square"})}),e.jsxs("p",{className:g.calories,children:["Burned calories:"," ",e.jsx("span",{className:g.calories_amount,children:a})]})]})]}),e.jsxs("div",{className:g.right_side,children:[e.jsxs("div",{className:g.exercise_descr,children:[e.jsxs("div",{className:g.exercise_div,children:[e.jsx("p",{className:g.type,children:"Name"}),e.jsx("p",{className:g.type_descr,children:h(s.name)})]}),e.jsxs("div",{className:g.exercise_div,children:[e.jsx("p",{className:g.type,children:"Target"}),e.jsx("p",{className:g.type_descr,children:h(s.target)})]}),e.jsxs("div",{className:g.exercise_div,children:[e.jsx("p",{className:g.type,children:"Body Part"}),e.jsx("p",{className:g.type_descr,children:h(s.bodyPart)})]}),e.jsxs("div",{className:g.exercise_div,children:[e.jsx("p",{className:g.type,children:"Equipment"}),e.jsx("p",{className:g.type_descr,children:h(s.equipment)})]})]}),e.jsx(X,{btnType:"button",text:"Add to diary",onClick:E,disabled:d<1})]})]})},ss="_container_1kxge_1",ts="_pic_1kxge_10",ns="_welldone_1kxge_14",is="_amount_container_1kxge_20",rs="_text_1kxge_27",cs="_amount_1kxge_20",as="_links_1kxge_37",os="_link_1kxge_37",ls="_svg_1kxge_51",N={container:ss,pic:ts,welldone:ns,amount_container:is,text:rs,amount:cs,links:as,link:os,svg:ls},ds="/power-pulse-front-end-react/assets/thumb_up-47cb592a.png",us=({exercise:s})=>(console.log(s),e.jsxs("div",{className:N.container,children:[e.jsx("img",{className:N.pic,src:ds,alt:"Well done"}),e.jsx("p",{className:N.welldone,children:"Well done"}),e.jsxs("div",{className:N.amount_container,children:[e.jsxs("p",{className:N.text,children:["Your time: ",e.jsx("span",{className:N.amount,children:s.time})]}),e.jsxs("p",{className:N.text,children:["Burned calories:"," ",e.jsx("span",{className:N.amount,children:s.calories})]})]}),e.jsxs("div",{className:N.links,children:[e.jsx(X,{btnType:"button",text:"Next exercise"}),e.jsxs(pe,{to:"/diary",className:N.link,children:["To the diary",e.jsx("svg",{className:N.svg,children:e.jsx("use",{href:I+"#icon-arrow-modal"})})]})]})]})),ps="_waistItemLi_l817c_1",ms="_btnWrapper_l817c_65",xs="_cardLabel_l817c_79",hs="_btnLabel_l817c_101",gs="_svgExercise_l817c_141",_s="_exercisesTitleBox_l817c_161",fs="_title_l817c_171",ys="_svgExerciseRun_l817c_207",js="_spanExerciseRun_l817c_217",vs="_list_l817c_241",bs="_listItem_l817c_253",Ns="_listItemValue_l817c_271",b={waistItemLi:ps,btnWrapper:ms,cardLabel:xs,btnLabel:hs,svgExercise:gs,exercisesTitleBox:_s,title:fs,svgExerciseRun:ys,spanExerciseRun:js,list:vs,listItem:bs,listItemValue:Ns},W={cardLabel:"Workout",btnLabel:"Start",list:{burnedCalories:"Burned calories:",bodyPart:"Body part:",target:"Target:"}},ws=({data:s})=>{const[t,i]=u.useState(!1),[n,c]=u.useState(!1),[o,a]=u.useState({});console.log(s);const r=x=>x.slice(0,1).toUpperCase()+x.slice(1),l=()=>{i(x=>!x)},p=()=>{c(x=>!x)};return e.jsxs("li",{className:b.waistItemLi,children:[e.jsxs("div",{className:b.btnWrapper,children:[e.jsx("p",{className:b.cardLabel,children:W.cardLabel}),e.jsxs("button",{className:b.btnLabel,type:"button",onClick:l,children:[W.btnLabel,e.jsx("span",{children:e.jsx("svg",{className:b.svgExercise,children:e.jsx("use",{href:`${I}#icon-add-arrow`})})})]})]}),e.jsxs("div",{className:b.exercisesTitleBox,children:[e.jsx("span",{className:b.spanExerciseRun,children:e.jsxs("svg",{className:b.svgExerciseRun,width:24,height:24,children:[e.jsx("use",{href:`${I}#icon-runn   ing-figure`}),e.jsx("use",{href:`${I}#icon-running-stick-figure-svgrepo-com-1`})]})}),e.jsxs("h3",{className:b.title,children:[r(s.name)," "]})]}),t&&e.jsx(V,{onClose:l,children:e.jsx(es,{exercise:s,toggleExerciseModal:l,toggleSuccessModal:p,setExercise:a})}),n&&e.jsx(V,{onClose:p,children:e.jsx(us,{exercise:o})}),e.jsx("ul",{className:b.list,children:Object.keys(W.list).map(x=>e.jsxs("li",{className:b.listItem,children:[W.list[x],e.jsx("span",{className:b.listItemValue,children:r(String(s[x]))})]},x))})]})},Es="_waistListContainer_piqsc_1",Ps="_imgWaist_piqsc_9",ks="_waistItemUl_piqsc_35",Is="_noExercisesTitle_piqsc_113",R={waistListContainer:Es,imgWaist:Ps,waistItemUl:ks,noExercisesTitle:Is},Ts="/power-pulse-front-end-react/assets/Waist1-17196d5b.jpg",Ls=()=>{const s=T();u.useEffect(()=>{s(K())},[s]);const i=k(Z).filter(n=>n.bodyPart||n.muscles||n.equipment==="");return e.jsx(e.Fragment,{children:e.jsxs("div",{className:R.waistListContainer,children:[e.jsx("ul",{className:R.waistItemUl,children:i.length?i.slice(0,50).map(n=>e.jsx(ws,{data:n},n._id)):e.jsx("h2",{className:R.noExercisesTitle,children:"There is not exercises downloaded else, please try choose this categorie later!!!"})}),e.jsx("img",{className:R.imgWaist,src:Ts,alt:"image"})]})})},Cs=()=>{const[s,t]=u.useState("Body part"),[i,n]=u.useState(""),c=r=>{n(r)},o=r=>{t(r)},a=r=>r.slice(0,1).toUpperCase()+r.slice(1);return e.jsxs("div",{className:$.exercisesWrapper,children:[e.jsxs("li",{className:$.exercisesBox,children:[s!=="Waist"?e.jsx("h2",{className:$.exercisesTitle,children:"Exercises"}):e.jsx("h2",{className:$.exercisesTitle,children:a(i)}),e.jsx(ae,{activeFilter:s,handleFilterClick:o})]}),s==="Body part"&&e.jsx(ie,{handleFilterClick:o,handleSetExName:c}),s==="Muscules"&&e.jsx(re,{handleFilterClick:o,handleSetExName:c}),s==="Equipment"&&e.jsx(ce,{handleFilterClick:o,handleSetExName:c}),s==="Waist"&&e.jsx(Ls,{exerciseName:i})]})},Fs=()=>{const s=T(),{exercises:t}=M(),{bodyParts:i}=M();return console.log(t),console.log(i),u.useEffect(()=>{s(K())},[s]),u.useEffect(()=>{s(B())},[s]),e.jsx("div",{className:ye.div,children:e.jsx(Cs,{})})};export{Fs as default};
