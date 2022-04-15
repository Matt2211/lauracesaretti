<template>
  <footer>
    <div class="d-flex footer-sections pt-5 mb-5 text-center text-md-left flex-column flex-md-row">
        <div class="col-12 col-md-6">
            <h2 class="mb-0 text-dark">Laura Cesaretti</h2>
            <p class="small footer-text-lighter">Fine Art Portrait Photography, Italia - Roma. Foto professionali...</p>
            <p class="small text-dark mb-0">Telefoto: <span class="footer-text-lighter">+39 348 059 52 59</span></p>
            <p class="small text-dark">Email: <span class="footer-text-lighter">lauracesarettiphotography@gmail.com</span></p>

            <b-button v-b-modal.modal-center-footer variant="dark" class="d-block m-auto ml-md-0">Richiedi Preventivo</b-button>
            <b-modal
              hide-footer
              id="modal-center-footer"
              size="lg"
              centered
              title="Richiesta Preventivo"
            >
              <Contacts optionsEnabled />
            </b-modal>

        </div>

        <div class="col-12 col-md-3">
            <h6 class="text-dark">SERVIZI FOTOGRAFICI:</h6>
            <ul class="footer-list list-unstyled p-0">
              <li class="small"><NuxtLink to="/servizi-fotografici/maternità-fine-art">Maternità Fine Art</NuxtLink></li>
              <li class="small"><NuxtLink to="/servizi-fotografici/maternità-life-style">Maternità Lifestyle</NuxtLink></li>
              <li class="small"><NuxtLink to="/servizi-fotografici/neonato">Neonato</NuxtLink></li>
              <li class="small"><NuxtLink to="/servizi-fotografici/bebè">Bebè</NuxtLink></li>
              <li class="small"><NuxtLink to="/servizi-fotografici/cake-smash">Cake Smash</NuxtLink></li>
            </ul>
        </div>

        <div class="col-12 col-md-3">
            <h6 class="text-dark">SEGUIMI SU:</h6>
            <ul class="footer-list list-unstyled text-dark p-0">
                <li class="small"><a target="_blank" href="https://www.instagram.com/lauracesarettiphotography/">Instagram</a></li>
                <li class="small"><a target="_blank" href="https://www.pinterest.com/lauracesarettiph">Pinterest</a></li>
                <li class="small"><a target="_blank" href="https://facebook.com/people/@/lauracesarettiphotography">Facebook</a></li>
            </ul>
        </div>
    </div>
    <hr class="footer-divider">
    <div class="d-flex align-items-center justify-content-center justify-content-md-between flex-wrap">
      
      <h6 class="text-dark rights text-center text-md-left pb-3 mb-0">
        2022 Laura Cesaretti Fine Art Portrait Photography, Roma. All Rights
        Reserved
      </h6>
      <h6 class="text-dark rights text-center text-md-left pb-3 mb-0">
        Designed and Developed by: <a class="matteofelicidesign" target="_blank" href="https://www.linkedin.com/in/matteo-felici-7717456a">Matteo Felici</a>
      </h6>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer"
};
</script>
