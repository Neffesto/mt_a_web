<template>
  <section class="footer-press-down">
    <Header />
    <router-view />
    <Footer />
  </section>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    Header,
    Footer,
  },
};
</script>


<style lang="scss">
</style>
