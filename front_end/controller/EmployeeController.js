$("#customer").css('display','none');
$("#supplier").css('display','none');
$("#employee").css('display','none');
$("#inventory").css('display','none');
getAllEmployee()
let employeePictures=[];


function clearAll(){
    $("#customer,#supplier,#employee,#inventory").css('display','none');
}

function setView(viewOb){
    clearAll();
    viewOb.css('display','block');
}

$("#navEmployee").click(function (){
    setView($("#employee"))
});

let profilePic=document.getElementById("profilePic")
let inputFile=document.getElementById("inputFile")

inputFile.onchange = function (){
    profilePic.src=URL.createObjectURL(inputFile.files[0])
}

$("#btnEmployeeSave").click(function (){
    let employeeCode=$("#txtEmployeeCode").val();
    let employeeName=$("#txtEmployeeName").val();
    let proPic = $("#inputFile").prop('files')[0];

    let employeeGender="MALE";
    let employeeMale =$("#employeeMale").val();
    let employeeFeMale =$("#employeeFemale").val();
    if (employeeMale.checked) {
        employeeGender=employeeGender.value;
    }
    else if (employeeFeMale.checked){
        employeeGender=employeeGender.value;
    }
    let employeeStatus=$("#txtEmployeeStatus").val();
    let employeeDesignation=$("#txtEmployeeDesignation").val();
    let employeeAccessRole=$("#txtEmployeeAccessRole").val();
    let employeeDOB=$("#txtEmployeeDOB").val();
    let employeeDateOfJoin=$("#txtEmployeeDateOfJoin").val();
    let employeeAttachedBranch=$("#txtEmployeeAttachedBranch").val();
    let employeeAddressLine1=$("#txtEmployeeAddressLine1").val();
    let employeeAddressLine2=$("#txtEmployeeAddressLine2").val();
    let employeeAddressLine3=$("#txtEmployeeAddressLine3").val();
    let employeeAddressLine4=$("#txtEmployeeAddressLine4").val();
    let employeeAddressLine5=$("#txtEmployeeAddressLine5").val();
    let employeeContactNo=$("#txtEmployeeContactNo").val();
    let employeeEmail=$("#txtEmployeeEmail").val();
    let employeeCaseOfEmergency=$("#txtEmployeeCaseOfEmergency").val();
    let employeeEmergencyContact=$("#txtEmployeeEmergencyContact").val();

    var formData = new FormData();
    formData.append('employeeCode',employeeCode);
    formData.append('employeeName',employeeName);
    formData.append('gender',employeeGender);
    formData.append('status',employeeStatus);
    formData.append('designation',employeeDesignation);
    formData.append('accessRole',employeeAccessRole);
    formData.append('dob',employeeDOB);
    formData.append('dateOfJoin',employeeDateOfJoin);
    formData.append('attachedBranch',employeeAttachedBranch);
    formData.append('addressLine01',employeeAddressLine1);
    formData.append('addressLine02',employeeAddressLine2);
    formData.append('addressLine03',employeeAddressLine3);
    formData.append('addressLine04',employeeAddressLine4);
    formData.append('addressLine05',employeeAddressLine5);
    formData.append('contactNo',employeeContactNo);
    formData.append('email',employeeEmail);
    formData.append('informInCaseOfEmergency',employeeCaseOfEmergency);
    formData.append('emergencyContact',employeeEmergencyContact);
    formData.append('employeePicture',proPic);

    $.ajax({
        url: "http://localhost:8080/app/api/v1/employees",
        method: "POST",
        data: formData,
        processData: false,
        contentType: false,

        success: function (resp, textStatus, jqxhr) {
            console.log("Success", resp);
            if (jqxhr.status == 201) {
                alert("Added customer successfully");
            }
            getAllEmployee();
        },
        error: function (error) {
            console.log("Error", error);
        }
    });
});

$("#btnEmployeeUpdate").click(function (){
    let employeeCode=$("#txtEmployeeCode").val();
    let employeeName=$("#txtEmployeeName").val();
    let proPic = $("#inputFile").prop('files')[0];
    let employeeGender="MALE";
    let employeeMale =$("#employeeMale").val();
    let employeeFeMale =$("#employeeFemale").val();
    if (employeeMale.checked) {
        employeeGender=employeeGender.value;
    }
    else if (employeeFeMale.checked){
        employeeGender=employeeGender.value;
    }
    let employeeStatus=$("#txtEmployeeStatus").val();
    let employeeDesignation=$("#txtEmployeeDesignation").val();
    let employeeAccessRole=$("#txtEmployeeAccessRole").val();
    let employeeDOB=$("#txtEmployeeDOB").val();
    let employeeDateOfJoin=$("#txtEmployeeDateOfJoin").val();
    let employeeAttachedBranch=$("#txtEmployeeAttachedBranch").val();
    let employeeAddressLine1=$("#txtEmployeeAddressLine1").val();
    let employeeAddressLine2=$("#txtEmployeeAddressLine2").val();
    let employeeAddressLine3=$("#txtEmployeeAddressLine3").val();
    let employeeAddressLine4=$("#txtEmployeeAddressLine4").val();
    let employeeAddressLine5=$("#txtEmployeeAddressLine5").val();
    let employeeContactNo=$("#txtEmployeeContactNo").val();
    let employeeEmail=$("#txtEmployeeEmail").val();
    let employeeCaseOfEmergency=$("#txtEmployeeCaseOfEmergency").val();
    let employeeEmergencyContact=$("#txtEmployeeEmergencyContact").val();

    let employeeFormData = new FormData();
    employeeFormData.append('employeeCode',employeeCode);
    employeeFormData.append('employeeName',employeeName);
    employeeFormData.append('gender',employeeGender);
    employeeFormData.append('status',employeeStatus);
    employeeFormData.append('designation',employeeDesignation);
    employeeFormData.append('accessRole',employeeAccessRole);
    employeeFormData.append('dob',employeeDOB);
    employeeFormData.append('dateOfJoin',employeeDateOfJoin);
    employeeFormData.append('attachedBranch',employeeAttachedBranch);
    employeeFormData.append('addressLine01',employeeAddressLine1);
    employeeFormData.append('addressLine02',employeeAddressLine2);
    employeeFormData.append('addressLine03',employeeAddressLine3);
    employeeFormData.append('addressLine04',employeeAddressLine4);
    employeeFormData.append('addressLine05',employeeAddressLine5);
    employeeFormData.append('contactNo',employeeContactNo);
    employeeFormData.append('email',employeeEmail);
    employeeFormData.append('informInCaseOfEmergency',employeeCaseOfEmergency);
    employeeFormData.append('emergencyContact',employeeEmergencyContact);
    employeeFormData.append('employeePicture',proPic);

    $.ajax({
        url: "http://localhost:8080/app/api/v1/employees",
        method: "PATCH",
        data: employeeFormData,
        processData: false,
        contentType: false,

        success: function (resp, textStatus, jqxhr) {
            console.log("Success", resp);
            if (jqxhr.status == 201) {
                alert("Added customer successfully");
            }
            getAllCustomers();
        },
        error: function (error) {
            console.log("Error", error);
        }
    });
});

