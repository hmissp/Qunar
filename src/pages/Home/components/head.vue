<template>
    <div class="head">
        <div class="head-left">
            <i class='iconfont icon-fanhui'></i>
        </div>
        <div class="search" @click='handlerClick'>
            <i class='iconfont icon-sousuo'></i>
            <input type="text" placeholder="输入城市/景点/游玩主题" class='search-input'>
        </div>
        <div class="head-right">
            <router-link to='/city'>
                <span class='adress'>{{curCity}}</span>
            </router-link>
            <i class='iconfont icon-xiala'></i>
        </div>
    </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    name:'homehead',
    computed:mapState({curCity:'city'}),
    methods:{
        handlerClick(){
            this.$router.push('/city')
        }
    }
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/base.styl'
.head
    width: 100%
    height: 1rem
    background: $color
    display: flex
    justify-content: space-between
    align-items: center
    .head-left
        .icon-fanhui
            color:#fff
            margin-left: .3rem
    .search
        flex: 1
        height: .7rem
        border-radius: .1rem
        background: #fff
        margin: 0 .3rem
        display: flex
        align-items: center
        color:#888
        overflow: hidden
        .icon-sousuo
            margin-left: .2rem
        .search-input
            font-size: .35rem
            text-indent: .2rem
    .head-right
        display: flex
        align-items: center
        .iconfont
            font-size:.45rem
        .icon-xiala
            color:#fff
            margin:0 0.2rem
        .adress
            display: inline-block
            min-width: .4rem
            font-size: .32rem
            white-space: nowrap
            color:#fff
</style>
