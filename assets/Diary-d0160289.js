import{j as e,r as x,u as T,s as m,d as P,N as F,a as S,b as U,c as G,e as V,f as Y,g as W,h as H}from"./index-353d8b26.js";import{u as C}from"./useDiary-31679fe6.js";import{i as J}from"./emotion-unitless.esm-6a27ea06.js";import{f as K,t as Q,p as B,s as L,a as R,b as X,c as Z}from"./index-1f34a904.js";import{a as ee}from"./styled-components.browser.esm-6293bcf9.js";import"./createClass-70aaef8f.js";const te="_titleContainer_1plm8_1",re={titleContainer:te};function se({title:a}){return e.jsxs("h1",{className:re.titleContainer,children:[a," "]})}const ae="_dayProductsWrapper_dqhzy_1",ie="_headerWrapper_dqhzy_13",ne="_btnWrapper_dqhzy_18",ce="_title_dqhzy_22",oe="_addProductBtn_dqhzy_27",le="_link_dqhzy_39",de="_errNotFound_dqhzy_58",N={dayProductsWrapper:ae,headerWrapper:ie,btnWrapper:ne,title:ce,addProductBtn:oe,link:le,errNotFound:de},pe="_wrapper_4d0yb_1",he="_btnDelete_4d0yb_42",me="_wrapperListContainer_4d0yb_50",xe="_wrapperList_4d0yb_50",_e="_title_4d0yb_72",ue="_text_4d0yb_80",ye="_textRecommend_4d0yb_93",ge="_wrapperRecommendContainer_4d0yb_99",we="_wrapperRecommend_4d0yb_99",je="_wrapperItemTitle_4d0yb_123",fe="_wrapperItemCategory_4d0yb_138",Ne="_wrapperItemCalories_4d0yb_152",be="_wrapperItemWeigth_4d0yb_166",ve="_flex_4d0yb_180",ke="_containerError_4d0yb_195",Ce="_circle_4d0yb_210",i={wrapper:pe,btnDelete:he,wrapperListContainer:me,wrapperList:xe,title:_e,text:ue,textRecommend:ye,wrapperRecommendContainer:ge,wrapperRecommend:we,wrapperItemTitle:je,wrapperItemCategory:fe,wrapperItemCalories:Ne,wrapperItemWeigth:be,flex:ve,containerError:ke,circle:Ce},De=({products:a})=>{const[n,l]=x.useState(window.innerWidth),{date:d}=C(),h=T();x.useEffect(()=>{const t=()=>{l(window.innerWidth)};return window.addEventListener("resize",t),()=>{window.removeEventListener("resize",t)}},[]);const _=t=>{h(P({date:d,credentials:{id:t._id}}))},p=t=>t.charAt(0).toUpperCase()+t.slice(1);return e.jsx("div",{className:i.wrapper,children:a.length!==0?a.map((t,o)=>e.jsxs("div",{className:i.wrapperListContainer,children:[e.jsxs("ul",{className:i.wrapperList,children:[e.jsxs("li",{className:i.wrapperItemTitle,children:[e.jsx("div",{className:i.title,style:{display:n>=768&&o>0?"none":"block"},children:"Title"}),e.jsx("div",{className:i.text,children:p(t.title)})]}),e.jsxs("li",{className:i.wrapperItemCategory,children:[e.jsx("div",{className:i.title,style:{display:n>=768&&o>0?"none":"block"},children:"Category"}),e.jsx("div",{className:i.text,children:p(t.category)})]}),e.jsxs("li",{className:i.wrapperItemCalories,children:[e.jsx("div",{className:i.title,style:{display:n>=768&&o>0?"none":"block"},children:"Calories"}),e.jsx("div",{className:i.text,children:t.calories})]}),e.jsxs("li",{className:i.wrapperItemWeigth,children:[e.jsx("div",{className:i.title,style:{display:n>=768&&o>0?"none":"block"},children:"Weight"}),e.jsx("div",{className:i.text,children:t.amount})]}),e.jsxs("li",{className:i.wrapperItemRecommend,children:[e.jsx("div",{className:i.title,style:{display:n>=768&&o>0?"none":"block"},children:"Recommend"}),e.jsxs("div",{className:i.wrapperRecommendContainer,children:[e.jsxs("div",{className:i.wrapperRecommend,children:[e.jsx("div",{className:i.circle,style:{backgroundColor:t.groupBloodNotAllowed?"green":"red"}}),e.jsx("div",{className:i.textRecommend,children:t.groupBloodNotAllowed?"Yes":"No"})]}),e.jsx("button",{type:"button",className:i.btnDelete,onClick:()=>_(t),children:e.jsx("svg",{width:"20",height:"20",children:e.jsx("use",{href:`${m}#icon-trash`})})})]})]})]})," "]},t._id)):e.jsx("div",{className:i.containerError,children:e.jsx("span",{children:"Not found products"})})})};function Ee({products:a,location:n}){return e.jsxs("div",{className:N.dayProductsWrapper,children:[e.jsxs("div",{className:N.headerWrapper,children:[e.jsx("p",{className:N.title,children:"Products"}),e.jsx("div",{className:N.btnWrapper,children:e.jsxs("button",{className:N.addProductBtn,children:[e.jsxs(F,{className:N.link,state:{from:n},to:"/products",children:["Add product"," "]}),e.jsx("svg",{width:"16",height:"16",children:e.jsx("use",{href:`${m}#icon-add-arrow`})})]})})]}),e.jsx(De,{products:a})]})}const $e="_dayExercisesWrapper_12kob_1",We="_headerWrapper_12kob_12",Le="_btnWrapper_12kob_17",Re="_title_12kob_21",Ie="_addExerciseBtn_12kob_26",Te="_link_12kob_39",ze="_errNotFound_12kob_57",b={dayExercisesWrapper:$e,headerWrapper:We,btnWrapper:Le,title:Re,addExerciseBtn:Ie,link:Te,errNotFound:ze},Be="_wrapper_1d022_1",Pe="_wrapperListContainer_1d022_43",Fe="_wrapperList_1d022_43",Se="_title_1d022_64",Ae="_text_1d022_72",qe="_flex_1d022_85",Me="_btnDelete_1d022_90",Oe="_wrapperBodyPart_1d022_95",Ue="_wrapperEquipment_1d022_109",Ge="_wrapeerName_1d022_123",Ve="_wrapperTarget_1d022_138",Ye="_wrapperBurnedCalories_1d022_152",He="_withTime_1d022_173",Je="_containerError_1d022_190",s={wrapper:Be,wrapperListContainer:Pe,wrapperList:Fe,title:Se,text:Ae,flex:qe,btnDelete:Me,wrapperBodyPart:Oe,wrapperEquipment:Ue,wrapeerName:Ge,wrapperTarget:Ve,wrapperBurnedCalories:Ye,withTime:He,containerError:Je};function Ke({exercises:a}){const[n,l]=x.useState(window.innerWidth),{date:d}=C(),h=T();x.useEffect(()=>{const t=()=>{l(window.innerWidth)};return window.addEventListener("resize",t),()=>{window.removeEventListener("resize",t)}},[]);const _=t=>{h(P({date:d,credentials:{id:t._id}}))},p=t=>t.charAt(0).toUpperCase()+t.slice(1);return e.jsx("div",{className:s.wrapper,children:a.length!==0?a.map((t,o)=>e.jsx("div",{className:s.wrapperListContainer,children:e.jsxs("ul",{className:s.wrapperList,children:[e.jsxs("li",{className:s.wrapperBodyPart,children:[e.jsx("div",{className:s.title,style:{display:n>=768&&o>0?"none":"block"},children:"Body Part"}),e.jsx("div",{className:s.text,children:p(t.bodyPart)})]}),e.jsxs("li",{className:s.wrapperEquipment,children:[e.jsx("div",{className:s.title,style:{display:n>=768&&o>0?"none":"block"},children:"Equipment"}),e.jsx("div",{className:s.text,children:p(t.equipment)})]}),e.jsxs("li",{className:s.wrapeerName,children:[e.jsx("div",{className:s.title,style:{display:n>=768&&o>0?"none":"block"},children:"Name"}),e.jsx("div",{className:s.text,children:p(t.name)})]}),e.jsxs("li",{className:s.wrapperTarget,children:[e.jsx("div",{className:s.title,style:{display:n>=768&&o>0?"none":"block"},children:"Target"}),e.jsx("div",{className:s.text,children:p(t.target)})]}),e.jsxs("li",{className:s.wrapperBurnedCalories,children:[e.jsx("div",{className:s.title,style:{display:n>=768&&o>0?"none":"block"},children:"Burned Calories"}),e.jsx("div",{className:s.text,children:t.calories})]}),e.jsxs("li",{className:s.wrapperTime,children:[e.jsx("div",{className:s.title,style:{display:n>=768&&o>0?"none":"block"},children:"Time"}),e.jsxs("div",{className:s.flex,children:[e.jsx("div",{className:`${s.text} ${s.withTime}`,children:t.time}),e.jsx("button",{type:"button",className:s.btnDelete,onClick:()=>_(t),children:e.jsx("svg",{width:"20",height:"20",children:e.jsx("use",{href:`${m}#icon-trash`})})})]})]})]})},t._id)):e.jsx("div",{className:s.containerError,children:e.jsx("span",{children:"Not found products"})})})}function Qe({exercises:a}){return e.jsxs("div",{className:b.dayExercisesWrapper,children:[e.jsxs("div",{className:b.headerWrapper,children:[e.jsx("p",{className:b.title,children:"Exercises"}),e.jsx("div",{className:b.btnWrapper,children:e.jsxs("button",{className:b.addExerciseBtn,children:[e.jsx(F,{className:b.link,to:"/exercises",children:"Add exercise"}),e.jsx("svg",{width:"16",height:"16",children:e.jsx("use",{href:`${m}#icon-add-arrow`})})]})})]}),e.jsx(Ke,{exercises:a})]})}const Xe="_container_lgox2_1",r={container:Xe,"user-daily":"_user-daily_lgox2_22","user-daily-items":"_user-daily-items_lgox2_27","user-daily-list":"_user-daily-list_lgox2_34","user-daily-text":"_user-daily-text_lgox2_85","user-daily-text-value":"_user-daily-text-value_lgox2_93","user-notification":"_user-notification_lgox2_120"};function Ze(){const{colories:a}=S(),{burnedCalories:n,consumedCalories:l}=C(),{doneExercises:d}=C(),{bmr:h,dailyExerciseTime:_}=a,[p,t]=x.useState(""),[o,j]=x.useState(""),f=Math.floor(h),g=d.reduce((w,$)=>w+$.time,0),y=_-g;let D;y<0&&(D=`+${Math.abs(y)}`);const v=f-l;return x.useEffect(()=>{v<=0?t("red"):t(""),y<=0?j("green"):j("")},[v,y]),e.jsxs("div",{children:[e.jsxs("ul",{className:r.container,children:[e.jsxs("li",{className:r["user-daily-items"],children:[e.jsxs("div",{className:r["user-daily"],children:[e.jsx("svg",{width:"20",height:"20",children:e.jsx("use",{href:`${m}#icon-fork-knife`})}),e.jsx("p",{className:r["user-daily-text"],children:"Daily calorie intake"})]}),e.jsx("p",{className:r["user-daily-text-value"],children:f||0})]}),e.jsxs("li",{className:r["user-daily-items"],children:[e.jsxs("div",{className:r["user-daily"],children:[e.jsx("svg",{width:"20",height:"20",children:e.jsx("use",{href:`${m}#icon-dumbbell`})}),e.jsx("p",{className:r["user-daily-text"],children:"Daily physical activity"})]}),e.jsxs("p",{className:r["user-daily-text-value"],children:[_||0," min"]})]}),e.jsxs("li",{className:r["user-daily-items"],children:[e.jsxs("div",{className:r["user-daily"],children:[e.jsx("svg",{width:"20",height:"20",children:e.jsx("use",{href:`${m}#icon-apple`})}),e.jsx("p",{className:r["user-daily-text"],children:"Сalories consumed"})]}),e.jsx("p",{className:r["user-daily-text-value"],children:Math.floor(l)||0})]}),e.jsxs("li",{className:r["user-daily-items"],children:[e.jsxs("div",{className:r["user-daily"],children:[e.jsx("svg",{width:"20",height:"20",children:e.jsx("use",{href:`${m}#icon-calories`})}),e.jsx("p",{className:r["user-daily-text"],children:"Сalories burned"})]}),e.jsx("p",{className:r["user-daily-text-value"],children:n||0})]}),e.jsxs("li",{className:r["user-daily-items"],style:p==="red"?{border:"1px solid #e6533c"}:null,children:[e.jsxs("div",{className:r["user-daily"],children:[e.jsx("svg",{width:"20",height:"20",children:e.jsx("use",{href:`${m}#icon-bubble`})}),e.jsx("p",{className:r["user-daily-text"],children:"Calories remaining"})]}),e.jsx("p",{className:r["user-daily-text-value"],children:Math.floor(v)||0})]}),e.jsxs("li",{className:r["user-daily-items"],style:o==="green"?{border:"1px solid #3CBF61"}:null,children:[e.jsxs("div",{className:r["user-daily"],children:[e.jsx("svg",{width:"20",height:"20",children:e.jsx("use",{href:`${m}#icon-running-figure`})}),e.jsx("p",{className:r["user-daily-text"],children:"Sports remaining"})]}),e.jsx("p",{className:r["user-daily-text-value"],children:y<0?D+" min":y+" min"})]})]}),e.jsxs("p",{className:r["user-notification"],children:[e.jsx("span",{children:e.jsx("svg",{width:"24",height:"24",children:e.jsx("use",{href:`${J}#icon-exclamation-mark`})})}),"Record all your meals in the calorie diary every day. This will help you be aware of your nutrition and make informed choices."]})]})}const et=ee`
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
`,tt="_container_17kug_1",rt="_svg_17kug_6",st="_txt_17kug_18",I={container:tt,svg:rt,txt:st},at=({selectedDate:a,onChange:n,minDate:l,maxDate:d})=>{const h=x.forwardRef(({onClick:_},p)=>e.jsxs("div",{onClick:_,ref:p,className:I.container,children:[e.jsx("div",{className:I.txt,children:K(a,"dd/MM/yyyy")}),e.jsx("div",{children:e.jsx("svg",{className:I.svg,children:e.jsx("use",{href:`${m}#calendar`})})})]}));return e.jsxs(e.Fragment,{children:[e.jsx(Q,{selected:a,onChange:n,customInput:e.jsx(h,{}),minDate:l,maxDate:d,dateFormat:"dd MM yyyy",calendarStartDay:1}),e.jsx(et,{})]})},it="_input_1i3a6_1",nt="_arrowLeft_1i3a6_8",ct="_arrowRight_1i3a6_17",ot="_box_1i3a6_21",lt="_opacity_1i3a6_28",dt="_svg_1i3a6_31",k={input:it,arrowLeft:nt,arrowRight:ct,box:ot,opacity:lt,svg:dt},pt=({minDate:a,maxDate:n,selectedDate:l,setSelectedDate:d,handleToNextDay:h,handleToPreviousDay:_,additionalIconClass:p})=>{const t=p==="opacity-left",o=p==="opacity-right";return e.jsxs("div",{className:k.box,children:[e.jsx(at,{minDate:a,maxDate:n,selectedDate:l,onChange:d}),e.jsxs("div",{children:[e.jsx("button",{type:"button",className:k.arrowLeft,onClick:_,style:t?{opacity:.2}:null,children:e.jsx("svg",{className:k.svg,width:"16",height:"16",children:e.jsx("use",{href:`${m}#icon-chevron-left1`})})}),e.jsx("button",{type:"button",onClick:h,className:k.arrowRight,style:o?{opacity:.2}:null,children:e.jsx("svg",{className:k.svg,width:"16",height:"16",children:e.jsx("use",{href:`${m}#icon-chevron-right1`})})})]})]})},ht="_container_166rm_1",mt="_titleCont_166rm_18",xt="_itemsCont_166rm_25",E={container:ht,titleCont:mt,itemsCont:xt};function ft(){const a=U(),n=G(),{date:l}=V(),d=T(),{user:h}=S(),[_,p]=x.useState("opacity-right"),t=c=>c.toLocaleDateString("en-GB",{day:"2-digit",month:"2-digit",year:"numeric"}).replace(/\//g,"-");x.useEffect(()=>{d(Y())},[d]);const o=new Date,j=t(o),[f,g]=x.useState(l?B(l,"dd-MM-yyyy",new Date):new Date),y=L(R(h.createdAt)),{doneExercises:D,consumedProducts:v}=C();x.useEffect(()=>{l?(d(W(l)),a(`/diary/${l}`)):(d(W(j)),a(`/diary/${j}`));const c=R(h.createdAt),u=l?B(l,"dd-MM-yyyy",new Date):o,M=t(o),O=t(c),z=t(u);p(z===M?"opacity-right":z===O?"opacity-left":"")},[d,l,j,a,h.createdAt]),x.useEffect(()=>{d(H())},[d]);const w=c=>{const u=t(c);a(`/diary/${u}`),d(W(u))},$=()=>{const c=X(f,1),u=L(R(h.createdAt));if(c.getDate()===u.getDate()){g(c),w(c);return}c.getTime()<u.getTime()||(g(c),w(c))},A=()=>{const c=Z(f,1),u=L(new Date);if(c.getDate()===u.getDate()){g(c),w(c);return}c>u||(g(c),w(c))},q=c=>{g(c),w(c)};return e.jsxs("div",{className:`${E.backGround} layoutContainer`,children:[e.jsxs("div",{className:E.titleCont,children:[e.jsx(se,{title:"Diary"}),e.jsx(pt,{minDate:y,maxDate:o,selectedDate:f,setSelectedDate:q,handleToNextDay:A,handleToPreviousDay:$,additionalIconClass:_})]}),e.jsxs("div",{className:E.container,children:[e.jsxs("div",{className:E.itemsCont,children:[e.jsx(Ee,{products:v,location:n}),e.jsx(Qe,{exercises:D})]}),e.jsx(Ze,{})]})]})}export{ft as default};
