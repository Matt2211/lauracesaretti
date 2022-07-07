<template>
  <div>
    <Header />
    <div class="banner-hero-inner">
      <div class="text-center">
        <h1 class="display-1">Servizi Fotografici</h1>
        <h2>Dobbiamo scrivere qualcosa qui d'impatto</h2>
      </div>
    </div>

    <div data-aos="zoom-in" class="container category-container w-100">
      <div class="category-section w-100">
        <NuxtLink to="/servizi-fotografici/maternità-fine-art">
          <img
            src="~assets/images/Laura_Cesaretti_Photography_Fine_Art.jpg"
            class="img-fluid rounded"
            alt=""
          />
        </NuxtLink>
      </div>

      <div
        class="
          service-description
          text-center text-md-left
          w-100
          pl-0
          mt-3
          pl-md-5
          mt-lg-0
        "
      >
        <h5 class="text-uppercase small">La gravidanza e la fotografia</h5>
        <h2>Maternità Fine Art</h2>
        <p>
          Ciao, sono Laura Cesaretti, fotografa specializzata in servizi
          fotografici per Neonati, Bambini, Maternità e Famiglie. Vivo e lavoro
          a Roma, ma spesso la fotografia mi porta in altre città e luoghi
          meravigliosi.
        </p>
        <NuxtLink to="/servizi-fotografici/maternità-fine-art">
          <button class="btn btn-dark">Scopri il servizio</button>
        </NuxtLink>
      </div>
    </div>

    <div data-aos="zoom-in" class="container my-5 category-container w-100">
      <div
        class="
          service-description
          w-100
          text-center text-md-right
          order-1 order-md-0
          pr-0
          mt-3
          pr-md-5
          mt-lg-0
        "
      >
        <h5 class="text-uppercase small">La gravidanza e la fotografia</h5>
        <h2>Maternità Life Style</h2>
        <p>
          Ciao, sono Laura Cesaretti, fotografa specializzata in servizi
          fotografici per Neonati, Bambini, Maternità e Famiglie. Vivo e lavoro
          a Roma, ma spesso la fotografia mi porta in altre città e luoghi
          meravigliosi.
        </p>
        <NuxtLink to="/servizi-fotografici/maternità-life-style">
          <button class="btn btn-dark">Scopri il servizio</button>
        </NuxtLink>
      </div>

      <div class="category-section w-100 order-0 order-md-1">
        <NuxtLink to="/servizi-fotografici/maternità-life-style">
          <img
            src="~assets/images/Laura_Cesaretti_Maternità_Life_Style.jpg"
            class="img-fluid rounded"
            alt=""
          />
        </NuxtLink>
      </div>
    </div>

    <div data-aos="zoom-in" class="container mb-5 category-container w-100">
      <div class="category-section w-100">
        <NuxtLink to="/servizi-fotografici/Bebè">
          <img
            src="~assets/images/Laura_Cesaretti_Photography_Neonato.jpg"
            class="img-fluid rounded"
            alt=""
          />
        </NuxtLink>
      </div>

      <div
        class="
          service-description
          text-center text-md-left
          w-100
          pl-0
          mt-3
          pl-md-5
          mt-lg-0
        "
      >
        <h5 class="text-uppercase small">La gravidanza e la fotografia</h5>
        <h2>Neonato</h2>
        <p>
          Ciao, sono Laura Cesaretti, fotografa specializzata in servizi
          fotografici per Neonati, Bambini, Maternità e Famiglie. Vivo e lavoro
          a Roma, ma spesso la fotografia mi porta in altre città e luoghi
          meravigliosi.
        </p>
        <NuxtLink to="/servizi-fotografici/Neonato">
          <button class="btn btn-dark">Scopri il servizio</button>
        </NuxtLink>
      </div>
    </div>

    <div data-aos="zoom-in" class="container my-5 category-container w-100">
      <div
        class="
          service-description
          w-100
          text-center text-md-right
          order-1 order-md-0
          pr-0
          mt-3
          pr-md-5
          mt-lg-0
        "
      >
        <h5 class="text-uppercase small">La gravidanza e la fotografia</h5>
        <h2>Bebè</h2>
        <p>
          Ciao, sono Laura Cesaretti, fotografa specializzata in servizi
          fotografici per Neonati, Bambini, Maternità e Famiglie. Vivo e lavoro
          a Roma, ma spesso la fotografia mi porta in altre città e luoghi
          meravigliosi.
        </p>
        <NuxtLink to="/servizi-fotografici/Bebè">
          <button class="btn btn-dark">Scopri il servizio</button>
        </NuxtLink>
      </div>

      <div class="category-section w-100 order-0 order-md-1">
        <NuxtLink to="/servizi-fotografici/Bebè">
          <img
            src="~assets/images/Laura_Cesaretti_Photography_Bebè.jpg"
            class="img-fluid rounded"
            alt=""
          />
        </NuxtLink>
      </div>
    </div>

    <div data-aos="zoom-in" class="container mb-5 category-container w-100">
      <div class="category-section w-100">
        <NuxtLink to="/servizi-fotografici/Cake-smash">
          <img
            src="~assets/images/Laura_Cesaretti_Photography_Cake_Smash.jpg"
            class="img-fluid rounded"
            alt=""
          />
        </NuxtLink>
      </div>

      <div
        class="
          service-description
          text-center text-md-left
          w-100
          pl-0
          mt-3
          pl-md-5
          mt-lg-0
        "
      >
        <h5 class="text-uppercase small">La gravidanza e la fotografia</h5>
        <h2>Cake_Smash</h2>
        <p>
          Ciao, sono Laura Cesaretti, fotografa specializzata in servizi
          fotografici per Neonati, Bambini, Maternità e Famiglie. Vivo e lavoro
          a Roma, ma spesso la fotografia mi porta in altre città e luoghi
          meravigliosi.
        </p>
        <NuxtLink to="/servizi-fotografici/Cake-smash">
          <button class="btn btn-dark">Scopri il servizio</button>
        </NuxtLink>
      </div>
    </div>

    <!-- <Related categoryName="" data-aos="zoom-in" /> -->
    <Footer />
  </div>
</template>

<script>
export default {
  name: "Servizi",
  head: {
    title: "Chi Sono - Laura Cesaretti - Servizi Fotografici Roma",
  },
};
</script>
