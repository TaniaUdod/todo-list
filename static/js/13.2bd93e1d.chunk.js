"use strict";(self.webpackChunktodo_list=self.webpackChunktodo_list||[]).push([[13],{469:(t,e,s)=>{s.d(e,{A:()=>x});var o=s(148),n=s(43),r=s(706);const a="TaskEditForm_form-edit__jGCVi",c="TaskEditForm_save__LvB1L",i="TaskEditForm_cancel__VfGPf";var l=s(579);const d=t=>{let{task:e,onSave:s,onCancel:o}=t;const[r,d]=(0,n.useState)(e.title);return(0,l.jsxs)("form",{onSubmit:t=>{t.preventDefault();const o={...e,title:r};s(o)},className:a,children:[(0,l.jsx)("input",{type:"text",value:r,onChange:t=>d(t.target.value)}),(0,l.jsx)("button",{type:"submit",className:c,children:"Save"}),(0,l.jsx)("button",{type:"button",onClick:()=>{o()},className:i,children:"Cancel"})]})};var u=s(768);const m="TodoItem_todo-item__JiqsP",p="TodoItem_edit__5qtk6",h="TodoItem_delete__QX5uI",k="TodoItem_restore__s9GAv",_=t=>{let{task:e,onRestore:s}=t;const a=(0,o.j)(),[c,i]=(0,n.useState)(!1);return(0,l.jsx)("li",{className:m,children:c?(0,l.jsx)(d,{task:e,onSave:t=>{a((0,r.lC)(t)),u.Ay.success("Task updated successfully",{position:"top-right"}),i(!1)},onCancel:()=>{i(!1)}}):(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("span",{children:e.title}),s?(0,l.jsx)("button",{onClick:()=>{s&&s()},className:k,children:"Restore"}):(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("button",{onClick:()=>{i(!0)},className:p,children:"Edit"}),(0,l.jsx)("button",{onClick:()=>{a((0,r.jZ)(e.id)),u.Ay.success("Task deleted successfully",{position:"top-right"})},className:h,children:"Delete"})]})]})})};var f=s(99);const y=t=>t.tasks,j=(0,f.Mz)([y],(t=>t.items)),v=(0,f.Mz)([y],(t=>t.deletedTasks)),x=t=>{let{deleted:e=!1,onRestore:s}=t;const n=(0,o.G)(e?v:j);return(0,l.jsx)("ul",{children:n.map((t=>(0,l.jsx)(_,{task:t,onRestore:e?()=>{return e=t.id,void(s&&(s(e),u.Ay.success("Task restored successfully",{position:"top-right"})));var e}:void 0},t.id)))})}},13:(t,e,s)=>{s.r(e),s.d(e,{default:()=>j});var o=s(706),n=s(148),r=s(469),a=s(43);const c={randomUUID:"undefined"!==typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)};let i;const l=new Uint8Array(16);function d(){if(!i&&(i="undefined"!==typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!i))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return i(l)}const u=[];for(let v=0;v<256;++v)u.push((v+256).toString(16).slice(1));function m(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return u[t[e+0]]+u[t[e+1]]+u[t[e+2]]+u[t[e+3]]+"-"+u[t[e+4]]+u[t[e+5]]+"-"+u[t[e+6]]+u[t[e+7]]+"-"+u[t[e+8]]+u[t[e+9]]+"-"+u[t[e+10]]+u[t[e+11]]+u[t[e+12]]+u[t[e+13]]+u[t[e+14]]+u[t[e+15]]}const p=function(t,e,s){if(c.randomUUID&&!e&&!t)return c.randomUUID();const o=(t=t||{}).random||(t.rng||d)();if(o[6]=15&o[6]|64,o[8]=63&o[8]|128,e){s=s||0;for(let t=0;t<16;++t)e[s+t]=o[t];return e}return m(o)};var h=s(768);const k="TaskForm_form__ZtN5H";var _=s(579);const f=t=>{let{onSubmit:e}=t;const[s,o]=(0,a.useState)("");return(0,_.jsxs)("form",{onSubmit:t=>{if(t.preventDefault(),s.trim()){const t={id:p(),title:s};e(t),o(""),h.Ay.success("Task added successfully",{position:"top-right"})}},className:k,children:[(0,_.jsx)("input",{type:"text",value:s,placeholder:"Enter your task...",onChange:t=>o(t.target.value)}),(0,_.jsx)("button",{type:"submit",children:"Add Task"})]})};var y=s(190);const j=()=>{const t=(0,n.j)();return(0,_.jsxs)("div",{className:y.A.tasks,children:[(0,_.jsx)("h2",{children:"All Tasks"}),(0,_.jsx)(f,{onSubmit:e=>{t((0,o.XZ)(e))}}),(0,_.jsx)(r.A,{})]})}},148:(t,e,s)=>{s.d(e,{G:()=>r,j:()=>n});var o=s(3);const n=o.wA.withTypes(),r=o.d4.withTypes()},190:(t,e,s)=>{s.d(e,{A:()=>o});const o={tasks:"AllTasks_tasks__m1Fhh"}}}]);
//# sourceMappingURL=13.2bd93e1d.chunk.js.map