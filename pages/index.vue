<template>
  <div>
    <Header isOnIndex />
    <div class="banner-hero">
      <div class="text-center text-white">
        <h1 class="display-1">Ritratti artistici di maternità</h1>
        <h2>Ritraggo la gravidanza e il tuo bambino come fossero opere d'arte.</h2>
      </div>
    </div>

    <div class="container main-paragraph-container text-center">
      <h3 class="mb-4">Title will go here</h3>
      <p class="lead">
        È universalmente riconosciuto che un lettore che osserva il layout di
        una pagina viene distratto dal contenuto testuale se questo è leggibile.
        Lo scopo dell'utilizzo del Lorem Ipsum è che offre una normale
        distribuzione delle lettere (al contrario di quanto avviene se si
        utilizzano brevi frasi ripetute, ad esempio “testo qui”), apparendo come
        un normale blocco di testo leggibile. Molti software di impaginazione e
        di web design utilizzano Lorem Ipsum come testo modello. Molte versioni
        del testo sono state prodotte negli anni, a volte casualmente, a volte
        di proposito (ad esempio inserendo passaggi ironici).
      </p>
    </div>

    <!-- <div class="category-container w-100">
     
      <NuxtLink to="/servizi-fotografici/maternità" class="w-100">
        <div class="wrapper-test">
          <div id="fineArt" class="category-section w-100">
            <h2 class="category-title">Fine Art</h2>
           
          
          </div>
        </div>
      </NuxtLink>

      <NuxtLink to="/servizi-fotografici/famiglia" class="w-100">
        <div class="wrapper-test">
          <div id="lifeStyle" class="category-section w-100">
            <h2 class="category-title">Life Style</h2>
          </div>
        </div>
      </NuxtLink>


    </div> -->

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

    <div class="container main-paragraph-container text-center">
      <h3 class="mb-4">Title will go here</h3>
      <p class="lead">
        È universalmente riconosciuto che un lettore che osserva il layout di
        una pagina viene distratto dal contenuto testuale se questo è leggibile.
        Lo scopo dell'utilizzo del Lorem Ipsum è che offre una normale
        distribuzione delle lettere (al contrario di quanto avviene se si
        utilizzano brevi frasi ripetute, ad esempio “testo qui”), apparendo come
        un normale blocco di testo leggibile. Molti software di impaginazione e
        di web design utilizzano Lorem Ipsum come testo modello. Molte versioni
        del testo sono state prodotte negli anni, a volte casualmente, a volte
        di proposito (ad esempio inserendo passaggi ironici).
      </p>
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

    <div class="container main-paragraph-container text-center">
      <h3 class="mb-4">Guarda alcuni dei scatti piu belli</h3>
      <p class="lead">
        È universalmente riconosciuto che un lettore che osserva il layout di
        una pagina viene distratto dal contenuto testuale se questo è leggibile.
        Lo scopo dell'utilizzo.
      </p>

      <NuxtLink to="/galleria">
        <button class="btn btn-dark mt-4">Guarda la Galleria</button>
      </NuxtLink>
    </div>

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