$("#btnEmployeeDelete").click(function (){
    let employeeCode=$("#txtEmployeeCode").val();
    $.ajax({
        url: "http://localhost:8080/app/api/v1/employees/" + employeeCode,
        method: "DELETE",
        success: function (resp, textStatus, jqxhr) {
            if (jqxhr.status == 201) {
                alert("Delete customer successfully");
            }
            getAllCustomers();
        },
        error: function (error) {

        }
    });
});

function getAllEmployee(){
    $("#tblEmployee").empty();
    $.ajax({
        url: "http://localhost:8080/app/api/v1/employees",
        method: "GET",
        dataType: "json",
        success: function (resp) {
            for (const employee of resp) {
                let row=`<tr>
                    <td>${employee.employeeCode}</td>
                    <td>${employee.employeeName}</td>
                    <td>${employee.gender}</td>
                    <td>${employee.status}</td>
                    <td>${employee.designation}</td>
                    <td>${employee.accessRole}</td>
                    <td>${employee.dob}</td>
                    <td>${employee.dateOfJoin}</td>
                    <td>${employee.attachedBranch}</td>
                    <td>${employee.addressLine01+","+employee.addressLine02+","+employee.addressLine03+","+employee.addressLine04+","+employee.addressLine05+"."}</td>
                    <td>${employee.contactNo}</td>
                    <td>${employee.email}</td>
                    <td>${employee.informInCaseOfEmergency}</td>
                    <td>${employee.emergencyContact}</td>
                </tr>`;
                let newItemPic=[employee.employeeCode,employee.employeePicture]
                employeePictures.push(newItemPic);
                $("#tblEmployee").append(row);
                bindEmployeeTrEvents();
            }
        }
    });
}
function bindEmployeeTrEvents() {
    $("#tblEmployee>tr").click(function () {
        let code = $(this).children().eq(0).text();
        let name = $(this).children().eq(1).text();
        let gender = $(this).children().eq(2).text();
        let status = $(this).children().eq(3).text();
        let designation = $(this).children().eq(4).text();
        let accessRole = $(this).children().eq(5).text();
        let DOB = $(this).children().eq(6).text();
        let dateOfJoin = $(this).children().eq(7).text();
        let attachedBranch = $(this).children().eq(8).text();
        let address = $(this).children().eq(9).text();
        let arr = address.split(",");
        let addressLine01 = arr[0];
        let addressLine02 = arr[1];
        let addressLine03 = arr[2];
        let addressLine04 = arr[3];
        let addressLine05 = arr[4];
        let contact = $(this).children().eq(10).text();
        let email = $(this).children().eq(11).text();
        let caseOfEmergency = $(this).children().eq(12).text();
        let emergencyContact = $(this).children().eq(13).text();

        $("#txtEmployeeCode").val(code)
        $("#txtEmployeeName").val(name)
        $("#txtEmployeeStatus").val(status)
        $("#txtEmployeeDesignation").val(designation)
        $("#txtEmployeeAccessRole").val(accessRole)
        $("#txtEmployeeDOB").val(DOB)
        $("#txtEmployeeDateOfJoin").val(dateOfJoin)
        $("#txtEmployeeAttachedBranch").val(attachedBranch)
        $("#txtAddressLine01").val(addressLine01)
        $("#txtAddressLine02").val(addressLine02)
        $("#txtAddressLine03").val(addressLine03)
        $("#txtAddressLine04").val(addressLine04)
        $("#txtAddressLine05").val(addressLine05)
        $("#txtEmployeeContactNo").val(contact)
        $("#txtEmployeeEmail").val(email)
        $("#txtEmployeeCaseOfEmergency").val(caseOfEmergency)
        $("#txtEmployeeEmergencyContact").val(emergencyContact)

        for (let i = 0; i < employeePictures.length; i++) {
            for (let j = 0; j < employeePictures[i].length; j++) {
                if(code===employeePictures[i][j][1]){
                    let getProfilePic=employeePictures[i][j][2];
                    $("#inputFile").val(getProfilePic);
                }
            }
        }
        inputFile.onchange = function (){
            profilePic.src=URL.createObjectURL(inputFile.files[0])
        }
    });
}