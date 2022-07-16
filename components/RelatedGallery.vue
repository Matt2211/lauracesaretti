<template>
  <div>
    <div class="container py-4">
        <h2 class="text-center mb-5">Titolo galleria qui</h2>
      <div class="gallery mb-5">
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
        class="btn btn-dark d-flex m-auto"
        @click="loadMore"
      >
        Mostra altre foto
      </button>
      <p class="text-secondary small text-center" v-else>
        Tutte le foto sono state caricate
      </p>
      <hr class="mt-5" />
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
      if (this.categoryImage === "FineArt") {
        return this.$store.state.gallery.images.filter(function (image) {
          return image.category === "FineArt";
        });
      } else if (this.categoryImage === "LifeStyle") {
        return this.$store.state.gallery.images.filter(function (image) {
          return image.category === "LifeStyle";
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
