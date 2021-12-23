<template>
    <div>
        <div class="banner">
            <router-link to='/'>
                <i class='iconfont icon-fanhui' v-show='!headShow'></i>
            </router-link>
            <div class="head" v-show='headShow' :style='{opacity:headopacity}'>
                <router-link to='/'>
                    <i class='iconfont icon-fanhui head-icon'></i>
                </router-link>
            </div>
            <div class="banner-image" @click='showPicture'>
                <img :src="bannerImg" class="banner-image-content" alt="">
            </div>
            <div class="banner-info">
                <div class="title">{{name}}</div>
                <div class="count">
                    <i class='iconfont icon-tupian_huaban'></i>
                    {{gallaryImgs.length}}
                </div>
            </div>
        </div>
        <show-picture :gallaryImgs='gallaryImgs'></show-picture>
    </div>
</template>
<script>
import ShowPicture from './showpicture'

export default {
    name:'DetailBanner',
    components:{
        ShowPicture
    },
    data(){
        return{
            name:'',
            headShow:false,
            timer:null,
            headopacity:0
        }
    },
    props:['bannerImg','gallaryImgs','sightName'],
    methods:{
        showPicture(){
            this.$store.dispatch('canShow',true)
        },
        isheadShow(){
            let top=document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset
            if(this.timer){
                clearTimeout(this.timer)
            }
            this.timer=setTimeout(()=>{
                if(top>60){
                    this.headShow=true
                    if(top<=140){
                        this.headopacity=(top-60)/(140-60)>=0.8?1:(top-60)/(140-60)
                    }
                }else{
                    this.headShow=false
                }
            },3)
        }
    },
    watch:{
        sightName(){
            this.name=this.sightName
        }
    },
    mounted(){
        window.addEventListener('scroll',this.isheadShow)
    },
    destroyed(){
        window.removeEventListener('scroll',this.isheadShow)
    }
}
</script>
<style lang='stylus' scoped>
@import '~@/assets/base.styl';
.banner
    width 100%
    height: 4.554rem
    background: red
    position: relative
    .head
        position: fixed
        top:0
        left: 0
        right: 0
        height: 1rem
        line-height: 1rem
        background: $color
        z-index:6
        .head-icon
            font-size:.4rem
            background: none
    .icon-fanhui
        display: block
        width: .9rem
        height:.9rem
        line-height: .9rem
        text-align: center
        color:#fff
        background: rgba(0,0,0,.6) 
        border-radius: 50%
        position: fixed
        top:0.2rem
        left:0.2rem
        font-size:.4rem
    .banner-image
        width: 100%
        height: 0
        padding-bottom:55%
        background: #eee
        .banner-image-content
            width: 100%
    .banner-info
        widows 100%
        display: flex
        justify-content: space-between
        align-items: center
        color:#fff
        height: .8rem
        line-height: .8rem
        position: absolute
        bottom: 0
        left: 0
        right: 0
        padding: 0 .2rem
        background: linear-gradient(to top,rgba(0,0,0,1),rgba(0,0,0,0))
        .title
            font-size:.35rem
        .count
            width: 1rem
            height: .45rem
            line-height: .45rem
            text-align: center
            border-radius: .3rem
            background: rgba(0,0,0,.5)
</style>