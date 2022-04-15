<template>
  <div>
     <Header />
    <div id="banner-lifestyle" class="banner-hero-inner">
      <div class="text-center">
        <h1 class="display-1">Lfie Style</h1>
        <h2>Dobbiamo scrivere qualcosa qui d'impatto</h2>
      </div>
    </div>

    <div data-aos="zoom-in" class="container my-5 category-container w-100">
      <div class="service-description w-100 text-center text-md-right order-1 order-md-0 pr-0 mt-3 pr-md-5 mt-lg-0">
        <h5 class=" text-uppercase small">La gravidanza e la fotografia</h5>
        <h2>Il momento migliore</h2>
        <p>
          Il servizio Maternità Lifestyle viene realizzato preferibilmente tra
          la 29° e la 36° settimana. In questo periodo la pancia è ben visibile
          e non si rischia di avvertire troppa stanchezza.
        </p>
        <p class="small font-weight-bold">
          Ti consiglio di prenotare il servizio almeno due mesi in anticipo.
        </p>
      </div>

     <div class="category-section w-100 order-0 order-md-1">
        <img src="~/assets/images/servizi_fotografici/Lifestyle/01_maternità_lifestyle_momento_migliore_laura_cesaretti_roma.jpg" class="img-fluid rounded" alt="">
      </div>
    </div>

    <div data-aos="zoom-in" class="container category-container w-100">
     <div class="category-section w-100">
        <img src="~/assets/images/servizi_fotografici/Lifestyle/02_maternità_lifestyle_sessione_laura_cesaretti_roma.jpg.jpg" class="img-fluid rounded" alt="">
      </div>

      <div class="service-description text-center text-md-left w-100 pl-0 mt-3 pl-md-5 mt-lg-0">
        <h5 class=" text-uppercase small">La gravidanza e la fotografia</h5>
        <h2>La sessione</h2>
        <p>
          La sessione si può svolgere nella naturale ambientazione del mio
          studio o in esterna nei mesi estivi.
        </p>

        <ul class="pl-2 list-unstyled">
          <li>
            <p>
              <span class="h6">In Studio:</span> dove sarà possibile ricreare
              un'ambientazione più intima. La sessione prevede 3 cambi abito
              forniti dallo studio
            </p>
          </li>
          <li>
            <p>
              <span class="h6">In Esterna:</span> in un bel parco o location a
              vostra scelta come il mare, godendoci una passeggiata al tramonto
              e realizzando immagini molto spontanee. La sessione prevede 1
              cambio abito fornito dalla mamma.
            </p>
          </li>
          <li>
            <p>
              <span class="h6">Combo Studio-Esterna:</span> per avere un
              servizio completo che racconti al meglio la vostra storia Durante
              il servizio sono sempre incluse le foto con il futuro papà ed
              eventuali fratellini
            </p>
          </li>
        </ul>
      </div>
    </div>

    <div data-aos="zoom-in" class="container my-5 category-container w-100">
      <div class="service-description w-100 text-center text-md-right order-1 order-md-0 pr-0 mt-3 pr-md-5 mt-lg-0">
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

     <div class="category-section w-100 order-0 order-md-1">
        <img src="~/assets/images/servizi_fotografici/Lifestyle/03_maternità_lifestyle_prodotti_laura_cesaretti_roma.jpg.jpg" class="img-fluid rounded" alt="">
      </div>
    </div>

    <div id="book-lifestyle" class="container-fluid">
      <div class="container main-paragraph-container text-center">
        <h3 class="mb-4">Ti Senti Pronta?</h3>
        <p class="lead">
          È universalmente riconosciuto che un lettore che osserva il layout di
          una pagina viene distratto dal contenuto testuale se questo è leggibile.
          Lo scopo dell'utilizzo.
        </p>

      <ModalContact categoryName="Life Style" />
      </div>
    </div>

    
    <Related categoryName="lifeStyle" data-aos="zoom-in" />
    <Footer />
  </div>
</template>

<script>
export default {
  name: "maternità-life-style",
   head: {
    title: "Life Style - Laura Cesaretti - Servizi Fotografici Roma"
  }
};
</script>
