<template lang="pug">
  div#carteira
    h1 Carteira: Vacinas recomendadas para a sua idade.

    div.vacinas_grid
      div.vacina(
        v-for='(vacina, index) in vacinas' 
        v-show='userIdade < 10 && vacina.classificacao === "Criança"'
        )
        h2 {{ vacina.nome }}
        p {{ vacina.doses }}
        p {{ vacina.descricao }}
        p #[strong Protege contra:] {{ vacina.protecaoContra }}
        p #[strong Classificação] {{ vacina.classificacao }}
        p #[strong  Oferta:]  {{ vacina.oferta }}
        p #[strong Contra indicação:]  {{ vacina.contraIndicacao ? `${vacina.contraIndicacao}` : 'nenhuma'}}

      div.vacina(
        v-for='(vacina, index) in vacinas' 
        v-show='userIdade = 10 && userIdade < 20 && vacina.classificacao === "Adolescente"'
        )
        h2 {{ vacina.nome }}
        p {{ vacina.doses }}
        p {{ vacina.descricao }}
        p #[strong Protege contra:] {{ vacina.protecaoContra }}
        p #[strong Classificação] {{ vacina.classificacao }}
        p #[strong  Oferta:]  {{ vacina.oferta }}
        p #[strong Contra indicação:]  {{ vacina.contraIndicacao ? `${vacina.contraIndicacao}` : 'nenhuma'}}

      div.vacina(
        v-for='(vacina, index) in vacinas' 
        v-show='userIdade = 20 && userIdade < 60 && vacina.classificacao === "Adulto"'
        )
        h2 {{ vacina.nome }}
        p {{ vacina.doses }}
        p {{ vacina.descricao }}
        p #[strong Protege contra:] {{ vacina.protecaoContra }}
        p #[strong Classificação] {{ vacina.classificacao }}
        p #[strong  Oferta:]  {{ vacina.oferta }}
        p #[strong Contra indicação:]  {{ vacina.contraIndicacao ? `${vacina.contraIndicacao}` : 'nenhuma'}}


      div.vacina(
        v-for='(vacina, index) in vacinas' 
        v-show='vacina.classificacao === "Gestantes"'
        )
        h2 Outras vacinas:
        h2 {{ vacina.nome }}
        p {{ vacina.doses }}
        p {{ vacina.descricao }}
        p #[strong Protege contra:] {{ vacina.protecaoContra }}
        p #[strong Classificação] {{ vacina.classificacao }}
        p #[strong  Oferta:]  {{ vacina.oferta }}
        p #[strong Contra indicação:]  {{ vacina.contraIndicacao ? `${vacina.contraIndicacao}` : 'nenhuma'}}



</template>

<script>
import ListaVacinas from "../../vacinas.json";
import { mapState } from "vuex";

export default {
  name: "Carteira",
  computed: mapState(["userIdade"]),
  data: () => {
    return {
      vacinas: ListaVacinas
    };
  }
};
</script>

<style lang='scss'>
#carteira {

  .vacinas_grid {
    display: flex;  
    flex-wrap: no-wrap;
    justify-content: center;  
  }

  .vacina {
    background-color: #60b9b0;
    border: 2px solid black;
    border-radius: 20px;
    font-family: 'Roboto', sans-serif;

  } 

  // MOBILE
  @media only screen and (max-width: 900px) { 

  }

  // DESKTOP
  @media only screen and (min-width: 901px) {
    margin-bottom: 20vh;




    h1 { 
      font-size: 90px; 
      margin: 0vh 0 0 0vw;
      padding: 0px 30vw 10vh 30vw;
    }

    .vacinas_grid {
      overflow-x: auto;
    }

    .vacina {
      min-width: 400px;
      margin: 20px;
      padding: 40px;
      color: black;
      display: inline-block;
    }


    p {
      font-size: 18px;
      padding: 10px 0;  
    }

  }

}
</style>
