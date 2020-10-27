<template>
    <img :src="temsrc"   :style="{height:height,width:width}"/>
</template>

<script>
    export default {
        props:["src","height","width"],
        name: "lazyload",
        data:function(){
            return {
                temsrc:require('@/assets/timg.gif')
            }
        },
        methods:{
            lazyload:function () {
                if(document.querySelector("img").offsetTop<window.innerHeight+document.body.scrollTop){
                    this.temsrc=this.src
                }
            },
            denounce:function () {
                let flag=null;
                if(flag)
                    clearTimeout(flag)
                flag=setTimeout(this.lazyload,2000)
            }
        },
        mounted() {
            this.denounce()
        }
    }
</script>

<style scoped>

</style>