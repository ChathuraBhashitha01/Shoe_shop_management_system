const EMP_ID_REGEX = /^(E00-)[0-9]{3}$/;
const EMP_NAME_REGEX = /^[A-Za-z ]{2,}$/;
const EMP_STATUS = /^[A-Za-z ]{2,}$/;
const EMP_DESIGNATION = /^[A-Za-z ]{2,}$/;
const EMP_ATTACHED_BRANCH = /^[A-Za-z ]{2,}$/;
const EMP_ADDRESS_LINE01_REGEX =  /^[A-Za-z0-9\s,.'-]{2,}$/;
const EMP_ADDRESS_LINE02_REGEX = /^[A-Za-z]{2,}$/;
const EMP_ADDRESS_LINE03_REGEX = /^[A-Za-z]{2,}$/;
const EMP_ADDRESS_LINE04_REGEX = /^[A-Za-z]{2,}$/;
const EMP_ADDRESS_LINE05_REGEX = /^[A-Za-z]{2,}$/;
const EMP_CONTACT_REGEX = /^[0-9]{10}$/;
const EMP_EMAIL_REGEX = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
const EMP_CASE_OF_EMERGENCY = /^[A-Za-z ]{2,}$/;
const EMP_EMERGENCY_CONTACT_REGEX = /^[0-9]{10}$/;


let employeeArry = new Array();

employeeArry.push({field:$("#txtEmployeeCode"), regEx:EMP_ID_REGEX});
employeeArry.push({field:$("#txtEmployeeName"), regEx:EMP_NAME_REGEX});
employeeArry.push({field:$("#txtEmployeeStatus"), regEx:EMP_STATUS});
employeeArry.push({field:$("#txtEmployeeDesignation"), regEx:EMP_DESIGNATION});
employeeArry.push({field:$("#txtEmployeeAttachedBranch"), regEx:EMP_ATTACHED_BRANCH});
employeeArry.push({field:$("#txtEmployeeAddressLine1"), regEx:EMP_ADDRESS_LINE01_REGEX});
employeeArry.push({field:$("#txtEmployeeAddressLine2"), regEx:EMP_ADDRESS_LINE02_REGEX});
employeeArry.push({field:$("#txtEmployeeAddressLine3"), regEx:EMP_ADDRESS_LINE03_REGEX});
employeeArry.push({field:$("#txtEmployeeAddressLine4"), regEx:EMP_ADDRESS_LINE04_REGEX});
employeeArry.push({field:$("#txtEmployeeAddressLine5"), regEx:EMP_ADDRESS_LINE05_REGEX});
employeeArry.push({field:$("#txtEmployeeContactNo"), regEx:EMP_CONTACT_REGEX});
employeeArry.push({field:$("#txtEmployeeEmail"), regEx:EMP_EMAIL_REGEX});
employeeArry.push({field:$("#txtEmployeeCaseOfEmergency"), regEx:EMP_CASE_OF_EMERGENCY});
employeeArry.push({field:$("#txtEmployeeEmergencyContact"), regEx:EMP_EMERGENCY_CONTACT_REGEX});

function clearEmployeeInputField(){
    $("#txtEmployeeCode,#txtEmployeeName,#txtEmployeeStatus,#txtEmployeeDesignation,#txtEmployeeAttachedBranch,#txtEmployeeAddressLine1,#txtEmployeeAddressLine2,#txtEmployeeAddressLine3,#txtEmployeeAddressLine4,#txtEmployeeAddressLine5,#txtEmployeeContactNo,#txtEmployeeEmail,#txtEmployeeCaseOfEmergency,#txtEmployeeEmergencyContact").val("");
    $("#txtEmployeeCode,#txtEmployeeName,#txtEmployeeStatus,#txtEmployeeDesignation,#txtEmployeeAttachedBranch,#txtEmployeeAddressLine1,#txtEmployeeAddressLine2,#txtEmployeeAddressLine3,#txtEmployeeAddressLine4,#txtEmployeeAddressLine5,#txtEmployeeContactNo,#txtEmployeeEmail,#txtEmployeeCaseOfEmergency,#txtEmployeeEmergencyContact").css('border','1px solid #ced4da');
    $("#txtEmployeeCode").focus();
    setEmployeeBtn();
}

setEmployeeBtn();

$("#txtEmployeeCode,#txtEmployeeName,#txtEmployeeStatus,#txtEmployeeDesignation,#txtEmployeeAttachedBranch,#txtEmployeeAddressLine1,#txtEmployeeAddressLine2,#txtEmployeeAddressLine3,#txtEmployeeAddressLine4,#txtEmployeeAddressLine5,#txtEmployeeContactNo,#txtEmployeeEmail,#txtEmployeeCaseOfEmergency,#txtEmployeeEmergencyContact").on("keydown keyup", function (e) {
    let indexNo = employeeArry.indexOf(employeeArry.find((c) => c.field.attr("id") == e.target.id));

    if (e.key == "Tab") {
        e.preventDefault();
    }

    checkEmployeeValidation(employeeArry[indexNo]);

    setEmployeeBtn();

    if (e.key == "Enter") {

        if (e.target.id != employeeArry[employeeArry.length - 1].field.attr("id")) {
            if (checkEmployeeValidation(employeeArry[indexNo])) {
                employeeArry[indexNo + 1].field.focus();
            }
        } else {
            if (checkEmployeeValidation(employeeArry[indexNo])) {
                saveEmployee();
            }
        }
    }
});

function checkEmployeeValidation(object) {
    if (object.regEx.test(object.field.val())) {
        setEmployeeBorder(true, object);
        return true;
    }
    setEmployeeBorder(false, object)
    return false;
}
function setEmployeeBorder(bol,object){
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
function checkEmployeeAll(){
    for (let i = 0; i <employeeArry.length; i++) {
        if(!checkEmployeeValidation(employeeArry[i])) return  false;
    }
    return true
}
function setEmployeeBtn(){
    $("#btnEmployeeUpdate").prop("disabled", true);
    $("#btnEmployeeDelete").prop("disabled", true);

    if (checkEmployeeAll()){
        $("#btnEmployeeSave").prop("disabled", false);
    }
    else {
        $("#btnEmployeeSave").prop("disabled", true);
    }

    let id = $("#txtEmployeeCode").val();
    if (searchEmployee(id) == undefined) {
        $("#btnEmployeeUpdate").prop("disabled", true);
        $("#btnEmployeeDelete").prop("disabled", true);
    } else {
        $("#btnEmployeeUpdate").prop("disabled", false);
        $("#btnEmployeeDelete").prop("disabled", false);
    }
}