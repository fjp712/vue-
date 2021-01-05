<template>
    <div>
    <div >
        <button @click="add">添加新的元素</button>
        <button @click="loadView">视图组件</button>
    </div>
    <div>
            <svg xmlns="http://www.w3.org/2000/svg" :width="2000" :height="2000" id="container">
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
                    <circle
                            :cx="width/2"
                            :cy="4" r="4"
                            class="circle"
                            :ref="`${item}T`"
                            @mousedown="pathbegin($event,item,'T')"
                    >

                    </circle>
                    <circle
                            :cx="width/2"
                            :cy="height-4"
                            r="4"
                            class="circle"
                            :ref="`${item}B`"
                            @mousedown="pathbegin($event,item,'B')"
                    ></circle>
                    <circle
                            :cx="4"
                            :cy="height/2"
                            r="4"
                            class="circle"
                            :ref="`${item}L`"
                            @mousedown="pathbegin($event,item,'L')"
                    ></circle>
                    <circle
                            :cx="width-4"
                            :cy="height/2"
                            r="4"
                            class="circle"
                            :ref="`${item}R`"
                            @mousedown="pathbegin($event,item,'R')"
                    ></circle>

                </g>

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
              pathTimer:0,
              path:'M 0 0',
              pathList:[],
              list:['drap0'],
              circleX:new Array(4).fill(0),
              circleY:new Array(4).fill(0),
              placeInformation:{},
              bearingArray:['T','B','L','R'],
              beginplace:null

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
                for(let i=0;i<this.bearingArray.length;i++){
                    this.circleX[i]=event.clientX-this.$refs[`${item}${this.bearingArray[i]}`][0].getAttribute('cx')
                    this.circleY[i]=event.clientY-this.$refs[`${item}${this.bearingArray[i]}`][0].getAttribute('cy')
                }
                this.flag=true
            },

            move(event,item){
                if(this.flag)
                {
                    this.$refs[item][0].setAttribute('x',`${event.clientX-this.x}`)
                    this.$refs[item][0].setAttribute('y',`${event.clientY-this.y}`)
                    let result=[]
                    for(let i=0;i<this.bearingArray.length;i++){
                        this.$refs[`${item}${this.bearingArray[i]}`][0].setAttribute('cx',`${event.clientX-this.circleX[i]}`)
                        this.$refs[`${item}${this.bearingArray[i]}`][0].setAttribute('cy',`${event.clientY-this.circleY[i]}`)
                        result.push({label:this.bearingArray[i],value:[event.clientX-this.circleX[i],event.clientY-this.circleY[i]]})
                    }
                    this.$set(this.placeInformation,`${item}`,result)
                }
            },

            leavearea(){
                this.flag=false
            },

            pathbegin(event,item,place){
                let template=this.placeInformation[item]
                for(let i=0;i<template.length;i++){
                    if(template[i].label===place)
                        this.beginplace=template[i].value
                }
                console.log(this.beginplace)
                this.drawline(event)
            },

            drawline(){
                let path=document.createElementNS('http://www.w3.org/2000/svg','path')
                path.setAttribute('stroke','#07d6e6')
                path.setAttribute('stroke-width','2')
                path.setAttribute('d',`M${this.beginplace[0]} ${this.beginplace[1]}`)
                document.addEventListener()
                document.removeEventListener()
            },

            loadView(){
                this.$router.push({name:'视图'})
            }
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
