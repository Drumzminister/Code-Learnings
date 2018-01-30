$(function(){
    $.ajax({
        "url":"/ajax.json",
        "type":"get",
        "dataType": "json",
        "success": function(data){
            console.log(data);
        }
    });
});