$("#customer").css('display','none');
$("#supplier").css('display','none');
$("#employee").css('display','none');
$("#inventory").css('display','none');

let paymentMethod;

function clearAll(){
    $("#customer,#supplier,#employee,#inventory,#sale").css('display','none');
}

function setView(viewOb){
    clearAll();
    viewOb.css('display','block');
}

$("#navSale").click(function (){
    setView($("#sale"))
});

getAllInventoriesForSale();
function getAllInventoriesForSale(){
    $.ajax({
        url: "http://localhost:8080/app/api/v1/inventories",
        method: "GET",
        dataType: "json",
        success: function (resp) {
            for (const inventory of resp) {

                let divElement=`<div class="divInItemDetails">
                                    <img alt="image" src="data:image/png;base64,${inventory.itemPicture}" style="width: 200px; height: 150px; padding: 0;">
                                    <label>${inventory.itemDesc}</label>
                                    <label>${inventory.unitPriceSale}</label>
                                    <button class="btnItemBuy">Buy</button>
                                    <label>${inventory.status}</label>
                                    <label>${inventory.status}</label>
                                    <label>In Stock</label>
                                    <label class="itemCode">${inventory.itemCode}</label>
                                </div>`

                $("#itemDetails").append(divElement);

                eventListenerBtnDetailForm();
                // $("#itemDetails>div>button").click(function (){
                //    getDetailsForAddToCartForm(inventory.itemCode)
                // });
                // $("body>main>section:nth-child(5)>section:first-child>div").addEventListener("mouseenter",function (){
                //     $("body>main>section:nth-child(5)>section:first-child>div>h4:nth-child(5)").style('display', 'inline-block');
                //     $("body>main>section:nth-child(5)>section:first-child>div>h4:nth-child(6)").style('display', 'inline-block');
                //     $("body>main>section:nth-child(5)>section:first-child>div>h4:nth-child(7)").style('display', 'inline-block');
                // })
                //
                // $("body>main>section:nth-child(5)>section:first-child>div").addEventListener("mouseleave",function (){
                //     $("body>main>section:nth-child(5)>section:first-child>div>h4:nth-child(5)").style('display', 'none');
                //     $("body>main>section:nth-child(5)>section:first-child>div>h4:nth-child(6)").style('display', 'none');
                //     $("body>main>section:nth-child(5)>section:first-child>div>h4:nth-child(7)").style('display', 'none');
                // })

            }
        }
    });
}

function eventListenerBtnDetailForm(){

    $("#itemDetails>div").click(function () {
        $("#itemSelectForm").css({
            'display':'inline-block'
        })

        let code = $(this).children().eq(7).text();
        let name = $(this).children().eq(1).text();
        let price = $(this).children().eq(2).text();
        let status = $(this).children().eq(4).text();

        $("#itemCodeForDetailForm").text(code);
        $("#itemNameForDetailForm").text(name);
        $("#itemPriceForDetailForm").text(price);
        $("#itemStatusForDetailForm").text(status);

        getPictureForAddToCartForm(code);
    });
}

function getPictureForAddToCartForm(code){
    $.ajax({
        url: "http://localhost:8080/app/api/v1/inventories/"+code,
        method: "GET",
        dataType: "json",
        success: function (resp) {

            let base64Image =resp.itemPicture;
            console.log(base64Image)

            let binaryData = atob(base64Image);
            console.log(binaryData)

            let arrayBuffer = new ArrayBuffer(binaryData.length);
            let uint8Array = new Uint8Array(arrayBuffer);
            for (let i = 0; i < binaryData.length; i++) {
                uint8Array[i] = binaryData.charCodeAt(i);
            }

            let blob = new Blob([uint8Array], { type: 'image/jpeg, image/png,image/jpg' }); // Change the MIME type accordingly

            let itemPic=document.getElementById("itemPicForDetailForm");

            itemPic.src = URL.createObjectURL(blob);

           let size5=resp.quantitySize5;
           let size6=resp.quantitySize6;
           let size7=resp.quantitySize7;
           let size8=resp.quantitySize8;
           let size9=resp.quantitySize9;
           let size10=resp.quantitySize10;
           let size11=resp.quantitySize11;

            $('#btnSize5').val(size5);
            $('#btnSize6').val(size6);
            $('#btnSize7').val(size7);
            $('#btnSize8').val(size8);
            $('#btnSize9').val(size9);
            $('#btnSize10').val(size10);
            $('#btnSize11').val(size11);

            if(!resp.quantitySize5>0){
               $('#btnSize5').attr('disabled', true);
           }
            else if(!resp.quantitySize6>0){
                $('#btnSize6').attr('disabled', true);
            }
           else if(!resp.quantitySize7>0){
               $('#btnSize7').attr('disabled', true);
           }
           else if(!resp.quantitySize8>0){
               $('#btnSize8').attr('disabled', true);
           }
           else if(!resp.quantitySize9>0){
               $('#btnSize9').attr('disabled', true);
           }
           else if(!resp.quantitySize10>0){
               $('#btnSize10').attr('disabled', true);
           }
           else if(!resp.quantitySize11>0){
               $('#btnSize11').attr('disabled', true);
           }
        },
    });
}

