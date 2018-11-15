$(function(){
    var data = GetUrlParms();
    branch_name = decodeURI(escape(data.branch_name));
    date = data.date;
    id = data.id;
    branch_id = data.branch_id;

    $.ajax({
        url:'../api/dzjb/detail?dzjb_branch_id=' + branch_id,
        dataType:'json',
        type:'GET',
        success:function(result){
            console.log(result)
            var html = '';
            $.each(result.rows, function(i, val){
                html += '<a href="./key-work.html?contentId='+ val.id +'&branch_id='+ branch_id +'&date='+ date +'"><span class="sz">' + (i+1) + '</span><span class="bt">' + val.title + '</span></a>';
            })
            $('#content').html(html);
        }
    })
})

function fanhui(){
    window.location.href='./welcome.html?date=' + date + '&branch_name=' + branch_name + '&id=' + branch_name + '&branch_id=' + branch_id;
}