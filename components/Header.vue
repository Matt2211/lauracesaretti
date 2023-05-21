<template>
  <div>...</div>
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