<template>
  <div id="app">
    <Header />
    <div ref="bscroll" class="bscroll">
      <ul class="scrollbox" ref="bscontent">
        <li id="kvarea" class="setlight">
          <section>
              <h1 style="margin: 0">
                <img src="./assets/images/kv.png" alt="進步台灣" ref="addimg" @load="init">
              </h1>
          </section>
        </li>
        <li id="description">
          <section>
            <Description :windowWidth="windowWidth" />
          </section>
        </li>
        <li class="event-box setlight">
          <section>
            <div>
              <div :class="show === 1 ? 'active imgbox' : 'imgbox'" @click="showContent(1)">
                <img src="./assets/images/o-taiwan/canvas.png" alt="">
              </div>
            </div>
            <article>
              <span>C.E. 1997 - 2020</span>
              <h2>台豬解封</h2>
              <p>官民齊心奮戰23個年頭，終於喜贏口蹄疫除名</p>
            </article>
          </section>
        </li>
        <li class="event-box setlight">
          <section>
            <div>
              <div :class="show === 2 ? 'active imgbox' : 'imgbox'" @click="showContent(2)">
                <img src="./assets/images/coronavirus/canvas.png" alt="">
              </div>
            </div>
            <article>
              <span>C.E. 2003 -</span>
              <h2>防疫英雄</h2>
              <p>從抗SARS到新冠肺炎，他見證三場「大戰役」</p>
            </article>
          </section>
        </li>
        <li class="event-box setlight">
          <section>
            <div>
              <div :class="show === 3 ? 'active imgbox' : 'imgbox'" @click="showContent(3)">
                <img src="./assets/images/taiwan-startups/canvas.png" alt="">
              </div>
            </div>
            <article>
              <span>C.E. 2004 -</span>
              <h2>熱血新創</h2>
              <p>在疫情高峰期擋下1.4億通詐騙，變身明日獨角獸</p>
            </article>
          </section>
        </li>
        <li class="event-box setlight">
          <section>
            <div>
              <div :class="show === 4 ? 'active imgbox' : 'imgbox'" @click="showContent(4)">
                <img src="./assets/images/blackhole/canvas.png" alt="">
              </div>
            </div>
            <article>
              <span>C.E. 1995 -</span>
              <h2>科學躍進</h2>
              <p>人類首張黑洞影像背後功臣，台灣造出望相宇宙之眼</p>
            </article>
          </section>
        </li>
        <li class="event-box setlight">
          <section>
            <div>
              <div :class="show === 5 ? 'active imgbox' : 'imgbox'" @click="showContent(5)">
                <img src="./assets/images/judge/canvas.png" alt="">
              </div>
            </div>
            <article>
              <span>C.E. 2000 - 2020</span>
              <h2>保障人權</h2>
              <p>敲開婚姻人格自主與性平，釋憲終結85年通姦罪</p>
            </article>
          </section>
        </li>
        <li class="event-box setlight">
          <section>
            <div>
              <div :class="show === 6 ? 'active imgbox' : 'imgbox'" @click="showContent(6)">
                <img src="./assets/images/multiple/canvas.png" alt="">
              </div>
            </div>
            <article>
              <span>C.E. 2003 -</span>
              <h2>社會多元</h2>
              <p>從外籍新娘到新住民，新科移民官登上舞台發光</p>
            </article>
          </section>
        </li>
        <li>
          <section>
            <Footer />
          </section>
        </li>
      </ul>
    </div>
    <transition name="fade">
      <div v-if="windowWidth < 481 && showprompt" class="prompt">
        <IcoScrollDown />
      </div>
    </transition>
    <transition name="fade">
      <div v-if="show > 0 && show <= 6" class="mask">
        <div class="close" @click="showContent(0)" />
        <OTaiwan97 v-if="show === 1" class="contentbox setlight" />
        <Coronavirus v-if="show === 2" class="contentbox setlight" />
        <TaiwanStartups v-if="show === 3" class="contentbox setlight" />
        <BlackHole v-if="show === 4" class="contentbox setlight" />
        <Judge v-if="show === 5" class="contentbox setlight" />
        <Multiple v-if="show === 6" class="contentbox setlight" />
      </div>
    </transition>
  </div>
</template>

