<template>
  <div class="col-12 p-0 index-wrapper" :class="isSmall ? 'col-md-4' : ' col-md-6'">
    <NuxtLink :to="link">
      <div class="col-12 p-0 index-img-wrapper">
        <h2 class="text-white position-absolute text-center w-100">{{title}}</h2>
        <p class="position-absolute text-white">Guarda il Servzio</p>

        <img
          :src="image" 
          class="img-fluid h-100 w-100"
          :alt="alt"
        />
      </div>
    </NuxtLink>
  </div>
</template>

<script>
export default {
    props: {
        link: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        image: {
            type: String,
            required: true
        },
        alt: {
            type: String,
            required: true
        },
        isSmall: {
          type: Boolean,
          required: false
        }
        
    }
};
</script>

<style lang="scss" scoped></style>
