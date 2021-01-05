<template>
    <div class="card">
        <div class="bg">
            <button class="button">查看详情</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "hover_1"
    }
</script>

<style scoped lang="scss">
.card{
    width: 150px;
    height:200px ;
    border: 1px solid #f5f5f5;
    .bg{
        height: 100%;
        width: 100%;
        z-index: 1;
        background-color: #839f9f ;
        display: flex;
        align-items: center;
        justify-content: center;
        visibility: hidden;
        .button{
            z-index: 2;
            background-color:rgb(53,147,153) ;
            color: #f5f5f5;
            border-width: 0;
            font-size: 8px;
        }
    }
    &:hover  .bg {
        visibility: visible;
    }
}
</style>
