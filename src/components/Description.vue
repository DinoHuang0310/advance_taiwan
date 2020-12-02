<template>
  <div id="description-box">
    <p>在這十年間，台灣人是否也有感受到社會在進步？根據《今周刊》調查，有32%的人認為台灣確實正在進步。</p>
    <p>今年，是台灣國際能見度最高的一年，也是民眾很有感的時候。</p>
    <p>除了防疫成果之外，2020年，台灣還有許多「進步事件」，這些事件背後都是過去聚集眾人努力，一點一滴前進，成為今日大家可以共享的成果。</p>
    <div v-if="windowWidth > 480" class="prompt">
      <IcoScrollDown />
    </div>
  </div>
</template>

<script>
import IcoScrollDown from './IcoScrollDown'

export default {
  components: {
    IcoScrollDown
  },
  props: {
    windowWidth: {
      type: Number,
      required: true
    }
  }
}
</script>

<style>
#description-box {
  position: relative;
  white-space: pre-wrap;
}
.prompt {
  position: absolute;
  bottom: -2em;
  right: 0;
  transform: translate(0, 100%);
}

@media screen and (max-width: 480px) {
  #description-box p {
    font-size: 4vw;
  }
}

</style>
