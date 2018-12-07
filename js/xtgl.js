
function tijiao(){
    var title = $('#title').val();
    var text = $('#text').val();
    $.ajax({
        url:"./api/proposal/insert",
        dataType:'json',
        type:'POST',
        contentType:'application/json',
        data:JSON.stringify({'title':title, 'text':text}),
        success:function(result){
            alert(result.message)
            window.location.reload();
        }
    })
}