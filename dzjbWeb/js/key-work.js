$(function(){
    var data = GetUrlParms();
    branch_name = decodeURI(escape(data.branch_name));
    date = data.date;
    id = data.id;
    branch_id = data.branch_id;
    contentId = data.contentId;

    $.ajax({
        url:'../api/dzjb/detail?dzjb_branch_id=' + branch_id,
        dataType:'json',
        type:'GET',
        success:function(result){
            console.log(result)
            var html = '';
            $.each(result.rows, function(i, val){
                if(contentId == val.id){
                    html += '<li><a href="./key-work.html?contentId='+ val.id +'&branch_id='+ branch_id +'&date='+ date +'" class="selected"><span>' + val.title + '</span></a></li>';
                    title = val.title;
                }else{
                    html += '<li><a href="./key-work.html?contentId='+ val.id +'&branch_id='+ branch_id +'&date='+ date +'"><span>' + val.title + '</span></a></li>';
                }
            })
            html += '<li><a href="./goodbye.html" ><span class="bt">结&nbsp;&nbsp;&nbsp;&nbsp;束</span></a></li>';
            $('#daohang').html(html);
        }
    })

    $.ajax({
        url:'../api/dzjb/findFile?titleId=' + contentId + '&date=' + date,
        dataType:'json',
        type:'GET',
        success:function(res){
            console.log(res)
            $("#content").empty();
            $('#content').append('<div class="title">' + title + '</div>');
            var inhtml = '';
            for(var i = 0; i<res.rows.length; i++){
                var content = res.rows[i];
                inhtml += '<div class="list"><div class="title01"><p></p></div>';
                inhtml += '<ul>';
                var pdf_path = content.pdf_path;
                inhtml += '<li><a href="#" target="_blank">（' + (i+1) + '）' + content.file_name + '  【点击预览】</a>';
                if(content.if_return == 0){
                    inhtml += '<button type="button" class="btn btn-default" title = "不再下次交班中显示" onclick = "ifReturn('+content.id+')">点击移除文件</button>';
                }
                inhtml += '</li>';
                inhtml += '</ul></div>';
                inhtml += '<div class="list_xx"></div>';
            }
            $('#content').append(inhtml);
        }
    })
})


function ifReturn(id){
	$.ajax({
		   url:'../api/dzjb/ifReturn?fileId='+id + '&create_dt=' + date,
		   dataType: 'json',
		   method: 'get',
		   success: function(res) {
			   window.location.reload();
		   },
		   error: function(xhr) {
		       console.log(xhr)
		   }
		})
}