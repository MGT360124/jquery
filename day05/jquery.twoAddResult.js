/**
 * Created by Administrator on 2017/8/1.
 */
//�༶��Ĳ��
//�༶��Ĳ����ȫ�ֺ���$.each()��$.ajax()����
//��������ʵ����������Ӽ�
;(function(jQuery){
    jQuery.extend({
        "addNum":function(pram_value1,pram_value2){
         //���ʵ�ֵĴ���
            //����û�о�Ĭ��Ϊ0
            pram_value1 = (pram_value1==undefined)? 0 : pram_value1;
            pram_value2 = (pram_value2==undefined)? 0 : pram_value2;
            var result = parseFloat(pram_value1)+parseFloat(pram_value2);
            return result;
        },
        "subNum":function(pram_value1,pram_value2){
            //����û�о�Ĭ��Ϊ0
            pram_value1 = (pram_value1==undefined)? 0 : pram_value1;
            pram_value2 = (pram_value2==undefined)? 0 : pram_value2;
            var result = parseFloat(pram_value1)-parseFloat(pram_value2);
            return result;
        }
    })
})(jQuery);