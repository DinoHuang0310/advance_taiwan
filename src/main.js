import Vue from 'vue'
import App from './App.vue'

import BScroll from '@better-scroll/core'
import MouseWheel from '@better-scroll/mouse-wheel'

Vue.config.productionTip = false
BScroll.use(MouseWheel)

new Vue({
    render: h => h(App),
}).$mount('#app')