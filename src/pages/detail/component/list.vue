<template>
    <div class="list">
        <div class="item" v-for='(item,index) of list' :key='index'>
            <div class="text">
                <i class='iconfont icon-dianyingpiao'></i>
                {{item.title}}
            </div>
            <div class="child" v-if="item.children">
                <detail-list :list='item.children'></detail-list>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'DetailList',
    props:['list'],
    data(){
        return{
            curList:[]
        }
    },
    watch:{
        list(){
            this.curList=this.list
            console.log(this.curList)

        }
    },
    mounted(){
    }
}
</script>
<style lang='stylus' scoped>

.item
    text-indent: 0
    text-align: left
    line-height: .7rem
    .text
        border-bottom: 1px solid #eee
    .child
        padding-left: .2rem
.icon-dianyingpiao
    color:#000
</style>