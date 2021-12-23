import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
    state:{
        city:localStorage.city||'上海',
        is:false
    },
    actions:{
        changeCity(ctx,city){
            ctx.commit('changeCity',city)
        },
        canShow(ctx,is){
            ctx.commit('canShow',is)
        }
    },
    mutations:{
        changeCity(state,city){
            state.city=city
            localStorage.city=city
        },
        canShow(state,is){
            state.is=is
        }
    }
})