(window.webpackJsonp=window.webpackJsonp||[]).push([[14,2,3,4,6,7],{312:function(t,e,r){"use strict";r.r(e);const o={_origin:"https://api.emailjs.com"},l=(t,e,r)=>{if(!t)throw"The user ID is required. Visit https://dashboard.emailjs.com/admin/integration";if(!e)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!r)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};class n{constructor(t){this.status=t.status,this.text=t.responseText}}const c=(t,data,e={})=>new Promise(((r,l)=>{const c=new XMLHttpRequest;c.addEventListener("load",(({target:t})=>{const e=new n(t);200===e.status||"OK"===e.text?r(e):l(e)})),c.addEventListener("error",(({target:t})=>{l(new n(t))})),c.open("POST",o._origin+t,!0),Object.keys(e).forEach((t=>{c.setRequestHeader(t,e[t])})),c.send(data)}));var d=(t,e,form,r)=>{const n=r||o._userID,d=(form=>{let t;if(t="string"==typeof form?document.querySelector(form):form,!t||"FORM"!==t.nodeName)throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return t})(form);l(n,t,e);const m=new FormData(d);return m.append("lib_version","3.4.0"),m.append("service_id",t),m.append("template_id",e),m.append("user_id",n),c("/api/v1.0/email/send-form",m)},m={name:"Contacts",data:function(){return{emailSuccess:!1}},props:{optionsEnabled:{type:Boolean,required:!1,default:!1},categoryName:{type:String,required:!1}},methods:{sendEmail:function(){var t=this;d("service_0smn389","template_nv4dhfd",this.$refs.form,"Wv-_Y_OTYnAimnkVi").then((function(e){t.emailSuccess=!0,console.log("SUCCESS!",e.text)}),(function(t){console.log("FAILED...",t.text)}))}}},v=r(61),component=Object(v.a)(m,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[!1===t.emailSuccess?r("form",{ref:"form",on:{submit:function(e){return e.preventDefault(),t.sendEmail.apply(null,arguments)}}},[t._m(0),t._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:t.optionsEnabled,expression:"optionsEnabled"}],staticClass:"contact-options mb-3"},[r("div",{staticClass:"form-check"},[r("input",{staticClass:"form-check-input",attrs:{name:"fineArt",type:"checkbox",value:"fineArt",id:"fineArt"},domProps:{checked:"Fine Art"===t.categoryName?"checked":""}}),t._v(" "),r("label",{staticClass:"form-check-label",attrs:{for:"fineArt"}},[t._v("\r\n          Maternità Fine Art\r\n        ")])]),t._v(" "),r("div",{staticClass:"form-check"},[r("input",{staticClass:"form-check-input",attrs:{name:"lifeStyle",type:"checkbox",value:"lifeStyle",id:"lifeStyle"},domProps:{checked:"Life Style"===t.categoryName?"checked":""}}),t._v(" "),r("label",{staticClass:"form-check-label",attrs:{for:"lifeStyle"}},[t._v("\r\n          Maternità Life Style\r\n        ")])]),t._v(" "),r("div",{staticClass:"form-check"},[r("input",{staticClass:"form-check-input",attrs:{name:"neonato",type:"checkbox",value:"neonato",id:"neonato"},domProps:{checked:"Neonato"===t.categoryName?"checked":""}}),t._v(" "),r("label",{staticClass:"form-check-label",attrs:{for:"neonato"}},[t._v("Neonato")])]),t._v(" "),r("div",{staticClass:"form-check"},[r("input",{staticClass:"form-check-input",attrs:{name:"bebe",type:"checkbox",value:"bebe",id:"bebe"},domProps:{checked:"Bebè"===t.categoryName?"checked":""}}),t._v(" "),r("label",{staticClass:"form-check-label",attrs:{for:"bebe"}},[t._v("Bebè")])]),t._v(" "),r("div",{staticClass:"form-check"},[r("input",{staticClass:"form-check-input",attrs:{name:"cakeSmash",type:"checkbox",value:"cakeSmash",id:"cakeSmash"},domProps:{checked:"Cake Smash"===t.categoryName?"checked":""}}),t._v(" "),r("label",{staticClass:"form-check-label",attrs:{for:"cakeSmash"}},[t._v("Cake Smash")])])]),t._v(" "),t._m(1),t._v(" "),t._m(2)]):t._e(),t._v(" "),t.emailSuccess?r("h4",{staticClass:"display-5 text-center"},[t._v("Grazie per la tua email!")]):t._e()])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"row mb-4",staticStyle:{gap:"20px 0"}},[r("div",{staticClass:"col-12 col-md-6"},[r("label",{attrs:{for:"user_name"}},[t._v("Nome*")]),t._v(" "),r("input",{staticClass:"form-control",attrs:{type:"text",name:"user_name",id:"user_name",placeholder:"Nome",required:""}})]),t._v(" "),r("div",{staticClass:"col-12 col-md-6"},[r("label",{attrs:{for:"to_lastname"}},[t._v("Cognome*")]),t._v(" "),r("input",{staticClass:"form-control",attrs:{type:"text",name:"user_lastname",id:"user_lastname",placeholder:"Cognome",required:""}})]),t._v(" "),r("div",{staticClass:"col-12 col-md-6"},[r("label",{attrs:{for:"user_email"}},[t._v("Indirizzo Email*")]),t._v(" "),r("input",{staticClass:"form-control",attrs:{type:"email",name:"user_email",id:"user_email","aria-describedby":"emailHelp",placeholder:"Indirizzo Email",required:""}})]),t._v(" "),r("div",{staticClass:"col-12 col-md-6"},[r("label",{attrs:{for:"user_phone"}},[t._v("Telefono*")]),t._v(" "),r("input",{staticClass:"form-control",attrs:{type:"tel",name:"user_phone",id:"user_phone","aria-describedby":"telephone",placeholder:"Telefono",required:""}})])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"user_message"}},[t._v("Scrivi qui il tuo messaggio*")]),t._v(" "),r("textarea",{staticClass:"form-control",attrs:{name:"user_message",id:"user_message",rows:"5"}})])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"w-100 d-flex align-items-center justify-content-between"},[r("p",{staticClass:"small mb-0"},[t._v('I campi contrassegnati con "*" sono obbligatori.')]),t._v(" "),r("button",{staticClass:"btn btn-dark d-block ml-auto",attrs:{type:"submit"}},[t._v("\r\n        Invia Email\r\n      ")])])}],!1,null,null,null);e.default=component.exports},313:function(t,e,r){var content=r(316);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(63).default)("47cadc0b",content,!0,{sourceMap:!1})},314:function(t,e,r){"use strict";r.r(e);var o={name:"Footer"},l=r(61),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("footer",[r("div",{staticClass:"d-flex footer-sections pt-5 mb-5 text-center text-md-left flex-column flex-md-row"},[r("div",{staticClass:"col-12 col-md-6"},[r("h2",{staticClass:"mb-0 text-dark"},[t._v("Laura Cesaretti")]),t._v(" "),r("p",{staticClass:"small footer-text-lighter"},[t._v("Fine Art Portrait Photography, Italia - Roma. Foto professionali...")]),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),r("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-center-footer",modifiers:{"modal-center-footer":!0}}],staticClass:"d-block m-auto ml-md-0",attrs:{variant:"dark"}},[t._v("Richiedi Preventivo")]),t._v(" "),r("b-modal",{attrs:{"hide-footer":"",id:"modal-center-footer",size:"lg",centered:"",title:"Richiesta Preventivo"}},[r("Contacts",{attrs:{optionsEnabled:""}})],1)],1),t._v(" "),r("div",{staticClass:"col-12 col-md-3"},[r("h6",{staticClass:"text-dark"},[t._v("SERVIZI FOTOGRAFICI:")]),t._v(" "),r("ul",{staticClass:"footer-list list-unstyled p-0"},[r("li",{staticClass:"small"},[r("NuxtLink",{attrs:{to:"/servizi-fotografici/maternità-fine-art"}},[t._v("Maternità Fine Art")])],1),t._v(" "),r("li",{staticClass:"small"},[r("NuxtLink",{attrs:{to:"/servizi-fotografici/maternità-life-style"}},[t._v("Maternità Lifestyle")])],1),t._v(" "),r("li",{staticClass:"small"},[r("NuxtLink",{attrs:{to:"/servizi-fotografici/neonato"}},[t._v("Neonato")])],1),t._v(" "),r("li",{staticClass:"small"},[r("NuxtLink",{attrs:{to:"/servizi-fotografici/bebè"}},[t._v("Bebè")])],1),t._v(" "),r("li",{staticClass:"small"},[r("NuxtLink",{attrs:{to:"/servizi-fotografici/cake-smash"}},[t._v("Cake Smash")])],1)])]),t._v(" "),t._m(2)]),t._v(" "),r("hr",{staticClass:"footer-divider"}),t._v(" "),t._m(3)])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("p",{staticClass:"small text-dark mb-0"},[t._v("Telefoto: "),r("span",{staticClass:"footer-text-lighter"},[t._v("+39 348 059 52 59")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("p",{staticClass:"small text-dark"},[t._v("Email: "),r("span",{staticClass:"footer-text-lighter"},[t._v("lauracesarettiphotography@gmail.com")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"col-12 col-md-3"},[r("h6",{staticClass:"text-dark"},[t._v("SEGUIMI SU:")]),t._v(" "),r("ul",{staticClass:"footer-list list-unstyled text-dark p-0"},[r("li",{staticClass:"small"},[r("a",{attrs:{target:"_blank",href:"https://www.instagram.com/lauracesarettiphotography/"}},[t._v("Instagram")])]),t._v(" "),r("li",{staticClass:"small"},[r("a",{attrs:{target:"_blank",href:"https://www.pinterest.com/lauracesarettiph"}},[t._v("Pinterest")])]),t._v(" "),r("li",{staticClass:"small"},[r("a",{attrs:{target:"_blank",href:"https://facebook.com/people/@/lauracesarettiphotography"}},[t._v("Facebook")])])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"d-flex align-items-center justify-content-center justify-content-md-between flex-wrap"},[r("h6",{staticClass:"text-dark rights text-center text-md-left pb-3 mb-0"},[t._v("\n      2022 Laura Cesaretti Fine Art Portrait Photography, Roma. All Rights\n      Reserved\n    ")]),t._v(" "),r("h6",{staticClass:"text-dark rights text-center text-md-left pb-3 mb-0"},[t._v("\n      Designed and Developed by: "),r("a",{staticClass:"matteofelicidesign",attrs:{target:"_blank",href:"https://www.linkedin.com/in/matteo-felici-7717456a"}},[t._v("Matteo Felici")])])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Contacts:r(312).default,Footer:r(314).default})},315:function(t,e,r){"use strict";r(313)},316:function(t,e,r){var o=r(62)(!1);o.push([t.i,".overlay{background-color:#fff;position:absolute;height:100%;width:100%}",""]),t.exports=o},317:function(t,e,r){"use strict";r.r(e);var o={name:"Header",data:function(){return{scrollY:0,showMobileMenu:!1}},props:{isOnIndex:{type:Boolean,required:!1,default:!1}},methods:{handleScroll:function(){this.scrollY=window.scrollY}},beforeMount:function(){window.addEventListener("scroll",this.handleScroll)},beforeDestroy:function(){window.removeEventListener("scroll",this.handleScroll)}},l=(r(315),r(61)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"header shadow-sm",class:t.isOnIndex&&t.scrollY<=200?"bg-transparent":"bg-light"},[r("NuxtLink",{attrs:{to:"/"}},[r("h4",{staticClass:"text-decoration-none mb-0"},[t._v("\n        Laura Cesaretti \n        ")])]),t._v(" "),r("div",{staticClass:"d-lg-none",class:[t.isOnIndex&&t.scrollY<=200?"text-light":"text-dark",!0===t.showMobileMenu&&t.scrollY<=200?"text-dark":"text-light"],on:{click:function(e){t.showMobileMenu=!t.showMobileMenu}}},[t._v("\n      "+t._s(t.showMobileMenu?"close":"open")+"\n    ")]),t._v(" "),r("ul",{staticClass:"d-none d-lg-flex main-menu list-unstyled m-0",class:t.isOnIndex&&t.scrollY<=200?"text-light":"text-dark"},[r("NuxtLink",{attrs:{to:"/chi-sono"}},[r("li",{staticClass:"text-uppercase"},[t._v("Chi sono")])]),t._v(" "),r("NuxtLink",{attrs:{to:"/collezioni"}},[r("li",{staticClass:"text-uppercase"},[t._v("Servizi Fotografici")])]),t._v(" "),r("NuxtLink",{attrs:{to:"/galleria"}},[r("li",{staticClass:"text-uppercase"},[t._v("Galleria")])]),t._v(" "),r("NuxtLink",{attrs:{to:"/contatti"}},[r("li",{staticClass:"text-uppercase"},[t._v("Contatti")])]),t._v(" "),r("li",[r("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-center-header",modifiers:{"modal-center-header":!0}}],staticClass:"d-block",attrs:{variant:t.isOnIndex&&t.scrollY<=200?"light":"dark"}},[t._v("Richiedi Preventivo")]),t._v(" "),r("b-modal",{attrs:{"hide-footer":"",id:"modal-center-header",size:"lg",centered:"",title:"Richiesta Preventivo"}},[r("Contacts",{attrs:{optionsEnabled:""}})],1)],1)],1)],1),t._v(" "),t.showMobileMenu?r("div",{staticClass:"overlay d-flex align-items-center justify-content-center flex-column",attrs:{id:"myNav"}},[r("ul",{staticClass:"d-flex flex-column align-items-center justify-content-center main-menu list-unstyled m-0",staticStyle:{gap:"30px"}},[r("NuxtLink",{attrs:{to:"/collezioni"}},[r("li",{staticClass:"text-uppercase"},[t._v("Servizi Fotografici")])]),t._v(" "),r("NuxtLink",{attrs:{to:"/galleria"}},[r("li",{staticClass:"text-uppercase"},[t._v("Galleria")])]),t._v(" "),r("NuxtLink",{attrs:{to:"/contatti"}},[r("li",{staticClass:"text-uppercase"},[t._v("Contatti")])]),t._v(" "),r("li",[r("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-center-header",modifiers:{"modal-center-header":!0}}],staticClass:"d-block",attrs:{variant:"dark"}},[t._v("Richiedi Preventivo")]),t._v(" "),r("b-modal",{attrs:{"hide-footer":"",id:"modal-center-header",size:"lg",centered:"",title:"Richiesta Preventivo"}},[r("Contacts",{attrs:{optionsEnabled:""}})],1)],1)],1)]):t._e()])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Contacts:r(312).default})},318:function(t,e,r){"use strict";r.r(e);var o={name:"ModalContact",props:{categoryName:{type:String,required:!0}}},l=r(61),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container mt-5"},[r("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-center",modifiers:{"modal-center":!0}}],staticClass:"d-block m-auto btn-lg",attrs:{variant:"dark"}},[t._v("Richiedi Preventivo")]),t._v(" "),r("b-modal",{attrs:{"hide-footer":"",id:"modal-center",size:"lg",centered:"",title:t.categoryName+" - Richiesta Preventivo"}},[r("Contacts",{attrs:{categoryName:t.categoryName}})],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Contacts:r(312).default})},319:function(t,e,r){"use strict";r.r(e);var o={name:"Related",props:{categoryName:{type:String,required:!0}}},l=r(61),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"related-products-container",attrs:{categoryName:t.categoryName}},[o("div",{staticClass:"container pt-5"},[t._m(0),t._v(" "),o("div",{staticClass:"row related-products"},[o("div",{staticClass:"col-6 col-md-3",class:{"d-none":"fineArt"===t.categoryName}},[o("NuxtLink",{attrs:{to:"/servizi-fotografici/maternità-fine-art"}},[o("img",{staticClass:"img-fluid rounded ",attrs:{src:r(214),alt:""}}),t._v(" "),o("h5",{staticClass:"text-center mt-2"},[t._v("Fine Art")])])],1),t._v(" "),o("div",{staticClass:"col-6 col-md-3",class:{"d-none":"lifeStyle"===t.categoryName}},[o("NuxtLink",{attrs:{to:"/servizi-fotografici/maternità-life-style"}},[o("img",{staticClass:"img-fluid rounded",attrs:{src:r(215),alt:""}}),t._v(" "),o("h5",{staticClass:"text-center mt-2"},[t._v("Life Style")])])],1),t._v(" "),o("div",{staticClass:"col-6 col-md-3",class:{"d-none":"neonato"===t.categoryName}},[o("NuxtLink",{attrs:{to:"/servizi-fotografici/neonato"}},[o("img",{staticClass:"img-fluid rounded",attrs:{src:r(216),alt:""}}),t._v(" "),o("h5",{staticClass:"text-center mt-2"},[t._v("Neonato")])])],1),t._v(" "),o("div",{staticClass:"col-6 col-md-3",class:{"d-none":"bebè"===t.categoryName}},[o("NuxtLink",{attrs:{to:"/servizi-fotografici/bebè"}},[o("img",{staticClass:"img-fluid rounded",attrs:{src:r(217),alt:""}}),t._v(" "),o("h5",{staticClass:"text-center mt-2"},[t._v("Bebè")])])],1),t._v(" "),o("div",{staticClass:"col-6 col-md-3",class:{"d-none":"cakeSmash"===t.categoryName}},[o("NuxtLink",{attrs:{to:"/servizi-fotografici/cake-smash"}},[o("img",{staticClass:"img-fluid rounded",attrs:{src:r(218),alt:""}}),t._v(" "),o("h5",{staticClass:"text-center mt-2"},[t._v("Cake Smash")])])],1)])])])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"row text-center flex-column mb-4"},[r("h4",[t._v("Non e il servizio fotografico "),r("br",{staticClass:"d-md-none"}),t._v(" adatto a te?")]),t._v(" "),r("p",{staticClass:"lead"},[t._v("Prova a controllare anche:")])])}],!1,null,null,null);e.default=component.exports},484:function(t,e,r){t.exports=r.p+"img/01_cake_smash_momento_migliore_laura_cesaretti_roma.3c412be.jpg"},485:function(t,e,r){t.exports=r.p+"img/02_cake_smash_personalizzato_laura_cesaretti_roma.4135fae.jpg"},486:function(t,e,r){t.exports=r.p+"img/03_cake_smash_sessione_laura_cesaretti_roma.af99784.jpg"},487:function(t,e,r){t.exports=r.p+"img/04_cake_smash_prodotti_laura_cesaretti_roma.8495b66.jpg"},506:function(t,e,r){"use strict";r.r(e);var o=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"banner-hero-inner",attrs:{id:"banner-cakesmash"}},[r("div",{staticClass:"text-center"},[r("h1",{staticClass:"display-1"},[t._v("Cake Smash")]),t._v(" "),r("h2",[t._v("Dobbiamo scrivere qualcosa qui d'impatto")])])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"container my-5 category-container w-100",attrs:{"data-aos":"zoom-in"}},[o("div",{staticClass:"service-description w-100 text-center text-md-right order-1 order-md-0 pr-0 mt-3 pr-md-5 mt-lg-0"},[o("h5",{staticClass:" text-uppercase small"},[t._v("La gravidanza e la fotografia")]),t._v(" "),o("h2",[t._v("Il momento migliore")]),t._v(" "),o("p",[t._v("\n        l servizio Cake Smash può essere svolto prima del compleanno, per\n        poter sfruttare le immagini durante la festa e per creare gli inviti o\n        subito dopo.\n      ")]),t._v(" "),o("p",{staticClass:"small font-weight-bold"},[t._v("\n        Il momento migliore è quando il bambino ancora non riesce a camminare\n        per evitare che esca spesso dal set.\n      ")])]),t._v(" "),o("div",{staticClass:"category-section w-100 order-0 order-md-1"},[o("img",{staticClass:"img-fluid rounded",attrs:{src:r(484),alt:""}})])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"container category-container w-100",attrs:{"data-aos":"zoom-in"}},[o("div",{staticClass:"category-section w-100"},[o("img",{staticClass:"img-fluid rounded",attrs:{src:r(485),alt:""}})]),t._v(" "),o("div",{staticClass:"service-description text-center text-md-left w-100 pl-0 mt-3 pl-md-5 mt-lg-0"},[o("h5",{staticClass:" text-uppercase small"},[t._v("La gravidanza e la fotografia")]),t._v(" "),o("h2",[t._v("Tema personalizzato")]),t._v(" "),o("p",[t._v("\n        Durante la consulenza pre sessione sceglieremo un tema inedito da\n        realizzare, personalizzato secondo i vostri gusti e desideri. In\n        abbinamento all'allestimento verrà fornita anche la torta.\n      ")]),t._v(" "),o("p",[t._v("\n        Nel caso in cui amiate in particolare uno dei set già realizzati, sarà\n        possibile riproporlo e riadattarlo secondo le vostre esigenze.\n      ")]),t._v(" "),o("p",{staticClass:"small font-weight-bold"},[t._v("\n        La preparazione di nuovi set richiede all'incirca 1-2 mesi per\n        l'ideazione e realizzazione.\n      ")])])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"container my-5 category-container w-100",attrs:{"data-aos":"zoom-in"}},[o("div",{staticClass:"service-description w-100 text-center text-md-right order-1 order-md-0 pr-0 mt-3 pr-md-5 mt-lg-0"},[o("h5",{staticClass:" text-uppercase small"},[t._v("La gravidanza e la fotografia")]),t._v(" "),o("h2",[t._v("La sessione")]),t._v(" "),o("p",[t._v("\n        La sessione ha una durata di circa 2 ore. Sarà possibile realizzare\n        fino a due cambi abito mantenendo lo stesso allestimento. Il primo\n        cambio prevede foto semplici con accessori e ceste, mentre con il\n        secondo verrà introdotta la torta con la quale il bimbo si divertirà a\n        giocare e sporcarsi.\n      ")])]),t._v(" "),o("div",{staticClass:"category-section w-100 order-0 order-md-1"},[o("img",{staticClass:"img-fluid rounded",attrs:{src:r(486),alt:""}})])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"container mb-5 category-container w-100",attrs:{"data-aos":"zoom-in"}},[o("div",{staticClass:"category-section w-100"},[o("img",{staticClass:"img-fluid rounded",attrs:{src:r(487),alt:""}})]),t._v(" "),o("div",{staticClass:"service-description text-center text-md-left w-100 pl-0 mt-3 pl-md-5 mt-lg-0"},[o("h5",{staticClass:" text-uppercase small"},[t._v("La gravidanza e la fotografia")]),t._v(" "),o("h2",[t._v("Dopo la sessione")]),t._v(" "),o("p",[t._v("\n        Una volta conclusa la sessione selezionerò gli scatti migliori che\n        saranno accuratamente post-prodotti con tecniche professionali,\n        garantendo sempre un effetto naturale.\n      ")]),t._v(" "),o("p",{staticClass:"small font-weight-bold"},[t._v("\n        Questo processo richiederà circa 3-4 settimane, dopo di che fisseremo\n        un incontro per visionare e scegliere i ritratti che racchiuderanno i\n        vostri ricordi più belli.\n      ")])])])}],l={name:"cake-smash",head:{title:"Cake Smash - Laura Cesaretti - Servizi Fotografici Roma"}},n=r(61),component=Object(n.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("Header"),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),r("div",{staticClass:"container-fluid",attrs:{id:"book-cakesmash"}},[r("div",{staticClass:"container main-paragraph-container text-center"},[r("h3",{staticClass:"mb-4"},[t._v("Ti Senti Pronta?")]),t._v(" "),r("p",{staticClass:"lead"},[t._v("\n        È universalmente riconosciuto che un lettore che osserva il layout di\n        una pagina viene distratto dal contenuto testuale se questo è leggibile.\n        Lo scopo dell'utilizzo.\n      ")]),t._v(" "),r("ModalContact",{attrs:{categoryName:"Cake Smash"}})],1)]),t._v(" "),r("Related",{attrs:{categoryName:"cakeSmash","data-aos":"zoom-in"}}),t._v(" "),r("Footer")],1)}),o,!1,null,null,null);e.default=component.exports;installComponents(component,{Header:r(317).default,ModalContact:r(318).default,Related:r(319).default,Footer:r(314).default})}}]);