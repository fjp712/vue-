<template>
    <div class="view_container">
        <div class="view_container_left"></div>
        <div class="view_container_main">
            <hover_1></hover_1>
            <dropdown :datalist="[1,2,3]"></dropdown>
        </div>
        <div style="height: 400px;width: 400px" class="test"></div>
        <carousel></carousel>
    </div>
</template>

<script>
    import hover_1 from "./hover/hover_1";
    import dropdown from "./dropdown/dropdown";
    import Carousel from "./Carousel/Carousel";
    export default {
        name: "views",
        components:{hover_1,dropdown,Carousel}
    }
</script>

<style scoped lang="scss">
    .view_container{
        display: flex;
        justify-content: center;
        &_main {
            flex-grow: 1;
        }
        &_left{
            width: 10rem;
        }
        .test{
            /*background-image: url("../assets/example.jpg");*/
            background-position: center;
            background-color: red;
        }
    }
</style>
