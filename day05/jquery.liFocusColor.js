/**
 * Created by Administrator on 2017/7/31.
 */
//���󼶱�Ĳ��
//�����б����б����ȡ����ʱ�ı���ɫ
;(function(jQuery){
    jQuery.fn.extend({
        "liFocusColor":function(pram_value){
            //����Ĭ�����Ի��߲���������
            var def_color="#ccc";//Ĭ�ϻ�ȡ�������ɫ;
            var lst_color="#FFF";//Ĭ�϶�ʧ�������ɫ;
            //������õ���ɫ��Ϊ��,��ʹ��������ɫ,����ʹ��Ĭ����ɫ
            pram_value=(pram_value==undefined)?def_color:pram_value;
            //�����б���<li>�е�ȫ��Ԫ��
            jQuery(this).find("li").each(function(){
                //���ʵ�ֵĴ���
                jQuery(this).on("mouseover",function(){
                    //��ȡ��꽹���¼�
                    jQuery(this).css("background-color",pram_value);
                })
                jQuery(this).on("mouseout",function(){
                    //ʧȥ��꽹���¼�
                    jQuery(this).css("background-color",lst_color);
                })
            })
            return jQuery(this);//����jquery���󣬱�����ʽ����
        }
    });
})(jQuery);