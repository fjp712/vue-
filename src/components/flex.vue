<template>
    <div class="container">
        <div class="flex-container"></div>
    </div>
</template>

<script>
    export default {
        name: "flex"
    }
</script>

<style scoped>
    .container
    {
        height: 100vh;
        display: flex;
        flex-grow: 1;
    }
    .container .flex-container{
        height: 2000px;
        background: #2c3e50;
    }
</style>
