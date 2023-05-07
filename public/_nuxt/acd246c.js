(window.webpackJsonp=window.webpackJsonp||[]).push([[5,2],{657:function(e,t,o){"use strict";o.r(t);const r={_origin:"https://api.emailjs.com"},n=(e,t,o)=>{if(!e)throw"The user ID is required. Visit https://dashboard.emailjs.com/admin/integration";if(!t)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!o)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};class l{constructor(e){this.status=e.status,this.text=e.responseText}}const c=(e,data,t={})=>new Promise(((o,n)=>{const c=new XMLHttpRequest;c.addEventListener("load",(({target:e})=>{const t=new l(e);200===t.status||"OK"===t.text?o(t):n(t)})),c.addEventListener("error",(({target:e})=>{n(new l(e))})),c.open("POST",r._origin+e,!0),Object.keys(t).forEach((e=>{c.setRequestHeader(e,t[e])})),c.send(data)}));var d=(e,t,form,o)=>{const l=o||r._userID,d=(form=>{let e;if(e="string"==typeof form?document.querySelector(form):form,!e||"FORM"!==e.nodeName)throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return e})(form);n(l,e,t);const m=new FormData(d);return m.append("lib_version","3.4.0"),m.append("service_id",e),m.append("template_id",t),m.append("user_id",l),c("/api/v1.0/email/send-form",m)},m={name:"Contacts",data:function(){return{emailSuccess:!1}},props:{optionsEnabled:{type:Boolean,required:!1,default:!1},categoryName:{type:String,required:!1}},methods:{sendEmail:function(){var e=this;d("service_0smn389","template_nv4dhfd",this.$refs.form,"Wv-_Y_OTYnAimnkVi").then((function(t){e.emailSuccess=!0,console.log("SUCCESS!",t.text)}),(function(e){console.log("FAILED...",e.text)}))}}},v=o(64),component=Object(v.a)(m,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[!1===e.emailSuccess?o("form",{ref:"form",on:{submit:function(t){return t.preventDefault(),e.sendEmail.apply(null,arguments)}}},[e._m(0),e._v(" "),o("div",{directives:[{name:"show",rawName:"v-show",value:e.optionsEnabled,expression:"optionsEnabled"}],staticClass:"contact-options mb-3"},[o("div",{staticClass:"form-check"},[o("input",{staticClass:"form-check-input",attrs:{name:"FineArt",type:"checkbox",value:"FineArt",id:"FineArt"},domProps:{checked:"Fine Art"===e.categoryName?"checked":""}}),e._v(" "),o("label",{staticClass:"form-check-label",attrs:{for:"FineArt"}},[e._v("\n          Maternità Fine Art\n        ")])]),e._v(" "),o("div",{staticClass:"form-check"},[o("input",{staticClass:"form-check-input",attrs:{name:"LifeStyle",type:"checkbox",value:"LifeStyle",id:"LifeStyle"},domProps:{checked:"Life Style"===e.categoryName?"checked":""}}),e._v(" "),o("label",{staticClass:"form-check-label",attrs:{for:"LifeStyle"}},[e._v("\n          Maternità Life Style\n        ")])]),e._v(" "),o("div",{staticClass:"form-check"},[o("input",{staticClass:"form-check-input",attrs:{name:"Neonato",type:"checkbox",value:"Neonato",id:"Neonato"},domProps:{checked:"Neonato"===e.categoryName?"checked":""}}),e._v(" "),o("label",{staticClass:"form-check-label",attrs:{for:"Neonato"}},[e._v("Neonato")])]),e._v(" "),o("div",{staticClass:"form-check"},[o("input",{staticClass:"form-check-input",attrs:{name:"Bebe",type:"checkbox",value:"Bebe",id:"Bebe"},domProps:{checked:"Bebè"===e.categoryName?"checked":""}}),e._v(" "),o("label",{staticClass:"form-check-label",attrs:{for:"Bebe"}},[e._v("Bebè")])]),e._v(" "),o("div",{staticClass:"form-check"},[o("input",{staticClass:"form-check-input",attrs:{name:"CakeSmash",type:"checkbox",value:"CakeSmash",id:"CakeSmash"},domProps:{checked:"Cake Smash"===e.categoryName?"checked":""}}),e._v(" "),o("label",{staticClass:"form-check-label",attrs:{for:"CakeSmash"}},[e._v("Cake Smash")])])]),e._v(" "),e._m(1),e._v(" "),e._m(2)]):e._e(),e._v(" "),e.emailSuccess?o("h4",{staticClass:"display-5 text-center"},[e._v("\n    Grazie per la tua email!\n  ")]):e._e()])}),[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"row mb-4",staticStyle:{gap:"20px 0"}},[o("div",{staticClass:"col-12 col-md-6"},[o("label",{attrs:{for:"user_name"}},[e._v("Nome*")]),e._v(" "),o("input",{staticClass:"form-control",attrs:{type:"text",name:"user_name",id:"user_name",placeholder:"Nome",required:""}})]),e._v(" "),o("div",{staticClass:"col-12 col-md-6"},[o("label",{attrs:{for:"to_lastname"}},[e._v("Cognome*")]),e._v(" "),o("input",{staticClass:"form-control",attrs:{type:"text",name:"user_lastname",id:"user_lastname",placeholder:"Cognome",required:""}})]),e._v(" "),o("div",{staticClass:"col-12 col-md-6"},[o("label",{attrs:{for:"user_email"}},[e._v("Indirizzo Email*")]),e._v(" "),o("input",{staticClass:"form-control",attrs:{type:"email",name:"user_email",id:"user_email","aria-describedby":"emailHelp",placeholder:"Indirizzo Email",required:""}})]),e._v(" "),o("div",{staticClass:"col-12 col-md-6"},[o("label",{attrs:{for:"user_phone"}},[e._v("Telefono*")]),e._v(" "),o("input",{staticClass:"form-control",attrs:{type:"tel",name:"user_phone",id:"user_phone","aria-describedby":"telephone",placeholder:"Telefono",required:""}})])])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"user_message"}},[e._v("Scrivi qui il tuo messaggio*")]),e._v(" "),o("textarea",{staticClass:"form-control",attrs:{name:"user_message",id:"user_message",rows:"5"}})])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"w-100 d-flex align-items-center justify-content-between"},[o("p",{staticClass:"small mb-0"},[e._v('\n        I campi contrassegnati con "*" sono obbligatori.\n      ')]),e._v(" "),o("button",{staticClass:"btn btn-dark d-block ml-auto btn-sm",attrs:{type:"submit"}},[e._v("\n        Invia Email\n      ")])])}],!1,null,null,null);t.default=component.exports},659:function(e,t,o){"use strict";o.r(t);var r={name:"Header",data:function(){return{scrollY:0,showMobileMenu:!1}},props:{isOnIndex:{type:Boolean,required:!1,default:!1}},methods:{handleScroll:function(){this.scrollY=window.scrollY}},beforeMount:function(){window.addEventListener("scroll",this.handleScroll)},beforeDestroy:function(){window.removeEventListener("scroll",this.handleScroll)}},n=o(64),component=Object(n.a)(r,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("div",{staticClass:"header",class:e.isOnIndex&&e.scrollY<=200?"bg-transparent":"bg-white shadow-sm"},[o("NuxtLink",{staticClass:"logo",attrs:{to:"/"}},[o("h4",{staticClass:"mb-0",class:e.isOnIndex&&e.scrollY<=200?"text-white":"text-black"},[e._v("\n        Laura Cesaretti\n        ")])]),e._v(" "),o("div",{staticClass:"d-lg-none",class:[e.isOnIndex&&e.scrollY<=200?"text-light":"text-dark",!0===e.showMobileMenu&&e.scrollY<=200?"text-dark":"text-light"],on:{click:function(t){e.showMobileMenu=!e.showMobileMenu}}},[e._v("\n      "+e._s(e.showMobileMenu?"close":"open")+"\n    ")]),e._v(" "),o("ul",{staticClass:"d-none d-lg-flex main-menu list-unstyled m-0",class:e.isOnIndex&&e.scrollY<=200?"text-light":"text-secondary"},[o("NuxtLink",{attrs:{to:"/chi-sono"}},[o("li",[e._v("Chi sono")])]),e._v(" "),o("b-dropdown",{class:e.isOnIndex&&e.scrollY<=200?"text-light":"text-secondary",attrs:{id:"serviziFotografici",text:"Servizi Fotografici",variant:"link","toggle-class":"text-decoration-none"}},[o("b-dropdown-item",{attrs:{to:"/servizi-fotografici/maternità"}},[e._v("Maternità Fine Art")]),e._v(" "),o("b-dropdown-item",{attrs:{to:"/servizi-fotografici/famiglia"}},[e._v("Maternità Life Style")]),e._v(" "),o("b-dropdown-item",{attrs:{to:"/servizi-fotografici/neonato"}},[e._v("Neonato")]),e._v(" "),o("b-dropdown-item",{attrs:{to:"/servizi-fotografici/bebè"}},[e._v("Bebè")]),e._v(" "),o("b-dropdown-item",{attrs:{to:"/servizi-fotografici/cake-smash"}},[e._v("Cake Smash")])],1),e._v(" "),o("NuxtLink",{attrs:{to:"/galleria"}},[o("li",[e._v("Galleria")])]),e._v(" "),o("NuxtLink",{attrs:{to:"/contatti"}},[o("li",[e._v("Contatti")])]),e._v(" "),o("li",[o("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-center-header",modifiers:{"modal-center-header":!0}}],staticClass:"d-block btn-sm",attrs:{variant:e.isOnIndex&&e.scrollY<=200?"light":"dark"}},[e._v("Richiedi Preventivo")]),e._v(" "),o("b-modal",{attrs:{"hide-footer":"",id:"modal-center-header",size:"lg",centered:"",title:"Richiesta Preventivo"}},[o("Contacts",{attrs:{optionsEnabled:""}})],1)],1)],1)],1),e._v(" "),e.showMobileMenu?o("div",{staticClass:"overlay d-flex align-items-center justify-content-center flex-column",attrs:{id:"myNav"}},[o("ul",{staticClass:"d-flex flex-column align-items-center justify-content-center main-menu list-unstyled m-0",staticStyle:{gap:"30px"}},[o("NuxtLink",{attrs:{to:"/servizi"}},[o("li",[e._v("Servizi Fotografici")])]),e._v(" "),o("NuxtLink",{attrs:{to:"/galleria"}},[o("li",[e._v("Galleria")])]),e._v(" "),o("NuxtLink",{attrs:{to:"/contatti"}},[o("li",[e._v("Contatti")])]),e._v(" "),o("li",[o("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-center-header",modifiers:{"modal-center-header":!0}}],staticClass:"d-block",attrs:{variant:"dark"}},[e._v("Richiedi Preventivo")]),e._v(" "),o("b-modal",{attrs:{"hide-footer":"",id:"modal-center-header",size:"lg",centered:"",title:"Richiesta Preventivo"}},[o("Contacts",{attrs:{optionsEnabled:""}})],1)],1)],1)]):e._e()])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Contacts:o(657).default})}}]);