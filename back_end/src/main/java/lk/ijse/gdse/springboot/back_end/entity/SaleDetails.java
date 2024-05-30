package lk.ijse.gdse.springboot.back_end.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "sale_details")
public class SaleDetails {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int no;
    private String itemDesc;
    private int size;
    private int quantity;
    private double unitPrice;

    @ManyToOne()
    @JoinColumn(name = "orderNo",referencedColumnName = "orderNo",
            insertable = true,
            updatable = true)
    private Sale order;

    @ManyToOne
    @JoinColumn(name = "itemCode",referencedColumnName = "itemCode",
            insertable = true,
            updatable = true)
    private Inventory item;

}
