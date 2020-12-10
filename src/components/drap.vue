<template>
    <div>
    <div >
        <button @click="add">添加新的元素</button>
    </div>
    <div>
            <svg xmlns="http://www.w3.org/2000/svg" :width="2000" :height="2000">
<!--                <slot name="drap" v-bind="{data:drapstyle}">-->
                <g v-for="(item,index) in list" :key="index">
                    <rect
                        :ref="item"
                        :width="width-8"
                        :height="height-8"
                        x="4"
                        y="4"
                        style="stroke: deepskyblue;stroke-width: 1px;fill: #ffffff"
                        @mousedown="rememberPlace($event,item)" @mousemove="move($event,item)" @mouseup="leavearea"
                        class="area"
                    >
                    </rect>
                    <circle :cx="width/2" :cy="4" r="4" class="circle" :ref="`${item}T`"></circle>
                    <circle :cx="width/2" :cy="height-4" r="4" class="circle" :ref="`${item}B`"></circle>
                    <circle :cx="4" :cy="height/2" r="4" class="circle" :ref="`${item}L`"></circle>
                    <circle :cx="width-4" :cy="height/2" r="4" class="circle" :ref="`${item}R`"></circle>
                </g>



                <path class="line" :d="path" stroke="red"></path>
<!--                </slot>-->
            </svg>
    </div>
    </div>
</template>

<script>
    export default {
        data(){
          return{
              x:0,
              y:0,
              flag:false,
              timer:0,
              path:'M 0 0',
              list:['drap0'],
              circleX:new Array(4).fill(0),
              circleY:new Array(4).fill(0)
          }
        },
        methods:{
            add(){
                this.timer++;
                this.list.push(`drap${this.timer}`)
            },
            rememberPlace(event,item){
                this.flag=false
                this.x=event.clientX-this.$refs[item][0].getAttribute('x')
                this.y=event.clientY-this.$refs[item][0].getAttribute('y')
                this.circleX[0]=event.clientX-this.$refs[`${item}T`][0].getAttribute('cx')
                this.circleY[0]=event.clientY-this.$refs[`${item}T`][0].getAttribute('cy')
                this.circleX[1]=event.clientX-this.$refs[`${item}B`][0].getAttribute('cx')
                this.circleY[1]=event.clientY-this.$refs[`${item}B`][0].getAttribute('cy')
                this.circleX[2]=event.clientX-this.$refs[`${item}L`][0].getAttribute('cx')
                this.circleY[2]=event.clientY-this.$refs[`${item}L`][0].getAttribute('cy')
                this.circleX[3]=event.clientX-this.$refs[`${item}R`][0].getAttribute('cx')
                this.circleY[3]=event.clientY-this.$refs[`${item}R`][0].getAttribute('cy')
                console.log(this.circleX)
                this.flag=true
            },
            move(event,item){
                if(this.flag)
                {
                    this.$refs[item][0].setAttribute('x',`${event.clientX-this.x}`)
                    this.$refs[item][0].setAttribute('y',`${event.clientY-this.y}`)
                    this.$refs[`${item}T`][0].setAttribute('cx',`${event.clientX-this.circleX[0]}`)
                    this.$refs[`${item}T`][0].setAttribute('cy',`${event.clientY-this.circleY[0]}`)
                    this.$refs[`${item}B`][0].setAttribute('cx',`${event.clientX-this.circleX[1]}`)
                    this.$refs[`${item}B`][0].setAttribute('cy',`${event.clientY-this.circleX[1]}`)
                    this.$refs[`${item}L`][0].setAttribute('cx',`${event.clientX-this.circleX[2]}`)
                    this.$refs[`${item}L`][0].setAttribute('cy',`${event.clientY-this.circleX[2]}`)
                    this.$refs[`${item}R`][0].setAttribute('cx',`${event.clientX-this.circleX[3]}`)
                    this.$refs[`${item}R`][0].setAttribute('cy',`${event.clientY-this.circleX[3]}`)
                }
            },
            leavearea(){
                this.flag=false
            },
            drawline(){
                this.path=`${this.path}l200 200`
            },
            linestart(){
                this.flag=false
                this.drawline()
            },

        },
        name: "drap",
        props:{
            height:{
                type:String,
                default:'100'
            },
            width:{
                type: String,
                default: '300'
            }
        }
    }
</script>

<style scoped>
    .area{
        padding: 2px;
    }
    .area:hover{
        cursor: move;
    }
    .circle{
        cursor: crosshair;
    }
</style>
