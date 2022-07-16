<template>
  <div>
    <Header />
    <div id="banner-fineart" class="banner-hero-inner">
      <div class="text-center">
        <h1 class="display-1">Fine Art</h1>
        <h2>Dobbiamo scrivere qualcosa qui d'impatto</h2>
      </div>
    </div>

    <div data-aos="zoom-in" class="container category-container w-100">
      <div class="category-section w-100">
        <img
          src="~/assets/images/servizi_fotografici/Fine_Art/01_maternità_fineart_momento_migliore_laura_cesaretti_roma.jpg"
          class="img-fluid rounded"
          alt=""
        />
      </div>

      <div
        class="service-description text-center text-md-left w-100 pl-0 mt-3 pl-md-5 mt-lg-0"
      >
        <h5 class="text-uppercase small">La gravidanza e la fotografia</h5>
        <h2>Il momento migliore</h2>
        <p>
          Il servizio maternità fine art viene realizzato preferibilmente tra la
          29° e la 36° settimana. In questo periodo la pancia è ben visibile e
          non si rischia di avvertire troppa stanchezza.
        </p>
        <p class="small font-weight-bold">
          Ti consiglio di prenotare il servizio almeno due mesi in anticipo.
        </p>
      </div>
    </div>

    <div data-aos="zoom-in" class="container my-5 category-container w-100">
      <div
        class="service-description w-100 text-center text-md-right order-1 order-md-0 pr-0 mt-3 pr-md-5 mt-lg-0"
      >
        <h5 class="text-uppercase small">La gravidanza e la fotografia</h5>
        <h2>Su misura per te</h2>
        <p>
          Progetteremo insieme il tuo servizio in ogni suo aspetto durante la
          consulenza pre-sessione. Ogni set verrà realizzato su misura
          utilizzando abiti, tessuti, accessori e luci che più rappresentano il
          tuo stile e la tua identità.
        </p>
        <p class="small font-weight-bold">
          Nessuna delle mie mamme è una modella, quindi non preoccuparti se non
          ti senti spigliata davanti alla macchina fotografica! Verrai guidata
          passo passo durante tutto il servizio affinchè tu possa sentirti
          sempre a tuo agio.
        </p>
      </div>

      <div class="category-section w-100 order-0 order-md-1">
        <img
          src="~/assets/images/servizi_fotografici/Fine_Art/02_maternità_fineart_personalizzato_laura_cesaretti_roma.jpg"
          class="img-fluid rounded"
          alt=""
        />
      </div>
    </div>

    <div data-aos="zoom-in" class="container category-container w-100">
      <div class="category-section w-100">
        <img
          src="~/assets/images/servizi_fotografici/Fine_Art/03_maternità_fineart_makeup_laura_cesaretti_roma.jpg"
          class="img-fluid rounded"
          alt=""
        />
      </div>

      <div
        class="service-description text-center text-md-left w-100 pl-0 mt-3 pl-md-5 mt-lg-0"
      >
        <h5 class="text-uppercase small">La gravidanza e la fotografia</h5>
        <h2>Makeup e guardaroba</h2>
        <p>
          Avrai accesso ad una vasta selezione di abiti, tessuti, chiffon e
          accessori inclusa nel prezzo. Durante la consulenza definiremo i vari
          look e sarà possibile anche valutare outfit personali per rendere il
          tuo servizio ancora più unico.
        </p>
        <p class="small font-weight-bold">
          Il servizio hair style e make-up è incluso nel costo della sessione.
          Un'esperta del settore si prenderà cura di te, non dovrai pensare a
          nulla se non a rilassarti e a farti coccolare da mani esperte! La mia
          make-up artist saprà ascoltarti e realizzare il look che più ti
          rispecchia e ti assisterà durante tutto il servizio.
        </p>
      </div>
    </div>

    <div data-aos="zoom-in" class="container my-5 category-container w-100">
      <div
        class="service-description w-100 text-center text-md-right order-1 order-md-0 pr-0 mt-3 pr-md-5 mt-lg-0"
      >
        <h5 class="text-uppercase small">La gravidanza e la fotografia</h5>
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

      <div class="category-section w-100 order-0 order-md-1">
        <img
          src="~/assets/images/servizi_fotografici/Fine_Art/04_maternità_fineart_prodotti_laura_cesaretti_roma.jpg"
          class="img-fluid rounded"
          alt=""
        />
      </div>
    </div>

    <RelatedGallery categoryImage="FineArt" />

    <div id="book-fineart" class="container-fluid">
      <div class="container main-paragraph-container text-center">
        <h3 class="mb-4">Ti Senti Pronta?</h3>
        <p class="lead">
          È universalmente riconosciuto che un lettore che osserva il layout di
          una pagina viene distratto dal contenuto testuale se questo è
          leggibile. Lo scopo dell'utilizzo.
        </p>

        <ModalContact categoryName="Fine Art" />
      </div>
    </div>

    <Related categoryName="fineArt" data-aos="zoom-in" />
    <Footer />
  </div>
</template>

<script>
export default {
  name: "Maternità-fine-art",
  head: {
    title: "Fine Art - Laura Cesaretti - Servizi Fotografici Roma",
  },
};
</script>
