<template>
  <div class="container mt-5">
    <b-button v-b-modal.modal-center variant="dark" class="d-block m-auto btn-lg"
      >Richiedi Preventivo</b-button
    >

    <b-modal
      hide-footer
      id="modal-center"
      size="lg"
      centered
      :title="categoryName + ' - ' + `Richiesta Preventivo`"
    >
      <Contacts :categoryName="categoryName"  />
    </b-modal>
  </div>
</template>

<script>
export default {
  name: "ModalContact",
  props: {
      categoryName: {
          type: String,
          required: true
      }
  }
};
</script>
