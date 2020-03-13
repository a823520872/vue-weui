import Vue from 'vue'
import App from './App.vue'

import weui from '../packages'

Vue.use(weui)

Vue.config.productionTip = false

new Vue({
    render: h => h(App)
}).$mount('#app')
