<template>
  <div :categoryName="categoryName">
    <div class="container py-4">
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
        v-if="this.length < this.galleryImages.length"
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
    categoryName: {
        type: String,
        required: true
    }
  },
  methods: {
    loadMore() {
      if (this.length > this.$store.state.gallery.images.length) return;
      this.length = this.length + 6;
      
    },
  },
  computed: {

    galleryImages() {
      return this.$store.state.gallery.images.filter(function (image) {
        return image.category === 'CakeSmash'
      });
    },
    imagesLoaded() {
      return this.galleryImages.slice(0, this.length);
    },
  },
};
</script>
