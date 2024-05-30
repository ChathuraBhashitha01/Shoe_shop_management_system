const ITEM_ID_REGEX = /^(I00-)[0-9]{3}$/;
const ITEM_NAME_REGEX = /^[A-Za-z ]{2,}$/;
const ITEM_QUANTITY_SIZE_5 = /^[1-9 ]{1,4}$/;
const ITEM_QUANTITY_SIZE_6 = /^[1-9 ]{1,4}$/;
const ITEM_QUANTITY_SIZE_7 = /^[1-9 ]{1,4}$/;
const ITEM_QUANTITY_SIZE_8 = /^[1-9 ]{1,4}$/;
const ITEM_QUANTITY_SIZE_9 = /^[1-9 ]{1,4}$/;
const ITEM_QUANTITY_SIZE_10 = /^[1-9 ]{1,4}$/;
const ITEM_QUANTITY_SIZE_11 = /^[1-9 ]{1,4}$/;
const ITEM_SUPPLY_CODE = /^(S00-)[0-9]{3}$/;
const ITEM_SUPPLY_NAME =  /^[A-Za-z ]{2,}$/;
const ITEM_UNIT_PRICE_SALE = /^[1-9 ]{1,6}$/;
const ITEM_UNIT_PRICE_BUY = /^[1-9 ]{1,6}$/;
const ITEM_EXPECTED_PROFIT = /^[1-9 ]{1,6}$/;
const ITEM_PROFIT_MARGIN = /^[1-9 ]{1,4}$/;
const ITEM_STATUS = /^[A-Za-z]{2,}$/;



let inventoryArray = new Array();

inventoryArray.push({field:$("#txtItemCode"), regEx:EMP_ID_REGEX});
inventoryArray.push({field:$("#txtItemName"), regEx:EMP_NAME_REGEX});
inventoryArray.push({field:$("#txtEmployeeStatus"), regEx:EMP_STATUS});
inventoryArray.push({field:$("#txtEmployeeDesignation"), regEx:EMP_DESIGNATION});
inventoryArray.push({field:$("#txtEmployeeAttachedBranch"), regEx:EMP_ATTACHED_BRANCH});
inventoryArray.push({field:$("#txtEmployeeAddressLine1"), regEx:EMP_ADDRESS_LINE01_REGEX});
inventoryArray.push({field:$("#txtEmployeeAddressLine2"), regEx:EMP_ADDRESS_LINE02_REGEX});
inventoryArray.push({field:$("#txtEmployeeAddressLine3"), regEx:EMP_ADDRESS_LINE03_REGEX});
inventoryArray.push({field:$("#txtEmployeeAddressLine4"), regEx:EMP_ADDRESS_LINE04_REGEX});
inventoryArray.push({field:$("#txtEmployeeAddressLine5"), regEx:EMP_ADDRESS_LINE05_REGEX});
inventoryArray.push({field:$("#txtEmployeeContactNo"), regEx:EMP_CONTACT_REGEX});
inventoryArray.push({field:$("#txtEmployeeEmail"), regEx:EMP_EMAIL_REGEX});
inventoryArray.push({field:$("#txtEmployeeCaseOfEmergency"), regEx:EMP_CASE_OF_EMERGENCY});
inventoryArray.push({field:$("#txtEmployeeEmergencyContact"), regEx:EMP_EMERGENCY_CONTACT_REGEX});