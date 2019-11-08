import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import moment from 'moment'
import 'bulma'

Vue.config.productionTip = false

Vue.filter('format', function (value, format = 'YYYY/MM/DD') {
    if (!value) return ''
    return moment (value).format (format)
})

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