<script>
import Header from './components/Header'
import IcoScrollDown from './components/IcoScrollDown'
import Description from './components/Description'
import OTaiwan97 from './components/articles/OTaiwan97'
import Coronavirus from './components/articles/Coronavirus'
import BlackHole from './components/articles/BlackHole'
import Judge from './components/articles/Judge'
import TaiwanStartups from './components/articles/TaiwanStartups'
import Multiple from './components/articles/Multiple'
import Footer from './components/Footer'

import BScroll from '@better-scroll/core'

export default {
  name: 'App',
  components: {
    Header,
    IcoScrollDown,
    Description,
    OTaiwan97,
    Coronavirus,
    BlackHole,
    Judge,
    TaiwanStartups,
    Multiple,
    Footer
  },
  data() {
    return {
      windowWidth: document.documentElement.clientWidth,
      show: 0,
      showprompt: true
    }
  },
  methods: {
    init() {
      this.$nextTick(() => {
        this.bs = new BScroll(this.$refs.bscroll, {
          click: true,
          scrollX: true,
          mouseWheel: {
            speed: 10,
            invert: false,
            easeTime: 1000,
            dampingFactor: 0
          }
        })
        this.bs.on('scrollEnd', (e) => {
          const transformX = e.x * -1;
          if(transformX > this.windowWidth) {
            this.showprompt = false;
          } else {
            this.showprompt = true;
          }
        })
      })
    },
    showContent(num) {
      this.show = num;
    },
    checkScreen() {
      const clientWidth = document.documentElement.clientWidth;
      if(clientWidth !== this.windowWidth) {
        this.windowWidth = clientWidth;
        window.location.reload();
      }
    },
    keyUpHandler(e) {
      const code = e.which || e.keyCode;
      if(code === 27 && this.show > 0) this.show = 0;
    }
  },
  mounted() {
    window.addEventListener('resize', this.checkScreen);
    window.addEventListener('keyup', this.keyUpHandler);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.checkScreen);
    window.removeEventListener('keyup', this.keyUpHandler);
  }
  
}
</script>

<style src='./assets/css/style.css'></style>
<style>
#app {
  height: 100%;
}
.bscroll {
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-image: linear-gradient(to top, #cdcdc2 0%, #f5f5ee 37%, #f5f5ee 82%, #b9b9ae 100%);
}
.scrollbox {
  position: relative;
  display: inline-block;
  white-space: nowrap;
  height: 100%;
  background-image: url('./assets/images/background.png');
  background-repeat: repeat;
}
.scrollbox::before,
.scrollbox::after {
  content: '';
  position: absolute;
  height: 100%;
  width: 50vw;
  top: 0;
  background-image: url('./assets/images/background.png');
  background-repeat: repeat;
}
.scrollbox::before {
  left: 0;
  transform: translate(-100%, 0);
}
.scrollbox li {
  position: relative;
  display: inline-block;
  vertical-align: middle;
  height: 100%;
  transition: 1s;
}
.scrollbox li::after {
  content: '';
  display: inline-block;
  height: 100%;
  vertical-align: middle;
}
#kvarea {
  width: 80vh;
  max-width: 852px;
  margin: 0 0 0 5vw;
}
#kvarea.setlight::before {
  top: 0;
  left: 0;
}
#app > .prompt {
  position: fixed;
  bottom: 0;
  transform: translate(-25%, -25%);
}
#description {
  width: 40vw;
  margin: 0 5vw;
}
h1 img {
  display: block;
  width: 100%;
}
.setlight::before {
  content: '';
  position: absolute;
  width: 20vw;
  padding-bottom: 20vw;
  background-image: url('./assets/images/light.png');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
}
.event-box {
  margin: 0 7vw;
}
.event-box.setlight::before {
  top: 0;
  right: 0;
}
.event-box section > div {
  width: 18vw;
}
.event-box section > * {
  display: inline-block;
  vertical-align: top;
}
.event-box article {
  padding-left: 5%;
  width: 20vw;
  white-space: pre-wrap;
}
.event-box article span {
  margin-left: 0.3em;
}
.scrollbox li section {
  display: inline-block;
  vertical-align: middle;
  width: 100%;
}
.scrollbox li.event-box:nth-child(odd) section {
  transform: translate(0, -25%);
}
.scrollbox li.event-box:nth-child(even) section {
  transform: translate(0, 15%);
}
.scrollbox li .imgbox {
  position: relative;
  padding-bottom: 100%;
  cursor: pointer;
  background-image: url('./assets/images/frame.png');
  background-size: cover;
  background-position: center;
  transition: .5s;
}
.scrollbox li .imgbox::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  box-shadow: -1vw 1vw 20px rgba(4, 4, 0, .25);
  transition: .5s;
}
.scrollbox li .imgbox img {
  position: absolute;
  width: 100%;
  transition: .5s;
}
.scrollbox li .imgbox.active img {
  transform: scale(4);
  opacity: 0;
  z-index: 1;
}
.mask {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  overflow: auto;
  background: black;
  -webkit-overflow-scrolling: touch;
}
.close {
  position: fixed;
  top: 1em;
  right: 2em;
  width: 100px;
  height: 100px;
  cursor: pointer;
  z-index: 2;
  transition: .5s;
}
.close::before {
  content: '';
  width: 100%;
  position: absolute;
  top: 50%;
  border-top: solid 1px #505051;
  transform: rotate(45deg);
}
.close::after {
  content: '';
  width: 100%;
  position: absolute;
  top: 50%;
  border-top: solid 1px #505051;
  transform: rotate(-45deg);
}

