import{u as c,j as e,h as u}from"./index-ea837df4.js";import{c as h,a,F as p,b as j,d as r,E as t}from"./index.esm-da0c3647.js";const x="_form_1hjgy_1",b="_button_1hjgy_9",f="_label_1hjgy_20",_="_field_1hjgy_25",s={form:x,button:b,label:f,field:_},y=()=>{const i=c(),l={username:"",email:"",password:""},m=h().shape({username:a().required("Name is required"),email:a().matches(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,"Invalid email format").required("Email is required"),password:a().min(6,"Password must be at least 6 characters").required("Password is required")});function o(n,{resetForm:d}){i(u(n)),d()}return e.jsx(p,{initialValues:l,onSubmit:o,validationSchema:m,children:e.jsxs(j,{className:s.form,children:[e.jsxs("label",{htmlFor:"username",children:[e.jsx(r,{type:"text",name:"username",placeholder:"Name",className:s.field}),e.jsx(t,{component:"div",name:"username"})]}),e.jsxs("label",{htmlFor:"email",children:[e.jsx(r,{type:"text",name:"email",placeholder:"Email",className:s.field}),e.jsx(t,{component:"div",name:"email"})]}),e.jsxs("label",{htmlFor:"password",children:[e.jsx(r,{type:"password",name:"password",placeholder:"Password",className:s.field}),e.jsx(t,{component:"div",name:"password"})]}),e.jsx("button",{type:"submit",className:s.button,children:"Sign In"})]})})};export{y as S};
