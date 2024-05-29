/*$("#admin").css('display','block');

function clearAll(){
    $("#customer,#supplier,#employee,#inventory,#sale").css('display','none');
}*/

function setDashboardView(viewOb){
    clearAll();
    viewOb.css('display','block');
}

$("#navDashboard").click(function (){
    setDashboardView($("#admin"))
});
setMostSellItem();

function setMostSellItem(){
    $.ajax({
        url: "http://localhost:8080/app/api/v1/salesDetails/topSale",
        method: "GET",
        dataType: "json",
        headers: {
            "Authorization": "Bearer " + localStorage.getItem("token")
        },
        success: function (resp) {
            $("#lblMostSellingItem").text(resp.itemDesc);
        },
    });
}