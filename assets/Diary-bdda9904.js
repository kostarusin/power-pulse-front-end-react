import{u as f,j as e,r as m,a as $,s as p,d as L,N as R,b as P,c as F,e as z,g as k,f as A}from"./index-9dac8bf3.js";import{i as M}from"./emotion-unitless.esm-169360f0.js";import{f as U,t as O,s as W,p as G,a as V,b as Y}from"./index-2f6f2dea.js";import{a as H}from"./styled-components.browser.esm-2849900c.js";import"./createClass-f4f365f3.js";const J=s=>s.diary.doneExercises,K=s=>s.diary.consumedProducts,Q=s=>s.diary.burnedCalories,X=s=>s.diary.consumedCalories,E=()=>({doneExercises:f(J),consumedProducts:f(K),burnedCalories:f(Q),consumedCalories:f(X)}),Z="_titleContainer_1plm8_1",ee={titleContainer:Z};function te({title:s}){return e.jsxs("h1",{className:ee.titleContainer,children:[s," "]})}const se="_dayProductsWrapper_4dxam_1",re="_headerWrapper_4dxam_13",ae="_btnWrapper_4dxam_18",ie="_title_4dxam_22",ne="_addProductBtn_4dxam_27",ce="_link_4dxam_39",oe="_errNotFound_4dxam_58",y={dayProductsWrapper:se,headerWrapper:re,btnWrapper:ae,title:ie,addProductBtn:ne,link:ce,errNotFound:oe},le="_wrapper_172vl_1",de="_btnDelete_172vl_42",pe="_wrapperListContainer_172vl_51",he="_wrapperList_172vl_51",xe="_title_172vl_68",me="_text_172vl_76",_e="_textRecommend_172vl_86",ue="_wrapperRecommendContainer_172vl_92",ye="_wrapperRecommend_172vl_92",we="_wrapperItemTitle_172vl_116",ge="_wrapperItemCategory_172vl_130",je="_wrapperItemCalories_172vl_144",ve="_wrapperItemWeigth_172vl_158",Ne="_flex_172vl_172",fe="_containerError_172vl_187",be="_circle_172vl_202",n={wrapper:le,btnDelete:de,wrapperListContainer:pe,wrapperList:he,title:xe,text:me,textRecommend:_e,wrapperRecommendContainer:ue,wrapperRecommend:ye,wrapperItemTitle:we,wrapperItemCategory:ge,wrapperItemCalories:je,wrapperItemWeigth:ve,flex:Ne,containerError:fe,circle:be},ke=({products:s,selectedDate:l})=>{const[r,h]=m.useState(window.innerWidth),x=$();m.useEffect(()=>{const t=()=>{h(window.innerWidth)};return window.addEventListener("resize",t),()=>{window.removeEventListener("resize",t)}},[]);const d=t=>{x(L({date:l,credentials:{id:t._id}}))};return e.jsx("div",{className:n.wrapper,children:s.length!==0?s.map((t,c)=>e.jsxs("div",{className:n.wrapperListContainer,children:[e.jsxs("ul",{className:n.wrapperList,children:[e.jsxs("li",{className:n.wrapperItemTitle,children:[e.jsx("div",{className:n.title,style:{display:r>=768&&c>0?"none":"block"},children:"Title"}),e.jsx("div",{className:n.text,children:t.title})]}),e.jsxs("li",{className:n.wrapperItemCategory,children:[e.jsx("div",{className:n.title,style:{display:r>=768&&c>0?"none":"block"},children:"Category"}),e.jsx("div",{className:n.text,children:t.category.charAt(0).toUpperCase()+t.category.slice(1)})]}),e.jsxs("li",{className:n.wrapperItemCalories,children:[e.jsx("div",{className:n.title,style:{display:r>=768&&c>0?"none":"block"},children:"Calories"}),e.jsx("div",{className:n.text,children:t.calories})]}),e.jsxs("li",{className:n.wrapperItemWeigth,children:[e.jsx("div",{className:n.title,style:{display:r>=768&&c>0?"none":"block"},children:"Weight"}),e.jsx("div",{className:n.text,children:t.amount})]}),e.jsxs("li",{className:n.wrapperItemRecommend,children:[e.jsx("div",{className:n.title,style:{display:r>=768&&c>0?"none":"block"},children:"Recommend"}),e.jsxs("div",{className:n.wrapperRecommendContainer,children:[e.jsxs("div",{className:n.wrapperRecommend,children:[e.jsx("div",{className:n.circle,style:{backgroundColor:t.groupBloodNotAllowed?"green":"red"}}),e.jsx("div",{className:n.textRecommend,children:t.groupBloodNotAllowed?"Yes":"No"})]}),e.jsx("button",{type:"button",className:n.btnDelete,onClick:()=>d(t),children:e.jsx("svg",{width:"20",height:"20",children:e.jsx("use",{href:`${p}#icon-trash`})})})]})]})]})," "]},t._id)):e.jsx("div",{className:n.containerError,children:e.jsx("span",{children:"Not found products"})})})};function Ce({products:s,selectedDate:l}){return e.jsxs("div",{className:y.dayProductsWrapper,children:[e.jsxs("div",{className:y.headerWrapper,children:[e.jsx("p",{className:y.title,children:"Products"}),e.jsx("div",{className:y.btnWrapper,children:e.jsxs("button",{className:y.addProductBtn,children:[e.jsxs(R,{className:y.link,to:"/products",children:["Add product"," "]}),e.jsx("svg",{width:"16",height:"16",children:e.jsx("use",{href:`${p}#icon-add-arrow`})})]})})]}),e.jsx(ke,{products:s,selectedDate:l})]})}const De="_dayExercisesWrapper_dak0w_1",Ee="_headerWrapper_dak0w_12",$e="_btnWrapper_dak0w_17",We="_title_dak0w_21",Le="_addExerciseBtn_dak0w_26",Re="_link_dak0w_39",Pe="_errNotFound_dak0w_57",w={dayExercisesWrapper:De,headerWrapper:Ee,btnWrapper:$e,title:We,addExerciseBtn:Le,link:Re,errNotFound:Pe},Ie="_wrapper_xaqov_1",Be="_wrapperListContainer_xaqov_43",qe="_wrapperList_xaqov_43",Te="_title_xaqov_59",Se="_text_xaqov_67",Fe="_flex_xaqov_80",ze="_btnDelete_xaqov_85",Ae="_wrapperBodyPart_xaqov_90",Me="_wrapperEquipment_xaqov_104",Ue="_wrapeerName_xaqov_118",Oe="_wrapperTarget_xaqov_133",Ge="_wrapperBurnedCalories_xaqov_147",Ve="_withTime_xaqov_168",Ye="_containerError_xaqov_185",i={wrapper:Ie,wrapperListContainer:Be,wrapperList:qe,title:Te,text:Se,flex:Fe,btnDelete:ze,wrapperBodyPart:Ae,wrapperEquipment:Me,wrapeerName:Ue,wrapperTarget:Oe,wrapperBurnedCalories:Ge,withTime:Ve,containerError:Ye};function He({exercises:s,selectedDate:l}){const[r,h]=m.useState(window.innerWidth),x=$();m.useEffect(()=>{const t=()=>{h(window.innerWidth)};return window.addEventListener("resize",t),()=>{window.removeEventListener("resize",t)}},[]);const d=t=>{x(L({date:l,credentials:{id:t._id}}))};return e.jsx("div",{className:i.wrapper,children:s.length!==0?s.map((t,c)=>e.jsx("div",{className:i.wrapperListContainer,children:e.jsxs("ul",{className:i.wrapperList,children:[e.jsxs("li",{className:i.wrapperBodyPart,children:[e.jsx("div",{className:i.title,style:{display:r>=768&&c>0?"none":"block"},children:"Body Part"}),e.jsx("div",{className:i.text,children:t.bodyPart.charAt(0).toUpperCase()+t.bodyPart.slice(1)})]}),e.jsxs("li",{className:i.wrapperEquipment,children:[e.jsx("div",{className:i.title,style:{display:r>=768&&c>0?"none":"block"},children:"Equipment"}),e.jsx("div",{className:i.text,children:t.equipment.charAt(0).toUpperCase()+t.equipment.slice(1)})]}),e.jsxs("li",{className:i.wrapeerName,children:[e.jsx("div",{className:i.title,style:{display:r>=768&&c>0?"none":"block"},children:"Name"}),e.jsx("div",{className:i.text,children:t.name.charAt(0).toUpperCase()+t.name.slice(1)})]}),e.jsxs("li",{className:i.wrapperTarget,children:[e.jsx("div",{className:i.title,style:{display:r>=768&&c>0?"none":"block"},children:"Target"}),e.jsx("div",{className:i.text,children:t.target.charAt(0).toUpperCase()+t.target.slice(1)})]}),e.jsxs("li",{className:i.wrapperBurnedCalories,children:[e.jsx("div",{className:i.title,style:{display:r>=768&&c>0?"none":"block"},children:"Burned Calories"}),e.jsx("div",{className:i.text,children:t.calories})]}),e.jsxs("li",{className:i.wrapperTime,children:[e.jsx("div",{className:i.title,style:{display:r>=768&&c>0?"none":"block"},children:"Time"}),e.jsxs("div",{className:i.flex,children:[e.jsx("div",{className:`${i.text} ${i.withTime}`,children:t.time}),e.jsx("button",{type:"button",className:i.btnDelete,onClick:()=>d(t),children:e.jsx("svg",{width:"20",height:"20",children:e.jsx("use",{href:`${p}#icon-trash`})})})]})]})]})},t._id)):e.jsx("div",{className:i.containerError,children:e.jsx("span",{children:"Not found products"})})})}function Je({exercises:s,selectedDate:l}){return e.jsxs("div",{className:w.dayExercisesWrapper,children:[e.jsxs("div",{className:w.headerWrapper,children:[e.jsx("p",{className:w.title,children:"Exercises"}),e.jsx("div",{className:w.btnWrapper,children:e.jsxs("button",{className:w.addExerciseBtn,children:[e.jsx(R,{className:w.link,to:"/exercises",children:"Add exercise"}),e.jsx("svg",{width:"16",height:"16",children:e.jsx("use",{href:`${p}#icon-add-arrow`})})]})})]}),e.jsx(He,{exercises:s,selectedDate:l})]})}const Ke="_container_lgox2_1",a={container:Ke,"user-daily":"_user-daily_lgox2_22","user-daily-items":"_user-daily-items_lgox2_27","user-daily-list":"_user-daily-list_lgox2_34","user-daily-text":"_user-daily-text_lgox2_85","user-daily-text-value":"_user-daily-text-value_lgox2_93","user-notification":"_user-notification_lgox2_120"};function Qe(){const{colories:s}=P(),{burnedCalories:l,consumedCalories:r}=E(),{doneExercises:h}=E(),{bmr:x,dailyExerciseTime:d}=s,t=Math.floor(x),c=h.reduce((u,v)=>u+v.time,0),_=Math.max(d-c,0),g=t-r;return e.jsxs("div",{children:[e.jsxs("ul",{className:a.container,children:[e.jsxs("li",{className:a["user-daily-items"],children:[e.jsxs("div",{className:a["user-daily"],children:[e.jsx("svg",{width:"20",height:"20",children:e.jsx("use",{href:`${p}#icon-fork-knife`})}),e.jsx("p",{className:a["user-daily-text"],children:"Daily calorie intake"})]}),e.jsx("p",{className:a["user-daily-text-value"],children:t||0})]}),e.jsxs("li",{className:a["user-daily-items"],children:[e.jsxs("div",{className:a["user-daily"],children:[e.jsx("svg",{width:"20",height:"20",children:e.jsx("use",{href:`${p}#icon-dumbbell`})}),e.jsx("p",{className:a["user-daily-text"],children:"Daily physical activity"})]}),e.jsxs("p",{className:a["user-daily-text-value"],children:[d||0," min"]})]}),e.jsxs("li",{className:a["user-daily-items"],children:[e.jsxs("div",{className:a["user-daily"],children:[e.jsx("svg",{width:"20",height:"20",children:e.jsx("use",{href:`${p}#icon-apple`})}),e.jsx("p",{className:a["user-daily-text"],children:"Сalories consumed"})]}),e.jsx("p",{className:a["user-daily-text-value"],children:r||0})]}),e.jsxs("li",{className:a["user-daily-items"],children:[e.jsxs("div",{className:a["user-daily"],children:[e.jsx("svg",{width:"20",height:"20",children:e.jsx("use",{href:`${p}#icon-calories`})}),e.jsx("p",{className:a["user-daily-text"],children:"Сalories burned"})]}),e.jsx("p",{className:a["user-daily-text-value"],children:l||0})]}),e.jsxs("li",{className:a["user-daily-items"],children:[e.jsxs("div",{className:a["user-daily"],children:[e.jsx("svg",{width:"20",height:"20",children:e.jsx("use",{href:`${p}#icon-bubble`})}),e.jsx("p",{className:a["user-daily-text"],children:"Calories remaining"})]}),e.jsx("p",{className:a["user-daily-text-value"],children:g||0})]}),e.jsxs("li",{className:a["user-daily-items"],children:[e.jsxs("div",{className:a["user-daily"],children:[e.jsx("svg",{width:"20",height:"20",children:e.jsx("use",{href:`${p}#icon-running-figure`})}),e.jsx("p",{className:a["user-daily-text"],children:"Sports remaining"})]}),e.jsxs("p",{className:a["user-daily-text-value"],children:[_||0," min"]})]})]}),e.jsxs("p",{className:a["user-notification"],children:[e.jsx("span",{children:e.jsx("svg",{width:"24",height:"24",children:e.jsx("use",{href:`${M}#icon-exclamation-mark`})})}),"Record all your meals in the calorie diary every day. This will help you be aware of your nutrition and make informed choices."]})]})}const Xe=H`
  .react-datepicker__tab-loop {
    position: absolute;
    left: 0;
    top: 0;
  }

  .react-datepicker__wrapper {
    position: fixed;
    z-index:9;
  }

  .react-datepicker {
    position: absolute;
    z-index:9;
    right: -180px;
    transform: translate(-1%, 0%);
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 307px;
    height: 334px;
    padding: 8px;
    background-color: #EF8964;
    border-radius: 16px;


    @media screen and (min-width: 768px) {
      right: -80px;
    }
  }
  .react-datepicker__month-container {
    float: inherit;
    box-sizing: border-box;
  }
  .react-datepicker__header {
    position: relative;
    background-color: #EF8964;
  }
  .react-datepicker__day-names {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 8px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.4);
  }
  .react-datepicker__header:not(.react-datepicker__header--has-time-select) {
    border-bottom: 0px;
    padding: 0;
  }
  .react-datepicker__day react-datepicker__day--018.react-datepicker__day--selected react-datepicker__day--today{
    outline: none;
    border: none;
}
  .react-datepicker__current-month {
    // font-family: Inter;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px;
    text-align: center;
    color: white;
  }
  .react-datepicker__day-name {
    margin: 0;
   padding: 8px 8px;
    // font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 18px;
    text-align: center;
    color: white;
    
  }
  .react-datepicker__navigation {

    margin-top: 24px;
    color: #EFEDE8;

    cursor: pointer;

  }
  .react-datepicker__navigation--previous {
    left: 20px;
    width: 18px;
    height: 18px;
  }
  .react-datepicker__navigation--next {
    right: 20px;
    width: 18px;
    height: 18px;
  }
  .react-datepicker__navigation-icon::before:hover:focus {
    border-color: white;
  }
  .react-datepicker__week {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: white;

    cursor: pointer;

  }
  .react-datepicker__day {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 8px;
    flex-shrink: 0;
    margin: 0;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    color: white;
    // font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px;
    text-align: center;

    cursor: pointer;

    
  }
  .react-datepicker__month {
    display: flex;
    gap: 7px;
    flex-direction: column;
    justify-content: space-between;
    padding-top: 16px;
    margin: 0;

    cursor: pointer;

  }
  .react-datepicker__day--selected {
    background-color:white;
    color:#EF8964;
    font-size: 14px;

    cursor: pointer;

  }
  .react-datepicker__day--selected:hover {
    border-radius: 50%;
  background-color:white;

    cursor: pointer;

  }
  .react-datepicker__day:hover {
    border-radius: 50%;
    background-color:white;
    color:#EF8964;


  }
  .react-datepicker__day--keyboard-selected {
    border-radius: 50%;
    background-color:white;
    color:#EF8964;

    cursor: pointer;

  }
  .react-datepicker__day--weekend {
    opacity: 50%;

    cursor: pointer;

  }
.react-datepicker__day--outside-month {
    background-color: transparent;
    pointer-events: none;
    opacity: 0;
  }
  .react-datepicker__view-calendar-icon input {
    padding: 6px 10px 5px 13px;
  }
  .react-datepicker__triangle {
    visibility: hidden;
  }
`,Ze="_container_1sx8w_1",et="_svg_1sx8w_6",tt="_txt_1sx8w_12",C={container:Ze,svg:et,txt:tt},st=({selectedDate:s,onChange:l,minDate:r,maxDate:h})=>{const x=m.forwardRef(({onClick:d},t)=>e.jsxs("div",{onClick:d,ref:t,className:C.container,children:[e.jsx("div",{className:C.txt,children:U(s,"dd/MM/yyyy")}),e.jsx("div",{children:e.jsx("svg",{className:C.svg,children:e.jsx("use",{href:`${p}#icon-calendar-bage`})})})]}));return e.jsxs(e.Fragment,{children:[e.jsx(O,{selected:s,onChange:l,customInput:e.jsx(x,{}),minDate:r,maxDate:h,dateFormat:"dd MM yyyy",calendarStartDay:1}),e.jsx(Xe,{})]})},rt="_input_nkglg_1",at="_arrowLeft_nkglg_8",it="_arrowRight_nkglg_17",nt="_box_nkglg_21",ct="_opacity_nkglg_27",D={input:rt,arrowLeft:at,arrowRight:it,box:nt,opacity:ct},ot=({minDate:s,maxDate:l,selectedDate:r,setSelectedDate:h,handleToNextDay:x,handleToPreviousDay:d,additionalIconClass:t})=>{const c=t==="opacity-left",_=t==="opacity-right";return e.jsxs("div",{className:D.box,children:[e.jsx(st,{minDate:s,maxDate:l,selectedDate:r,onChange:h}),e.jsxs("div",{children:[e.jsx("button",{type:"button",className:D.arrowLeft,onClick:d,style:c?{opacity:.2}:null,children:e.jsx("svg",{width:"16",height:"16",children:e.jsx("use",{href:`${p}#icon-chevron-left`})})}),e.jsx("button",{type:"button",onClick:x,className:D.arrowRight,style:_?{opacity:.2}:null,children:e.jsx("svg",{width:"16",height:"16",children:e.jsx("use",{href:`${p}#icon-chevron-right`})})})]})]})},lt="_container_166rm_1",dt="_titleCont_166rm_18",pt="_itemsCont_166rm_25",b={container:lt,titleCont:dt,itemsCont:pt};function yt(){const s=F(),{date:l}=z(),r=$(),{user:h}=P(),[x,d]=m.useState("opacity-right"),t=o=>o.toLocaleDateString("en-GB",{day:"2-digit",month:"2-digit",year:"numeric"}).replace(/\//g,"-");m.useEffect(()=>{r(k(l))},[r,l]);const c=new Date,_=t(c),[g,u]=m.useState(new Date),v=W(G(h.birthday)),{doneExercises:I,consumedProducts:B}=E();m.useEffect(()=>{r(k(_)),s(`/diary/${_}`)},[r,_]),m.useEffect(()=>{r(A())},[r]);const N=o=>{const j=t(o);s(`/diary/${j}`),r(k(j))},q=()=>{const o=V(g,1);if(o<v){d("opacity-left");return}d(""),u(o),N(o)},T=()=>{const o=Y(g,1),j=W(new Date);if(o.getDate()===j.getDate()){d("opacity-right"),u(o),N(o);return}o>j||(d(""),u(o),N(o))},S=o=>{u(o),N(o)};return e.jsxs("div",{className:`${b.backGround} layoutContainer`,children:[e.jsxs("div",{className:b.titleCont,children:[e.jsx(te,{title:"Diary"}),e.jsx(ot,{minDate:v,maxDate:c,selectedDate:g,setSelectedDate:S,handleToNextDay:T,handleToPreviousDay:q,additionalIconClass:x})]}),e.jsxs("div",{className:b.container,children:[e.jsxs("div",{className:b.itemsCont,children:[e.jsx(Ce,{products:B,selectedDate:_}),e.jsx(Je,{exercises:I,selectedDate:_})]}),e.jsx(Qe,{})]})]})}export{yt as default};
