<template>
  <header>
    <a href="https://www.businesstoday.com.tw/" target="_blank">
      <img class="businesstoday" src="../assets/images/businesstoday.svg" alt="今周刊" />
    </a>
  </header>
</template>

<script>
export default {
}
</script>

<style>
header {
  position: fixed;
  z-index: 1;
}
header img {
  display: block;
  width: 80px;
  margin: 0.5em 1em;
}

@media screen and (max-width: 640px) {
  header img {
    width: 60px;
  }
}
</style>
