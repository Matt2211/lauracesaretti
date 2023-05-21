<template>
  <div>
    <BannerHero
      title="Neonato"
      subTitle="Saranno cosi piccoli una sola volta"
    />

    <ServiceSection service="Neonato" />
    <Quote service="Neonato" categoryName="Neonato" />


     <RelatedGallery categoryImage="Neonato" />
  

    <Related categoryName="neonato" data-aos="zoom-in" />
  </div>
</template>

<script>
export default {
  name: "neonato",
  layout: "services",
  head: {
    title: "Neonato - Laura Cesaretti - Servizi Fotografici Roma",
  },
};
</script>
