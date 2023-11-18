import{j as e,r as x,u as R,s as h,d as T,N as B,a as q,b as S,c as F,e as A,g as I,f as z}from"./index-6093ee4c.js";import{u as N}from"./useDiary-903e2ebe.js";import{i as M}from"./emotion-unitless.esm-b99205ca.js";import{f as U,t as O,s as $,p as P,a as G,b as V}from"./index-8b188eee.js";import{a as Y}from"./styled-components.browser.esm-b5ab7ca3.js";import"./createClass-cb165a6a.js";const H="_titleContainer_1plm8_1",J={titleContainer:H};function K({title:c}){return e.jsxs("h1",{className:J.titleContainer,children:[c," "]})}const Q="_dayProductsWrapper_4dxam_1",X="_headerWrapper_4dxam_13",Z="_btnWrapper_4dxam_18",ee="_title_4dxam_22",te="_addProductBtn_4dxam_27",re="_link_4dxam_39",se="_errNotFound_4dxam_58",j={dayProductsWrapper:Q,headerWrapper:X,btnWrapper:Z,title:ee,addProductBtn:te,link:re,errNotFound:se},ae="_wrapper_172vl_1",ie="_btnDelete_172vl_42",ne="_wrapperListContainer_172vl_51",ce="_wrapperList_172vl_51",oe="_title_172vl_68",le="_text_172vl_76",de="_textRecommend_172vl_86",pe="_wrapperRecommendContainer_172vl_92",he="_wrapperRecommend_172vl_92",xe="_wrapperItemTitle_172vl_116",me="_wrapperItemCategory_172vl_130",_e="_wrapperItemCalories_172vl_144",ue="_wrapperItemWeigth_172vl_158",ye="_flex_172vl_172",ge="_containerError_172vl_187",we="_circle_172vl_202",n={wrapper:ae,btnDelete:ie,wrapperListContainer:ne,wrapperList:ce,title:oe,text:le,textRecommend:de,wrapperRecommendContainer:pe,wrapperRecommend:he,wrapperItemTitle:xe,wrapperItemCategory:me,wrapperItemCalories:_e,wrapperItemWeigth:ue,flex:ye,containerError:ge,circle:we},je=({products:c})=>{const[r,d]=x.useState(window.innerWidth),{date:m}=N(),l=R();x.useEffect(()=>{const t=()=>{d(window.innerWidth)};return window.addEventListener("resize",t),()=>{window.removeEventListener("resize",t)}},[]);const p=t=>{l(T({date:m,credentials:{id:t._id}}))};return e.jsx("div",{className:n.wrapper,children:c.length!==0?c.map((t,i)=>e.jsxs("div",{className:n.wrapperListContainer,children:[e.jsxs("ul",{className:n.wrapperList,children:[e.jsxs("li",{className:n.wrapperItemTitle,children:[e.jsx("div",{className:n.title,style:{display:r>=768&&i>0?"none":"block"},children:"Title"}),e.jsx("div",{className:n.text,children:t.title})]}),e.jsxs("li",{className:n.wrapperItemCategory,children:[e.jsx("div",{className:n.title,style:{display:r>=768&&i>0?"none":"block"},children:"Category"}),e.jsx("div",{className:n.text,children:t.category.charAt(0).toUpperCase()+t.category.slice(1)})]}),e.jsxs("li",{className:n.wrapperItemCalories,children:[e.jsx("div",{className:n.title,style:{display:r>=768&&i>0?"none":"block"},children:"Calories"}),e.jsx("div",{className:n.text,children:t.calories})]}),e.jsxs("li",{className:n.wrapperItemWeigth,children:[e.jsx("div",{className:n.title,style:{display:r>=768&&i>0?"none":"block"},children:"Weight"}),e.jsx("div",{className:n.text,children:t.amount})]}),e.jsxs("li",{className:n.wrapperItemRecommend,children:[e.jsx("div",{className:n.title,style:{display:r>=768&&i>0?"none":"block"},children:"Recommend"}),e.jsxs("div",{className:n.wrapperRecommendContainer,children:[e.jsxs("div",{className:n.wrapperRecommend,children:[e.jsx("div",{className:n.circle,style:{backgroundColor:t.groupBloodNotAllowed?"green":"red"}}),e.jsx("div",{className:n.textRecommend,children:t.groupBloodNotAllowed?"Yes":"No"})]}),e.jsx("button",{type:"button",className:n.btnDelete,onClick:()=>p(t),children:e.jsx("svg",{width:"20",height:"20",children:e.jsx("use",{href:`${h}#icon-trash`})})})]})]})]})," "]},t._id)):e.jsx("div",{className:n.containerError,children:e.jsx("span",{children:"Not found products"})})})};function ve({products:c}){return e.jsxs("div",{className:j.dayProductsWrapper,children:[e.jsxs("div",{className:j.headerWrapper,children:[e.jsx("p",{className:j.title,children:"Products"}),e.jsx("div",{className:j.btnWrapper,children:e.jsxs("button",{className:j.addProductBtn,children:[e.jsxs(B,{className:j.link,to:"/products",children:["Add product"," "]}),e.jsx("svg",{width:"16",height:"16",children:e.jsx("use",{href:`${h}#icon-add-arrow`})})]})})]}),e.jsx(je,{products:c})]})}const fe="_dayExercisesWrapper_dak0w_1",Ne="_headerWrapper_dak0w_12",be="_btnWrapper_dak0w_17",ke="_title_dak0w_21",Ce="_addExerciseBtn_dak0w_26",De="_link_dak0w_39",Ee="_errNotFound_dak0w_57",v={dayExercisesWrapper:fe,headerWrapper:Ne,btnWrapper:be,title:ke,addExerciseBtn:Ce,link:De,errNotFound:Ee},$e="_wrapper_xaqov_1",We="_wrapperListContainer_xaqov_43",Le="_wrapperList_xaqov_43",Re="_title_xaqov_59",Ie="_text_xaqov_67",Pe="_flex_xaqov_80",Te="_btnDelete_xaqov_85",Be="_wrapperBodyPart_xaqov_90",qe="_wrapperEquipment_xaqov_104",Se="_wrapeerName_xaqov_118",Fe="_wrapperTarget_xaqov_133",Ae="_wrapperBurnedCalories_xaqov_147",ze="_withTime_xaqov_168",Me="_containerError_xaqov_185",a={wrapper:$e,wrapperListContainer:We,wrapperList:Le,title:Re,text:Ie,flex:Pe,btnDelete:Te,wrapperBodyPart:Be,wrapperEquipment:qe,wrapeerName:Se,wrapperTarget:Fe,wrapperBurnedCalories:Ae,withTime:ze,containerError:Me};function Ue({exercises:c}){const[r,d]=x.useState(window.innerWidth),{date:m}=N(),l=R();x.useEffect(()=>{const t=()=>{d(window.innerWidth)};return window.addEventListener("resize",t),()=>{window.removeEventListener("resize",t)}},[]);const p=t=>{l(T({date:m,credentials:{id:t._id}}))};return e.jsx("div",{className:a.wrapper,children:c.length!==0?c.map((t,i)=>e.jsx("div",{className:a.wrapperListContainer,children:e.jsxs("ul",{className:a.wrapperList,children:[e.jsxs("li",{className:a.wrapperBodyPart,children:[e.jsx("div",{className:a.title,style:{display:r>=768&&i>0?"none":"block"},children:"Body Part"}),e.jsx("div",{className:a.text,children:t.bodyPart.charAt(0).toUpperCase()+t.bodyPart.slice(1)})]}),e.jsxs("li",{className:a.wrapperEquipment,children:[e.jsx("div",{className:a.title,style:{display:r>=768&&i>0?"none":"block"},children:"Equipment"}),e.jsx("div",{className:a.text,children:t.equipment.charAt(0).toUpperCase()+t.equipment.slice(1)})]}),e.jsxs("li",{className:a.wrapeerName,children:[e.jsx("div",{className:a.title,style:{display:r>=768&&i>0?"none":"block"},children:"Name"}),e.jsx("div",{className:a.text,children:t.name.charAt(0).toUpperCase()+t.name.slice(1)})]}),e.jsxs("li",{className:a.wrapperTarget,children:[e.jsx("div",{className:a.title,style:{display:r>=768&&i>0?"none":"block"},children:"Target"}),e.jsx("div",{className:a.text,children:t.target.charAt(0).toUpperCase()+t.target.slice(1)})]}),e.jsxs("li",{className:a.wrapperBurnedCalories,children:[e.jsx("div",{className:a.title,style:{display:r>=768&&i>0?"none":"block"},children:"Burned Calories"}),e.jsx("div",{className:a.text,children:t.calories})]}),e.jsxs("li",{className:a.wrapperTime,children:[e.jsx("div",{className:a.title,style:{display:r>=768&&i>0?"none":"block"},children:"Time"}),e.jsxs("div",{className:a.flex,children:[e.jsx("div",{className:`${a.text} ${a.withTime}`,children:t.time}),e.jsx("button",{type:"button",className:a.btnDelete,onClick:()=>p(t),children:e.jsx("svg",{width:"20",height:"20",children:e.jsx("use",{href:`${h}#icon-trash`})})})]})]})]})},t._id)):e.jsx("div",{className:a.containerError,children:e.jsx("span",{children:"Not found products"})})})}function Oe({exercises:c}){return e.jsxs("div",{className:v.dayExercisesWrapper,children:[e.jsxs("div",{className:v.headerWrapper,children:[e.jsx("p",{className:v.title,children:"Exercises"}),e.jsx("div",{className:v.btnWrapper,children:e.jsxs("button",{className:v.addExerciseBtn,children:[e.jsx(B,{className:v.link,to:"/exercises",children:"Add exercise"}),e.jsx("svg",{width:"16",height:"16",children:e.jsx("use",{href:`${h}#icon-add-arrow`})})]})})]}),e.jsx(Ue,{exercises:c})]})}const Ge="_container_lgox2_1",s={container:Ge,"user-daily":"_user-daily_lgox2_22","user-daily-items":"_user-daily-items_lgox2_27","user-daily-list":"_user-daily-list_lgox2_34","user-daily-text":"_user-daily-text_lgox2_85","user-daily-text-value":"_user-daily-text-value_lgox2_93","user-notification":"_user-notification_lgox2_120"};function Ve(){const{colories:c}=q(),{burnedCalories:r,consumedCalories:d}=N(),{doneExercises:m}=N(),{bmr:l,dailyExerciseTime:p}=c,[t,i]=x.useState(""),[w,_]=x.useState(""),b=Math.floor(l),C=m.reduce((D,E)=>D+E.time,0),u=p-C;let y;u<0&&(y=`+${Math.abs(u)}`);const f=b-d;return x.useEffect(()=>{f<=0?i("red"):i(""),u<=0?_("green"):_("")},[f,u]),e.jsxs("div",{children:[e.jsxs("ul",{className:s.container,children:[e.jsxs("li",{className:s["user-daily-items"],children:[e.jsxs("div",{className:s["user-daily"],children:[e.jsx("svg",{width:"20",height:"20",children:e.jsx("use",{href:`${h}#icon-fork-knife`})}),e.jsx("p",{className:s["user-daily-text"],children:"Daily calorie intake"})]}),e.jsx("p",{className:s["user-daily-text-value"],children:b||0})]}),e.jsxs("li",{className:s["user-daily-items"],children:[e.jsxs("div",{className:s["user-daily"],children:[e.jsx("svg",{width:"20",height:"20",children:e.jsx("use",{href:`${h}#icon-dumbbell`})}),e.jsx("p",{className:s["user-daily-text"],children:"Daily physical activity"})]}),e.jsxs("p",{className:s["user-daily-text-value"],children:[p||0," min"]})]}),e.jsxs("li",{className:s["user-daily-items"],children:[e.jsxs("div",{className:s["user-daily"],children:[e.jsx("svg",{width:"20",height:"20",children:e.jsx("use",{href:`${h}#icon-apple`})}),e.jsx("p",{className:s["user-daily-text"],children:"Сalories consumed"})]}),e.jsx("p",{className:s["user-daily-text-value"],children:Math.floor(d)||0})]}),e.jsxs("li",{className:s["user-daily-items"],children:[e.jsxs("div",{className:s["user-daily"],children:[e.jsx("svg",{width:"20",height:"20",children:e.jsx("use",{href:`${h}#icon-calories`})}),e.jsx("p",{className:s["user-daily-text"],children:"Сalories burned"})]}),e.jsx("p",{className:s["user-daily-text-value"],children:r||0})]}),e.jsxs("li",{className:s["user-daily-items"],style:t==="red"?{border:"1px solid #e6533c"}:null,children:[e.jsxs("div",{className:s["user-daily"],children:[e.jsx("svg",{width:"20",height:"20",children:e.jsx("use",{href:`${h}#icon-bubble`})}),e.jsx("p",{className:s["user-daily-text"],children:"Calories remaining"})]}),e.jsx("p",{className:s["user-daily-text-value"],children:Math.floor(f)||0})]}),e.jsxs("li",{className:s["user-daily-items"],style:w==="green"?{border:"1px solid #3CBF61"}:null,children:[e.jsxs("div",{className:s["user-daily"],children:[e.jsx("svg",{width:"20",height:"20",children:e.jsx("use",{href:`${h}#icon-running-figure`})}),e.jsx("p",{className:s["user-daily-text"],children:"Sports remaining"})]}),e.jsx("p",{className:s["user-daily-text-value"],children:u<0?y+" min":u+" min"})]})]}),e.jsxs("p",{className:s["user-notification"],children:[e.jsx("span",{children:e.jsx("svg",{width:"24",height:"24",children:e.jsx("use",{href:`${M}#icon-exclamation-mark`})})}),"Record all your meals in the calorie diary every day. This will help you be aware of your nutrition and make informed choices."]})]})}const Ye=Y`
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
`,He="_container_1sx8w_1",Je="_svg_1sx8w_6",Ke="_txt_1sx8w_12",W={container:He,svg:Je,txt:Ke},Qe=({selectedDate:c,onChange:r,minDate:d,maxDate:m})=>{const l=x.forwardRef(({onClick:p},t)=>e.jsxs("div",{onClick:p,ref:t,className:W.container,children:[e.jsx("div",{className:W.txt,children:U(c,"dd/MM/yyyy")}),e.jsx("div",{children:e.jsx("svg",{className:W.svg,children:e.jsx("use",{href:`${h}#icon-calendar-bage`})})})]}));return e.jsxs(e.Fragment,{children:[e.jsx(O,{selected:c,onChange:r,customInput:e.jsx(l,{}),minDate:d,maxDate:m,dateFormat:"dd MM yyyy",calendarStartDay:1}),e.jsx(Ye,{})]})},Xe="_input_nkglg_1",Ze="_arrowLeft_nkglg_8",et="_arrowRight_nkglg_17",tt="_box_nkglg_21",rt="_opacity_nkglg_27",L={input:Xe,arrowLeft:Ze,arrowRight:et,box:tt,opacity:rt},st=({minDate:c,maxDate:r,selectedDate:d,setSelectedDate:m,handleToNextDay:l,handleToPreviousDay:p,additionalIconClass:t})=>{const i=t==="opacity-left",w=t==="opacity-right";return e.jsxs("div",{className:L.box,children:[e.jsx(Qe,{minDate:c,maxDate:r,selectedDate:d,onChange:m}),e.jsxs("div",{children:[e.jsx("button",{type:"button",className:L.arrowLeft,onClick:p,style:i?{opacity:.2}:null,children:e.jsx("svg",{width:"16",height:"16",children:e.jsx("use",{href:`${h}#icon-chevron-left`})})}),e.jsx("button",{type:"button",onClick:l,className:L.arrowRight,style:w?{opacity:.2}:null,children:e.jsx("svg",{width:"16",height:"16",children:e.jsx("use",{href:`${h}#icon-chevron-right`})})})]})]})},at="_container_166rm_1",it="_titleCont_166rm_18",nt="_itemsCont_166rm_25",k={container:at,titleCont:it,itemsCont:nt};function xt(){const c=S();F();const r=R(),{user:d}=q(),[m,l]=x.useState("opacity-right"),p=o=>o.toLocaleDateString("en-GB",{day:"2-digit",month:"2-digit",year:"numeric"}).replace(/\//g,"-");x.useEffect(()=>{r(A())},[r]);const t=new Date,i=p(t),[w,_]=x.useState(new Date),b=$(P(d.createdAt)),{doneExercises:C,consumedProducts:u}=N();x.useEffect(()=>{r(I(i)),c(`/diary/${i}`)},[r,i]),x.useEffect(()=>{r(z())},[r]);const y=o=>{const g=p(o);c(`/diary/${g}`),r(I(g))},f=()=>{const o=G(w,1),g=$(P(d.createdAt));if(o.getDate()===g.getDate()){l("opacity-left"),_(o),y(o);return}o.getTime()<g.getTime()||(l(""),_(o),y(o))},D=()=>{const o=V(w,1),g=$(new Date);if(o.getDate()===g.getDate()){l("opacity-right"),_(o),y(o);return}o>g||(l(""),_(o),y(o))},E=o=>{_(o),y(o)};return e.jsxs("div",{className:`${k.backGround} layoutContainer`,children:[e.jsxs("div",{className:k.titleCont,children:[e.jsx(K,{title:"Diary"}),e.jsx(st,{minDate:b,maxDate:t,selectedDate:w,setSelectedDate:E,handleToNextDay:D,handleToPreviousDay:f,additionalIconClass:m})]}),e.jsxs("div",{className:k.container,children:[e.jsxs("div",{className:k.itemsCont,children:[e.jsx(ve,{products:u,selectedDate:i}),e.jsx(Oe,{exercises:C,selectedDate:i})]}),e.jsx(Ve,{})]})]})}export{xt as default};
