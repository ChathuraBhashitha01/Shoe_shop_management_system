package lk.ijse.gdse.springboot.back_end.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "saleDetails")
public class SaleDetails {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int no;

    @ManyToOne
    @JoinColumn(name = "orderNo",referencedColumnName = "orderNo",insertable = false,updatable = false)
    private Sale orderNo;

    @ManyToOne
    @JoinColumn(name = "itemCode",referencedColumnName = "itemCode",insertable = false,updatable = false)
    private Inventory itemCode;

    public int getNo() {
        return no;
    }

    public void setNo(int no) {
        this.no = no;
    }

    public Sale getOrderNo() {
        return orderNo;
    }

    public void setOrderNo(Sale orderNo) {
        this.orderNo = orderNo;
    }

    public Inventory getItemCode() {
        return itemCode;
    }

    public void setItemCode(Inventory itemCode) {
        this.itemCode = itemCode;
    }

    @Override
    public String toString() {
        return "SaleDetails{" +
                "no=" + no +
                ", orderNo=" + orderNo +
                ", itemCode=" + itemCode +
                '}';
    }
}
