<template>
    <div>
       <lazyload width="600px" height="300px" :src="srclist[0]"/>
    </div>
</template>

<script>
    import lazyload from "./lazyload";
    export default {
        data:function(){
            return{
                srclist:[require("@/assets/example.jpg")]
            }
        },
        name: "main",
        components:{
            lazyload
        }
    }
</script>

<style scoped>


</style>