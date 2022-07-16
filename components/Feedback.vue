<template>
     <div class="container">
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      class="text-center py-5"
      indicators
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
     
      <!-- Slides with img slot -->
      <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
      <b-carousel-slide>
        <template #img>
          <img
            class="d-block m-auto rounded-circle img-fluid"
            width="200"
            height="200"
            src="~assets/images/person.jpg"
            alt="image slot"
          >
          <div class="my-5">
            <h4>Nome Persona</h4>
            <div class="col-12 col-md-6 offset-md-3">
             <p>Molti software di impaginazione e
              web design utilizzano Lorem Ipsum come testo modello. Molte versioni
             l testo sono state prodotte negli anni, a volte casualmente, a volte</p>
           </div>
          </div>
        </template>
      </b-carousel-slide>
      <b-carousel-slide>
        <template #img>
          <img
            class="d-block m-auto rounded-circle img-fluid"
            width="200"
            height="200"
            src="~assets/images/person.jpg"
            alt="image slot"
          >
           <div class="my-5">
            <h4>Nome Persona</h4>
            <div class="col-12 col-md-6 offset-md-3">
             <p>Molti software di impaginazione e
              web design utilizzano Lorem Ipsum come testo modello. Molte versioni
             l testo sono state prodotte negli anni, a volte casualmente, a volteMolti software di impaginazione e
              web design utilizzano Lorem Ipsum come testo modello. Molte versioni
             l testo sono state prodotte negli anni, a volte casualmente, a volte</p>
           </div>
          </div>
        </template>
      </b-carousel-slide>
      <b-carousel-slide>
        <template #img>
          <img
            class="d-block m-auto rounded-circle img-fluid"
            width="200"
            height="200"
            src="~assets/images/person.jpg"
            alt="image slot"
          >
           <div class="my-5">
            <h4>Nome Persona</h4>
           <div class="col-12 col-md-6 offset-md-3">
             <p>Molti software di impaginazione e
              web design utilizzano Lorem Ipsum come testo modello. Molte versioni
             l testo sono state prodotte negli anni, a volte casualmente, a volte</p>
           </div>
          </div>
        </template>
      </b-carousel-slide>
    </b-carousel>

  </div>
</template>

<script>
    export default {
        name: "Feedback",
    }
</script>

