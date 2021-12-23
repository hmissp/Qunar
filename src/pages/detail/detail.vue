<template>
    <div>
        <detail-banner :sightName='sightName' :bannerImg='bannerImg' :gallaryImgs='gallaryImgs' ></detail-banner>
        <detail-list :list='categoryList'></detail-list>
    </div>
</template>
<script>
import DetailBanner from './component/banner'
import DetailList from './component/list'
import axios from 'axios'
export default {
    name:'Detail',
    components:{
        DetailBanner,
        DetailList,
    },
    data(){
        return{
            sightName:'',
            bannerImg:'',
            gallaryImgs:[],
            categoryList:[]
        }
    },
    methods:{
        getDetailList(){
            axios.get('/static/info/detail.json',{
                params:{
                    id:this.$route.params.id
                }
            }).then(this.getListSucc)
        },
        getListSucc(res){
            let list=res.data
            if(list.ret && list.data){
                this.bannerImg=list.data.bannerImg
                this.gallaryImgs=list.data.gallaryImgs
                this.categoryList=list.data.categoryList
                this.sightName=list.data.sightName
            }
        }
    },
    activated(){
        this.getDetailList()
    }
}
</script>
<style lang='stylus' scoped>

</style>