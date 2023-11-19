import{j as e,r as h,u as R,s as x,d as B,N as P,a as q,b as F,c as z,e as A,f as M,g as I,h as O}from"./index-fba825fb.js";import{u as N}from"./useDiary-c1b3fcb2.js";import{i as U}from"./emotion-unitless.esm-1fbd9f14.js";import{f as G,t as V,s as $,p as T,a as Y,b as H}from"./index-45c518f0.js";import{a as J}from"./styled-components.browser.esm-62f1471e.js";import"./createClass-a1f35d20.js";const K="_titleContainer_1plm8_1",Q={titleContainer:K};function X({title:n}){return e.jsxs("h1",{className:Q.titleContainer,children:[n," "]})}const Z="_dayProductsWrapper_4dxam_1",ee="_headerWrapper_4dxam_13",te="_btnWrapper_4dxam_18",re="_title_4dxam_22",se="_addProductBtn_4dxam_27",ae="_link_4dxam_39",ie="_errNotFound_4dxam_58",v={dayProductsWrapper:Z,headerWrapper:ee,btnWrapper:te,title:re,addProductBtn:se,link:ae,errNotFound:ie},ne="_wrapper_172vl_1",ce="_btnDelete_172vl_42",oe="_wrapperListContainer_172vl_51",le="_wrapperList_172vl_51",de="_title_172vl_68",pe="_text_172vl_76",xe="_textRecommend_172vl_86",he="_wrapperRecommendContainer_172vl_92",me="_wrapperRecommend_172vl_92",_e="_wrapperItemTitle_172vl_116",ue="_wrapperItemCategory_172vl_130",ye="_wrapperItemCalories_172vl_144",we="_wrapperItemWeigth_172vl_158",ge="_flex_172vl_172",je="_containerError_172vl_187",ve="_circle_172vl_202",a={wrapper:ne,btnDelete:ce,wrapperListContainer:oe,wrapperList:le,title:de,text:pe,textRecommend:xe,wrapperRecommendContainer:he,wrapperRecommend:me,wrapperItemTitle:_e,wrapperItemCategory:ue,wrapperItemCalories:ye,wrapperItemWeigth:we,flex:ge,containerError:je,circle:ve},fe=({products:n})=>{const[i,l]=h.useState(window.innerWidth),{date:m}=N(),_=R();h.useEffect(()=>{const t=()=>{l(window.innerWidth)};return window.addEventListener("resize",t),()=>{window.removeEventListener("resize",t)}},[]);const p=t=>{_(B({date:m,credentials:{id:t._id}}))},d=t=>t.charAt(0).toUpperCase()+t.slice(1);return e.jsx("div",{className:a.wrapper,children:n.length!==0?n.map((t,c)=>e.jsxs("div",{className:a.wrapperListContainer,children:[e.jsxs("ul",{className:a.wrapperList,children:[e.jsxs("li",{className:a.wrapperItemTitle,children:[e.jsx("div",{className:a.title,style:{display:i>=768&&c>0?"none":"block"},children:"Title"}),e.jsx("div",{className:a.text,children:d(t.title)})]}),e.jsxs("li",{className:a.wrapperItemCategory,children:[e.jsx("div",{className:a.title,style:{display:i>=768&&c>0?"none":"block"},children:"Category"}),e.jsx("div",{className:a.text,children:d(t.category)})]}),e.jsxs("li",{className:a.wrapperItemCalories,children:[e.jsx("div",{className:a.title,style:{display:i>=768&&c>0?"none":"block"},children:"Calories"}),e.jsx("div",{className:a.text,children:t.calories})]}),e.jsxs("li",{className:a.wrapperItemWeigth,children:[e.jsx("div",{className:a.title,style:{display:i>=768&&c>0?"none":"block"},children:"Weight"}),e.jsx("div",{className:a.text,children:t.amount})]}),e.jsxs("li",{className:a.wrapperItemRecommend,children:[e.jsx("div",{className:a.title,style:{display:i>=768&&c>0?"none":"block"},children:"Recommend"}),e.jsxs("div",{className:a.wrapperRecommendContainer,children:[e.jsxs("div",{className:a.wrapperRecommend,children:[e.jsx("div",{className:a.circle,style:{backgroundColor:t.groupBloodNotAllowed?"green":"red"}}),e.jsx("div",{className:a.textRecommend,children:t.groupBloodNotAllowed?"Yes":"No"})]}),e.jsx("button",{type:"button",className:a.btnDelete,onClick:()=>p(t),children:e.jsx("svg",{width:"20",height:"20",children:e.jsx("use",{href:`${x}#icon-trash`})})})]})]})]})," "]},t._id)):e.jsx("div",{className:a.containerError,children:e.jsx("span",{children:"Not found products"})})})};function Ne({products:n,location:i}){return e.jsxs("div",{className:v.dayProductsWrapper,children:[e.jsxs("div",{className:v.headerWrapper,children:[e.jsx("p",{className:v.title,children:"Products"}),e.jsx("div",{className:v.btnWrapper,children:e.jsxs("button",{className:v.addProductBtn,children:[e.jsxs(P,{className:v.link,state:{from:i},to:"/products",children:["Add product"," "]}),e.jsx("svg",{width:"16",height:"16",children:e.jsx("use",{href:`${x}#icon-add-arrow`})})]})})]}),e.jsx(fe,{products:n})]})}const be="_dayExercisesWrapper_dak0w_1",ke="_headerWrapper_dak0w_12",Ce="_btnWrapper_dak0w_17",De="_title_dak0w_21",Ee="_addExerciseBtn_dak0w_26",$e="_link_dak0w_39",We="_errNotFound_dak0w_57",f={dayExercisesWrapper:be,headerWrapper:ke,btnWrapper:Ce,title:De,addExerciseBtn:Ee,link:$e,errNotFound:We},Le="_wrapper_xaqov_1",Re="_wrapperListContainer_xaqov_43",Ie="_wrapperList_xaqov_43",Te="_title_xaqov_59",Be="_text_xaqov_67",Pe="_flex_xaqov_80",qe="_btnDelete_xaqov_85",Se="_wrapperBodyPart_xaqov_90",Fe="_wrapperEquipment_xaqov_104",ze="_wrapeerName_xaqov_118",Ae="_wrapperTarget_xaqov_133",Me="_wrapperBurnedCalories_xaqov_147",Oe="_withTime_xaqov_168",Ue="_containerError_xaqov_185",s={wrapper:Le,wrapperListContainer:Re,wrapperList:Ie,title:Te,text:Be,flex:Pe,btnDelete:qe,wrapperBodyPart:Se,wrapperEquipment:Fe,wrapeerName:ze,wrapperTarget:Ae,wrapperBurnedCalories:Me,withTime:Oe,containerError:Ue};function Ge({exercises:n}){const[i,l]=h.useState(window.innerWidth),{date:m}=N(),_=R();h.useEffect(()=>{const t=()=>{l(window.innerWidth)};return window.addEventListener("resize",t),()=>{window.removeEventListener("resize",t)}},[]);const p=t=>{_(B({date:m,credentials:{id:t._id}}))},d=t=>t.charAt(0).toUpperCase()+t.slice(1);return e.jsx("div",{className:s.wrapper,children:n.length!==0?n.map((t,c)=>e.jsx("div",{className:s.wrapperListContainer,children:e.jsxs("ul",{className:s.wrapperList,children:[e.jsxs("li",{className:s.wrapperBodyPart,children:[e.jsx("div",{className:s.title,style:{display:i>=768&&c>0?"none":"block"},children:"Body Part"}),e.jsx("div",{className:s.text,children:d(t.bodyPart)})]}),e.jsxs("li",{className:s.wrapperEquipment,children:[e.jsx("div",{className:s.title,style:{display:i>=768&&c>0?"none":"block"},children:"Equipment"}),e.jsx("div",{className:s.text,children:d(t.equipment)})]}),e.jsxs("li",{className:s.wrapeerName,children:[e.jsx("div",{className:s.title,style:{display:i>=768&&c>0?"none":"block"},children:"Name"}),e.jsx("div",{className:s.text,children:d(t.name)})]}),e.jsxs("li",{className:s.wrapperTarget,children:[e.jsx("div",{className:s.title,style:{display:i>=768&&c>0?"none":"block"},children:"Target"}),e.jsx("div",{className:s.text,children:d(t.target)})]}),e.jsxs("li",{className:s.wrapperBurnedCalories,children:[e.jsx("div",{className:s.title,style:{display:i>=768&&c>0?"none":"block"},children:"Burned Calories"}),e.jsx("div",{className:s.text,children:t.calories})]}),e.jsxs("li",{className:s.wrapperTime,children:[e.jsx("div",{className:s.title,style:{display:i>=768&&c>0?"none":"block"},children:"Time"}),e.jsxs("div",{className:s.flex,children:[e.jsx("div",{className:`${s.text} ${s.withTime}`,children:t.time}),e.jsx("button",{type:"button",className:s.btnDelete,onClick:()=>p(t),children:e.jsx("svg",{width:"20",height:"20",children:e.jsx("use",{href:`${x}#icon-trash`})})})]})]})]})},t._id)):e.jsx("div",{className:s.containerError,children:e.jsx("span",{children:"Not found products"})})})}function Ve({exercises:n}){return e.jsxs("div",{className:f.dayExercisesWrapper,children:[e.jsxs("div",{className:f.headerWrapper,children:[e.jsx("p",{className:f.title,children:"Exercises"}),e.jsx("div",{className:f.btnWrapper,children:e.jsxs("button",{className:f.addExerciseBtn,children:[e.jsx(P,{className:f.link,to:"/exercises",children:"Add exercise"}),e.jsx("svg",{width:"16",height:"16",children:e.jsx("use",{href:`${x}#icon-add-arrow`})})]})})]}),e.jsx(Ge,{exercises:n})]})}const Ye="_container_lgox2_1",r={container:Ye,"user-daily":"_user-daily_lgox2_22","user-daily-items":"_user-daily-items_lgox2_27","user-daily-list":"_user-daily-list_lgox2_34","user-daily-text":"_user-daily-text_lgox2_85","user-daily-text-value":"_user-daily-text-value_lgox2_93","user-notification":"_user-notification_lgox2_120"};function He(){const{colories:n}=q(),{burnedCalories:i,consumedCalories:l}=N(),{doneExercises:m}=N(),{bmr:_,dailyExerciseTime:p}=n,[d,t]=h.useState(""),[c,j]=h.useState(""),y=Math.floor(_),C=m.reduce((D,E)=>D+E.time,0),w=p-C;let b;w<0&&(b=`+${Math.abs(w)}`);const u=y-l;return h.useEffect(()=>{u<=0?t("red"):t(""),w<=0?j("green"):j("")},[u,w]),e.jsxs("div",{children:[e.jsxs("ul",{className:r.container,children:[e.jsxs("li",{className:r["user-daily-items"],children:[e.jsxs("div",{className:r["user-daily"],children:[e.jsx("svg",{width:"20",height:"20",children:e.jsx("use",{href:`${x}#icon-fork-knife`})}),e.jsx("p",{className:r["user-daily-text"],children:"Daily calorie intake"})]}),e.jsx("p",{className:r["user-daily-text-value"],children:y||0})]}),e.jsxs("li",{className:r["user-daily-items"],children:[e.jsxs("div",{className:r["user-daily"],children:[e.jsx("svg",{width:"20",height:"20",children:e.jsx("use",{href:`${x}#icon-dumbbell`})}),e.jsx("p",{className:r["user-daily-text"],children:"Daily physical activity"})]}),e.jsxs("p",{className:r["user-daily-text-value"],children:[p||0," min"]})]}),e.jsxs("li",{className:r["user-daily-items"],children:[e.jsxs("div",{className:r["user-daily"],children:[e.jsx("svg",{width:"20",height:"20",children:e.jsx("use",{href:`${x}#icon-apple`})}),e.jsx("p",{className:r["user-daily-text"],children:"Сalories consumed"})]}),e.jsx("p",{className:r["user-daily-text-value"],children:Math.floor(l)||0})]}),e.jsxs("li",{className:r["user-daily-items"],children:[e.jsxs("div",{className:r["user-daily"],children:[e.jsx("svg",{width:"20",height:"20",children:e.jsx("use",{href:`${x}#icon-calories`})}),e.jsx("p",{className:r["user-daily-text"],children:"Сalories burned"})]}),e.jsx("p",{className:r["user-daily-text-value"],children:i||0})]}),e.jsxs("li",{className:r["user-daily-items"],style:d==="red"?{border:"1px solid #e6533c"}:null,children:[e.jsxs("div",{className:r["user-daily"],children:[e.jsx("svg",{width:"20",height:"20",children:e.jsx("use",{href:`${x}#icon-bubble`})}),e.jsx("p",{className:r["user-daily-text"],children:"Calories remaining"})]}),e.jsx("p",{className:r["user-daily-text-value"],children:Math.floor(u)||0})]}),e.jsxs("li",{className:r["user-daily-items"],style:c==="green"?{border:"1px solid #3CBF61"}:null,children:[e.jsxs("div",{className:r["user-daily"],children:[e.jsx("svg",{width:"20",height:"20",children:e.jsx("use",{href:`${x}#icon-running-figure`})}),e.jsx("p",{className:r["user-daily-text"],children:"Sports remaining"})]}),e.jsx("p",{className:r["user-daily-text-value"],children:w<0?b+" min":w+" min"})]})]}),e.jsxs("p",{className:r["user-notification"],children:[e.jsx("span",{children:e.jsx("svg",{width:"24",height:"24",children:e.jsx("use",{href:`${U}#icon-exclamation-mark`})})}),"Record all your meals in the calorie diary every day. This will help you be aware of your nutrition and make informed choices."]})]})}const Je=J`
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
`,Ke="_container_1sx8w_1",Qe="_svg_1sx8w_6",Xe="_txt_1sx8w_12",W={container:Ke,svg:Qe,txt:Xe},Ze=({selectedDate:n,onChange:i,minDate:l,maxDate:m})=>{const _=h.forwardRef(({onClick:p},d)=>e.jsxs("div",{onClick:p,ref:d,className:W.container,children:[e.jsx("div",{className:W.txt,children:G(n,"dd/MM/yyyy")}),e.jsx("div",{children:e.jsx("svg",{className:W.svg,children:e.jsx("use",{href:`${x}#icon-calendar-bage`})})})]}));return e.jsxs(e.Fragment,{children:[e.jsx(V,{selected:n,onChange:i,customInput:e.jsx(_,{}),minDate:l,maxDate:m,dateFormat:"dd MM yyyy",calendarStartDay:1}),e.jsx(Je,{})]})},et="_input_nkglg_1",tt="_arrowLeft_nkglg_8",rt="_arrowRight_nkglg_17",st="_box_nkglg_21",at="_opacity_nkglg_27",L={input:et,arrowLeft:tt,arrowRight:rt,box:st,opacity:at},it=({minDate:n,maxDate:i,selectedDate:l,setSelectedDate:m,handleToNextDay:_,handleToPreviousDay:p,additionalIconClass:d})=>{const t=d==="opacity-left",c=d==="opacity-right";return e.jsxs("div",{className:L.box,children:[e.jsx(Ze,{minDate:n,maxDate:i,selectedDate:l,onChange:m}),e.jsxs("div",{children:[e.jsx("button",{type:"button",className:L.arrowLeft,onClick:p,style:t?{opacity:.2}:null,children:e.jsx("svg",{width:"16",height:"16",children:e.jsx("use",{href:`${x}#icon-chevron-left`})})}),e.jsx("button",{type:"button",onClick:_,className:L.arrowRight,style:c?{opacity:.2}:null,children:e.jsx("svg",{width:"16",height:"16",children:e.jsx("use",{href:`${x}#icon-chevron-right`})})})]})]})},nt="_container_166rm_1",ct="_titleCont_166rm_18",ot="_itemsCont_166rm_25",k={container:nt,titleCont:ct,itemsCont:ot};function _t(){const n=F(),i=z();A();const l=R(),{user:m}=q(),[_,p]=h.useState("opacity-right"),d=o=>o.toLocaleDateString("en-GB",{day:"2-digit",month:"2-digit",year:"numeric"}).replace(/\//g,"-");h.useEffect(()=>{l(M())},[l]);const t=new Date,c=d(t),[j,y]=h.useState(new Date),C=$(T(m.createdAt)),{doneExercises:w,consumedProducts:b}=N();h.useEffect(()=>{l(I(c)),n(`/diary/${c}`)},[l,c]),h.useEffect(()=>{l(O())},[l]);const u=o=>{const g=d(o);n(`/diary/${g}`),l(I(g))},D=()=>{const o=Y(j,1),g=$(T(m.createdAt));if(o.getDate()===g.getDate()){p("opacity-left"),y(o),u(o);return}o.getTime()<g.getTime()||(p(""),y(o),u(o))},E=()=>{const o=H(j,1),g=$(new Date);if(o.getDate()===g.getDate()){p("opacity-right"),y(o),u(o);return}o>g||(p(""),y(o),u(o))},S=o=>{y(o),u(o)};return e.jsxs("div",{className:`${k.backGround} layoutContainer`,children:[e.jsxs("div",{className:k.titleCont,children:[e.jsx(X,{title:"Diary"}),e.jsx(it,{minDate:C,maxDate:t,selectedDate:j,setSelectedDate:S,handleToNextDay:E,handleToPreviousDay:D,additionalIconClass:_})]}),e.jsxs("div",{className:k.container,children:[e.jsxs("div",{className:k.itemsCont,children:[e.jsx(Ne,{products:b,location:i}),e.jsx(Ve,{exercises:w})]}),e.jsx(He,{})]})]})}export{_t as default};
