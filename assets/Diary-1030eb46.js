import{j as e,r as u,u as z,s as m,d as P,N as F,a as S,i as U,b as V,c as Y,e as H,f as J,h as W}from"./index-d51d83b2.js";import{u as N}from"./useDiary-dc6c51b1.js";import{f as K,t as Q,p as B,s as L,a as R,b as X,c as Z}from"./index-f5778f5e.js";import{a as ee}from"./styled-components.browser.esm-fbf77bc6.js";import{L as te}from"./Loader-3fe6cf2a.js";import"./createClass-bfc2189c.js";import"./emotion-unitless.esm-475d8cc4.js";const se="_titleContainer_1plm8_1",re={titleContainer:se};function ae({title:n}){return e.jsxs("h1",{className:re.titleContainer,children:[n," "]})}const ie="_dayProductsWrapper_9b7lz_1",ne="_headerWrapper_9b7lz_13",ce="_btnWrapper_9b7lz_18",oe="_title_9b7lz_22",le="_addProductBtn_9b7lz_27",de="_link_9b7lz_39",pe="_svg_9b7lz_57",he="_lin_9b7lz_39",me="_errNotFound_9b7lz_64",j={dayProductsWrapper:ie,headerWrapper:ne,btnWrapper:ce,title:oe,addProductBtn:le,link:de,svg:pe,lin:he,errNotFound:me},xe="_wrapper_1sjdk_1",_e="_svg_1sjdk_21",ue="_btnDelete_1sjdk_49",ye="_wrapperListContainer_1sjdk_57",ge="_wrapperList_1sjdk_57",we="_title_1sjdk_79",je="_text_1sjdk_87",ve="_textRecommend_1sjdk_100",fe="_wrapperRecommendContainer_1sjdk_106",Ne="_wrapperRecommend_1sjdk_106",be="_wrapperItemTitle_1sjdk_130",ke="_wrapperItemCategory_1sjdk_145",Ce="_wrapperItemCalories_1sjdk_159",De="_wrapperItemWeigth_1sjdk_173",Ee="_flex_1sjdk_187",$e="_containerError_1sjdk_202",We="_circle_1sjdk_217",i={wrapper:xe,svg:_e,btnDelete:ue,wrapperListContainer:ye,wrapperList:ge,title:we,text:je,textRecommend:ve,wrapperRecommendContainer:fe,wrapperRecommend:Ne,wrapperItemTitle:be,wrapperItemCategory:ke,wrapperItemCalories:Ce,wrapperItemWeigth:De,flex:Ee,containerError:$e,circle:We},Le=({products:n})=>{const[a,l]=u.useState(window.innerWidth),{date:d}=N(),h=z();u.useEffect(()=>{const t=()=>{l(window.innerWidth)};return window.addEventListener("resize",t),()=>{window.removeEventListener("resize",t)}},[]);const x=t=>{h(P({date:d,credentials:{type:"product",id:t._id}}))},p=t=>t.charAt(0).toUpperCase()+t.slice(1);return e.jsx("div",{className:i.wrapper,children:n.length!==0?n.map((t,c)=>e.jsxs("div",{className:i.wrapperListContainer,children:[e.jsxs("ul",{className:i.wrapperList,children:[e.jsxs("li",{className:i.wrapperItemTitle,children:[e.jsx("div",{className:i.title,style:{display:a>=768&&c>0?"none":"block"},children:"Title"}),e.jsx("div",{className:i.text,children:p(t.product.title)})]}),e.jsxs("li",{className:i.wrapperItemCategory,children:[e.jsx("div",{className:i.title,style:{display:a>=768&&c>0?"none":"block"},children:"Category"}),e.jsx("div",{className:i.text,children:p(t.product.category)})]}),e.jsxs("li",{className:i.wrapperItemCalories,children:[e.jsx("div",{className:i.title,style:{display:a>=768&&c>0?"none":"block"},children:"Calories"}),e.jsx("div",{className:i.text,children:t.calories})]}),e.jsxs("li",{className:i.wrapperItemWeigth,children:[e.jsx("div",{className:i.title,style:{display:a>=768&&c>0?"none":"block"},children:"Weight"}),e.jsx("div",{className:i.text,children:t.amount})]}),e.jsxs("li",{className:i.wrapperItemRecommend,children:[e.jsx("div",{className:i.title,style:{display:a>=768&&c>0?"none":"block"},children:"Recommend"}),e.jsxs("div",{className:i.wrapperRecommendContainer,children:[e.jsxs("div",{className:i.wrapperRecommend,children:[e.jsx("div",{className:i.circle,style:{backgroundColor:t.groupBloodNotAllowed?"green":"red"}}),e.jsx("div",{className:i.textRecommend,children:t.groupBloodNotAllowed?"Yes":"No"})]}),e.jsx("button",{type:"button",className:i.btnDelete,onClick:()=>x(t),children:e.jsx("svg",{width:"20",height:"20",className:i.svg,children:e.jsx("use",{href:`${m}#icon-trash`})})})]})]})]})," "]},t._id)):e.jsx("div",{className:i.containerError,children:e.jsx("span",{children:"Not found products"})})})};function Re({products:n,location:a}){return e.jsxs("div",{className:j.dayProductsWrapper,children:[e.jsxs("div",{className:j.headerWrapper,children:[e.jsx("p",{className:j.title,children:"Products"}),e.jsx("div",{className:j.btnWrapper,children:e.jsxs("button",{className:j.addProductBtn,children:[e.jsxs(F,{className:j.link,state:{from:a},to:"/products",children:["Add product"," "]}),e.jsx("svg",{width:"16",height:"16",className:j.svg,children:e.jsx("use",{href:`${m}#icon-add-arrow`})})]})})]}),e.jsx(Le,{products:n})]})}const Ie="_dayExercisesWrapper_1w5wp_1",ze="_headerWrapper_1w5wp_12",Te="_btnWrapper_1w5wp_17",Be="_title_1w5wp_21",Pe="_addExerciseBtn_1w5wp_26",Fe="_link_1w5wp_39",Se="_svg_1w5wp_42",Ae="_errNotFound_1w5wp_61",v={dayExercisesWrapper:Ie,headerWrapper:ze,btnWrapper:Te,title:Be,addExerciseBtn:Pe,link:Fe,svg:Se,errNotFound:Ae},Me="_wrapper_1hc3o_1",qe="_wrapperListContainer_1hc3o_43",Oe="_wrapperList_1hc3o_43",Ge="_title_1hc3o_64",Ue="_text_1hc3o_72",Ve="_flex_1hc3o_85",Ye="_btnDelete_1hc3o_90",He="_svg_1hc3o_94",Je="_wrapperBodyPart_1hc3o_101",Ke="_wrapperEquipment_1hc3o_115",Qe="_wrapeerName_1hc3o_129",Xe="_wrapperTarget_1hc3o_144",Ze="_wrapperBurnedCalories_1hc3o_158",et="_withTime_1hc3o_179",tt="_containerError_1hc3o_196",s={wrapper:Me,wrapperListContainer:qe,wrapperList:Oe,title:Ge,text:Ue,flex:Ve,btnDelete:Ye,svg:He,wrapperBodyPart:Je,wrapperEquipment:Ke,wrapeerName:Qe,wrapperTarget:Xe,wrapperBurnedCalories:Ze,withTime:et,containerError:tt};function st({exercises:n}){const[a,l]=u.useState(window.innerWidth),{date:d}=N(),h=z();u.useEffect(()=>{const t=()=>{l(window.innerWidth)};return window.addEventListener("resize",t),()=>{window.removeEventListener("resize",t)}},[]);const x=t=>{h(P({date:d,credentials:{type:"exercise",id:t._id}}))},p=t=>t.charAt(0).toUpperCase()+t.slice(1);return e.jsx("div",{className:s.wrapper,children:n.length!==0?n.map((t,c)=>e.jsx("div",{className:s.wrapperListContainer,children:e.jsxs("ul",{className:s.wrapperList,children:[e.jsxs("li",{className:s.wrapperBodyPart,children:[e.jsx("div",{className:s.title,style:{display:a>=768&&c>0?"none":"block"},children:"Body Part"}),e.jsx("div",{className:s.text,children:p(t.exercise.bodyPart)})]}),e.jsxs("li",{className:s.wrapperEquipment,children:[e.jsx("div",{className:s.title,style:{display:a>=768&&c>0?"none":"block"},children:"Equipment"}),e.jsx("div",{className:s.text,children:p(t.exercise.equipment)})]}),e.jsxs("li",{className:s.wrapeerName,children:[e.jsx("div",{className:s.title,style:{display:a>=768&&c>0?"none":"block"},children:"Name"}),e.jsx("div",{className:s.text,children:p(t.exercise.name)})]}),e.jsxs("li",{className:s.wrapperTarget,children:[e.jsx("div",{className:s.title,style:{display:a>=768&&c>0?"none":"block"},children:"Target"}),e.jsx("div",{className:s.text,children:p(t.exercise.target)})]}),e.jsxs("li",{className:s.wrapperBurnedCalories,children:[e.jsx("div",{className:s.title,style:{display:a>=768&&c>0?"none":"block"},children:"Burned Calories"}),e.jsx("div",{className:s.text,children:t.calories})]}),e.jsxs("li",{className:s.wrapperTime,children:[e.jsx("div",{className:s.title,style:{display:a>=768&&c>0?"none":"block"},children:"Time"}),e.jsxs("div",{className:s.flex,children:[e.jsx("div",{className:`${s.text} ${s.withTime}`,children:t.time}),e.jsx("button",{type:"button",className:s.btnDelete,onClick:()=>x(t),children:e.jsx("svg",{width:"20",height:"20",className:s.svg,children:e.jsx("use",{href:`${m}#icon-trash`})})})]})]})]})},t._id)):e.jsx("div",{className:s.containerError,children:e.jsx("span",{children:"Not found products"})})})}function rt({exercises:n,location:a}){return e.jsxs("div",{className:v.dayExercisesWrapper,children:[e.jsxs("div",{className:v.headerWrapper,children:[e.jsx("p",{className:v.title,children:"Exercises"}),e.jsx("div",{className:v.btnWrapper,children:e.jsxs("button",{className:v.addExerciseBtn,children:[e.jsx(F,{className:v.link,state:{from:a},to:"/exercises",children:"Add exercise"}),e.jsx("svg",{width:"16",height:"16",className:v.svg,children:e.jsx("use",{href:`${m}#icon-add-arrow`})})]})})]}),e.jsx(st,{exercises:n})]})}const at="_container_lgox2_1",r={container:at,"user-daily":"_user-daily_lgox2_22","user-daily-items":"_user-daily-items_lgox2_27","user-daily-list":"_user-daily-list_lgox2_34","user-daily-text":"_user-daily-text_lgox2_85","user-daily-text-value":"_user-daily-text-value_lgox2_93","user-notification":"_user-notification_lgox2_120"};function it(){const{user:n}=S(),{burnedCalories:a,consumedCalories:l}=N(),{doneExercises:d}=N(),{bmr:h,dailyExerciseTime:x}=n,[p,t]=u.useState(""),[c,g]=u.useState(""),f=Math.floor(h),b=d.reduce(($,w)=>$+w.time,0),_=x-b;let D;_<0&&(D=`+${Math.abs(_)}`);const k=f-l;return u.useEffect(()=>{k<=0?t("red"):t(""),_<=0?g("green"):g("")},[k,_]),e.jsxs("div",{children:[e.jsxs("ul",{className:r.container,children:[e.jsxs("li",{className:r["user-daily-items"],children:[e.jsxs("div",{className:r["user-daily"],children:[e.jsx("svg",{width:"20",height:"20",children:e.jsx("use",{href:`${m}#icon-fork-knife`})}),e.jsx("p",{className:r["user-daily-text"],children:"Daily calorie intake"})]}),e.jsx("p",{className:r["user-daily-text-value"],children:f||0})]}),e.jsxs("li",{className:r["user-daily-items"],children:[e.jsxs("div",{className:r["user-daily"],children:[e.jsx("svg",{width:"20",height:"20",children:e.jsx("use",{href:`${m}#icon-dumbbell`})}),e.jsx("p",{className:r["user-daily-text"],children:"Daily physical activity"})]}),e.jsxs("p",{className:r["user-daily-text-value"],children:[x||0," min"]})]}),e.jsxs("li",{className:r["user-daily-items"],children:[e.jsxs("div",{className:r["user-daily"],children:[e.jsx("svg",{width:"20",height:"20",children:e.jsx("use",{href:`${m}#icon-apple`})}),e.jsx("p",{className:r["user-daily-text"],children:"Сalories consumed"})]}),e.jsx("p",{className:r["user-daily-text-value"],children:Math.floor(l)||0})]}),e.jsxs("li",{className:r["user-daily-items"],children:[e.jsxs("div",{className:r["user-daily"],children:[e.jsx("svg",{width:"20",height:"20",children:e.jsx("use",{href:`${m}#icon-calories`})}),e.jsx("p",{className:r["user-daily-text"],children:"Сalories burned"})]}),e.jsx("p",{className:r["user-daily-text-value"],children:a||0})]}),e.jsxs("li",{className:r["user-daily-items"],style:p==="red"?{border:"1px solid #e6533c"}:null,children:[e.jsxs("div",{className:r["user-daily"],children:[e.jsx("svg",{width:"20",height:"20",children:e.jsx("use",{href:`${m}#icon-bubble`})}),e.jsx("p",{className:r["user-daily-text"],children:"Calories remaining"})]}),e.jsx("p",{className:r["user-daily-text-value"],children:Math.floor(k)||0})]}),e.jsxs("li",{className:r["user-daily-items"],style:c==="green"?{border:"1px solid #3CBF61"}:null,children:[e.jsxs("div",{className:r["user-daily"],children:[e.jsx("svg",{width:"20",height:"20",children:e.jsx("use",{href:`${m}#icon-running-figure`})}),e.jsx("p",{className:r["user-daily-text"],children:"Sports remaining"})]}),e.jsx("p",{className:r["user-daily-text-value"],children:_<0?D+" min":_+" min"})]})]}),e.jsxs("p",{className:r["user-notification"],children:[e.jsx("span",{children:e.jsx("svg",{width:"24",height:"24",children:e.jsx("use",{href:`${U}#icon-exclamation-mark`})})}),"Record all your meals in the calorie diary every day. This will help you be aware of your nutrition and make informed choices."]})]})}const nt=ee`
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
`,ct="_container_1rs47_1",ot="_svg_1rs47_6",lt="_txt_1rs47_19",I={container:ct,svg:ot,txt:lt},dt=({selectedDate:n,onChange:a,minDate:l,maxDate:d})=>{const h=u.forwardRef(({onClick:x},p)=>e.jsxs("div",{onClick:x,ref:p,className:I.container,children:[e.jsx("div",{className:I.txt,children:K(n,"dd/MM/yyyy")}),e.jsx("div",{children:e.jsx("svg",{className:I.svg,children:e.jsx("use",{href:`${m}#calendar`})})})]}));return e.jsxs(e.Fragment,{children:[e.jsx(Q,{selected:n,onChange:a,customInput:e.jsx(h,{}),minDate:l,maxDate:d,dateFormat:"dd MM yyyy",calendarStartDay:1}),e.jsx(nt,{})]})},pt="_input_1i3a6_1",ht="_arrowLeft_1i3a6_8",mt="_arrowRight_1i3a6_17",xt="_box_1i3a6_21",_t="_opacity_1i3a6_28",ut="_svg_1i3a6_31",C={input:pt,arrowLeft:ht,arrowRight:mt,box:xt,opacity:_t,svg:ut},yt=({minDate:n,maxDate:a,selectedDate:l,setSelectedDate:d,handleToNextDay:h,handleToPreviousDay:x,additionalIconClass:p})=>{const t=p==="opacity-left",c=p==="opacity-right";return e.jsxs("div",{className:C.box,children:[e.jsx(dt,{minDate:n,maxDate:a,selectedDate:l,onChange:d}),e.jsxs("div",{children:[e.jsx("button",{type:"button",className:C.arrowLeft,onClick:x,style:t?{opacity:.2}:null,children:e.jsx("svg",{className:C.svg,width:"16",height:"16",children:e.jsx("use",{href:`${m}#icon-chevron-left1`})})}),e.jsx("button",{type:"button",onClick:h,className:C.arrowRight,style:c?{opacity:.2}:null,children:e.jsx("svg",{className:C.svg,width:"16",height:"16",children:e.jsx("use",{href:`${m}#icon-chevron-right1`})})})]})]})},gt="_container_166rm_1",wt="_titleCont_166rm_18",jt="_itemsCont_166rm_25",E={container:gt,titleCont:wt,itemsCont:jt};function Et(){const n=V(),a=Y(),{date:l}=H(),d=z(),{user:h}=S(),{isLoading:x}=N(),[p,t]=u.useState("opacity-right"),c=o=>o.toLocaleDateString("en-GB",{day:"2-digit",month:"2-digit",year:"numeric"}).replace(/\//g,"-");u.useEffect(()=>{d(J())},[d]);const g=new Date,f=c(g),[b,_]=u.useState(l?B(l,"dd-MM-yyyy",new Date):new Date),D=L(R(h.createdAt)),{doneExercises:k,consumedProducts:$}=N();u.useEffect(()=>{l?(d(W(l)),n(`/diary/${l}`)):(d(W(f)),n(`/diary/${f}`));const o=R(h.createdAt),y=l?B(l,"dd-MM-yyyy",new Date):g,O=c(g),G=c(o),T=c(y);t(T===O?"opacity-right":T===G?"opacity-left":"")},[d,l,f,n,h.createdAt]);const w=o=>{const y=c(o);n(`/diary/${y}`),d(W(y))},A=()=>{const o=X(b,1),y=L(R(h.createdAt));if(o.getDate()===y.getDate()){_(o),w(o);return}o.getTime()<y.getTime()||(_(o),w(o))},M=()=>{const o=Z(b,1),y=L(new Date);if(o.getDate()===y.getDate()){_(o),w(o);return}o>y||(_(o),w(o))},q=o=>{_(o),w(o)};return e.jsxs("div",{className:`${E.backGround} layoutContainer`,children:[e.jsxs("div",{className:E.titleCont,children:[x&&e.jsx(te,{}),e.jsx(ae,{title:"Diary"}),e.jsx(yt,{minDate:D,maxDate:g,selectedDate:b,setSelectedDate:q,handleToNextDay:M,handleToPreviousDay:A,additionalIconClass:p})]}),e.jsxs("div",{className:E.container,children:[e.jsxs("div",{className:E.itemsCont,children:[e.jsx(Re,{products:$,location:a}),e.jsx(rt,{exercises:k,location:a})]}),e.jsx(it,{})]})]})}export{Et as default};
