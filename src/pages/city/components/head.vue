<template>
    <div class='head'>
        <div class="chose">
            <router-link to='/' class='icon'>
                <i class='iconfont icon-fanhui'></i>
            </router-link>
            <span class='city-chose'>城市选择</span>
        </div>
        <input type="text" v-model='searchText' placeholder="输入城市名或拼音" class='text'>
    </div>
</template>
<script>
export default {
    name:'Head',
    data(){
        return{
            searchText:''
        }
    },
    watch:{
        searchText(){
            this.$emit('changeText',this.searchText)
        }
    }
}
</script>
<style lang='stylus' scoped>
@import '~@/assets/base.styl';
    .head
        background: $color
        width:100%
        height: 1.7rem
        font-size:0.4rem
        position: fixed
        top:0
        z-index:5
        .chose
            height: 0.9rem
            line-height:0.9rem
            position: relative
            color: #fff
            .router-link-active
                position: absolute
                left: .3rem
                .icon-fanhui
                    color:#fff
                    font-size:0.5rem
        .text
            width:95%
            margin: 0 auto
            text-align: center
            border-radius:.05rem
            color: #999
            margin-top: .1rem
        .text:focus
            color:#000
</style>