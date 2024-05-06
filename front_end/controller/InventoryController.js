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
    let itemPicInput = $("#itemPic")[0]; // File input element
    let itemPicFile = itemPicInput.files[0]; // Get the first selected file
    let category=$("#cmdItemCategory").val();
    let supplierCode=$("#txtSupplierCodeForItem").val();
    let unitPriceSale=$("#txtUnitPriceSale").val();
    let unitPriceBuy=$("#txtUnitPriceBuy").val();
    let expectedProfit=$("#txtItemExpectedProfit").val();
    let profitMargin=$("#txtItemProfitMargin").val();
    let status=$("#txtItemStatus").val();

    if (!itemPicFile) {
        // Handle case where no file is selected
        console.error('No file selected');
        return;
    }

    let reader = new FileReader();
    reader.onload = function (event) {
        let base64String = event.target.result;
    }

    let newInventory={

    }

});

$("#btnInventoryUpdate").click(function (){

});

$("#btnInventoryDelete").click(function (){

});
