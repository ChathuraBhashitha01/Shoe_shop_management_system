package lk.ijse.gdse.springboot.back_end.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Date;
import java.sql.Timestamp;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class SaleDTO {
    private String orderNo;
    private String customerCode;
    private String customerName;
    private double totalPrice;
    private Date purchaseDate;
    private String paymentMethod;
    private double addedPoints;
    private String cashierName;
    private String employeeCode;
    private List<SaleDetailsDTO> saleDetails;

    public SaleDTO(String orderNo, String employeeCode, String customerName, double totalPrice, Date purchaseDate, String paymentMethod, double addedPoints, String cashierName, String employeeCode1) {

    }
}
