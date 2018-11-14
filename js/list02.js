$(function(){
    $.ajax({
        tyep:'GET',
        dataType:'json',
        url:'./api/workSupervision/findWorkSupervision?page=1&rows=3000',
        success:function(result){
            var html = '';
            $.each(result.rows, function(i, val){
                var url = ipPort + val.upload_path;
                html += '<div class="hd-table-list01">';
                html += '<div class="hd-table-name">><a href="' + url +'">';
                html += val.show_name.substring(0, 35) + '...';
                html += '</a></div>';
                html += '<div class="hd-table-time">';
                html += val.create_dt;
                html += '</div><div class="hd-table-type">';
                if(val.group_number == 1){
                    html += '管控上传';
                }else if(val.group_number == 2){
                    html += '质检上传';
                }else{
                    html += '督办上传';
                }
                html += '</div></div>';
            })
            console.log(result)
            $('#rows').html(html);
        }
    })
})

function serach(){
    var keyWord = $('#serach').val();
    console.log(keyWord)
    $.ajax({
        url: './api/workSupervision/findWorkSupervisionFile?keyWord=' + keyWord,
        dataType: 'json',
        type: "GET",
        success:function(result){
            var html = '';
            $.each(result.rows, function(i, val){
                var url = ipPort + val.upload_path;
                html += '<div class="hd-table-list01">';
                html += '<div class="hd-table-name">><a href="' + url +'">';
                html += val.show_name.substring(0, 35) + '...';
                html += '</a></div>';
                html += '<div class="hd-table-time">';
                html += val.create_dt;
                html += '</div><div class="hd-table-type">';
                if(val.group_number == 1){
                    html += '管控上传';
                }else if(val.group_number == 2){
                    html += '质检上传';
                }else{
                    html += '督办上传';
                }
                html += '</div></div>';
            })
            console.log(result)
            $('#rows').html(html);
        }
    })
}