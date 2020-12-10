<template>
    <div>
        <div class="line">
            <svg xmlns="http://www.w3.org/2000/svg">
                <g>
                    <circle cx="10" cy="10" r="5" fill="white" stroke="blue"  ></circle>
                    <path d="M 0 0l 20 20" stroke="red"></path>
                    <circle cx="10" cy="10" r="5" fill="white" stroke="blue"></circle>
                </g>
            </svg>
        </div>
    </div>
</template>

<script>
    // import drap from "./drap";
    export default {
        name: "straightLine",
        data(){
            return{
                pathstr:"",
                newplace:[],
                type:''
            }
        },
        methods:{
          arraytostr(array,type){
                console.log(array,type)
          }
        },
        components:{
            // drap
        }
    }
</script>

<style scoped>
.line{
    position: absolute;
}
</style>
