<template>
    <div>
<!--        <lazyload width="600px" height="300px" :src="srclist[0]"/>-->
<!--        <tooltip index="你好">-->
<!--            <button  ref="item">你好</button>-->
<!--        </tooltip>-->
        <drap/>
    </div>
</template>

<script>
    // import lazyload from "./lazyload";
    import drap from "./drap";
    // import tooltip from "./tooltip";
    export default {
        data:function(){
            return{
                srclist:[require("@/assets/example.jpg")]
            }
        },
        name: "main",
        components:{
            // lazyload,
            drap
        }
    }
</script>

<style scoped>


</style>
