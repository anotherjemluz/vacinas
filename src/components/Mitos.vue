<template lang="pug">
  div#mitos
    h1 Mitos sobre vacinas

    div.janela(v-for='(mito,index) in mitos' :id='mito.id' @click='fecharJanela(index)')
      div.barra_pesquisa
        h4 {{ mito.manchete.slice(0,20)+'...' }}
        div.dots
          div.dot.green
          div.dot.yellow
          div.dot.red

      div.conteudo
        h3 {{ mito.manchete }}
        p {{ mito.resposta }}

</template>

<script>
import array from  '../../mitos.json'

export default {
  name: 'Mitos',
  data: () => {
    return {  
      mitos: array
    }
  },
  methods: {
    fecharJanela(id) {
      id++
      console.log(id)
      document.getElementById(id).style.display = "none";
    }
  },
  mounted() {
    let w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    console.log(w)

    if( w < 901 ) {
      for(let i = 0; i < this.mitos.length; i++) {
        let id = i
        id++
        
        let margin = `${40 + 10 * id}px auto 0px auto`
        document.getElementById(id).style.margin = margin;
      }
    } else {
      for(let i = 0; i < this.mitos.length; i++) {
        let id = i
        id++

        let margin = `${80 + 10 * id}px 0px 0px  ${80 + 20 * id}px `
        document.getElementById(id).style.margin = margin;
      }
    }

  }
}
</script>

<style lang='scss'>
#mitos {
  font-family: 'Roboto', sans-serif;
  display: flex;
  

  .janela {
    background-color: #FFF;
    box-shadow: 0px 4px 50px 5px #00000010; 
    border-radius: 10px;
    position: absolute;

    margin: 10px;
    .barra_pesquisa {
      background-color: #d9d9d9;
      border-radius: 10px 10px 0 0;
      display: flex;
      justify-content: space-between;

      padding: 10px 0;

      h4 { 
        background-color: #FFF;
        border-radius: 10px;
        display: inline;
        padding: 10px;
        margin-left: 20px;
        color: gray;
      }
    }

    .conteudo {
      padding: 30px 40px 30px 40px;
    }
  }

  
  // MOBILE
  @media only screen and (max-width: 900px) {
    justify-content: center;

    .janela { 
      width: 90vw;

      .barra_pesquisa {
        width: 90vw;
      }
    }
  }

  // DESKTOP
  @media only screen and (min-width: 901px) {
    .janela { 
      max-width: 550px;

      .barra_pesquisa {
        min-width: 550px;
      }
    }
  }

}

.dots {

  .dot {
    height: 20px;
    width: 20px;
    background-color: #bbb;
    border-radius: 50%;
    margin-left: 5px;
    display: inline-block;
  }

  .green { background-color: #77D24C; }
  .yellow { background-color: #E2BD39; }
  .red { 
    background-color: #D5646F; 
    cursor: pointer;
  }

  // MOBILE
  @media only screen and (max-width: 900px) {
    margin: 10px 10px 0 0;
  }

  // DESKTOP
  @media only screen and (min-width: 901px) {
    margin: 10px 30px 0 0;
  }
}


</style>
