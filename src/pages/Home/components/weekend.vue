<template>
    <div class="weekend">
        <div class="title">周末去哪儿</div>
        <div class="item" v-for='item of List' :key='item.id'>
            <div class="item-img">
                <img :src="item.imgUrl" class="item-img-content" alt="">
            </div>
            <div class="item-title">{{item.title}}</div>
            <div class="item-introduce">{{item.desc}}</div>
        </div>
    </div>
</template>
<script>
export default {
    name:'WeekendList',
    data(){
        return{

        }
    },
    props:['List']
}
</script>
<style lang='stylus' scoped>
    .title
        width: 100%
        height: 1rem
        background: #eee
        text-align: left
        line-height:1rem
        padding-left: .3rem
        font-size:0.35rem
        box-sizing: border-box
    .item
        width:100%
        text-align: left
        .item-img
            width: 100%
            height: 0
            padding-bottom:37.5%
            background: #999
            .item-img-content
                width:100%
        .item-title
            font-size:0.45rem
            color:#000
            line-height:0.7rem
            padding-left: .2rem
        .item-introduce
            font-size:0.35rem
            padding-left: .2rem
            margin-bottom: .2rem
</style>