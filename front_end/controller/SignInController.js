initiateUI();

function clearAll(){
    $("#customer,#supplier,#employee,#inventory,#sale,#admin,#header,#log-in-page,#sign-up-page").css('display','none');
}
function initiateUI(){
    clearAll();
    $("#log-in-page").css('display','block');
}
$("#btnSignUp").click(function (){
    $("#log-in-page").css('display','none');
    $("#sign-up-page").css('display','block');
})

let txtLogEmail=$("#txtUser");
let txtLogPassword=$("#txtPassword");

$("#btnSignIn").click(function () {
    if (checkEmptyLogInInputs()){
        let email=txtLogEmail.val();
        let password=txtLogPassword.val();

        let logInObj={
            email:email,
            password:password
        }

        const jsonObj=JSON.stringify(logInObj);
        $.ajax({
            url: "http://localhost:8080/app/api/v1/auth/signIn",
            method: "POST",
            data: jsonObj,
            contentType: "application/json",
            success:function (resp, textStatus, jqxhr) {

                localStorage.setItem("token", resp.token);
                localStorage.setItem("access", resp.role);
                localStorage.setItem("userID", resp.name);
                switchToAnotherPageFromLogin(resp);
                clearLogInInputFields();
                setUserForNavBar(resp);

            },
            error: function (xhr, textStatus, error) {
                console.log("logIn error: ", error);
                console.log("logIn error: ", xhr);
                alert("Error :Incorrect Password! error");

            }
        });
    }
});

function switchToAnotherPageFromLogin(resp) {
    let logEmployeeEmail =txtLogEmail.val();
    localStorage.setItem("empEmail", logEmployeeEmail);
  /*  $("#shoeShop").css('display','block');
    $("#log-in-page").css('display','none');*/
    if(resp.role==="ADMIN"){
        $("#sale,#header").css('display','block');
        // $("#navDashboard").css('display','none');
        $("#log-in-page").css('display','none');
    }

    if(resp.role==="USER"){
        $("#sale,#header").css('display','block');
        $("#navDashboard").css('display','none');
        $("#navUser").css('display','none');
        $("#log-in-page").css('display','none');
        $("#btnCustomerDelete").css('display','none');
        $("#btnCustomerUpdate").css('display','none');
        $("#btnSupplierDelete").css('display','none');
        $("#btnSupplirUpdate").css('display','none');
        $("#btnInventoryUpdate").css('display','none');
        $("#btnInventoryDelete").css('display','none');
        $("#btnEmployeeUpdate").css('display','none');
        $("#btnEmployeeDelete").css('display','none');
    }
}

function checkEmptyLogInInputs() {
    if (txtLogEmail.val()==="" || txtLogPassword.val()===""){
        if (txtLogEmail.val()==="" && txtLogPassword.val()===""){
            txtLogEmail.css("border", "2px solid red");
            txtLogPassword.css("border", "2px solid red");
        } else if(txtLogEmail.val()===""){
            txtLogEmail.css("border", "2px solid red");
        } else if (txtLogPassword.val()===""){
            txtLogPassword.css("border", "2px solid red");
        }
        return false;
    }
    return true;
}
function clearLogInInputFields() {
    txtLogEmail.val("");
    txtLogPassword.val("");
}
function setUserForNavBar(user){
    $.ajax({
        url: "http://localhost:8080/app/api/v1/employees/"+user.name,
        method: "GET",
        dataType: "json",
        headers: {
            "Authorization": "Bearer " +user.token
        },
        success: function (resp) {

            let base64Image =resp.employeePicture;
            console.log(base64Image)

            // Decode Base64 string to binary
            let binaryData = atob(base64Image);
            console.log(binaryData)

            // Convert binary data to an array buffer
            let arrayBuffer = new ArrayBuffer(binaryData.length);
            let uint8Array = new Uint8Array(arrayBuffer);
            for (let i = 0; i < binaryData.length; i++) {
                uint8Array[i] = binaryData.charCodeAt(i);
            }

            // Create a Blob from the array buffer
            let blob = new Blob([uint8Array], { type: 'image/jpeg, image/png,image/jpg' }); // Change the MIME type accordingly
            let profilePicForNavBar=document.getElementById("profilePictureForNavBar")
            profilePicForNavBar.src = URL.createObjectURL(blob);

            $("#lblUserName").text(resp.employeeName);
            $("#lblUserRole").text(user.role);
            $("#lblUserID").text(user.name);
        },
    });
}