$(function(){
    $.ajax({
        url:'./api/proposal/findProposal',
        type:'GET',
        dataType:'json',
        success:function(result){
            console.log(result)
            var html = '';
            $.each(result.rows, function(i, val){
                html += '<div class="hd-table-list01"><div class="hd-table-name">><a href="./details.html?id='+ val.id +'">';
                html += val.title.substring(0, 50);
                html += '</a></div><span class="hd-all-in-one-body-list-time"><div class="hd-table-time">';
                html += val.create_dt;
                html += '</div> </div> ';
            })
            $('#rows').html(html);
        }
    })
})