const ITEM_ID_REGEX = /^[A-Z 0-9]{8,}$/;
const ITEM_NAME_REGEX = /^[A-Za-z ]{2,}$/;
const ITEM_QUANTITY_SIZE_5 = /^[0-9 ]{1,}$/;
const ITEM_QUANTITY_SIZE_6 = /^[0-9 ]{1,}$/;
const ITEM_QUANTITY_SIZE_7 = /^[0-9 ]{1,}$/;
const ITEM_QUANTITY_SIZE_8 = /^[0-9 ]{1,}$/;
const ITEM_QUANTITY_SIZE_9 = /^[0-9 ]{1,}$/;
const ITEM_QUANTITY_SIZE_10 = /^[0-9 ]{1,}$/;
const ITEM_QUANTITY_SIZE_11 = /^[0-9 ]{1,}$/;
const ITEM_SUPPLY_CODE = /^(S00-)[0-9]{1,}$/;
const ITEM_SUPPLY_NAME =  /^[A-Za-z ]{1,}$/;
const ITEM_UNIT_PRICE_SALE = /^[0-9 ]{1,}$/;
const ITEM_UNIT_PRICE_BUY = /^[0-9 ]{1,}$/;
const ITEM_EXPECTED_PROFIT = /^[0-9 ]{1,}$/;
const ITEM_PROFIT_MARGIN = /^[0-9 ]{1,}$/;
const ITEM_STATUS = /^[A-Za-z 0-9]{2,}$/;



let inventoryArray = new Array();

inventoryArray.push({field:$("#txtItemCode"), regEx:ITEM_ID_REGEX});
inventoryArray.push({field:$("#txtItemName"), regEx:ITEM_NAME_REGEX});
inventoryArray.push({field:$("#txtSize5Qty"), regEx:ITEM_QUANTITY_SIZE_5});
inventoryArray.push({field:$("#txtSize6Qty"), regEx:ITEM_QUANTITY_SIZE_6});
inventoryArray.push({field:$("#txtSize7Qty"), regEx:ITEM_QUANTITY_SIZE_7});
inventoryArray.push({field:$("#txtSize8Qty"), regEx:ITEM_QUANTITY_SIZE_8});
inventoryArray.push({field:$("#txtSize9Qty"), regEx:ITEM_QUANTITY_SIZE_9});
inventoryArray.push({field:$("#txtSize10Qty"), regEx:ITEM_QUANTITY_SIZE_10});
inventoryArray.push({field:$("#txtSize11Qty"), regEx:ITEM_QUANTITY_SIZE_11});
inventoryArray.push({field:$("#txtSupplierCodeForItem"), regEx:ITEM_SUPPLY_CODE});
inventoryArray.push({field:$("#txtSupplierNameForItem"), regEx:ITEM_SUPPLY_NAME});
inventoryArray.push({field:$("#txtUnitPriceSale"), regEx:ITEM_UNIT_PRICE_SALE});
inventoryArray.push({field:$("#txtUnitPriceBuy"), regEx:ITEM_UNIT_PRICE_BUY});
inventoryArray.push({field:$("#txtItemExpectedProfit"), regEx:ITEM_EXPECTED_PROFIT});
inventoryArray.push({field:$("#txtItemProfitMargin"), regEx:ITEM_PROFIT_MARGIN});
inventoryArray.push({field:$("#txtItemStatus"), regEx:ITEM_STATUS});

function clearInventoryInputField(){
    $("#txtItemCode,#txtItemName,#txtSize5Qty,#txtSize6Qty,#txtSize7Qty,#txtSize8Qty,#txtSize9Qty,#txtSize10Qty,#txtSize11Qty,#txtSupplierCodeForItem,#txtSupplierNameForItem,#txtUnitPriceSale,#txtUnitPriceBuy,#txtItemExpectedProfit,#txtItemProfitMargin,#txtItemStatus").val("");
    $("#txtItemCode,#txtItemName,#txtSize5Qty,#txtSize6Qty,#txtSize7Qty,#txtSize8Qty,#txtSize9Qty,#txtSize10Qty,#txtSize11Qty,#txtSupplierCodeForItem,#txtSupplierNameForItem,#txtUnitPriceSale,#txtUnitPriceBuy,#txtItemExpectedProfit,#txtItemProfitMargin,#txtItemStatus").css('border','1px solid #ced4da');
    $("#txtItemCode").focus();
    setInventoryBtn();
}

setInventoryBtn();

$("#txtItemCode,#txtItemName,#txtSize5Qty,#txtSize6Qty,#txtSize7Qty,#txtSize8Qty,#txtSize9Qty,#txtSize10Qty,#txtSize11Qty,#txtSupplierCodeForItem,#txtSupplierNameForItem,#txtUnitPriceSale,#txtUnitPriceBuy,#txtItemExpectedProfit,#txtItemProfitMargin,#txtItemStatus").on("keydown keyup", function (e) {
    let indexNo = inventoryArray.indexOf(inventoryArray.find((c) => c.field.attr("id") == e.target.id));

    if (e.key == "Tab") {
        e.preventDefault();
    }

    checkInventoryValidation(inventoryArray[indexNo]);

    setInventoryBtn();

    if (e.key == "Enter") {

        if (e.target.id != inventoryArray[inventoryArray.length - 1].field.attr("id")) {
            if (checkInventoryValidation(inventoryArray[indexNo])) {
                inventoryArray[indexNo + 1].field.focus();
            }
        } else {
            if (checkInventoryValidation(inventoryArray[indexNo])) {
                saveInventory();
            }
        }
    }
});

function checkInventoryValidation(object) {
    if (object.regEx.test(object.field.val())) {
        setInventoryBorder(true, object);
        return true;
    }
    setInventoryBorder(false, object)
    return false;
}
function setInventoryBorder(bol,object){
    if(!bol){
        if (object.field.val().length >= 1) {
            object.field.css("border", "2px solid red");
        } else {
            object.field.css("border", "1px solid #ced4da");
        }
    }
    else {
        if (object.field.val().length >= 1) {
            object.field.css("border", "2px solid green");
        } else {
            object.field.css("border", "1px solid #ced4da");
        }
    }
}
function checkInventoryAll(){
    for (let i = 0; i <inventoryArray.length; i++) {
        if(!checkInventoryValidation(inventoryArray[i])) return  false;
    }
    return true
}
function setInventoryBtn(){
    $("#btnInventoryUpdate").prop("disabled", true);
    $("#btnInventoryDelete").prop("disabled", true);

    if (checkInventoryAll()){
        $("#btnInventorySave").prop("disabled", false);
    }
    else {
        $("#btnInventorySave").prop("disabled", true);
    }

    let id = $("#txtItemCode").val();
    if (searchInventory(id) == undefined) {
        $("#btnInventoryUpdate").prop("disabled", true);
        $("#btnInventoryDelete").prop("disabled", true);
    } else {
        $("#btnInventoryUpdate").prop("disabled", false);
        $("#btnInventoryDelete").prop("disabled", false);
    }
}