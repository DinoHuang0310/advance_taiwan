<template>
  <footer>
    <p><strong>內容監製:</strong> 今周刊</p>
    <p style="margin-left: 8em"><strong>專題製作:</strong> 今周刊編輯部、數位內容部</p>
    <p style="margin-left: 16em">數位Copyright © {{ year }} 今周刊.All rights reserved. 版權所有，禁止擅自轉貼節錄</p>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      year: new Date().getFullYear()
    }
  }
}
</script>

<style>
footer {
  margin: 0 15vw;
}
footer p {
  line-height: 3.5;
}
footer strong {
  font-weight: 900;
  text-decoration: underline;
}

@media screen and (max-width: 480px) {
  footer p {
    font-size: 4vw;
  }
}

</style>
