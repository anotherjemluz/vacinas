<template lang="pug">
  div#mitos
    h1 Mitos sobre #[br] vacinas

    div.janela(v-for='(mito,index) in mitos' :id='mito.id' @click='fecharJanela(index)')
      div.barra_pesquisa
        h4.mobile-slice(v-if='mobile') {{ mito.manchete.slice(0,20)+'...' }}
        h4.desktop-slice(v-if='!mobile') {{ mito.manchete.slice(0,40)+'...' }}
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
      mitos: array,
      mobile: false
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
      this.mobile = true
      for(let i = 0; i < this.mitos.length; i++) {
        let id = i
        id++
        
        let margin = `${200 + 40 + 10 * id}px auto 0px auto`
        document.getElementById(id).style.margin = margin;
      }
    } else {      
      this.mobile = false
      for(let i = 0; i < this.mitos.length; i++) {
        let id = i
        id++

        let margin = `${300 + 10 * id}px 0px 0px  ${200 + 20 * id}px `
        document.getElementById(id).style.margin = margin;
      }
    }

  }
}
</script>

<style lang='scss'>
#mitos {
  display: flex;

  .janela {
    font-family: 'Roboto', sans-serif;
    background-color: #FFF;
    box-shadow: 0px 4px 50px 5px #00000010; 
    border-radius: 10px;
    position: absolute;
    border: 1px solid black;


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
    background-image: url('../assets/fundo-mitos-mobile.png');
    justify-content: center;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 800px;

    h1 { 
      font-size: 50px; 
      margin: 10vh 0 0 0vw;
    }

    .janela { 
      width: 90vw;

      .barra_pesquisa {
        width: 90vw;
      }
    }
  }

  // DESKTOP
  @media only screen and (min-width: 901px) {
    background-image: url('../assets/fundo-mitos-desktop.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 1500px;

    h1 { 
      font-size: 90px; 
      margin: 40vh 0 0 55vw;
    }

    .janela { 
      max-width: 600px;

      .barra_pesquisa {
        min-width: 600px;
      }

      .conteudo {
        h3 {
          font-size: 30px;
          padding: 40px 40px;  

        }

        p {
          font-size: 18px;
          margin-bottom: 60px;
          padding: 0 50px;  
        }
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
    border: 1px solid black;
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
