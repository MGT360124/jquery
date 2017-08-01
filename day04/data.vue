<template>
   
</template>

<script type="text/ecmascript-6">
    export default{
     name:'',
     components:{},
     data:function(){//或者data() {},
     return{};
     },
     created() {},
     events:{},
     methods:{},
     computed:{},
     watch:{},
     props:{
     <!-- props 可以是数组或对象，用于接收来自父组件的数据。props 可以是简单的数组，或者使用对象作为替代，对象允许配置高级选项，如类型检测、自定义校验和设置默认值 -->
      age: {
      type:Number/String/Object,
      default:100,
      required:true,
      validator:function(value) {
      return value;
      }  
      }
     },
     filters:{},
     mounted:function(){},
      }

    };
</script>

<style lang="stylus" rel="stylesheet/stylus">
    
</style>