<template>
    <div class="tooptip">
        <slot></slot>
        <div class="tooptiptext" :style="tooptiptext">
            <span>{{this.index}}</span>
        </div>
    </div>
</template>

<script>
    export default {
        data:function(){
            return{
                tooptiptext:{
                    height: "50px",
                    width: "120px",
                    backgroundColor:"#c2c0bb",
                    borderRadius: "10px",
                    textAlign: "center",
                    position: "absolute",
                    zIndex: "1"
                }
            }
        },
        props:["index"],
        name: "tooltip",
        methods:{
            getplace:function () {
                this.tooptiptext["left"]=this.$refs.item.offsetLeft
                this.tooptiptext["top"]=this.$refs.item.offsetTop
                console.log(this.tooptiptext[top])
            }
        },
        mounted() {
            this.getplace()
        }
    }
</script>
<style scoped>
    .tooptip{
        background-color: lime;
    }
    .tooptiptext{
        visibility: hidden;
    }
    .tooptiptext::after{
        content: " ";
        position: absolute;
        height: 0px;
        width: 0px;
        border-bottom: solid 8px #c2c0bb;
        border-right: solid 8px transparent;
        border-left: solid 8px transparent;
        top:0%;
        left: 45%;
        margin-top: -8px;
        z-index: 1;

    }
    .tooptip:hover .tooptiptext{
        visibility: visible;
    }

</style>