<template>
<div>
  <form v-if="emailSuccess === false" ref="form" @submit.prevent="sendEmail">
    <div class="row mb-4" style="gap: 20px 0">
     
     
      <div class="col-12 col-md-6">
        <label for="user_name">Nome*</label>
        <input type="text" name="user_name" id="user_name" class="form-control" placeholder="Nome" required />
      </div>
     
     
      <div class="col-12 col-md-6">
        <label for="to_lastname">Cognome*</label>
        <input type="text" name="user_lastname" id="user_lastname" class="form-control" placeholder="Cognome" required />
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
      <div class="col-12 col-md-6">
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
    </div>

    <div v-show="optionsEnabled" class="contact-options mb-3">
      <div class="form-check">
        <input
          name="fineArt"
          class="form-check-input"
          type="checkbox"
          value="fineArt"
          id="fineArt"
          :checked="categoryName === 'Fine Art' ? 'checked' : ''"
        />
        <label class="form-check-label" for="fineArt">
          Maternità Fine Art
        </label>
      </div>
      <div class="form-check">
        <input
          name="lifeStyle"
          class="form-check-input"
          type="checkbox"
          value="lifeStyle"
          id="lifeStyle"
         :checked="categoryName === 'Life Style' ? 'checked' : ''"
        />
        <label class="form-check-label" for="lifeStyle">
          Maternità Life Style
        </label>
      </div>




      <div class="form-check">
        <input
          name="neonato"
          class="form-check-input"
          type="checkbox"
          value="neonato"
          id="neonato"
          :checked="categoryName === 'Neonato' ? 'checked' : ''"
        />
        <label class="form-check-label" for="neonato">Neonato</label>
      </div>





      <div class="form-check">
        <input
          name="bebe"
          class="form-check-input"
          type="checkbox"
          value="bebe"
          id="bebe"
          :checked="categoryName === 'Bebè' ? 'checked' : ''"
        />
        <label class="form-check-label" for="bebe">Bebè</label>
      </div>
      <div class="form-check">
        <input
          name="cakeSmash"
          class="form-check-input"
          type="checkbox"
          value="cakeSmash"
          id="cakeSmash"
         :checked="categoryName === 'Cake Smash' ? 'checked' : ''"
        />
        <label class="form-check-label" for="cakeSmash">Cake Smash</label>
      </div>
    </div>

    <div class="form-group">
      <label for="user_message"
        >Scrivi qui il tuo messaggio*</label
      >
      <textarea
        class="form-control"
        name="user_message"
        id="user_message"
        rows="5"
      ></textarea>
    </div>
    <div class="w-100 d-flex align-items-center justify-content-between">
      <p class="small mb-0">I campi contrassegnati con "*" sono obbligatori.</p>
      <button type="submit" class="btn btn-dark d-block ml-auto">
        Invia Email
      </button>
    </div>
  </form>

 
    <h4 v-if="emailSuccess" class="display-5 text-center">Grazie per la tua email!</h4>
    


  </div>

  
</template>

<script>
import emailjs from "@emailjs/browser";

export default {
  name: "Contacts",
  data() {
    return {
      emailSuccess: false
    }
  },
  props: {
    optionsEnabled: {
      type: Boolean,
      required: false,
      default: false,
    },
    categoryName: {
      type: String,
      required: false,
    }
  },
  methods: {
    sendEmail() {
      emailjs
        .sendForm(
          "service_0smn389",
          "template_nv4dhfd",
          this.$refs.form,
          "Wv-_Y_OTYnAimnkVi"
        )
        .then(
          (result) => {
            this.emailSuccess = true
            console.log("SUCCESS!", result.text);
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
    },
  },
};
</script>
