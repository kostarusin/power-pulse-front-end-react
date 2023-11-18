import{j as e,r as m,u as E,s as p,d as W,N as L,a as R,b as S,c as F,g as b,e as z,f as A}from"./index-604a4f1b.js";import{u as D}from"./useDiary-c3ccef54.js";import{i as U}from"./emotion-unitless.esm-4496b9d7.js";import{f as M,t as O,s as $,p as G,a as V,b as Y}from"./index-dc87f2a2.js";import{a as H}from"./styled-components.browser.esm-4825ba12.js";import"./createClass-07f98cd0.js";const J="_titleContainer_1plm8_1",K={titleContainer:J};function Q({title:n}){return e.jsxs("h1",{className:K.titleContainer,children:[n," "]})}const X="_dayProductsWrapper_4dxam_1",Z="_headerWrapper_4dxam_13",ee="_btnWrapper_4dxam_18",te="_title_4dxam_22",re="_addProductBtn_4dxam_27",se="_link_4dxam_39",ae="_errNotFound_4dxam_58",y={dayProductsWrapper:X,headerWrapper:Z,btnWrapper:ee,title:te,addProductBtn:re,link:se,errNotFound:ae},ie="_wrapper_172vl_1",ne="_btnDelete_172vl_42",ce="_wrapperListContainer_172vl_51",oe="_wrapperList_172vl_51",le="_title_172vl_68",de="_text_172vl_76",pe="_textRecommend_172vl_86",he="_wrapperRecommendContainer_172vl_92",xe="_wrapperRecommend_172vl_92",me="_wrapperItemTitle_172vl_116",_e="_wrapperItemCategory_172vl_130",ue="_wrapperItemCalories_172vl_144",ye="_wrapperItemWeigth_172vl_158",we="_flex_172vl_172",ge="_containerError_172vl_187",je="_circle_172vl_202",i={wrapper:ie,btnDelete:ne,wrapperListContainer:ce,wrapperList:oe,title:le,text:de,textRecommend:pe,wrapperRecommendContainer:he,wrapperRecommend:xe,wrapperItemTitle:me,wrapperItemCategory:_e,wrapperItemCalories:ue,wrapperItemWeigth:ye,flex:we,containerError:ge,circle:je},ve=({products:n,selectedDate:l})=>{const[r,h]=m.useState(window.innerWidth),x=E();m.useEffect(()=>{const t=()=>{h(window.innerWidth)};return window.addEventListener("resize",t),()=>{window.removeEventListener("resize",t)}},[]);const d=t=>{x(W({date:l,credentials:{id:t._id}}))};return e.jsx("div",{className:i.wrapper,children:n.length!==0?n.map((t,c)=>e.jsxs("div",{className:i.wrapperListContainer,children:[e.jsxs("ul",{className:i.wrapperList,children:[e.jsxs("li",{className:i.wrapperItemTitle,children:[e.jsx("div",{className:i.title,style:{display:r>=768&&c>0?"none":"block"},children:"Title"}),e.jsx("div",{className:i.text,children:t.title})]}),e.jsxs("li",{className:i.wrapperItemCategory,children:[e.jsx("div",{className:i.title,style:{display:r>=768&&c>0?"none":"block"},children:"Category"}),e.jsx("div",{className:i.text,children:t.category.charAt(0).toUpperCase()+t.category.slice(1)})]}),e.jsxs("li",{className:i.wrapperItemCalories,children:[e.jsx("div",{className:i.title,style:{display:r>=768&&c>0?"none":"block"},children:"Calories"}),e.jsx("div",{className:i.text,children:t.calories})]}),e.jsxs("li",{className:i.wrapperItemWeigth,children:[e.jsx("div",{className:i.title,style:{display:r>=768&&c>0?"none":"block"},children:"Weight"}),e.jsx("div",{className:i.text,children:t.amount})]}),e.jsxs("li",{className:i.wrapperItemRecommend,children:[e.jsx("div",{className:i.title,style:{display:r>=768&&c>0?"none":"block"},children:"Recommend"}),e.jsxs("div",{className:i.wrapperRecommendContainer,children:[e.jsxs("div",{className:i.wrapperRecommend,children:[e.jsx("div",{className:i.circle,style:{backgroundColor:t.groupBloodNotAllowed?"green":"red"}}),e.jsx("div",{className:i.textRecommend,children:t.groupBloodNotAllowed?"Yes":"No"})]}),e.jsx("button",{type:"button",className:i.btnDelete,onClick:()=>d(t),children:e.jsx("svg",{width:"20",height:"20",children:e.jsx("use",{href:`${p}#icon-trash`})})})]})]})]})," "]},t._id)):e.jsx("div",{className:i.containerError,children:e.jsx("span",{children:"Not found products"})})})};function Ne({products:n,selectedDate:l}){return e.jsxs("div",{className:y.dayProductsWrapper,children:[e.jsxs("div",{className:y.headerWrapper,children:[e.jsx("p",{className:y.title,children:"Products"}),e.jsx("div",{className:y.btnWrapper,children:e.jsxs("button",{className:y.addProductBtn,children:[e.jsxs(L,{className:y.link,to:"/products",children:["Add product"," "]}),e.jsx("svg",{width:"16",height:"16",children:e.jsx("use",{href:`${p}#icon-add-arrow`})})]})})]}),e.jsx(ve,{products:n,selectedDate:l})]})}const fe="_dayExercisesWrapper_dak0w_1",be="_headerWrapper_dak0w_12",ke="_btnWrapper_dak0w_17",Ce="_title_dak0w_21",De="_addExerciseBtn_dak0w_26",Ee="_link_dak0w_39",$e="_errNotFound_dak0w_57",w={dayExercisesWrapper:fe,headerWrapper:be,btnWrapper:ke,title:Ce,addExerciseBtn:De,link:Ee,errNotFound:$e},We="_wrapper_xaqov_1",Le="_wrapperListContainer_xaqov_43",Re="_wrapperList_xaqov_43",Ie="_title_xaqov_59",Pe="_text_xaqov_67",qe="_flex_xaqov_80",Be="_btnDelete_xaqov_85",Te="_wrapperBodyPart_xaqov_90",Se="_wrapperEquipment_xaqov_104",Fe="_wrapeerName_xaqov_118",ze="_wrapperTarget_xaqov_133",Ae="_wrapperBurnedCalories_xaqov_147",Ue="_withTime_xaqov_168",Me="_containerError_xaqov_185",a={wrapper:We,wrapperListContainer:Le,wrapperList:Re,title:Ie,text:Pe,flex:qe,btnDelete:Be,wrapperBodyPart:Te,wrapperEquipment:Se,wrapeerName:Fe,wrapperTarget:ze,wrapperBurnedCalories:Ae,withTime:Ue,containerError:Me};function Oe({exercises:n,selectedDate:l}){const[r,h]=m.useState(window.innerWidth),x=E();m.useEffect(()=>{const t=()=>{h(window.innerWidth)};return window.addEventListener("resize",t),()=>{window.removeEventListener("resize",t)}},[]);const d=t=>{x(W({date:l,credentials:{id:t._id}}))};return e.jsx("div",{className:a.wrapper,children:n.length!==0?n.map((t,c)=>e.jsx("div",{className:a.wrapperListContainer,children:e.jsxs("ul",{className:a.wrapperList,children:[e.jsxs("li",{className:a.wrapperBodyPart,children:[e.jsx("div",{className:a.title,style:{display:r>=768&&c>0?"none":"block"},children:"Body Part"}),e.jsx("div",{className:a.text,children:t.bodyPart.charAt(0).toUpperCase()+t.bodyPart.slice(1)})]}),e.jsxs("li",{className:a.wrapperEquipment,children:[e.jsx("div",{className:a.title,style:{display:r>=768&&c>0?"none":"block"},children:"Equipment"}),e.jsx("div",{className:a.text,children:t.equipment.charAt(0).toUpperCase()+t.equipment.slice(1)})]}),e.jsxs("li",{className:a.wrapeerName,children:[e.jsx("div",{className:a.title,style:{display:r>=768&&c>0?"none":"block"},children:"Name"}),e.jsx("div",{className:a.text,children:t.name.charAt(0).toUpperCase()+t.name.slice(1)})]}),e.jsxs("li",{className:a.wrapperTarget,children:[e.jsx("div",{className:a.title,style:{display:r>=768&&c>0?"none":"block"},children:"Target"}),e.jsx("div",{className:a.text,children:t.target.charAt(0).toUpperCase()+t.target.slice(1)})]}),e.jsxs("li",{className:a.wrapperBurnedCalories,children:[e.jsx("div",{className:a.title,style:{display:r>=768&&c>0?"none":"block"},children:"Burned Calories"}),e.jsx("div",{className:a.text,children:t.calories})]}),e.jsxs("li",{className:a.wrapperTime,children:[e.jsx("div",{className:a.title,style:{display:r>=768&&c>0?"none":"block"},children:"Time"}),e.jsxs("div",{className:a.flex,children:[e.jsx("div",{className:`${a.text} ${a.withTime}`,children:t.time}),e.jsx("button",{type:"button",className:a.btnDelete,onClick:()=>d(t),children:e.jsx("svg",{width:"20",height:"20",children:e.jsx("use",{href:`${p}#icon-trash`})})})]})]})]})},t._id)):e.jsx("div",{className:a.containerError,children:e.jsx("span",{children:"Not found products"})})})}function Ge({exercises:n,selectedDate:l}){return e.jsxs("div",{className:w.dayExercisesWrapper,children:[e.jsxs("div",{className:w.headerWrapper,children:[e.jsx("p",{className:w.title,children:"Exercises"}),e.jsx("div",{className:w.btnWrapper,children:e.jsxs("button",{className:w.addExerciseBtn,children:[e.jsx(L,{className:w.link,to:"/exercises",children:"Add exercise"}),e.jsx("svg",{width:"16",height:"16",children:e.jsx("use",{href:`${p}#icon-add-arrow`})})]})})]}),e.jsx(Oe,{exercises:n,selectedDate:l})]})}const Ve="_container_lgox2_1",s={container:Ve,"user-daily":"_user-daily_lgox2_22","user-daily-items":"_user-daily-items_lgox2_27","user-daily-list":"_user-daily-list_lgox2_34","user-daily-text":"_user-daily-text_lgox2_85","user-daily-text-value":"_user-daily-text-value_lgox2_93","user-notification":"_user-notification_lgox2_120"};function Ye(){const{colories:n}=R(),{burnedCalories:l,consumedCalories:r}=D(),{doneExercises:h}=D(),{bmr:x,dailyExerciseTime:d}=n,t=Math.floor(x),c=h.reduce((u,v)=>u+v.time,0),_=Math.max(d-c,0),g=t-r;return e.jsxs("div",{children:[e.jsxs("ul",{className:s.container,children:[e.jsxs("li",{className:s["user-daily-items"],children:[e.jsxs("div",{className:s["user-daily"],children:[e.jsx("svg",{width:"20",height:"20",children:e.jsx("use",{href:`${p}#icon-fork-knife`})}),e.jsx("p",{className:s["user-daily-text"],children:"Daily calorie intake"})]}),e.jsx("p",{className:s["user-daily-text-value"],children:t||0})]}),e.jsxs("li",{className:s["user-daily-items"],children:[e.jsxs("div",{className:s["user-daily"],children:[e.jsx("svg",{width:"20",height:"20",children:e.jsx("use",{href:`${p}#icon-dumbbell`})}),e.jsx("p",{className:s["user-daily-text"],children:"Daily physical activity"})]}),e.jsxs("p",{className:s["user-daily-text-value"],children:[d||0," min"]})]}),e.jsxs("li",{className:s["user-daily-items"],children:[e.jsxs("div",{className:s["user-daily"],children:[e.jsx("svg",{width:"20",height:"20",children:e.jsx("use",{href:`${p}#icon-apple`})}),e.jsx("p",{className:s["user-daily-text"],children:"Сalories consumed"})]}),e.jsx("p",{className:s["user-daily-text-value"],children:r||0})]}),e.jsxs("li",{className:s["user-daily-items"],children:[e.jsxs("div",{className:s["user-daily"],children:[e.jsx("svg",{width:"20",height:"20",children:e.jsx("use",{href:`${p}#icon-calories`})}),e.jsx("p",{className:s["user-daily-text"],children:"Сalories burned"})]}),e.jsx("p",{className:s["user-daily-text-value"],children:l||0})]}),e.jsxs("li",{className:s["user-daily-items"],children:[e.jsxs("div",{className:s["user-daily"],children:[e.jsx("svg",{width:"20",height:"20",children:e.jsx("use",{href:`${p}#icon-bubble`})}),e.jsx("p",{className:s["user-daily-text"],children:"Calories remaining"})]}),e.jsx("p",{className:s["user-daily-text-value"],children:g||0})]}),e.jsxs("li",{className:s["user-daily-items"],children:[e.jsxs("div",{className:s["user-daily"],children:[e.jsx("svg",{width:"20",height:"20",children:e.jsx("use",{href:`${p}#icon-running-figure`})}),e.jsx("p",{className:s["user-daily-text"],children:"Sports remaining"})]}),e.jsxs("p",{className:s["user-daily-text-value"],children:[_||0," min"]})]})]}),e.jsxs("p",{className:s["user-notification"],children:[e.jsx("span",{children:e.jsx("svg",{width:"24",height:"24",children:e.jsx("use",{href:`${U}#icon-exclamation-mark`})})}),"Record all your meals in the calorie diary every day. This will help you be aware of your nutrition and make informed choices."]})]})}const He=H`
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
`,Je="_container_1sx8w_1",Ke="_svg_1sx8w_6",Qe="_txt_1sx8w_12",k={container:Je,svg:Ke,txt:Qe},Xe=({selectedDate:n,onChange:l,minDate:r,maxDate:h})=>{const x=m.forwardRef(({onClick:d},t)=>e.jsxs("div",{onClick:d,ref:t,className:k.container,children:[e.jsx("div",{className:k.txt,children:M(n,"dd/MM/yyyy")}),e.jsx("div",{children:e.jsx("svg",{className:k.svg,children:e.jsx("use",{href:`${p}#icon-calendar-bage`})})})]}));return e.jsxs(e.Fragment,{children:[e.jsx(O,{selected:n,onChange:l,customInput:e.jsx(x,{}),minDate:r,maxDate:h,dateFormat:"dd MM yyyy",calendarStartDay:1}),e.jsx(He,{})]})},Ze="_input_nkglg_1",et="_arrowLeft_nkglg_8",tt="_arrowRight_nkglg_17",rt="_box_nkglg_21",st="_opacity_nkglg_27",C={input:Ze,arrowLeft:et,arrowRight:tt,box:rt,opacity:st},at=({minDate:n,maxDate:l,selectedDate:r,setSelectedDate:h,handleToNextDay:x,handleToPreviousDay:d,additionalIconClass:t})=>{const c=t==="opacity-left",_=t==="opacity-right";return e.jsxs("div",{className:C.box,children:[e.jsx(Xe,{minDate:n,maxDate:l,selectedDate:r,onChange:h}),e.jsxs("div",{children:[e.jsx("button",{type:"button",className:C.arrowLeft,onClick:d,style:c?{opacity:.2}:null,children:e.jsx("svg",{width:"16",height:"16",children:e.jsx("use",{href:`${p}#icon-chevron-left`})})}),e.jsx("button",{type:"button",onClick:x,className:C.arrowRight,style:_?{opacity:.2}:null,children:e.jsx("svg",{width:"16",height:"16",children:e.jsx("use",{href:`${p}#icon-chevron-right`})})})]})]})},it="_container_166rm_1",nt="_titleCont_166rm_18",ct="_itemsCont_166rm_25",f={container:it,titleCont:nt,itemsCont:ct};function mt(){const n=S(),{date:l}=F(),r=E(),{user:h}=R(),[x,d]=m.useState("opacity-right"),t=o=>o.toLocaleDateString("en-GB",{day:"2-digit",month:"2-digit",year:"numeric"}).replace(/\//g,"-");m.useEffect(()=>{r(b(l)),r(z())},[r,l]);const c=new Date,_=t(c),[g,u]=m.useState(new Date),v=$(G(h.birthday)),{doneExercises:I,consumedProducts:P}=D();m.useEffect(()=>{r(b(_)),n(`/diary/${_}`)},[r,_]),m.useEffect(()=>{r(A())},[r]);const N=o=>{const j=t(o);n(`/diary/${j}`),r(b(j))},q=()=>{const o=V(g,1);if(o<v){d("opacity-left");return}d(""),u(o),N(o)},B=()=>{const o=Y(g,1),j=$(new Date);if(o.getDate()===j.getDate()){d("opacity-right"),u(o),N(o);return}o>j||(d(""),u(o),N(o))},T=o=>{u(o),N(o)};return e.jsxs("div",{className:`${f.backGround} layoutContainer`,children:[e.jsxs("div",{className:f.titleCont,children:[e.jsx(Q,{title:"Diary"}),e.jsx(at,{minDate:v,maxDate:c,selectedDate:g,setSelectedDate:T,handleToNextDay:B,handleToPreviousDay:q,additionalIconClass:x})]}),e.jsxs("div",{className:f.container,children:[e.jsxs("div",{className:f.itemsCont,children:[e.jsx(Ne,{products:P,selectedDate:_}),e.jsx(Ge,{exercises:I,selectedDate:_})]}),e.jsx(Ye,{})]})]})}export{mt as default};
