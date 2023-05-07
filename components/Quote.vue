<template>
  <div class="container-fluid">
    <div class="container main-paragraph-container text-center">
      <h3 class="mb-4">Ti Senti Pronta?</h3>
      <p class="lead">
        È universalmente riconosciuto che un lettore che osserva il layout di
        una pagina viene distratto dal contenuto testuale se questo è leggibile.
        Lo scopo dell'utilizzo.
      </p>

      <ModalContact :categoryName="categoryName" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    categoryName: {
      type: String,
      require: true,
    },
  },
};
</script>

<style lang="scss" scoped></style>
