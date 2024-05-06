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

$("#navEmployee").click(function (){
    setView($("#employee"))
});

let profilePic=document.getElementById("profilePic")
let inputFile=document.getElementById("inputFile")

inputFile.onchange = function (){
    profilePic.src=URL.createObjectURL(inputFile.files[0])
}

$("#btnEmployeeSave").click(function (){
    let employeeCode=$("#txtEmpolyeeCode").val();
    let employeeName=$("#txtEmpolyeeName").val();
    let employeePicture=$("#inputFile").val();
    let employeeGender;
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

    let newEmployee={
        employeeCode:employeeCode,
        employeeName:employeeName,
        employeePicture:employeePicture,
        gender:employeeGender,
        status:employeeStatus,
        designation:employeeDesignation,
        accessRole:employeeAccessRole,
        dob:employeeDOB,
        dateOfJoin:employeeDateOfJoin,
        attachedBranch:employeeAttachedBranch,
        addressLine01:employeeAddressLine1,
        addressLine02:employeeAddressLine2,
        addressLine03:employeeAddressLine3,
        addressLine04:employeeAddressLine4,
        addressLine05:employeeAddressLine5,
        contactNo:employeeContactNo,
        email:employeeEmail,
        informInCaseOfEmergency:employeeCaseOfEmergency,
        emergencyContact:employeeEmergencyContact
    }
    const jsonObject=JSON.stringify(newEmployee);
    $.ajax({
        url:"http://localhost:8080/app/api/v1/employees",
        method:"POST",
        data:jsonObject,
        contentType:("application/json"),

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

$("#btnEmployeeUpdate").click(function (){
    let employeeCode=$("#txtEmpolyeeCode").val();
    let employeeName=$("#txtEmpolyeeName").val();
    let employeePicture=$("#inputFile").val();
    let employeeGender;
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

    let newEmployee={
        employeeCode:employeeCode,
        employeeName:employeeName,
        employeePicture:employeePicture,
        gender:employeeGender,
        status:employeeStatus,
        designation:employeeDesignation,
        accessRole:employeeAccessRole,
        dob:employeeDOB,
        dateOfJoin:employeeDateOfJoin,
        attachedBranch:employeeAttachedBranch,
        addressLine01:employeeAddressLine1,
        addressLine02:employeeAddressLine2,
        addressLine03:employeeAddressLine3,
        addressLine04:employeeAddressLine4,
        addressLine05:employeeAddressLine5,
        contactNo:employeeContactNo,
        email:employeeEmail,
        informInCaseOfEmergency:employeeCaseOfEmergency,
        emergencyContact:employeeEmergencyContact
    }
    const jsonObject=JSON.stringify(newEmployee);

}); $.ajax({
    url:"http://localhost:8080/app/api/v1/employees",
    method:"PATCH",
    data:jsonObject,
    contentType:("application/json"),

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

$("#btnEmployeeDelete").click(function (){
    let employeeCode=$("#txtEmpolyeeCode").val();
    $.ajax({
        url: "http://localhost:8080/app/api/v1/customers?employeeCode=" + employeeCode,
        method: "DELETE",
        success: function (resp, textStatus, jqxhr) {
            if (jqxhr.status == 201) {
                alert("Delete customer successfully");
            }
        },
        error: function (error) {

        }
    });
});

function getAllCustomers(){
    $("#tblCustomer").empty();
    $.ajax({
        url: "http://localhost:8080/app/api/v1/customers",
        method: "GET",
        dataType: "json",
        success: function (resp) {
            for (const customer of resp) {
                let row=`<tr>
                    <td>${customer.customerCode}</td>
                    <td>${customer.customerName}</td>
                    <td>${customer.gender}</td>
                    <td>${customer.joinDate}</td>
                    <td>${customer.level}</td>
                    <td>${customer.totalPoint}</td>
                    <td>${customer.dob}</td>
                    <td>${customer.addressLine01+","+customer.addressLine02+","+customer.addressLine03+","+customer.addressLine04+","+customer.addressLine05+"."}</td>
                    <td>${customer.contactNo}</td>
                    <td>${customer.email}</td>
                    <td>${customer.recentPurchaseDate}</td>
                </tr>`;
                $("#tblCustomer").append(row);
                bindCusTrEvents();
            }
        }
    });
}
function bindCusTrEvents() {
    $("#tblCustomer>tr").click(function () {
        let code = $(this).children().eq(0).text();
        let name = $(this).children().eq(1).text();
        let picture = $(this).children().eq(2).text();
        let gender = $(this).children().eq(3).text();
        let status = $(this).children().eq(4).text();
        let designation = $(this).children().eq(5).text();
        let accessRole = $(this).children().eq(6).text();
        let DOB = $(this).children().eq(7).text();
        let dateOfJoin = $(this).children().eq(8).text();
        let attachedBranch = $(this).children().eq(9).text();
        let address = $(this).children().eq(10).text();
        let arr = address.split(",");
        let addressLine01 = arr[0];
        let addressLine02 = arr[1];
        let addressLine03 = arr[2];
        let addressLine04 = arr[3];
        let addressLine05 = arr[4];
        let contact = $(this).children().eq(11).text();
        let email = $(this).children().eq(12).text();
        let caseOfEmergency = $(this).children().eq(13).text();
        let emergencyContact = $(this).children().eq(14).text();

        $("#txtEmployeeCode").val(code)
        $("#txtEmployeeName").val(name)
        $("#inputFile").val(picture)
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
    });
}