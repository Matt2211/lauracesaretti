<template>
  <div>
    <Header />
    <div id="banner-cakesmash" class="banner-hero-inner">
      <div class="text-center">
        <h1 class="display-1">Cake Smash</h1>
        <h2>Dobbiamo scrivere qualcosa qui d'impatto</h2>
      </div>
    </div>

    <div data-aos="zoom-in" class="container my-5 category-container w-100">
      <div
        class="service-description w-100 text-center text-md-right order-1 order-md-0 pr-0 mt-3 pr-md-5 mt-lg-0"
      >
        <h5 class=" text-uppercase small">La gravidanza e la fotografia</h5>
        <h2>Il momento migliore</h2>
        <p>
          l servizio Cake Smash può essere svolto prima del compleanno, per
          poter sfruttare le immagini durante la festa e per creare gli inviti o
          subito dopo.
        </p>
        <p class="small font-weight-bold">
          Il momento migliore è quando il bambino ancora non riesce a camminare
          per evitare che esca spesso dal set.
        </p>
      </div>

      <div class="category-section w-100 order-0 order-md-1">
        <img
          src="~/assets/images/servizi_fotografici/Cake_Smash/01_cake_smash_momento_migliore_laura_cesaretti_roma.jpg"
          class="img-fluid rounded"
          alt=""
        />
      </div>
    </div>

    <div data-aos="zoom-in" class="container category-container w-100">
      <div class="category-section w-100">
        <img
          src="~/assets/images/servizi_fotografici/Cake_Smash/02_cake_smash_personalizzato_laura_cesaretti_roma.jpg"
          class="img-fluid rounded"
          alt=""
        />
      </div>

      <div
        class="service-description text-center text-md-left w-100 pl-0 mt-3 pl-md-5 mt-lg-0"
      >
        <h5 class=" text-uppercase small">La gravidanza e la fotografia</h5>
        <h2>Tema personalizzato</h2>
        <p>
          Durante la consulenza pre sessione sceglieremo un tema inedito da
          realizzare, personalizzato secondo i vostri gusti e desideri. In
          abbinamento all'allestimento verrà fornita anche la torta.
        </p>
        <p>
          Nel caso in cui amiate in particolare uno dei set già realizzati, sarà
          possibile riproporlo e riadattarlo secondo le vostre esigenze.
        </p>
        <p class="small font-weight-bold">
          La preparazione di nuovi set richiede all'incirca 1-2 mesi per
          l'ideazione e realizzazione.
        </p>
      </div>
    </div>

    <div data-aos="zoom-in" class="container my-5 category-container w-100">
      <div
        class="service-description w-100 text-center text-md-right order-1 order-md-0 pr-0 mt-3 pr-md-5 mt-lg-0"
      >
        <h5 class=" text-uppercase small">La gravidanza e la fotografia</h5>
        <h2>La sessione</h2>
        <p>
          La sessione ha una durata di circa 2 ore. Sarà possibile realizzare
          fino a due cambi abito mantenendo lo stesso allestimento. Il primo
          cambio prevede foto semplici con accessori e ceste, mentre con il
          secondo verrà introdotta la torta con la quale il bimbo si divertirà a
          giocare e sporcarsi.
        </p>
      </div>

      <div class="category-section w-100 order-0 order-md-1">
        <img
          src="~/assets/images/servizi_fotografici/Cake_Smash/03_cake_smash_sessione_laura_cesaretti_roma.jpg"
          class="img-fluid rounded"
          alt=""
        />
      </div>
    </div>

    <div data-aos="zoom-in" class="container mb-5 category-container w-100">
      <div class="category-section w-100">
        <img
          src="~/assets/images/servizi_fotografici/Cake_Smash/04_cake_smash_prodotti_laura_cesaretti_roma.jpg"
          class="img-fluid rounded"
          alt=""
        />
      </div>

      <div
        class="service-description text-center text-md-left w-100 pl-0 mt-3 pl-md-5 mt-lg-0"
      >
        <h5 class=" text-uppercase small">La gravidanza e la fotografia</h5>
        <h2>Dopo la sessione</h2>
        <p>
          Una volta conclusa la sessione selezionerò gli scatti migliori che
          saranno accuratamente post-prodotti con tecniche professionali,
          garantendo sempre un effetto naturale.
        </p>

        <p class="small font-weight-bold">
          Questo processo richiederà circa 3-4 settimane, dopo di che fisseremo
          un incontro per visionare e scegliere i ritratti che racchiuderanno i
          vostri ricordi più belli.
        </p>
      </div>
    </div>

     <RelatedGallery categoryImage="CakeSmash" />

    <div id="book-cakesmash" class="container-fluid">
      <div class="container main-paragraph-container text-center">
        <h3 class="mb-4">Ti Senti Pronta?</h3>
        <p class="lead">
          È universalmente riconosciuto che un lettore che osserva il layout di
          una pagina viene distratto dal contenuto testuale se questo è leggibile.
          Lo scopo dell'utilizzo.
        </p>

      <ModalContact categoryName="Cake Smash" />
      </div>
    </div>

  

    <Related categoryName="cakeSmash" data-aos="zoom-in" />
    <Footer />
  </div>
</template>

<script>
export default {
  name: "Cake-smash",
  head: {
    title: "Cake Smash - Laura Cesaretti - Servizi Fotografici Roma"
  }
};
</script>
