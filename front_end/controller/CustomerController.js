/*$("#customer").css('display','none');
$("#supplier").css('display','none');
$("#employee").css('display','none');
$("#inventory").css('display','none');
$("#sale").css('display','none');*/


let customerCodes = [];
getAllCustomers();

function clearAll(){
    $("#customer,#supplier,#employee,#inventory,#sale,#admin,#log-in-page,#sign-up-page").css('display','none');
}

/*function clearAll(){
    $("#customer,#supplier,#employee,#inventory,#sale,#admin,#header").css('display','none');
}*/

function setCustomerView(viewOb){
    clearAll();
    viewOb.css('display','block');
}

$("#navCustomer").click(function (){
    setCustomerView($("#customer"));
    $("#navCustomer").css( "font-weight","bold");
    $("#navSupplier").css( "font-weight","normal");
    $("#navDashboard").css( "font-weight","normal");
    $("#navEmployee").css( "font-weight","normal");
    $("#navInventory").css( "font-weight","normal");
    $("#navSale").css( "font-weight","normal");
});

$("#btnSaveCustomer").click(function (){
    if (checkCustomerAll()) {
        if (checkCusEmptyInputFields()){
            saveCustomer();
        }
    } else {
        swal("Error", "Please check the input fields!", "error");
    }
});

$("#btnCustomerUpdate").click(function (){
    /*updateCustomer();
    clearCustomerInputField();*/

    if (checkCustomerAll()) {
        if (checkCusEmptyInputFields()){
            updateCustomer();
        }
    } else {
        swal("Error", "Please check the input fields!", "error");
    }
});

$("#btnCustomerDelete").click(function (){
    deleteCustomer();
    clearCustomerInputField();
});

function saveCustomer(){
    let cusCode=$("#txtCustomerCode").val();
    let cusName=$("#txtCustomerName").val();
    let gender=$("#cusGender").val();
    let joinDate=$("#txtJoinDate").val();
    let level=$("#customerLevel").val();
    let totalPoint=$("#txtTotalPoint").val();
    let dob=$("#txtDOB").val();
    let addressLine01=$("#txtAddressLine01").val();
    let addressLine02=$("#txtAddressLine02").val();
    let addressLine03=$("#txtAddressLine03").val();
    let addressLine04=$("#txtAddressLine04").val();
    let addressLine05=$("#txtAddressLine05").val();
    let contact=$("#txtContactNo").val();
    let email=$("#txtEmail").val();
    let purchaseDate=$("#txtPurchaseDate").val();

    let newCustomer = {
        customerCode:cusCode,
        customerName:cusName,
        gender:gender,
        joinDate:joinDate,
        level:level,
        totalPoint:totalPoint,
        dob:dob,
        addressLine01:addressLine01,
        addressLine02:addressLine02,
        addressLine03:addressLine03,
        addressLine04:addressLine04,
        addressLine05:addressLine05,
        contactNo:contact,
        email:email,
        recentPurchaseDate:purchaseDate
    };
    const jsonObject=JSON.stringify(newCustomer);
    $.ajax({
        url:"http://localhost:8080/app/api/v1/customers",
        method:"POST",
        data:jsonObject,
        contentType:("application/json"),
        headers: {
            "Authorization": "Bearer " + localStorage.getItem("token")
        },
        success: function (resp, textStatus, jqxhr){
            if (jqxhr.status == 201) {
                swal("Saved", "Customer saved successfully!", "success");
            }
            getAllCustomers();
        },
        error: function (error){
                swal("Error", "This customer is already exits!", "error");

        }
    });
}

function deleteCustomer(){
    let cusCode=$("#txtCustomerCode").val();
    $.ajax({
        url: "http://localhost:8080/app/api/v1/customers/"+ cusCode,
        method: "DELETE",
        headers: {
            "Authorization": "Bearer " + localStorage.getItem("token")
        },
        success: function (resp, textStatus, jqxhr) {
            if (jqxhr.status == 201) {
                swal("Deleted", "Customer deleted successfully!", "success");
            }
            getAllCustomers();
        },
        error: function (error) {
                swal("Error", "This customer does not exits!", "error");
        }
    });
}

