<template lang="pug">
  div
    <hzqing-vue-timeline timelineColor="#fff" timeContentColor="#f5f5f5" :dataList="data"></hzqing-vue-timeline>
</template>

<script>
export default {
  name: 'Historia',
  data: () => {
    return {
      data: [
        {
            img: 'static/touxiang.jpeg',
            title: 'Evento 1',
            content: 'asdada'
        },
        {
            img: 'static/one.jpeg',
            title: 'Evento 2',
            content: 'asda'
        },
        {
            img: 'Evento 3',
            title: 'sadd',
            content: 'asdadsd'
        }
    ]
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
div #hzqing .timeline-row .timeline-time { color: gray; }
</style>
