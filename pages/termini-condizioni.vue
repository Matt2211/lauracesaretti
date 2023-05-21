<template>
  <div>
    <BannerHero
      title="Termini e Condizioni"
      subTitle="Leggi e compila il form"
    />

    <div class="container terms-container-wrapper d-flex flex-row ">

    <div class="container terms-container border p-2 p-md-4">
      <ul class="terms">
        <li v-for="term in showTerms" :key="term.id">
          <h6>{{ term.title }}</h6>
          <p>{{ term.paragraph }}</p>
        </li>
      </ul>
    </div>


    <form ref="form" @submit.prevent="sendEmail" class="terms-form border py-5 px-2">
    




     <div class="d-flex flex-wrap" style="gap: 20px 0;"> 
      <div class="col-12 col-md-6">
         <label for="user_name">Nome*</label>
         <input
           type="text"
           name="user_name"
           id="user_name"
           class="form-control"
           placeholder="Nome"
           required
         />
       </div>
      
       <div class="col-12 col-md-6">
         <label for="user_email">Indirizzo Email*</label>
         <input
           type="email"
           name="user_email"
           class="form-control"
           id="user_email"
           aria-describedby="emailHelp"
           placeholder="Indirizzo Email"
           required
         />
       </div>

      <div class="col-12 col-md-4">
        <label for="user_phone">Codice Fiscale</label>
        <input
          type="tel"
          name="user_phone"
          class="form-control"
          id="user_phone"
          aria-describedby="telephone"
          placeholder="Telefono"
          required
        />
      </div>

      <div class="col-12 col-md-4">
        <label for="user_phone">Telefono*</label>
        <input
          type="tel"
          name="user_phone"
          class="form-control"
          id="user_phone"
          aria-describedby="telephone"
          placeholder="Telefono"
          required
        />
      </div>

      <div class="col-9 col-md-4">
        <label for="user_name">Indirizzo</label>
        <input
          type="text"
          name="user_name"
          id="user_name"
          class="form-control"
          placeholder="Nome"
          required
        />
      </div>
      <div class="col-3 col-md-2">
        <label for="user_name">N.</label>
        <input
          type="text"
          name="user_name"
          id="user_name"
          class="form-control"
          placeholder="N."
          required
        />
      </div>

    

     
        <div class="col-12 col-md-4">
          <label for="user_name">Città</label>
          <input
            type="text"
            name="user_name"
            id="user_name"
            class="form-control"
            placeholder="Nome"
            required
          />
        </div>

        <div class="col-6 col-md-3">
          <label for="user_name">Stato</label>
          <input
            type="text"
            name="user_name"
            id="user_name"
            class="form-control"
            placeholder="Nome"
            required
          />
        </div>
        <div class="col-6 col-md-3">
          <label for="user_name">CAP</label>
          <input
            type="text"
            name="user_name"
            id="user_name"
            class="form-control"
            placeholder="Nome"
            required
          />
        </div>
      </div>











     

      <div v-if="test" class="col-12 terms-member-container">
        <label for="user_name"
          >Nome completo e data di nascita di tutti i componenti della
          sessione*</label
        >
        <div class="terms-member border-bottom pb-3">
          <div
            class="d-flex flex-row aling-items-center justify-content-between"
          >
            <h6 class="mb-0">Persona 1</h6>
            <h6 class="mb-0">x</h6>
          </div>

          <input
            type="text"
            name="user_name"
            id="user_name"
            class="form-control"
            placeholder="Nome"
            required
          />
          <input
            type="date"
            name="user_name"
            id="user_name"
            class="form-control"
            placeholder="Nome"
            required
          />
        </div>
        <div class="terms-member border-bottom pb-3">
          <input
            type="text"
            name="user_name"
            id="user_name"
            class="form-control"
            placeholder="Nome"
            required
          />
          <input
            type="date"
            name="user_name"
            id="user_name"
            class="form-control"
            placeholder="Nome"
            required
          />
        </div>

        <p>Aggiung persona</p>
      </div>

      <div v-if="test" class="col-12">
        <label for="start">Data</label>
        <input
          type="date"
          name="user_name"
          id="user_name"
          class="form-control"
          placeholder="Nome"
          required
        />
      </div>

      <div v-if="test" class="col-12">
        <div class="form-check">
          <input
            name=""
            class="form-check-input"
            type="checkbox"
            value=""
            id="acconseto"
          />
          <label class="form-check-label" for="acconseto"
            >Ho letto e acconsento ai Termini e Condizioni dello Studio</label
          >
        </div>
        <div class="form-check">
          <input
            name=""
            class="form-check-input"
            type="checkbox"
            value=""
            id="acconseto"
          />
          <label class="form-check-label" for="acconseto"
            >Autorizzo il trattamento dei dati personali ai sensi del Reg. UE
            679/2016</label
          >
        </div>

        <button type="submit" class="btn btn-md btn-dark">Invia modulo</button>
      </div>
    </form>

  </div>
  
  </div>
</template>

<script>
export default {
  name: "TerminiCondizioni",
  computed: {
    showTerms() {
      return this.$store.state.terms.termsList.filter(function (item) {
        return item.isActive === true;
      });
    },
  },
};
</script>
