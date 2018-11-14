$(function(){
    $.ajax({
        type:'GET',
        url:'./api/workSupervision/findWorkSupervision?page=1&rows=11',
        dataType:'json',
        success:function(result){
            console.log(result)
            var html = '';
            $.each(result.rows, function(i, val){
                var url = ipPort + val.upload_path;
                html += '<li><a href="' + url + '" class="hd-all-in-one-body-list-text">';
                html += val.show_name.substring(0, 20);
                html += '</a><span class="hd-all-in-one-body-list-time">';
                html += val.create_dt;
                html += '</span></li>';
            })
            $('#gzdbUl').html(html);
        }
    })
})

function href(){
    alert(1)
    window.location.href = "./list03.html";
}