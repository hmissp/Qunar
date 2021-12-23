<template>
    <div class='search'>
        <div class="cityList" v-if="getCities.length">
            <div class="city" v-for='item of getCities' :key="item.id" @click='handlerClick(item.name)'>{{item.name}}</div>
        </div>
        <div class="nocity" v-if="isShow">没有匹配到</div>
    </div>
</template>
<script>
export default {
    name:'SearchList',
    props:['cities','searchText'],
    data(){
        return{
            curCities:[],
            getCities:[],
            isShow:false
        }
    },
    methods:{
        handlerClick(city){
            this.$store.dispatch('changeCity',city)
            this.$router.push('/')
        }
    },
    watch:{
        cities(){
            this.curCities=this.cities
        },
        searchText(){
            this.getCities=[]
            for(let i in this.curCities){
                for(let j=0;j<this.curCities[i].length-1;j++){
                    let every=this.curCities[i][j]
                    let reg=new RegExp(this.searchText,'ig')
                    if((reg.test(every.name) || reg.test(every.spell)) && this.searchText){
                        this.getCities.push(this.curCities[i][j])
                    }
                }
            }
            // 判断无匹配项是否显示
            if(this.searchText && this.getCities.length==0){
                this.isShow=true
            }else{
                this.isShow=false
            }
        }
    }
}
</script>
<style lang='stylus' scoped>
.search
    font-size:.4rem
    .cityList
        background: #eee
        z-index:3
        position: absolute
        top:1.7rem
        left: 0
        right: 0
        bottom: 0
        text-align: left
        .city
            background: #fff
            text-indent: .2rem
            padding: .2rem 0
            border-bottom: 1px solid #999
    .nocity
        background: #eee
        z-index:3
        position: absolute
        top:1.7rem
        left: 0
        right: 0
        bottom: 0
        text-align: left
</style>