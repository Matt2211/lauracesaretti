<template>
  <div>
    <Header />
    <BannerHero
      title="Contatti"
      subTitle="Sarò lieta di rispondere alle tue domande"
    />
   
    <div class="d-flex align-items-center justify-content-center">
      <Contacts optionsEnabled />
    </div>

   

    <!-- <Related categoryName="" data-aos="zoom-in" /> -->
    <Footer />
  </div>
</template>

<script>
export default {
  name: "contatti",
  head: {
    title: "Contatti - Laura Cesaretti - Portrait Photograpy Roma",
  },
};
</script>
