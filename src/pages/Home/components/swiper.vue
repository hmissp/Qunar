<template>
    <div class="swiper-wrap" v-if="isShow">
        <swiper ref="mySwiper" :options="swiperOptions" class='swiper' v-if='Length'>
            <swiper-slide v-for="item in List" :key="item.id" >
                <img class='swiper-img' :src='item.imgUrl'/>
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
</template>
<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOptions: {
        pagination: '.swiper-pagination',
        loop: true,
        autoplay: 1500,
        speed: 500,
        observer: true,
        observerParents: true
        // Some Swiper option/callback...
      },
      isShow: null
    }
  },
  props: ['List'],
  computed: {
    Length () {
      return this.List.length
    }
  },
  activated () {
    this.isShow = false
    setTimeout(() => this.isShow = true,1)
  }
}
</script>
<style lang='stylus' scoped>
.swiper-wrap >>> .swiper
    background: #fff
.swiper-wrap
    overflow:hidden
    height: 0
    width: 100%
    padding-bottom: 31.25%
    background: #999
    .swiper-img
        width: 100%
        height: 100%
</style>