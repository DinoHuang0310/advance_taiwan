<template>
  <div class="scroll-down">
    <div />
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 60 20" xml:space="preserve">
      <g>
        <circle fill="#555551" cx="43.7" cy="10" r="2.3" />
        <circle fill="#555551" cx="33.3" cy="10" r="2.3" />
        <circle fill="#555551" cx="2.3" cy="10" r="2.3" />
        <circle fill="#555551" cx="23" cy="10" r="2.3" />
        <circle fill="#555551" cx="12.6" cy="10" r="2.3" />
        <g>
          <path fill="#555551" d="M48.5,19c-0.5,0-1-0.2-1.3-0.6c-0.5-0.7-0.4-1.7,0.3-2.3l8.1-6.1l-8.1-6.1c-0.7-0.5-0.9-1.5-0.3-2.3 c0.5-0.7,1.5-0.9,2.3-0.3l9.9,7.4C59.8,9,60,9.5,60,10c0,0.5-0.2,1-0.6,1.3l-9.9,7.4C49.2,18.9,48.9,19,48.5,19z"/>
        </g>
      </g>
    </svg>
    <span />
  </div>
</template>

<script>
export default {
}
</script>

<style>
.scroll-down > div {
  position: relative;
  display: inline-block;
  vertical-align: middle;
  width: 30px;
  height: 55px;
  top: 0;
  bottom: 1.5em;
  margin-left: -15px;
  border: solid 2px #505051;
  border-radius: 15px;
}
.scroll-down > div:before {
  content: '';
  position: absolute;
  width: 4px;
  height: 9px;
  top: 8px;
  left: 11px;
  border-radius: 2px;
  background: #505051;
  -webkit-animation-name: scrollDown;
  animation-name: scrollDown;
  animation-iteration-count: infinite;
  animation-duration: 1.5s;
}
.scroll-down svg {
  display: inline-block;
  vertical-align: middle;
  width: 3em;
  margin-left: 0.5em;
}

@keyframes scrollDown {
  from {
    transform: translate(0, 0);
  }
  to {
    transform: translate(0, 10px);
  }
}
</style>
