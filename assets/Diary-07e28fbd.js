import{j as e,r as _,u as z,s as m,d as P,N as F,a as S,b as U,c as G,e as V,f as Y,g as W,h as H}from"./index-cc989089.js";import{u as C}from"./useDiary-e3177adb.js";import{i as J}from"./emotion-unitless.esm-0beb53a7.js";import{f as K,t as Q,p as B,s as L,a as R,b as X,c as Z}from"./index-b3b21111.js";import{a as ee}from"./styled-components.browser.esm-d42d3dc9.js";import"./createClass-653986ad.js";const te="_titleContainer_1plm8_1",se={titleContainer:te};function re({title:n}){return e.jsxs("h1",{className:se.titleContainer,children:[n," "]})}const ae="_dayProductsWrapper_9b7lz_1",ie="_headerWrapper_9b7lz_13",ne="_btnWrapper_9b7lz_18",ce="_title_9b7lz_22",oe="_addProductBtn_9b7lz_27",le="_link_9b7lz_39",de="_svg_9b7lz_57",pe="_lin_9b7lz_39",he="_errNotFound_9b7lz_64",j={dayProductsWrapper:ae,headerWrapper:ie,btnWrapper:ne,title:ce,addProductBtn:oe,link:le,svg:de,lin:pe,errNotFound:he},me="_wrapper_1sjdk_1",_e="_svg_1sjdk_21",xe="_btnDelete_1sjdk_49",ue="_wrapperListContainer_1sjdk_57",ye="_wrapperList_1sjdk_57",ge="_title_1sjdk_79",we="_text_1sjdk_87",je="_textRecommend_1sjdk_100",ve="_wrapperRecommendContainer_1sjdk_106",fe="_wrapperRecommend_1sjdk_106",Ne="_wrapperItemTitle_1sjdk_130",be="_wrapperItemCategory_1sjdk_145",ke="_wrapperItemCalories_1sjdk_159",Ce="_wrapperItemWeigth_1sjdk_173",De="_flex_1sjdk_187",Ee="_containerError_1sjdk_202",$e="_circle_1sjdk_217",i={wrapper:me,svg:_e,btnDelete:xe,wrapperListContainer:ue,wrapperList:ye,title:ge,text:we,textRecommend:je,wrapperRecommendContainer:ve,wrapperRecommend:fe,wrapperItemTitle:Ne,wrapperItemCategory:be,wrapperItemCalories:ke,wrapperItemWeigth:Ce,flex:De,containerError:Ee,circle:$e},We=({products:n})=>{const[a,l]=_.useState(window.innerWidth),{date:d}=C(),h=z();_.useEffect(()=>{const t=()=>{l(window.innerWidth)};return window.addEventListener("resize",t),()=>{window.removeEventListener("resize",t)}},[]);const x=t=>{h(P({date:d,credentials:{id:t._id}}))},p=t=>t.charAt(0).toUpperCase()+t.slice(1);return e.jsx("div",{className:i.wrapper,children:n.length!==0?n.map((t,o)=>e.jsxs("div",{className:i.wrapperListContainer,children:[e.jsxs("ul",{className:i.wrapperList,children:[e.jsxs("li",{className:i.wrapperItemTitle,children:[e.jsx("div",{className:i.title,style:{display:a>=768&&o>0?"none":"block"},children:"Title"}),e.jsx("div",{className:i.text,children:p(t.title)})]}),e.jsxs("li",{className:i.wrapperItemCategory,children:[e.jsx("div",{className:i.title,style:{display:a>=768&&o>0?"none":"block"},children:"Category"}),e.jsx("div",{className:i.text,children:p(t.category)})]}),e.jsxs("li",{className:i.wrapperItemCalories,children:[e.jsx("div",{className:i.title,style:{display:a>=768&&o>0?"none":"block"},children:"Calories"}),e.jsx("div",{className:i.text,children:t.calories})]}),e.jsxs("li",{className:i.wrapperItemWeigth,children:[e.jsx("div",{className:i.title,style:{display:a>=768&&o>0?"none":"block"},children:"Weight"}),e.jsx("div",{className:i.text,children:t.amount})]}),e.jsxs("li",{className:i.wrapperItemRecommend,children:[e.jsx("div",{className:i.title,style:{display:a>=768&&o>0?"none":"block"},children:"Recommend"}),e.jsxs("div",{className:i.wrapperRecommendContainer,children:[e.jsxs("div",{className:i.wrapperRecommend,children:[e.jsx("div",{className:i.circle,style:{backgroundColor:t.groupBloodNotAllowed?"green":"red"}}),e.jsx("div",{className:i.textRecommend,children:t.groupBloodNotAllowed?"Yes":"No"})]}),e.jsx("button",{type:"button",className:i.btnDelete,onClick:()=>x(t),children:e.jsx("svg",{width:"20",height:"20",className:i.svg,children:e.jsx("use",{href:`${m}#icon-trash`})})})]})]})]})," "]},t._id)):e.jsx("div",{className:i.containerError,children:e.jsx("span",{children:"Not found products"})})})};function Le({products:n,location:a}){return e.jsxs("div",{className:j.dayProductsWrapper,children:[e.jsxs("div",{className:j.headerWrapper,children:[e.jsx("p",{className:j.title,children:"Products"}),e.jsx("div",{className:j.btnWrapper,children:e.jsxs("button",{className:j.addProductBtn,children:[e.jsxs(F,{className:j.link,state:{from:a},to:"/products",children:["Add product"," "]}),e.jsx("svg",{width:"16",height:"16",className:j.svg,children:e.jsx("use",{href:`${m}#icon-add-arrow`})})]})})]}),e.jsx(We,{products:n})]})}const Re="_dayExercisesWrapper_1w5wp_1",Ie="_headerWrapper_1w5wp_12",ze="_btnWrapper_1w5wp_17",Te="_title_1w5wp_21",Be="_addExerciseBtn_1w5wp_26",Pe="_link_1w5wp_39",Fe="_svg_1w5wp_42",Se="_errNotFound_1w5wp_61",v={dayExercisesWrapper:Re,headerWrapper:Ie,btnWrapper:ze,title:Te,addExerciseBtn:Be,link:Pe,svg:Fe,errNotFound:Se},Ae="_wrapper_1hc3o_1",Me="_wrapperListContainer_1hc3o_43",qe="_wrapperList_1hc3o_43",Oe="_title_1hc3o_64",Ue="_text_1hc3o_72",Ge="_flex_1hc3o_85",Ve="_btnDelete_1hc3o_90",Ye="_svg_1hc3o_94",He="_wrapperBodyPart_1hc3o_101",Je="_wrapperEquipment_1hc3o_115",Ke="_wrapeerName_1hc3o_129",Qe="_wrapperTarget_1hc3o_144",Xe="_wrapperBurnedCalories_1hc3o_158",Ze="_withTime_1hc3o_179",et="_containerError_1hc3o_196",s={wrapper:Ae,wrapperListContainer:Me,wrapperList:qe,title:Oe,text:Ue,flex:Ge,btnDelete:Ve,svg:Ye,wrapperBodyPart:He,wrapperEquipment:Je,wrapeerName:Ke,wrapperTarget:Qe,wrapperBurnedCalories:Xe,withTime:Ze,containerError:et};function tt({exercises:n}){const[a,l]=_.useState(window.innerWidth),{date:d}=C(),h=z();_.useEffect(()=>{const t=()=>{l(window.innerWidth)};return window.addEventListener("resize",t),()=>{window.removeEventListener("resize",t)}},[]);const x=t=>{h(P({date:d,credentials:{id:t._id}}))},p=t=>t.charAt(0).toUpperCase()+t.slice(1);return e.jsx("div",{className:s.wrapper,children:n.length!==0?n.map((t,o)=>e.jsx("div",{className:s.wrapperListContainer,children:e.jsxs("ul",{className:s.wrapperList,children:[e.jsxs("li",{className:s.wrapperBodyPart,children:[e.jsx("div",{className:s.title,style:{display:a>=768&&o>0?"none":"block"},children:"Body Part"}),e.jsx("div",{className:s.text,children:p(t.bodyPart)})]}),e.jsxs("li",{className:s.wrapperEquipment,children:[e.jsx("div",{className:s.title,style:{display:a>=768&&o>0?"none":"block"},children:"Equipment"}),e.jsx("div",{className:s.text,children:p(t.equipment)})]}),e.jsxs("li",{className:s.wrapeerName,children:[e.jsx("div",{className:s.title,style:{display:a>=768&&o>0?"none":"block"},children:"Name"}),e.jsx("div",{className:s.text,children:p(t.name)})]}),e.jsxs("li",{className:s.wrapperTarget,children:[e.jsx("div",{className:s.title,style:{display:a>=768&&o>0?"none":"block"},children:"Target"}),e.jsx("div",{className:s.text,children:p(t.target)})]}),e.jsxs("li",{className:s.wrapperBurnedCalories,children:[e.jsx("div",{className:s.title,style:{display:a>=768&&o>0?"none":"block"},children:"Burned Calories"}),e.jsx("div",{className:s.text,children:t.calories})]}),e.jsxs("li",{className:s.wrapperTime,children:[e.jsx("div",{className:s.title,style:{display:a>=768&&o>0?"none":"block"},children:"Time"}),e.jsxs("div",{className:s.flex,children:[e.jsx("div",{className:`${s.text} ${s.withTime}`,children:t.time}),e.jsx("button",{type:"button",className:s.btnDelete,onClick:()=>x(t),children:e.jsx("svg",{width:"20",height:"20",className:s.svg,children:e.jsx("use",{href:`${m}#icon-trash`})})})]})]})]})},t._id)):e.jsx("div",{className:s.containerError,children:e.jsx("span",{children:"Not found products"})})})}function st({exercises:n,location:a}){return e.jsxs("div",{className:v.dayExercisesWrapper,children:[e.jsxs("div",{className:v.headerWrapper,children:[e.jsx("p",{className:v.title,children:"Exercises"}),e.jsx("div",{className:v.btnWrapper,children:e.jsxs("button",{className:v.addExerciseBtn,children:[e.jsx(F,{className:v.link,state:{from:a},to:"/exercises",children:"Add exercise"}),e.jsx("svg",{width:"16",height:"16",className:v.svg,children:e.jsx("use",{href:`${m}#icon-add-arrow`})})]})})]}),e.jsx(tt,{exercises:n})]})}const rt="_container_lgox2_1",r={container:rt,"user-daily":"_user-daily_lgox2_22","user-daily-items":"_user-daily-items_lgox2_27","user-daily-list":"_user-daily-list_lgox2_34","user-daily-text":"_user-daily-text_lgox2_85","user-daily-text-value":"_user-daily-text-value_lgox2_93","user-notification":"_user-notification_lgox2_120"};function at(){const{colories:n}=S(),{burnedCalories:a,consumedCalories:l}=C(),{doneExercises:d}=C(),{bmr:h,dailyExerciseTime:x}=n,[p,t]=_.useState(""),[o,f]=_.useState(""),N=Math.floor(h),g=d.reduce((w,$)=>w+$.time,0),y=x-g;let D;y<0&&(D=`+${Math.abs(y)}`);const b=N-l;return _.useEffect(()=>{b<=0?t("red"):t(""),y<=0?f("green"):f("")},[b,y]),e.jsxs("div",{children:[e.jsxs("ul",{className:r.container,children:[e.jsxs("li",{className:r["user-daily-items"],children:[e.jsxs("div",{className:r["user-daily"],children:[e.jsx("svg",{width:"20",height:"20",children:e.jsx("use",{href:`${m}#icon-fork-knife`})}),e.jsx("p",{className:r["user-daily-text"],children:"Daily calorie intake"})]}),e.jsx("p",{className:r["user-daily-text-value"],children:N||0})]}),e.jsxs("li",{className:r["user-daily-items"],children:[e.jsxs("div",{className:r["user-daily"],children:[e.jsx("svg",{width:"20",height:"20",children:e.jsx("use",{href:`${m}#icon-dumbbell`})}),e.jsx("p",{className:r["user-daily-text"],children:"Daily physical activity"})]}),e.jsxs("p",{className:r["user-daily-text-value"],children:[x||0," min"]})]}),e.jsxs("li",{className:r["user-daily-items"],children:[e.jsxs("div",{className:r["user-daily"],children:[e.jsx("svg",{width:"20",height:"20",children:e.jsx("use",{href:`${m}#icon-apple`})}),e.jsx("p",{className:r["user-daily-text"],children:"Сalories consumed"})]}),e.jsx("p",{className:r["user-daily-text-value"],children:Math.floor(l)||0})]}),e.jsxs("li",{className:r["user-daily-items"],children:[e.jsxs("div",{className:r["user-daily"],children:[e.jsx("svg",{width:"20",height:"20",children:e.jsx("use",{href:`${m}#icon-calories`})}),e.jsx("p",{className:r["user-daily-text"],children:"Сalories burned"})]}),e.jsx("p",{className:r["user-daily-text-value"],children:a||0})]}),e.jsxs("li",{className:r["user-daily-items"],style:p==="red"?{border:"1px solid #e6533c"}:null,children:[e.jsxs("div",{className:r["user-daily"],children:[e.jsx("svg",{width:"20",height:"20",children:e.jsx("use",{href:`${m}#icon-bubble`})}),e.jsx("p",{className:r["user-daily-text"],children:"Calories remaining"})]}),e.jsx("p",{className:r["user-daily-text-value"],children:Math.floor(b)||0})]}),e.jsxs("li",{className:r["user-daily-items"],style:o==="green"?{border:"1px solid #3CBF61"}:null,children:[e.jsxs("div",{className:r["user-daily"],children:[e.jsx("svg",{width:"20",height:"20",children:e.jsx("use",{href:`${m}#icon-running-figure`})}),e.jsx("p",{className:r["user-daily-text"],children:"Sports remaining"})]}),e.jsx("p",{className:r["user-daily-text-value"],children:y<0?D+" min":y+" min"})]})]}),e.jsxs("p",{className:r["user-notification"],children:[e.jsx("span",{children:e.jsx("svg",{width:"24",height:"24",children:e.jsx("use",{href:`${J}#icon-exclamation-mark`})})}),"Record all your meals in the calorie diary every day. This will help you be aware of your nutrition and make informed choices."]})]})}const it=ee`
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
`,nt="_container_1rs47_1",ct="_svg_1rs47_6",ot="_txt_1rs47_19",I={container:nt,svg:ct,txt:ot},lt=({selectedDate:n,onChange:a,minDate:l,maxDate:d})=>{const h=_.forwardRef(({onClick:x},p)=>e.jsxs("div",{onClick:x,ref:p,className:I.container,children:[e.jsx("div",{className:I.txt,children:K(n,"dd/MM/yyyy")}),e.jsx("div",{children:e.jsx("svg",{className:I.svg,children:e.jsx("use",{href:`${m}#calendar`})})})]}));return e.jsxs(e.Fragment,{children:[e.jsx(Q,{selected:n,onChange:a,customInput:e.jsx(h,{}),minDate:l,maxDate:d,dateFormat:"dd MM yyyy",calendarStartDay:1}),e.jsx(it,{})]})},dt="_input_1i3a6_1",pt="_arrowLeft_1i3a6_8",ht="_arrowRight_1i3a6_17",mt="_box_1i3a6_21",_t="_opacity_1i3a6_28",xt="_svg_1i3a6_31",k={input:dt,arrowLeft:pt,arrowRight:ht,box:mt,opacity:_t,svg:xt},ut=({minDate:n,maxDate:a,selectedDate:l,setSelectedDate:d,handleToNextDay:h,handleToPreviousDay:x,additionalIconClass:p})=>{const t=p==="opacity-left",o=p==="opacity-right";return e.jsxs("div",{className:k.box,children:[e.jsx(lt,{minDate:n,maxDate:a,selectedDate:l,onChange:d}),e.jsxs("div",{children:[e.jsx("button",{type:"button",className:k.arrowLeft,onClick:x,style:t?{opacity:.2}:null,children:e.jsx("svg",{className:k.svg,width:"16",height:"16",children:e.jsx("use",{href:`${m}#icon-chevron-left1`})})}),e.jsx("button",{type:"button",onClick:h,className:k.arrowRight,style:o?{opacity:.2}:null,children:e.jsx("svg",{className:k.svg,width:"16",height:"16",children:e.jsx("use",{href:`${m}#icon-chevron-right1`})})})]})]})},yt="_container_166rm_1",gt="_titleCont_166rm_18",wt="_itemsCont_166rm_25",E={container:yt,titleCont:gt,itemsCont:wt};function Ct(){const n=U(),a=G(),{date:l}=V(),d=z(),{user:h}=S(),[x,p]=_.useState("opacity-right"),t=c=>c.toLocaleDateString("en-GB",{day:"2-digit",month:"2-digit",year:"numeric"}).replace(/\//g,"-");_.useEffect(()=>{d(Y())},[d]);const o=new Date,f=t(o),[N,g]=_.useState(l?B(l,"dd-MM-yyyy",new Date):new Date),y=L(R(h.createdAt)),{doneExercises:D,consumedProducts:b}=C();_.useEffect(()=>{l?(d(W(l)),n(`/diary/${l}`)):(d(W(f)),n(`/diary/${f}`));const c=R(h.createdAt),u=l?B(l,"dd-MM-yyyy",new Date):o,q=t(o),O=t(c),T=t(u);p(T===q?"opacity-right":T===O?"opacity-left":"")},[d,l,f,n,h.createdAt]),_.useEffect(()=>{d(H())},[d]);const w=c=>{const u=t(c);n(`/diary/${u}`),d(W(u))},$=()=>{const c=X(N,1),u=L(R(h.createdAt));if(c.getDate()===u.getDate()){g(c),w(c);return}c.getTime()<u.getTime()||(g(c),w(c))},A=()=>{const c=Z(N,1),u=L(new Date);if(c.getDate()===u.getDate()){g(c),w(c);return}c>u||(g(c),w(c))},M=c=>{g(c),w(c)};return e.jsxs("div",{className:`${E.backGround} layoutContainer`,children:[e.jsxs("div",{className:E.titleCont,children:[e.jsx(re,{title:"Diary"}),e.jsx(ut,{minDate:y,maxDate:o,selectedDate:N,setSelectedDate:M,handleToNextDay:A,handleToPreviousDay:$,additionalIconClass:x})]}),e.jsxs("div",{className:E.container,children:[e.jsxs("div",{className:E.itemsCont,children:[e.jsx(Le,{products:b,location:a}),e.jsx(st,{exercises:D,location:a})]}),e.jsx(at,{})]})]})}export{Ct as default};
