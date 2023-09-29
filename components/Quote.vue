<template>
  <div class="container-fluid">
    <div class="container main-paragraph">
      <div class="quote-header">
        <h3 class="display-4">Cattura i tuoi momenti</h3>
        <p class="lead">Imprimi il presente nel futuro</p>
      </div>

      <div class="quote-wrapper">
        

       <!-- <div class="col-12 col-md-6">
         <Contacts :categoryName="categoryName" />
       </div> -->

       <div v-for="quote in showQuote" :key="quote.id" class="col-12 col-md-6">
        <div class="">
            <h2>Servzio {{ quote.category }}</h2>
            <p class="lead font-weight-lighter">
              A partire da Euro {{ quote.price }}
            </p>
        </div>

          <ul class="quote-service list-unstyled text-left">
            <li v-for="item in quote.includes" :key="item.id">
              {{ item.name }}
            </li>
          </ul>
          <!-- <Button @click="show = !show">Richiedi info</Button> -->
        </div>
      </div>
    </div>

    <!-- <div class="container quote-wrapper">
      <div
        v-for="quote in showQuote"
        :key="quote.id"
        class="d-flex flex-column align-items-center w-100 flex-wrap"
      >
        <div class="quote-header">
          <h3 class="display-4">Cattura i tuoi momenti</h3>
          <p class="lead">Imprimi il presente nel futuro</p>
        </div>

        <div class="quote-pack p-5">
          <div class="test text-right pr-5">
            <div>
              <h2>Servzio {{ quote.category }}</h2>
              <p class="lead font-weight-lighter">
                A partire da Euro {{ quote.price }}
              </p>
            </div>

            <ul class="quote-service">
              <li v-for="item in quote.includes" :key="item.id">
                {{ item.name }}
              </li>
            </ul>
            <Button @click="show = !show">Richiedi info</Button>
          </div>

          <div class="test border-left">
            <Contacts :categoryName="categoryName" />
          </div>

          <ModalContact :categoryName="categoryName" />
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
    };
  },
  props: {
    categoryName: {
      type: String,
      require: true,
    },
    service: {
      type: String,
      required: true,
    },
  },
  computed: {
    showQuote() {
      if (this.service === "Maternità") {
        return this.$store.state.quote.quotes.filter(function (item) {
          return item.category === "Maternità";
        });
      } else if (this.service === "Famiglia") {
        return this.$store.state.quote.quotes.filter(function (item) {
          return item.category === "Famiglia";
        });
      } else if (this.service === "Neonato") {
        return this.$store.state.quote.quotes.filter(function (item) {
          return item.category === "Neonato";
        });
      } else if (this.service === "Bebè") {
        return this.$store.state.quote.quotes.filter(function (item) {
          return item.category === "Bebè";
        });
      } else if (this.service === "CakeSmash") {
        return this.$store.state.quote.quotes.filter(function (item) {
          return item.category === "CakeSmash";
        });
      }
    },
  },
};
</script>
