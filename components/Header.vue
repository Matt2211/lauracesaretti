<template>
  <div>
    <div class="header shadow-sm" :class="isOnIndex && scrollY <= 200 ? 'bg-transparent' : 'bg-light'">
      <NuxtLink to="/">
        <h4 class="text-decoration-none mb-0">
          Laura Cesaretti 
          <!-- <span class="home-headline">Fine Art Portrait Photography</span> -->
        </h4>
      </NuxtLink>
      
      <div class="d-lg-none" @click="showMobileMenu = !showMobileMenu" :class="[isOnIndex && scrollY <= 200 ? 'text-light' : 'text-dark', showMobileMenu === true && scrollY <= 200 ? 'text-dark' : 'text-light']">
        {{showMobileMenu ? 'close' : 'open'}}
      </div>

      <ul class="d-none d-lg-flex main-menu list-unstyled m-0" :class="isOnIndex && scrollY <= 200 ? 'text-light' : 'text-dark' ">
        <NuxtLink to="/chi-sono"><li class="text-uppercase">Chi sono</li></NuxtLink>
        <NuxtLink to="/servizi"><li class="text-uppercase">Servizi Fotografici</li></NuxtLink>
        <NuxtLink to="/galleria"><li class="text-uppercase">Galleria</li></NuxtLink>
        <!-- <NuxtLink to="/regalo"><li class="ml-4 text-uppercase">Fai un Regalo</li></NuxtLink> -->
        <NuxtLink to="/contatti"><li class="text-uppercase">Contatti</li></NuxtLink>
        <li>
          <b-button v-b-modal.modal-center-header :variant="isOnIndex && scrollY <= 200 ? 'light' : 'dark'" class="d-block">Richiedi Preventivo</b-button>
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
        <NuxtLink to="/servizi"><li class="text-uppercase">Servizi Fotografici</li></NuxtLink>
        <NuxtLink to="/galleria"><li class="text-uppercase">Galleria</li></NuxtLink>
        <!-- <NuxtLink to="/regalo"><li class="ml-4 text-uppercase">Fai un Regalo</li></NuxtLink> -->
        <NuxtLink to="/contatti"><li class="text-uppercase">Contatti</li></NuxtLink>
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


<style lang="scss">
.overlay {
  background-color: #ffffff;
  position: absolute;
  height: 100%;
  width: 100%;
}

</style>