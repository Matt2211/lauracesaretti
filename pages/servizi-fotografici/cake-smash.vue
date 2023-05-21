<template>
  <div>
    <BannerHero title="Cake Smash" subTitle="È ora di sporcarsi un po!" />

    <ServiceSection service="CakeSmash" />
    <Quote service="CakeSmash" categoryName="Cake Smash" />

    <RelatedGallery categoryImage="CakeSmash" />

    <Related categoryName="cakeSmash" data-aos="zoom-in" />
  </div>
</template>

<script>
export default {
  name: "Cake-smash",
  layout: "services",
  head: {
    title: "Cake Smash - Laura Cesaretti - Servizi Fotografici Roma",
  },
};
</script>
