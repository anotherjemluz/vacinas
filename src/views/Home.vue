<template lang="pug">
  div.home
    Inicio()
    Historia()
    Mitos()
    Vacinacao()
    Carteira()

</template>

<script>
// @ is an alias to /src
import Inicio from '@/components/Inicio.vue'
import Historia from '@/components/Historia.vue'
import Mitos from '@/components/Mitos.vue'
import Vacinacao from '@/components/Vacinacao.vue'
import Carteira from '@/components/Carteira.vue'

import Sobre from '@/components/Sobre.vue'

export default {
  name: 'home',
  components: { Inicio, Historia, Mitos, Vacinacao, Carteira, Sobre }
}
</script>
