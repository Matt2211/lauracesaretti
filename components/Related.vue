<template>
  <div :categoryName="categoryName" class="related-products-container">
    <div class="container py-5">
      <div class="row text-center flex-column mb-4">
        <h4>
          Scopri anche gli altri servizi fotografici
        </h4>
        <p class="lead">Forse potrebbe interessarti</p>
      </div>
      <div class="row related-products">
        <div
          class="col-6 col-md-3"
          :class="{ 'd-none': categoryName === 'maternità' }"
        >
          <NuxtLink to="/servizi-fotografici/maternità">
            <img
              src="~/assets/images/Laura_Cesaretti_Photography_Fine_Art.jpg"
              class="img-fluid rounded"
              alt=""
            />
            <h5 class="text-center mt-2">Maternità</h5>
          </NuxtLink>
        </div>
        <div
          class="col-6 col-md-3"
          :class="{ 'd-none': categoryName === 'famiglia' }"
        >
          <NuxtLink to="/servizi-fotografici/famiglia">
            <img
              src="~/assets/images/Laura_Cesaretti_Maternità_Life_Style.jpg"
              class="img-fluid rounded"
              alt=""
            />
            <h5 class="text-center mt-2">Famiglia</h5>
          </NuxtLink>
        </div>
        <div
          class="col-6 col-md-3"
          :class="{ 'd-none': categoryName === 'neonato' }"
        >
          <NuxtLink to="/servizi-fotografici/neonato">
            <img
              src="~/assets/images/Laura_Cesaretti_Photography_Neonato.jpg"
              class="img-fluid rounded"
              alt=""
            />
            <h5 class="text-center mt-2">Neonato</h5>
          </NuxtLink>
        </div>
        <div
          class="col-6 col-md-3"
          :class="{ 'd-none': categoryName === 'bebè' }"
        >
          <NuxtLink to="/servizi-fotografici/bebè">
            <img
              src="~/assets/images/Laura_Cesaretti_Photography_Bebè.jpg"
              class="img-fluid rounded"
              alt=""
            />
            <h5 class="text-center mt-2">Bebè</h5>
          </NuxtLink>
        </div>
        <div
          class="col-6 col-md-3"
          :class="{ 'd-none': categoryName === 'cakeSmash' }"
        >
          <NuxtLink to="/servizi-fotografici/cake-smash">
            <img
              src="~/assets/images/Laura_Cesaretti_Photography_Cake_Smash.jpg"
              class="img-fluid rounded"
              alt=""
            />
            <h5 class="text-center mt-2">Cake Smash</h5>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Related",
  props: {
    categoryName: {
      type: String,
      required: true,
    },
  },
};
</script>
