$(function(){
    
    $.ajax({
        url:'./api/yitiji/findImg',
        dataType:'json',
        tyep:'GET',
        success:function(result){
            var html = '';
            $.each(result.rows, function(i, val){
                html += '<div class="hd-table-list01" style="height:200px">';
                html += '<div class="hd-table-name" style="width:35%"><a href="#">'+ (i+1) +'.</a></div>';
                html += '<div class="hd-table-time"><img src="'+ val.img +'" style="height:180px"></div>';
                html += '<div class="hd-table-type" style="width:50%"><button type="button" class="btn btn-danger" onclick="deleteImg('+ val.id +')">删除</button></div></div>';
            })
            $('#rows').html(html);
        }
    })
})

function deleteImg(id){
    $.ajax({
        url:'./api/yitiji/deleteImg?id=' + id,
        dataType:'json',
        tyep:'GET',
        success:function(result){
            window.location.reload();
        }
    })
}