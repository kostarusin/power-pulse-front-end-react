import{j as e,r as m,u as I,s as x,d as P,N as F,a as S,b as U,c as G,e as V,f as Y,g as $,h as H}from"./index-f71558b3.js";import{u as k}from"./useDiary-0b7c9e95.js";import{i as J}from"./emotion-unitless.esm-852a169f.js";import{f as K,t as Q,p as B,s as W,a as L,b as X,c as Z}from"./index-9e1957f5.js";import{a as ee}from"./styled-components.browser.esm-9018de42.js";import"./createClass-56238b38.js";const te="_titleContainer_1plm8_1",re={titleContainer:te};function se({title:a}){return e.jsxs("h1",{className:re.titleContainer,children:[a," "]})}const ae="_dayProductsWrapper_1c3fe_1",ie="_headerWrapper_1c3fe_13",ne="_btnWrapper_1c3fe_18",ce="_title_1c3fe_22",oe="_addProductBtn_1c3fe_27",le="_link_1c3fe_39",de="_errNotFound_1c3fe_58",f={dayProductsWrapper:ae,headerWrapper:ie,btnWrapper:ne,title:ce,addProductBtn:oe,link:le,errNotFound:de},pe="_wrapper_172vl_1",he="_btnDelete_172vl_42",xe="_wrapperListContainer_172vl_51",me="_wrapperList_172vl_51",_e="_title_172vl_68",ue="_text_172vl_76",ye="_textRecommend_172vl_86",ge="_wrapperRecommendContainer_172vl_92",we="_wrapperRecommend_172vl_92",je="_wrapperItemTitle_172vl_116",ve="_wrapperItemCategory_172vl_130",fe="_wrapperItemCalories_172vl_144",Ne="_wrapperItemWeigth_172vl_158",be="_flex_172vl_172",ke="_containerError_172vl_187",Ce="_circle_172vl_202",i={wrapper:pe,btnDelete:he,wrapperListContainer:xe,wrapperList:me,title:_e,text:ue,textRecommend:ye,wrapperRecommendContainer:ge,wrapperRecommend:we,wrapperItemTitle:je,wrapperItemCategory:ve,wrapperItemCalories:fe,wrapperItemWeigth:Ne,flex:be,containerError:ke,circle:Ce},De=({products:a})=>{const[n,l]=m.useState(window.innerWidth),{date:d}=k(),h=I();m.useEffect(()=>{const t=()=>{l(window.innerWidth)};return window.addEventListener("resize",t),()=>{window.removeEventListener("resize",t)}},[]);const _=t=>{h(P({date:d,credentials:{id:t._id}}))},p=t=>t.charAt(0).toUpperCase()+t.slice(1);return e.jsx("div",{className:i.wrapper,children:a.length!==0?a.map((t,o)=>e.jsxs("div",{className:i.wrapperListContainer,children:[e.jsxs("ul",{className:i.wrapperList,children:[e.jsxs("li",{className:i.wrapperItemTitle,children:[e.jsx("div",{className:i.title,style:{display:n>=768&&o>0?"none":"block"},children:"Title"}),e.jsx("div",{className:i.text,children:p(t.title)})]}),e.jsxs("li",{className:i.wrapperItemCategory,children:[e.jsx("div",{className:i.title,style:{display:n>=768&&o>0?"none":"block"},children:"Category"}),e.jsx("div",{className:i.text,children:p(t.category)})]}),e.jsxs("li",{className:i.wrapperItemCalories,children:[e.jsx("div",{className:i.title,style:{display:n>=768&&o>0?"none":"block"},children:"Calories"}),e.jsx("div",{className:i.text,children:t.calories})]}),e.jsxs("li",{className:i.wrapperItemWeigth,children:[e.jsx("div",{className:i.title,style:{display:n>=768&&o>0?"none":"block"},children:"Weight"}),e.jsx("div",{className:i.text,children:t.amount})]}),e.jsxs("li",{className:i.wrapperItemRecommend,children:[e.jsx("div",{className:i.title,style:{display:n>=768&&o>0?"none":"block"},children:"Recommend"}),e.jsxs("div",{className:i.wrapperRecommendContainer,children:[e.jsxs("div",{className:i.wrapperRecommend,children:[e.jsx("div",{className:i.circle,style:{backgroundColor:t.groupBloodNotAllowed?"green":"red"}}),e.jsx("div",{className:i.textRecommend,children:t.groupBloodNotAllowed?"Yes":"No"})]}),e.jsx("button",{type:"button",className:i.btnDelete,onClick:()=>_(t),children:e.jsx("svg",{width:"20",height:"20",children:e.jsx("use",{href:`${x}#icon-trash`})})})]})]})]})," "]},t._id)):e.jsx("div",{className:i.containerError,children:e.jsx("span",{children:"Not found products"})})})};function Ee({products:a,location:n}){return e.jsxs("div",{className:f.dayProductsWrapper,children:[e.jsxs("div",{className:f.headerWrapper,children:[e.jsx("p",{className:f.title,children:"Products"}),e.jsx("div",{className:f.btnWrapper,children:e.jsxs("button",{className:f.addProductBtn,children:[e.jsxs(F,{className:f.link,state:{from:n},to:"/products",children:["Add product"," "]}),e.jsx("svg",{width:"16",height:"16",children:e.jsx("use",{href:`${x}#icon-add-arrow`})})]})})]}),e.jsx(De,{products:a})]})}const $e="_dayExercisesWrapper_qpevg_1",We="_headerWrapper_qpevg_12",Le="_btnWrapper_qpevg_17",Re="_title_qpevg_21",qe="_addExerciseBtn_qpevg_26",Ie="_link_qpevg_39",Te="_errNotFound_qpevg_57",N={dayExercisesWrapper:$e,headerWrapper:We,btnWrapper:Le,title:Re,addExerciseBtn:qe,link:Ie,errNotFound:Te},Be="_wrapper_xaqov_1",Pe="_wrapperListContainer_xaqov_43",Fe="_wrapperList_xaqov_43",Se="_title_xaqov_59",ze="_text_xaqov_67",Ae="_flex_xaqov_80",Me="_btnDelete_xaqov_85",Oe="_wrapperBodyPart_xaqov_90",Ue="_wrapperEquipment_xaqov_104",Ge="_wrapeerName_xaqov_118",Ve="_wrapperTarget_xaqov_133",Ye="_wrapperBurnedCalories_xaqov_147",He="_withTime_xaqov_168",Je="_containerError_xaqov_185",s={wrapper:Be,wrapperListContainer:Pe,wrapperList:Fe,title:Se,text:ze,flex:Ae,btnDelete:Me,wrapperBodyPart:Oe,wrapperEquipment:Ue,wrapeerName:Ge,wrapperTarget:Ve,wrapperBurnedCalories:Ye,withTime:He,containerError:Je};function Ke({exercises:a}){const[n,l]=m.useState(window.innerWidth),{date:d}=k(),h=I();m.useEffect(()=>{const t=()=>{l(window.innerWidth)};return window.addEventListener("resize",t),()=>{window.removeEventListener("resize",t)}},[]);const _=t=>{h(P({date:d,credentials:{id:t._id}}))},p=t=>t.charAt(0).toUpperCase()+t.slice(1);return e.jsx("div",{className:s.wrapper,children:a.length!==0?a.map((t,o)=>e.jsx("div",{className:s.wrapperListContainer,children:e.jsxs("ul",{className:s.wrapperList,children:[e.jsxs("li",{className:s.wrapperBodyPart,children:[e.jsx("div",{className:s.title,style:{display:n>=768&&o>0?"none":"block"},children:"Body Part"}),e.jsx("div",{className:s.text,children:p(t.bodyPart)})]}),e.jsxs("li",{className:s.wrapperEquipment,children:[e.jsx("div",{className:s.title,style:{display:n>=768&&o>0?"none":"block"},children:"Equipment"}),e.jsx("div",{className:s.text,children:p(t.equipment)})]}),e.jsxs("li",{className:s.wrapeerName,children:[e.jsx("div",{className:s.title,style:{display:n>=768&&o>0?"none":"block"},children:"Name"}),e.jsx("div",{className:s.text,children:p(t.name)})]}),e.jsxs("li",{className:s.wrapperTarget,children:[e.jsx("div",{className:s.title,style:{display:n>=768&&o>0?"none":"block"},children:"Target"}),e.jsx("div",{className:s.text,children:p(t.target)})]}),e.jsxs("li",{className:s.wrapperBurnedCalories,children:[e.jsx("div",{className:s.title,style:{display:n>=768&&o>0?"none":"block"},children:"Burned Calories"}),e.jsx("div",{className:s.text,children:t.calories})]}),e.jsxs("li",{className:s.wrapperTime,children:[e.jsx("div",{className:s.title,style:{display:n>=768&&o>0?"none":"block"},children:"Time"}),e.jsxs("div",{className:s.flex,children:[e.jsx("div",{className:`${s.text} ${s.withTime}`,children:t.time}),e.jsx("button",{type:"button",className:s.btnDelete,onClick:()=>_(t),children:e.jsx("svg",{width:"20",height:"20",children:e.jsx("use",{href:`${x}#icon-trash`})})})]})]})]})},t._id)):e.jsx("div",{className:s.containerError,children:e.jsx("span",{children:"Not found products"})})})}function Qe({exercises:a}){return e.jsxs("div",{className:N.dayExercisesWrapper,children:[e.jsxs("div",{className:N.headerWrapper,children:[e.jsx("p",{className:N.title,children:"Exercises"}),e.jsx("div",{className:N.btnWrapper,children:e.jsxs("button",{className:N.addExerciseBtn,children:[e.jsx(F,{className:N.link,to:"/exercises",children:"Add exercise"}),e.jsx("svg",{width:"16",height:"16",children:e.jsx("use",{href:`${x}#icon-add-arrow`})})]})})]}),e.jsx(Ke,{exercises:a})]})}const Xe="_container_lgox2_1",r={container:Xe,"user-daily":"_user-daily_lgox2_22","user-daily-items":"_user-daily-items_lgox2_27","user-daily-list":"_user-daily-list_lgox2_34","user-daily-text":"_user-daily-text_lgox2_85","user-daily-text-value":"_user-daily-text-value_lgox2_93","user-notification":"_user-notification_lgox2_120"};function Ze(){const{colories:a}=S(),{burnedCalories:n,consumedCalories:l}=k(),{doneExercises:d}=k(),{bmr:h,dailyExerciseTime:_}=a,[p,t]=m.useState(""),[o,j]=m.useState(""),v=Math.floor(h),g=d.reduce((w,E)=>w+E.time,0),y=_-g;let C;y<0&&(C=`+${Math.abs(y)}`);const b=v-l;return m.useEffect(()=>{b<=0?t("red"):t(""),y<=0?j("green"):j("")},[b,y]),e.jsxs("div",{children:[e.jsxs("ul",{className:r.container,children:[e.jsxs("li",{className:r["user-daily-items"],children:[e.jsxs("div",{className:r["user-daily"],children:[e.jsx("svg",{width:"20",height:"20",children:e.jsx("use",{href:`${x}#icon-fork-knife`})}),e.jsx("p",{className:r["user-daily-text"],children:"Daily calorie intake"})]}),e.jsx("p",{className:r["user-daily-text-value"],children:v||0})]}),e.jsxs("li",{className:r["user-daily-items"],children:[e.jsxs("div",{className:r["user-daily"],children:[e.jsx("svg",{width:"20",height:"20",children:e.jsx("use",{href:`${x}#icon-dumbbell`})}),e.jsx("p",{className:r["user-daily-text"],children:"Daily physical activity"})]}),e.jsxs("p",{className:r["user-daily-text-value"],children:[_||0," min"]})]}),e.jsxs("li",{className:r["user-daily-items"],children:[e.jsxs("div",{className:r["user-daily"],children:[e.jsx("svg",{width:"20",height:"20",children:e.jsx("use",{href:`${x}#icon-apple`})}),e.jsx("p",{className:r["user-daily-text"],children:"Сalories consumed"})]}),e.jsx("p",{className:r["user-daily-text-value"],children:Math.floor(l)||0})]}),e.jsxs("li",{className:r["user-daily-items"],children:[e.jsxs("div",{className:r["user-daily"],children:[e.jsx("svg",{width:"20",height:"20",children:e.jsx("use",{href:`${x}#icon-calories`})}),e.jsx("p",{className:r["user-daily-text"],children:"Сalories burned"})]}),e.jsx("p",{className:r["user-daily-text-value"],children:n||0})]}),e.jsxs("li",{className:r["user-daily-items"],style:p==="red"?{border:"1px solid #e6533c"}:null,children:[e.jsxs("div",{className:r["user-daily"],children:[e.jsx("svg",{width:"20",height:"20",children:e.jsx("use",{href:`${x}#icon-bubble`})}),e.jsx("p",{className:r["user-daily-text"],children:"Calories remaining"})]}),e.jsx("p",{className:r["user-daily-text-value"],children:Math.floor(b)||0})]}),e.jsxs("li",{className:r["user-daily-items"],style:o==="green"?{border:"1px solid #3CBF61"}:null,children:[e.jsxs("div",{className:r["user-daily"],children:[e.jsx("svg",{width:"20",height:"20",children:e.jsx("use",{href:`${x}#icon-running-figure`})}),e.jsx("p",{className:r["user-daily-text"],children:"Sports remaining"})]}),e.jsx("p",{className:r["user-daily-text-value"],children:y<0?C+" min":y+" min"})]})]}),e.jsxs("p",{className:r["user-notification"],children:[e.jsx("span",{children:e.jsx("svg",{width:"24",height:"24",children:e.jsx("use",{href:`${J}#icon-exclamation-mark`})})}),"Record all your meals in the calorie diary every day. This will help you be aware of your nutrition and make informed choices."]})]})}const et=ee`
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
`,tt="_container_1sx8w_1",rt="_svg_1sx8w_6",st="_txt_1sx8w_12",R={container:tt,svg:rt,txt:st},at=({selectedDate:a,onChange:n,minDate:l,maxDate:d})=>{const h=m.forwardRef(({onClick:_},p)=>e.jsxs("div",{onClick:_,ref:p,className:R.container,children:[e.jsx("div",{className:R.txt,children:K(a,"dd/MM/yyyy")}),e.jsx("div",{children:e.jsx("svg",{className:R.svg,children:e.jsx("use",{href:`${x}#icon-calendar-bage`})})})]}));return e.jsxs(e.Fragment,{children:[e.jsx(Q,{selected:a,onChange:n,customInput:e.jsx(h,{}),minDate:l,maxDate:d,dateFormat:"dd MM yyyy",calendarStartDay:1}),e.jsx(et,{})]})},it="_input_nkglg_1",nt="_arrowLeft_nkglg_8",ct="_arrowRight_nkglg_17",ot="_box_nkglg_21",lt="_opacity_nkglg_27",q={input:it,arrowLeft:nt,arrowRight:ct,box:ot,opacity:lt},dt=({minDate:a,maxDate:n,selectedDate:l,setSelectedDate:d,handleToNextDay:h,handleToPreviousDay:_,additionalIconClass:p})=>{const t=p==="opacity-left",o=p==="opacity-right";return e.jsxs("div",{className:q.box,children:[e.jsx(at,{minDate:a,maxDate:n,selectedDate:l,onChange:d}),e.jsxs("div",{children:[e.jsx("button",{type:"button",className:q.arrowLeft,onClick:_,style:t?{opacity:.2}:null,children:e.jsx("svg",{width:"16",height:"16",children:e.jsx("use",{href:`${x}#icon-chevron-left`})})}),e.jsx("button",{type:"button",onClick:h,className:q.arrowRight,style:o?{opacity:.2}:null,children:e.jsx("svg",{width:"16",height:"16",children:e.jsx("use",{href:`${x}#icon-chevron-right`})})})]})]})},pt="_container_166rm_1",ht="_titleCont_166rm_18",xt="_itemsCont_166rm_25",D={container:pt,titleCont:ht,itemsCont:xt};function jt(){const a=U(),n=G(),{date:l}=V(),d=I(),{user:h}=S(),[_,p]=m.useState("opacity-right"),t=c=>c.toLocaleDateString("en-GB",{day:"2-digit",month:"2-digit",year:"numeric"}).replace(/\//g,"-");m.useEffect(()=>{d(Y())},[d]);const o=new Date,j=t(o),[v,g]=m.useState(l?B(l,"dd-MM-yyyy",new Date):new Date),y=W(L(h.createdAt)),{doneExercises:C,consumedProducts:b}=k();m.useEffect(()=>{l?(d($(l)),a(`/diary/${l}`)):(d($(j)),a(`/diary/${j}`));const c=L(h.createdAt),u=l?B(l,"dd-MM-yyyy",new Date):o,M=t(o),O=t(c),T=t(u);p(T===M?"opacity-right":T===O?"opacity-left":"")},[d,l,j,a,h.createdAt]),m.useEffect(()=>{d(H())},[d]);const w=c=>{const u=t(c);a(`/diary/${u}`),d($(u))},E=()=>{const c=X(v,1),u=W(L(h.createdAt));if(c.getDate()===u.getDate()){g(c),w(c);return}c.getTime()<u.getTime()||(g(c),w(c))},z=()=>{const c=Z(v,1),u=W(new Date);if(c.getDate()===u.getDate()){g(c),w(c);return}c>u||(g(c),w(c))},A=c=>{g(c),w(c)};return e.jsxs("div",{className:`${D.backGround} layoutContainer`,children:[e.jsxs("div",{className:D.titleCont,children:[e.jsx(se,{title:"Diary"}),e.jsx(dt,{minDate:y,maxDate:o,selectedDate:v,setSelectedDate:A,handleToNextDay:z,handleToPreviousDay:E,additionalIconClass:_})]}),e.jsxs("div",{className:D.container,children:[e.jsxs("div",{className:D.itemsCont,children:[e.jsx(Ee,{products:b,location:n}),e.jsx(Qe,{exercises:C})]}),e.jsx(Ze,{})]})]})}export{jt as default};
