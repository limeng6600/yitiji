$(function(){
    var data = GetUrlParms();
    var dzjb_name = decodeURI(escape(data.dzjb_name));
    var dzjb_branch_id =  data.dzjb_branch_id;

    $('#title').text(dzjb_name + '电子交班');
    $.ajax({
        url:'./api/dzjb/dateAll?dzjb_branch_id=' + dzjb_branch_id,
        dataType:'json',
        type:'POST',
        success:function(result){
            console.log(result)
            var html = '';
            $.each(result.rows, function(i, val){
                html += '<div class="hd-table-list01">';
                html += '<div class="hd-table-name">><a href="./dzjbWeb/welcome.html?branch_name=' + val.branch_name + '&date=' + val.date + '&id=' + val.id + '&branch_id=' + val.dzjb_branch_id + '">';
                html += val.branch_name + '电子交班会';
                html += '</a></div>';
                html += '<div class="hd-table-time">';
                html += val.date;
                html += '</div></div>';
            })
            $('#rows').html(html);
        }
    })
})