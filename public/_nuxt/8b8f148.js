(window.webpackJsonp=window.webpackJsonp||[]).push([[21,2,8,9,10,12],{669:function(t,e,r){"use strict";r.r(e);var n={name:"BannerHero",props:{title:{type:String,reuqired:!0},subTitle:{type:String,reuqired:!0},isOnIndex:{type:Boolean,reuqired:!1}}},o=r(39),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"banner-hero",class:{home:!0===t.isOnIndex,service:!1===t.isOnIndex},attrs:{"data-aos":"fade-in"}},[r("div",{staticClass:"text-center"},[r("h1",{staticClass:"display-1"},[t._v(t._s(t.title))]),t._v(" "),r("h2",[t._v(t._s(t.subTitle))])])])}),[],!1,null,null,null);e.default=component.exports},670:function(t,e,r){"use strict";r.r(e);r(2),r(1);var n={name:"ServiceSection",data:function(){return{}},props:{note:{type:String,required:!1},imageRight:{type:Boolean,require:!1},service:{type:String,required:!0}},computed:{showServiceSetcion:function(){return"Maternità"===this.service?this.$store.state.services.sections.filter((function(t){return"Maternità"===t.category})):"Famiglia"===this.service?this.$store.state.services.sections.filter((function(t){return"Famiglia"===t.category})):"Neonato"===this.service?this.$store.state.services.sections.filter((function(t){return"Neonato"===t.category})):"Bebè"===this.service?this.$store.state.services.sections.filter((function(t){return"Bebè"===t.category})):"CakeSmash"===this.service?this.$store.state.services.sections.filter((function(t){return"CakeSmash"===t.category})):"Bio"===this.service?this.$store.state.services.sections.filter((function(t){return"Bio"===t.category})):void 0}}},o=r(39),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container service-section-wrapper overflow-hidden"},t._l(t.showServiceSetcion,(function(e){return r("div",{key:e.id,staticClass:"service-section-container",class:{"flex-row right":"right"===e.aligment,"flex-row-reverse left":"left"===e.aligment},attrs:{"data-aos":"right"===e.aligment?"slide-left":"slide-right"}},[r("div",{staticClass:"service-section",class:{"text-center text-md-right pt-5 pr-5 pb-5 pl-5 pt-md-0 pr-md-5 pb-md-0 pl-md-0":"right"===e.aligment,"text-center text-md-left pt-5 pr-5 pb-5 pl-5 pt-md-0 pr-md-0 pb-md-0 pl-md-5":"left"===e.aligment}},[r("h2",{staticClass:"display-4"},[t._v(t._s(e.title))]),t._v(" "),r("p",[t._v(t._s(e.paragraph))]),t._v(" "),e.secondParagraph?r("p",[t._v(t._s(e.secondParagraph))]):t._e(),t._v(" "),e.locations?r("ul",{staticClass:"service-list"},t._l(e.locations,(function(e){return r("li",{key:e.id},[r("span",{staticClass:" font-weight-bold"},[t._v(t._s(e.where))]),t._v(" "+t._s(e.how)+"\n        ")])})),0):t._e(),t._v(" "),e.note?r("p",{staticClass:"note mb-0"},[t._v(t._s(e.note))]):t._e()]),t._v(" "),r("div",{staticClass:"service-section"},[r("img",{staticClass:"img-fluid",attrs:{src:e.image,alt:""}})])])})),0)}),[],!1,null,null,null);e.default=component.exports},671:function(t,e,r){"use strict";r.r(e);r(2),r(1);var n={data:function(){return{show:!1}},props:{categoryName:{type:String,require:!0},service:{type:String,required:!0}},computed:{showQuote:function(){return"Maternità"===this.service?this.$store.state.quote.quotes.filter((function(t){return"Maternità"===t.category})):"Famiglia"===this.service?this.$store.state.quote.quotes.filter((function(t){return"Famiglia"===t.category})):"Neonato"===this.service?this.$store.state.quote.quotes.filter((function(t){return"Neonato"===t.category})):"Bebè"===this.service?this.$store.state.quote.quotes.filter((function(t){return"Bebè"===t.category})):"CakeSmash"===this.service?this.$store.state.quote.quotes.filter((function(t){return"CakeSmash"===t.category})):void 0}}},o=r(39),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container-fluid"},[r("div",{staticClass:"container main-paragraph"},[t._m(0),t._v(" "),r("div",{staticClass:"quote-wrapper"},t._l(t.showQuote,(function(e){return r("div",{key:e.id,staticClass:"col-12 col-md-6"},[r("div",{},[r("h2",[t._v("Servzio "+t._s(e.category))]),t._v(" "),r("p",{staticClass:"lead font-weight-lighter"},[t._v("\n            A partire da Euro "+t._s(e.price)+"\n          ")])]),t._v(" "),r("ul",{staticClass:"quote-service list-unstyled text-left"},t._l(e.includes,(function(e){return r("li",{key:e.id},[t._v("\n            "+t._s(e.name)+"\n          ")])})),0)])})),0)])])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"quote-header"},[r("h3",{staticClass:"display-4"},[t._v("Cattura i tuoi momenti")]),t._v(" "),r("p",{staticClass:"lead"},[t._v("Imprimi il presente nel futuro")])])}],!1,null,null,null);e.default=component.exports},672:function(t,e,r){"use strict";r.r(e);r(2),r(1),r(17);var n={name:"RelatedGallery",data:function(){return{index:null,length:9}},props:{categoryImage:{type:String,required:!0}},methods:{loadMore:function(){this.length>this.$store.state.gallery.images.length||(this.length=this.length+6)}},computed:{pickGallery:function(){return"Maternità"===this.categoryImage?this.$store.state.gallery.images.filter((function(image){return"Maternità"===image.category})):"Famiglia"===this.categoryImage?this.$store.state.gallery.images.filter((function(image){return"Famiglia"===image.category})):"Neonato"===this.categoryImage?this.$store.state.gallery.images.filter((function(image){return"Neonato"===image.category})):"Bebè"===this.categoryImage?this.$store.state.gallery.images.filter((function(image){return"Bebè"===image.category})):"CakeSmash"===this.categoryImage?this.$store.state.gallery.images.filter((function(image){return"CakeSmash"===image.category})):void 0},imagesLoaded:function(){return this.pickGallery.slice(0,this.length)}}},o=r(39),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"related-gallery-wrapper"},[r("div",{staticClass:"container"},[r("h4",{staticClass:"text-center display-4"},[t._v("\n      Galleria "+t._s(t.categoryImage)+".\n    ")]),t._v(" "),r("div",{staticClass:"gallery related-gallery-container"},t._l(t.imagesLoaded,(function(image,e){return r("div",{key:e,staticClass:"gallery-img",on:{click:function(r){t.index=e}}},[r("img",{staticClass:"img-fluid rounded",attrs:{src:image.url,alt:image.title}})])})),0),t._v(" "),this.length<this.pickGallery.length?r("button",{staticClass:"btn btn-sm d-flex m-auto btn-outline-dark",on:{click:t.loadMore}},[t._v("\n      Mostra altre foto\n    ")]):r("p",{staticClass:"text-secondary small text-center"},[t._v("\n      Tutte le foto sono state caricate\n    ")])]),t._v(" "),r("no-ssr",[r("LightGallery",{attrs:{images:t.imagesLoaded,index:t.index,"disable-scroll":!0},on:{close:function(e){t.index=null}}})],1)],1)}),[],!1,null,null,null);e.default=component.exports},673:function(t,e,r){"use strict";r.r(e);var n={name:"Related",props:{categoryName:{type:String,required:!0}}},o=r(39),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"related-products-container",attrs:{categoryName:t.categoryName}},[n("div",{staticClass:"container py-5"},[t._m(0),t._v(" "),n("div",{staticClass:"row related-products"},[n("div",{staticClass:"col-6 col-md-3",class:{"d-none":"maternità"===t.categoryName}},[n("NuxtLink",{attrs:{to:"/servizi-fotografici/maternità"}},[n("img",{staticClass:"img-fluid rounded",attrs:{src:r(232),alt:""}}),t._v(" "),n("h5",{staticClass:"text-center mt-2"},[t._v("Maternità")])])],1),t._v(" "),n("div",{staticClass:"col-6 col-md-3",class:{"d-none":"famiglia"===t.categoryName}},[n("NuxtLink",{attrs:{to:"/servizi-fotografici/famiglia"}},[n("img",{staticClass:"img-fluid rounded",attrs:{src:r(233),alt:""}}),t._v(" "),n("h5",{staticClass:"text-center mt-2"},[t._v("Famiglia")])])],1),t._v(" "),n("div",{staticClass:"col-6 col-md-3",class:{"d-none":"neonato"===t.categoryName}},[n("NuxtLink",{attrs:{to:"/servizi-fotografici/neonato"}},[n("img",{staticClass:"img-fluid rounded",attrs:{src:r(234),alt:""}}),t._v(" "),n("h5",{staticClass:"text-center mt-2"},[t._v("Neonato")])])],1),t._v(" "),n("div",{staticClass:"col-6 col-md-3",class:{"d-none":"bebè"===t.categoryName}},[n("NuxtLink",{attrs:{to:"/servizi-fotografici/bebè"}},[n("img",{staticClass:"img-fluid rounded",attrs:{src:r(235),alt:""}}),t._v(" "),n("h5",{staticClass:"text-center mt-2"},[t._v("Bebè")])])],1),t._v(" "),n("div",{staticClass:"col-6 col-md-3",class:{"d-none":"cakeSmash"===t.categoryName}},[n("NuxtLink",{attrs:{to:"/servizi-fotografici/cake-smash"}},[n("img",{staticClass:"img-fluid rounded",attrs:{src:r(236),alt:""}}),t._v(" "),n("h5",{staticClass:"text-center mt-2"},[t._v("Cake Smash")])])],1)])])])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"row text-center flex-column mb-4"},[r("h4",[t._v("\n        Scopri anche gli altri servizi fotografici\n      ")]),t._v(" "),r("p",{staticClass:"lead"},[t._v("Forse potrebbe interessarti")])])}],!1,null,null,null);e.default=component.exports},687:function(t,e,r){"use strict";r.r(e);var n={name:"neonato",layout:"services",head:{title:"Neonato - Laura Cesaretti - Servizi Fotografici Roma"}},o=r(39),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("BannerHero",{attrs:{title:"Neonato",subTitle:"Saranno cosi piccoli una sola volta"}}),t._v(" "),r("ServiceSection",{attrs:{service:"Neonato"}}),t._v(" "),r("Quote",{attrs:{service:"Neonato",categoryName:"Neonato"}}),t._v(" "),r("RelatedGallery",{attrs:{categoryImage:"Neonato"}}),t._v(" "),r("Related",{attrs:{categoryName:"neonato","data-aos":"zoom-in"}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{BannerHero:r(669).default,ServiceSection:r(670).default,Quote:r(671).default,RelatedGallery:r(672).default,Related:r(673).default})}}]);