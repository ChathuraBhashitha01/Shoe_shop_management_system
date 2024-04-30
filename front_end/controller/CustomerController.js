$("#customer").css('display','none');
$("#supplier").css('display','none');


function clearAll(){
    $("#customer,#supplier").css('display','none');
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
    let gender="";
    let male =$("#genderMale").val();
    let feMale =$("#genderFemale").val();
    if (male.checked) {
        gender=male.value;
    }
    else if (feMale.checked){
        gender=feMale.value;
    }
    let joinDate=$("#txtJoinDate").val();
    let level="";
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

    let customerCode=$("#txtCustomerCode").val();

    $.ajax({
        url: "http://localhost:8080/app/api/v1/customers?customerCode=" + customerCode,
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

