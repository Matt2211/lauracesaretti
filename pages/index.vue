<template>
  <div>
    <BannerHero
      isOnIndex
      title="Ritratti artistici di Maternità e Neonati"
      subTitle="Un'emozionante celebrazione del legame unico tra madre e bambino"
    />

    <div class="container-fluid main-paragraph">
      <div class="container text-center">
        <h3 class="display-4 mb-4">Benvenuti</h3>
        <p class="lead">
          Benvenuti nella mia dimensione fotografica dove immortaleremo i
          momenti più preziosi della vostra vita, attraverso un'esperienza del
          tutto personalizzata. Sappiamo che questi momenti sono fugaci e sono
          qui per far si che i vostri ricordi ed emozioni restino indelebili per
          sempre
        </p>
      </div>
    </div>

    <div class="container-fluid p-0">
      <div class="d-flex flex-wrap">
        <Sections
          link="/servizi-fotografici/maternità"
          :image="`${require(`~/assets/images/Laura_Cesaretti_Photography_Fine_Art.jpg`)}`"
          alt="text here"
          title="Maternità"
        >
        </Sections>
        <Sections
          link="/servizi-fotografici/famiglia"
          :image="`${require(`~/assets/images/Laura_Cesaretti_Maternità_Life_Style.jpg`)}`"
          alt="text here"
          title="Famiglia"
        >
        </Sections>
      </div>
    </div>
    <div class="container-fluid main-paragraph">
      <div class="container text-center">
        <h3 class="display-4 mb-4">Unicità</h3>
        <p class="lead">
          Il mio obiettivo è quello di creare immagini che siano artistiche,
          autentiche e significative. Per farlo, ci immergeremo profondamente
          nella vostra visione e lavoreremo insieme per personalizzare la vostra
          esperienza fotografica in base alle vostre esigenze e desideri. Sarò
          felice di conoscere la vostra storia e personalità per poter creare
          immagini che riflettano la vostra unicità.
        </p>
      </div>
    </div>
    <!-- <Feedback /> -->

    <div class="container-fluid p-0">
      <div class="d-flex flex-wrap">
        <Sections
          isSmall
          link="/servizi-fotografici/neonato"
          :image="`${require(`~/assets/images/Laura_Cesaretti_Photography_Neonato.jpg`)}`"
          alt="text here"
          title="Neonato"
        >
        </Sections>

        <Sections
          isSmall
          link="/servizi-fotografici/bebè"
          :image="`${require(`~/assets/images/Laura_Cesaretti_Photography_Bebè.jpg`)}`"
          alt="text here"
          title="Bebè"
        >
        </Sections>

        <Sections
          isSmall
          link="/servizi-fotografici/cake-smash"
          :image="`${require(`~/assets/images/Laura_Cesaretti_Photography_Cake_Smash.jpg`)}`"
          alt="text here"
          title="Cake Smash"
        >
        </Sections>
      </div>
    </div>

    <div class="container-fluid main-paragraph">
      <div class="container text-center">
        <h3 class="display-4 mb-4">Galleria</h3>
        <p class="lead">
          Sfoglia la galleria fotografica e lasciati ispirare per il tuo
          servizio fotografico
        </p>

        <NuxtLink to="/galleria">
          <button class="btn btn-dark mt-4">Guarda la Galleria</button>
        </NuxtLink>
      </div>
    </div>

    <!-- <Feedback /> -->

    <Footer />
  </div>
</template>

<script>
import Feedback from "~/components/Feedback.vue";

export default {
  components: { Feedback },
  name: "Home",
  head: {
    title: "Laura Cesaretti - Fine Art Portrait Photography - Roma",
  },
};
</script>
