$(function(){

    var data = GetUrlParms();
    var id = data.id;

    $.ajax({
        url:'./api/proposal/findProposalById?id=' + id,
        type:'GET',
        dataType:'json',
        success:function(result){
            console.log(result)
            $('#title').text(result.rows[0].title);
            $('#content').text(result.rows[0].text);
            $('#create_dt').text(result.rows[0].create_dt);
        }
    })
})