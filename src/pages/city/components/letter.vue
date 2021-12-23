<template>
    <div class="wrap">
        <div class="letter" >
            <div class="letter-item" :ref='`top${key}`' v-for="(value,key,index) of cities" :key="index"
            @touchstart='touchStart' @touchmove='touchMove' @touchstend='touchstEnd'>{{key}}</div>
        </div>
    </div>
</template>
<script>
export default {
    name:'LetterList',
    props:['cities'],
    data(){
        return{
            top:0,
            touch:false,
            index:0,
            timer:null,    /* 节流定时器 */
        }
    },
    methods:{
        getIndex(){
            this.top=this.$refs.topA[0].offsetTop
        },
        touchStart(){
            this.touch=true
        },
        touchMove(e){
            if(this.timer){
                clearTimeout(this.timer)
            }
            this.timer=setTimeout(()=>{
                var current=e.touches[0].clientY
                this.index=Math.floor((current-this.top)/20)
                if(this.index<0){
                    this.index=0
                }else if(this.index>Object.keys(this.cities).length-1){
                    this.index=Object.keys(this.cities).length-1
                }
                var allel=this.$refs
                var el=allel[`top${Object.keys(this.cities)[this.index]}`][0]
                for(let i in allel){
                    allel[i][0].classList.remove('active')
                }
                el.classList.add('active')
                this.$emit('getIndex',this.index)
            },3)
        },
        touchstEnd(){
            this.touch=false
        }
    },
    mounted(){
    },
    updated(){
        this.getIndex();
    }
}
</script>
<style lang='stylus' scoped>
@import '~@/assets/base.styl';
    .letter
        z-index:2
        position: absolute
        top:0
        right: 0
        bottom:0
        display: flex
        flex-flow: nowrap column
        justify-content: center
        align-items: center
        .letter-item
            width: .4rem
            height: .4rem
            line-height: .4rem
            text-align: center
        .letter-item.active
            color:#fff
            border-radius: 50%
            background: $color
</style>