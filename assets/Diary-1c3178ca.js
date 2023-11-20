import{j as e,r as x,u as T,s as m,d as F,N as S,a as z,b as U,c as G,e as V,f as Y,g as W,h as H}from"./index-7253cd8f.js";import{u as C}from"./useDiary-75eaf9ba.js";import{i as J}from"./emotion-unitless.esm-d410da78.js";import{f as K,t as Q,p as P,s as L,a as R,b as X,c as Z}from"./index-37dba5bd.js";import{a as ee}from"./styled-components.browser.esm-980c4db5.js";import"./createClass-f3bd1084.js";const te="_titleContainer_1plm8_1",se={titleContainer:te};function re({title:a}){return e.jsxs("h1",{className:se.titleContainer,children:[a," "]})}const ae="_dayProductsWrapper_1dpun_1",ie="_headerWrapper_1dpun_13",ne="_btnWrapper_1dpun_18",ce="_title_1dpun_22",oe="_addProductBtn_1dpun_27",le="_link_1dpun_39",de="_svg_1dpun_48",pe="_errNotFound_1dpun_67",j={dayProductsWrapper:ae,headerWrapper:ie,btnWrapper:ne,title:ce,addProductBtn:oe,link:le,svg:de,errNotFound:pe},he="_wrapper_4d0yb_1",me="_btnDelete_4d0yb_42",xe="_wrapperListContainer_4d0yb_50",_e="_wrapperList_4d0yb_50",ue="_title_4d0yb_72",ye="_text_4d0yb_80",ge="_textRecommend_4d0yb_93",we="_wrapperRecommendContainer_4d0yb_99",je="_wrapperRecommend_4d0yb_99",fe="_wrapperItemTitle_4d0yb_123",ve="_wrapperItemCategory_4d0yb_138",Ne="_wrapperItemCalories_4d0yb_152",be="_wrapperItemWeigth_4d0yb_166",ke="_flex_4d0yb_180",Ce="_containerError_4d0yb_195",De="_circle_4d0yb_210",i={wrapper:he,btnDelete:me,wrapperListContainer:xe,wrapperList:_e,title:ue,text:ye,textRecommend:ge,wrapperRecommendContainer:we,wrapperRecommend:je,wrapperItemTitle:fe,wrapperItemCategory:ve,wrapperItemCalories:Ne,wrapperItemWeigth:be,flex:ke,containerError:Ce,circle:De},Ee=({products:a})=>{const[n,l]=x.useState(window.innerWidth),{date:d}=C(),h=T();x.useEffect(()=>{const t=()=>{l(window.innerWidth)};return window.addEventListener("resize",t),()=>{window.removeEventListener("resize",t)}},[]);const _=t=>{h(F({date:d,credentials:{id:t._id}}))},p=t=>t.charAt(0).toUpperCase()+t.slice(1);return e.jsx("div",{className:i.wrapper,children:a.length!==0?a.map((t,o)=>e.jsxs("div",{className:i.wrapperListContainer,children:[e.jsxs("ul",{className:i.wrapperList,children:[e.jsxs("li",{className:i.wrapperItemTitle,children:[e.jsx("div",{className:i.title,style:{display:n>=768&&o>0?"none":"block"},children:"Title"}),e.jsx("div",{className:i.text,children:p(t.title)})]}),e.jsxs("li",{className:i.wrapperItemCategory,children:[e.jsx("div",{className:i.title,style:{display:n>=768&&o>0?"none":"block"},children:"Category"}),e.jsx("div",{className:i.text,children:p(t.category)})]}),e.jsxs("li",{className:i.wrapperItemCalories,children:[e.jsx("div",{className:i.title,style:{display:n>=768&&o>0?"none":"block"},children:"Calories"}),e.jsx("div",{className:i.text,children:t.calories})]}),e.jsxs("li",{className:i.wrapperItemWeigth,children:[e.jsx("div",{className:i.title,style:{display:n>=768&&o>0?"none":"block"},children:"Weight"}),e.jsx("div",{className:i.text,children:t.amount})]}),e.jsxs("li",{className:i.wrapperItemRecommend,children:[e.jsx("div",{className:i.title,style:{display:n>=768&&o>0?"none":"block"},children:"Recommend"}),e.jsxs("div",{className:i.wrapperRecommendContainer,children:[e.jsxs("div",{className:i.wrapperRecommend,children:[e.jsx("div",{className:i.circle,style:{backgroundColor:t.groupBloodNotAllowed?"green":"red"}}),e.jsx("div",{className:i.textRecommend,children:t.groupBloodNotAllowed?"Yes":"No"})]}),e.jsx("button",{type:"button",className:i.btnDelete,onClick:()=>_(t),children:e.jsx("svg",{width:"20",height:"20",children:e.jsx("use",{href:`${m}#icon-trash`})})})]})]})]})," "]},t._id)):e.jsx("div",{className:i.containerError,children:e.jsx("span",{children:"Not found products"})})})};function $e({products:a,location:n}){return e.jsxs("div",{className:j.dayProductsWrapper,children:[e.jsxs("div",{className:j.headerWrapper,children:[e.jsx("p",{className:j.title,children:"Products"}),e.jsx("div",{className:j.btnWrapper,children:e.jsxs("button",{className:j.addProductBtn,children:[e.jsxs(S,{className:j.link,state:{from:n},to:"/products",children:["Add product"," "]}),e.jsx("svg",{width:"16",height:"16",className:j.svg,children:e.jsx("use",{href:`${m}#icon-add-arrow`})})]})})]}),e.jsx(Ee,{products:a})]})}const We="_dayExercisesWrapper_t5t6c_1",Le="_headerWrapper_t5t6c_12",Re="_btnWrapper_t5t6c_17",Ie="_title_t5t6c_21",Te="_addExerciseBtn_t5t6c_26",Be="_svg_t5t6c_38",Pe="_link_t5t6c_43",Fe="_errNotFound_t5t6c_66",f={dayExercisesWrapper:We,headerWrapper:Le,btnWrapper:Re,title:Ie,addExerciseBtn:Te,svg:Be,link:Pe,errNotFound:Fe},Se="_wrapper_1d022_1",ze="_wrapperListContainer_1d022_43",Ae="_wrapperList_1d022_43",Me="_title_1d022_64",qe="_text_1d022_72",Oe="_flex_1d022_85",Ue="_btnDelete_1d022_90",Ge="_wrapperBodyPart_1d022_95",Ve="_wrapperEquipment_1d022_109",Ye="_wrapeerName_1d022_123",He="_wrapperTarget_1d022_138",Je="_wrapperBurnedCalories_1d022_152",Ke="_withTime_1d022_173",Qe="_containerError_1d022_190",r={wrapper:Se,wrapperListContainer:ze,wrapperList:Ae,title:Me,text:qe,flex:Oe,btnDelete:Ue,wrapperBodyPart:Ge,wrapperEquipment:Ve,wrapeerName:Ye,wrapperTarget:He,wrapperBurnedCalories:Je,withTime:Ke,containerError:Qe};function Xe({exercises:a}){const[n,l]=x.useState(window.innerWidth),{date:d}=C(),h=T();x.useEffect(()=>{const t=()=>{l(window.innerWidth)};return window.addEventListener("resize",t),()=>{window.removeEventListener("resize",t)}},[]);const _=t=>{h(F({date:d,credentials:{id:t._id}}))},p=t=>t.charAt(0).toUpperCase()+t.slice(1);return e.jsx("div",{className:r.wrapper,children:a.length!==0?a.map((t,o)=>e.jsx("div",{className:r.wrapperListContainer,children:e.jsxs("ul",{className:r.wrapperList,children:[e.jsxs("li",{className:r.wrapperBodyPart,children:[e.jsx("div",{className:r.title,style:{display:n>=768&&o>0?"none":"block"},children:"Body Part"}),e.jsx("div",{className:r.text,children:p(t.bodyPart)})]}),e.jsxs("li",{className:r.wrapperEquipment,children:[e.jsx("div",{className:r.title,style:{display:n>=768&&o>0?"none":"block"},children:"Equipment"}),e.jsx("div",{className:r.text,children:p(t.equipment)})]}),e.jsxs("li",{className:r.wrapeerName,children:[e.jsx("div",{className:r.title,style:{display:n>=768&&o>0?"none":"block"},children:"Name"}),e.jsx("div",{className:r.text,children:p(t.name)})]}),e.jsxs("li",{className:r.wrapperTarget,children:[e.jsx("div",{className:r.title,style:{display:n>=768&&o>0?"none":"block"},children:"Target"}),e.jsx("div",{className:r.text,children:p(t.target)})]}),e.jsxs("li",{className:r.wrapperBurnedCalories,children:[e.jsx("div",{className:r.title,style:{display:n>=768&&o>0?"none":"block"},children:"Burned Calories"}),e.jsx("div",{className:r.text,children:t.calories})]}),e.jsxs("li",{className:r.wrapperTime,children:[e.jsx("div",{className:r.title,style:{display:n>=768&&o>0?"none":"block"},children:"Time"}),e.jsxs("div",{className:r.flex,children:[e.jsx("div",{className:`${r.text} ${r.withTime}`,children:t.time}),e.jsx("button",{type:"button",className:r.btnDelete,onClick:()=>_(t),children:e.jsx("svg",{width:"20",height:"20",children:e.jsx("use",{href:`${m}#icon-trash`})})})]})]})]})},t._id)):e.jsx("div",{className:r.containerError,children:e.jsx("span",{children:"Not found products"})})})}function Ze({exercises:a}){return e.jsxs("div",{className:f.dayExercisesWrapper,children:[e.jsxs("div",{className:f.headerWrapper,children:[e.jsx("p",{className:f.title,children:"Exercises"}),e.jsx("div",{className:f.btnWrapper,children:e.jsxs("button",{className:f.addExerciseBtn,children:[e.jsx(S,{className:f.link,to:"/exercises",children:"Add exercise"}),e.jsx("svg",{width:"16",height:"16",className:f.svg,children:e.jsx("use",{href:`${m}#icon-add-arrow`})})]})})]}),e.jsx(Xe,{exercises:a})]})}const et="_container_lgox2_1",s={container:et,"user-daily":"_user-daily_lgox2_22","user-daily-items":"_user-daily-items_lgox2_27","user-daily-list":"_user-daily-list_lgox2_34","user-daily-text":"_user-daily-text_lgox2_85","user-daily-text-value":"_user-daily-text-value_lgox2_93","user-notification":"_user-notification_lgox2_120"};function tt(){const{colories:a}=z(),{burnedCalories:n,consumedCalories:l}=C(),{doneExercises:d}=C(),{bmr:h,dailyExerciseTime:_}=a,[p,t]=x.useState(""),[o,v]=x.useState(""),N=Math.floor(h),g=d.reduce((w,$)=>w+$.time,0),y=_-g;let D;y<0&&(D=`+${Math.abs(y)}`);const b=N-l;return x.useEffect(()=>{b<=0?t("red"):t(""),y<=0?v("green"):v("")},[b,y]),e.jsxs("div",{children:[e.jsxs("ul",{className:s.container,children:[e.jsxs("li",{className:s["user-daily-items"],children:[e.jsxs("div",{className:s["user-daily"],children:[e.jsx("svg",{width:"20",height:"20",children:e.jsx("use",{href:`${m}#icon-fork-knife`})}),e.jsx("p",{className:s["user-daily-text"],children:"Daily calorie intake"})]}),e.jsx("p",{className:s["user-daily-text-value"],children:N||0})]}),e.jsxs("li",{className:s["user-daily-items"],children:[e.jsxs("div",{className:s["user-daily"],children:[e.jsx("svg",{width:"20",height:"20",children:e.jsx("use",{href:`${m}#icon-dumbbell`})}),e.jsx("p",{className:s["user-daily-text"],children:"Daily physical activity"})]}),e.jsxs("p",{className:s["user-daily-text-value"],children:[_||0," min"]})]}),e.jsxs("li",{className:s["user-daily-items"],children:[e.jsxs("div",{className:s["user-daily"],children:[e.jsx("svg",{width:"20",height:"20",children:e.jsx("use",{href:`${m}#icon-apple`})}),e.jsx("p",{className:s["user-daily-text"],children:"Сalories consumed"})]}),e.jsx("p",{className:s["user-daily-text-value"],children:Math.floor(l)||0})]}),e.jsxs("li",{className:s["user-daily-items"],children:[e.jsxs("div",{className:s["user-daily"],children:[e.jsx("svg",{width:"20",height:"20",children:e.jsx("use",{href:`${m}#icon-calories`})}),e.jsx("p",{className:s["user-daily-text"],children:"Сalories burned"})]}),e.jsx("p",{className:s["user-daily-text-value"],children:n||0})]}),e.jsxs("li",{className:s["user-daily-items"],style:p==="red"?{border:"1px solid #e6533c"}:null,children:[e.jsxs("div",{className:s["user-daily"],children:[e.jsx("svg",{width:"20",height:"20",children:e.jsx("use",{href:`${m}#icon-bubble`})}),e.jsx("p",{className:s["user-daily-text"],children:"Calories remaining"})]}),e.jsx("p",{className:s["user-daily-text-value"],children:Math.floor(b)||0})]}),e.jsxs("li",{className:s["user-daily-items"],style:o==="green"?{border:"1px solid #3CBF61"}:null,children:[e.jsxs("div",{className:s["user-daily"],children:[e.jsx("svg",{width:"20",height:"20",children:e.jsx("use",{href:`${m}#icon-running-figure`})}),e.jsx("p",{className:s["user-daily-text"],children:"Sports remaining"})]}),e.jsx("p",{className:s["user-daily-text-value"],children:y<0?D+" min":y+" min"})]})]}),e.jsxs("p",{className:s["user-notification"],children:[e.jsx("span",{children:e.jsx("svg",{width:"24",height:"24",children:e.jsx("use",{href:`${J}#icon-exclamation-mark`})})}),"Record all your meals in the calorie diary every day. This will help you be aware of your nutrition and make informed choices."]})]})}const st=ee`
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
`,rt="_container_17kug_1",at="_svg_17kug_6",it="_txt_17kug_18",I={container:rt,svg:at,txt:it},nt=({selectedDate:a,onChange:n,minDate:l,maxDate:d})=>{const h=x.forwardRef(({onClick:_},p)=>e.jsxs("div",{onClick:_,ref:p,className:I.container,children:[e.jsx("div",{className:I.txt,children:K(a,"dd/MM/yyyy")}),e.jsx("div",{children:e.jsx("svg",{className:I.svg,children:e.jsx("use",{href:`${m}#calendar`})})})]}));return e.jsxs(e.Fragment,{children:[e.jsx(Q,{selected:a,onChange:n,customInput:e.jsx(h,{}),minDate:l,maxDate:d,dateFormat:"dd MM yyyy",calendarStartDay:1}),e.jsx(st,{})]})},ct="_input_1i3a6_1",ot="_arrowLeft_1i3a6_8",lt="_arrowRight_1i3a6_17",dt="_box_1i3a6_21",pt="_opacity_1i3a6_28",ht="_svg_1i3a6_31",k={input:ct,arrowLeft:ot,arrowRight:lt,box:dt,opacity:pt,svg:ht},mt=({minDate:a,maxDate:n,selectedDate:l,setSelectedDate:d,handleToNextDay:h,handleToPreviousDay:_,additionalIconClass:p})=>{const t=p==="opacity-left",o=p==="opacity-right";return e.jsxs("div",{className:k.box,children:[e.jsx(nt,{minDate:a,maxDate:n,selectedDate:l,onChange:d}),e.jsxs("div",{children:[e.jsx("button",{type:"button",className:k.arrowLeft,onClick:_,style:t?{opacity:.2}:null,children:e.jsx("svg",{className:k.svg,width:"16",height:"16",children:e.jsx("use",{href:`${m}#icon-chevron-left1`})})}),e.jsx("button",{type:"button",onClick:h,className:k.arrowRight,style:o?{opacity:.2}:null,children:e.jsx("svg",{className:k.svg,width:"16",height:"16",children:e.jsx("use",{href:`${m}#icon-chevron-right1`})})})]})]})},xt="_container_166rm_1",_t="_titleCont_166rm_18",ut="_itemsCont_166rm_25",E={container:xt,titleCont:_t,itemsCont:ut};function Nt(){const a=U(),n=G(),{date:l}=V(),d=T(),{user:h}=z(),[_,p]=x.useState("opacity-right"),t=c=>c.toLocaleDateString("en-GB",{day:"2-digit",month:"2-digit",year:"numeric"}).replace(/\//g,"-");x.useEffect(()=>{d(Y())},[d]);const o=new Date,v=t(o),[N,g]=x.useState(l?P(l,"dd-MM-yyyy",new Date):new Date),y=L(R(h.createdAt)),{doneExercises:D,consumedProducts:b}=C();x.useEffect(()=>{l?(d(W(l)),a(`/diary/${l}`)):(d(W(v)),a(`/diary/${v}`));const c=R(h.createdAt),u=l?P(l,"dd-MM-yyyy",new Date):o,q=t(o),O=t(c),B=t(u);p(B===q?"opacity-right":B===O?"opacity-left":"")},[d,l,v,a,h.createdAt]),x.useEffect(()=>{d(H())},[d]);const w=c=>{const u=t(c);a(`/diary/${u}`),d(W(u))},$=()=>{const c=X(N,1),u=L(R(h.createdAt));if(c.getDate()===u.getDate()){g(c),w(c);return}c.getTime()<u.getTime()||(g(c),w(c))},A=()=>{const c=Z(N,1),u=L(new Date);if(c.getDate()===u.getDate()){g(c),w(c);return}c>u||(g(c),w(c))},M=c=>{g(c),w(c)};return e.jsxs("div",{className:`${E.backGround} layoutContainer`,children:[e.jsxs("div",{className:E.titleCont,children:[e.jsx(re,{title:"Diary"}),e.jsx(mt,{minDate:y,maxDate:o,selectedDate:N,setSelectedDate:M,handleToNextDay:A,handleToPreviousDay:$,additionalIconClass:_})]}),e.jsxs("div",{className:E.container,children:[e.jsxs("div",{className:E.itemsCont,children:[e.jsx($e,{products:b,location:n}),e.jsx(Ze,{exercises:D})]}),e.jsx(tt,{})]})]})}export{Nt as default};
