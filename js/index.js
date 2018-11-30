$(function(){

    $.ajax({
        type:'GET',
        url:'./api/workSupervision/findWorkSupervision?page=1&rows=11',
        dataType:'json',
        success:function(result){
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

    $.ajax({
        url:'./api/yitiji/findImg',
        tyep:'GET',
        dataType:'json',
        success:function(result){
            console.log(result.rows.length)
            if(result.rows.length == 1){
                $.each(result.rows, function(i, val){
                    $("#fir").attr('src',val.img); 
                })
            }
            if(result.rows.length == 2){
                $.each(result.rows, function(i, val){
                    if(i == 0){
                        $("#fir").attr('src',val.img); 
                    }else if(i == 1){
                        $("#sec").attr('src',val.img); 
                    }else if(i == 2){
                        $("#thi").attr('src',val.img); 
                    }else if(i == 3){
                        $("#for").attr('src',val.img); 
                    }else if(i ==4){
                        $("#fiv").attr('src',val.img); 
                    }
                })
            }
            if(result.rows.length == 3){
                $.each(result.rows, function(i, val){
                    console.log(i)
                    if(i == 0){
                        $("#fir").attr('src',val.img); 
                    }else if(i == 1){
                        $("#sec").attr('src',val.img); 
                    }else if(i == 2){
                        $("#thi").attr('src',val.img); 
                    }else if(i == 3){
                        $("#for").attr('src',val.img); 
                    }else if(i ==4){
                        $("#fiv").attr('src',val.img); 
                    }
                })
            }
            if(result.rows.length == 4){
                $.each(result.rows, function(i, val){
                    if(i == 0){
                        $("#fir").attr('src',val.img); 
                    }else if(i == 1){
                        $("#sec").attr('src',val.img); 
                    }else if(i == 2){
                        $("#thi").attr('src',val.img); 
                    }else if(i == 3){
                        $("#for").attr('src',val.img); 
                    }else if(i ==4){
                        $("#fiv").attr('src',val.img); 
                    }
                })
            }
            if(result.rows.length >= 5){
                $.each(result.rows, function(i, val){
                    if(i == 0){
                        $("#fir").attr('src',val.img); 
                    }else if(i == 1){
                        $("#sec").attr('src',val.img); 
                    }else if(i == 2){
                        $("#thi").attr('src',val.img); 
                    }else if(i == 3){
                        $("#for").attr('src',val.img); 
                    }else if(i ==4){
                        $("#fiv").attr('src',val.img); 
                    }
                })
            }
         }
    })
})

function href111(){
    window.location.href = "./list03.html";
}