@media (hover: hover) {
  .scrollbox li .imgbox:hover {
    transform: scale(1.01) translate(0, -0.5vw);
  }
  .scrollbox li .imgbox:hover::before {
    box-shadow: -1.5vw 1.5vw 25px rgba(4, 4, 0, .1);
  }
  .close:hover {
    transform: translate(0, -5px);
  }
}

@media screen and (-ms-high-contrast: active),
(-ms-high-contrast: none) {
  .scrollbox li .imgbox:hover {
    transform: scale(1.1);
  }
  .scrollbox li .imgbox:hover::before {
    box-shadow: -1.5vw 1.5vw 25px rgba(4, 4, 0, .1);
  }
  .close:hover {
    transform: translate(0, -5px);
  }
}

@media screen and (max-width: 1920px) {
  .event-box {
    margin: 0 10vw;
  }
}

@media screen and (max-width: 1366px) {
  .event-box section > div {
    width: 22vw;
  }
  .event-box article {
    width: 25vw;
  }
  .scrollbox li {
    margin: 0 9vw;
  }
}

@media screen and (max-width: 1024px) {
  .close {
    width: 80px;
    height: 80px;
  }
}

@media screen and (max-width: 812px) {
  .setlight::before {
    width: 40vw;
    padding-bottom: 40vw;
  }
  .event-box section > div {
    width: 28vw;
  }
  .event-box article {
    width: 40vw;
  }
}

/* mobile 橫式 */
@media screen and (max-width: 812px) and (orientation: landscape) {
  #kvarea {
    width: 80vh;
  }
  #kvarea.setlight::before {
    left: -15vw;
  }
  .scrollbox li.event-box:nth-child(odd) section {
    transform: translate(0, -5%);
  }
  .scrollbox li.event-box:nth-child(even) section {
    transform: translate(0, 15%);
  }
}

/* pad 直式 */
@media screen and (min-width: 768px) and (orientation: portrait) {
  #kvarea {
    width: 55vh;
  }
  #description {
    width: 50vw;
  }
  .setlight::before {
    width: 40vw;
    padding-bottom: 40vw;
  }
  .event-box section > div {
    width: 32vw;
  }
  .event-box article {
    width: 40vw;
  }
}

@media screen and (max-width: 767px) {
  #description {
    width: 90vw;
  }
}

/* mobile 直式 */
@media screen and (max-width: 480px) and (orientation: portrait) {
  .scrollbox li {
    margin: 0 15vw;
  }
  #kvarea {
    width: 105vw;
    margin: 0;
  }
  .setlight::before {
    width: 55vw;
    padding-bottom: 55vw;
  }
  .event-box section > div {
    width: 55vw;
  }
  .event-box article {
    width: 55vw;
  }
}

@media screen and (max-width: 480px) {
  .close {
    top: 0.5em;
    right: 0.5em;
    width: 60px;
    height: 60px;
  }
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 1s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
