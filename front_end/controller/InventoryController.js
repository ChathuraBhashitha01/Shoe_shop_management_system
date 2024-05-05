$("#customer").css('display','none');
$("#supplier").css('display','none');
$("#employee").css('display','none');
$("#inventory").css('display','none');


function clearAll(){
    $("#customer,#supplier,#employee,#inventory").css('display','none');
}

function setView(viewOb){
    clearAll();
    viewOb.css('display','block');
}

$("#navInventory").click(function (){
    setView($("#inventory"))
});
