<template>
<div id="app">
    <Header />
    <Navbar />
    <router-view></router-view>
    <Footer />

  </div>
</template>
<script>
import Header from './components/Header.vue';
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';

export default {
  components: {
    Header,
    Navbar,
    Footer
  }
  
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Kadwa:wght@700&display=swap');
body {
  font-family: 'Kadwa', serif;
  background-color: #D4F0BD;
}
</style>