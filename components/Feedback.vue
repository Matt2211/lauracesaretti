<template>
  <div class="container">
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      class="text-center py-5"
      indicators
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Slides with img slot -->
      <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->

      <b-carousel-slide v-for="person in showFeedback" :key="person.id">
        <template #img>
          <div class="my-5">
            <h4>{{ person.name }}</h4>
            <div class="col-12 col-md-6 offset-md-3">
              <p class="small mb-0">
                {{ person.feedback }}
              </p>
            </div>
          </div>
        </template>
      </b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
export default {
  name: "Feedback",
  computed: {
    showFeedback() {
      return this.$store.state.feedback.feedbacks.filter(function (item) {
        return item.isActive === true;
      });
    },
  },
};
</script>
