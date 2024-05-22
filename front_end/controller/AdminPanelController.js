$("#admin").css('display','block');

function clearAll(){
    $("#customer,#supplier,#employee,#inventory,#sale").css('display','none');
}

function setView(viewOb){
    clearAll();
    viewOb.css('display','block');
}

$("#navDashboard").click(function (){
    setView($("#admin"))
});

function setMostSellItem(){

}