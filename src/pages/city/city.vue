<template>
    <div>
        <head-list @changeText='getText'></head-list>
        <city-list :hotCities='hotCities' :cities='cities' :index='index'></city-list>
        <letter-list :cities='cities' @getIndex='changeIndex'></letter-list>
        <search-list :cities='cities' :searchText='searchText'></search-list>
    </div>
</template>
<script>
import HeadList from './components/Head'
import CityList from './components/List'
import LetterList from './components/letter'
import SearchList from './components/search'
import axios from 'axios'
import Search from './components/search.vue'
export default {
    components:{
        HeadList,
        CityList,
        LetterList,
        SearchList
    },
 
    data(){
        return{
            hotCities:[],
            cities:[],
            index:0,
            searchText:''
        }
    },
    methods:{
        getInfoList(){
            axios.get('/static/info/city.json')
                .then(this.getInfoListSucc)

        },
        getInfoListSucc(e){
            var data=e.data
            if(data.ret && data.data){
                this.hotCities=data.data.hotCities
                this.cities=data.data.cities
            }
        },
        // 获取字母下标
        changeIndex(index){
            this.index=index
        },
        // 获取输入框内容
        getText(val){
            this.searchText=val
        }
    },
    mounted(){
        this.getInfoList()
    }
}
</script>
<style scoped>

</style>