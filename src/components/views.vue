<template>
    <div class="view_container">
        <div class="view_container_left"></div>
        <div class="view_container_main">
            <hover_1></hover_1>
        </div>
    </div>
</template>

<script>
    import hover_1 from "./hover/hover_1";
    export default {
        name: "views",
        components:{hover_1}
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
    }
</style>
