<template>
  <div class="related-gallery-wrapper">
    <div class="container">
      <h4 class="text-center display-4">
        Galleria {{ categoryImage }}.
      </h4>

      <div class="gallery related-gallery-container">
       
        <div
          class="gallery-img"
          v-for="(image, imageIndex) in imagesLoaded"
          :key="imageIndex"
          @click="index = imageIndex"
        >
          <img :src="image.url" class="img-fluid rounded" :alt="image.title" />
        </div>



      </div>




      <button
        v-if="this.length < this.pickGallery.length"
        class="btn btn-sm d-flex m-auto btn-outline-dark"
        @click="loadMore"
      >
        Mostra altre foto
      </button>
      <p class="text-secondary small text-center" v-else>
        Tutte le foto sono state caricate
      </p>
    </div>

    <no-ssr>
      <LightGallery
        :images="imagesLoaded"
        :index="index"
        :disable-scroll="true"
        @close="index = null"
      />
    </no-ssr>
  </div>
</template>

<script>
export default {
  name: "RelatedGallery",
  data: function () {
    return {
      index: null,
      length: 9,
    };
  },
  props: {
    categoryImage: {
      type: String,
      required: true,
    },
  },
  methods: {
    loadMore() {
      if (this.length > this.$store.state.gallery.images.length) return;
      this.length = this.length + 6;
    },
  },
  computed: {
    pickGallery() {
      if (this.categoryImage === "Maternità") {
        return this.$store.state.gallery.images.filter(function (image) {
          return image.category === "Maternità";
        });
      } else if (this.categoryImage === "Famiglia") {
        return this.$store.state.gallery.images.filter(function (image) {
          return image.category === "Famiglia";
        });
      } else if (this.categoryImage === "Neonato") {
        return this.$store.state.gallery.images.filter(function (image) {
          return image.category === "Neonato";
        });
      } else if (this.categoryImage === "Bebè") {
        return this.$store.state.gallery.images.filter(function (image) {
          return image.category === "Bebè";
        });
      } else if (this.categoryImage === "CakeSmash") {
        return this.$store.state.gallery.images.filter(function (image) {
          return image.category === "CakeSmash";
        });
      }
    },

    imagesLoaded() {
      return this.pickGallery.slice(0, this.length);
    },
  },
};
</script>
