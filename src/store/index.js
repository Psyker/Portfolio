import Vue from 'vue'
import Vuex from 'vuex'
import portfolio from './modules/portfolio/index'

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        portfolio
    }
})
