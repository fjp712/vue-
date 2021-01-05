<template>
    <div>
    </div>
</template>

<script>
    // import lazyload from "./lazyload";
    import drap from "./drap";
    import straightLine from "./straightLine";
    // import tooltip from "./tooltip";
    export default {
        data:function(){
            return{
                darpitem:[],
                srclist:[require("@/assets/example.jpg")],
                theTimer:0
            }
        },
        name: "main",
        components:{
            // lazyload,
            drap,straightLine
        },
        methods:{
            add(){
               this.darpitem.push(this.theTimer)
                this.theTimer++;
            },
            addline(){

            }
        }
    }
</script>

<style scoped>
.main{
    background-color: #c2c0bb;
    height: 100%;
}

</style>
