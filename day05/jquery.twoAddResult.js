/**
 * Created by Administrator on 2017/8/1.
 */
//类级别的插件
//类级别的插件是全局函数$.each()和$.ajax()类似
//该类插件是实现两个数相加减
;(function(jQuery){
    jQuery.extend({
        "addNum":function(pram_value1,pram_value2){
         //插件实现的代码
            //参数没有就默认为0
            pram_value1 = (pram_value1==undefined)? 0 : pram_value1;
            pram_value2 = (pram_value2==undefined)? 0 : pram_value2;
            var result = parseFloat(pram_value1)+parseFloat(pram_value2);
            return result;
        },
        "subNum":function(pram_value1,pram_value2){
            //参数没有就默认为0
            pram_value1 = (pram_value1==undefined)? 0 : pram_value1;
            pram_value2 = (pram_value2==undefined)? 0 : pram_value2;
            var result = parseFloat(pram_value1)-parseFloat(pram_value2);
            return result;
        }
    })
})(jQuery);