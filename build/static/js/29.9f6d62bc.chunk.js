(this["webpackJsonpecommerce-admin"]=this["webpackJsonpecommerce-admin"]||[]).push([[29],{101:function(e,t,a){"use strict";var n=a(151),r=a.n(n),s=a(17),c=a.n(s);const i=r.a.create({baseURL:"https://backend.canadasentinel.ca/api",timeout:5e4,headers:{Accept:"application/json","Content-Type":"application/json"}});i.interceptors.request.use((function(e){let t,a;return c.a.get("adminInfo")&&(t=JSON.parse(c.a.get("adminInfo"))),c.a.get("company")&&(a=c.a.get("company")),{...e,headers:{authorization:t?"Bearer ".concat(t.token):null,company:a||null}}}));const o=e=>e.data,l={get:(e,t,a)=>i.get(e,t,a).then(o),post:(e,t)=>i.post(e,t).then(o),put:(e,t,a)=>i.put(e,t,a).then(o),patch:(e,t)=>i.patch(e,t).then(o),delete:(e,t)=>i.delete(e,t).then(o)};t.a=l},1219:function(e,t,a){"use strict";a.r(t);a(0);var n=a(25),r=a(40),s=a(154),c=a(702),i=a(171),o=a(203),l=a(727),u=a(728),d=a(3);t.default=()=>{const{onSubmit:e,register:t,handleSubmit:a,errors:m,loading:f}=Object(c.a)();return Object(d.jsx)("div",{className:"flex items-center min-h-screen p-6 bg-gray-50 dark:bg-gray-900",children:Object(d.jsx)("div",{className:"flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800",children:Object(d.jsxs)("div",{className:"flex flex-col overflow-y-auto md:flex-row",children:[Object(d.jsxs)("div",{className:"h-32 md:h-auto md:w-1/2",children:[Object(d.jsx)("img",{"aria-hidden":"true",className:"object-cover w-full h-full dark:hidden",src:l.a,alt:"Office"}),Object(d.jsx)("img",{"aria-hidden":"true",className:"hidden object-cover w-full h-full dark:block",src:u.a,alt:"Office"})]}),Object(d.jsx)("main",{className:"flex items-center justify-center p-6 sm:p-12 md:w-1/2",children:Object(d.jsxs)("div",{className:"w-full",children:[Object(d.jsx)("h1",{className:"mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200",children:"Forgot password"}),Object(d.jsxs)("form",{onSubmit:a(e),children:[Object(d.jsx)(i.a,{label:"Email"}),Object(d.jsx)(o.a,{register:t,label:"Email",name:"verifyEmail",type:"email",placeholder:"john@doe.com"}),Object(d.jsx)(s.a,{errorName:m.verifyEmail}),Object(d.jsx)(r.Button,{disabled:f,type:"submit",block:!0,className:"mt-4 h-12",children:"Recover password"})]}),Object(d.jsx)("p",{className:"mt-4",children:Object(d.jsx)(n.b,{className:"text-sm font-medium text-green-500 dark:text-green-400 hover:underline",to:"/login",children:"Already have an account? Login"})})]})})]})})})}},154:function(e,t,a){"use strict";a(0);var n=a(3);t.a=e=>{let{errorName:t}=e;return Object(n.jsx)(n.Fragment,{children:t&&Object(n.jsx)("span",{className:"text-red-400 text-sm mt-2",children:t.message})})}},171:function(e,t,a){"use strict";a(0);var n=a(40),r=a(3);t.a=e=>{let{label:t}=e;return Object(r.jsx)(n.Label,{className:"col-span-4 sm:col-span-2 font-medium text-sm",children:t})}},195:function(e,t,a){"use strict";var n=a(101);const r={registerAdmin:async e=>n.a.post("/signup",e),loginAdmin:async e=>n.a.post("/login",e),forgetPassword:async e=>n.a.post("/forget-password",e),resetPassword:async e=>n.a.put("/admin/reset-password",e),signUpWithProvider:async e=>n.a.post("/admin/signup",e),addStaff:async e=>n.a.post("/admin/add",e),getAllStaff:async e=>n.a.get("/admin",e),getStaffById:async(e,t)=>n.a.post("/admin/".concat(e),t),updateStaff:async(e,t)=>n.a.put("/admin/".concat(e),t),updateStaffStatus:async(e,t)=>n.a.put("/admin/update-status/".concat(e),t),deleteStaff:async e=>n.a.delete("/admin/".concat(e))};t.a=r},203:function(e,t,a){"use strict";a(0);var n=a(40),r=a(3);t.a=e=>{let{register:t,defaultValue:a,required:s,name:c,label:i,type:o,placeholder:l}=e;return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)(n.Input,{...t("".concat(c),{required:!s&&"".concat(i," is required!")}),defaultValue:a,type:o,placeholder:l,name:c,className:"border h-12 text-sm focus:outline-none block w-full bg-gray-100 dark:bg-white border-transparent focus:bg-white"})})}},702:function(e,t,a){"use strict";var n=a(17),r=a.n(n),s=a(0),c=a(253),i=a(6),o=a(26),l=a(195),u=a(42);t.a=()=>{const[e,t]=Object(s.useState)(!1),{dispatch:a}=Object(s.useContext)(o.a),n=Object(i.g)(),[d,m]=Object(s.useState)(""),f=Object(i.h)(),{register:p,handleSubmit:h,formState:{errors:g}}=Object(c.a)();return{onSubmit:e=>{let{name:s,email:c,verifyEmail:i,password:o,role:m}=e;t(!0);"/login"===f.pathname&&l.a.loginAdmin({email:c,password:o}).then((e=>{e&&(t(!1),Object(u.c)("Login Success!"),a({type:"USER_LOGIN",payload:e}),r.a.set("adminInfo",JSON.stringify(e),{expires:1e3}),n.replace("/"))})).catch((e=>{Object(u.b)(e?e.response.data.message:e.message),t(!1)})),"/signup"===f.pathname&&l.a.registerAdmin({name:s,email:c,password:o,phone:d}).then((e=>{e&&(t(!1),Object(u.c)("Register Success!"),a({type:"USER_LOGIN",payload:e}),r.a.set("adminInfo",JSON.stringify(e),{expires:1e3}),n.replace("/"))})).catch((e=>{Object(u.b)(e?e.response.data.message:e.message),t(!1)})),"/forgot-password"===f.pathname&&l.a.forgetPassword({email:i}).then((e=>{t(!1),Object(u.c)(e.message)})).catch((e=>{t(!1),Object(u.b)(e?e.response.data.message:e.message)}))},register:p,handleSubmit:h,errors:g,loading:e,setPhoneValue:m}}},727:function(e,t,a){"use strict";t.a=a.p+"static/media/forgot-password-office.d1630a33.jpeg"},728:function(e,t,a){"use strict";t.a=a.p+"static/media/forgot-password-office-dark.d1630a33.jpeg"},97:function(e,t){var a,n,r=e.exports={};function s(){throw new Error("setTimeout has not been defined")}function c(){throw new Error("clearTimeout has not been defined")}function i(e){if(a===setTimeout)return setTimeout(e,0);if((a===s||!a)&&setTimeout)return a=setTimeout,setTimeout(e,0);try{return a(e,0)}catch(t){try{return a.call(null,e,0)}catch(t){return a.call(this,e,0)}}}!function(){try{a="function"===typeof setTimeout?setTimeout:s}catch(e){a=s}try{n="function"===typeof clearTimeout?clearTimeout:c}catch(e){n=c}}();var o,l=[],u=!1,d=-1;function m(){u&&o&&(u=!1,o.length?l=o.concat(l):d=-1,l.length&&f())}function f(){if(!u){var e=i(m);u=!0;for(var t=l.length;t;){for(o=l,l=[];++d<t;)o&&o[d].run();d=-1,t=l.length}o=null,u=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===c||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function h(){}r.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var a=1;a<arguments.length;a++)t[a-1]=arguments[a];l.push(new p(e,t)),1!==l.length||u||i(f)},p.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=h,r.addListener=h,r.once=h,r.off=h,r.removeListener=h,r.removeAllListeners=h,r.emit=h,r.prependListener=h,r.prependOnceListener=h,r.listeners=function(e){return[]},r.binding=function(e){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(e){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}}}]);
//# sourceMappingURL=29.9f6d62bc.chunk.js.map