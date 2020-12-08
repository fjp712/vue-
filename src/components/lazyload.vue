<template>
    <img :src="temsrc"   :style="{height:height,width:width}"/>
</template>

<script>
    export default {
        props:["src","height","width"],
        name: "lazyload",
        data:function(){
            return {
                temsrc:require('@/assets/timg.gif'),
                flag:null
            }
        },
        methods:{
            lazyload:function () {
                if(document.querySelector("img").offsetTop<window.innerHeight+document.body.scrollTop){
                    this.temsrc=this.src
                }
            },
            denounce:function () {
                if(this.flag)
                    clearTimeout(this.flag)
                this.flag=setTimeout(this.lazyload,2000)
            }
        },
        mounted() {
            this.denounce()
            this.$once('beforeDestroy',()=>clearTimeout(this.flag))
        }

    }
</script>

<style scoped>

</style>
