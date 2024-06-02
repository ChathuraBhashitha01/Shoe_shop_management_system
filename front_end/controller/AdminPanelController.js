/*$("#admin").css('display','block');

function clearAll(){
    $("#customer,#supplier,#employee,#inventory,#sale").css('display','none');
}*/

function setDashboardView(viewOb){
    clearAll();
    viewOb.css('display','block');
}

$("#navDashboard").click(function (){
    setDashboardView($("#admin"))
    checkAndSendBirthdayWishes();
    $("#navCustomer").css( "font-weight","normal");
    $("#navSupplier").css( "font-weight","normal");
    $("#navDashboard").css( "font-weight","bold");
    $("#navEmployee").css( "font-weight","normal");
    $("#navInventory").css( "font-weight","normal");
    $("#navSale").css( "font-weight","normal");
});
setMostSellItem();

function setMostSellItem(){
    let date = new Date();
    let formattedDate = date.toISOString().split('T')[0];

    $.ajax({
        url: "http://localhost:8080/app/api/v1/adminPanel/summeryOfToday/"+formattedDate,
        method: "GET",
        dataType: "json",
        headers: {
            "Authorization": "Bearer " + localStorage.getItem("token")
        },
        success: function (resp) {
            console.log(resp);
            // $("#lbTotalOfItem").text(`Rs.${resp.totalPrice.toFixed(2)}`);
        },
    });
}
loadDataToLocalDate();
function loadDataToLocalDate() {
    let date = new Date();
    let formattedDate = date.toISOString().split('T')[0];
    $.ajax({
        url: "http://localhost:8080/app/api/v1/adminPanel/summeryForSelectedDate/" + formattedDate,
        method: "GET",
        headers: {
            "Authorization": "Bearer " + localStorage.getItem("token") // Assuming token is stored in localStorage
        },
        success: function (data) {
            console.log(data)
            if (data.totalPrice === null){
                data.totalPrice=0.00;
                console.log(data.totalPrice)
            }
            // if (data.mostSoldItemName === null){
            //     swal("Error", "Cannot find sales for this date!", "error");
            //     return
            // }
            console.log(data)
            let profit = data.totalPrice*20/100
            console.log(profit)

            $("#lblSalesOfToday").text(`Rs.${data.totalPrice.toFixed(2)}`);
            $("#lblProfitOfSellingItem").text(`Rs.${profit.toFixed(2)}`);
            $("#lblMostSellingItem").text(data.mostSoldItemName);
            $("#lblMostSellItemName").text("Most Sell Item Now : "+data.mostSoldItemName);
           /* $('#imgMostSellItem').attr('src', data.mostSoldItemPicture);*/
            $('#lblSoldItem').text(data.mostSoldItemQty);

            let base64Image =data.mostSoldItemPicture;
            console.log(base64Image)

            let binaryData = atob(base64Image);
            console.log(binaryData)

            let arrayBuffer = new ArrayBuffer(binaryData.length);
            let uint8Array = new Uint8Array(arrayBuffer);
            for (let i = 0; i < binaryData.length; i++) {
                uint8Array[i] = binaryData.charCodeAt(i);
            }

            let blob = new Blob([uint8Array], { type: 'image/jpeg, image/png,image/jpg' }); // Change the MIME type accordingly

            let itemPic=document.getElementById("imgMostSellItem");

            itemPic.src = URL.createObjectURL(blob);
        },
        error: function (xhr, textStatus, error) {
            console.error("Error fetching selected date's orders: ", error);
        }
    });
}

function checkAndSendBirthdayWishes() {
    const today = new Date().toISOString().split('T')[0];
    const lastSentDate = localStorage.getItem('lastBirthdayWishesSentDate');

    if (lastSentDate !== today) {
        sendEmail();
    }
}

function sendEmail(){
    $.ajax({
        url: "http://localhost:8080/app/api/v1/customers/sendEmail",
        method: "GET",
        headers :{
               "Authorization": "Bearer " + localStorage.getItem("token") // Assuming token is stored in localStorage
        } ,
        success: function (response) {
            console.log(response);
            localStorage.setItem('lastBirthdayWishesSentDate', new Date().toISOString().split('T')[0]);
            swal("Send Birthday Emails");
        },
        error: function (xhr, status, err) {
            console.log(err)
            console.log(xhr.status);
        }
    })
}