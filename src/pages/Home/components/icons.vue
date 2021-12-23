<template>
    <swiper ref="mySwiper" :options="swiperOptions" class='swiper' v-if='listLength'>
            <swiper-slide v-for='(item,index) of newList' :key='index'>
                <div class='icons-wrap' >
                    <div class="icon" v-for='newitem of item' :key='newitem.id'>
                        <div class="icon-img">
                            <img :src="newitem.imgUrl" class='icon-img-content' alt="图标">
                        </div>
                        <div class='icon-text'>{{newitem.desc}}</div>
                    </div>
                </div>
            </swiper-slide>
            
    </swiper>
    
</template>
<script>
export default {
    name:'HomeIcons',
    data(){
        return{
            swiperOptions:{},
            newList:[],
            listLength:0,
            curList:[]
        }
    },
    props:['List'],
    methods:{
        setpages(){
            this.curList.forEach((item,index)=>{
                var currentindex=Math.floor(index/8)
                if(this.newList[currentindex]){
                    this.newList[currentindex].push(item)
                }else{
                    this.newList[currentindex]=[]
                    this.newList[currentindex].push(item)
                }
            })
            this.listLength=this.newList.length
        }
    },
    watch:{
        List(){
            this.curList=this.List
            this.setpages()
        }
    }
}
</script>
<style scope lang='stylus'>
    .icons-wrap
        overflow: hidden
        height: 0
        width: 100%
        padding-bottom: 55%
        display: flex
        flex-wrap: wrap
        padding-top: .2rem
        .icon
            overflow: hidden
            height: 0
            width: 25%
            padding-bottom 27.5%
            .icon-text
                margin-top: .1rem
            .icon-img
                overflow: hidden
                height: 0
                width: 75%
                padding-bottom 75%
                margin: 0 auto
                .icon-img-content
                    display: block
                    width: 100%
</style>