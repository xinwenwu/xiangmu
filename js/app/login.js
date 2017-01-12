/**
 * Created by Administrator on 2017/1/6 0006.
 */
$(function(){
    $("#myform").validate({
       rules: {
           filed: {
               required: true,
               minlength: 5,
               maxlength: 12
           }
       },
        messages: {
            filed: {
                required: "请输入正确的手机或者电子邮箱",
               }
           }
    });
});