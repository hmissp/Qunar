<template>
    <div class="recom">
        <div class="rexiao">热销推荐</div>
        <router-link class="recom-item border-bottom" v-for='item of curList' :key=item.id :to="'/detail/'+item.id" >
            <div class="item-img">
                <img :src="item.imgUrl" class="item-img-content" alt="">
            </div>
            <div class="item-info">
                <div class="info-title">{{item.title}}</div>
                <div class="info-introduce">{{item.desc}}</div>
                <div class="info-details">查看详情</div>
            </div>
        </router-link>
    </div>
</template>
<script>
export default {
    name:'HomeRecom',
    data(){
        return{
            curList:[]
        }
    },
    props:['List'],
    watch:{
        List(){
            this.curList=this.List
        }
    }
}
</script>
<style lang='stylus' scoped>
    .rexiao
        width: 100%
        height: .9rem
        background: #eee
        line-height: .9rem
        text-align: left
        padding-left: .3rem
        font-weight: 700
        box-sizing: border-box
    .recom-item
        display: flex
        flex-direction: row
        padding: .15rem
        .item-img
            width: 2rem
            height: 2rem
            .item-img-content
                width: 100%
        .item-info
            margin-left: .25rem
            text-align: left
            .info-title
                font-size:0.45rem
                line-height:0.7rem
                font-weight: 500
            .info-introduce
                color: #999
                font-size:0.3rem
                line-height:0.5rem
            .info-details
                width: 1.3rem
                color: #fff
                background: orange
                margin-top: .1rem
                padding: .1rem .14rem
                text-align: center
                border-radius: .06rem
</style>