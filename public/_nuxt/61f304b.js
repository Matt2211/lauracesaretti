(window.webpackJsonp=window.webpackJsonp||[]).push([[5,2],{661:function(e,t,r){"use strict";r.r(t);const o={_origin:"https://api.emailjs.com"},n=(e,t,r)=>{if(!e)throw"The user ID is required. Visit https://dashboard.emailjs.com/admin/integration";if(!t)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!r)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};class l{constructor(e){this.status=e.status,this.text=e.responseText}}const c=(e,data,t={})=>new Promise(((r,n)=>{const c=new XMLHttpRequest;c.addEventListener("load",(({target:e})=>{const t=new l(e);200===t.status||"OK"===t.text?r(t):n(t)})),c.addEventListener("error",(({target:e})=>{n(new l(e))})),c.open("POST",o._origin+e,!0),Object.keys(t).forEach((e=>{c.setRequestHeader(e,t[e])})),c.send(data)}));var d=(e,t,form,r)=>{const l=r||o._userID,d=(form=>{let e;if(e="string"==typeof form?document.querySelector(form):form,!e||"FORM"!==e.nodeName)throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return e})(form);n(l,e,t);const m=new FormData(d);return m.append("lib_version","3.4.0"),m.append("service_id",e),m.append("template_id",t),m.append("user_id",l),c("/api/v1.0/email/send-form",m)},m={name:"Contacts",data:function(){return{emailSuccess:!1}},props:{optionsEnabled:{type:Boolean,required:!1,default:!1},categoryName:{type:String,required:!1}},methods:{sendEmail:function(){var e=this;d("service_0smn389","template_nv4dhfd",this.$refs.form,"Wv-_Y_OTYnAimnkVi").then((function(t){e.emailSuccess=!0,console.log("SUCCESS!",t.text)}),(function(e){console.log("FAILED...",e.text)}))}}},v=r(66),component=Object(v.a)(m,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[!1===e.emailSuccess?r("form",{ref:"form",on:{submit:function(t){return t.preventDefault(),e.sendEmail.apply(null,arguments)}}},[e._m(0),e._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:e.optionsEnabled,expression:"optionsEnabled"}],staticClass:"contact-options mb-3"},[r("div",{staticClass:"form-check"},[r("input",{staticClass:"form-check-input",attrs:{name:"fineArt",type:"checkbox",value:"fineArt",id:"fineArt"},domProps:{checked:"Fine Art"===e.categoryName?"checked":""}}),e._v(" "),r("label",{staticClass:"form-check-label",attrs:{for:"fineArt"}},[e._v("\n          Maternità Fine Art\n        ")])]),e._v(" "),r("div",{staticClass:"form-check"},[r("input",{staticClass:"form-check-input",attrs:{name:"lifeStyle",type:"checkbox",value:"lifeStyle",id:"lifeStyle"},domProps:{checked:"Life Style"===e.categoryName?"checked":""}}),e._v(" "),r("label",{staticClass:"form-check-label",attrs:{for:"lifeStyle"}},[e._v("\n          Maternità Life Style\n        ")])]),e._v(" "),r("div",{staticClass:"form-check"},[r("input",{staticClass:"form-check-input",attrs:{name:"neonato",type:"checkbox",value:"neonato",id:"neonato"},domProps:{checked:"Neonato"===e.categoryName?"checked":""}}),e._v(" "),r("label",{staticClass:"form-check-label",attrs:{for:"neonato"}},[e._v("Neonato")])]),e._v(" "),r("div",{staticClass:"form-check"},[r("input",{staticClass:"form-check-input",attrs:{name:"bebe",type:"checkbox",value:"bebe",id:"bebe"},domProps:{checked:"Bebè"===e.categoryName?"checked":""}}),e._v(" "),r("label",{staticClass:"form-check-label",attrs:{for:"bebe"}},[e._v("Bebè")])]),e._v(" "),r("div",{staticClass:"form-check"},[r("input",{staticClass:"form-check-input",attrs:{name:"cakeSmash",type:"checkbox",value:"cakeSmash",id:"cakeSmash"},domProps:{checked:"Cake Smash"===e.categoryName?"checked":""}}),e._v(" "),r("label",{staticClass:"form-check-label",attrs:{for:"cakeSmash"}},[e._v("Cake Smash")])])]),e._v(" "),e._m(1),e._v(" "),e._m(2)]):e._e(),e._v(" "),e.emailSuccess?r("h4",{staticClass:"display-5 text-center"},[e._v("Grazie per la tua email!")]):e._e()])}),[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"row mb-4",staticStyle:{gap:"20px 0"}},[r("div",{staticClass:"col-12 col-md-6"},[r("label",{attrs:{for:"user_name"}},[e._v("Nome*")]),e._v(" "),r("input",{staticClass:"form-control",attrs:{type:"text",name:"user_name",id:"user_name",placeholder:"Nome",required:""}})]),e._v(" "),r("div",{staticClass:"col-12 col-md-6"},[r("label",{attrs:{for:"to_lastname"}},[e._v("Cognome*")]),e._v(" "),r("input",{staticClass:"form-control",attrs:{type:"text",name:"user_lastname",id:"user_lastname",placeholder:"Cognome",required:""}})]),e._v(" "),r("div",{staticClass:"col-12 col-md-6"},[r("label",{attrs:{for:"user_email"}},[e._v("Indirizzo Email*")]),e._v(" "),r("input",{staticClass:"form-control",attrs:{type:"email",name:"user_email",id:"user_email","aria-describedby":"emailHelp",placeholder:"Indirizzo Email",required:""}})]),e._v(" "),r("div",{staticClass:"col-12 col-md-6"},[r("label",{attrs:{for:"user_phone"}},[e._v("Telefono*")]),e._v(" "),r("input",{staticClass:"form-control",attrs:{type:"tel",name:"user_phone",id:"user_phone","aria-describedby":"telephone",placeholder:"Telefono",required:""}})])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"user_message"}},[e._v("Scrivi qui il tuo messaggio*")]),e._v(" "),r("textarea",{staticClass:"form-control",attrs:{name:"user_message",id:"user_message",rows:"5"}})])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"w-100 d-flex align-items-center justify-content-between"},[r("p",{staticClass:"small mb-0"},[e._v('I campi contrassegnati con "*" sono obbligatori.')]),e._v(" "),r("button",{staticClass:"btn btn-dark d-block ml-auto",attrs:{type:"submit"}},[e._v("\n        Invia Email\n      ")])])}],!1,null,null,null);t.default=component.exports},663:function(e,t,r){"use strict";r.r(t);var o={name:"Header",data:function(){return{scrollY:0,showMobileMenu:!1}},props:{isOnIndex:{type:Boolean,required:!1,default:!1}},methods:{handleScroll:function(){this.scrollY=window.scrollY}},beforeMount:function(){window.addEventListener("scroll",this.handleScroll)},beforeDestroy:function(){window.removeEventListener("scroll",this.handleScroll)}},n=r(66),component=Object(n.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticClass:"header",class:e.isOnIndex&&e.scrollY<=200?"bg-transparent":"bg-light shadow-sm"},[r("NuxtLink",{attrs:{to:"/"}},[r("h4",{staticClass:"text-decoration-none mb-0"},[e._v("\n        Laura Cesaretti\n        ")])]),e._v(" "),r("div",{staticClass:"d-lg-none",class:[e.isOnIndex&&e.scrollY<=200?"text-light":"text-dark",!0===e.showMobileMenu&&e.scrollY<=200?"text-dark":"text-light"],on:{click:function(t){e.showMobileMenu=!e.showMobileMenu}}},[e._v("\n      "+e._s(e.showMobileMenu?"close":"open")+"\n    ")]),e._v(" "),r("ul",{staticClass:"d-none d-lg-flex main-menu list-unstyled m-0",class:e.isOnIndex&&e.scrollY<=200?"text-light":"text-dark"},[r("NuxtLink",{attrs:{to:"/chi-sono"}},[r("li",{staticClass:"text-uppercase"},[e._v("Chi sono")])]),e._v(" "),r("NuxtLink",{attrs:{to:"/servizi"}},[r("li",{staticClass:"text-uppercase"},[e._v("Servizi Fotografici")])]),e._v(" "),r("NuxtLink",{attrs:{to:"/galleria"}},[r("li",{staticClass:"text-uppercase"},[e._v("Galleria")])]),e._v(" "),r("NuxtLink",{attrs:{to:"/contatti"}},[r("li",{staticClass:"text-uppercase"},[e._v("Contatti")])]),e._v(" "),r("li",[r("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-center-header",modifiers:{"modal-center-header":!0}}],staticClass:"d-block",attrs:{variant:e.isOnIndex&&e.scrollY<=200?"light":"dark"}},[e._v("Richiedi Preventivo")]),e._v(" "),r("b-modal",{attrs:{"hide-footer":"",id:"modal-center-header",size:"lg",centered:"",title:"Richiesta Preventivo"}},[r("Contacts",{attrs:{optionsEnabled:""}})],1)],1)],1)],1),e._v(" "),e.showMobileMenu?r("div",{staticClass:"overlay d-flex align-items-center justify-content-center flex-column",attrs:{id:"myNav"}},[r("ul",{staticClass:"d-flex flex-column align-items-center justify-content-center main-menu list-unstyled m-0",staticStyle:{gap:"30px"}},[r("NuxtLink",{attrs:{to:"/servizi"}},[r("li",{staticClass:"text-uppercase"},[e._v("Servizi Fotografici")])]),e._v(" "),r("NuxtLink",{attrs:{to:"/galleria"}},[r("li",{staticClass:"text-uppercase"},[e._v("Galleria")])]),e._v(" "),r("NuxtLink",{attrs:{to:"/contatti"}},[r("li",{staticClass:"text-uppercase"},[e._v("Contatti")])]),e._v(" "),r("li",[r("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-center-header",modifiers:{"modal-center-header":!0}}],staticClass:"d-block",attrs:{variant:"dark"}},[e._v("Richiedi Preventivo")]),e._v(" "),r("b-modal",{attrs:{"hide-footer":"",id:"modal-center-header",size:"lg",centered:"",title:"Richiesta Preventivo"}},[r("Contacts",{attrs:{optionsEnabled:""}})],1)],1)],1)]):e._e()])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Contacts:r(661).default})}}]);