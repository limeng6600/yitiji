$(function(){
    $.ajax({
        url:'./api/productiveTask/findProductiveTask?page=1&rows=3000',
        dataType:'json',
        type:'GET',
        success:function(result){
            console.log(result)
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
                    html += '白班上传';
                }else if(val.group_number == 2){
                    html += '夜班上传';
                }
                html += '</div></div>';
            })
            $('#rows').html(html);
        }
    })
})

function serach(){
    var keyWord = $('#serach').val();
    console.log(keyWord)
    $.ajax({
        url: './api/productiveTask/findProductiveTaskFile?keyWord=' + keyWord,
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
                    html += '白班上传';
                }else if(val.group_number == 2){
                    html += '夜班上传';
                }
                html += '</div></div>';
            })
            console.log(result)
            $('#rows').html(html);
        }
    })
}