<template>
    <div :style="drapstyle" @mousedown="rememberPlace" @mousemove="move" @mouseup="leavearea" ref="draw">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        data(){
          return{
              x:0,
              y:0,
              drapstyle:{
                  position:'absolute',
                  left:'0px',
                  top:'0px',
                  border:'solid 1px #2c3e50',
              },
              flag:false
          }
        },
        created() {
            Object.assign(this.drapstyle,this.$props)
            console.log(this.drapstyle)
        },
        methods:{
            rememberPlace(event){
                this.x=event.clientX-this.$refs.draw.offsetLeft
                this.y=event.clientY-this.$refs.draw.offsetTop
                this.flag=!this.flag
            },
            move(event){
                if(this.flag)
                {
                    // eslint-disable-next-line no-debugger
                    this.$set(this.drapstyle,'left',`${event.clientX-this.x}px`);
                    this.$set(this.drapstyle,'top',`${event.clientY-this.y}px`);
                    if(parseInt(this.drapstyle.left)+parseInt(this.drapstyle.width)>document.body.clientWidth)
                    {
                        this.drapstyle.left='0px'
                        this.flag=false
                    }
                    console.log(document.body.clientHeight)
                    if(parseInt(this.drapstyle.top)+parseInt(this.drapstyle.height)>window.innerHeight)
                    {
                        this.drapstyle.top='0px'
                        this.flag=false
                    }

                }

            },
            leavearea(){
                this.flag=!this.flag
            }
        },
        name: "drap",
        props:{
            height:{
                type:String,
                default:'100px'
            },
            width:{
                type: String,
                default: '300px'
            }
        }
    }
</script>

<style scoped>

</style>
