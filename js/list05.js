$(function(){
    var data = GetUrlParms();
    var fileId = data.fileId;
    $.ajax({
        url:'./api/file/detail?fileId=' + fileId,
        dataType:'json',
        type:'GET',
        success:function(result){
            console.log(result)
            $('#title').val(result.rows[0].title);
            if(result.rows[0].emergency_degree == 1){
                $('#jjcd').val('紧急');
            }else{
                $('#jjcd').val('一般');
            }
            if(result.rows[0].approval == null || result.rows[0].approval == ''){
                $('#ldps').val('无领导批示！');
            }else{
                $('#ldps').val(result.rows[0].approval);
            }
            var url = ipPort + result.rows[0].upload_path;
            var html = '<a href="'+ url +'">'+ result.rows[0].showName +'</a>';
            $('#zw').html(html);
            if(result.rows[0].fileChildren.length == 0){
                $('#fj').html('<a href="#">无附件！</a>');
            }else{
                var fjHtml = '';
                $.each(result.rows[0].fileChildren, function(i, val){
                    fjHtml += '<a href="'+ ipPort + val.upload_path +'">' + val.show_name + '</a>';
                    fjHtml += '|';
                })
                $('#fj').html(fjHtml);
            }
        }
    })
})
