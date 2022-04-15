<template>
  <div>
    <Header />
    <div id="banner-bebe" class="banner-hero-inner">
      <div class="text-center">
        <h1 class="display-1">Bebè</h1>
        <h2>Dobbiamo scrivere qualcosa qui d'impatto</h2>
      </div>
    </div>

    <div data-aos="zoom-in" class="container category-container w-100">
      <div class="category-section w-100">
        <img src="~/assets/images/servizi_fotografici/Bebè/01_bebè_momento_migliore_laura_cesaretti_roma.jpg" class="img-fluid rounded" alt="">
      </div>

      <div class="service-description text-center text-md-left w-100 pl-0 mt-3 pl-md-5 mt-lg-0">
        <h5 class=" text-uppercase small">La gravidanza e la fotografia</h5>
        <h2>Il momento migliore</h2>
        <p>
          Il momento migliore per effettuare la sessione è quando il bambino
          riesce a stare seduto da solo in modo da poter realizzare immagini più
          varie tra loro.
        </p>
        <p class="small font-weight-bold">Il servizio Bebè può essere svolto dai 6 ai 10 mesi di vita.</p>
      </div>
    </div>

    <div data-aos="zoom-in" class="container my-5 category-container w-100">
      <div class="service-description w-100 text-center text-md-right order-1 order-md-0 pr-0 mt-3 pr-md-5 mt-lg-0">
        <h5 class=" text-uppercase small">La gravidanza e la fotografia</h5>
        <h2>Su misura per te</h2>
        <p>
          Durante la consulenza pre sessione sceglieremo 3 set da realizzare tra
          quelli proposti. Tutto il necessario per il vostro bambino come abiti
          e accessori sono forniti dallo studio.
        </p>

        <p>
          Inoltre potrete scegliere di dedicare uno dei set alle foto di
          famiglia per conservare dei bellissimi ritratti insieme.
        </p>
        <p>
          La durata di un servizio fotografico Bebè è di circa 2 ore.
        </p>
      </div>

      <div class="category-section w-100 order-0 order-md-1">
        <img src="~/assets/images/servizi_fotografici/Bebè/02_bebè_sessione_laura_cesaretti_roma.jpg" class="img-fluid rounded" alt="">
      </div>
    </div>

    <div data-aos="zoom-in" class="container mb-5 category-container w-100">
       <div class="category-section w-100">
        <img src="~/assets/images/servizi_fotografici/Bebè/03_bebè_prodotti_laura_cesaretti_roma.jpg" class="img-fluid rounded" alt="">
      </div>

      <div class="service-description text-center text-md-left w-100 pl-0 mt-3 pl-md-5 mt-lg-0">
        <h5 class=" text-uppercase small">La gravidanza e la fotografia</h5>
        <h2>Dopo la sessione</h2>
        <p>
          Una volta conclusa la sessione selezionerò gli scatti migliori che
          saranno accuratamente post-prodotti con tecniche professionali,
          garantendo sempre un effetto naturale.
        </p>

        <p class="small font-weight-bold">Questo processo richiederà
          circa 3-4 settimane, dopo di che fisseremo un incontro per visionare e
          scegliere i ritratti che racchiuderanno i vostri ricordi più belli.</p>
      </div>
    </div>

    <div id="book-bebe" class="container-fluid">
      <div class="container main-paragraph-container text-center">
        <h3 class="mb-4">Ti Senti Pronta?</h3>
        <p class="lead">
          È universalmente riconosciuto che un lettore che osserva il layout di
          una pagina viene distratto dal contenuto testuale se questo è leggibile.
          Lo scopo dell'utilizzo.
        </p>

       <ModalContact categoryName="Bebè" />
      </div>
    </div>

   

     <Related categoryName="bebè" data-aos="zoom-in" />
    <Footer />
  </div>
</template>

<script>
export default {
  name: "bebè",
   head: {
    title: "Bebè - Laura Cesaretti - Servizi Fotografici Roma"
  }
};
</script>
