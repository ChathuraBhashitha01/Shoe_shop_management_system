$("#customer").css('display','none');
$("#supplier").css('display','none');
$("#employee").css('display','none');
$("#inventory").css('display','none');
getAllCustomers();


function clearAll(){
    $("#customer,#supplier,#employee,#inventory").css('display','none');
}

function setView(viewOb){
    clearAll();
    viewOb.css('display','block');
}

$("#navCustomer").click(function (){
    setView($("#customer"))
});

$("#btnSaveCustomer").click(function (){
    let cusCode=$("#txtCustomerCode").val();
    let cusName=$("#txtCustomerName").val();
    let gender;
    let male =$("#genderMale").val();
    let feMale =$("#genderFemale").val();
    if (male.checked) {
        gender=male.value;
    }
    else if (feMale.checked){
        gender=feMale.value;
    }
    let joinDate=$("#txtJoinDate").val();
    let level;
    let gold =$("#levelGold").val();
    let silver =$("#levelSilver").val();
    let bronze =$("#levelBronze").val();
    let levelNew =$("#levelNew").val();
    if (gold.checked) {
        level=gold.value;
    }
    else if (silver.checked){
        level=silver.value;
    }
    else if (bronze.checked){
        level=bronze.value;
    }
    else if (levelNew.checked){
        level=levelNew.value;
    }
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


$("#btnCustomerDelete").click(function (){
    let cusCode=$("#txtCustomerCode").val();
    $.ajax({
        url: "http://localhost:8080/app/api/v1/customers/"+ cusCode,
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

$("#btnCustomerUpdate").click(function (){
    let cusCode=$("#txtCustomerCode").val();
    let cusName=$("#txtCustomerName").val();
    let gender;
    let male =$("#genderMale").val();
    let feMale =$("#genderFemale").val();
    if (male.checked) {
        gender=male.value;
    }
    else if (feMale.checked){
        gender=feMale.value;
    }
    let joinDate=$("#txtJoinDate").val();
    let level;
    let gold =$("#levelGold").val();
    let silver =$("#levelSilver").val();
    let bronze =$("#levelBronze").val();
    let levelNew =$("#levelNew").val();
    if (gold.checked) {
        level=gold.value;
    }
    else if (silver.checked){
        level=silver.value;
    }
    else if (bronze.checked){
        level=bronze.value;
    }
    else if (levelNew.checked){
        level=levelNew.value;
    }
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