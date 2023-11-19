import{j as e,r as x,u as q,s as h,d as T,N as B,a as P,b as z,c as A,e as M,f as O,g as $,h as U}from"./index-aca55580.js";import{u as k}from"./useDiary-846b2c17.js";import{i as G}from"./emotion-unitless.esm-74316637.js";import{f as V,t as Y,p as H,s as W,a as I,b as J,c as K}from"./index-a64c27cb.js";import{a as Q}from"./styled-components.browser.esm-2bf85098.js";import"./createClass-e29b3247.js";const X="_titleContainer_1plm8_1",Z={titleContainer:X};function ee({title:i}){return e.jsxs("h1",{className:Z.titleContainer,children:[i," "]})}const te="_dayProductsWrapper_1c3fe_1",re="_headerWrapper_1c3fe_13",se="_btnWrapper_1c3fe_18",ae="_title_1c3fe_22",ie="_addProductBtn_1c3fe_27",ne="_link_1c3fe_39",ce="_errNotFound_1c3fe_58",f={dayProductsWrapper:te,headerWrapper:re,btnWrapper:se,title:ae,addProductBtn:ie,link:ne,errNotFound:ce},oe="_wrapper_172vl_1",le="_btnDelete_172vl_42",de="_wrapperListContainer_172vl_51",pe="_wrapperList_172vl_51",he="_title_172vl_68",xe="_text_172vl_76",me="_textRecommend_172vl_86",_e="_wrapperRecommendContainer_172vl_92",ue="_wrapperRecommend_172vl_92",ye="_wrapperItemTitle_172vl_116",ge="_wrapperItemCategory_172vl_130",we="_wrapperItemCalories_172vl_144",je="_wrapperItemWeigth_172vl_158",ve="_flex_172vl_172",fe="_containerError_172vl_187",Ne="_circle_172vl_202",a={wrapper:oe,btnDelete:le,wrapperListContainer:de,wrapperList:pe,title:he,text:xe,textRecommend:me,wrapperRecommendContainer:_e,wrapperRecommend:ue,wrapperItemTitle:ye,wrapperItemCategory:ge,wrapperItemCalories:we,wrapperItemWeigth:je,flex:ve,containerError:fe,circle:Ne},be=({products:i})=>{const[n,p]=x.useState(window.innerWidth),{date:d}=k(),m=q();x.useEffect(()=>{const t=()=>{p(window.innerWidth)};return window.addEventListener("resize",t),()=>{window.removeEventListener("resize",t)}},[]);const _=t=>{m(T({date:d,credentials:{id:t._id}}))},o=t=>t.charAt(0).toUpperCase()+t.slice(1);return e.jsx("div",{className:a.wrapper,children:i.length!==0?i.map((t,l)=>e.jsxs("div",{className:a.wrapperListContainer,children:[e.jsxs("ul",{className:a.wrapperList,children:[e.jsxs("li",{className:a.wrapperItemTitle,children:[e.jsx("div",{className:a.title,style:{display:n>=768&&l>0?"none":"block"},children:"Title"}),e.jsx("div",{className:a.text,children:o(t.title)})]}),e.jsxs("li",{className:a.wrapperItemCategory,children:[e.jsx("div",{className:a.title,style:{display:n>=768&&l>0?"none":"block"},children:"Category"}),e.jsx("div",{className:a.text,children:o(t.category)})]}),e.jsxs("li",{className:a.wrapperItemCalories,children:[e.jsx("div",{className:a.title,style:{display:n>=768&&l>0?"none":"block"},children:"Calories"}),e.jsx("div",{className:a.text,children:t.calories})]}),e.jsxs("li",{className:a.wrapperItemWeigth,children:[e.jsx("div",{className:a.title,style:{display:n>=768&&l>0?"none":"block"},children:"Weight"}),e.jsx("div",{className:a.text,children:t.amount})]}),e.jsxs("li",{className:a.wrapperItemRecommend,children:[e.jsx("div",{className:a.title,style:{display:n>=768&&l>0?"none":"block"},children:"Recommend"}),e.jsxs("div",{className:a.wrapperRecommendContainer,children:[e.jsxs("div",{className:a.wrapperRecommend,children:[e.jsx("div",{className:a.circle,style:{backgroundColor:t.groupBloodNotAllowed?"green":"red"}}),e.jsx("div",{className:a.textRecommend,children:t.groupBloodNotAllowed?"Yes":"No"})]}),e.jsx("button",{type:"button",className:a.btnDelete,onClick:()=>_(t),children:e.jsx("svg",{width:"20",height:"20",children:e.jsx("use",{href:`${h}#icon-trash`})})})]})]})]})," "]},t._id)):e.jsx("div",{className:a.containerError,children:e.jsx("span",{children:"Not found products"})})})};function ke({products:i,location:n}){return e.jsxs("div",{className:f.dayProductsWrapper,children:[e.jsxs("div",{className:f.headerWrapper,children:[e.jsx("p",{className:f.title,children:"Products"}),e.jsx("div",{className:f.btnWrapper,children:e.jsxs("button",{className:f.addProductBtn,children:[e.jsxs(B,{className:f.link,state:{from:n},to:"/products",children:["Add product"," "]}),e.jsx("svg",{width:"16",height:"16",children:e.jsx("use",{href:`${h}#icon-add-arrow`})})]})})]}),e.jsx(be,{products:i})]})}const Ce="_dayExercisesWrapper_qpevg_1",De="_headerWrapper_qpevg_12",Ee="_btnWrapper_qpevg_17",$e="_title_qpevg_21",We="_addExerciseBtn_qpevg_26",Le="_link_qpevg_39",Re="_errNotFound_qpevg_57",N={dayExercisesWrapper:Ce,headerWrapper:De,btnWrapper:Ee,title:$e,addExerciseBtn:We,link:Le,errNotFound:Re},qe="_wrapper_xaqov_1",Ie="_wrapperListContainer_xaqov_43",Te="_wrapperList_xaqov_43",Be="_title_xaqov_59",Pe="_text_xaqov_67",Se="_flex_xaqov_80",Fe="_btnDelete_xaqov_85",ze="_wrapperBodyPart_xaqov_90",Ae="_wrapperEquipment_xaqov_104",Me="_wrapeerName_xaqov_118",Oe="_wrapperTarget_xaqov_133",Ue="_wrapperBurnedCalories_xaqov_147",Ge="_withTime_xaqov_168",Ve="_containerError_xaqov_185",s={wrapper:qe,wrapperListContainer:Ie,wrapperList:Te,title:Be,text:Pe,flex:Se,btnDelete:Fe,wrapperBodyPart:ze,wrapperEquipment:Ae,wrapeerName:Me,wrapperTarget:Oe,wrapperBurnedCalories:Ue,withTime:Ge,containerError:Ve};function Ye({exercises:i}){const[n,p]=x.useState(window.innerWidth),{date:d}=k(),m=q();x.useEffect(()=>{const t=()=>{p(window.innerWidth)};return window.addEventListener("resize",t),()=>{window.removeEventListener("resize",t)}},[]);const _=t=>{m(T({date:d,credentials:{id:t._id}}))},o=t=>t.charAt(0).toUpperCase()+t.slice(1);return e.jsx("div",{className:s.wrapper,children:i.length!==0?i.map((t,l)=>e.jsx("div",{className:s.wrapperListContainer,children:e.jsxs("ul",{className:s.wrapperList,children:[e.jsxs("li",{className:s.wrapperBodyPart,children:[e.jsx("div",{className:s.title,style:{display:n>=768&&l>0?"none":"block"},children:"Body Part"}),e.jsx("div",{className:s.text,children:o(t.bodyPart)})]}),e.jsxs("li",{className:s.wrapperEquipment,children:[e.jsx("div",{className:s.title,style:{display:n>=768&&l>0?"none":"block"},children:"Equipment"}),e.jsx("div",{className:s.text,children:o(t.equipment)})]}),e.jsxs("li",{className:s.wrapeerName,children:[e.jsx("div",{className:s.title,style:{display:n>=768&&l>0?"none":"block"},children:"Name"}),e.jsx("div",{className:s.text,children:o(t.name)})]}),e.jsxs("li",{className:s.wrapperTarget,children:[e.jsx("div",{className:s.title,style:{display:n>=768&&l>0?"none":"block"},children:"Target"}),e.jsx("div",{className:s.text,children:o(t.target)})]}),e.jsxs("li",{className:s.wrapperBurnedCalories,children:[e.jsx("div",{className:s.title,style:{display:n>=768&&l>0?"none":"block"},children:"Burned Calories"}),e.jsx("div",{className:s.text,children:t.calories})]}),e.jsxs("li",{className:s.wrapperTime,children:[e.jsx("div",{className:s.title,style:{display:n>=768&&l>0?"none":"block"},children:"Time"}),e.jsxs("div",{className:s.flex,children:[e.jsx("div",{className:`${s.text} ${s.withTime}`,children:t.time}),e.jsx("button",{type:"button",className:s.btnDelete,onClick:()=>_(t),children:e.jsx("svg",{width:"20",height:"20",children:e.jsx("use",{href:`${h}#icon-trash`})})})]})]})]})},t._id)):e.jsx("div",{className:s.containerError,children:e.jsx("span",{children:"Not found products"})})})}function He({exercises:i}){return e.jsxs("div",{className:N.dayExercisesWrapper,children:[e.jsxs("div",{className:N.headerWrapper,children:[e.jsx("p",{className:N.title,children:"Exercises"}),e.jsx("div",{className:N.btnWrapper,children:e.jsxs("button",{className:N.addExerciseBtn,children:[e.jsx(B,{className:N.link,to:"/exercises",children:"Add exercise"}),e.jsx("svg",{width:"16",height:"16",children:e.jsx("use",{href:`${h}#icon-add-arrow`})})]})})]}),e.jsx(Ye,{exercises:i})]})}const Je="_container_lgox2_1",r={container:Je,"user-daily":"_user-daily_lgox2_22","user-daily-items":"_user-daily-items_lgox2_27","user-daily-list":"_user-daily-list_lgox2_34","user-daily-text":"_user-daily-text_lgox2_85","user-daily-text-value":"_user-daily-text-value_lgox2_93","user-notification":"_user-notification_lgox2_120"};function Ke(){const{colories:i}=P(),{burnedCalories:n,consumedCalories:p}=k(),{doneExercises:d}=k(),{bmr:m,dailyExerciseTime:_}=i,[o,t]=x.useState(""),[l,j]=x.useState(""),v=Math.floor(m),g=d.reduce((w,E)=>w+E.time,0),u=_-g;let C;u<0&&(C=`+${Math.abs(u)}`);const b=v-p;return x.useEffect(()=>{b<=0?t("red"):t(""),u<=0?j("green"):j("")},[b,u]),e.jsxs("div",{children:[e.jsxs("ul",{className:r.container,children:[e.jsxs("li",{className:r["user-daily-items"],children:[e.jsxs("div",{className:r["user-daily"],children:[e.jsx("svg",{width:"20",height:"20",children:e.jsx("use",{href:`${h}#icon-fork-knife`})}),e.jsx("p",{className:r["user-daily-text"],children:"Daily calorie intake"})]}),e.jsx("p",{className:r["user-daily-text-value"],children:v||0})]}),e.jsxs("li",{className:r["user-daily-items"],children:[e.jsxs("div",{className:r["user-daily"],children:[e.jsx("svg",{width:"20",height:"20",children:e.jsx("use",{href:`${h}#icon-dumbbell`})}),e.jsx("p",{className:r["user-daily-text"],children:"Daily physical activity"})]}),e.jsxs("p",{className:r["user-daily-text-value"],children:[_||0," min"]})]}),e.jsxs("li",{className:r["user-daily-items"],children:[e.jsxs("div",{className:r["user-daily"],children:[e.jsx("svg",{width:"20",height:"20",children:e.jsx("use",{href:`${h}#icon-apple`})}),e.jsx("p",{className:r["user-daily-text"],children:"Сalories consumed"})]}),e.jsx("p",{className:r["user-daily-text-value"],children:Math.floor(p)||0})]}),e.jsxs("li",{className:r["user-daily-items"],children:[e.jsxs("div",{className:r["user-daily"],children:[e.jsx("svg",{width:"20",height:"20",children:e.jsx("use",{href:`${h}#icon-calories`})}),e.jsx("p",{className:r["user-daily-text"],children:"Сalories burned"})]}),e.jsx("p",{className:r["user-daily-text-value"],children:n||0})]}),e.jsxs("li",{className:r["user-daily-items"],style:o==="red"?{border:"1px solid #e6533c"}:null,children:[e.jsxs("div",{className:r["user-daily"],children:[e.jsx("svg",{width:"20",height:"20",children:e.jsx("use",{href:`${h}#icon-bubble`})}),e.jsx("p",{className:r["user-daily-text"],children:"Calories remaining"})]}),e.jsx("p",{className:r["user-daily-text-value"],children:Math.floor(b)||0})]}),e.jsxs("li",{className:r["user-daily-items"],style:l==="green"?{border:"1px solid #3CBF61"}:null,children:[e.jsxs("div",{className:r["user-daily"],children:[e.jsx("svg",{width:"20",height:"20",children:e.jsx("use",{href:`${h}#icon-running-figure`})}),e.jsx("p",{className:r["user-daily-text"],children:"Sports remaining"})]}),e.jsx("p",{className:r["user-daily-text-value"],children:u<0?C+" min":u+" min"})]})]}),e.jsxs("p",{className:r["user-notification"],children:[e.jsx("span",{children:e.jsx("svg",{width:"24",height:"24",children:e.jsx("use",{href:`${G}#icon-exclamation-mark`})})}),"Record all your meals in the calorie diary every day. This will help you be aware of your nutrition and make informed choices."]})]})}const Qe=Q`
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
`,Xe="_container_1sx8w_1",Ze="_svg_1sx8w_6",et="_txt_1sx8w_12",L={container:Xe,svg:Ze,txt:et},tt=({selectedDate:i,onChange:n,minDate:p,maxDate:d})=>{const m=x.forwardRef(({onClick:_},o)=>e.jsxs("div",{onClick:_,ref:o,className:L.container,children:[e.jsx("div",{className:L.txt,children:V(i,"dd/MM/yyyy")}),e.jsx("div",{children:e.jsx("svg",{className:L.svg,children:e.jsx("use",{href:`${h}#icon-calendar-bage`})})})]}));return e.jsxs(e.Fragment,{children:[e.jsx(Y,{selected:i,onChange:n,customInput:e.jsx(m,{}),minDate:p,maxDate:d,dateFormat:"dd MM yyyy",calendarStartDay:1}),e.jsx(Qe,{})]})},rt="_input_nkglg_1",st="_arrowLeft_nkglg_8",at="_arrowRight_nkglg_17",it="_box_nkglg_21",nt="_opacity_nkglg_27",R={input:rt,arrowLeft:st,arrowRight:at,box:it,opacity:nt},ct=({minDate:i,maxDate:n,selectedDate:p,setSelectedDate:d,handleToNextDay:m,handleToPreviousDay:_,additionalIconClass:o})=>{const t=o==="opacity-left",l=o==="opacity-right";return e.jsxs("div",{className:R.box,children:[e.jsx(tt,{minDate:i,maxDate:n,selectedDate:p,onChange:d}),e.jsxs("div",{children:[e.jsx("button",{type:"button",className:R.arrowLeft,onClick:_,style:t?{opacity:.2}:null,children:e.jsx("svg",{width:"16",height:"16",children:e.jsx("use",{href:`${h}#icon-chevron-left`})})}),e.jsx("button",{type:"button",onClick:m,className:R.arrowRight,style:l?{opacity:.2}:null,children:e.jsx("svg",{width:"16",height:"16",children:e.jsx("use",{href:`${h}#icon-chevron-right`})})})]})]})},ot="_container_166rm_1",lt="_titleCont_166rm_18",dt="_itemsCont_166rm_25",D={container:ot,titleCont:lt,itemsCont:dt};function yt(){const i=z(),n=A(),{date:p}=M(),d=q(),{user:m}=P(),[_,o]=x.useState("opacity-right"),t=c=>c.toLocaleDateString("en-GB",{day:"2-digit",month:"2-digit",year:"numeric"}).replace(/\//g,"-");x.useEffect(()=>{d(O())},[d]);const l=new Date,j=t(l),[v,g]=x.useState(p?H(p,"dd-MM-yyyy",new Date):new Date),u=W(I(m.createdAt)),{doneExercises:C,consumedProducts:b}=k();x.useEffect(()=>{if(p){d($(p)),i(`/diary/${p}`);return}d($(j)),i(`/diary/${j}`)},[d,p,j]),x.useEffect(()=>{d(U())},[d]);const w=c=>{const y=t(c);i(`/diary/${y}`),d($(y))},E=()=>{const c=J(v,1),y=W(I(m.createdAt));if(c.getDate()===y.getDate()){o("opacity-left"),g(c),w(c);return}c.getTime()<y.getTime()||(o(""),g(c),w(c))},S=()=>{const c=K(v,1),y=W(new Date);if(c.getDate()===y.getDate()){o("opacity-right"),g(c),w(c);return}c>y||(o(""),g(c),w(c))},F=c=>{g(c),w(c)};return e.jsxs("div",{className:`${D.backGround} layoutContainer`,children:[e.jsxs("div",{className:D.titleCont,children:[e.jsx(ee,{title:"Diary"}),e.jsx(ct,{minDate:u,maxDate:l,selectedDate:v,setSelectedDate:F,handleToNextDay:S,handleToPreviousDay:E,additionalIconClass:_})]}),e.jsxs("div",{className:D.container,children:[e.jsxs("div",{className:D.itemsCont,children:[e.jsx(ke,{products:b,location:n}),e.jsx(He,{exercises:C})]}),e.jsx(Ke,{})]})]})}export{yt as default};
