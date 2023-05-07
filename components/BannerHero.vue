<template>
  <div data-aos="fade-in" class="banner-hero-inner">
    <div class="text-center">
      <h1 class="display-1">{{ title }}</h1>
      <h2>{{ subTitle }}</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: "BannerHero",
  props: {
    title: {
      type: String,
      reuqired: true,
    },
    subTitle: {
      type: String,
      reuqired: true,
    },
  },
};
</script>
