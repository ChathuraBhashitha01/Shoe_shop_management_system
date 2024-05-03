package lk.ijse.gdse.springboot.back_end.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Timestamp;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class SaleDTO {
    private String orderNo;
    private String itemCode;
    private String customerName;
    private String itemDesc;
    private int size;
    private double unitPrice;
    private int itemQty;
    private double totalPrice;
    private Timestamp PurchaseDate;
    private String PaymentMethod;
    private double addedPoints;
    private String cashierName;
}
