<template>
    <transition name='fade'>
        <div class="wrap" @click='closePicture' v-show='isShow'>
            <swiper :options="swiperOptions" class='swiper'>
                <swiper-slide v-for="item of curgallaryImgs" :key="item.id">
                    <img :src="item" alt="" class='img-content'>
                </swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
        </div>
    </transition>
</template>
<script>
import {mapState} from 'vuex'
export default {
    name:'showpicture',
    props:['gallaryImgs'],
    data(){
        return{
        swiperOptions: {
          pagination:  '.swiper-pagination',
          paginationType:'fraction',
          autoplay:1000,
          observer:true,
          observeParents:true
        },
        curgallaryImgs:[]
        }
    },
    methods:{
        closePicture(){
            this.$store.dispatch('canShow',false)
        }
    },
    computed:mapState({isShow:'is'}),
    watch:{
        gallaryImgs(){
            this.curgallaryImgs=this.gallaryImgs
        }
    }
}
</script>
<style lang='stylus' scoped>
.wrap >>> .swiper
    width: 100%
    overflow: inherit
.wrap
    position: fixed
    top:0
    bottom: 0
    left: 0
    right: 0
    background: #000
    display: flex
    align-items: center
.img-content
    width: 100%
.swiper-pagination
    position: absolute
    bottom: -1rem
    color:#fff
    font-size:.3rem
.fade-enter,
.fade-leave-to
    opacity:0
.fade-enter-active,
.fade-leave-active
    transition:opacity 0.5s

</style>