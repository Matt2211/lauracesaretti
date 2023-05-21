<template>
  <div class="container service-section-wrapper overflow-hidden">
    <div
      v-for="service in showServiceSetcion"
      :key="service.id"
      class="service-section-container"
      :data-aos="service.aligment === 'right' ? 'slide-left' : 'slide-right'"
      :class="{
        'flex-row right': service.aligment === 'right',
        'flex-row-reverse left': service.aligment === 'left',
      }"
    >
      <div
        class="service-section"
        :class="{
          'text-center text-md-right pt-5 pr-5 pb-5 pl-5 pt-md-0 pr-md-5 pb-md-0 pl-md-0':
            service.aligment === 'right',
          'text-center text-md-left pt-5 pr-5 pb-5 pl-5 pt-md-0 pr-md-0 pb-md-0 pl-md-5':
            service.aligment === 'left',
        }"
      >
        <h2 class="display-4">{{ service.title }}</h2>
        <p>{{ service.paragraph }}</p>
        <p v-if="service.secondParagraph">{{ service.secondParagraph }}</p>

        <ul class="service-list" v-if="service.locations">
          <li v-for="location in service.locations" :key="location.id">
            <span class=" font-weight-bold">{{ location.where }}</span> {{ location.how }}
          </li>
        </ul>

        <p v-if="service.note" class="note mb-0">{{ service.note }}</p>
      </div>

      <div class="service-section">
        <img :src="service.image" class="img-fluid" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ServiceSection",
  data() {
    return {};
  },
  props: {
    note: {
      type: String,
      required: false,
    },

    imageRight: {
      type: Boolean,
      require: false,
    },
    service: {
      type: String,
      required: true,
    },
  },

  computed: {
    showServiceSetcion() {
      if (this.service === "Maternità") {
        return this.$store.state.services.sections.filter(function (item) {
          return item.category === "Maternità";
        });
      } else if (this.service === "Famiglia") {
        return this.$store.state.services.sections.filter(function (item) {
          return item.category === "Famiglia";
        });
      } else if (this.service === "Neonato") {
        return this.$store.state.services.sections.filter(function (item) {
          return item.category === "Neonato";
        });
      } else if (this.service === "Bebè") {
        return this.$store.state.services.sections.filter(function (item) {
          return item.category === "Bebè";
        });
      } else if (this.service === "CakeSmash") {
        return this.$store.state.services.sections.filter(function (item) {
          return item.category === "CakeSmash";
        });
      } else if (this.service === "Bio") {
        return this.$store.state.services.sections.filter(function (item) {
          return item.category === "Bio";
        });
      }
    },
  },
};
</script>
