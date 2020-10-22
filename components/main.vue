<template>
    <div class="main">
        <div class="nav">
            <div v-for="item in navitems" :key="item" class="navitem">
                <div class="nav_word">{{item}}</div>
            </div>
            <input type="search">
            <div class="login"><div class="nav_word">登录|注册</div></div>
        </div>
        <div class="Carousel">
            <Carousel/>
        </div>
    </div>
</template>
<script>
    import Carousel from "./Carousel";
    import {mapState} from "vuex"
    export default {
        data:function(){
            return{
                navitems:["主页","商品列表","文章列表"]
            }

        },
        computed: {
            ...mapState(["count"]),
        },
        components:{
            Carousel
        }
    }
</script>
<style scoped>
    .main{
        display: flex;
        justify-content: center;
        height: 800px;
        width: 100%;
        flex-wrap: wrap;
    }
    .nav{
        display: flex;
        width: 80%;
        height: 60px;
    }
    .navitem{
        flex: 0 1 auto;
        height: 60px;
        width: 15%;
    }
    .navitem:hover{
        background-color: #f5ede5;
    }
    .nav_word{
        padding-top: 10px;
    }
    .login{
        align-self: flex-end;
        height: 60px;
        width: 20%;
    }
    input[type="search"]{
        outline: none;
        border-radius: 15px;
        height: 30px;
        margin-top:10px ;
    }
    .Carousel{
        width:80%;
        margin-top: -300px;
    }


</style>