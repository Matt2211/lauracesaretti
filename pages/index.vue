<template>
  <div>
    <Header isOnIndex />
    <div class="banner-hero">
      <div class="text-center text-white">
        <h1 class="display-1">Laura Cesaretti</h1>
        <h2>Fine Art Portrait Photography</h2>
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
     
      <NuxtLink to="/servizi-fotografici/maternità-fine-art" class="w-100">
        <div class="wrapper-test">
          <div id="fineArt" class="category-section w-100">
            <h2 class="category-title">Fine Art</h2>
           
          
          </div>
        </div>
      </NuxtLink>

      <NuxtLink to="/servizi-fotografici/maternità-life-style" class="w-100">
        <div class="wrapper-test">
          <div id="lifeStyle" class="category-section w-100">
            <h2 class="category-title">Life Style</h2>
          </div>
        </div>
      </NuxtLink>


    </div> -->

    <div class="container-fluid p-0">
      <div class="d-flex flex-wrap">
        
        
          <div class="col-12 col-md-6 p-0 index-wrapper">
            <NuxtLink to="/servizi-fotografici/maternità-fine-art">
            <div class="col-12 p-0 index-img-wrapper">
              
              <h2 class="text-white position-absolute text-center w-100">Fine Art</h2>
              <img src="~assets/images/Laura_Cesaretti_Photography_Fine_Art.jpg" class="img-fluid h-100 w-100" alt="">
              
            </div>
             </NuxtLink>
          </div>
       
       
        
         <div class="col-12 col-md-6 p-0 index-wrapper">
           <NuxtLink to="/servizi-fotografici/maternità-life-style">
          <div class="col-12 p-0 index-img-wrapper">
            
            <h2 class="text-white position-absolute text-center w-100">Life Style</h2>
            <img src="~assets/images/Laura_Cesaretti_Maternità_Life_Style.jpg" class="img-fluid h-100 w-100" alt="">
            
          </div>
           </NuxtLink>
        </div>
       

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
        <div class="col-12 col-md-4 p-0 index-wrapper">
          <NuxtLink to="/servizi-fotografici/Neonato">
          <div class="col-12 p-0 index-img-wrapper">
            
            <h2 class="text-white position-absolute text-center w-100">Neonato</h2>
            <img src="~assets/images/Laura_Cesaretti_Photography_Neonato.jpg" class="img-fluid h-100 w-100" alt="">
            
          </div>
          </NuxtLink>
        </div>
       
       
       
         <div class="col-12 col-md-4 p-0 index-wrapper">
           <NuxtLink to="/servizi-fotografici/bebè">
          <div class="col-12 p-0 index-img-wrapper">
            
            <h2 class="text-white position-absolute text-center w-100">Bebè</h2>
            <img src="~assets/images/Laura_Cesaretti_Photography_Bebè.jpg" class="img-fluid h-100 w-100" alt="">
            
          </div>
           </NuxtLink>
        </div>


        <div class="col-12 col-md-4 p-0 index-wrapper">
          <NuxtLink to="/servizi-fotografici/cake-smash">
          <div class="col-12 p-0 index-img-wrapper">
            
            <h2 class="text-white position-absolute text-center w-100">Cake Smash</h2>
            <img src="~assets/images/Laura_Cesaretti_Photography_Cake_Smash.jpg" class="img-fluid h-100 w-100" alt="">
            
          </div>
          </NuxtLink>
        </div>


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
import Feedback from '~/components/Feedback.vue';



export default {
  components: { Feedback },
  name: "Home",
  head: {
    title: "Laura Cesaretti - Fine Art Portrait Photography - Roma"
  }
};
</script>
