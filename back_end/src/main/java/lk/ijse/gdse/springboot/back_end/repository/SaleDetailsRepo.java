package lk.ijse.gdse.springboot.back_end.repository;

import lk.ijse.gdse.springboot.back_end.entity.Customer;
import lk.ijse.gdse.springboot.back_end.entity.Sale;
import lk.ijse.gdse.springboot.back_end.entity.SaleDetails;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface SaleDetailsRepo extends JpaRepository<SaleDetails,String> {

    @Query(value = "SELECT * FROM sale_details WHERE order_no = :orderId", nativeQuery = true)
    List<SaleDetails> findOrderDetailsByOrderId(String orderId);

    @Query("SELECT s.inventory.itemCode, SUM(s.quantity) AS totalQuantity " +
            "FROM SaleDetails s " +
            "GROUP BY s.inventory.itemCode " +
            "ORDER BY totalQuantity DESC")
    SaleDetails findTopSellingItem();
}
