<template>
    <div class="container">
        <div :class="backgroundList[index]">
            <button @click="prompt" :class="[backgroundList[index],'button']">点击</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Carousel",
        data(){
            return{
                index:0,
                datalist:["a","b","c"],
                backgroundList:["background1","background2","background3"]
            }
        },
        methods:{
            prompt(){
                alert("你点击了")
            }
        },
        mounted() {
            setInterval(()=>{
                this.index++
                if(this.index>3)
                    this.index=0
                console.log(this.index)
            },1000)
        }
    }
</script>

<style scoped>
    .container{
        height: 400px;
        width: 600px;
    }
    .button{
        width: 100px;
        height: 30px;
        border-radius: 10px;
    }
    .background1{
        height: 400px;
        background-image: url("../../assets/example.jpg");
    }
    .background2{
        height: 400px;
        background-image: url("../../assets/logo.png");
    }
    .background3{
        height: 400px;
        background-image: url("../../assets/timg.gif");
    }

</style>
