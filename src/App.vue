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
        select(id="estado" name="estado")
          option(value="selecione") Selecione seu Estado
          option(v-for='estado in estados' value='esttado.sigla') {{ estado.nome }}

        h1(@click='pEstado') Próximo
        img.dr_input_img(src='./assets/dr.svg')

    <!-- -->
      Home(v-show='showContent')

    <!-- Footer  -->
    footer(v-show='showContent')
      a(to="/sobre") Sobre



</template>

<script>
  import Nav from '@/components/Nav.vue'
  import Home from '@/views/Home.vue'
  import array from '../estados.json'

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
        pCarteira: 19,
        estados: array,
        object: {
          name: 'Object Name',
        }
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
          // relaciona a rolagem com a porcentagem da altura
          let scrollPercent = window.scrollY / (document.documentElement.scrollHeight / 100)
  
          // define a porcentagem inversa complementar para ser usada no indicador de progresso da seringa
          let progressPercent = `${100 - (scrollPercent + 10)}%`
  
          // define o width do progresso
          let progress = document.getElementById("complete")
          progress.setAttribute("width", progressPercent)  
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
  // height: 5000px;

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

  h1, input, select, option {
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

  input, select {
    
    padding: 10px 20px;
    border-radius: 20px;
    border-style: none;
    outline: none;
  }

  select {
    color: #01403A;
  }

  option {
    font-size: 18px;

  }

  // MOBILE
  @media only screen and (max-width: 900px) {
    h1 { margin: 80px 0 0 0; }
    input { width: 70vw; font-size: 25px; }
    select { width: 80vw; font-size: 25px; }
  }
  
  // DESKTOP
  @media only screen and (min-width: 901px) {
    h1 { margin: 100px 0 0 -10px; }
    input, select { font-size: 30px; }

  }
}
</style>
