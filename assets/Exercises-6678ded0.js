import{x as w,r as p,j as e,L as G}from"./index-fa3fc243.js";import{B as M,M as P}from"./ButtonModal-0c7f0d7c.js";import{i as F}from"./icons-59e57a22.js";var A={exports:{}},Y="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",H=Y,V=H;function U(){}function q(){}q.resetWarningCache=U;var J=function(){function s(n,i,r,c,o,m){if(m!==V){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}s.isRequired=s;function t(){return s}var a={array:s,bigint:s,bool:s,func:s,number:s,object:s,string:s,symbol:s,any:s,arrayOf:t,element:s,elementType:s,instanceOf:t,node:s,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:q,resetWarningCache:U};return a.PropTypes=a,a};A.exports=J();var K=A.exports,B=typeof window>"u"?p.useEffect:p.useLayoutEffect,Q=({isPlaying:s,duration:t,startAt:a=0,updateInterval:n=0,onComplete:i,onUpdate:r})=>{let[c,o]=p.useState(a),m=p.useRef(0),l=p.useRef(a),_=p.useRef(a*-1e3),d=p.useRef(null),x=p.useRef(null),y=p.useRef(null),k=j=>{let h=j/1e3;if(x.current===null){x.current=h,d.current=requestAnimationFrame(k);return}let g=h-x.current,v=m.current+g;x.current=h,m.current=v;let $=l.current+(n===0?v:(v/n|0)*n),I=l.current+v,L=typeof t=="number"&&I>=t;o(L?t:$),L||(d.current=requestAnimationFrame(k))},b=()=>{d.current&&cancelAnimationFrame(d.current),y.current&&clearTimeout(y.current),x.current=null},T=p.useCallback(j=>{b(),m.current=0;let h=typeof j=="number"?j:a;l.current=h,o(h),s&&(d.current=requestAnimationFrame(k))},[s,a]);return B(()=>{if(r==null||r(c),t&&c>=t){_.current+=t*1e3;let{shouldRepeat:j=!1,delay:h=0,newStartAt:g}=(i==null?void 0:i(_.current/1e3))||{};j&&(y.current=setTimeout(()=>T(g),h*1e3))}},[c,t]),B(()=>(s&&(d.current=requestAnimationFrame(k)),b),[s,t,n]),{elapsedTime:c,reset:T}},X=(s,t,a)=>{let n=s/2,i=t/2,r=n-i,c=2*r,o=a==="clockwise"?"1,0":"0,1",m=2*Math.PI*r;return{path:`m ${n},${i} a ${r},${r} 0 ${o} 0,${c} a ${r},${r} 0 ${o} 0,-${c}`,pathLength:m}},W=(s,t)=>s===0||s===t?0:typeof t=="number"?s-t:0,Z=s=>({position:"relative",width:s,height:s}),ee={display:"flex",justifyContent:"center",alignItems:"center",position:"absolute",left:0,top:0,width:"100%",height:"100%"},O=(s,t,a,n,i)=>{if(n===0)return t;let r=(i?n-s:s)/n;return t+a*r},z=s=>{var t,a;return(a=(t=s.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,(n,i,r,c)=>`#${i}${i}${r}${r}${c}${c}`).substring(1).match(/.{2}/g))==null?void 0:t.map(n=>parseInt(n,16)))!=null?a:[]},se=(s,t)=>{var a;let{colors:n,colorsTime:i,isSmoothColorTransition:r=!0}=s;if(typeof n=="string")return n;let c=(a=i==null?void 0:i.findIndex((x,y)=>x>=t&&t>=i[y+1]))!=null?a:-1;if(!i||c===-1)return n[0];if(!r)return n[c];let o=i[c]-t,m=i[c]-i[c+1],l=z(n[c]),_=z(n[c+1]),d=!!s.isGrowing;return`rgb(${l.map((x,y)=>O(o,x,_[y]-x,m,d)|0).join(",")})`},te=s=>{let{duration:t,initialRemainingTime:a,updateInterval:n,size:i=180,strokeWidth:r=12,trailStrokeWidth:c,isPlaying:o=!1,isGrowing:m=!1,rotation:l="clockwise",onComplete:_,onUpdate:d}=s,x=p.useRef(),y=Math.max(r,c??0),{path:k,pathLength:b}=X(i,y,l),{elapsedTime:T}=Q({isPlaying:o,duration:t,startAt:W(t,a),updateInterval:n,onUpdate:typeof d=="function"?h=>{let g=Math.ceil(t-h);g!==x.current&&(x.current=g,d(g))}:void 0,onComplete:typeof _=="function"?h=>{var g;let{shouldRepeat:v,delay:$,newInitialRemainingTime:I}=(g=_(h))!=null?g:{};if(v)return{shouldRepeat:v,delay:$,newStartAt:W(t,I)}}:void 0}),j=t-T;return{elapsedTime:T,path:k,pathLength:b,remainingTime:Math.ceil(j),rotation:l,size:i,stroke:se(s,j),strokeDashoffset:O(T,0,b,t,m),strokeWidth:r}},D=s=>{let{children:t,strokeLinecap:a,trailColor:n,trailStrokeWidth:i}=s,{path:r,pathLength:c,stroke:o,strokeDashoffset:m,remainingTime:l,elapsedTime:_,size:d,strokeWidth:x}=te(s);return w.createElement("div",{style:Z(d)},w.createElement("svg",{viewBox:`0 0 ${d} ${d}`,width:d,height:d,xmlns:"http://www.w3.org/2000/svg"},w.createElement("path",{d:r,fill:"none",stroke:n??"#d9d9d9",strokeWidth:i??x}),w.createElement("path",{d:r,fill:"none",stroke:o,strokeLinecap:a??"round",strokeWidth:x,strokeDasharray:c,strokeDashoffset:m})),typeof t=="function"&&w.createElement("div",{style:ee},t({remainingTime:l,elapsedTime:_,color:o})))};D.displayName="CountdownCircleTimer";const re="_module_container_14pez_5",ie="_left_side_14pez_11",ne="_timer_14pez_17",ce="_play_14pez_23",ae="_calories_14pez_30",le="_calories_amount_14pez_36",oe="_right_side_14pez_40",de="_gif_14pez_47",ue="_exercise_descr_14pez_53",pe="_exercise_div_14pez_59",me="_type_14pez_70",xe="_type_descr_14pez_76",u={module_container:re,left_side:ie,timer:ne,play:ce,calories:ae,calories_amount:le,right_side:oe,gif:de,exercise_descr:ue,exercise_div:pe,type:me,type_descr:xe},_e=({exercise:s})=>{const[t,a]=p.useState(0),[n,i]=p.useState(0),[r,c]=p.useState(!1);p.useEffect(()=>{let l;return r?l=setInterval(()=>{a(_=>{const d=_+1;return console.log("duration",d),d===180&&(clearInterval(l),c(!1)),d})},1e3):clearInterval(l),()=>{clearInterval(l)}},[r,c]),p.useEffect(()=>{const l=(t/60*s.burnedCalories/3).toFixed();i(l)},[t]);const o=()=>{c(l=>!l)},m=l=>l.charAt(0).toUpperCase()+l.slice(1);return e.jsxs("div",{className:u.module_container,children:[e.jsxs("div",{className:u.left_side,children:[e.jsx("img",{className:u.gif,src:s.gifUrl,alt:"Exercise technique"}),e.jsxs("div",{className:u.timer,children:[e.jsx(D,{isPlaying:r,strokeWidth:4,duration:180,size:124,isGrowing:!0,rotation:"counterclockwise",colors:["#E6533C"],trailColor:["#323232"],children:({remainingTime:l})=>{const _=Math.floor(l/60),d=l%60;return`${String(_).padStart(2,"0")}:${String(d).padStart(2,"0")}`}}),!r&&e.jsx("svg",{className:u.play,onClick:o,children:e.jsx("use",{href:F+"#icon-play"})}),r&&e.jsx("svg",{className:u.play,onClick:o,children:e.jsx("use",{href:F+"#icon-pause-square"})}),e.jsxs("p",{className:u.calories,children:["Burned calories: ",e.jsx("span",{className:u.calories_amount,children:n})]})]})]}),e.jsxs("div",{className:u.right_side,children:[e.jsxs("div",{className:u.exercise_descr,children:[e.jsxs("div",{className:u.exercise_div,children:[e.jsx("p",{className:u.type,children:"Name"}),e.jsx("p",{className:u.type_descr,children:m(s.name)})]}),e.jsxs("div",{className:u.exercise_div,children:[e.jsx("p",{className:u.type,children:"Target"}),e.jsx("p",{className:u.type_descr,children:m(s.target)})]}),e.jsxs("div",{className:u.exercise_div,children:[e.jsx("p",{className:u.type,children:"Body Part"}),e.jsx("p",{className:u.type_descr,children:m(s.bodyPart)})]}),e.jsxs("div",{className:u.exercise_div,children:[e.jsx("p",{className:u.type,children:"Equipment"}),e.jsx("p",{className:u.type_descr,children:m(s.equipment)})]})]}),e.jsx(M,{btnType:"button",text:"Add to diary"})]})]})},he="_container_1kxge_1",fe="_pic_1kxge_10",ge="_welldone_1kxge_14",ye="_amount_container_1kxge_20",je="_text_1kxge_27",ve="_amount_1kxge_20",Ne="_links_1kxge_37",ke="_link_1kxge_37",Te="_svg_1kxge_51",f={container:he,pic:fe,welldone:ge,amount_container:ye,text:je,amount:ve,links:Ne,link:ke,svg:Te},be="/power-pulse-front-end-react/assets/thumb_up-47cb592a.png",we=()=>e.jsxs("div",{className:f.container,children:[e.jsx("img",{className:f.pic,src:be,alt:"Well done"}),e.jsx("p",{className:f.welldone,children:"Well done"}),e.jsxs("div",{className:f.amount_container,children:[e.jsxs("p",{className:f.text,children:["Your time: ",e.jsx("span",{className:f.amount,children:"0"})]}),e.jsxs("p",{className:f.text,children:["Burned calories: ",e.jsx("span",{className:f.amount,children:"0"})]})]}),e.jsxs("div",{className:f.links,children:[e.jsx(M,{btnType:"button",text:"Next exercise"}),e.jsxs(G,{to:"/",className:f.link,children:["To the diary",e.jsx("svg",{className:f.svg,children:e.jsx("use",{href:F+"#icon-arrow-modal"})})]})]})]}),Ee="_wrapper_1kscx_2",Se="_exercises_box_1kscx_17",Ce="_exercises_title_1kscx_23",S={wrapper:Ee,exercises_box:Se,exercises_title:Ce},$e="_exercisesUl_705hr_1",R={exercisesUl:$e},Ie="_exercisesLi_1a15a_1",Fe="_image_1a15a_6",Re="_titleContainer_1a15a_30",Le="_exerciseItemTitle_1a15a_44",Pe="_exerciseItemText_1a15a_56",E={exercisesLi:Ie,image:Fe,titleContainer:Re,exerciseItemTitle:Le,exerciseItemText:Pe},C=()=>e.jsxs("li",{className:E.exercisesLi,children:[e.jsx("img",{className:E.image,src:"#"}),e.jsxs("div",{className:E.titleContainer,children:[e.jsx("h3",{className:E.exerciseItemTitle}),e.jsx("p",{className:E.exerciseItemText})]})]});C.propTypes={exercisesItem:K.PropTypes.object};const Be=()=>e.jsx("div",{children:e.jsx("ul",{className:R.exercisesUl,children:e.jsx(C,{})})}),We=()=>e.jsx("ul",{className:R.exercisesUl,children:e.jsx(C,{})}),ze=()=>e.jsx(e.Fragment,{children:e.jsx("ul",{className:R.exercisesUl,children:e.jsx(C,{})})}),Me="_exercisesNavList_2f1ue_1",Ae="_exercisesFilter_2f1ue_12",Ue="_filterBtn_2f1ue_36",N={exercisesNavList:Me,exercisesFilter:Ae,filterBtn:Ue},qe=({activeFilter:s,handleFilterClick:t})=>e.jsxs("ul",{className:N.exercisesNavList,children:[e.jsx("li",{className:N.exercisesFilter,children:e.jsx("button",{className:N.filterBtn,type:"button",onClick:()=>t("Body parts"),children:"Body parts"})}),e.jsx("li",{className:N.exercisesFilter,children:e.jsx("button",{className:N.filterBtn,type:"button",children:"Muscules"})}),e.jsx("li",{className:N.exercisesFilter,children:e.jsx("button",{className:N.filterBtn,type:"button",children:"Equipment"})})]}),Oe=()=>{const[s,t]=p.useState("Body parts"),[a,n]=p.useState(""),i=o=>{n(o)},r=o=>{t(o)},c=o=>o.slice(0,1).toUpperCase()+o.slice(1);return e.jsxs("div",{className:S.wrapper,children:[e.jsxs("li",{className:S.exercises_box,children:[s!=="Waist"?e.jsx("h2",{className:S.exercises_title,children:"Exercises"}):e.jsx("h2",{className:S.exercises_title,children:c(a)}),e.jsx(qe,{activeFilter:s,handleFilterClick:r})]}),s==="Body parts"&&e.jsx(Be,{handleFilterClick:r,handleSetExName:i}),s==="Muscules"&&e.jsx(We,{handleFilterClick:r,handleSetExName:i}),s==="Equipment"&&e.jsx(ze,{handleFilterClick:r,handleSetExName:i}),s==="Waist","  "]})},He=()=>{const[s,t]=p.useState(!1),[a,n]=p.useState(!1),i=()=>{t(o=>!o)},r=()=>{n(o=>!o)},c={_id:"64f2458d6f67bc34bae4f813",bodyPart:"upper arms",equipment:"barbell",gifUrl:"https://ftp.goit.study/img/power-pulse/gifs/0038.gif",name:"barbell drag curl",target:"biceps",burnedCalories:84,time:3};return e.jsxs("div",{children:["Exercises",e.jsx(Oe,{}),e.jsx("button",{type:"button",onClick:i,children:"TEST Open exercise"}),s&&e.jsx(P,{onClose:i,children:e.jsx(_e,{exercise:c})}),e.jsx("button",{type:"button",onClick:r,children:"TEST Open exercise"}),a&&e.jsx(P,{onClose:r,children:e.jsx(we,{exercise:c})})]})};export{He as default};