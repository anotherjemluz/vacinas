<template lang="pug">
  div#app(@scroll='setProgress()')
    <!-- Title  -->
    div.start(v-show='isStart')
      h1(@click='isStart = !isStart') Bora Vacinar?
      img.dr_img(src='./assets/dr.svg')

    <!-- Nav  -->
    Nav(v-show='!isStart')

    <!-- Content  -->
      Home(v-show='!isStart')

    <!-- Footer  -->
    footer(v-show='!isStart')
      a(to="/sobre") Sobre



</template>

<script>
  import Nav from '@/components/Nav.vue'
  import Home from '@/views/Home.vue'

  export default {
    components: { Home, Nav },
    data: () => {
      return {
        isStart: true,
        scrolled: false,
        pInicio: 92,
        pHistoria: 77,
        pMitos: 57,
        pVacinacao: 41,
        pCarteira: 19
      }
    },
    methods: {
      handleScroll () {
        this.scrolled = window.scrollY > 0;

        if(window.scrollY > 0) {
          let complete = 565
        
          // relaciona a altura e o scroll e obtem a porcentagem do scroll em relação a altura
          let scrollPercent =  (window.scrollY / document.documentElement.scrollHeight) * 100
  
          // 1% do progresso
          let progressPercent = (complete / 100) * scrollPercent
  
          // define o width do progresso
          let progress = document.getElementById("complete")
          progress.setAttribute("width", progressPercent)
  
  
          console.log(scrollPercent)

        }

      },
      setProgress() {
        var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        var scrolled = (winScroll / height) * 100;
        document.getElementById("complete").style.width = scrolled + "%";


        // console.log(scrolled)
      }
    },
    created () {
      window.addEventListener('scroll', this.handleScroll);
    },
  }
</script>

<style lang="scss">
// CSS reset
* {
  margin: 0px;
  padding: 0px;
}

#app {
  font-family: 'Allan';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 5000px;

  a { 
    text-decoration: none; 
    color: black;
  }
} // fim do estilo global

.start {
  color: #01403A;
  background-color: #04CCB8;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  .dr_img {
    height: 50vh;
  }

  h1 {
    position: absolute;
    display: inline;
    border-radius: 20px;
    padding: 10px 30px;
    font-size: 48px;
    background-color: #F2F2F2;

    &:hover, &:focus {
      color: #F2F2F2;
      background-color: #01403A;
      cursor: pointer;
    }
  }

  // MOBILE
  @media only screen and (max-width: 900px) {
    h1 { margin: 80px 0 0 0; }
  }
  
  // DESKTOP
  @media only screen and (min-width: 901px) {
    h1 { margin: 150px 0 0 -10px; }
  }
}
</style>
