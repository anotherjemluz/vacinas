<template lang="pug">
  div#historia
</template>

<script>
export default {
  name: 'Historia',
  data: () => {
    return {
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
  top: 200px;
}

div #hzqing .timeline-row .timeline-time { color: gray; }
</style>
