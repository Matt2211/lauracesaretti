(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{657:function(e,t,r){"use strict";r.r(t);const o={_origin:"https://api.emailjs.com"},n=(e,t,r)=>{if(!e)throw"The user ID is required. Visit https://dashboard.emailjs.com/admin/integration";if(!t)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!r)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};class c{constructor(e){this.status=e.status,this.text=e.responseText}}const l=(e,data,t={})=>new Promise(((r,n)=>{const l=new XMLHttpRequest;l.addEventListener("load",(({target:e})=>{const t=new c(e);200===t.status||"OK"===t.text?r(t):n(t)})),l.addEventListener("error",(({target:e})=>{n(new c(e))})),l.open("POST",o._origin+e,!0),Object.keys(t).forEach((e=>{l.setRequestHeader(e,t[e])})),l.send(data)}));var m=(e,t,form,r)=>{const c=r||o._userID,m=(form=>{let e;if(e="string"==typeof form?document.querySelector(form):form,!e||"FORM"!==e.nodeName)throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return e})(form);n(c,e,t);const d=new FormData(m);return d.append("lib_version","3.4.0"),d.append("service_id",e),d.append("template_id",t),d.append("user_id",c),l("/api/v1.0/email/send-form",d)},d={name:"Contacts",data:function(){return{emailSuccess:!1}},props:{optionsEnabled:{type:Boolean,required:!1,default:!1},categoryName:{type:String,required:!1}},methods:{sendEmail:function(){var e=this;m("service_0smn389","template_nv4dhfd",this.$refs.form,"Wv-_Y_OTYnAimnkVi").then((function(t){e.emailSuccess=!0,console.log("SUCCESS!",t.text)}),(function(e){console.log("FAILED...",e.text)}))}}},h=r(64),component=Object(h.a)(d,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[!1===e.emailSuccess?r("form",{ref:"form",on:{submit:function(t){return t.preventDefault(),e.sendEmail.apply(null,arguments)}}},[e._m(0),e._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:e.optionsEnabled,expression:"optionsEnabled"}],staticClass:"contact-options mb-3"},[r("div",{staticClass:"form-check"},[r("input",{staticClass:"form-check-input",attrs:{name:"FineArt",type:"checkbox",value:"FineArt",id:"FineArt"},domProps:{checked:"Fine Art"===e.categoryName?"checked":""}}),e._v(" "),r("label",{staticClass:"form-check-label",attrs:{for:"FineArt"}},[e._v("\n          Maternità Fine Art\n        ")])]),e._v(" "),r("div",{staticClass:"form-check"},[r("input",{staticClass:"form-check-input",attrs:{name:"LifeStyle",type:"checkbox",value:"LifeStyle",id:"LifeStyle"},domProps:{checked:"Life Style"===e.categoryName?"checked":""}}),e._v(" "),r("label",{staticClass:"form-check-label",attrs:{for:"LifeStyle"}},[e._v("\n          Maternità Life Style\n        ")])]),e._v(" "),r("div",{staticClass:"form-check"},[r("input",{staticClass:"form-check-input",attrs:{name:"Neonato",type:"checkbox",value:"Neonato",id:"Neonato"},domProps:{checked:"Neonato"===e.categoryName?"checked":""}}),e._v(" "),r("label",{staticClass:"form-check-label",attrs:{for:"Neonato"}},[e._v("Neonato")])]),e._v(" "),r("div",{staticClass:"form-check"},[r("input",{staticClass:"form-check-input",attrs:{name:"Bebe",type:"checkbox",value:"Bebe",id:"Bebe"},domProps:{checked:"Bebè"===e.categoryName?"checked":""}}),e._v(" "),r("label",{staticClass:"form-check-label",attrs:{for:"Bebe"}},[e._v("Bebè")])]),e._v(" "),r("div",{staticClass:"form-check"},[r("input",{staticClass:"form-check-input",attrs:{name:"CakeSmash",type:"checkbox",value:"CakeSmash",id:"CakeSmash"},domProps:{checked:"Cake Smash"===e.categoryName?"checked":""}}),e._v(" "),r("label",{staticClass:"form-check-label",attrs:{for:"CakeSmash"}},[e._v("Cake Smash")])])]),e._v(" "),e._m(1),e._v(" "),e._m(2)]):e._e(),e._v(" "),e.emailSuccess?r("h4",{staticClass:"display-5 text-center"},[e._v("\n    Grazie per la tua email!\n  ")]):e._e()])}),[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"row mb-4",staticStyle:{gap:"20px 0"}},[r("div",{staticClass:"col-12 col-md-6"},[r("label",{attrs:{for:"user_name"}},[e._v("Nome*")]),e._v(" "),r("input",{staticClass:"form-control",attrs:{type:"text",name:"user_name",id:"user_name",placeholder:"Nome",required:""}})]),e._v(" "),r("div",{staticClass:"col-12 col-md-6"},[r("label",{attrs:{for:"to_lastname"}},[e._v("Cognome*")]),e._v(" "),r("input",{staticClass:"form-control",attrs:{type:"text",name:"user_lastname",id:"user_lastname",placeholder:"Cognome",required:""}})]),e._v(" "),r("div",{staticClass:"col-12 col-md-6"},[r("label",{attrs:{for:"user_email"}},[e._v("Indirizzo Email*")]),e._v(" "),r("input",{staticClass:"form-control",attrs:{type:"email",name:"user_email",id:"user_email","aria-describedby":"emailHelp",placeholder:"Indirizzo Email",required:""}})]),e._v(" "),r("div",{staticClass:"col-12 col-md-6"},[r("label",{attrs:{for:"user_phone"}},[e._v("Telefono*")]),e._v(" "),r("input",{staticClass:"form-control",attrs:{type:"tel",name:"user_phone",id:"user_phone","aria-describedby":"telephone",placeholder:"Telefono",required:""}})])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"user_message"}},[e._v("Scrivi qui il tuo messaggio*")]),e._v(" "),r("textarea",{staticClass:"form-control",attrs:{name:"user_message",id:"user_message",rows:"5"}})])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"w-100 d-flex align-items-center justify-content-between"},[r("p",{staticClass:"small mb-0"},[e._v('\n        I campi contrassegnati con "*" sono obbligatori.\n      ')]),e._v(" "),r("button",{staticClass:"btn btn-dark d-block ml-auto btn-sm",attrs:{type:"submit"}},[e._v("\n        Invia Email\n      ")])])}],!1,null,null,null);t.default=component.exports}}]);