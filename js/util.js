ipPort = "http://localhost:8047"; 
// ipPort = "http://10.19.147.28:8047"; 

date = '';
$(function(){
    $.ajax({
        url:'./api/sys/date',
        dataType:'json',
        type:'GET',
        success:function(result){
            date = result.message.substring(0,10);
            $('#date').text(date);
        }
    })
})


function GetUrlParms() {
    var args = new Object();
    var query = location.search.substring(1); //获取查询串   
    var pairs = query.split("&"); //在逗号处断开   
    for (var i = 0; i < pairs.length; i++) {
        var pos = pairs[i].indexOf('='); //查找name=value   
        if (pos == -1) continue; //如果没有找到就跳过   
        var argname = pairs[i].substring(0, pos); //提取name   
        var value = pairs[i].substring(pos + 1); //提取value   
        args[argname] = unescape(value); //存为属性   
    }
    return args;
}

function xtsz(){
    window.location.href="./xtgl.html"
}