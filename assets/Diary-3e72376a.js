import{j as e,r as _,u as z,s as m,d as P,N as F,a as S,b as G,c as U,e as V,f as Y,g as W}from"./index-f2aa8c6a.js";import{u as C}from"./useDiary-ae81cbe8.js";import{i as H}from"./emotion-unitless.esm-32f5d8cf.js";import{f as J,t as K,p as B,s as L,a as R,b as Q,c as X}from"./index-11d50316.js";import{a as Z}from"./styled-components.browser.esm-37fd0ae1.js";import"./createClass-55e365c2.js";const ee="_titleContainer_1plm8_1",te={titleContainer:ee};function se({title:n}){return e.jsxs("h1",{className:te.titleContainer,children:[n," "]})}const re="_dayProductsWrapper_9b7lz_1",ae="_headerWrapper_9b7lz_13",ie="_btnWrapper_9b7lz_18",ne="_title_9b7lz_22",ce="_addProductBtn_9b7lz_27",oe="_link_9b7lz_39",le="_svg_9b7lz_57",de="_lin_9b7lz_39",pe="_errNotFound_9b7lz_64",j={dayProductsWrapper:re,headerWrapper:ae,btnWrapper:ie,title:ne,addProductBtn:ce,link:oe,svg:le,lin:de,errNotFound:pe},he="_wrapper_1sjdk_1",me="_svg_1sjdk_21",xe="_btnDelete_1sjdk_49",_e="_wrapperListContainer_1sjdk_57",ue="_wrapperList_1sjdk_57",ye="_title_1sjdk_79",ge="_text_1sjdk_87",we="_textRecommend_1sjdk_100",je="_wrapperRecommendContainer_1sjdk_106",ve="_wrapperRecommend_1sjdk_106",fe="_wrapperItemTitle_1sjdk_130",Ne="_wrapperItemCategory_1sjdk_145",be="_wrapperItemCalories_1sjdk_159",ke="_wrapperItemWeigth_1sjdk_173",Ce="_flex_1sjdk_187",De="_containerError_1sjdk_202",Ee="_circle_1sjdk_217",i={wrapper:he,svg:me,btnDelete:xe,wrapperListContainer:_e,wrapperList:ue,title:ye,text:ge,textRecommend:we,wrapperRecommendContainer:je,wrapperRecommend:ve,wrapperItemTitle:fe,wrapperItemCategory:Ne,wrapperItemCalories:be,wrapperItemWeigth:ke,flex:Ce,containerError:De,circle:Ee},$e=({products:n})=>{const[a,l]=_.useState(window.innerWidth),{date:p}=C(),h=z();_.useEffect(()=>{const t=()=>{l(window.innerWidth)};return window.addEventListener("resize",t),()=>{window.removeEventListener("resize",t)}},[]);const x=t=>{h(P({date:p,credentials:{type:"product",id:t._id}}))},d=t=>t.charAt(0).toUpperCase()+t.slice(1);return e.jsx("div",{className:i.wrapper,children:n.length!==0?n.map((t,o)=>e.jsxs("div",{className:i.wrapperListContainer,children:[e.jsxs("ul",{className:i.wrapperList,children:[e.jsxs("li",{className:i.wrapperItemTitle,children:[e.jsx("div",{className:i.title,style:{display:a>=768&&o>0?"none":"block"},children:"Title"}),e.jsx("div",{className:i.text,children:d(t.title)})]}),e.jsxs("li",{className:i.wrapperItemCategory,children:[e.jsx("div",{className:i.title,style:{display:a>=768&&o>0?"none":"block"},children:"Category"}),e.jsx("div",{className:i.text,children:d(t.category)})]}),e.jsxs("li",{className:i.wrapperItemCalories,children:[e.jsx("div",{className:i.title,style:{display:a>=768&&o>0?"none":"block"},children:"Calories"}),e.jsx("div",{className:i.text,children:t.calories})]}),e.jsxs("li",{className:i.wrapperItemWeigth,children:[e.jsx("div",{className:i.title,style:{display:a>=768&&o>0?"none":"block"},children:"Weight"}),e.jsx("div",{className:i.text,children:t.amount})]}),e.jsxs("li",{className:i.wrapperItemRecommend,children:[e.jsx("div",{className:i.title,style:{display:a>=768&&o>0?"none":"block"},children:"Recommend"}),e.jsxs("div",{className:i.wrapperRecommendContainer,children:[e.jsxs("div",{className:i.wrapperRecommend,children:[e.jsx("div",{className:i.circle,style:{backgroundColor:t.groupBloodNotAllowed?"green":"red"}}),e.jsx("div",{className:i.textRecommend,children:t.groupBloodNotAllowed?"Yes":"No"})]}),e.jsx("button",{type:"button",className:i.btnDelete,onClick:()=>x(t),children:e.jsx("svg",{width:"20",height:"20",className:i.svg,children:e.jsx("use",{href:`${m}#icon-trash`})})})]})]})]})," "]},t._id)):e.jsx("div",{className:i.containerError,children:e.jsx("span",{children:"Not found products"})})})};function We({products:n,location:a}){return e.jsxs("div",{className:j.dayProductsWrapper,children:[e.jsxs("div",{className:j.headerWrapper,children:[e.jsx("p",{className:j.title,children:"Products"}),e.jsx("div",{className:j.btnWrapper,children:e.jsxs("button",{className:j.addProductBtn,children:[e.jsxs(F,{className:j.link,state:{from:a},to:"/products",children:["Add product"," "]}),e.jsx("svg",{width:"16",height:"16",className:j.svg,children:e.jsx("use",{href:`${m}#icon-add-arrow`})})]})})]}),e.jsx($e,{products:n})]})}const Le="_dayExercisesWrapper_1w5wp_1",Re="_headerWrapper_1w5wp_12",Ie="_btnWrapper_1w5wp_17",ze="_title_1w5wp_21",Te="_addExerciseBtn_1w5wp_26",Be="_link_1w5wp_39",Pe="_svg_1w5wp_42",Fe="_errNotFound_1w5wp_61",v={dayExercisesWrapper:Le,headerWrapper:Re,btnWrapper:Ie,title:ze,addExerciseBtn:Te,link:Be,svg:Pe,errNotFound:Fe},Se="_wrapper_1hc3o_1",Ae="_wrapperListContainer_1hc3o_43",Me="_wrapperList_1hc3o_43",qe="_title_1hc3o_64",Oe="_text_1hc3o_72",Ge="_flex_1hc3o_85",Ue="_btnDelete_1hc3o_90",Ve="_svg_1hc3o_94",Ye="_wrapperBodyPart_1hc3o_101",He="_wrapperEquipment_1hc3o_115",Je="_wrapeerName_1hc3o_129",Ke="_wrapperTarget_1hc3o_144",Qe="_wrapperBurnedCalories_1hc3o_158",Xe="_withTime_1hc3o_179",Ze="_containerError_1hc3o_196",s={wrapper:Se,wrapperListContainer:Ae,wrapperList:Me,title:qe,text:Oe,flex:Ge,btnDelete:Ue,svg:Ve,wrapperBodyPart:Ye,wrapperEquipment:He,wrapeerName:Je,wrapperTarget:Ke,wrapperBurnedCalories:Qe,withTime:Xe,containerError:Ze};function et({exercises:n}){const[a,l]=_.useState(window.innerWidth),{date:p}=C(),h=z();_.useEffect(()=>{const t=()=>{l(window.innerWidth)};return window.addEventListener("resize",t),()=>{window.removeEventListener("resize",t)}},[]);const x=t=>{h(P({date:p,credentials:{type:"exercise",id:t._id}}))},d=t=>t.charAt(0).toUpperCase()+t.slice(1);return e.jsx("div",{className:s.wrapper,children:n.length!==0?n.map((t,o)=>e.jsx("div",{className:s.wrapperListContainer,children:e.jsxs("ul",{className:s.wrapperList,children:[e.jsxs("li",{className:s.wrapperBodyPart,children:[e.jsx("div",{className:s.title,style:{display:a>=768&&o>0?"none":"block"},children:"Body Part"}),e.jsx("div",{className:s.text,children:d(t.bodyPart)})]}),e.jsxs("li",{className:s.wrapperEquipment,children:[e.jsx("div",{className:s.title,style:{display:a>=768&&o>0?"none":"block"},children:"Equipment"}),e.jsx("div",{className:s.text,children:d(t.equipment)})]}),e.jsxs("li",{className:s.wrapeerName,children:[e.jsx("div",{className:s.title,style:{display:a>=768&&o>0?"none":"block"},children:"Name"}),e.jsx("div",{className:s.text,children:d(t.name)})]}),e.jsxs("li",{className:s.wrapperTarget,children:[e.jsx("div",{className:s.title,style:{display:a>=768&&o>0?"none":"block"},children:"Target"}),e.jsx("div",{className:s.text,children:d(t.target)})]}),e.jsxs("li",{className:s.wrapperBurnedCalories,children:[e.jsx("div",{className:s.title,style:{display:a>=768&&o>0?"none":"block"},children:"Burned Calories"}),e.jsx("div",{className:s.text,children:t.calories})]}),e.jsxs("li",{className:s.wrapperTime,children:[e.jsx("div",{className:s.title,style:{display:a>=768&&o>0?"none":"block"},children:"Time"}),e.jsxs("div",{className:s.flex,children:[e.jsx("div",{className:`${s.text} ${s.withTime}`,children:t.time}),e.jsx("button",{type:"button",className:s.btnDelete,onClick:()=>x(t),children:e.jsx("svg",{width:"20",height:"20",className:s.svg,children:e.jsx("use",{href:`${m}#icon-trash`})})})]})]})]})},t._id)):e.jsx("div",{className:s.containerError,children:e.jsx("span",{children:"Not found products"})})})}function tt({exercises:n,location:a}){return e.jsxs("div",{className:v.dayExercisesWrapper,children:[e.jsxs("div",{className:v.headerWrapper,children:[e.jsx("p",{className:v.title,children:"Exercises"}),e.jsx("div",{className:v.btnWrapper,children:e.jsxs("button",{className:v.addExerciseBtn,children:[e.jsx(F,{className:v.link,state:{from:a},to:"/exercises",children:"Add exercise"}),e.jsx("svg",{width:"16",height:"16",className:v.svg,children:e.jsx("use",{href:`${m}#icon-add-arrow`})})]})})]}),e.jsx(et,{exercises:n})]})}const st="_container_lgox2_1",r={container:st,"user-daily":"_user-daily_lgox2_22","user-daily-items":"_user-daily-items_lgox2_27","user-daily-list":"_user-daily-list_lgox2_34","user-daily-text":"_user-daily-text_lgox2_85","user-daily-text-value":"_user-daily-text-value_lgox2_93","user-notification":"_user-notification_lgox2_120"};function rt(){const{user:n}=S(),{burnedCalories:a,consumedCalories:l}=C(),{doneExercises:p}=C(),{bmr:h,dailyExerciseTime:x}=n,[d,t]=_.useState(""),[o,f]=_.useState(""),N=Math.floor(h),g=p.reduce((w,$)=>w+$.time,0),y=x-g;let D;y<0&&(D=`+${Math.abs(y)}`);const b=N-l;return _.useEffect(()=>{b<=0?t("red"):t(""),y<=0?f("green"):f("")},[b,y]),e.jsxs("div",{children:[e.jsxs("ul",{className:r.container,children:[e.jsxs("li",{className:r["user-daily-items"],children:[e.jsxs("div",{className:r["user-daily"],children:[e.jsx("svg",{width:"20",height:"20",children:e.jsx("use",{href:`${m}#icon-fork-knife`})}),e.jsx("p",{className:r["user-daily-text"],children:"Daily calorie intake"})]}),e.jsx("p",{className:r["user-daily-text-value"],children:N||0})]}),e.jsxs("li",{className:r["user-daily-items"],children:[e.jsxs("div",{className:r["user-daily"],children:[e.jsx("svg",{width:"20",height:"20",children:e.jsx("use",{href:`${m}#icon-dumbbell`})}),e.jsx("p",{className:r["user-daily-text"],children:"Daily physical activity"})]}),e.jsxs("p",{className:r["user-daily-text-value"],children:[x||0," min"]})]}),e.jsxs("li",{className:r["user-daily-items"],children:[e.jsxs("div",{className:r["user-daily"],children:[e.jsx("svg",{width:"20",height:"20",children:e.jsx("use",{href:`${m}#icon-apple`})}),e.jsx("p",{className:r["user-daily-text"],children:"Сalories consumed"})]}),e.jsx("p",{className:r["user-daily-text-value"],children:Math.floor(l)||0})]}),e.jsxs("li",{className:r["user-daily-items"],children:[e.jsxs("div",{className:r["user-daily"],children:[e.jsx("svg",{width:"20",height:"20",children:e.jsx("use",{href:`${m}#icon-calories`})}),e.jsx("p",{className:r["user-daily-text"],children:"Сalories burned"})]}),e.jsx("p",{className:r["user-daily-text-value"],children:a||0})]}),e.jsxs("li",{className:r["user-daily-items"],style:d==="red"?{border:"1px solid #e6533c"}:null,children:[e.jsxs("div",{className:r["user-daily"],children:[e.jsx("svg",{width:"20",height:"20",children:e.jsx("use",{href:`${m}#icon-bubble`})}),e.jsx("p",{className:r["user-daily-text"],children:"Calories remaining"})]}),e.jsx("p",{className:r["user-daily-text-value"],children:Math.floor(b)||0})]}),e.jsxs("li",{className:r["user-daily-items"],style:o==="green"?{border:"1px solid #3CBF61"}:null,children:[e.jsxs("div",{className:r["user-daily"],children:[e.jsx("svg",{width:"20",height:"20",children:e.jsx("use",{href:`${m}#icon-running-figure`})}),e.jsx("p",{className:r["user-daily-text"],children:"Sports remaining"})]}),e.jsx("p",{className:r["user-daily-text-value"],children:y<0?D+" min":y+" min"})]})]}),e.jsxs("p",{className:r["user-notification"],children:[e.jsx("span",{children:e.jsx("svg",{width:"24",height:"24",children:e.jsx("use",{href:`${H}#icon-exclamation-mark`})})}),"Record all your meals in the calorie diary every day. This will help you be aware of your nutrition and make informed choices."]})]})}const at=Z`
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
`,it="_container_1rs47_1",nt="_svg_1rs47_6",ct="_txt_1rs47_19",I={container:it,svg:nt,txt:ct},ot=({selectedDate:n,onChange:a,minDate:l,maxDate:p})=>{const h=_.forwardRef(({onClick:x},d)=>e.jsxs("div",{onClick:x,ref:d,className:I.container,children:[e.jsx("div",{className:I.txt,children:J(n,"dd/MM/yyyy")}),e.jsx("div",{children:e.jsx("svg",{className:I.svg,children:e.jsx("use",{href:`${m}#calendar`})})})]}));return e.jsxs(e.Fragment,{children:[e.jsx(K,{selected:n,onChange:a,customInput:e.jsx(h,{}),minDate:l,maxDate:p,dateFormat:"dd MM yyyy",calendarStartDay:1}),e.jsx(at,{})]})},lt="_input_1i3a6_1",dt="_arrowLeft_1i3a6_8",pt="_arrowRight_1i3a6_17",ht="_box_1i3a6_21",mt="_opacity_1i3a6_28",xt="_svg_1i3a6_31",k={input:lt,arrowLeft:dt,arrowRight:pt,box:ht,opacity:mt,svg:xt},_t=({minDate:n,maxDate:a,selectedDate:l,setSelectedDate:p,handleToNextDay:h,handleToPreviousDay:x,additionalIconClass:d})=>{const t=d==="opacity-left",o=d==="opacity-right";return e.jsxs("div",{className:k.box,children:[e.jsx(ot,{minDate:n,maxDate:a,selectedDate:l,onChange:p}),e.jsxs("div",{children:[e.jsx("button",{type:"button",className:k.arrowLeft,onClick:x,style:t?{opacity:.2}:null,children:e.jsx("svg",{className:k.svg,width:"16",height:"16",children:e.jsx("use",{href:`${m}#icon-chevron-left1`})})}),e.jsx("button",{type:"button",onClick:h,className:k.arrowRight,style:o?{opacity:.2}:null,children:e.jsx("svg",{className:k.svg,width:"16",height:"16",children:e.jsx("use",{href:`${m}#icon-chevron-right1`})})})]})]})},ut="_container_166rm_1",yt="_titleCont_166rm_18",gt="_itemsCont_166rm_25",E={container:ut,titleCont:yt,itemsCont:gt};function kt(){const n=G(),a=U(),{date:l}=V(),p=z(),{user:h}=S(),[x,d]=_.useState("opacity-right"),t=c=>c.toLocaleDateString("en-GB",{day:"2-digit",month:"2-digit",year:"numeric"}).replace(/\//g,"-");_.useEffect(()=>{p(Y())},[p]);const o=new Date,f=t(o),[N,g]=_.useState(l?B(l,"dd-MM-yyyy",new Date):new Date),y=L(R(h.createdAt)),{doneExercises:D,consumedProducts:b}=C();_.useEffect(()=>{l?(p(W(l)),n(`/diary/${l}`)):(p(W(f)),n(`/diary/${f}`));const c=R(h.createdAt),u=l?B(l,"dd-MM-yyyy",new Date):o,q=t(o),O=t(c),T=t(u);d(T===q?"opacity-right":T===O?"opacity-left":"")},[p,l,f,n,h.createdAt]);const w=c=>{const u=t(c);n(`/diary/${u}`),p(W(u))},$=()=>{const c=Q(N,1),u=L(R(h.createdAt));if(c.getDate()===u.getDate()){g(c),w(c);return}c.getTime()<u.getTime()||(g(c),w(c))},A=()=>{const c=X(N,1),u=L(new Date);if(c.getDate()===u.getDate()){g(c),w(c);return}c>u||(g(c),w(c))},M=c=>{g(c),w(c)};return e.jsxs("div",{className:`${E.backGround} layoutContainer`,children:[e.jsxs("div",{className:E.titleCont,children:[e.jsx(se,{title:"Diary"}),e.jsx(_t,{minDate:y,maxDate:o,selectedDate:N,setSelectedDate:M,handleToNextDay:A,handleToPreviousDay:$,additionalIconClass:x})]}),e.jsxs("div",{className:E.container,children:[e.jsxs("div",{className:E.itemsCont,children:[e.jsx(We,{products:b,location:a}),e.jsx(tt,{exercises:D,location:a})]}),e.jsx(rt,{})]})]})}export{kt as default};
