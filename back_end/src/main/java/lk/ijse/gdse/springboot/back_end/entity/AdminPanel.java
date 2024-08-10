package lk.ijse.gdse.springboot.back_end.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "adminPanel")
public class AdminPanel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int no;
    private double totalSales;
    private double totalProfit;
    private String mostSaleItem;
    private String pictureOfTheMostSaleItem;
    private int mostSaleItemQty;

}
