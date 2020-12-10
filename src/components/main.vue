<template>
    <div>
<!--        <lazyload width="600px" height="300px" :src="srclist[0]"/>-->
<!--        <tooltip index="你好">-->
<!--            <button  ref="item">你好</button>-->
<!--        </tooltip>-->
        <svg xmlns="http://www.w3.org/2000/svg" height="1000" width="1000">
            <foreignObject x="0" y="0" height="1000" width="1000" fill="grey">
                <body class="main">
                    <button @click="add">添加更多</button>
<!--                    <button @click="addline">添加线条</button>-->
                    <div v-for="item in darpitem" :key="item">
                        <drap height="50" width="100" :ref="`drap${item}`"></drap>
                    </div>
                </body>
            </foreignObject>
        </svg>
    </div>
</template>s

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