$('#btnSize5').click(function (){
    let size=$('#btnSize5').val();
    $("#lblSizeStock").text("In Stock");
    $("#lblSizeQuantity").text(size);
    $("#lblSizeOfItem").text(5);
});

$('#btnSize6').click(function (){
    let size=$('#btnSize6').val();
    $("#lblSizeStock").text("In Stock");
    $("#lblSizeQuantity").text(size);
    $("#lblSizeOfItem").text(6);
});

$('#btnSize7').click(function (){
    let size=$('#btnSize7').val();
    $("#lblSizeStock").text("In Stock");
    $("#lblSizeQuantity").text(size);
    $("#lblSizeOfItem").text(7);
});

$('#btnSize8').click(function (){
    let size=$('#btnSize8').val();
    $("#lblSizeStock").text("In Stock");
    $("#lblSizeQuantity").text(size);
    $("#lblSizeOfItem").text(8);
});

$('#btnSize9').click(function (){
    let size=$('#btnSize9').val();
    $("#lblSizeStock").text("In Stock");
    $("#lblSizeQuantity").text(size);
    $("#lblSizeOfItem").text(9);
});

$('#btnSize10').click(function (){
    let size=$('#btnSize10').val();
    $("#lblSizeStock").text("In Stock");
    $("#lblSizeQuantity").text(size);
    $("#lblSizeOfItem").text(10);
});

$('#btnSize11').click(function (){
    let size=$('#btnSize11').val();
    $("#lblSizeStock").text("In Stock");
    $("#lblSizeQuantity").text(size);
    $("#lblSizeOfItem").text(11);
});

$('#btnBackToSale').click(function () {
    $("#itemSelectForm").css({
        'display':'none'
    })
});

$('#btnAddToCart').click(function () {
    let code=$("#itemCodeForDetailForm").text();
    let name=$("#itemNameForDetailForm").text();
    let size=$("#lblSizeOfItem").text();
    let price= $("#itemPriceForDetailForm").text();
    let qty= $("#txtGetQuantity").val();
    let total=parseFloat(price) * parseFloat(qty);
    let allTotal = 0;
    let exitItem=true;

    console.log(price)
    console.log(qty)
    console.log(total)

    $('#tblPurchase>tr').each(function () {
        let alreadyAddedId=$(this).children().eq(0).text();
        if (code==alreadyAddedId) {
            $(this).children().eq(0).text(code);
            $(this).children().eq(1).text(name);
            $(this).children().eq(2).text(size);
            $(this).children().eq(3).text(price);
            $(this).children().eq(4).text(qty);
            $(this).children().eq(5).text(qty * price);
            exitItem=false;
        }
    });

    if(exitItem){
        let row=`<tr>
            <td>${code}</td>
            <td>${name}</td>
            <td>${size}</td>
            <td>${price}</td>
            <td>${qty}</td>
            <td>${total}</td>
            </tr>`;

        $("#tblPurchase").append(row);
    }

    $('#tblPurchase>tr').each(function () {
        let total = $(this).children().eq(5).text();
        allTotal += parseFloat(total);
    });

    $("#txtTotal").text(allTotal);
    $("#txtSubtotal").text(allTotal);

    $("#itemSelectForm").css({
        'display':'none'
    })
});

