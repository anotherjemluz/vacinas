<template lang="pug">
  div#historia
    h1 Hístoria das vacinas

    div.evento_grid
      div.evento(v-for='(evento, index) in cronologia')
        h2 {{ evento.ano }}
        p {{ evento.descricao }}


</template>

<script>
import Historia from '../../historia.json'

export default {
  name: 'Historia',
  data: () => {
    return {
      cronologia: Historia
    }
  },
  methods: {
    hideJapas() {
      let japas = document.getElementsByTagName("span")
      for (let i = japas.length - 1; i >= 0; --i) {
          japas[i].remove()
      }
    }
  },
  mounted() {
    this.hideJapas()
  }
}
</script>

<style scoped lang='scss'>
#historia {
  margin-top: 100px;

  .evento_grid {
    display: flex;
    // grid-template-columns: repeat(auto-fit, minmax(300, 1fr)); 
    max-width: 80vw;
    justify-content: center;


    .evento {
      max-width: 400px;
      padding: 20px;
    }

  }

  // MOBILE
  @media only screen and (max-width: 900px) {
    h1 { 
      font-size: 50px; 
      margin: 0vh 0 0 0vw;
    }

    
  }

  // DESKTOP
  @media only screen and (min-width: 901px) {
    padding: 0px 10vw ;

    h1 { 
      font-size: 90px; 
      margin: 0vh 0 5vh 0vw;
    }

    h2 { 
      font-size: 40px; 
      margin: 0vh 0 5vh 0vw;

    }

    p { 
      font-family: 'Roboto', sans-serif;
      font-size: 15px; 
      }
  }
}

</style>
