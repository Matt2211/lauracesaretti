(window.webpackJsonp=window.webpackJsonp||[]).push([[11,2,3,4],{312:function(t,e,r){"use strict";r.r(e);const o={_origin:"https://api.emailjs.com"},n=(t,e,r)=>{if(!t)throw"The user ID is required. Visit https://dashboard.emailjs.com/admin/integration";if(!e)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!r)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};class c{constructor(t){this.status=t.status,this.text=t.responseText}}const l=(t,data,e={})=>new Promise(((r,n)=>{const l=new XMLHttpRequest;l.addEventListener("load",(({target:t})=>{const e=new c(t);200===e.status||"OK"===e.text?r(e):n(e)})),l.addEventListener("error",(({target:t})=>{n(new c(t))})),l.open("POST",o._origin+t,!0),Object.keys(e).forEach((t=>{l.setRequestHeader(t,e[t])})),l.send(data)}));var _=(t,e,form,r)=>{const c=r||o._userID,_=(form=>{let t;if(t="string"==typeof form?document.querySelector(form):form,!t||"FORM"!==t.nodeName)throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return t})(form);n(c,t,e);const f=new FormData(_);return f.append("lib_version","3.4.0"),f.append("service_id",t),f.append("template_id",e),f.append("user_id",c),l("/api/v1.0/email/send-form",f)},f={name:"Contacts",data:function(){return{emailSuccess:!1}},props:{optionsEnabled:{type:Boolean,required:!1,default:!1},categoryName:{type:String,required:!1}},methods:{sendEmail:function(){var t=this;_("service_0smn389","template_nv4dhfd",this.$refs.form,"Wv-_Y_OTYnAimnkVi").then((function(e){t.emailSuccess=!0,console.log("SUCCESS!",e.text)}),(function(t){console.log("FAILED...",t.text)}))}}},m=r(61),component=Object(m.a)(f,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[!1===t.emailSuccess?r("form",{ref:"form",on:{submit:function(e){return e.preventDefault(),t.sendEmail.apply(null,arguments)}}},[t._m(0),t._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:t.optionsEnabled,expression:"optionsEnabled"}],staticClass:"contact-options mb-3"},[r("div",{staticClass:"form-check"},[r("input",{staticClass:"form-check-input",attrs:{name:"fineArt",type:"checkbox",value:"fineArt",id:"fineArt"},domProps:{checked:"Fine Art"===t.categoryName?"checked":""}}),t._v(" "),r("label",{staticClass:"form-check-label",attrs:{for:"fineArt"}},[t._v("\r\n          Maternità Fine Art\r\n        ")])]),t._v(" "),r("div",{staticClass:"form-check"},[r("input",{staticClass:"form-check-input",attrs:{name:"lifeStyle",type:"checkbox",value:"lifeStyle",id:"lifeStyle"},domProps:{checked:"Life Style"===t.categoryName?"checked":""}}),t._v(" "),r("label",{staticClass:"form-check-label",attrs:{for:"lifeStyle"}},[t._v("\r\n          Maternità Life Style\r\n        ")])]),t._v(" "),r("div",{staticClass:"form-check"},[r("input",{staticClass:"form-check-input",attrs:{name:"neonato",type:"checkbox",value:"neonato",id:"neonato"},domProps:{checked:"Neonato"===t.categoryName?"checked":""}}),t._v(" "),r("label",{staticClass:"form-check-label",attrs:{for:"neonato"}},[t._v("Neonato")])]),t._v(" "),r("div",{staticClass:"form-check"},[r("input",{staticClass:"form-check-input",attrs:{name:"bebe",type:"checkbox",value:"bebe",id:"bebe"},domProps:{checked:"Bebè"===t.categoryName?"checked":""}}),t._v(" "),r("label",{staticClass:"form-check-label",attrs:{for:"bebe"}},[t._v("Bebè")])]),t._v(" "),r("div",{staticClass:"form-check"},[r("input",{staticClass:"form-check-input",attrs:{name:"cakeSmash",type:"checkbox",value:"cakeSmash",id:"cakeSmash"},domProps:{checked:"Cake Smash"===t.categoryName?"checked":""}}),t._v(" "),r("label",{staticClass:"form-check-label",attrs:{for:"cakeSmash"}},[t._v("Cake Smash")])])]),t._v(" "),t._m(1),t._v(" "),t._m(2)]):t._e(),t._v(" "),t.emailSuccess?r("h4",{staticClass:"display-5 text-center"},[t._v("Grazie per la tua email!")]):t._e()])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"row mb-4",staticStyle:{gap:"20px 0"}},[r("div",{staticClass:"col-12 col-md-6"},[r("label",{attrs:{for:"user_name"}},[t._v("Nome*")]),t._v(" "),r("input",{staticClass:"form-control",attrs:{type:"text",name:"user_name",id:"user_name",placeholder:"Nome",required:""}})]),t._v(" "),r("div",{staticClass:"col-12 col-md-6"},[r("label",{attrs:{for:"to_lastname"}},[t._v("Cognome*")]),t._v(" "),r("input",{staticClass:"form-control",attrs:{type:"text",name:"user_lastname",id:"user_lastname",placeholder:"Cognome",required:""}})]),t._v(" "),r("div",{staticClass:"col-12 col-md-6"},[r("label",{attrs:{for:"user_email"}},[t._v("Indirizzo Email*")]),t._v(" "),r("input",{staticClass:"form-control",attrs:{type:"email",name:"user_email",id:"user_email","aria-describedby":"emailHelp",placeholder:"Indirizzo Email",required:""}})]),t._v(" "),r("div",{staticClass:"col-12 col-md-6"},[r("label",{attrs:{for:"user_phone"}},[t._v("Telefono*")]),t._v(" "),r("input",{staticClass:"form-control",attrs:{type:"tel",name:"user_phone",id:"user_phone","aria-describedby":"telephone",placeholder:"Telefono",required:""}})])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"user_message"}},[t._v("Scrivi qui il tuo messaggio*")]),t._v(" "),r("textarea",{staticClass:"form-control",attrs:{name:"user_message",id:"user_message",rows:"5"}})])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"w-100 d-flex align-items-center justify-content-between"},[r("p",{staticClass:"small mb-0"},[t._v('I campi contrassegnati con "*" sono obbligatori.')]),t._v(" "),r("button",{staticClass:"btn btn-dark d-block ml-auto",attrs:{type:"submit"}},[t._v("\r\n        Invia Email\r\n      ")])])}],!1,null,null,null);e.default=component.exports},313:function(t,e,r){var content=r(316);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(63).default)("47cadc0b",content,!0,{sourceMap:!1})},314:function(t,e,r){"use strict";r.r(e);var o={name:"Footer"},n=r(61),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("footer",[r("div",{staticClass:"d-flex footer-sections pt-5 mb-5 text-center text-md-left flex-column flex-md-row"},[r("div",{staticClass:"col-12 col-md-6"},[r("h2",{staticClass:"mb-0 text-dark"},[t._v("Laura Cesaretti")]),t._v(" "),r("p",{staticClass:"small footer-text-lighter"},[t._v("Fine Art Portrait Photography, Italia - Roma. Foto professionali...")]),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),r("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-center-footer",modifiers:{"modal-center-footer":!0}}],staticClass:"d-block m-auto ml-md-0",attrs:{variant:"dark"}},[t._v("Richiedi Preventivo")]),t._v(" "),r("b-modal",{attrs:{"hide-footer":"",id:"modal-center-footer",size:"lg",centered:"",title:"Richiesta Preventivo"}},[r("Contacts",{attrs:{optionsEnabled:""}})],1)],1),t._v(" "),r("div",{staticClass:"col-12 col-md-3"},[r("h6",{staticClass:"text-dark"},[t._v("SERVIZI FOTOGRAFICI:")]),t._v(" "),r("ul",{staticClass:"footer-list list-unstyled p-0"},[r("li",{staticClass:"small"},[r("NuxtLink",{attrs:{to:"/servizi-fotografici/maternità-fine-art"}},[t._v("Fine Art")])],1),t._v(" "),r("li",{staticClass:"small"},[r("NuxtLink",{attrs:{to:"/servizi-fotografici/maternità-life-style"}},[t._v("Lifestyle")])],1),t._v(" "),r("li",{staticClass:"small"},[r("NuxtLink",{attrs:{to:"/servizi-fotografici/neonato"}},[t._v("Neonato")])],1),t._v(" "),r("li",{staticClass:"small"},[r("NuxtLink",{attrs:{to:"/servizi-fotografici/bebè"}},[t._v("Bebè")])],1),t._v(" "),r("li",{staticClass:"small"},[r("NuxtLink",{attrs:{to:"/servizi-fotografici/cake-smash"}},[t._v("Cake Smash")])],1)])]),t._v(" "),t._m(2)]),t._v(" "),r("hr",{staticClass:"footer-divider"}),t._v(" "),t._m(3)])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("p",{staticClass:"small text-dark mb-0"},[t._v("Telefoto: "),r("span",{staticClass:"footer-text-lighter"},[t._v("+39 348 059 52 59")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("p",{staticClass:"small text-dark"},[t._v("Email: "),r("span",{staticClass:"footer-text-lighter"},[t._v("lauracesarettiphotography@gmail.com")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"col-12 col-md-3"},[r("h6",{staticClass:"text-dark"},[t._v("SEGUIMI SU:")]),t._v(" "),r("ul",{staticClass:"footer-list list-unstyled text-dark p-0"},[r("li",{staticClass:"small"},[r("a",{attrs:{target:"_blank",href:"https://www.instagram.com/lauracesarettiphotography/"}},[t._v("Instagram")])]),t._v(" "),r("li",{staticClass:"small"},[r("a",{attrs:{target:"_blank",href:"https://www.pinterest.com/lauracesarettiph"}},[t._v("Pinterest")])]),t._v(" "),r("li",{staticClass:"small"},[r("a",{attrs:{target:"_blank",href:"https://facebook.com/people/@/lauracesarettiphotography"}},[t._v("Facebook")])])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"d-flex align-items-center justify-content-center justify-content-md-between flex-wrap"},[r("h6",{staticClass:"text-dark rights text-center text-md-left pb-3 mb-0"},[t._v("\n      2022 Laura Cesaretti Fine Art Portrait Photography, Roma. All Rights\n      Reserved\n    ")]),t._v(" "),r("h6",{staticClass:"text-dark rights text-center text-md-left pb-3 mb-0"},[t._v("\n      Designed and Developed by: "),r("a",{staticClass:"matteofelicidesign",attrs:{target:"_blank",href:"https://www.linkedin.com/in/matteo-felici-7717456a"}},[t._v("Matteo Felici")])])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Contacts:r(312).default,Footer:r(314).default})},315:function(t,e,r){"use strict";r(313)},316:function(t,e,r){var o=r(62)(!1);o.push([t.i,".overlay{background-color:#fff;position:absolute;height:100%;width:100%}",""]),t.exports=o},317:function(t,e,r){"use strict";r.r(e);var o={name:"Header",data:function(){return{scrollY:0,showMobileMenu:!1}},props:{isOnIndex:{type:Boolean,required:!1,default:!1}},methods:{handleScroll:function(){this.scrollY=window.scrollY}},beforeMount:function(){window.addEventListener("scroll",this.handleScroll)},beforeDestroy:function(){window.removeEventListener("scroll",this.handleScroll)}},n=(r(315),r(61)),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"header shadow-sm",class:t.isOnIndex&&t.scrollY<=200?"bg-transparent":"bg-light"},[r("NuxtLink",{attrs:{to:"/"}},[r("h4",{staticClass:"text-decoration-none mb-0"},[t._v("\n        Laura Cesaretti \n        ")])]),t._v(" "),r("div",{staticClass:"d-lg-none",class:[t.isOnIndex&&t.scrollY<=200?"text-light":"text-dark",!0===t.showMobileMenu&&t.scrollY<=200?"text-dark":"text-light"],on:{click:function(e){t.showMobileMenu=!t.showMobileMenu}}},[t._v("\n      "+t._s(t.showMobileMenu?"close":"open")+"\n    ")]),t._v(" "),r("ul",{staticClass:"d-none d-lg-flex main-menu list-unstyled m-0",class:t.isOnIndex&&t.scrollY<=200?"text-light":"text-dark"},[r("NuxtLink",{attrs:{to:"/chi-sono"}},[r("li",{staticClass:"text-uppercase"},[t._v("Chi sono")])]),t._v(" "),r("NuxtLink",{attrs:{to:"/collezioni"}},[r("li",{staticClass:"text-uppercase"},[t._v("Servizi Fotografici")])]),t._v(" "),r("NuxtLink",{attrs:{to:"/galleria"}},[r("li",{staticClass:"text-uppercase"},[t._v("Galleria")])]),t._v(" "),r("NuxtLink",{attrs:{to:"/contatti"}},[r("li",{staticClass:"text-uppercase"},[t._v("Contatti")])]),t._v(" "),r("li",[r("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-center-header",modifiers:{"modal-center-header":!0}}],staticClass:"d-block",attrs:{variant:t.isOnIndex&&t.scrollY<=200?"light":"dark"}},[t._v("Richiedi Preventivo")]),t._v(" "),r("b-modal",{attrs:{"hide-footer":"",id:"modal-center-header",size:"lg",centered:"",title:"Richiesta Preventivo"}},[r("Contacts",{attrs:{optionsEnabled:""}})],1)],1)],1)],1),t._v(" "),t.showMobileMenu?r("div",{staticClass:"overlay d-flex align-items-center justify-content-center flex-column",attrs:{id:"myNav"}},[r("ul",{staticClass:"d-flex flex-column align-items-center justify-content-center main-menu list-unstyled m-0",staticStyle:{gap:"30px"}},[r("NuxtLink",{attrs:{to:"/collezioni"}},[r("li",{staticClass:"text-uppercase"},[t._v("Servizi Fotografici")])]),t._v(" "),r("NuxtLink",{attrs:{to:"/galleria"}},[r("li",{staticClass:"text-uppercase"},[t._v("Galleria")])]),t._v(" "),r("NuxtLink",{attrs:{to:"/contatti"}},[r("li",{staticClass:"text-uppercase"},[t._v("Contatti")])]),t._v(" "),r("li",[r("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-center-header",modifiers:{"modal-center-header":!0}}],staticClass:"d-block",attrs:{variant:"dark"}},[t._v("Richiedi Preventivo")]),t._v(" "),r("b-modal",{attrs:{"hide-footer":"",id:"modal-center-header",size:"lg",centered:"",title:"Richiesta Preventivo"}},[r("Contacts",{attrs:{optionsEnabled:""}})],1)],1)],1)]):t._e()])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Contacts:r(312).default})},324:function(t,e,r){t.exports=r.p+"img/01_laura_cesaretti_servizio_fotografico_maternità_roma_fineart.2ca16da.jpg"},325:function(t,e,r){t.exports=r.p+"img/02_laura_cesaretti_servizio_fotografico_maternità_roma_fineart.3880467.jpg"},326:function(t,e,r){t.exports=r.p+"img/03_laura_cesaretti_servizio_fotografico_maternità_roma_fineart.abc04a2.jpg"},327:function(t,e,r){t.exports=r.p+"img/04_laura_cesaretti_servizio_fotografico_maternità_roma_fineart.90290c4.jpg"},328:function(t,e,r){t.exports=r.p+"img/05_laura_cesaretti_servizio_fotografico_maternità_roma_fineart.4d06fdc.jpg"},329:function(t,e,r){t.exports=r.p+"img/06_laura_cesaretti_servizio_fotografico_maternità_roma_fineart.4c69e8a.jpg"},330:function(t,e,r){t.exports=r.p+"img/07_laura_cesaretti_servizio_fotografico_maternità_roma_fineart.efe5685.jpg"},331:function(t,e,r){t.exports=r.p+"img/08_laura_cesaretti_servizio_fotografico_maternità_roma_fineart.df7cee7.jpg"},332:function(t,e,r){t.exports=r.p+"img/09_laura_cesaretti_servizio_fotografico_maternità_roma_fineart.ead349c.jpg"},333:function(t,e,r){t.exports=r.p+"img/10_laura_cesaretti_servizio_fotografico_maternità_roma_fineart.3d5abc3.jpg"},334:function(t,e,r){t.exports=r.p+"img/11_laura_cesaretti_servizio_fotografico_maternità_roma_fineart.80ac888.jpg"},335:function(t,e,r){t.exports=r.p+"img/12_laura_cesaretti_servizio_fotografico_maternità_roma_fineart.6166882.jpg"},336:function(t,e,r){t.exports=r.p+"img/13_laura_cesaretti_servizio_fotografico_maternità_roma_fineart.30c5515.jpg"},337:function(t,e,r){t.exports=r.p+"img/14_laura_cesaretti_servizio_fotografico_maternità_roma_fineart.1fd3eca.jpg"},338:function(t,e,r){t.exports=r.p+"img/15_laura_cesaretti_servizio_fotografico_maternità_roma_fineart.7ea7481.jpg"},339:function(t,e,r){t.exports=r.p+"img/16_laura_cesaretti_servizio_fotografico_maternità_roma_fineart.c1d3df0.jpg"},340:function(t,e,r){t.exports=r.p+"img/17_laura_cesaretti_servizio_fotografico_maternità_roma_fineart.f065b93.jpg"},341:function(t,e,r){t.exports=r.p+"img/18_laura_cesaretti_servizio_fotografico_maternità_roma_fineart.3958478.jpg"},342:function(t,e,r){t.exports=r.p+"img/19_laura_cesaretti_servizio_fotografico_maternità_roma_fineart.2ed8fad.jpg"},343:function(t,e,r){t.exports=r.p+"img/20_laura_cesaretti_servizio_fotografico_maternità_roma_fineart.970214a.jpg"},344:function(t,e,r){t.exports=r.p+"img/21_laura_cesaretti_servizio_fotografico_maternità_roma_fineart.6067953.jpg"},345:function(t,e,r){t.exports=r.p+"img/22_laura_cesaretti_servizio_fotografico_maternità_roma_fineart.466d34c.jpg"},346:function(t,e,r){t.exports=r.p+"img/23_laura_cesaretti_servizio_fotografico_maternità_roma_fineart.3281d29.jpg"},347:function(t,e,r){t.exports=r.p+"img/24_laura_cesaretti_servizio_fotografico_maternità_roma_fineart.15e95f0.jpg"},348:function(t,e,r){t.exports=r.p+"img/25_laura_cesaretti_servizio_fotografico_maternità_roma_fineart.ed3f570.jpg"},349:function(t,e,r){t.exports=r.p+"img/26_laura_cesaretti_servizio_fotografico_maternità_roma_fineart.c048a42.jpg"},350:function(t,e,r){t.exports=r.p+"img/27_laura_cesaretti_servizio_fotografico_maternità_roma_fineart.088544f.jpg"},351:function(t,e,r){t.exports=r.p+"img/28_laura_cesaretti_servizio_fotografico_maternità_roma_fineart.c71e5e4.jpg"},352:function(t,e,r){t.exports=r.p+"img/29_laura_cesaretti_servizio_fotografico_maternità_roma_fineart.116a215.jpg"},353:function(t,e,r){t.exports=r.p+"img/30_laura_cesaretti_servizio_fotografico_maternità_roma_fineart.4ca490c.jpg"},354:function(t,e,r){t.exports=r.p+"img/31_laura_cesaretti_servizio_fotografico_maternità_roma_fineart.f40904a.jpg"},355:function(t,e,r){t.exports=r.p+"img/32_laura_cesaretti_servizio_fotografico_maternità_roma_fineart.87b67c6.jpg"},356:function(t,e,r){t.exports=r.p+"img/33_laura_cesaretti_servizio_fotografico_maternità_roma_fineart.68f84e0.jpg"},357:function(t,e,r){t.exports=r.p+"img/34_laura_cesaretti_servizio_fotografico_maternità_roma_fineart.5a94f1a.jpg"},358:function(t,e,r){t.exports=r.p+"img/35_laura_cesaretti_servizio_fotografico_maternità_roma_fineart.d63e553.jpg"},359:function(t,e,r){t.exports=r.p+"img/36_laura_cesaretti_servizio_fotografico_maternità_roma_fineart.2189d2a.jpg"},360:function(t,e,r){t.exports=r.p+"img/37_laura_cesaretti_servizio_fotografico_maternità_roma_fineart.bd7c82f.jpg"},361:function(t,e,r){t.exports=r.p+"img/38_laura_cesaretti_servizio_fotografico_maternità_roma_fineart.6ce0e83.jpg"},362:function(t,e,r){t.exports=r.p+"img/39_laura_cesaretti_servizio_fotografico_maternità_roma_fineart.e9572e6.jpg"},363:function(t,e,r){t.exports=r.p+"img/40_laura_cesaretti_servizio_fotografico_maternità_roma_fineart.71e2000.jpg"},364:function(t,e,r){t.exports=r.p+"img/41_laura_cesaretti_servizio_fotografico_maternità_roma_fineart.710067e.jpg"},365:function(t,e,r){t.exports=r.p+"img/42_laura_cesaretti_servizio_fotografico_maternità_roma_fineart.373411c.jpg"},366:function(t,e,r){t.exports=r.p+"img/43_laura_cesaretti_servizio_fotografico_maternità_roma_fineart.098e3c6.jpg"},367:function(t,e,r){t.exports=r.p+"img/44_laura_cesaretti_servizio_fotografico_maternità_roma_fineart.e036cca.jpg"},368:function(t,e,r){t.exports=r.p+"img/45_laura_cesaretti_servizio_fotografico_maternità_roma_fineart.a958762.jpg"},369:function(t,e,r){t.exports=r.p+"img/46_laura_cesaretti_servizio_fotografico_maternità_roma_fineart.5daefa2.jpg"},370:function(t,e,r){t.exports=r.p+"img/47_laura_cesaretti_servizio_fotografico_maternità_roma_fineart.8f79359.jpg"},371:function(t,e,r){t.exports=r.p+"img/48_laura_cesaretti_servizio_fotografico_maternità_roma_fineart.8c59f3f.jpg"},372:function(t,e,r){t.exports=r.p+"img/49_laura_cesaretti_servizio_fotografico_maternità_roma_fineart.cc84f36.jpg"},373:function(t,e,r){t.exports=r.p+"img/50_laura_cesaretti_servizio_fotografico_maternità_roma_fineart.df0750f.jpg"},374:function(t,e,r){t.exports=r.p+"img/51_laura_cesaretti_servizio_fotografico_maternità_roma_fineart.a7928fd.jpg"},375:function(t,e,r){t.exports=r.p+"img/52_laura_cesaretti_servizio_fotografico_maternità_roma_fineart.1e8990a.jpg"},376:function(t,e,r){t.exports=r.p+"img/53_laura_cesaretti_servizio_fotografico_maternità_roma_fineart.7aba946.jpg"},377:function(t,e,r){t.exports=r.p+"img/54_laura_cesaretti_servizio_fotografico_maternità_roma_fineart.f5b2d72.jpg"},378:function(t,e,r){t.exports=r.p+"img/55_laura_cesaretti_servizio_fotografico_maternità_roma_fineart.d0ca578.jpg"},379:function(t,e,r){t.exports=r.p+"img/56_laura_cesaretti_servizio_fotografico_maternità_roma_fineart.674130c.jpg"},380:function(t,e,r){t.exports=r.p+"img/57_laura_cesaretti_servizio_fotografico_maternità_roma_fineart.9d5a862.jpg"},381:function(t,e,r){t.exports=r.p+"img/58_laura_cesaretti_servizio_fotografico_maternità_roma_fineart.8c06f6c.jpg"},382:function(t,e,r){t.exports=r.p+"img/59_laura_cesaretti_servizio_fotografico_maternità_roma_fineart.922c0d1.jpg"},383:function(t,e,r){t.exports=r.p+"img/60_laura_cesaretti_servizio_fotografico_maternità_roma_fineart.ccc149e.jpg"},384:function(t,e,r){t.exports=r.p+"img/61_laura_cesaretti_servizio_fotografico_maternità_roma_fineart.26ad9cd.jpg"},385:function(t,e,r){t.exports=r.p+"img/62_laura_cesaretti_servizio_fotografico_maternità_roma_fineart.08243f4.jpg"},386:function(t,e,r){t.exports=r.p+"img/63_laura_cesaretti_servizio_fotografico_maternità_roma_fineart.d3dad39.jpg"},387:function(t,e,r){t.exports=r.p+"img/64_laura_cesaretti_servizio_fotografico_maternità_roma_fineart.d049ea1.jpg"},388:function(t,e,r){t.exports=r.p+"img/65_laura_cesaretti_servizio_fotografico_maternità_roma_fineart.41667d1.jpg"},389:function(t,e,r){t.exports=r.p+"img/66_laura_cesaretti_servizio_fotografico_maternità_roma_fineart.165432a.jpg"},390:function(t,e,r){t.exports=r.p+"img/67_laura_cesaretti_servizio_fotografico_maternità_roma_fineart.8caf564.jpg"},391:function(t,e,r){t.exports=r.p+"img/68_laura_cesaretti_servizio_fotografico_maternità_roma_fineart.631254f.jpg"},392:function(t,e,r){t.exports=r.p+"img/69_laura_cesaretti_servizio_fotografico_maternità_roma_fineart.f7fd926.jpg"},393:function(t,e,r){t.exports=r.p+"img/70_laura_cesaretti_servizio_fotografico_maternità_roma_fineart.fed4036.jpg"},394:function(t,e,r){t.exports=r.p+"img/71_laura_cesaretti_servizio_fotografico_maternità_roma_fineart.a82f864.jpg"},395:function(t,e,r){t.exports=r.p+"img/72_laura_cesaretti_servizio_fotografico_maternità_roma_fineart.45a26a1.jpg"},417:function(t,e,r){"use strict";r.r(e);var o={name:"galleria",data:function(){return{images:[{title:"Maternità Fine Art",url:"".concat(r(324)),category:"MaternitaFineArt"},{title:"Maternità Fine Art",url:"".concat(r(325)),category:"MaternitaFineArt"},{title:"Maternità Fine Art",url:"".concat(r(326)),category:"MaternitaFineArt"},{title:"Maternità Fine Art",url:"".concat(r(327)),category:"MaternitaFineArt"},{title:"Maternità Fine Art",url:"".concat(r(328)),category:"MaternitaFineArt"},{title:"Maternità Fine Art",url:"".concat(r(329)),category:"MaternitaFineArt"},{title:"Maternità Fine Art",url:"".concat(r(330)),category:"MaternitaFineArt"},{title:"Maternità Fine Art",url:"".concat(r(331)),category:"MaternitaFineArt"},{title:"Maternità Fine Art",url:"".concat(r(332)),category:"MaternitaFineArt"},{title:"Maternità Fine Art",url:"".concat(r(333)),category:"MaternitaFineArt"},{title:"Maternità Fine Art",url:"".concat(r(334)),category:"MaternitaFineArt"},{title:"Maternità Fine Art",url:"".concat(r(335)),category:"MaternitaFineArt"},{title:"Maternità Fine Art",url:"".concat(r(336)),category:"MaternitaFineArt"},{title:"Maternità Fine Art",url:"".concat(r(337)),category:"MaternitaFineArt"},{title:"Maternità Fine Art",url:"".concat(r(338)),category:"MaternitaFineArt"},{title:"Maternità Fine Art",url:"".concat(r(339)),category:"MaternitaFineArt"},{title:"Maternità Fine Art",url:"".concat(r(340)),category:"MaternitaFineArt"},{title:"Maternità Fine Art",url:"".concat(r(341)),category:"MaternitaFineArt"},{title:"Maternità Fine Art",url:"".concat(r(342)),category:"MaternitaFineArt"},{title:"Maternità Fine Art",url:"".concat(r(343)),category:"MaternitaFineArt"},{title:"Maternità Fine Art",url:"".concat(r(344)),category:"MaternitaFineArt"},{title:"Maternità Fine Art",url:"".concat(r(345)),category:"MaternitaFineArt"},{title:"Maternità Fine Art",url:"".concat(r(346)),category:"MaternitaFineArt"},{title:"Maternità Fine Art",url:"".concat(r(347)),category:"MaternitaFineArt"},{title:"Maternità Fine Art",url:"".concat(r(348)),category:"MaternitaFineArt"},{title:"Maternità Fine Art",url:"".concat(r(349)),category:"MaternitaFineArt"},{title:"Maternità Fine Art",url:"".concat(r(350)),category:"MaternitaFineArt"},{title:"Maternità Fine Art",url:"".concat(r(351)),category:"MaternitaFineArt"},{title:"Maternità Fine Art",url:"".concat(r(352)),category:"MaternitaFineArt"},{title:"Maternità Fine Art",url:"".concat(r(353)),category:"MaternitaFineArt"},{title:"Maternità Fine Art",url:"".concat(r(354)),category:"MaternitaFineArt"},{title:"Maternità Fine Art",url:"".concat(r(355)),category:"MaternitaFineArt"},{title:"Maternità Fine Art",url:"".concat(r(356)),category:"MaternitaFineArt"},{title:"Maternità Fine Art",url:"".concat(r(357)),category:"MaternitaFineArt"},{title:"Maternità Fine Art",url:"".concat(r(358)),category:"MaternitaFineArt"},{title:"Maternità Fine Art",url:"".concat(r(359)),category:"MaternitaFineArt"},{title:"Maternità Fine Art",url:"".concat(r(360)),category:"MaternitaFineArt"},{title:"Maternità Fine Art",url:"".concat(r(361)),category:"MaternitaFineArt"},{title:"Maternità Fine Art",url:"".concat(r(362)),category:"MaternitaFineArt"},{title:"Maternità Fine Art",url:"".concat(r(363)),category:"MaternitaFineArt"},{title:"Maternità Fine Art",url:"".concat(r(364)),category:"MaternitaFineArt"},{title:"Maternità Fine Art",url:"".concat(r(365)),category:"MaternitaFineArt"},{title:"Maternità Fine Art",url:"".concat(r(366)),category:"MaternitaFineArt"},{title:"Maternità Fine Art",url:"".concat(r(367)),category:"MaternitaFineArt"},{title:"Maternità Fine Art",url:"".concat(r(368)),category:"MaternitaFineArt"},{title:"Maternità Fine Art",url:"".concat(r(369)),category:"MaternitaFineArt"},{title:"Maternità Fine Art",url:"".concat(r(370)),category:"MaternitaFineArt"},{title:"Maternità Fine Art",url:"".concat(r(371)),category:"MaternitaFineArt"},{title:"Maternità Fine Art",url:"".concat(r(372)),category:"MaternitaFineArt"},{title:"Maternità Fine Art",url:"".concat(r(373)),category:"MaternitaFineArt"},{title:"Maternità Fine Art",url:"".concat(r(374)),category:"MaternitaFineArt"},{title:"Maternità Fine Art",url:"".concat(r(375)),category:"MaternitaFineArt"},{title:"Maternità Fine Art",url:"".concat(r(376)),category:"MaternitaFineArt"},{title:"Maternità Fine Art",url:"".concat(r(377)),category:"MaternitaFineArt"},{title:"Maternità Fine Art",url:"".concat(r(378)),category:"MaternitaFineArt"},{title:"Maternità Fine Art",url:"".concat(r(379)),category:"MaternitaFineArt"},{title:"Maternità Fine Art",url:"".concat(r(380)),category:"MaternitaFineArt"},{title:"Maternità Fine Art",url:"".concat(r(381)),category:"MaternitaFineArt"},{title:"Maternità Fine Art",url:"".concat(r(382)),category:"MaternitaFineArt"},{title:"Maternità Fine Art",url:"".concat(r(383)),category:"MaternitaFineArt"},{title:"Maternità Fine Art",url:"".concat(r(384)),category:"MaternitaFineArt"},{title:"Maternità Fine Art",url:"".concat(r(385)),category:"MaternitaFineArt"},{title:"Maternità Fine Art",url:"".concat(r(386)),category:"MaternitaFineArt"},{title:"Maternità Fine Art",url:"".concat(r(387)),category:"MaternitaFineArt"},{title:"Maternità Fine Art",url:"".concat(r(388)),category:"MaternitaFineArt"},{title:"Maternità Fine Art",url:"".concat(r(389)),category:"MaternitaFineArt"},{title:"Maternità Fine Art",url:"".concat(r(390)),category:"MaternitaFineArt"},{title:"Maternità Fine Art",url:"".concat(r(391)),category:"MaternitaFineArt"},{title:"Maternità Fine Art",url:"".concat(r(392)),category:"MaternitaFineArt"},{title:"Maternità Fine Art",url:"".concat(r(393)),category:"MaternitaFineArt"},{title:"Maternità Fine Art",url:"".concat(r(394)),category:"MaternitaFineArt"},{title:"Maternità Fine Art",url:"".concat(r(395)),category:"MaternitaFineArt"}],index:null}}},n=r(61),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("Header"),t._v(" "),t._m(0),t._v(" "),r("div",{staticClass:"container"},[r("div",{staticClass:"gallery"},t._l(t.images,(function(image,e){return r("div",{key:e,staticClass:"gallery-img",on:{click:function(r){t.index=e}}},[r("img",{staticClass:"img-fluid rounded",attrs:{src:image.url,alt:image.title}})])})),0)]),t._v(" "),r("no-ssr",[r("LightGallery",{attrs:{images:t.images,index:t.index,"disable-scroll":!0},on:{close:function(e){t.index=null}}})],1),t._v(" "),r("Footer")],1)}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"banner-hero-inner"},[r("div",{staticClass:"text-center"},[r("h1",{staticClass:"display-1"},[t._v("Galleria")]),t._v(" "),r("h2",[t._v("Dobbiamo scrivere qualcosa qui d'impatto")])])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Header:r(317).default,Footer:r(314).default})}}]);