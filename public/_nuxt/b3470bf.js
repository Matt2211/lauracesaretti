(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{667:function(e,t,r){"use strict";r.r(t);r(2),r(1);var n={name:"ServiceSection",data:function(){return{}},props:{note:{type:String,required:!1},imageRight:{type:Boolean,require:!1},service:{type:String,required:!0}},computed:{showServiceSetcion:function(){return"Maternità"===this.service?this.$store.state.services.sections.filter((function(e){return"Maternità"===e.category})):"Famiglia"===this.service?this.$store.state.services.sections.filter((function(e){return"Famiglia"===e.category})):"Neonato"===this.service?this.$store.state.services.sections.filter((function(e){return"Neonato"===e.category})):"Bebè"===this.service?this.$store.state.services.sections.filter((function(e){return"Bebè"===e.category})):"CakeSmash"===this.service?this.$store.state.services.sections.filter((function(e){return"CakeSmash"===e.category})):void 0}}},c=r(39),component=Object(c.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container service-section-wrapper"},e._l(e.showServiceSetcion,(function(t){return r("div",{key:t.id,staticClass:"service-section-container",class:{"flex-row right":"right"===t.aligment,"flex-row-reverse left":"left"===t.aligment},attrs:{"data-aos":"right"===t.aligment?"slide-left":"slide-right"}},[r("div",{staticClass:"service-section",class:{"text-center text-md-right pt-5 pr-5 pb-5 pl-5 pt-md-0 pr-md-5 pb-md-0 pl-md-0":"right"===t.aligment,"text-center text-md-left pt-5 pr-5 pb-5 pl-5 pt-md-0 pr-md-0 pb-md-0 pl-md-5":"left"===t.aligment}},[r("h2",{staticClass:"display-4"},[e._v(e._s(t.title))]),e._v(" "),r("p",[e._v(e._s(t.paragraph))]),e._v(" "),t.secondParagraph?r("p",[e._v(e._s(t.secondParagraph))]):e._e(),e._v(" "),t.locations?r("ul",{staticClass:"service-list"},e._l(t.locations,(function(t){return r("li",{key:t.id},[r("span",{staticClass:" font-weight-bold"},[e._v(e._s(t.where))]),e._v(" "+e._s(t.how)+"\n        ")])})),0):e._e(),e._v(" "),t.note?r("p",{staticClass:"note mb-0"},[e._v(e._s(t.note))]):e._e()]),e._v(" "),r("div",{staticClass:"service-section bg-danger"},[r("img",{staticClass:"img-fluid",attrs:{src:t.image,alt:""}})])])})),0)}),[],!1,null,null,null);t.default=component.exports}}]);