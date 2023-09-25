(this["webpackJsonpecommerce-admin"]=this["webpackJsonpecommerce-admin"]||[]).push([[30],{1227:function(e,t,a){"use strict";a.r(t);a(0);var r=a(22),n=a(35),s=a(722),c=a(88),o=a(148),i=a(197),l=a(165),u=a(697),d=a(696),m=a.p+"static/media/create-account-office.080280cb.jpeg",h=a.p+"static/media/create-account-office-dark.080280cb.jpeg",p=a(1);t.default=()=>{const{t:e}=Object(c.a)(),{onSubmit:t,register:a,handleSubmit:b,errors:f,loading:j}=Object(d.a)();return Object(p.jsx)("div",{className:"flex items-center min-h-screen p-6 bg-gray-50 dark:bg-gray-900",children:Object(p.jsx)("div",{className:"flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800",children:Object(p.jsxs)("div",{className:"flex flex-col overflow-y-auto md:flex-row",children:[Object(p.jsxs)("div",{className:"h-32 md:h-auto md:w-1/2",children:[Object(p.jsx)("img",{"aria-hidden":"true",className:"object-cover w-full h-full dark:hidden",src:m,alt:"Office"}),Object(p.jsx)("img",{"aria-hidden":"true",className:"hidden object-cover w-full h-full dark:block",src:h,alt:"Office"})]}),Object(p.jsx)("main",{className:"flex items-center justify-center p-6 sm:p-12 md:w-1/2",children:Object(p.jsxs)("div",{className:"w-full",children:[Object(p.jsx)("h1",{className:"mb-6 text-2xl font-semibold text-gray-700 dark:text-gray-200",children:e("CreateAccount")}),Object(p.jsxs)("form",{onSubmit:b(t),children:[Object(p.jsx)(l.a,{label:"Name"}),Object(p.jsx)(i.a,{register:a,label:"Name",name:"name",type:"text",placeholder:"Admin"}),Object(p.jsx)(o.a,{errorName:f.name}),Object(p.jsx)(l.a,{label:"Email"}),Object(p.jsx)(i.a,{register:a,label:"Email",name:"email",type:"email",placeholder:"john@doe.com"}),Object(p.jsx)(o.a,{errorName:f.email}),Object(p.jsx)(l.a,{label:"Password"}),Object(p.jsx)(i.a,{register:a,label:"Password",name:"password",type:"password",placeholder:"***************"}),Object(p.jsx)(o.a,{errorName:f.password}),Object(p.jsx)(l.a,{label:"Staff Role"}),Object(p.jsxs)("div",{className:"col-span-8 sm:col-span-4",children:[Object(p.jsx)(u.a,{register:a,label:"Role",name:"role"}),Object(p.jsx)(o.a,{errorName:f.role})]}),Object(p.jsxs)(n.Label,{className:"mt-6",check:!0,children:[Object(p.jsx)(n.Input,{type:"checkbox"}),Object(p.jsxs)("span",{className:"ml-2",children:[e("Iagree")," ",Object(p.jsx)("span",{className:"underline",children:e("privacyPolicy")})]})]}),Object(p.jsx)(n.Button,{disabled:j,type:"submit",className:"mt-4 h-12 w-full",to:"/dashboard",block:!0,children:e("CreateAccountTitle")})]}),Object(p.jsx)("hr",{className:"my-10"}),Object(p.jsxs)("button",{disabled:!0,className:"text-sm inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-semibold font-serif text-center justify-center rounded-md focus:outline-none text-gray-700 bg-gray-100 shadow-sm my-2 md:px-2 lg:px-3 py-4 md:py-3.5 lg:py-4 hover:text-white hover:bg-blue-600 h-11 md:h-12 w-full mr-2",children:[Object(p.jsx)(s.b,{className:"w-4 h-4 mr-2"})," ",Object(p.jsxs)("span",{className:"ml-2",children:[" ",e("LoginWithFacebook")," "]})]}),Object(p.jsxs)("button",{disabled:!0,className:"text-sm inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-semibold font-serif text-center justify-center rounded-md focus:outline-none text-gray-700 bg-gray-100 shadow-sm my-2  md:px-2 lg:px-3 py-4 md:py-3.5 lg:py-4 hover:text-white hover:bg-red-500 h-11 md:h-12 w-full",children:[Object(p.jsx)(s.c,{className:"w-4 h-4 mr-2"})," ",Object(p.jsx)("span",{className:"ml-2",children:e("LoginWithGoogle")})]}),Object(p.jsx)("p",{className:"mt-4",children:Object(p.jsx)(r.b,{className:"text-sm font-medium text-green-500 dark:text-green-400 hover:underline",to:"/login",children:e("AlreadyAccount")})})]})})]})})})}},148:function(e,t,a){"use strict";a(0);var r=a(1);t.a=e=>{let{errorName:t}=e;return Object(r.jsx)(r.Fragment,{children:t&&Object(r.jsx)("span",{className:"text-red-400 text-sm mt-2",children:t.message})})}},165:function(e,t,a){"use strict";a(0);var r=a(35),n=a(1);t.a=e=>{let{label:t}=e;return Object(n.jsx)(r.Label,{className:"col-span-4 sm:col-span-2 font-medium text-sm",children:t})}},189:function(e,t,a){"use strict";var r=a(95);const n={registerAdmin:async e=>r.a.post("/signup",e),loginAdmin:async e=>r.a.post("/login",e),forgetPassword:async e=>r.a.post("/forget-password",e),resetPassword:async e=>r.a.put("/admin/reset-password",e),signUpWithProvider:async e=>r.a.post("/admin/signup",e),addStaff:async e=>r.a.post("/admin/add",e),getAllStaff:async e=>r.a.get("/admin",e),getStaffById:async(e,t)=>r.a.post("/admin/".concat(e),t),updateStaff:async(e,t)=>r.a.put("/admin/".concat(e),t),updateStaffStatus:async(e,t)=>r.a.put("/admin/update-status/".concat(e),t),deleteStaff:async e=>r.a.delete("/admin/".concat(e))};t.a=n},197:function(e,t,a){"use strict";a(0);var r=a(35),n=a(1);t.a=e=>{let{register:t,defaultValue:a,required:s,name:c,label:o,type:i,placeholder:l}=e;return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)(r.Input,{...t("".concat(c),{required:!s&&"".concat(o," is required!")}),defaultValue:a,type:i,placeholder:l,name:c,className:"border h-12 text-sm focus:outline-none block w-full bg-gray-100 dark:bg-white border-transparent focus:bg-white"})})}},668:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var r=a(0),n=a.n(r),s={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},c=n.a.createContext&&n.a.createContext(s),o=function(){return o=Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++)for(var n in t=arguments[a])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},o.apply(this,arguments)},i=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(a[r[n]]=e[r[n]])}return a};function l(e){return e&&e.map((function(e,t){return n.a.createElement(e.tag,o({key:t},e.attr),l(e.child))}))}function u(e){return function(t){return n.a.createElement(d,o({attr:o({},e.attr)},t),l(e.child))}}function d(e){var t=function(t){var a,r=e.attr,s=e.size,c=e.title,l=i(e,["attr","size","title"]),u=s||t.size||"1em";return t.className&&(a=t.className),e.className&&(a=(a?a+" ":"")+e.className),n.a.createElement("svg",o({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,r,l,{className:a,style:o(o({color:e.color||t.color},t.style),e.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),c&&n.a.createElement("title",null,c),e.children)};return void 0!==c?n.a.createElement(c.Consumer,null,(function(e){return t(e)})):t(s)}},696:function(e,t,a){"use strict";var r=a(14),n=a.n(r),s=a(0),c=a(247),o=a(3),i=a(23),l=a(189),u=a(37);t.a=()=>{const[e,t]=Object(s.useState)(!1),{dispatch:a}=Object(s.useContext)(i.a),r=Object(o.g)(),d=Object(o.h)(),{register:m,handleSubmit:h,formState:{errors:p}}=Object(c.a)();return{onSubmit:e=>{let{name:s,email:c,verifyEmail:o,password:i,role:m}=e;t(!0);"/login"===d.pathname&&l.a.loginAdmin({email:c,password:i}).then((e=>{e&&(t(!1),Object(u.c)("Login Success!"),a({type:"USER_LOGIN",payload:e}),n.a.set("adminInfo",JSON.stringify(e),{expires:1e3}),r.replace("/"))})).catch((e=>{Object(u.b)(e?e.response.data.message:e.message),t(!1)})),"/signup"===d.pathname&&l.a.registerAdmin({name:s,email:c,password:i,role:m}).then((e=>{e&&(t(!1),Object(u.c)("Register Success!"),a({type:"USER_LOGIN",payload:e}),n.a.set("adminInfo",JSON.stringify(e),{expires:1e3}),r.replace("/"))})).catch((e=>{Object(u.b)(e?e.response.data.message:e.message),t(!1)})),"/forgot-password"===d.pathname&&l.a.forgetPassword({email:o}).then((e=>{t(!1),Object(u.c)(e.message)})).catch((e=>{t(!1),Object(u.b)(e?e.response.data.message:e.message)}))},register:m,handleSubmit:h,errors:p,loading:e}}},697:function(e,t,a){"use strict";a(0);var r=a(35),n=a(1);t.a=e=>{let{setRole:t,register:a,name:s,label:c}=e;return Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)(r.Select,{onChange:e=>t(e.target.value),className:"border h-12 text-sm focus:outline-none block w-full bg-gray-100 dark:bg-white border-transparent focus:bg-white",name:s,...a("".concat(s),{required:"".concat(c," is required!")}),children:[Object(n.jsx)("option",{value:"",defaultValue:!0,hidden:!0,children:"Staff role"}),Object(n.jsx)("option",{value:"Admin",children:"Admin"}),Object(n.jsx)("option",{value:"CEO",children:"CEO"}),Object(n.jsx)("option",{value:"Manager",children:"Manager"}),Object(n.jsx)("option",{value:"Accountant",children:"Accountant"}),Object(n.jsx)("option",{value:"Driver",children:" Driver "}),Object(n.jsx)("option",{value:"Security Guard",children:"Security Guard"}),Object(n.jsx)("option",{value:"Deliver Person",children:"Delivery Person"})]})})}},91:function(e,t){var a,r,n=e.exports={};function s(){throw new Error("setTimeout has not been defined")}function c(){throw new Error("clearTimeout has not been defined")}function o(e){if(a===setTimeout)return setTimeout(e,0);if((a===s||!a)&&setTimeout)return a=setTimeout,setTimeout(e,0);try{return a(e,0)}catch(t){try{return a.call(null,e,0)}catch(t){return a.call(this,e,0)}}}!function(){try{a="function"===typeof setTimeout?setTimeout:s}catch(e){a=s}try{r="function"===typeof clearTimeout?clearTimeout:c}catch(e){r=c}}();var i,l=[],u=!1,d=-1;function m(){u&&i&&(u=!1,i.length?l=i.concat(l):d=-1,l.length&&h())}function h(){if(!u){var e=o(m);u=!0;for(var t=l.length;t;){for(i=l,l=[];++d<t;)i&&i[d].run();d=-1,t=l.length}i=null,u=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===c||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function b(){}n.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var a=1;a<arguments.length;a++)t[a-1]=arguments[a];l.push(new p(e,t)),1!==l.length||u||o(h)},p.prototype.run=function(){this.fun.apply(null,this.array)},n.title="browser",n.browser=!0,n.env={},n.argv=[],n.version="",n.versions={},n.on=b,n.addListener=b,n.once=b,n.off=b,n.removeListener=b,n.removeAllListeners=b,n.emit=b,n.prependListener=b,n.prependOnceListener=b,n.listeners=function(e){return[]},n.binding=function(e){throw new Error("process.binding is not supported")},n.cwd=function(){return"/"},n.chdir=function(e){throw new Error("process.chdir is not supported")},n.umask=function(){return 0}},95:function(e,t,a){"use strict";var r=a(145),n=a.n(r),s=a(14),c=a.n(s);const o=n.a.create({baseURL:"https://backend.canadasentinel.ca/api",timeout:5e4,headers:{Accept:"application/json","Content-Type":"application/json"}});o.interceptors.request.use((function(e){let t,a;return c.a.get("adminInfo")&&(t=JSON.parse(c.a.get("adminInfo"))),c.a.get("company")&&(a=c.a.get("company")),{...e,headers:{authorization:t?"Bearer ".concat(t.token):null,company:a||null}}}));const i=e=>e.data,l={get:(e,t,a)=>o.get(e,t,a).then(i),post:(e,t)=>o.post(e,t).then(i),put:(e,t,a)=>o.put(e,t,a).then(i),patch:(e,t)=>o.patch(e,t).then(i),delete:(e,t)=>o.delete(e,t).then(i)};t.a=l}}]);
//# sourceMappingURL=30.056ee2ab.chunk.js.map