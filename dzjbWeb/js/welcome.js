$(function(){
    data = GetUrlParms();
    branch_name = decodeURI(escape(data.branch_name));
    date = data.date;
    id = data.id;
    branch_id = data.branch_id;

    $('#branchName').text(branch_name);
    $('#date').text(date);
})

function fanhui(){
    window.location.href='../dzjbindex.html?dzjb_branch_id=' + branch_id + '&dzjb_name=' + branch_name;
}

function kaishi(){
    window.location.href="./content.html?id=" + id + "&create_dt=" + date + "&dzjb_branch_id=" + branch_id;
}