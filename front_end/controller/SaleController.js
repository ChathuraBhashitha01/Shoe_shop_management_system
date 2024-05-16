$("#customer").css('display','none');
$("#supplier").css('display','none');
$("#employee").css('display','none');
$("#inventory").css('display','none');
getAllEmployee()

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
getAllInventoriesForSale()

function getAllInventoriesForSale(){
    $.ajax({
        url: "http://localhost:8080/app/api/v1/inventories",
        method: "GET",
        dataType: "json",
        success: function (resp) {
            for (const inventory of resp) {

                let divElement=`<div>
                                    <img alt="image" src="data:image/png;base64,${inventory.itemPicture}" style="width: 200px; height: 150px; padding: 0;">
                                    <h3>${inventory.itemDesc}</h3>
                                    <h4>${"Rs"+inventory.unitPriceSale}</h4>
                                    <button>Buy</button>
                                    <h4>${inventory.status}</h4>
                                    <h4>${inventory.status}</h4>
                                    <h4>In Stock</h4>
                                    <h4>${inventory.itemCode}</h4>
                                </div>`

                $("#itemDetails").append(divElement);

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

function getDetailsFor(){
    $.ajax({
        url: "http://localhost:8080/app/api/v1/inventories/"+code,
        method: "GET",
        dataType: "json",
        success: function (resp) {


        },
    });
}