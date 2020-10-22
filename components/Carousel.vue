<template>
    <div class="carousel">
    </div>
</template>

<script>
    export default {
        mounted() {
            setTimeout()
        },
        beforeDestroy() {
            clearTimeout()
        },
        name: "Carousel"
    }
</script>

<style scoped>
    .carousel{
        height: 300px;
        background-color: #f5ede5;
    }
</style>