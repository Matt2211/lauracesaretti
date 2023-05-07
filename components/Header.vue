<template>
  <div>
    <div class="header" :class="isOnIndex && scrollY <= 200 ? 'bg-transparent' : 'bg-white shadow-sm'">
      <NuxtLink to="/" class="logo">
        <h4 class="mb-0" :class="isOnIndex && scrollY <= 200 ? 'text-white' : 'text-black'">
          Laura Cesaretti
          <!-- <span class="home-headline">Fine Art Portrait Photography</span> -->
        </h4>
      </NuxtLink>
      
      <div class="d-lg-none" @click="showMobileMenu = !showMobileMenu" :class="[isOnIndex && scrollY <= 200 ? 'text-light' : 'text-dark', showMobileMenu === true && scrollY <= 200 ? 'text-dark' : 'text-light']">
        {{showMobileMenu ? 'close' : 'open'}}
      </div>

      <ul class="d-none d-lg-flex main-menu list-unstyled m-0" :class="isOnIndex && scrollY <= 200 ? 'text-light' : 'text-secondary'">
        <NuxtLink to="/chi-sono"><li>Chi sono</li></NuxtLink>
       
        <b-dropdown
          id="serviziFotografici"
          text="Servizi Fotografici"
          variant="link"
          toggle-class="text-decoration-none"
          :class="isOnIndex && scrollY <= 200 ? 'text-light' : 'text-secondary'"
          >
            <b-dropdown-item to="/servizi-fotografici/maternità">Maternità</b-dropdown-item>
            <b-dropdown-item to="/servizi-fotografici/famiglia">Famiglia</b-dropdown-item>
            <b-dropdown-item to="/servizi-fotografici/neonato">Neonato</b-dropdown-item>
            <b-dropdown-item to="/servizi-fotografici/bebè">Bebè</b-dropdown-item>
            <b-dropdown-item to="/servizi-fotografici/cake-smash">Cake Smash</b-dropdown-item>
        </b-dropdown>
       
        <NuxtLink to="/galleria"><li>Galleria</li></NuxtLink>
        <!-- <NuxtLink to="/regalo"><li class="ml-4 text-uppercase">Fai un Regalo</li></NuxtLink> -->
        <NuxtLink to="/contatti"><li>Contatti</li></NuxtLink>
        <li>
          <b-button v-b-modal.modal-center-header :variant="isOnIndex && scrollY <= 200 ? 'light' : 'dark'" class="d-block btn-sm">Richiedi Preventivo</b-button>
           <b-modal
          hide-footer
          id="modal-center-header"
          size="lg"
          centered
          title="Richiesta Preventivo"
        >
          <Contacts optionsEnabled />
        </b-modal>
        </li>
      </ul>

      
      
    </div>



     <div v-if="showMobileMenu" id="myNav" class="overlay d-flex align-items-center justify-content-center flex-column">
 
        <ul class="d-flex flex-column align-items-center justify-content-center main-menu list-unstyled m-0" style="gap: 30px;">
        <NuxtLink to="/servizi"><li>Servizi Fotografici</li></NuxtLink>
        <NuxtLink to="/galleria"><li>Galleria</li></NuxtLink>
        <!-- <NuxtLink to="/regalo"><li class="ml-4 text-uppercase">Fai un Regalo</li></NuxtLink> -->
        <NuxtLink to="/contatti"><li>Contatti</li></NuxtLink>
        <li>
          <b-button v-b-modal.modal-center-header variant="dark" class="d-block">Richiedi Preventivo</b-button>
           <b-modal
          hide-footer
          id="modal-center-header"
          size="lg"
          centered
          title="Richiesta Preventivo"
        >
          <Contacts optionsEnabled />
        </b-modal>
        </li>
      </ul>

      </div>
    </div>
</template>

<script>
    export default {
        name: 'Header',
        data() {
          return {
            scrollY: 0,
            showMobileMenu: false
          }
        },
        props: {
          isOnIndex: {
            type: Boolean,
            required: false,
            default: false
          }
        },
        methods: {
          handleScroll () {
           this.scrollY = window.scrollY
          }
        },
        beforeMount () {
          window.addEventListener('scroll', this.handleScroll);
        },
        beforeDestroy() {
          window.removeEventListener('scroll', this.handleScroll);
        }
    }
</script>