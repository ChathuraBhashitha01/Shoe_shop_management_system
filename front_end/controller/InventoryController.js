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

$("#btnInventorySave").click(function (){
    let itemCode=$("#txtItemCode").val();
    let itemName=$("#txtItemName").val();
    let itemPicInput = $("#itemPic").prop('files')[0];
    let category=$("#cmdItemCategory").val();
    let supplierCode=$("#txtSupplierCodeForItem").val();
    let supplierName=$("#txtSupplierName").val();
    let unitPriceSale=$("#txtUnitPriceSale").val();
    let unitPriceBuy=$("#txtUnitPriceBuy").val();
    let expectedProfit=$("#txtItemExpectedProfit").val();
    let profitMargin=$("#txtItemProfitMargin").val();
    let status=$("#txtItemStatus").val();
    let size5=$("#txtSize5Qty").val();
    let size6=$("#txtSize6Qty").val();
    let size7=$("#txtSize7Qty").val();
    let size8=$("#txtSize8Qty").val();
    let size9=$("#txtSize9Qty").val();
    let size10=$("#txtSize10Qty").val();
    let size11=$("#txtSize11Qty").val();

    let inventoryData=new FormData();
    inventoryData.append('itemCode',itemCode);
    inventoryData.append('itemDesc',itemName);
    inventoryData.append('itemPicture',itemPicInput);
    inventoryData.append('category',category);
    inventoryData.append('quantitySize5',size5);
    inventoryData.append('quantitySize6',size6);
    inventoryData.append('quantitySize7',size7);
    inventoryData.append('quantitySize8',size8);
    inventoryData.append('quantitySize9',size9);
    inventoryData.append('quantitySize10',size10);
    inventoryData.append('quantitySize11',size11);
    inventoryData.append('supplierCode',supplierCode);
    inventoryData.append('supplierName',supplierName);
    inventoryData.append('unitPriceSale',unitPriceSale);
    inventoryData.append('unitPriceBuy',unitPriceBuy);
    inventoryData.append('expectedProfit',expectedProfit);
    inventoryData.append('profitMargin',profitMargin);
    inventoryData.append('status',status);

    $.ajax({
        url:"http://localhost:8080/app/api/v1/employees",
        method:"POST",
        data: inventoryData,
        processData: false,
        contentType: false,

        success: function (resp, textStatus, jqxhr){
            console.log("Success",resp);
            if (jqxhr.status == 201) {
                alert("Added customer successfully");
            }
        },
        error: function (error){
            console.log("Error",error);
        }
    });
});

$("#btnInventoryUpdate").click(function (){

});

$("#btnInventoryDelete").click(function (){

});
