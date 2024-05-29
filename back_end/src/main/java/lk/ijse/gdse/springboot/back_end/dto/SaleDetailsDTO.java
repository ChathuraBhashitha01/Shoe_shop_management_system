package lk.ijse.gdse.springboot.back_end.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class SaleDetailsDTO {
    private int no;
    private String itemDesc;
    private int size;
    private int quantity;
    private double unitPrice;
    private String orderNo;
    private String itemCode;


    public SaleDetailsDTO(String itemCode,String itemDesc, int size, int quantity, double unitPrice, String orderNo) {
        this.itemDesc = itemDesc;
        this.size = size;
        this.quantity = quantity;
        this.unitPrice = unitPrice;
        this.orderNo = orderNo;
        this.itemCode = itemCode;
    }
}
