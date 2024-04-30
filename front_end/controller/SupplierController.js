$("#customer").css('display','none');
$("#supplier").css('display','none');
$("#employee").css('display','none');

function clearAll(){
    $("#customer,#supplier,#employee").css('display','none');
}

function setView(viewOb){
    clearAll();
    viewOb.css('display','block');
}

$("#navSupplier").click(function (){
    setView($("#supplier"))
});