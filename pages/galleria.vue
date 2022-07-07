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
        <div
          class="gallery-img"
          v-for="(image, imageIndex) in images"
          :key="imageIndex"
          @click="index = imageIndex"
        >
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
  data: function () {
    return {
      images: [
        // FineArt

        {
          url: `${require(`~/assets/images/Galleria/Maternità_Fine_Art/01_laura_cesaretti_servizio_fotografico_maternità_roma_fineart.jpg`)}`,
          category: "FineArt",
        },
        {
          url: `${require(`~/assets/images/Galleria/Maternità_Fine_Art/02_laura_cesaretti_servizio_fotografico_maternità_roma_fineart.jpg`)}`,
          category: "FineArt",
        },
        {
          url: `${require(`~/assets/images/Galleria/Maternità_Fine_Art/03_laura_cesaretti_servizio_fotografico_maternità_roma_fineart.jpg`)}`,
          category: "FineArt",
        },
        {
          url: `${require(`~/assets/images/Galleria/Maternità_Fine_Art/04_laura_cesaretti_servizio_fotografico_maternità_roma_fineart.jpg`)}`,
          category: "FineArt",
        },
        {
          url: `${require(`~/assets/images/Galleria/Maternità_Fine_Art/05_laura_cesaretti_servizio_fotografico_maternità_roma_fineart.jpg`)}`,
          category: "FineArt",
        },
        {
          url: `${require(`~/assets/images/Galleria/Maternità_Fine_Art/06_laura_cesaretti_servizio_fotografico_maternità_roma_fineart.jpg`)}`,
          category: "FineArt",
        },
        {
          url: `${require(`~/assets/images/Galleria/Maternità_Fine_Art/07_laura_cesaretti_servizio_fotografico_maternità_roma_fineart.jpg`)}`,
          category: "FineArt",
        },
        {
          url: `${require(`~/assets/images/Galleria/Maternità_Fine_Art/08_laura_cesaretti_servizio_fotografico_maternità_roma_fineart.jpg`)}`,
          category: "FineArt",
        },
        {
          url: `${require(`~/assets/images/Galleria/Maternità_Fine_Art/09_laura_cesaretti_servizio_fotografico_maternità_roma_fineart.jpg`)}`,
          category: "FineArt",
        },
        {
          url: `${require(`~/assets/images/Galleria/Maternità_Fine_Art/10_laura_cesaretti_servizio_fotografico_maternità_roma_fineart.jpg`)}`,
          category: "FineArt",
        },
        {
          url: `${require(`~/assets/images/Galleria/Maternità_Fine_Art/11_laura_cesaretti_servizio_fotografico_maternità_roma_fineart.jpg`)}`,
          category: "FineArt",
        },
        {
          url: `${require(`~/assets/images/Galleria/Maternità_Fine_Art/12_laura_cesaretti_servizio_fotografico_maternità_roma_fineart.jpg`)}`,
          category: "FineArt",
        },
        {
          url: `${require(`~/assets/images/Galleria/Maternità_Fine_Art/13_laura_cesaretti_servizio_fotografico_maternità_roma_fineart.jpg`)}`,
          category: "FineArt",
        },
        {
          url: `${require(`~/assets/images/Galleria/Maternità_Fine_Art/14_laura_cesaretti_servizio_fotografico_maternità_roma_fineart.jpg`)}`,
          category: "FineArt",
        },
        {
          url: `${require(`~/assets/images/Galleria/Maternità_Fine_Art/15_laura_cesaretti_servizio_fotografico_maternità_roma_fineart.jpg`)}`,
          category: "FineArt",
        },
        {
          url: `${require(`~/assets/images/Galleria/Maternità_Fine_Art/16_laura_cesaretti_servizio_fotografico_maternità_roma_fineart.jpg`)}`,
          category: "FineArt",
        },
        {
          url: `${require(`~/assets/images/Galleria/Maternità_Fine_Art/17_laura_cesaretti_servizio_fotografico_maternità_roma_fineart.jpg`)}`,
          category: "FineArt",
        },
        {
          url: `${require(`~/assets/images/Galleria/Maternità_Fine_Art/18_laura_cesaretti_servizio_fotografico_maternità_roma_fineart.jpg`)}`,
          category: "FineArt",
        },
        {
          url: `${require(`~/assets/images/Galleria/Maternità_Fine_Art/19_laura_cesaretti_servizio_fotografico_maternità_roma_fineart.jpg`)}`,
          category: "FineArt",
        },
        {
          url: `${require(`~/assets/images/Galleria/Maternità_Fine_Art/20_laura_cesaretti_servizio_fotografico_maternità_roma_fineart.jpg`)}`,
          category: "FineArt",
        },
        {
          url: `${require(`~/assets/images/Galleria/Maternità_Fine_Art/21_laura_cesaretti_servizio_fotografico_maternità_roma_fineart.jpg`)}`,
          category: "FineArt",
        },
        {
          url: `${require(`~/assets/images/Galleria/Maternità_Fine_Art/22_laura_cesaretti_servizio_fotografico_maternità_roma_fineart.jpg`)}`,
          category: "FineArt",
        },
        {
          url: `${require(`~/assets/images/Galleria/Maternità_Fine_Art/23_laura_cesaretti_servizio_fotografico_maternità_roma_fineart.jpg`)}`,
          category: "FineArt",
        },
        {
          url: `${require(`~/assets/images/Galleria/Maternità_Fine_Art/24_laura_cesaretti_servizio_fotografico_maternità_roma_fineart.jpg`)}`,
          category: "FineArt",
        },
        {
          url: `${require(`~/assets/images/Galleria/Maternità_Fine_Art/25_laura_cesaretti_servizio_fotografico_maternità_roma_fineart.jpg`)}`,
          category: "FineArt",
        },
        {
          url: `${require(`~/assets/images/Galleria/Maternità_Fine_Art/26_laura_cesaretti_servizio_fotografico_maternità_roma_fineart.jpg`)}`,
          category: "FineArt",
        },
        {
          url: `${require(`~/assets/images/Galleria/Maternità_Fine_Art/27_laura_cesaretti_servizio_fotografico_maternità_roma_fineart.jpg`)}`,
          category: "FineArt",
        },
        {
          url: `${require(`~/assets/images/Galleria/Maternità_Fine_Art/28_laura_cesaretti_servizio_fotografico_maternità_roma_fineart.jpg`)}`,
          category: "FineArt",
        },
        {
          url: `${require(`~/assets/images/Galleria/Maternità_Fine_Art/29_laura_cesaretti_servizio_fotografico_maternità_roma_fineart.jpg`)}`,
          category: "FineArt",
        },
        {
          url: `${require(`~/assets/images/Galleria/Maternità_Fine_Art/30_laura_cesaretti_servizio_fotografico_maternità_roma_fineart.jpg`)}`,
          category: "FineArt",
        },
        {
          url: `${require(`~/assets/images/Galleria/Maternità_Fine_Art/31_laura_cesaretti_servizio_fotografico_maternità_roma_fineart.jpg`)}`,
          category: "FineArt",
        },
        {
          url: `${require(`~/assets/images/Galleria/Maternità_Fine_Art/32_laura_cesaretti_servizio_fotografico_maternità_roma_fineart.jpg`)}`,
          category: "FineArt",
        },
        {
          url: `${require(`~/assets/images/Galleria/Maternità_Fine_Art/33_laura_cesaretti_servizio_fotografico_maternità_roma_fineart.jpg`)}`,
          category: "FineArt",
        },
        {
          url: `${require(`~/assets/images/Galleria/Maternità_Fine_Art/34_laura_cesaretti_servizio_fotografico_maternità_roma_fineart.jpg`)}`,
          category: "FineArt",
        },
        {
          url: `${require(`~/assets/images/Galleria/Maternità_Fine_Art/35_laura_cesaretti_servizio_fotografico_maternità_roma_fineart.jpg`)}`,
          category: "FineArt",
        },
        {
          url: `${require(`~/assets/images/Galleria/Maternità_Fine_Art/36_laura_cesaretti_servizio_fotografico_maternità_roma_fineart.jpg`)}`,
          category: "FineArt",
        },
        {
          url: `${require(`~/assets/images/Galleria/Maternità_Fine_Art/37_laura_cesaretti_servizio_fotografico_maternità_roma_fineart.jpg`)}`,
          category: "FineArt",
        },
        {
          url: `${require(`~/assets/images/Galleria/Maternità_Fine_Art/38_laura_cesaretti_servizio_fotografico_maternità_roma_fineart.jpg`)}`,
          category: "FineArt",
        },
        {
          url: `${require(`~/assets/images/Galleria/Maternità_Fine_Art/39_laura_cesaretti_servizio_fotografico_maternità_roma_fineart.jpg`)}`,
          category: "FineArt",
        },
        {
          url: `${require(`~/assets/images/Galleria/Maternità_Fine_Art/40_laura_cesaretti_servizio_fotografico_maternità_roma_fineart.jpg`)}`,
          category: "FineArt",
        },
        {
          url: `${require(`~/assets/images/Galleria/Maternità_Fine_Art/41_laura_cesaretti_servizio_fotografico_maternità_roma_fineart.jpg`)}`,
          category: "FineArt",
        },
        {
          url: `${require(`~/assets/images/Galleria/Maternità_Fine_Art/42_laura_cesaretti_servizio_fotografico_maternità_roma_fineart.jpg`)}`,
          category: "FineArt",
        },
        {
          url: `${require(`~/assets/images/Galleria/Maternità_Fine_Art/43_laura_cesaretti_servizio_fotografico_maternità_roma_fineart.jpg`)}`,
          category: "FineArt",
        },
        {
          url: `${require(`~/assets/images/Galleria/Maternità_Fine_Art/44_laura_cesaretti_servizio_fotografico_maternità_roma_fineart.jpg`)}`,
          category: "FineArt",
        },
        {
          url: `${require(`~/assets/images/Galleria/Maternità_Fine_Art/45_laura_cesaretti_servizio_fotografico_maternità_roma_fineart.jpg`)}`,
          category: "FineArt",
        },
        {
          url: `${require(`~/assets/images/Galleria/Maternità_Fine_Art/46_laura_cesaretti_servizio_fotografico_maternità_roma_fineart.jpg`)}`,
          category: "FineArt",
        },
        {
          url: `${require(`~/assets/images/Galleria/Maternità_Fine_Art/47_laura_cesaretti_servizio_fotografico_maternità_roma_fineart.jpg`)}`,
          category: "FineArt",
        },
        {
          url: `${require(`~/assets/images/Galleria/Maternità_Fine_Art/48_laura_cesaretti_servizio_fotografico_maternità_roma_fineart.jpg`)}`,
          category: "FineArt",
        },
        {
          url: `${require(`~/assets/images/Galleria/Maternità_Fine_Art/49_laura_cesaretti_servizio_fotografico_maternità_roma_fineart.jpg`)}`,
          category: "FineArt",
        },
        {
          url: `${require(`~/assets/images/Galleria/Maternità_Fine_Art/50_laura_cesaretti_servizio_fotografico_maternità_roma_fineart.jpg`)}`,
          category: "FineArt",
        },
        {
          url: `${require(`~/assets/images/Galleria/Maternità_Fine_Art/51_laura_cesaretti_servizio_fotografico_maternità_roma_fineart.jpg`)}`,
          category: "FineArt",
        },
        {
          url: `${require(`~/assets/images/Galleria/Maternità_Fine_Art/52_laura_cesaretti_servizio_fotografico_maternità_roma_fineart.jpg`)}`,
          category: "FineArt",
        },
        {
          url: `${require(`~/assets/images/Galleria/Maternità_Fine_Art/53_laura_cesaretti_servizio_fotografico_maternità_roma_fineart.jpg`)}`,
          category: "FineArt",
        },
        {
          url: `${require(`~/assets/images/Galleria/Maternità_Fine_Art/54_laura_cesaretti_servizio_fotografico_maternità_roma_fineart.jpg`)}`,
          category: "FineArt",
        },
        {
          url: `${require(`~/assets/images/Galleria/Maternità_Fine_Art/55_laura_cesaretti_servizio_fotografico_maternità_roma_fineart.jpg`)}`,
          category: "FineArt",
        },
        {
          url: `${require(`~/assets/images/Galleria/Maternità_Fine_Art/56_laura_cesaretti_servizio_fotografico_maternità_roma_fineart.jpg`)}`,
          category: "FineArt",
        },
        {
          url: `${require(`~/assets/images/Galleria/Maternità_Fine_Art/57_laura_cesaretti_servizio_fotografico_maternità_roma_fineart.jpg`)}`,
          category: "FineArt",
        },
        {
          url: `${require(`~/assets/images/Galleria/Maternità_Fine_Art/58_laura_cesaretti_servizio_fotografico_maternità_roma_fineart.jpg`)}`,
          category: "FineArt",
        },
        {
          url: `${require(`~/assets/images/Galleria/Maternità_Fine_Art/59_laura_cesaretti_servizio_fotografico_maternità_roma_fineart.jpg`)}`,
          category: "FineArt",
        },
        {
          url: `${require(`~/assets/images/Galleria/Maternità_Fine_Art/60_laura_cesaretti_servizio_fotografico_maternità_roma_fineart.jpg`)}`,
          category: "FineArt",
        },
        {
          url: `${require(`~/assets/images/Galleria/Maternità_Fine_Art/61_laura_cesaretti_servizio_fotografico_maternità_roma_fineart.jpg`)}`,
          category: "FineArt",
        },
        {
          url: `${require(`~/assets/images/Galleria/Maternità_Fine_Art/62_laura_cesaretti_servizio_fotografico_maternità_roma_fineart.jpg`)}`,
          category: "FineArt",
        },
        {
          url: `${require(`~/assets/images/Galleria/Maternità_Fine_Art/63_laura_cesaretti_servizio_fotografico_maternità_roma_fineart.jpg`)}`,
          category: "FineArt",
        },
        {
          url: `${require(`~/assets/images/Galleria/Maternità_Fine_Art/64_laura_cesaretti_servizio_fotografico_maternità_roma_fineart.jpg`)}`,
          category: "FineArt",
        },
        {
          url: `${require(`~/assets/images/Galleria/Maternità_Fine_Art/65_laura_cesaretti_servizio_fotografico_maternità_roma_fineart.jpg`)}`,
          category: "FineArt",
        },
        {
          url: `${require(`~/assets/images/Galleria/Maternità_Fine_Art/66_laura_cesaretti_servizio_fotografico_maternità_roma_fineart.jpg`)}`,
          category: "FineArt",
        },
        {
          url: `${require(`~/assets/images/Galleria/Maternità_Fine_Art/67_laura_cesaretti_servizio_fotografico_maternità_roma_fineart.jpg`)}`,
          category: "FineArt",
        },
        {
          url: `${require(`~/assets/images/Galleria/Maternità_Fine_Art/68_laura_cesaretti_servizio_fotografico_maternità_roma_fineart.jpg`)}`,
          category: "FineArt",
        },
        {
          url: `${require(`~/assets/images/Galleria/Maternità_Fine_Art/69_laura_cesaretti_servizio_fotografico_maternità_roma_fineart.jpg`)}`,
          category: "FineArt",
        },
        {
          url: `${require(`~/assets/images/Galleria/Maternità_Fine_Art/70_laura_cesaretti_servizio_fotografico_maternità_roma_fineart.jpg`)}`,
          category: "FineArt",
        },
        {
          url: `${require(`~/assets/images/Galleria/Maternità_Fine_Art/71_laura_cesaretti_servizio_fotografico_maternità_roma_fineart.jpg`)}`,
          category: "FineArt",
        },
        {
          url: `${require(`~/assets/images/Galleria/Maternità_Fine_Art/72_laura_cesaretti_servizio_fotografico_maternità_roma_fineart.jpg`)}`,
          category: "FineArt",
        },

        // Lifestyle

        {
          url: `${require(`~/assets/images/Galleria/Maternità_Lifestyle/01_laura_cesaretti_servizio_fotografico_maternità_lifestyle_roma.jpg`)}`,
          category: "Lifestyle",
        },
        {
          url: `${require(`~/assets/images/Galleria/Maternità_Lifestyle/02_laura_cesaretti_servizio_fotografico_maternità_lifestyle_roma.jpg`)}`,
          category: "Lifestyle",
        },
        {
          url: `${require(`~/assets/images/Galleria/Maternità_Lifestyle/03_laura_cesaretti_servizio_fotografico_maternità_lifestyle_roma.jpg`)}`,
          category: "Lifestyle",
        },
        {
          url: `${require(`~/assets/images/Galleria/Maternità_Lifestyle/04_laura_cesaretti_servizio_fotografico_maternità_lifestyle_roma.jpg`)}`,
          category: "Lifestyle",
        },
        {
          url: `${require(`~/assets/images/Galleria/Maternità_Lifestyle/05_laura_cesaretti_servizio_fotografico_maternità_lifestyle_roma.jpg`)}`,
          category: "Lifestyle",
        },
        {
          url: `${require(`~/assets/images/Galleria/Maternità_Lifestyle/06_laura_cesaretti_servizio_fotografico_maternità_lifestyle_roma.jpg`)}`,
          category: "Lifestyle",
        },
        {
          url: `${require(`~/assets/images/Galleria/Maternità_Lifestyle/07_laura_cesaretti_servizio_fotografico_maternità_lifestyle_roma.jpg`)}`,
          category: "Lifestyle",
        },
        {
          url: `${require(`~/assets/images/Galleria/Maternità_Lifestyle/08_laura_cesaretti_servizio_fotografico_maternità_lifestyle_roma.jpg`)}`,
          category: "Lifestyle",
        },
        {
          url: `${require(`~/assets/images/Galleria/Maternità_Lifestyle/09_laura_cesaretti_servizio_fotografico_maternità_lifestyle_roma.jpg`)}`,
          category: "Lifestyle",
        },
        {
          url: `${require(`~/assets/images/Galleria/Maternità_Lifestyle/10_laura_cesaretti_servizio_fotografico_maternità_lifestyle_roma.jpg`)}`,
          category: "Lifestyle",
        },
        {
          url: `${require(`~/assets/images/Galleria/Maternità_Lifestyle/11_laura_cesaretti_servizio_fotografico_maternità_lifestyle_roma.jpg`)}`,
          category: "Lifestyle",
        },
        {
          url: `${require(`~/assets/images/Galleria/Maternità_Lifestyle/12_laura_cesaretti_servizio_fotografico_maternità_lifestyle_roma.jpg`)}`,
          category: "Lifestyle",
        },
        {
          url: `${require(`~/assets/images/Galleria/Maternità_Lifestyle/13_laura_cesaretti_servizio_fotografico_maternità_lifestyle_roma.jpg`)}`,
          category: "Lifestyle",
        },
        {
          url: `${require(`~/assets/images/Galleria/Maternità_Lifestyle/14_laura_cesaretti_servizio_fotografico_maternità_lifestyle_roma.jpg`)}`,
          category: "Lifestyle",
        },
        {
          url: `${require(`~/assets/images/Galleria/Maternità_Lifestyle/15_laura_cesaretti_servizio_fotografico_maternità_lifestyle_roma.jpg`)}`,
          category: "Lifestyle",
        },
        {
          url: `${require(`~/assets/images/Galleria/Maternità_Lifestyle/16_laura_cesaretti_servizio_fotografico_maternità_lifestyle_roma.jpg`)}`,
          category: "Lifestyle",
        },
        {
          url: `${require(`~/assets/images/Galleria/Maternità_Lifestyle/17_laura_cesaretti_servizio_fotografico_maternità_lifestyle_roma.jpg`)}`,
          category: "Lifestyle",
        },
        {
          url: `${require(`~/assets/images/Galleria/Maternità_Lifestyle/18_laura_cesaretti_servizio_fotografico_maternità_lifestyle_roma.jpg`)}`,
          category: "Lifestyle",
        },
        {
          url: `${require(`~/assets/images/Galleria/Maternità_Lifestyle/19_laura_cesaretti_servizio_fotografico_maternità_lifestyle_roma.jpg`)}`,
          category: "Lifestyle",
        },
        {
          url: `${require(`~/assets/images/Galleria/Maternità_Lifestyle/20_laura_cesaretti_servizio_fotografico_maternità_lifestyle_roma.jpg`)}`,
          category: "Lifestyle",
        },
        {
          url: `${require(`~/assets/images/Galleria/Maternità_Lifestyle/21_laura_cesaretti_servizio_fotografico_maternità_lifestyle_roma.jpg`)}`,
          category: "Lifestyle",
        },
        {
          url: `${require(`~/assets/images/Galleria/Maternità_Lifestyle/22_laura_cesaretti_servizio_fotografico_maternità_lifestyle_roma.jpg`)}`,
          category: "Lifestyle",
        },
        {
          url: `${require(`~/assets/images/Galleria/Maternità_Lifestyle/23_laura_cesaretti_servizio_fotografico_maternità_lifestyle_roma.jpg`)}`,
          category: "Lifestyle",
        },
        {
          url: `${require(`~/assets/images/Galleria/Maternità_Lifestyle/24_laura_cesaretti_servizio_fotografico_maternità_lifestyle_roma.jpg`)}`,
          category: "Lifestyle",
        },
        {
          url: `${require(`~/assets/images/Galleria/Maternità_Lifestyle/25_laura_cesaretti_servizio_fotografico_maternità_lifestyle_roma.jpg`)}`,
          category: "Lifestyle",
        },
        {
          url: `${require(`~/assets/images/Galleria/Maternità_Lifestyle/26_laura_cesaretti_servizio_fotografico_maternità_lifestyle_roma.jpg`)}`,
          category: "Lifestyle",
        },
        {
          url: `${require(`~/assets/images/Galleria/Maternità_Lifestyle/27_laura_cesaretti_servizio_fotografico_maternità_lifestyle_roma.jpg`)}`,
          category: "Lifestyle",
        },
        {
          url: `${require(`~/assets/images/Galleria/Maternità_Lifestyle/28_laura_cesaretti_servizio_fotografico_maternità_lifestyle_roma.jpg`)}`,
          category: "Lifestyle",
        },
        {
          url: `${require(`~/assets/images/Galleria/Maternità_Lifestyle/29_laura_cesaretti_servizio_fotografico_maternità_lifestyle_roma.jpg`)}`,
          category: "Lifestyle",
        },
        {
          url: `${require(`~/assets/images/Galleria/Maternità_Lifestyle/30_laura_cesaretti_servizio_fotografico_maternità_lifestyle_roma.jpg`)}`,
          category: "Lifestyle",
        },
        {
          url: `${require(`~/assets/images/Galleria/Maternità_Lifestyle/31_laura_cesaretti_servizio_fotografico_maternità_lifestyle_roma.jpg`)}`,
          category: "Lifestyle",
        },
        {
          url: `${require(`~/assets/images/Galleria/Maternità_Lifestyle/32_laura_cesaretti_servizio_fotografico_maternità_lifestyle_roma.jpg`)}`,
          category: "Lifestyle",
        },
        {
          url: `${require(`~/assets/images/Galleria/Maternità_Lifestyle/33_laura_cesaretti_servizio_fotografico_maternità_lifestyle_roma.jpg`)}`,
          category: "Lifestyle",
        },
        {
          url: `${require(`~/assets/images/Galleria/Maternità_Lifestyle/34_laura_cesaretti_servizio_fotografico_maternità_lifestyle_roma.jpg`)}`,
          category: "Lifestyle",
        },
        {
          url: `${require(`~/assets/images/Galleria/Maternità_Lifestyle/35_laura_cesaretti_servizio_fotografico_maternità_lifestyle_roma.jpg`)}`,
          category: "Lifestyle",
        },
        {
          url: `${require(`~/assets/images/Galleria/Maternità_Lifestyle/36_laura_cesaretti_servizio_fotografico_maternità_lifestyle_roma.jpg`)}`,
          category: "Lifestyle",
        },
        {
          url: `${require(`~/assets/images/Galleria/Maternità_Lifestyle/37_laura_cesaretti_servizio_fotografico_maternità_lifestyle_roma.jpg`)}`,
          category: "Lifestyle",
        },
        {
          url: `${require(`~/assets/images/Galleria/Maternità_Lifestyle/38_laura_cesaretti_servizio_fotografico_maternità_lifestyle_roma.jpg`)}`,
          category: "Lifestyle",
        },
        {
          url: `${require(`~/assets/images/Galleria/Maternità_Lifestyle/39_laura_cesaretti_servizio_fotografico_maternità_lifestyle_roma.jpg`)}`,
          category: "Lifestyle",
        },
        {
          url: `${require(`~/assets/images/Galleria/Maternità_Lifestyle/40_laura_cesaretti_servizio_fotografico_maternità_lifestyle_roma.jpg`)}`,
          category: "Lifestyle",
        },
        {
          url: `${require(`~/assets/images/Galleria/Maternità_Lifestyle/41_laura_cesaretti_servizio_fotografico_maternità_lifestyle_roma.jpg`)}`,
          category: "Lifestyle",
        },
        {
          url: `${require(`~/assets/images/Galleria/Maternità_Lifestyle/42_laura_cesaretti_servizio_fotografico_maternità_lifestyle_roma.jpg`)}`,
          category: "Lifestyle",
        },
        {
          url: `${require(`~/assets/images/Galleria/Maternità_Lifestyle/43_laura_cesaretti_servizio_fotografico_maternità_lifestyle_roma.jpg`)}`,
          category: "Lifestyle",
        },
        {
          url: `${require(`~/assets/images/Galleria/Maternità_Lifestyle/44_laura_cesaretti_servizio_fotografico_maternità_lifestyle_roma.jpg`)}`,
          category: "Lifestyle",
        },
        {
          url: `${require(`~/assets/images/Galleria/Maternità_Lifestyle/45_laura_cesaretti_servizio_fotografico_maternità_lifestyle_roma.jpg`)}`,
          category: "Lifestyle",
        },
        {
          url: `${require(`~/assets/images/Galleria/Maternità_Lifestyle/46_laura_cesaretti_servizio_fotografico_maternità_lifestyle_roma.jpg`)}`,
          category: "Lifestyle",
        },
        {
          url: `${require(`~/assets/images/Galleria/Maternità_Lifestyle/47_laura_cesaretti_servizio_fotografico_maternità_lifestyle_roma.jpg`)}`,
          category: "Lifestyle",
        },
        {
          url: `${require(`~/assets/images/Galleria/Maternità_Lifestyle/48_laura_cesaretti_servizio_fotografico_maternità_lifestyle_roma.jpg`)}`,
          category: "Lifestyle",
        },
        {
          url: `${require(`~/assets/images/Galleria/Maternità_Lifestyle/49_laura_cesaretti_servizio_fotografico_maternità_lifestyle_roma.jpg`)}`,
          category: "Lifestyle",
        },
        {
          url: `${require(`~/assets/images/Galleria/Maternità_Lifestyle/50_laura_cesaretti_servizio_fotografico_maternità_lifestyle_roma.jpg`)}`,
          category: "Lifestyle",
        },
        {
          url: `${require(`~/assets/images/Galleria/Maternità_Lifestyle/51_laura_cesaretti_servizio_fotografico_maternità_lifestyle_roma.jpg`)}`,
          category: "Lifestyle",
        },
        {
          url: `${require(`~/assets/images/Galleria/Maternità_Lifestyle/52_laura_cesaretti_servizio_fotografico_maternità_lifestyle_roma.jpg`)}`,
          category: "Lifestyle",
        },
        {
          url: `${require(`~/assets/images/Galleria/Maternità_Lifestyle/53_laura_cesaretti_servizio_fotografico_maternità_lifestyle_roma.jpg`)}`,
          category: "Lifestyle",
        },
        {
          url: `${require(`~/assets/images/Galleria/Maternità_Lifestyle/54_laura_cesaretti_servizio_fotografico_maternità_lifestyle_roma.jpg`)}`,
          category: "Lifestyle",
        },
        {
          url: `${require(`~/assets/images/Galleria/Maternità_Lifestyle/55_laura_cesaretti_servizio_fotografico_maternità_lifestyle_roma.jpg`)}`,
          category: "Lifestyle",
        },
        {
          url: `${require(`~/assets/images/Galleria/Maternità_Lifestyle/56_laura_cesaretti_servizio_fotografico_maternità_lifestyle_roma.jpg`)}`,
          category: "Lifestyle",
        },
        {
          url: `${require(`~/assets/images/Galleria/Maternità_Lifestyle/57_laura_cesaretti_servizio_fotografico_maternità_lifestyle_roma.jpg`)}`,
          category: "Lifestyle",
        },
        {
          url: `${require(`~/assets/images/Galleria/Maternità_Lifestyle/58_laura_cesaretti_servizio_fotografico_maternità_lifestyle_roma.jpg`)}`,
          category: "Lifestyle",
        },
        {
          url: `${require(`~/assets/images/Galleria/Maternità_Lifestyle/59_laura_cesaretti_servizio_fotografico_maternità_lifestyle_roma.jpg`)}`,
          category: "Lifestyle",
        },
        {
          url: `${require(`~/assets/images/Galleria/Maternità_Lifestyle/60_laura_cesaretti_servizio_fotografico_maternità_lifestyle_roma.jpg`)}`,
          category: "Lifestyle",
        },
        {
          url: `${require(`~/assets/images/Galleria/Maternità_Lifestyle/61_laura_cesaretti_servizio_fotografico_maternità_lifestyle_roma.jpg`)}`,
          category: "Lifestyle",
        },
        {
          url: `${require(`~/assets/images/Galleria/Maternità_Lifestyle/62_laura_cesaretti_servizio_fotografico_maternità_lifestyle_roma.jpg`)}`,
          category: "Lifestyle",
        },
        {
          url: `${require(`~/assets/images/Galleria/Maternità_Lifestyle/63_laura_cesaretti_servizio_fotografico_maternità_lifestyle_roma.jpg`)}`,
          category: "Lifestyle",
        },
        {
          url: `${require(`~/assets/images/Galleria/Maternità_Lifestyle/64_laura_cesaretti_servizio_fotografico_maternità_lifestyle_roma.jpg`)}`,
          category: "Lifestyle",
        },
        {
          url: `${require(`~/assets/images/Galleria/Maternità_Lifestyle/65_laura_cesaretti_servizio_fotografico_maternità_lifestyle_roma.jpg`)}`,
          category: "Lifestyle",
        },
        {
          url: `${require(`~/assets/images/Galleria/Maternità_Lifestyle/66_laura_cesaretti_servizio_fotografico_maternità_lifestyle_roma.jpg`)}`,
          category: "Lifestyle",
        },
       

        // NEONATO

        {
          url: `${require(`~/assets/images/Galleria/Neonato/01_laura_cesaretti_servizio_fotografico_neonato_roma.jpg`)}`,
          category: "Neonato",
        },
        {
          url: `${require(`~/assets/images/Galleria/Neonato/02_laura_cesaretti_servizio_fotografico_neonato_roma.jpg`)}`,
          category: "Neonato",
        },
        {
          url: `${require(`~/assets/images/Galleria/Neonato/03_laura_cesaretti_servizio_fotografico_neonato_roma.jpg`)}`,
          category: "Neonato",
        },
        {
          url: `${require(`~/assets/images/Galleria/Neonato/04_laura_cesaretti_servizio_fotografico_neonato_roma.jpg`)}`,
          category: "Neonato",
        },
        {
          url: `${require(`~/assets/images/Galleria/Neonato/05_laura_cesaretti_servizio_fotografico_neonato_roma.jpg`)}`,
          category: "Neonato",
        },
        {
          url: `${require(`~/assets/images/Galleria/Neonato/06_laura_cesaretti_servizio_fotografico_neonato_roma.jpg`)}`,
          category: "Neonato",
        },
        {
          url: `${require(`~/assets/images/Galleria/Neonato/07_laura_cesaretti_servizio_fotografico_neonato_roma.jpg`)}`,
          category: "Neonato",
        },
        {
          url: `${require(`~/assets/images/Galleria/Neonato/08_laura_cesaretti_servizio_fotografico_neonato_roma.jpg`)}`,
          category: "Neonato",
        },
        {
          url: `${require(`~/assets/images/Galleria/Neonato/09_laura_cesaretti_servizio_fotografico_neonato_roma.jpg`)}`,
          category: "Neonato",
        },
        {
          url: `${require(`~/assets/images/Galleria/Neonato/10_laura_cesaretti_servizio_fotografico_neonato_roma.jpg`)}`,
          category: "Neonato",
        },
        {
          url: `${require(`~/assets/images/Galleria/Neonato/11_laura_cesaretti_servizio_fotografico_neonato_roma.jpg`)}`,
          category: "Neonato",
        },
        {
          url: `${require(`~/assets/images/Galleria/Neonato/12_laura_cesaretti_servizio_fotografico_neonato_roma.jpg`)}`,
          category: "Neonato",
        },
        {
          url: `${require(`~/assets/images/Galleria/Neonato/13_laura_cesaretti_servizio_fotografico_neonato_roma.jpg`)}`,
          category: "Neonato",
        },
        {
          url: `${require(`~/assets/images/Galleria/Neonato/14_laura_cesaretti_servizio_fotografico_neonato_roma.jpg`)}`,
          category: "Neonato",
        },
        {
          url: `${require(`~/assets/images/Galleria/Neonato/15_laura_cesaretti_servizio_fotografico_neonato_roma.jpg`)}`,
          category: "Neonato",
        },
        {
          url: `${require(`~/assets/images/Galleria/Neonato/16_laura_cesaretti_servizio_fotografico_neonato_roma.jpg`)}`,
          category: "Neonato",
        },
        {
          url: `${require(`~/assets/images/Galleria/Neonato/17_laura_cesaretti_servizio_fotografico_neonato_roma.jpg`)}`,
          category: "Neonato",
        },
        {
          url: `${require(`~/assets/images/Galleria/Neonato/18_laura_cesaretti_servizio_fotografico_neonato_roma.jpg`)}`,
          category: "Neonato",
        },
        {
          url: `${require(`~/assets/images/Galleria/Neonato/19_laura_cesaretti_servizio_fotografico_neonato_roma.jpg`)}`,
          category: "Neonato",
        },
        {
          url: `${require(`~/assets/images/Galleria/Neonato/20_laura_cesaretti_servizio_fotografico_neonato_roma.jpg`)}`,
          category: "Neonato",
        },
        {
          url: `${require(`~/assets/images/Galleria/Neonato/21_laura_cesaretti_servizio_fotografico_neonato_roma.jpg`)}`,
          category: "Neonato",
        },
        {
          url: `${require(`~/assets/images/Galleria/Neonato/22_laura_cesaretti_servizio_fotografico_neonato_roma.jpg`)}`,
          category: "Neonato",
        },
        {
          url: `${require(`~/assets/images/Galleria/Neonato/23_laura_cesaretti_servizio_fotografico_neonato_roma.jpg`)}`,
          category: "Neonato",
        },
        {
          url: `${require(`~/assets/images/Galleria/Neonato/24_laura_cesaretti_servizio_fotografico_neonato_roma.jpg`)}`,
          category: "Neonato",
        },
        {
          url: `${require(`~/assets/images/Galleria/Neonato/25_laura_cesaretti_servizio_fotografico_neonato_roma.jpg`)}`,
          category: "Neonato",
        },
        {
          url: `${require(`~/assets/images/Galleria/Neonato/26_laura_cesaretti_servizio_fotografico_neonato_roma.jpg`)}`,
          category: "Neonato",
        },
        {
          url: `${require(`~/assets/images/Galleria/Neonato/27_laura_cesaretti_servizio_fotografico_neonato_roma.jpg`)}`,
          category: "Neonato",
        },
        {
          url: `${require(`~/assets/images/Galleria/Neonato/28_laura_cesaretti_servizio_fotografico_neonato_roma.jpg`)}`,
          category: "Neonato",
        },
        {
          url: `${require(`~/assets/images/Galleria/Neonato/29_laura_cesaretti_servizio_fotografico_neonato_roma.jpg`)}`,
          category: "Neonato",
        },
        {
          url: `${require(`~/assets/images/Galleria/Neonato/30_laura_cesaretti_servizio_fotografico_neonato_roma.jpg`)}`,
          category: "Neonato",
        },
        {
          url: `${require(`~/assets/images/Galleria/Neonato/31_laura_cesaretti_servizio_fotografico_neonato_roma.jpg`)}`,
          category: "Neonato",
        },
        {
          url: `${require(`~/assets/images/Galleria/Neonato/32_laura_cesaretti_servizio_fotografico_neonato_roma.jpg`)}`,
          category: "Neonato",
        },
        {
          url: `${require(`~/assets/images/Galleria/Neonato/33_laura_cesaretti_servizio_fotografico_neonato_roma.jpg`)}`,
          category: "Neonato",
        },
        {
          url: `${require(`~/assets/images/Galleria/Neonato/34_laura_cesaretti_servizio_fotografico_neonato_roma.jpg`)}`,
          category: "Neonato",
        },
        {
          url: `${require(`~/assets/images/Galleria/Neonato/35_laura_cesaretti_servizio_fotografico_neonato_roma.jpg`)}`,
          category: "Neonato",
        },
        {
          url: `${require(`~/assets/images/Galleria/Neonato/36_laura_cesaretti_servizio_fotografico_neonato_roma.jpg`)}`,
          category: "Neonato",
        },
        {
          url: `${require(`~/assets/images/Galleria/Neonato/37_laura_cesaretti_servizio_fotografico_neonato_roma.jpg`)}`,
          category: "Neonato",
        },
        {
          url: `${require(`~/assets/images/Galleria/Neonato/38_laura_cesaretti_servizio_fotografico_neonato_roma.jpg`)}`,
          category: "Neonato",
        },
        {
          url: `${require(`~/assets/images/Galleria/Neonato/39_laura_cesaretti_servizio_fotografico_neonato_roma.jpg`)}`,
          category: "Neonato",
        },
        {
          url: `${require(`~/assets/images/Galleria/Neonato/40_laura_cesaretti_servizio_fotografico_neonato_roma.jpg`)}`,
          category: "Neonato",
        },
        {
          url: `${require(`~/assets/images/Galleria/Neonato/41_laura_cesaretti_servizio_fotografico_neonato_roma.jpg`)}`,
          category: "Neonato",
        },
        {
          url: `${require(`~/assets/images/Galleria/Neonato/42_laura_cesaretti_servizio_fotografico_neonato_roma.jpg`)}`,
          category: "Neonato",
        },
        {
          url: `${require(`~/assets/images/Galleria/Neonato/43_laura_cesaretti_servizio_fotografico_neonato_roma.jpg`)}`,
          category: "Neonato",
        },
        {
          url: `${require(`~/assets/images/Galleria/Neonato/44_laura_cesaretti_servizio_fotografico_neonato_roma.jpg`)}`,
          category: "Neonato",
        },
        {
          url: `${require(`~/assets/images/Galleria/Neonato/45_laura_cesaretti_servizio_fotografico_neonato_roma.jpg`)}`,
          category: "Neonato",
        },
        {
          url: `${require(`~/assets/images/Galleria/Neonato/46_laura_cesaretti_servizio_fotografico_neonato_roma.jpg`)}`,
          category: "Neonato",
        },
        {
          url: `${require(`~/assets/images/Galleria/Neonato/47_laura_cesaretti_servizio_fotografico_neonato_roma.jpg`)}`,
          category: "Neonato",
        },
        {
          url: `${require(`~/assets/images/Galleria/Neonato/48_laura_cesaretti_servizio_fotografico_neonato_roma.jpg`)}`,
          category: "Neonato",
        },
        {
          url: `${require(`~/assets/images/Galleria/Neonato/49_laura_cesaretti_servizio_fotografico_neonato_roma.jpg`)}`,
          category: "Neonato",
        },
        {
          url: `${require(`~/assets/images/Galleria/Neonato/50_laura_cesaretti_servizio_fotografico_neonato_roma.jpg`)}`,
          category: "Neonato",
        },
        {
          url: `${require(`~/assets/images/Galleria/Neonato/51_laura_cesaretti_servizio_fotografico_neonato_roma.jpg`)}`,
          category: "Neonato",
        },
        {
          url: `${require(`~/assets/images/Galleria/Neonato/52_laura_cesaretti_servizio_fotografico_neonato_roma.jpg`)}`,
          category: "Neonato",
        },
        {
          url: `${require(`~/assets/images/Galleria/Neonato/53_laura_cesaretti_servizio_fotografico_neonato_roma.jpg`)}`,
          category: "Neonato",
        },
        {
          url: `${require(`~/assets/images/Galleria/Neonato/54_laura_cesaretti_servizio_fotografico_neonato_roma.jpg`)}`,
          category: "Neonato",
        },
        {
          url: `${require(`~/assets/images/Galleria/Neonato/55_laura_cesaretti_servizio_fotografico_neonato_roma.jpg`)}`,
          category: "Neonato",
        },
        {
          url: `${require(`~/assets/images/Galleria/Neonato/56_laura_cesaretti_servizio_fotografico_neonato_roma.jpg`)}`,
          category: "Neonato",
        },
        {
          url: `${require(`~/assets/images/Galleria/Neonato/57_laura_cesaretti_servizio_fotografico_neonato_roma.jpg`)}`,
          category: "Neonato",
        },
        {
          url: `${require(`~/assets/images/Galleria/Neonato/58_laura_cesaretti_servizio_fotografico_neonato_roma.jpg`)}`,
          category: "Neonato",
        },
        {
          url: `${require(`~/assets/images/Galleria/Neonato/59_laura_cesaretti_servizio_fotografico_neonato_roma.jpg`)}`,
          category: "Neonato",
        },
        {
          url: `${require(`~/assets/images/Galleria/Neonato/60_laura_cesaretti_servizio_fotografico_neonato_roma.jpg`)}`,
          category: "Neonato",
        },
        {
          url: `${require(`~/assets/images/Galleria/Neonato/61_laura_cesaretti_servizio_fotografico_neonato_roma.jpg`)}`,
          category: "Neonato",
        },
        {
          url: `${require(`~/assets/images/Galleria/Neonato/62_laura_cesaretti_servizio_fotografico_neonato_roma.jpg`)}`,
          category: "Neonato",
        },
        {
          url: `${require(`~/assets/images/Galleria/Neonato/63_laura_cesaretti_servizio_fotografico_neonato_roma.jpg`)}`,
          category: "Neonato",
        },
        {
          url: `${require(`~/assets/images/Galleria/Neonato/64_laura_cesaretti_servizio_fotografico_neonato_roma.jpg`)}`,
          category: "Neonato",
        },
        {
          url: `${require(`~/assets/images/Galleria/Neonato/65_laura_cesaretti_servizio_fotografico_neonato_roma.jpg`)}`,
          category: "Neonato",
        },
        {
          url: `${require(`~/assets/images/Galleria/Neonato/66_laura_cesaretti_servizio_fotografico_neonato_roma.jpg`)}`,
          category: "Neonato",
        },
        {
          url: `${require(`~/assets/images/Galleria/Neonato/67_laura_cesaretti_servizio_fotografico_neonato_roma.jpg`)}`,
          category: "Neonato",
        },
        {
          url: `${require(`~/assets/images/Galleria/Neonato/68_laura_cesaretti_servizio_fotografico_neonato_roma.jpg`)}`,
          category: "Neonato",
        },
        {
          url: `${require(`~/assets/images/Galleria/Neonato/69_laura_cesaretti_servizio_fotografico_neonato_roma.jpg`)}`,
          category: "Neonato",
        },
        {
          url: `${require(`~/assets/images/Galleria/Neonato/70_laura_cesaretti_servizio_fotografico_neonato_roma.jpg`)}`,
          category: "Neonato",
        },
        {
          url: `${require(`~/assets/images/Galleria/Neonato/71_laura_cesaretti_servizio_fotografico_neonato_roma.jpg`)}`,
          category: "Neonato",
        },
        {
          url: `${require(`~/assets/images/Galleria/Neonato/72_laura_cesaretti_servizio_fotografico_neonato_roma.jpg`)}`,
          category: "Neonato",
        },
        {
          url: `${require(`~/assets/images/Galleria/Neonato/74_laura_cesaretti_servizio_fotografico_neonato_roma.jpg`)}`,
          category: "Neonato",
        },
        {
          url: `${require(`~/assets/images/Galleria/Neonato/75_laura_cesaretti_servizio_fotografico_neonato_roma.jpg`)}`,
          category: "Neonato",
        },
        {
          url: `${require(`~/assets/images/Galleria/Neonato/76_laura_cesaretti_servizio_fotografico_neonato_roma.jpg`)}`,
          category: "Neonato",
        },
        {
          url: `${require(`~/assets/images/Galleria/Neonato/77_laura_cesaretti_servizio_fotografico_neonato_roma.jpg`)}`,
          category: "Neonato",
        },
        {
          url: `${require(`~/assets/images/Galleria/Neonato/78_laura_cesaretti_servizio_fotografico_neonato_roma.jpg`)}`,
          category: "Neonato",
        },
        {
          url: `${require(`~/assets/images/Galleria/Neonato/79_laura_cesaretti_servizio_fotografico_neonato_roma.jpg`)}`,
          category: "Neonato",
        },
        {
          url: `${require(`~/assets/images/Galleria/Neonato/80_laura_cesaretti_servizio_fotografico_neonato_roma.jpg`)}`,
          category: "Neonato",
        },
        {
          url: `${require(`~/assets/images/Galleria/Neonato/81_laura_cesaretti_servizio_fotografico_neonato_roma.jpg`)}`,
          category: "Neonato",
        },
        {
          url: `${require(`~/assets/images/Galleria/Neonato/82_laura_cesaretti_servizio_fotografico_neonato_roma.jpg`)}`,
          category: "Neonato",
        },
        {
          url: `${require(`~/assets/images/Galleria/Neonato/83_laura_cesaretti_servizio_fotografico_neonato_roma.jpg`)}`,
          category: "Neonato",
        },
        {
          url: `${require(`~/assets/images/Galleria/Neonato/84_laura_cesaretti_servizio_fotografico_neonato_roma.jpg`)}`,
          category: "Neonato",
        },
        {
          url: `${require(`~/assets/images/Galleria/Neonato/85_laura_cesaretti_servizio_fotografico_neonato_roma.jpg`)}`,
          category: "Neonato",
        },
        {
          url: `${require(`~/assets/images/Galleria/Neonato/86_laura_cesaretti_servizio_fotografico_neonato_roma.jpg`)}`,
          category: "Neonato",
        },
        {
          url: `${require(`~/assets/images/Galleria/Neonato/87_laura_cesaretti_servizio_fotografico_neonato_roma.jpg`)}`,
          category: "Neonato",
        },
        {
          url: `${require(`~/assets/images/Galleria/Neonato/88_laura_cesaretti_servizio_fotografico_neonato_roma.jpg`)}`,
          category: "Neonato",
        },

        // BEBE

        {
          url: `${require(`~/assets/images/Galleria/Bebè/01_laura_cesaretti_fotografo_bambini_roma.jpg`)}`,
          category: "Bebè",
        },
        {
          url: `${require(`~/assets/images/Galleria/Bebè/02_laura_cesaretti_fotografo_bambini_roma.jpg`)}`,
          category: "Bebè",
        },
        {
          url: `${require(`~/assets/images/Galleria/Bebè/03_laura_cesaretti_fotografo_bambini_roma.jpg`)}`,
          category: "Bebè",
        },
        {
          url: `${require(`~/assets/images/Galleria/Bebè/04_laura_cesaretti_fotografo_bambini_roma.jpg`)}`,
          category: "Bebè",
        },
        {
          url: `${require(`~/assets/images/Galleria/Bebè/05_laura_cesaretti_fotografo_bambini_roma.jpg`)}`,
          category: "Bebè",
        },
        {
          url: `${require(`~/assets/images/Galleria/Bebè/06_laura_cesaretti_fotografo_bambini_roma.jpg`)}`,
          category: "Bebè",
        },
        {
          url: `${require(`~/assets/images/Galleria/Bebè/07_laura_cesaretti_fotografo_bambini_roma.jpg`)}`,
          category: "Bebè",
        },
        {
          url: `${require(`~/assets/images/Galleria/Bebè/08_laura_cesaretti_fotografo_bambini_roma.jpg`)}`,
          category: "Bebè",
        },
        {
          url: `${require(`~/assets/images/Galleria/Bebè/09_laura_cesaretti_fotografo_bambini_roma.jpg`)}`,
          category: "Bebè",
        },
        {
          url: `${require(`~/assets/images/Galleria/Bebè/10_laura_cesaretti_fotografo_bambini_roma.jpg`)}`,
          category: "Bebè",
        },
        {
          url: `${require(`~/assets/images/Galleria/Bebè/11_laura_cesaretti_fotografo_bambini_roma.jpg`)}`,
          category: "Bebè",
        },
        {
          url: `${require(`~/assets/images/Galleria/Bebè/12_laura_cesaretti_fotografo_bambini_roma.jpg`)}`,
          category: "Bebè",
        },
        {
          url: `${require(`~/assets/images/Galleria/Bebè/13_laura_cesaretti_fotografo_bambini_roma.jpg`)}`,
          category: "Bebè",
        },
        {
          url: `${require(`~/assets/images/Galleria/Bebè/14_laura_cesaretti_fotografo_bambini_roma.jpg`)}`,
          category: "Bebè",
        },
        {
          url: `${require(`~/assets/images/Galleria/Bebè/15_laura_cesaretti_fotografo_bambini_roma.jpg`)}`,
          category: "Bebè",
        },
        {
          url: `${require(`~/assets/images/Galleria/Bebè/16_laura_cesaretti_fotografo_bambini_roma.jpg`)}`,
          category: "Bebè",
        },
        {
          url: `${require(`~/assets/images/Galleria/Bebè/17_laura_cesaretti_fotografo_bambini_roma.jpg`)}`,
          category: "Bebè",
        },
        {
          url: `${require(`~/assets/images/Galleria/Bebè/18_laura_cesaretti_fotografo_bambini_roma.jpg`)}`,
          category: "Bebè",
        },
        {
          url: `${require(`~/assets/images/Galleria/Bebè/19_laura_cesaretti_fotografo_bambini_roma.jpg`)}`,
          category: "Bebè",
        },
        {
          url: `${require(`~/assets/images/Galleria/Bebè/20_laura_cesaretti_fotografo_bambini_roma.jpg`)}`,
          category: "Bebè",
        },
        {
          url: `${require(`~/assets/images/Galleria/Bebè/21_laura_cesaretti_fotografo_bambini_roma.jpg`)}`,
          category: "Bebè",
        },
        {
          url: `${require(`~/assets/images/Galleria/Bebè/22_laura_cesaretti_fotografo_bambini_roma.jpg`)}`,
          category: "Bebè",
        },
        {
          url: `${require(`~/assets/images/Galleria/Bebè/23_laura_cesaretti_fotografo_bambini_roma.jpg`)}`,
          category: "Bebè",
        },
        {
          url: `${require(`~/assets/images/Galleria/Bebè/24_laura_cesaretti_fotografo_bambini_roma.jpg`)}`,
          category: "Bebè",
        },
        {
          url: `${require(`~/assets/images/Galleria/Bebè/25_laura_cesaretti_fotografo_bambini_roma.jpg`)}`,
          category: "Bebè",
        },
        {
          url: `${require(`~/assets/images/Galleria/Bebè/26_laura_cesaretti_fotografo_bambini_roma.jpg`)}`,
          category: "Bebè",
        },
        {
          url: `${require(`~/assets/images/Galleria/Bebè/27_laura_cesaretti_fotografo_bambini_roma.jpg`)}`,
          category: "Bebè",
        },
        {
          url: `${require(`~/assets/images/Galleria/Bebè/28_laura_cesaretti_fotografo_bambini_roma.jpg`)}`,
          category: "Bebè",
        },
        {
          url: `${require(`~/assets/images/Galleria/Bebè/29_laura_cesaretti_fotografo_bambini_roma.jpg`)}`,
          category: "Bebè",
        },
        {
          url: `${require(`~/assets/images/Galleria/Bebè/30_laura_cesaretti_fotografo_bambini_roma.jpg`)}`,
          category: "Bebè",
        },
        {
          url: `${require(`~/assets/images/Galleria/Bebè/31_laura_cesaretti_fotografo_bambini_roma.jpg`)}`,
          category: "Bebè",
        },
        {
          url: `${require(`~/assets/images/Galleria/Bebè/32_laura_cesaretti_fotografo_bambini_roma.jpg`)}`,
          category: "Bebè",
        },
        {
          url: `${require(`~/assets/images/Galleria/Bebè/33_laura_cesaretti_fotografo_bambini_roma.jpg`)}`,
          category: "Bebè",
        },
        {
          url: `${require(`~/assets/images/Galleria/Bebè/34_laura_cesaretti_fotografo_bambini_roma.jpg`)}`,
          category: "Bebè",
        },
        {
          url: `${require(`~/assets/images/Galleria/Bebè/35_laura_cesaretti_fotografo_bambini_roma.jpg`)}`,
          category: "Bebè",
        },
        {
          url: `${require(`~/assets/images/Galleria/Bebè/36_laura_cesaretti_fotografo_bambini_roma.jpg`)}`,
          category: "Bebè",
        },
        {
          url: `${require(`~/assets/images/Galleria/Bebè/37_laura_cesaretti_fotografo_bambini_roma.jpg`)}`,
          category: "Bebè",
        },
        {
          url: `${require(`~/assets/images/Galleria/Bebè/38_laura_cesaretti_fotografo_bambini_roma.jpg`)}`,
          category: "Bebè",
        },
        {
          url: `${require(`~/assets/images/Galleria/Bebè/39_laura_cesaretti_fotografo_bambini_roma.jpg`)}`,
          category: "Bebè",
        },
        {
          url: `${require(`~/assets/images/Galleria/Bebè/40_laura_cesaretti_fotografo_bambini_roma.jpg`)}`,
          category: "Bebè",
        },
        {
          url: `${require(`~/assets/images/Galleria/Bebè/41_laura_cesaretti_fotografo_bambini_roma.jpg`)}`,
          category: "Bebè",
        },
        {
          url: `${require(`~/assets/images/Galleria/Bebè/42_laura_cesaretti_fotografo_bambini_roma.jpg`)}`,
          category: "Bebè",
        },
        {
          url: `${require(`~/assets/images/Galleria/Bebè/43_laura_cesaretti_fotografo_bambini_roma.jpg`)}`,
          category: "Bebè",
        },
        {
          url: `${require(`~/assets/images/Galleria/Bebè/44_laura_cesaretti_fotografo_bambini_roma.jpg`)}`,
          category: "Bebè",
        },
        {
          url: `${require(`~/assets/images/Galleria/Bebè/45_laura_cesaretti_fotografo_bambini_roma.jpg`)}`,
          category: "Bebè",
        },
        {
          url: `${require(`~/assets/images/Galleria/Bebè/46_laura_cesaretti_fotografo_bambini_roma.jpg`)}`,
          category: "Bebè",
        },
        {
          url: `${require(`~/assets/images/Galleria/Bebè/47_laura_cesaretti_fotografo_bambini_roma.jpg`)}`,
          category: "Bebè",
        },
        {
          url: `${require(`~/assets/images/Galleria/Bebè/48_laura_cesaretti_fotografo_bambini_roma.jpg`)}`,
          category: "Bebè",
        },
        {
          url: `${require(`~/assets/images/Galleria/Bebè/49_laura_cesaretti_fotografo_bambini_roma.jpg`)}`,
          category: "Bebè",
        },
        {
          url: `${require(`~/assets/images/Galleria/Bebè/50_laura_cesaretti_fotografo_bambini_roma.jpg`)}`,
          category: "Bebè",
        },
        {
          url: `${require(`~/assets/images/Galleria/Bebè/51_laura_cesaretti_fotografo_bambini_roma.jpg`)}`,
          category: "Bebè",
        },
        {
          url: `${require(`~/assets/images/Galleria/Bebè/52_laura_cesaretti_fotografo_bambini_roma.jpg`)}`,
          category: "Bebè",
        },
        {
          url: `${require(`~/assets/images/Galleria/Bebè/53_laura_cesaretti_fotografo_bambini_roma.jpg`)}`,
          category: "Bebè",
        },
        {
          url: `${require(`~/assets/images/Galleria/Bebè/54_laura_cesaretti_fotografo_bambini_roma.jpg`)}`,
          category: "Bebè",
        },
        {
          url: `${require(`~/assets/images/Galleria/Bebè/55_laura_cesaretti_fotografo_bambini_roma.jpg`)}`,
          category: "Bebè",
        },
        {
          url: `${require(`~/assets/images/Galleria/Bebè/56_laura_cesaretti_fotografo_bambini_roma.jpg`)}`,
          category: "Bebè",
        },
        {
          url: `${require(`~/assets/images/Galleria/Bebè/57_laura_cesaretti_fotografo_bambini_roma.jpg`)}`,
          category: "Bebè",
        },
        {
          url: `${require(`~/assets/images/Galleria/Bebè/58_laura_cesaretti_fotografo_bambini_roma.jpg`)}`,
          category: "Bebè",
        },
        {
          url: `${require(`~/assets/images/Galleria/Bebè/59_laura_cesaretti_fotografo_bambini_roma.jpg`)}`,
          category: "Bebè",
        },
        {
          url: `${require(`~/assets/images/Galleria/Bebè/60_laura_cesaretti_fotografo_bambini_roma.jpg`)}`,
          category: "Bebè",
        },
      ],
      index: null,
    };
  },
};
</script>
