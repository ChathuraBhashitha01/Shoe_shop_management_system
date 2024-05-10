package lk.ijse.gdse.springboot.back_end.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Timestamp;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "sale")
public class Sale {

    @Id
    private String orderNo;
    private String itemCode;
    @ManyToOne
    @JoinColumn(name = "customerCode",referencedColumnName = "customerCode")
    private Customer customerCode;
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
