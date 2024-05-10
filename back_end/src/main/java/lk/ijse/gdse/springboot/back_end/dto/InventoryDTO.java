package lk.ijse.gdse.springboot.back_end.dto;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
public class InventoryDTO {
    private String itemCode;
    private String itemDesc;
    private String itemPicture1;
    private String itemPicture2;
    private String itemPicture3;
    private String category;
    private String size;
    private String quantity;
    private String supplierCode;
    private String supplierName;
    private double unitPriceSale;
    private double unitPriceBuy;
    private double expectedProfit;
    private double profitMargin;
    private String status;


}
