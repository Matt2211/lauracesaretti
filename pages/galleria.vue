<template>
  <div>
    <BannerHero
      title="Galleria"
      subTitle="Dobbiamo scrivere qualcosa qui d'impatto"
    />

    <div class="container">
      <ul
        class="list-unstyled d-flex align-items-center justify-content-between"
      >
        <li>Tutte</li>
        <li>Fine Art</li>
        <li>Life Style</li>
        <li>Neonato</li>
        <li>Bebè</li>
        <li>cake Smash</li>
      </ul>
    </div>

    <div class="container">
      <div class="gallery">
        <div
          class="gallery-img"
          v-for="(image, imageIndex) in galleryImages"
          :key="imageIndex"
          @click="index = imageIndex"
        >
          <img :src="image.url" class="img-fluid rounded" :alt="image.title" />
        </div>
      </div>
    </div>

    <no-ssr>
      <LightGallery
        :images="galleryImages"
        :index="index"
        :disable-scroll="true"
        @close="index = null"
      />
    </no-ssr>

    <Footer />
  </div>
</template>

<script>
export default {
  name: "galleria",
  layout: "services",
  data: function () {
    return {
      index: null,
    };
  },

  computed: {
    galleryImages() {
      return this.$store.state.gallery.images.filter(function (image) {
        return image.all === true;
      });
    },
  },
};
</script>
