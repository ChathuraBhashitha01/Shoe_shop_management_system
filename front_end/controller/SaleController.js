$("#customer").css('display','none');
$("#supplier").css('display','none');
$("#employee").css('display','none');
$("#inventory").css('display','none');

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
                                    <label>${"Rs"+inventory.unitPriceSale}</label>
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
});

$('#btnSize6').click(function (){
    let size=$('#btnSize6').val();
    $("#lblSizeStock").text("In Stock");
    $("#lblSizeQuantity").text(size);
});

$('#btnSize7').click(function (){
    let size=$('#btnSize7').val();
    $("#lblSizeStock").text("In Stock");
    $("#lblSizeQuantity").text(size);
});

$('#btnSize8').click(function (){
    let size=$('#btnSize8').val();
    $("#lblSizeStock").text("In Stock");
    $("#lblSizeQuantity").text(size);
});

$('#btnSize9').click(function (){
    let size=$('#btnSize9').val();
    $("#lblSizeStock").text("In Stock");
    $("#lblSizeQuantity").text(size);
});

$('#btnSize10').click(function (){
    let size=$('#btnSize10').val();
    $("#lblSizeStock").text("In Stock");
    $("#lblSizeQuantity").text(size);
});

$('#btnSize11').click(function (){
    let size=$('#btnSize11').val();
    $("#lblSizeStock").text("In Stock");
    $("#lblSizeQuantity").text(size);
});

$('#btnBackToSale').click(function () {
    $("#itemSelectForm").css({
        'display':'none'
    })
});

$('#btnAddToCart').click(function () {

});