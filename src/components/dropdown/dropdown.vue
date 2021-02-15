

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
          showChildren() {
              let childrenNode=(document.querySelectorAll(".childrenNode"))[0]
              if(childrenNode.style.visibility==="hidden")
              {
                  childrenNode.style.visibility="visible"
              }
              else {
                  childrenNode.style.visibility="hidden"
              }


          }
        },
        render(createElement ) {
            if(this.showChildrenFirst)
            {
                this.showChildrenFlag="visible"
            }
            else
                this.showChildrenFlag="hidden"

            let childrenNode=createElement(
                "div",
                {
                    style:{
                        visibility:this.showChildrenFlag,
                        marginTop:"25px"
                    },
                    class:"childrenNode"
                },
                this.datalist.map((value)=>
                    createElement(
                        "p",
                        {
                            style:{
                                margin:"0px",
                                paddingTop:"4px"
                            },
                            class:"childrenItem",
                            domProps:{
                                innerText:value
                            }
                        }
                    )
                )
            )

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
                [childrenNode]
            )
        }
    }
</script>

<style scoped lang="scss">
    .father{
        border-radius: 5px;
        border:1px solid #00e1ff;
        :hover{
            cursor: pointer;
        }
    }

</style>
