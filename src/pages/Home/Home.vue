<template>
    <div>
        <homeheader></homeheader>
        <home-swiper :List='swiperList'></home-swiper>
        <home-icons :List='iconList'></home-icons>
        <home-recom :List='recommendList'></home-recom>
        <weekend-list :List='weekendList'></weekend-list>
    </div>
</template>

<script>
import homeheader from './components/head'
import HomeSwiper from './components/swiper'
import HomeIcons from './components/icons'
import HomeRecom from './components/Recommend'
import WeekendList from './components/weekend'
import axios from 'axios'
import {mapState} from 'vuex'
export default {
    name:'Home',
    components:{
        homeheader,
        HomeSwiper,
        HomeIcons,
        HomeRecom,
        WeekendList
    },
    data(){
        return{
            iconList:[],
            recommendList:[],
            swiperList:[],
            weekendList:[],
            lastCity:''
        }
    },
    computed:mapState({curCity:'city'}),
    methods:{
        getHomeInfo(){
            axios.get('/static/info/index.json?city='+this.curCity)
                .then(this.getHomeInfoSucc)
        },
        getHomeInfoSucc(e){
            var List=e.data
            if(List.ret && List.data){
                this.iconList=List.data.iconList
                this.recommendList=List.data.recommendList
                this.swiperList=List.data.swiperList
                this.weekendList=List.data.weekendList
            }
        }
    },
    mounted(){
        this.lastCity=this.curCity
        this.getHomeInfo()
        console.log(location.href)
    },
    activated(){
        if(this.lastCity !== this.curCity){
            this.lastCity=this.curCity
            this.getHomeInfo()
        }
    }
}
</script>

<style scoped>

</style>