$("#btnToPurchaseForm").click(function (){
    $("#purchaseForm").css({
        'display':'inline-block'
    });
});

$("#btnBackFromPurchase").click(function (){
    $("#purchaseForm").css({
        'display':'none'
    });
});

$("#btnCashPayment").click(function (){
    $("#cardPaymentForm").css({
        'display':'none'
    });
    paymentMethod="cash"
});

$("#btnCardPayment").click(function (){
    $("#cardPaymentForm").css({
        'display':'inline-block'
    });
    paymentMethod="card"
});

$("#txtCash").on("keydown keyup input", function () {
    setBalance();
});

$("#txtDiscount").on("keydown keyup input", function (e){
    let total = $("#txtTotal").text();
    let cash=$("#txtCash").text();
    if(total>0){
        let discount = $(this).val();
        let discountMoney = (total/100*discount);
        total -= discountMoney;
        let balance=cash-total;
        $("#txtSubtotal").text(total);
        setBalance();
    }

});

function setBalance() {
    let subtotal= $("#txtSubtotal").text();
    let cashText = $("#txtCash").val();
    if (!isNaN(cashText)) {
        let balance = cashText - subtotal;
        $("#txtBalance").val(balance);
    } else {
        $("#txtBalance").val("0");
    }
}

setCurrentDate()
function setCurrentDate(){
    let dateString = new Date(Date.now()).toLocaleString();
    let today = dateString.slice(0,3).match(/[0-9]/i) ? dateString.split(' ')[0].split(',')[0] : dateString.split(' ')[1] + " " + dateString.split(' ')[2] + " " + dateString.split(' ')[3];
    $("#lblOrderDate").text(today);
}

function purchaseOrder(){
    let customerCode = $("#txtCustomerCodeForPurchase").val();
    let employeeCode = $("#txtEmployeeCodeForPurchase").val();
    let orderId = $("#lblOrderId").text();
    let totalOfAllItems = $("#txtSubtotal").text();
    let orderDate = $("#lblOrderDate").text();
    let customerName;
    let employeeName;
    let addedPoints=0;

    let itemDetails=[];

    $.ajax({
        url: "http://localhost:8080/app/api/v1/employees/"+employeeCode,
        method: "GET",
        dataType: "json",
        success: function (resp) {
            employeeName=resp.employeeName;
        },
    });

    $.ajax({
        url: "http://localhost:8080/app/api/v1/customers/"+customerCode,
        method: "GET",
        dataType: "json",
        success: function (resp) {
            customerName=resp.customerName;
        },
    });

    $('#tblPurchase>tr').each(function () {
        let code=$(this).children().eq(0).text();
        let name=$(this).children().eq(1).text();
        let size=$(this).children().eq(2).text();
        let price=$(this).children().eq(3).text();
        let qty=$(this).children().eq(4).text();
        let total=$(this).children().eq(5).text();

        let details={
            orderNo:orderId,
            itemCode:code,
            itemDesc:name,
            size:size,
            quantity:qty,
            unitPrice:total
        }

        itemDetails.push(details)

    });

    if(totalOfAllItems>=800){
        addedPoints=1;
    }

    let newPurchase = {
        orderNo:orderId,
        customerCode:customerCode,
        customerName:customerName,
        totalPrice:totalOfAllItems,
        purchaseDate:orderDate,
        paymentMethod:paymentMethod,
        addedPoints:addedPoints,
        cashierName:employeeName,
        employeeCode:employeeCode,
        saleDetails:itemDetails

    };
    const jsonObject=JSON.stringify(newPurchase);

    $.ajax({
        url:"http://localhost:8080/app/api/v1/sales",
        method:"POST",
        data:jsonObject,
        contentType:("application/json"),

        success: function (resp, textStatus, jqxhr){
            console.log("Success",resp);
            if (jqxhr.status == 201) {
                alert("place order successfully");
            }
        },
        error: function (error){
            console.log("Error",error);
        }
    });
}
