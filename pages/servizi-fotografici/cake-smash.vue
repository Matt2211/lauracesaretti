<template>
  <div>
    <BannerHero title="Cake Smash" subTitle="È ora di sporcarsi un po!" />
    
    <ServiceSection service="CakeSmash" />

    <RelatedGallery categoryImage="CakeSmash" />

    <Quote categoryName="Cake Smash" data-aos="zoom-in" />

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
