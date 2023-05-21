<template>
  <div
    class="header-mobile-container"
    :class="{ 'position-fixed': showSubHeader === true }"
  >
    <div v-show="showSubHeader === false" class="header-mobile px-3">
      <NuxtLink to="/"><h4 class="mb-0">Laura Cesaretti</h4></NuxtLink>
      <div @click="showSubHeader = !showSubHeader">menu</div>
    </div>

    <div
      data-aos="slide-left"
      v-if="showSubHeader"
      class="header-subsection vh-100 p-5"
    >
      <div
        class="header-mobile-closing"
        @click="showSubHeader = false"
        type="button"
      >
        X
      </div>

      <div class="header-mobile-menu-container">
        <div>
          <ul class="header-mobile-menu pt-5">
            <NuxtLink to="/"
              ><li @click="showSubHeader = false">Home</li></NuxtLink
            >
            <NuxtLink to="/bio"
              ><li @click="showSubHeader = false">Bio</li></NuxtLink
            >
            <NuxtLink to="/servizi-fotografici/maternità"
              ><li @click="showSubHeader = false">Maternità</li></NuxtLink
            >
            <NuxtLink to="/servizi-fotografici/famiglia"
              ><li @click="showSubHeader = false">Famiglia</li></NuxtLink
            >
            <NuxtLink to="/servizi-fotografici/neonato"
              ><li @click="showSubHeader = false">Neonato</li></NuxtLink
            >
            <NuxtLink to="/servizi-fotografici/bebè"
              ><li @click="showSubHeader = false">Bebè</li></NuxtLink
            >
            <NuxtLink to="/servizi-fotografici/cake-smash"
              ><li @click="showSubHeader = false">Cake Smash</li></NuxtLink
            >
            <NuxtLink to="/galleria"
              ><li @click="showSubHeader = false">Galleria</li></NuxtLink
            >
            <NuxtLink to="/contatti"
              ><li @click="showSubHeader = false">Contatti</li></NuxtLink
            >
          </ul>

          <b-button
            v-b-modal.modal-center-header
            variant="dark"
            class="ml-auto d-block btn-sm my-5 px-4"
            >Richiedi Preventivo</b-button
          >
          <b-modal
            hide-footer
            id="modal-center-header"
            size="lg"
            centered
            title="Richiesta Preventivo"
          >
            <Contacts optionsEnabled />
          </b-modal>
        </div>

        <ul class="header-mobile-menu menu-social">
          <li class="small">
            <a
              target="_blank"
              href="https://www.instagram.com/lauracesarettiphotography/"
              >Instagram</a
            >
          </li>
          <li class="small">
            <a target="_blank" href="https://www.pinterest.com/lauracesarettiph"
              >Pinterest</a
            >
          </li>
          <li class="small">
            <a
              target="_blank"
              href="https://facebook.com/people/@/lauracesarettiphotography"
              >Facebook</a
            >
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderMobile",
  data() {
    return {
      showSubHeader: false,
    };
  },
  watch: {
    showSubHeader: function () {
      if (this.showSubHeader) {
        document.documentElement.style.overflow = "hidden";
        return;
      }

      document.documentElement.style.overflow = "auto";
    },
  },
};
</script>
