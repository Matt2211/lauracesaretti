<template>
  <div>
     <Header />
    <div class="banner-hero-inner">
      <div class="text-center">
        <h1 class="display-1">Galleria</h1>
        <h2>Dobbiamo scrivere qualcosa qui d'impatto</h2>
      </div>
    </div>

   
 


<div class="container">
    <div class="gallery">
      <div class="gallery-img" v-for="(image, imageIndex) in images"
        :key="imageIndex"
        @click="index = imageIndex">
         <img :src="image.url" class="img-fluid rounded" :alt="image.title" />
      </div>
    </div>
</div>

   
    <no-ssr>
      <LightGallery
        :images="images"
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
  data: function() {
    return {
      images: [
         
        {
          url: `${require(`~/assets/images/Galleria/Maternità_Fine_Art/01_laura_cesaretti_servizio_fotografico_maternità_roma_fineart.jpg`)}`,
          category: "MaternitaFineArt"
        },
        {
          url: `${require(`~/assets/images/Galleria/Maternità_Fine_Art/02_laura_cesaretti_servizio_fotografico_maternità_roma_fineart.jpg`)}`,
          category: "MaternitaFineArt"
        },
        {
          url: `${require(`~/assets/images/Galleria/Maternità_Fine_Art/03_laura_cesaretti_servizio_fotografico_maternità_roma_fineart.jpg`)}`,
          category: "MaternitaFineArt"
        },
        {
          url: `${require(`~/assets/images/Galleria/Maternità_Fine_Art/04_laura_cesaretti_servizio_fotografico_maternità_roma_fineart.jpg`)}`,
          category: "MaternitaFineArt"
        },
        {
          url: `${require(`~/assets/images/Galleria/Maternità_Fine_Art/05_laura_cesaretti_servizio_fotografico_maternità_roma_fineart.jpg`)}`,
          category: "MaternitaFineArt"
        },
        {
          url: `${require(`~/assets/images/Galleria/Maternità_Fine_Art/06_laura_cesaretti_servizio_fotografico_maternità_roma_fineart.jpg`)}`,
          category: "MaternitaFineArt"
        },
        {
          url: `${require(`~/assets/images/Galleria/Maternità_Fine_Art/07_laura_cesaretti_servizio_fotografico_maternità_roma_fineart.jpg`)}`,
          category: "MaternitaFineArt"
        },
        {
          url: `${require(`~/assets/images/Galleria/Maternità_Fine_Art/08_laura_cesaretti_servizio_fotografico_maternità_roma_fineart.jpg`)}`,
          category: "MaternitaFineArt"
        },
        {
          url: `${require(`~/assets/images/Galleria/Maternità_Fine_Art/09_laura_cesaretti_servizio_fotografico_maternità_roma_fineart.jpg`)}`,
          category: "MaternitaFineArt"
        },
        {
          url: `${require(`~/assets/images/Galleria/Maternità_Fine_Art/10_laura_cesaretti_servizio_fotografico_maternità_roma_fineart.jpg`)}`,
          category: "MaternitaFineArt"
        },
        {
          url: `${require(`~/assets/images/Galleria/Maternità_Fine_Art/11_laura_cesaretti_servizio_fotografico_maternità_roma_fineart.jpg`)}`,
          category: "MaternitaFineArt"
        },
        {
          url: `${require(`~/assets/images/Galleria/Maternità_Fine_Art/12_laura_cesaretti_servizio_fotografico_maternità_roma_fineart.jpg`)}`,
          category: "MaternitaFineArt"
        },
        {
          url: `${require(`~/assets/images/Galleria/Maternità_Fine_Art/13_laura_cesaretti_servizio_fotografico_maternità_roma_fineart.jpg`)}`,
          category: "MaternitaFineArt"
        },
        {
          url: `${require(`~/assets/images/Galleria/Maternità_Fine_Art/14_laura_cesaretti_servizio_fotografico_maternità_roma_fineart.jpg`)}`,
          category: "MaternitaFineArt"
        },
        {
          url: `${require(`~/assets/images/Galleria/Maternità_Fine_Art/15_laura_cesaretti_servizio_fotografico_maternità_roma_fineart.jpg`)}`,
          category: "MaternitaFineArt"
        },
        {
          url: `${require(`~/assets/images/Galleria/Maternità_Fine_Art/16_laura_cesaretti_servizio_fotografico_maternità_roma_fineart.jpg`)}`,
          category: "MaternitaFineArt"
        },
        {
          url: `${require(`~/assets/images/Galleria/Maternità_Fine_Art/17_laura_cesaretti_servizio_fotografico_maternità_roma_fineart.jpg`)}`,
          category: "MaternitaFineArt"
        },
        {
          url: `${require(`~/assets/images/Galleria/Maternità_Fine_Art/18_laura_cesaretti_servizio_fotografico_maternità_roma_fineart.jpg`)}`,
          category: "MaternitaFineArt"
        },
        {
          url: `${require(`~/assets/images/Galleria/Maternità_Fine_Art/19_laura_cesaretti_servizio_fotografico_maternità_roma_fineart.jpg`)}`,
          category: "MaternitaFineArt"
        },
        {
          url: `${require(`~/assets/images/Galleria/Maternità_Fine_Art/20_laura_cesaretti_servizio_fotografico_maternità_roma_fineart.jpg`)}`,
          category: "MaternitaFineArt"
        },
        {
          url: `${require(`~/assets/images/Galleria/Maternità_Fine_Art/21_laura_cesaretti_servizio_fotografico_maternità_roma_fineart.jpg`)}`,
          category: "MaternitaFineArt"
        },
        {
          url: `${require(`~/assets/images/Galleria/Maternità_Fine_Art/22_laura_cesaretti_servizio_fotografico_maternità_roma_fineart.jpg`)}`,
          category: "MaternitaFineArt"
        },
        {
          url: `${require(`~/assets/images/Galleria/Maternità_Fine_Art/23_laura_cesaretti_servizio_fotografico_maternità_roma_fineart.jpg`)}`,
          category: "MaternitaFineArt"
        },
        {
          url: `${require(`~/assets/images/Galleria/Maternità_Fine_Art/24_laura_cesaretti_servizio_fotografico_maternità_roma_fineart.jpg`)}`,
          category: "MaternitaFineArt"
        },
        {
          url: `${require(`~/assets/images/Galleria/Maternità_Fine_Art/25_laura_cesaretti_servizio_fotografico_maternità_roma_fineart.jpg`)}`,
          category: "MaternitaFineArt"
        },
        {
          url: `${require(`~/assets/images/Galleria/Maternità_Fine_Art/26_laura_cesaretti_servizio_fotografico_maternità_roma_fineart.jpg`)}`,
          category: "MaternitaFineArt"
        },
        {
          url: `${require(`~/assets/images/Galleria/Maternità_Fine_Art/27_laura_cesaretti_servizio_fotografico_maternità_roma_fineart.jpg`)}`,
          category: "MaternitaFineArt"
        },
        {
          url: `${require(`~/assets/images/Galleria/Maternità_Fine_Art/28_laura_cesaretti_servizio_fotografico_maternità_roma_fineart.jpg`)}`,
          category: "MaternitaFineArt"
        },
        {
          url: `${require(`~/assets/images/Galleria/Maternità_Fine_Art/29_laura_cesaretti_servizio_fotografico_maternità_roma_fineart.jpg`)}`,
          category: "MaternitaFineArt"
        },
        {
          url: `${require(`~/assets/images/Galleria/Maternità_Fine_Art/30_laura_cesaretti_servizio_fotografico_maternità_roma_fineart.jpg`)}`,
          category: "MaternitaFineArt"
        },
        {
          url: `${require(`~/assets/images/Galleria/Maternità_Fine_Art/31_laura_cesaretti_servizio_fotografico_maternità_roma_fineart.jpg`)}`,
          category: "MaternitaFineArt"
        },
        {
          url: `${require(`~/assets/images/Galleria/Maternità_Fine_Art/32_laura_cesaretti_servizio_fotografico_maternità_roma_fineart.jpg`)}`,
          category: "MaternitaFineArt"
        },
        {
          url: `${require(`~/assets/images/Galleria/Maternità_Fine_Art/33_laura_cesaretti_servizio_fotografico_maternità_roma_fineart.jpg`)}`,
          category: "MaternitaFineArt"
        },
        {
          url: `${require(`~/assets/images/Galleria/Maternità_Fine_Art/34_laura_cesaretti_servizio_fotografico_maternità_roma_fineart.jpg`)}`,
          category: "MaternitaFineArt"
        },
        {
          url: `${require(`~/assets/images/Galleria/Maternità_Fine_Art/35_laura_cesaretti_servizio_fotografico_maternità_roma_fineart.jpg`)}`,
          category: "MaternitaFineArt"
        },
        {
          url: `${require(`~/assets/images/Galleria/Maternità_Fine_Art/36_laura_cesaretti_servizio_fotografico_maternità_roma_fineart.jpg`)}`,
          category: "MaternitaFineArt"
        },
        {
          url: `${require(`~/assets/images/Galleria/Maternità_Fine_Art/37_laura_cesaretti_servizio_fotografico_maternità_roma_fineart.jpg`)}`,
          category: "MaternitaFineArt"
        },
        {
          url: `${require(`~/assets/images/Galleria/Maternità_Fine_Art/38_laura_cesaretti_servizio_fotografico_maternità_roma_fineart.jpg`)}`,
          category: "MaternitaFineArt"
        },
        {
          url: `${require(`~/assets/images/Galleria/Maternità_Fine_Art/39_laura_cesaretti_servizio_fotografico_maternità_roma_fineart.jpg`)}`,
          category: "MaternitaFineArt"
        },
        {
          url: `${require(`~/assets/images/Galleria/Maternità_Fine_Art/40_laura_cesaretti_servizio_fotografico_maternità_roma_fineart.jpg`)}`,
          category: "MaternitaFineArt"
        },
        {
          url: `${require(`~/assets/images/Galleria/Maternità_Fine_Art/41_laura_cesaretti_servizio_fotografico_maternità_roma_fineart.jpg`)}`,
          category: "MaternitaFineArt"
        },
        {
          url: `${require(`~/assets/images/Galleria/Maternità_Fine_Art/42_laura_cesaretti_servizio_fotografico_maternità_roma_fineart.jpg`)}`,
          category: "MaternitaFineArt"
        },
        {
          url: `${require(`~/assets/images/Galleria/Maternità_Fine_Art/43_laura_cesaretti_servizio_fotografico_maternità_roma_fineart.jpg`)}`,
          category: "MaternitaFineArt"
        },
        {
          url: `${require(`~/assets/images/Galleria/Maternità_Fine_Art/44_laura_cesaretti_servizio_fotografico_maternità_roma_fineart.jpg`)}`,
          category: "MaternitaFineArt"
        },
        {
          url: `${require(`~/assets/images/Galleria/Maternità_Fine_Art/45_laura_cesaretti_servizio_fotografico_maternità_roma_fineart.jpg`)}`,
          category: "MaternitaFineArt"
        },
        {
          url: `${require(`~/assets/images/Galleria/Maternità_Fine_Art/46_laura_cesaretti_servizio_fotografico_maternità_roma_fineart.jpg`)}`,
          category: "MaternitaFineArt"
        },
        {
          url: `${require(`~/assets/images/Galleria/Maternità_Fine_Art/47_laura_cesaretti_servizio_fotografico_maternità_roma_fineart.jpg`)}`,
          category: "MaternitaFineArt"
        },
        {
          url: `${require(`~/assets/images/Galleria/Maternità_Fine_Art/48_laura_cesaretti_servizio_fotografico_maternità_roma_fineart.jpg`)}`,
          category: "MaternitaFineArt"
        },
        {
          url: `${require(`~/assets/images/Galleria/Maternità_Fine_Art/49_laura_cesaretti_servizio_fotografico_maternità_roma_fineart.jpg`)}`,
          category: "MaternitaFineArt"
        },
        {
          url: `${require(`~/assets/images/Galleria/Maternità_Fine_Art/50_laura_cesaretti_servizio_fotografico_maternità_roma_fineart.jpg`)}`,
          category: "MaternitaFineArt"
        },
        {
          url: `${require(`~/assets/images/Galleria/Maternità_Fine_Art/51_laura_cesaretti_servizio_fotografico_maternità_roma_fineart.jpg`)}`,
          category: "MaternitaFineArt"
        },
        {
          url: `${require(`~/assets/images/Galleria/Maternità_Fine_Art/52_laura_cesaretti_servizio_fotografico_maternità_roma_fineart.jpg`)}`,
          category: "MaternitaFineArt"
        },
        {
          url: `${require(`~/assets/images/Galleria/Maternità_Fine_Art/53_laura_cesaretti_servizio_fotografico_maternità_roma_fineart.jpg`)}`,
          category: "MaternitaFineArt"
        },
        {
          url: `${require(`~/assets/images/Galleria/Maternità_Fine_Art/54_laura_cesaretti_servizio_fotografico_maternità_roma_fineart.jpg`)}`,
          category: "MaternitaFineArt"
        },
        {
          url: `${require(`~/assets/images/Galleria/Maternità_Fine_Art/55_laura_cesaretti_servizio_fotografico_maternità_roma_fineart.jpg`)}`,
          category: "MaternitaFineArt"
        },
        {
          url: `${require(`~/assets/images/Galleria/Maternità_Fine_Art/56_laura_cesaretti_servizio_fotografico_maternità_roma_fineart.jpg`)}`,
          category: "MaternitaFineArt"
        },
        {
          url: `${require(`~/assets/images/Galleria/Maternità_Fine_Art/57_laura_cesaretti_servizio_fotografico_maternità_roma_fineart.jpg`)}`,
          category: "MaternitaFineArt"
        },
        {
          url: `${require(`~/assets/images/Galleria/Maternità_Fine_Art/58_laura_cesaretti_servizio_fotografico_maternità_roma_fineart.jpg`)}`,
          category: "MaternitaFineArt"
        },
        {
          url: `${require(`~/assets/images/Galleria/Maternità_Fine_Art/59_laura_cesaretti_servizio_fotografico_maternità_roma_fineart.jpg`)}`,
          category: "MaternitaFineArt"
        },
        {
          url: `${require(`~/assets/images/Galleria/Maternità_Fine_Art/60_laura_cesaretti_servizio_fotografico_maternità_roma_fineart.jpg`)}`,
          category: "MaternitaFineArt"
        },
        {
          url: `${require(`~/assets/images/Galleria/Maternità_Fine_Art/61_laura_cesaretti_servizio_fotografico_maternità_roma_fineart.jpg`)}`,
          category: "MaternitaFineArt"
        },
        {
          url: `${require(`~/assets/images/Galleria/Maternità_Fine_Art/62_laura_cesaretti_servizio_fotografico_maternità_roma_fineart.jpg`)}`,
          category: "MaternitaFineArt"
        },
        {
          url: `${require(`~/assets/images/Galleria/Maternità_Fine_Art/63_laura_cesaretti_servizio_fotografico_maternità_roma_fineart.jpg`)}`,
          category: "MaternitaFineArt"
        },
        {
          url: `${require(`~/assets/images/Galleria/Maternità_Fine_Art/64_laura_cesaretti_servizio_fotografico_maternità_roma_fineart.jpg`)}`,
          category: "MaternitaFineArt"
        },
        {
          url: `${require(`~/assets/images/Galleria/Maternità_Fine_Art/65_laura_cesaretti_servizio_fotografico_maternità_roma_fineart.jpg`)}`,
          category: "MaternitaFineArt"
        },
        {
          url: `${require(`~/assets/images/Galleria/Maternità_Fine_Art/66_laura_cesaretti_servizio_fotografico_maternità_roma_fineart.jpg`)}`,
          category: "MaternitaFineArt"
        },
        {
          url: `${require(`~/assets/images/Galleria/Maternità_Fine_Art/67_laura_cesaretti_servizio_fotografico_maternità_roma_fineart.jpg`)}`,
          category: "MaternitaFineArt"
        },
        {
          url: `${require(`~/assets/images/Galleria/Maternità_Fine_Art/68_laura_cesaretti_servizio_fotografico_maternità_roma_fineart.jpg`)}`,
          category: "MaternitaFineArt"
        },
        {
          url: `${require(`~/assets/images/Galleria/Maternità_Fine_Art/69_laura_cesaretti_servizio_fotografico_maternità_roma_fineart.jpg`)}`,
          category: "MaternitaFineArt"
        },
        {
          url: `${require(`~/assets/images/Galleria/Maternità_Fine_Art/70_laura_cesaretti_servizio_fotografico_maternità_roma_fineart.jpg`)}`,
          category: "MaternitaFineArt"
        },
        {
          url: `${require(`~/assets/images/Galleria/Maternità_Fine_Art/71_laura_cesaretti_servizio_fotografico_maternità_roma_fineart.jpg`)}`,
          category: "MaternitaFineArt"
        },
        {
          url: `${require(`~/assets/images/Galleria/Maternità_Fine_Art/72_laura_cesaretti_servizio_fotografico_maternità_roma_fineart.jpg`)}`,
          category: "MaternitaFineArt"
        },
       
      ],
      index: null,
    };
  }
};
</script>
