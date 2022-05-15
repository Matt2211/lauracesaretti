(window.webpackJsonp=window.webpackJsonp||[]).push([[17,2,3,4,6,7],{312:function(t,e,o){"use strict";o.r(e);const r={_origin:"https://api.emailjs.com"},n=(t,e,o)=>{if(!t)throw"The user ID is required. Visit https://dashboard.emailjs.com/admin/integration";if(!e)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!o)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};class l{constructor(t){this.status=t.status,this.text=t.responseText}}const c=(t,data,e={})=>new Promise(((o,n)=>{const c=new XMLHttpRequest;c.addEventListener("load",(({target:t})=>{const e=new l(t);200===e.status||"OK"===e.text?o(e):n(e)})),c.addEventListener("error",(({target:t})=>{n(new l(t))})),c.open("POST",r._origin+t,!0),Object.keys(e).forEach((t=>{c.setRequestHeader(t,e[t])})),c.send(data)}));var d=(t,e,form,o)=>{const l=o||r._userID,d=(form=>{let t;if(t="string"==typeof form?document.querySelector(form):form,!t||"FORM"!==t.nodeName)throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return t})(form);n(l,t,e);const m=new FormData(d);return m.append("lib_version","3.4.0"),m.append("service_id",t),m.append("template_id",e),m.append("user_id",l),c("/api/v1.0/email/send-form",m)},m={name:"Contacts",data:function(){return{emailSuccess:!1}},props:{optionsEnabled:{type:Boolean,required:!1,default:!1},categoryName:{type:String,required:!1}},methods:{sendEmail:function(){var t=this;d("service_0smn389","template_nv4dhfd",this.$refs.form,"Wv-_Y_OTYnAimnkVi").then((function(e){t.emailSuccess=!0,console.log("SUCCESS!",e.text)}),(function(t){console.log("FAILED...",t.text)}))}}},v=o(61),component=Object(v.a)(m,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[!1===t.emailSuccess?o("form",{ref:"form",on:{submit:function(e){return e.preventDefault(),t.sendEmail.apply(null,arguments)}}},[t._m(0),t._v(" "),o("div",{directives:[{name:"show",rawName:"v-show",value:t.optionsEnabled,expression:"optionsEnabled"}],staticClass:"contact-options mb-3"},[o("div",{staticClass:"form-check"},[o("input",{staticClass:"form-check-input",attrs:{name:"fineArt",type:"checkbox",value:"fineArt",id:"fineArt"},domProps:{checked:"Fine Art"===t.categoryName?"checked":""}}),t._v(" "),o("label",{staticClass:"form-check-label",attrs:{for:"fineArt"}},[t._v("\r\n          Maternità Fine Art\r\n        ")])]),t._v(" "),o("div",{staticClass:"form-check"},[o("input",{staticClass:"form-check-input",attrs:{name:"lifeStyle",type:"checkbox",value:"lifeStyle",id:"lifeStyle"},domProps:{checked:"Life Style"===t.categoryName?"checked":""}}),t._v(" "),o("label",{staticClass:"form-check-label",attrs:{for:"lifeStyle"}},[t._v("\r\n          Maternità Life Style\r\n        ")])]),t._v(" "),o("div",{staticClass:"form-check"},[o("input",{staticClass:"form-check-input",attrs:{name:"neonato",type:"checkbox",value:"neonato",id:"neonato"},domProps:{checked:"Neonato"===t.categoryName?"checked":""}}),t._v(" "),o("label",{staticClass:"form-check-label",attrs:{for:"neonato"}},[t._v("Neonato")])]),t._v(" "),o("div",{staticClass:"form-check"},[o("input",{staticClass:"form-check-input",attrs:{name:"bebe",type:"checkbox",value:"bebe",id:"bebe"},domProps:{checked:"Bebè"===t.categoryName?"checked":""}}),t._v(" "),o("label",{staticClass:"form-check-label",attrs:{for:"bebe"}},[t._v("Bebè")])]),t._v(" "),o("div",{staticClass:"form-check"},[o("input",{staticClass:"form-check-input",attrs:{name:"cakeSmash",type:"checkbox",value:"cakeSmash",id:"cakeSmash"},domProps:{checked:"Cake Smash"===t.categoryName?"checked":""}}),t._v(" "),o("label",{staticClass:"form-check-label",attrs:{for:"cakeSmash"}},[t._v("Cake Smash")])])]),t._v(" "),t._m(1),t._v(" "),t._m(2)]):t._e(),t._v(" "),t.emailSuccess?o("h4",{staticClass:"display-5 text-center"},[t._v("Grazie per la tua email!")]):t._e()])}),[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"row mb-4",staticStyle:{gap:"20px 0"}},[o("div",{staticClass:"col-12 col-md-6"},[o("label",{attrs:{for:"user_name"}},[t._v("Nome*")]),t._v(" "),o("input",{staticClass:"form-control",attrs:{type:"text",name:"user_name",id:"user_name",placeholder:"Nome",required:""}})]),t._v(" "),o("div",{staticClass:"col-12 col-md-6"},[o("label",{attrs:{for:"to_lastname"}},[t._v("Cognome*")]),t._v(" "),o("input",{staticClass:"form-control",attrs:{type:"text",name:"user_lastname",id:"user_lastname",placeholder:"Cognome",required:""}})]),t._v(" "),o("div",{staticClass:"col-12 col-md-6"},[o("label",{attrs:{for:"user_email"}},[t._v("Indirizzo Email*")]),t._v(" "),o("input",{staticClass:"form-control",attrs:{type:"email",name:"user_email",id:"user_email","aria-describedby":"emailHelp",placeholder:"Indirizzo Email",required:""}})]),t._v(" "),o("div",{staticClass:"col-12 col-md-6"},[o("label",{attrs:{for:"user_phone"}},[t._v("Telefono*")]),t._v(" "),o("input",{staticClass:"form-control",attrs:{type:"tel",name:"user_phone",id:"user_phone","aria-describedby":"telephone",placeholder:"Telefono",required:""}})])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"user_message"}},[t._v("Scrivi qui il tuo messaggio*")]),t._v(" "),o("textarea",{staticClass:"form-control",attrs:{name:"user_message",id:"user_message",rows:"5"}})])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"w-100 d-flex align-items-center justify-content-between"},[o("p",{staticClass:"small mb-0"},[t._v('I campi contrassegnati con "*" sono obbligatori.')]),t._v(" "),o("button",{staticClass:"btn btn-dark d-block ml-auto",attrs:{type:"submit"}},[t._v("\r\n        Invia Email\r\n      ")])])}],!1,null,null,null);e.default=component.exports},313:function(t,e,o){var content=o(316);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(63).default)("47cadc0b",content,!0,{sourceMap:!1})},314:function(t,e,o){"use strict";o.r(e);var r={name:"Footer"},n=o(61),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("footer",[o("div",{staticClass:"d-flex footer-sections pt-5 mb-5 text-center text-md-left flex-column flex-md-row"},[o("div",{staticClass:"col-12 col-md-6"},[o("h2",{staticClass:"mb-0 text-dark"},[t._v("Laura Cesaretti")]),t._v(" "),o("p",{staticClass:"small footer-text-lighter"},[t._v("Fine Art Portrait Photography, Italia - Roma. Foto professionali...")]),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),o("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-center-footer",modifiers:{"modal-center-footer":!0}}],staticClass:"d-block m-auto ml-md-0",attrs:{variant:"dark"}},[t._v("Richiedi Preventivo")]),t._v(" "),o("b-modal",{attrs:{"hide-footer":"",id:"modal-center-footer",size:"lg",centered:"",title:"Richiesta Preventivo"}},[o("Contacts",{attrs:{optionsEnabled:""}})],1)],1),t._v(" "),o("div",{staticClass:"col-12 col-md-3"},[o("h6",{staticClass:"text-dark"},[t._v("SERVIZI FOTOGRAFICI:")]),t._v(" "),o("ul",{staticClass:"footer-list list-unstyled p-0"},[o("li",{staticClass:"small"},[o("NuxtLink",{attrs:{to:"/servizi-fotografici/maternità-fine-art"}},[t._v("Maternità Fine Art")])],1),t._v(" "),o("li",{staticClass:"small"},[o("NuxtLink",{attrs:{to:"/servizi-fotografici/maternità-life-style"}},[t._v("Maternità Lifestyle")])],1),t._v(" "),o("li",{staticClass:"small"},[o("NuxtLink",{attrs:{to:"/servizi-fotografici/neonato"}},[t._v("Neonato")])],1),t._v(" "),o("li",{staticClass:"small"},[o("NuxtLink",{attrs:{to:"/servizi-fotografici/bebè"}},[t._v("Bebè")])],1),t._v(" "),o("li",{staticClass:"small"},[o("NuxtLink",{attrs:{to:"/servizi-fotografici/cake-smash"}},[t._v("Cake Smash")])],1)])]),t._v(" "),t._m(2)]),t._v(" "),o("hr",{staticClass:"footer-divider"}),t._v(" "),t._m(3)])}),[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("p",{staticClass:"small text-dark mb-0"},[t._v("Telefoto: "),o("span",{staticClass:"footer-text-lighter"},[t._v("+39 348 059 52 59")])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("p",{staticClass:"small text-dark"},[t._v("Email: "),o("span",{staticClass:"footer-text-lighter"},[t._v("lauracesarettiphotography@gmail.com")])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"col-12 col-md-3"},[o("h6",{staticClass:"text-dark"},[t._v("SEGUIMI SU:")]),t._v(" "),o("ul",{staticClass:"footer-list list-unstyled text-dark p-0"},[o("li",{staticClass:"small"},[o("a",{attrs:{target:"_blank",href:"https://www.instagram.com/lauracesarettiphotography/"}},[t._v("Instagram")])]),t._v(" "),o("li",{staticClass:"small"},[o("a",{attrs:{target:"_blank",href:"https://www.pinterest.com/lauracesarettiph"}},[t._v("Pinterest")])]),t._v(" "),o("li",{staticClass:"small"},[o("a",{attrs:{target:"_blank",href:"https://facebook.com/people/@/lauracesarettiphotography"}},[t._v("Facebook")])])])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"d-flex align-items-center justify-content-center justify-content-md-between flex-wrap"},[o("h6",{staticClass:"text-dark rights text-center text-md-left pb-3 mb-0"},[t._v("\n      2022 Laura Cesaretti Fine Art Portrait Photography, Roma. All Rights\n      Reserved\n    ")]),t._v(" "),o("h6",{staticClass:"text-dark rights text-center text-md-left pb-3 mb-0"},[t._v("\n      Designed and Developed by: "),o("a",{staticClass:"matteofelicidesign",attrs:{target:"_blank",href:"https://www.linkedin.com/in/matteo-felici-7717456a"}},[t._v("Matteo Felici")])])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Contacts:o(312).default,Footer:o(314).default})},315:function(t,e,o){"use strict";o(313)},316:function(t,e,o){var r=o(62)(!1);r.push([t.i,".overlay{background-color:#fff;position:absolute;height:100%;width:100%}",""]),t.exports=r},317:function(t,e,o){"use strict";o.r(e);var r={name:"Header",data:function(){return{scrollY:0,showMobileMenu:!1}},props:{isOnIndex:{type:Boolean,required:!1,default:!1}},methods:{handleScroll:function(){this.scrollY=window.scrollY}},beforeMount:function(){window.addEventListener("scroll",this.handleScroll)},beforeDestroy:function(){window.removeEventListener("scroll",this.handleScroll)}},n=(o(315),o(61)),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{staticClass:"header shadow-sm",class:t.isOnIndex&&t.scrollY<=200?"bg-transparent":"bg-light"},[o("NuxtLink",{attrs:{to:"/"}},[o("h4",{staticClass:"text-decoration-none mb-0"},[t._v("\n        Laura Cesaretti \n        ")])]),t._v(" "),o("div",{staticClass:"d-lg-none",class:[t.isOnIndex&&t.scrollY<=200?"text-light":"text-dark",!0===t.showMobileMenu&&t.scrollY<=200?"text-dark":"text-light"],on:{click:function(e){t.showMobileMenu=!t.showMobileMenu}}},[t._v("\n      "+t._s(t.showMobileMenu?"close":"open")+"\n    ")]),t._v(" "),o("ul",{staticClass:"d-none d-lg-flex main-menu list-unstyled m-0",class:t.isOnIndex&&t.scrollY<=200?"text-light":"text-dark"},[o("NuxtLink",{attrs:{to:"/chi-sono"}},[o("li",{staticClass:"text-uppercase"},[t._v("Chi sono")])]),t._v(" "),o("NuxtLink",{attrs:{to:"/collezioni"}},[o("li",{staticClass:"text-uppercase"},[t._v("Servizi Fotografici")])]),t._v(" "),o("NuxtLink",{attrs:{to:"/galleria"}},[o("li",{staticClass:"text-uppercase"},[t._v("Galleria")])]),t._v(" "),o("NuxtLink",{attrs:{to:"/contatti"}},[o("li",{staticClass:"text-uppercase"},[t._v("Contatti")])]),t._v(" "),o("li",[o("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-center-header",modifiers:{"modal-center-header":!0}}],staticClass:"d-block",attrs:{variant:t.isOnIndex&&t.scrollY<=200?"light":"dark"}},[t._v("Richiedi Preventivo")]),t._v(" "),o("b-modal",{attrs:{"hide-footer":"",id:"modal-center-header",size:"lg",centered:"",title:"Richiesta Preventivo"}},[o("Contacts",{attrs:{optionsEnabled:""}})],1)],1)],1)],1),t._v(" "),t.showMobileMenu?o("div",{staticClass:"overlay d-flex align-items-center justify-content-center flex-column",attrs:{id:"myNav"}},[o("ul",{staticClass:"d-flex flex-column align-items-center justify-content-center main-menu list-unstyled m-0",staticStyle:{gap:"30px"}},[o("NuxtLink",{attrs:{to:"/collezioni"}},[o("li",{staticClass:"text-uppercase"},[t._v("Servizi Fotografici")])]),t._v(" "),o("NuxtLink",{attrs:{to:"/galleria"}},[o("li",{staticClass:"text-uppercase"},[t._v("Galleria")])]),t._v(" "),o("NuxtLink",{attrs:{to:"/contatti"}},[o("li",{staticClass:"text-uppercase"},[t._v("Contatti")])]),t._v(" "),o("li",[o("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-center-header",modifiers:{"modal-center-header":!0}}],staticClass:"d-block",attrs:{variant:"dark"}},[t._v("Richiedi Preventivo")]),t._v(" "),o("b-modal",{attrs:{"hide-footer":"",id:"modal-center-header",size:"lg",centered:"",title:"Richiesta Preventivo"}},[o("Contacts",{attrs:{optionsEnabled:""}})],1)],1)],1)]):t._e()])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Contacts:o(312).default})},318:function(t,e,o){"use strict";o.r(e);var r={name:"ModalContact",props:{categoryName:{type:String,required:!0}}},n=o(61),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"container mt-5"},[o("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-center",modifiers:{"modal-center":!0}}],staticClass:"d-block m-auto btn-lg",attrs:{variant:"dark"}},[t._v("Richiedi Preventivo")]),t._v(" "),o("b-modal",{attrs:{"hide-footer":"",id:"modal-center",size:"lg",centered:"",title:t.categoryName+" - Richiesta Preventivo"}},[o("Contacts",{attrs:{categoryName:t.categoryName}})],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Contacts:o(312).default})},319:function(t,e,o){"use strict";o.r(e);var r={name:"Related",props:{categoryName:{type:String,required:!0}}},n=o(61),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"related-products-container",attrs:{categoryName:t.categoryName}},[r("div",{staticClass:"container pt-5"},[t._m(0),t._v(" "),r("div",{staticClass:"row related-products"},[r("div",{staticClass:"col-6 col-md-3",class:{"d-none":"fineArt"===t.categoryName}},[r("NuxtLink",{attrs:{to:"/servizi-fotografici/maternità-fine-art"}},[r("img",{staticClass:"img-fluid rounded ",attrs:{src:o(214),alt:""}}),t._v(" "),r("h5",{staticClass:"text-center mt-2"},[t._v("Fine Art")])])],1),t._v(" "),r("div",{staticClass:"col-6 col-md-3",class:{"d-none":"lifeStyle"===t.categoryName}},[r("NuxtLink",{attrs:{to:"/servizi-fotografici/maternità-life-style"}},[r("img",{staticClass:"img-fluid rounded",attrs:{src:o(215),alt:""}}),t._v(" "),r("h5",{staticClass:"text-center mt-2"},[t._v("Life Style")])])],1),t._v(" "),r("div",{staticClass:"col-6 col-md-3",class:{"d-none":"neonato"===t.categoryName}},[r("NuxtLink",{attrs:{to:"/servizi-fotografici/neonato"}},[r("img",{staticClass:"img-fluid rounded",attrs:{src:o(216),alt:""}}),t._v(" "),r("h5",{staticClass:"text-center mt-2"},[t._v("Neonato")])])],1),t._v(" "),r("div",{staticClass:"col-6 col-md-3",class:{"d-none":"bebè"===t.categoryName}},[r("NuxtLink",{attrs:{to:"/servizi-fotografici/bebè"}},[r("img",{staticClass:"img-fluid rounded",attrs:{src:o(217),alt:""}}),t._v(" "),r("h5",{staticClass:"text-center mt-2"},[t._v("Bebè")])])],1),t._v(" "),r("div",{staticClass:"col-6 col-md-3",class:{"d-none":"cakeSmash"===t.categoryName}},[r("NuxtLink",{attrs:{to:"/servizi-fotografici/cake-smash"}},[r("img",{staticClass:"img-fluid rounded",attrs:{src:o(218),alt:""}}),t._v(" "),r("h5",{staticClass:"text-center mt-2"},[t._v("Cake Smash")])])],1)])])])}),[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"row text-center flex-column mb-4"},[o("h4",[t._v("Non e il servizio fotografico "),o("br",{staticClass:"d-md-none"}),t._v(" adatto a te?")]),t._v(" "),o("p",{staticClass:"lead"},[t._v("Prova a controllare anche:")])])}],!1,null,null,null);e.default=component.exports},495:function(t,e,o){t.exports=o.p+"img/01_neonato_momento_migliore_laura_cesaretti_roma.0761399.jpg"},496:function(t,e,o){t.exports=o.p+"img/02_neonato_sessione_laura_cesaretti_roma.19ae798.jpg"},497:function(t,e,o){t.exports=o.p+"img/03_neonato_sicurezza_laura_cesaretti_roma.c4bb765.jpg"},498:function(t,e,o){t.exports=o.p+"img/04_neonato_prodotti_laura_cesaretti_roma.5edf980.jpg"},509:function(t,e,o){"use strict";o.r(e);var r=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"banner-hero-inner",attrs:{id:"banner-neonato"}},[o("div",{staticClass:"text-center"},[o("h1",{staticClass:"display-1"},[t._v("Neonato")]),t._v(" "),o("h2",[t._v("Dobbiamo scrivere qualcosa qui d'impatto")])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container category-container w-100",attrs:{"data-aos":"zoom-in"}},[r("div",{staticClass:"category-section w-100"},[r("img",{staticClass:"img-fluid rounded",attrs:{src:o(495),alt:""}})]),t._v(" "),r("div",{staticClass:"service-description text-center text-md-left w-100 pl-0 mt-3 pl-md-5 mt-lg-0"},[r("h5",{staticClass:"text-uppercase small"},[t._v("La gravidanza e la fotografia")]),t._v(" "),r("h2",[t._v("Il momento migliore")]),t._v(" "),r("p",[t._v("\n          Il servizio Neonato si svolge nei primi 6-15 giorni di vita. In questo\n          periodo i bambini dormono di più e hanno una muscolatura molto più\n          elastica, questo mi permetterà di posizionarli in tutta sicurezza.\n        ")]),t._v(" "),r("p",{staticClass:"small font-weight-bold"},[t._v("\n          Il momento migliore per prenotare è quando si viene a conoscenza della\n          data presunta del parto.\n        ")])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container my-5 category-container w-100",attrs:{"data-aos":"zoom-in"}},[r("div",{staticClass:"service-description w-100 text-center text-md-right order-1 order-md-0 pr-0 mt-3 pr-md-5 mt-lg-0"},[r("h5",{staticClass:"text-uppercase small"},[t._v("La gravidanza e la fotografia")]),t._v(" "),r("h2",[t._v("Su misura per te")]),t._v(" "),r("p",[t._v("\n          Il servizio ha una durata di circa 3/4 ore per permettere al neonato\n          di addormentarsi e fare le giuste pause fisiologiche. Nel prezzo sono\n          sempre incluse le foto con i genitori ed eventuali fratellini. \n        ")]),t._v(" "),r("p",[t._v("Durante\n          la consulenza pre sessione sceglieremo quali set realizzare per il\n          vostro bambino. Lo studio mette a vostra disposizione una vasta gamma\n          di tessuti, lane, fascette, cappellini e accessori. ")]),t._v(" "),r("p",{staticClass:"small font-weight-bold"},[t._v("\n          La sessione viene realizzata nel confort del mio studio, dove potrete usufruire di fasciatoio, scalda biberon, Wifi e snack.\n        ")])]),t._v(" "),r("div",{staticClass:"category-section w-100 order-0 order-md-1"},[r("img",{staticClass:"img-fluid rounded",attrs:{src:o(496),alt:""}})])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container category-container w-100",attrs:{"data-aos":"zoom-in"}},[r("div",{staticClass:"category-section w-100"},[r("img",{staticClass:"img-fluid rounded",attrs:{src:o(497),alt:""}})]),t._v(" "),r("div",{staticClass:"service-description text-center text-md-left w-100 pl-0 mt-3 pl-md-5 mt-lg-0"},[r("h5",{staticClass:"text-uppercase small"},[t._v("La gravidanza e la fotografia")]),t._v(" "),r("h2",[t._v("Sicurezza")]),t._v(" "),r("p",[t._v("\n         La sicurezza dei vostri bambini è molto più importante di qualsiasi posa o allestimento. Sarò molto attenta ai \nloro bisogni, ogni neonato è diverso e non a tutti piacciono determinate posizioni. La sessione verrà \ninteramente personalizzata sulle esigente dei vostri piccoli, in modo che siano sempre comodi e rilassati.\n        ")])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container my-5 category-container w-100",attrs:{"data-aos":"zoom-in"}},[r("div",{staticClass:"service-description w-100 text-center text-md-right order-1 order-md-0 pr-0 mt-3 pr-md-5 mt-lg-0"},[r("h5",{staticClass:"text-uppercase small"},[t._v("La gravidanza e la fotografia")]),t._v(" "),r("h2",[t._v("Dopo la sessione")]),t._v(" "),r("p",[t._v("\n          Una volta conclusa la sessione selezionerò gli scatti migliori che\n          saranno accuratamente post-prodotti con tecniche professionali,\n          garantendo sempre un effetto naturale.\n        ")]),t._v(" "),r("p",{staticClass:"small font-weight-bold"},[t._v("Questo processo richiederà\n          circa 3-4 settimane, dopo di che fisseremo un incontro per visionare e\n          scegliere i ritratti che racchiuderanno i vostri ricordi più belli.")])]),t._v(" "),r("div",{staticClass:"category-section w-100"},[r("img",{staticClass:"img-fluid rounded",attrs:{src:o(498),alt:""}})])])}],n={name:"Neonato",head:{title:"Neonato - Laura Cesaretti - Servizi Fotografici Roma"}},l=o(61),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("Header"),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),o("div",{staticClass:"container-fluid",attrs:{id:"book-neonato"}},[o("div",{staticClass:"container main-paragraph-container text-center"},[o("h3",{staticClass:"mb-4"},[t._v("Ti Senti Pronta?")]),t._v(" "),o("p",{staticClass:"lead"},[t._v("\n          È universalmente riconosciuto che un lettore che osserva il layout di\n          una pagina viene distratto dal contenuto testuale se questo è leggibile.\n          Lo scopo dell'utilizzo.\n        ")]),t._v(" "),o("ModalContact",{attrs:{categoryName:"Neonato"}})],1)]),t._v(" "),o("Related",{attrs:{categoryName:"neonato","data-aos":"zoom-in"}}),t._v(" "),o("Footer")],1)}),r,!1,null,null,null);e.default=component.exports;installComponents(component,{Header:o(317).default,ModalContact:o(318).default,Related:o(319).default,Footer:o(314).default})}}]);