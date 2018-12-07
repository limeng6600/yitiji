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
        url:'./api/dropbox/findPackageFile?packageId=27',
        tyep:'GET',
        dataType:'json',
        success:function(result){
            if(result.rows.length == 1){
                $("#fir").attr('src',ipPort + result.rows[0].upload_path); 
            }
            if(result.rows.length == 2){
                $.each(result.rows, function(i, val){
                    if(i == 0){
                        $("#fir").attr('src',ipPort + val.upload_path); 
                    }else if(i == 1){
                        $("#sec").attr('src',ipPort + val.upload_path); 
                    }else if(i == 2){
                        $("#thi").attr('src',ipPort + val.upload_path); 
                    }else if(i == 3){
                        $("#for").attr('src',ipPort + val.upload_path); 
                    }else if(i ==4){
                        $("#fiv").attr('src',ipPort + val.upload_path); 
                    }
                })
            }
            if(result.rows.length == 3){
                $.each(result.rows, function(i, val){
                    console.log(i)
                    if(i == 0){
                        $("#fir").attr('src',ipPort + val.upload_path); 
                    }else if(i == 1){
                        $("#sec").attr('src',ipPort + val.upload_path); 
                    }else if(i == 2){
                        $("#thi").attr('src',ipPort + val.upload_path); 
                    }else if(i == 3){
                        $("#for").attr('src',ipPort + val.upload_path); 
                    }else if(i ==4){
                        $("#fiv").attr('src',ipPort + val.upload_path); 
                    }
                })
            }
            if(result.rows.length == 4){
                $.each(result.rows, function(i, val){
                    if(i == 0){
                        $("#fir").attr('src',ipPort + val.upload_path); 
                    }else if(i == 1){
                        $("#sec").attr('src',ipPort + val.upload_path); 
                    }else if(i == 2){
                        $("#thi").attr('src',ipPort + val.upload_path); 
                    }else if(i == 3){
                        $("#for").attr('src',ipPort + val.upload_path); 
                    }else if(i ==4){
                        $("#fiv").attr('src',ipPort + val.upload_path); 
                    }
                })
            }
            if(result.rows.length >= 5){
                $.each(result.rows, function(i, val){
                    if(i == 0){
                        $("#fir").attr('src',ipPort + val.upload_path); 
                    }else if(i == 1){
                        $("#sec").attr('src',ipPort + val.upload_path); 
                    }else if(i == 2){
                        $("#thi").attr('src',ipPort + val.upload_path); 
                    }else if(i == 3){
                        $("#for").attr('src',ipPort + val.upload_path); 
                    }else if(i ==4){
                        $("#fiv").attr('src',ipPort + val.upload_path); 
                    }
                })
            }
         }
    })


    $.ajax({
        url:'./api/proposal/findProposal',
        type:'GET',
        dataType:'json',
        success:function(result){
            console.log(result)
            var html = '';
            $.each(result.rows, function(i, val){
                if(i>15)
                    return false;
                html += '<li><a href="./details.html?id='+ val.id +'" class="hd-all-in-one-body-list-text">';
                html += val.title.substring(0, 20);
                html += '</a><span class="hd-all-in-one-body-list-time">';
                html += val.create_dt;
                html += '</span></li>';
            })
            $('#proposal').html(html);
        }
    })
})

function href111(){
    window.location.href = "./list03.html";
}