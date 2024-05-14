
getAllInventoriesForSale()

function getAllInventoriesForSale(){
    $.ajax({
        url: "http://localhost:8080/app/api/v1/inventories",
        method: "GET",
        dataType: "json",
        success: function (resp) {
            for (const inventory of resp) {
                let divElement = document.createElement("div");
                $("#itemDetails").append(divElement);

                let imageElement = `<img alt="image" src="data:image/png;base64,${inventory.itemPicture}" style="width: 200px; height: 150px; padding: 0;">`
                $("body>main>section:nth-child(5)>section:first-child>div").append(imageElement);

                let titleElement=`<h3>${inventory.itemDesc}</h3>`;
                $("body>main>section:nth-child(5)>section:first-child>div").append(titleElement);

                let priceElement=`<h4>${"Rs"+inventory.unitPriceSale}</h4>`
                $("body>main>section:nth-child(5)>section:first-child>div").append(priceElement);

                let buttonElement=`<button>Buy</button>`;
                $("body>main>section:nth-child(5)>section:first-child>div").append(buttonElement);
            }
        }
    });
}