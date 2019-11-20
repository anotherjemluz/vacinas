<template lang="pug">
  div#app
    <!-- Title  -->
    h1 Vacine-se

    <!-- Nav  -->
    app.nav
      a(href="#inicio") Início 
      a(href="#historia") Hístoria 
      a(href="#mitos") Mitos
      a(href="#vacinacao") Vacinação
      a(href="#carteira") Carteira

    <!-- Content  -->
      Home

    <!-- Footer  -->
    div 
      a(to="/sobre") Sobre



</template>

<script>
  import Home from '@/views/Home.vue'
  export default {
    components: { Home }
  }
</script>

<style lang="scss">
// Estilo global
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  a { 
    text-decoration: none; 
    color: black;
  }
} // fim do estilo global

.nav {
  padding: 30px;

  a {
    margin: 5px;
    color: #b983f6;

    &.router-link-exact-active {
      color: #8a35eb;
    }
  }
}
</style>
