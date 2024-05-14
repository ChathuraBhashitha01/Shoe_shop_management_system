
getAllInventoriesForSale()

function getAllInventoriesForSale(){
    $.ajax({
        url: "http://localhost:8080/app/api/v1/inventories",
        method: "GET",
        dataType: "json",
        success: function (resp) {
            for (const inventory of resp) {
                let divElement = document.createElement("div");
                divElement.setAttribute("class","itemDetailsDiv")
                $("#itemDetails").append(divElement);

                let imageElement = `<img alt="image" src="data:image/png;base64,${inventory.itemPicture}" style="width: 200px; height: 150px; padding: 0;">`
                $("body>main>section:nth-child(5)>section:first-child>div").append(imageElement);

                let titleElement=`<h3>${inventory.itemDesc}</h3>`;
                $("body>main>section:nth-child(5)>section:first-child>div").append(titleElement);

                let priceElement=`<h4>${"Rs"+inventory.unitPriceSale}</h4>`
                $("body>main>section:nth-child(5)>section:first-child>div").append(priceElement);

                let buttonElement=`<button>Buy</button>`;
                $("body>main>section:nth-child(5)>section:first-child>div").append(buttonElement);

                let status=`<h4 class="hoverAction">${inventory.status}</h4>`
                $("body>main>section:nth-child(5)>section:first-child>div").append(status);

                let size=`<h4 class="hoverAction">${inventory.status}</h4>`
                $("body>main>section:nth-child(5)>section:first-child>div").append(size);

                let stock=`<h4 class="hoverAction">In stock</h4>`
                $("body>main>section:nth-child(5)>section:first-child>div").append(stock);


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