/**
 * Created by Administrator on 2017/7/31.
 */
//对象级别的插件
//设置列表中列表项获取焦点时的背景色
;(function(jQuery){
    jQuery.fn.extend({
        "liFocusColor":function(pram_value){
            //各种默认属性或者参数的设置
            var def_color="#ccc";//默认获取焦点的颜色;
            var lst_color="#FFF";//默认丢失焦点的颜色;
            //如果设置的颜色不为空,则使用设置颜色,否则使用默认颜色
            pram_value=(pram_value==undefined)?def_color:pram_value;
            //遍历列表项<li>中的全部元素
            jQuery(this).find("li").each(function(){
                //插件实现的代码
                jQuery(this).on("mouseover",function(){
                    //获取鼠标焦点事件
                    jQuery(this).css("background-color",pram_value);
                })
                jQuery(this).on("mouseout",function(){
                    //失去鼠标焦点事件
                    jQuery(this).css("background-color",lst_color);
                })
            })
            return jQuery(this);//返回jquery对象，保持链式操作
        }
    });
})(jQuery);