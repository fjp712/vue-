<template>
    <div>
        <transition>
            <div :class="[typeclass]"></div>
        </transition>
    </div>
</template>

<script>
    export default {
        data(){
          return{

          }
        },
        props:{
            type:{
                type: String,
                default:'info'
            }
        },
        name: "alert",
        computed:{
            typeclass(){
                retrun `component-el-${this.type}`
            }
        }
    }
</script>

<style scoped>

</style>