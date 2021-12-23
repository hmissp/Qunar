<template>
    <div class="list" ref='list'>
        <div>
            <div class="current-city">
                <div class="current-title">热门城市</div>
                <div class="city-list">
                    <div class="city-wrap">
                        <div class="city" @click='handlerClick(curCity)'>{{curCity}}</div>
                    </div>
                </div>
            </div>
            <div class="remen-city">
                <div class="current-title">热门城市</div>
                <div class="city-list">
                    <div class="city-wrap" v-for='item of hotCities' :key="item.id" @click='handlerClick(item.name)'>
                        <div class="city">{{item.name}}</div>
                    </div>
                </div>
            </div>
            <div class="city-list">
                <div class="city-item" v-for='(value,key,index) of cities' :key="index" :ref='`top${key}`'>
                    <div class="list-title">{{key}}</div>
                    <div class="all-city" v-for='curitem of value' :key="curitem.id" @click='handlerClick(curitem.name)'>
                        <div class="city">{{curitem.name}}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Bscroll  from 'better-scroll'
import {mapState} from 'vuex'
export default {
    name:'List',
    props:['cities','hotCities','index'],
    data(){
        return{
            curindex:0,
            length:0
        }
    },
    computed:mapState({curCity:'city'}),
    methods:{
        handlerClick(city){
            this.$store.dispatch('changeCity',city)
            this.$router.push('/')
        }
    },
    mounted(){
        this.scroll = new Bscroll (this.$refs.list)
    },
    watch:{
        index(){
            this.curindex=this.index
            var el=this.$refs[`top${Object.keys(this.cities)[this.curindex]}`][0]
            this.scroll.scrollToElement(el)
        },
        cities(){
            this.length=Object.keys(this.cities).length
        }
    }
}
</script>
<style lang='stylus' scoped>
@import '~@/assets/base.styl'
.list
    font-size:0.35rem
    position: absolute
    top:1.7rem
    left: 0
    right: 0
    bottom: 0
    overflow: hidden
    .current-city
        width:100%
        .current-title
            title()
        .city-list
            cityList()
            .city-wrap
                cityWrap()
                .city
                    cityItem()
    .remen-city
        .current-title
            title()
        .city-list
            cityList()
            .city-wrap
                cityWrap()
                .city
                    cityItem()
    .city-list
        text-align: left
        .city-item
            .list-title
                title()
            .all-city
                .city
                    padding:.3rem
                    border-bottom:1px solid #999
                    color:#000
</style>