function updateCustomer(){
    let cusCode=$("#txtCustomerCode").val();
    let cusName=$("#txtCustomerName").val();
    let gender=$("#cusGender").val();
    let joinDate=$("#txtJoinDate").val();
    let level=$("#customerLevel").val();
    let totalPoint=$("#txtTotalPoint").val();
    let dob=$("#txtDOB").val();
    let addressLine01=$("#txtAddressLine01").val();
    let addressLine02=$("#txtAddressLine02").val();
    let addressLine03=$("#txtAddressLine03").val();
    let addressLine04=$("#txtAddressLine04").val();
    let addressLine05=$("#txtAddressLine05").val();
    let contact=$("#txtContactNo").val();
    let email=$("#txtEmail").val();
    let purchaseDate=$("#txtPurchaseDate").val();

    let newCustomer = {
        customerCode:cusCode,
        customerName:cusName,
        gender:gender,
        joinDate:joinDate,
        level:level,
        totalPoint:totalPoint,
        dob:dob,
        addressLine01:addressLine01,
        addressLine02:addressLine02,
        addressLine03:addressLine03,
        addressLine04:addressLine04,
        addressLine05:addressLine05,
        contactNo:contact,
        email:email,
        recentPurchaseDate:purchaseDate
    };
    const jsonObject=JSON.stringify(newCustomer);
    $.ajax({
        url:"http://localhost:8080/app/api/v1/customers",
        method:"PATCH",
        data:jsonObject,
        contentType:("application/json"),
        headers: {
            "Authorization": "Bearer " + localStorage.getItem("token")
        },

        success: function (resp, textStatus, jqxhr){
            console.log("Success",resp);
            if (jqxhr.status == 201) {
                swal("Updated", "Customer updated successfully!", "success");
            }
            getAllCustomers();
        },
        error: function (error){
                swal("Error", "This customer does not exits!", "error");
        }
    });
}

function searchCustomer(id){
    return customerCodes.find(function (customer){
        return customer.id==id;
    });
};

function getAllCustomers(){
    $("#tblCustomer").empty();
    $.ajax({
        url: "http://localhost:8080/app/api/v1/customers",
        method: "GET",
        dataType: "json",
        headers: {
            "Authorization": "Bearer " + localStorage.getItem("token")
        },
        success: function (resp) {
            customerCodes=[];
            for (const customer of resp) {
                let row=`<tr>
                    <td style="background: #FFF0E5">${customer.customerCode}</td>
                    <td style="background: #FFF0E5">${customer.customerName}</td>
                    <td style="background: #FFF0E5">${customer.gender}</td>
                    <td style="background: #FFF0E5">${customer.joinDate}</td>
                    <td style="background: #FFF0E5">${customer.level}</td>
                    <td style="background: #FFF0E5">${customer.totalPoint}</td>
                    <td style="background: #FFF0E5">${customer.dob}</td>
                    <td style="background: #FFF0E5">${customer.addressLine01+","+customer.addressLine02+","+customer.addressLine03+","+customer.addressLine04+","+customer.addressLine05+"."}</td>
                    <td style="background: #FFF0E5">${customer.contactNo}</td>
                    <td style="background: #FFF0E5">${customer.email}</td>
                    <td style="background: #FFF0E5">${customer.recentPurchaseDate}</td> 
                </tr>`;
                $("#tblCustomer").append(row);
                bindCusTrEvents();

                const customerDetails = {
                    id: customer.customerCode,

                }
                customerCodes.push(customerDetails);
            }
        }
    });
}
function bindCusTrEvents() {
    $("#tblCustomer>tr").click(function () {
        let code = $(this).children().eq(0).text();
        let name = $(this).children().eq(1).text();
        let gender = $(this).children().eq(2).text();
        let joinDate = $(this).children().eq(3).text();
        let level = $(this).children().eq(4).text();
        let totalPoint = $(this).children().eq(5).text();
        let dob = $(this).children().eq(6).text();
        let address = $(this).children().eq(7).text();
        let arr = address.split(",");
        let addressLine01 = arr[0];
        let addressLine02 = arr[1];
        let addressLine03 = arr[2];
        let addressLine04 = arr[3];
        let addressLine05 = arr[4];
        let contact = $(this).children().eq(8).text();
        let email = $(this).children().eq(9).text();
        let purchaseDate = $(this).children().eq(10).text();

        $("#txtCustomerCode").val(code)
        $("#txtCustomerName").val(name)
        $("#txtJoinDate").val(joinDate)
        $("#txtTotalPoint").val(totalPoint)
        $("#txtDOB").val(dob)
        $("#txtAddressLine01").val(addressLine01)
        $("#txtAddressLine02").val(addressLine02)
        $("#txtAddressLine03").val(addressLine03)
        $("#txtAddressLine04").val(addressLine04)
        $("#txtAddressLine05").val(addressLine05)
        $("#txtContactNo").val(contact)
        $("#txtEmail").val(email)
        $("#txtPurchaseDate").val(purchaseDate)
    });
}
function checkCusEmptyInputFields() {
    if ($("#txtDOB").val()==="" || $("#txtJoinDate").val()===""){
        swal("Error", "Fill all empty the fields!", "error");
        return false;
    }
    return true
}