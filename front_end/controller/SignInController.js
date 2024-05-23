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

let txtLogEmail=$("#txtLogInEmail");
let txtLogPassword=$("#txtLogInPassword");

$("#btn-log-in").click(function () {
    if (checkEmptyLogInInputs()){
        let email=txtLogEmail.val();
        let password=txtLogPassword.val();

        let logInObj={
            email:email,
            password:password
        }

        const jsonObj=JSON.stringify(logInObj);
        $.ajax({
            url: "http://localhost:8080/api/v1/auth/signIn",
            method: "POST",
            data: jsonObj,
            contentType: "application/json",
            success:function (resp, textStatus, jqxhr) {

                localStorage.setItem("token", resp.token)
                switchToAnotherPageFromLogin(resp);
                clearLogInInputFields();

            },
            error: function (xhr, textStatus, error) {
                console.log("logIn error: ", error);
                console.log("logIn error: ", xhr);
                if (xhr.status===401){
                    swal("Error", "Incorrect Password!", "error");
                }
                if (xhr.status===404){
                    swal("Error", "User email is not found", "error");
                }
            }
        });
    }
});

function switchToAnotherPageFromLogin(resp) {
    let logEmployeeEmail =txtLogEmail.val();
    localStorage.setItem("empEmail", logEmployeeEmail);

    window.location.href = 'index.html';
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