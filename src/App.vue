<template lang="pug">
  div#app(@scroll='setProgress()')
    <!-- Title  -->
    div.start(v-show='showStart')
      h1(@click='boraVacinar') Bora Vacinar?
      img.dr_img(src='./assets/dr.svg')

    <!-- Nav  -->
    Nav(v-show='showContent')

    <!-- Content  -->
      div.pIdade(v-show='showIdade')
        input(
          type='text'
          placeholder='Qual a sua idade?'
        )
        h1(@click='pIdade') Próximo
        img.dr_input_img(src='./assets/dr.svg')

      div.pEstado(v-show='showEstado')
        input(
          type='text'
          placeholder='Qual seu estado?'
        )
        h1(@click='pEstado') Próximo
        img.dr_input_img(src='./assets/dr.svg')


      Home(v-show='showContent')

    <!-- Footer  -->
    footer(v-show='showContent')
      a(to="/sobre") Sobre



</template>

<script>
  import Nav from '@/components/Nav.vue'
  import Home from '@/views/Home.vue'

  export default {
    components: { Home, Nav },
    data: () => {
      return {
        showStart: true,
        showIdade: false,
        showEstado: false,
        showContent: false,
        scrolled: false,
        pInicio: 92,
        pHistoria: 77,
        pMitos: 57,
        pVacinacao: 41,
        pCarteira: 19
      }
    },
    methods: {
      boraVacinar() {
        this.showStart = !this.showStart
        this.showIdade = !this.showIdade
      },
      pIdade() {
        this.showIdade = !this.showIdade
        this.showEstado = !this.showEstado
      },
      pEstado() {
        this.showEstado = !this.showEstado
        this.showContent = !this.showContent
      },
      handleScroll () {
        this.scrolled = window.scrollY > 0;

        if(window.scrollY > 0) {
          // let complete = 565
        
          // relaciona a altura e o scroll e obtem a porcentagem do scroll em relação a altura
          // let scrollPercent =  (window.scrollY / document.documentElement.scrollHeight) * 100
          let scrollPercent = window.scrollY / (document.documentElement.scrollHeight / 100)
  
          // 1% do progresso
          let progressPercent = `${100 - (scrollPercent + 10)}%`
  
          // define o width do progresso
          let progress = document.getElementById("complete")
          progress.setAttribute("width", progressPercent)
  
          console.log("scroll " + window.scrollY)
        }

      },
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

.start, .pIdade, .pEstado {
  color: #01403A;
  background-color: #04CCB8;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  .dr_img, .dr_input_img {
    height: 50vh;
  }

  h1, input {
    position: absolute;
    display: inline;
  }

  h1 {
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

  input {
    font-size: 30px;
    border-radius: 20px;
    padding: 10px 20px;
    border-style: none;
    outline: none;
  }

  // MOBILE
  @media only screen and (max-width: 900px) {
    h1 { margin: 80px 0 0 0; }
  }
  
  // DESKTOP
  @media only screen and (min-width: 901px) {
    h1 { margin: 100px 0 0 -10px; }
  }
}
</style>
