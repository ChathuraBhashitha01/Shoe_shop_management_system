package lk.ijse.gdse.springboot.back_end.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Date;
import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "sale")
public class Sale {

    @Id
    private String orderNo;
    @ManyToOne
    @JoinColumn(name = "customer",referencedColumnName = "customerCode")
    private Customer customer;
    private String customerName;
    private double totalPrice;
    private Timestamp PurchaseDate;
    private String PaymentMethod;
    private int addedPoints;
    private String cashierName;
    @ManyToOne
    @JoinColumn(name = "employee",referencedColumnName = "employeeCode")
    private Employee employee;

    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY, mappedBy =  "orderNo")
    private List<SaleDetails> saleDetails = new ArrayList<>();
}
