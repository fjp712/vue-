

<script>
    export default {
        name: "dropdown",
        data(){
            return {
                showChildrenFlag:"visible"
            }
        },
        props:{
            datalist:{
              required:true,
              default:["demo1"]
            },
            showFirst:{
                default: true
            },
            width:{
                type:String,
                default:"60px"
            },
            height:{
                type:String,
                default:"20px"
            },
            showChildrenFirst:{
                type:Boolean,
                default:true
            }
        },
        methods:{
          showChildren(){
             if(this.showChildrenFlag==="visible")
             {
                 this.showChildrenFlag="hidden"
             }
             else
                 this.showChildrenFlag="visible"
              console.log(this.showChildrenFlag)
          }
        },
        render(createElement ) {
            let childrenNode=[]
            if(this.showChildrenFirst)
            {
                this.showChildrenFlag="visible"
            }
            else
                this.showChildrenFlag="hidden"

            childrenNode=this.datalist.map((value)=>createElement(
                "div",
                {
                    style:{
                        visibility:this.showChildrenFlag
                    }
                },
                [
                    createElement("p",
                        {
                            domProps:{
                                innerText:value
                            }
                        }
                    )
                ]
            ))
            return createElement(
                "div",
                {
                    class:"father",
                    style:{
                        height: this.height,
                        width: this.width
                    },
                    on:{
                        click:this.showChildren
                    }
                },
                childrenNode
            )
        }
    }
</script>

<style scoped lang="scss">
.father{
    border-radius: 5px;
    border:1px solid #00e1ff;
}
</style>
