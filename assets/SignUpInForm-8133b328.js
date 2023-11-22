import{u as g,r as m,g as j,j as s,s as t,D as _,E as w}from"./index-d51d83b2.js";import{c as E,a as o,F as b,b as v,d as c,E as l}from"./index.esm-f0b353d2.js";const S="_container2_fh98d_1",y="_form_fh98d_8",N="_input_fh98d_20",M="_button_fh98d_47",F="_ErrorMessage_fh98d_75",$="_successMessage_fh98d_86",k="_inputSuccess_fh98d_96",q="_inputError_fh98d_99",P="_buttonEye_fh98d_103",C="_eye_fh98d_107",e={container2:S,form:y,input:N,button:M,ErrorMessage:F,successMessage:$,inputSuccess:k,inputError:q,buttonEye:P,eye:C},U=({includeName:i})=>{const n=g(),[d,h]=m.useState(!1);m.useEffect(()=>{n(j())},[n]);const u=a=>{a.preventDefault(),h(r=>!r)},p={...i&&{username:""},email:"",password:""},x=E().shape({...i&&{username:o().required("Name is required")},email:o().matches(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,"Error email").required("Email is required"),password:o().min(6,"Password must be at least 6 characters").required("Password is required")});function f(a,{resetForm:r}){n(i?_(a):w(a)),r()}return s.jsx(b,{initialValues:p,onSubmit:f,validationSchema:x,children:({errors:a,touched:r})=>s.jsxs(v,{className:e.container2,children:[s.jsxs("div",{className:e.form,children:[i&&s.jsxs("label",{htmlFor:"username",children:[s.jsx(c,{type:"text",name:"username",placeholder:"Name",autoComplete:"off",className:e.input}),s.jsx(l,{component:"div",name:"username",className:e.ErrorMessage})]}),s.jsxs("label",{htmlFor:"email",children:[s.jsx(c,{type:"text",name:"email",placeholder:"Email",autoComplete:"off",className:e.input+(r.email?a.email?" "+e.inputError:" "+e.inputSuccess:"")}),s.jsxs("div",{className:e.ErrorMessage,children:[a.email&&r.email&&s.jsx("svg",{width:"16",height:"16",className:e.svg,children:s.jsx("use",{href:`${t}#icon-validation-checkbox-red`})}),s.jsx(l,{component:"div",name:"email"})]}),!a.email&&r.email&&s.jsxs("div",{className:e.successMessage,children:[s.jsx("svg",{width:"16",height:"16",children:s.jsx("use",{href:`${t}#icon-validation-checkbox-green`})}),"Success email!"]})]}),s.jsxs("label",{htmlFor:"password",children:[s.jsx(c,{type:d?"text":"password",name:"password",placeholder:"Password",autoComplete:"off",className:e.input+(r.password?a.password?" "+e.inputError:" "+e.inputSuccess:"")}),s.jsxs("div",{className:e.ErrorMessage,children:[a.password&&r.password&&s.jsx("svg",{width:"16",height:"16",children:s.jsx("use",{href:`${t}#icon-validation-checkbox-red`})}),s.jsx(l,{component:"div",name:"password"})]}),!a.password&&r.password&&s.jsxs("div",{className:e.successMessage,children:[s.jsx("svg",{width:"16",height:"16",children:s.jsx("use",{href:`${t}#icon-validation-checkbox-green`})}),"Success password!"]})]}),s.jsx("div",{className:e.buttonEye,onClick:u,children:d?s.jsx("svg",{className:e.eye,children:s.jsx("use",{href:t+"#icon-eye-off"})}):s.jsx("svg",{className:e.eye,children:s.jsx("use",{href:t+"#icon-eye"})})})]}),s.jsx("button",{type:"submit",className:e.button,children:i?"Sign Up":"Sign In"})]})})};export{U as S};
