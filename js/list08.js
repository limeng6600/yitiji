$(function(){
    $.ajax({
        url:'./api/dropbox/findPackageFile?packageId=29',
        dataType:'json',
        type:'GET',
        success:function(result){
            console.log(result)
            var html = '';
            $.each(result.rows, function(i, val){
                var url = ipPort + val.upload_path;
                html += '<div class="hd-table-list01">';
                html += '<div class="hd-table-name">><a href="' + url +'">';
                html += val.file_name.substring(0, 35) + '...';
                html += '</a></div>';
                html += '<div class="hd-table-time">';
                html += val.create_dt;
                html += '</div><div class="hd-table-type">';
                html += val.create_name;
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
        url: './api/dropbox/findFileByName?fileName=' + keyWord,
        dataType: 'json',
        type: "POST",
        success:function(result){
            var html = '';
            $.each(result.rows, function(i, val){
                var url = ipPort + val.upload_path;
                html += '<div class="hd-table-list01">';
                html += '<div class="hd-table-name">><a href="' + url +'">';
                html += val.file_name.substring(0, 35) + '...';
                html += '</a></div>';
                html += '<div class="hd-table-time">';
                html += val.create_dt;
                html += '</div><div class="hd-table-type">';
                html += val.create_name;
                html += '</div></div>';
            })
            console.log(result)
            $('#rows').html(html);
        }
    })
}