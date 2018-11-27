$(function(){
    var data = GetUrlParms();
    var topic_name = decodeURI(escape(data.topic_name));
    $('#topic_name').text(topic_name + '文件列表');
    $.ajax({
        url:'./api/topic/getRoleTopic?role_id=2',
        dataType:'json',
        type:'GET',
        success:function(result){
            console.log(result)
            var html = '';
            $.each(result.rows, function(i, val){
                if(topic_name.substring(3,4) == val.topic_name.substring(3,4) || topic_name == val.topic_name){
                    findFileOnlineByTopicId(val.id);
                }
                html += '<a href="./list01.html?topic_name='+ val.topic_name +'" class="hd-link">' + val.topic_name + '</a>';
            })
            $('#daohang').html(html);
        }
    })    
    
})

function findFileOnlineByTopicId(topic_id){
    $.ajax({
        url:'./api/file/findFileOnlineByTopicId?topicId=' + topic_id,
        dataType:'json',
        type:'GET',
        success:function(result){
            console.log(result)
            var html = '';
            $.each(result.rows, function(i, val){
                html += '<div class="hd-table-list01">';
                html += '<div class="hd-table-name">><a href="./list05.html?fileId=' + val.id + '">';
                html += val.title.substring(0, 35) + '...';
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
}

function chaxun(){
    var inputVal = $('#serach').val();
    $.ajax({
        url:'./api/indexFind?fileName=' + inputVal,
        dataType:'json',
        type:'GET',
        success:function(result){
            var html = '';
            $.each(result.rows, function(i, val){
                html += '<div class="hd-table-list01">';
                html += '<div class="hd-table-name">><a href="./list05.html?fileId=' + val.id + '">';
                html += val.title.substring(0, 35) + '...';
                html += '</a></div>';
                html += '<div class="hd-table-time">';
                html += val.create_dt;
                html += '</div><div class="hd-table-type">';
                html += val.create_name;
                html += '</div></div>';
            })
            $('#rows').html(html);
            $('#topic_name').text('"' + inputVal + '"    ' + '搜索结果');
        }
    })
}