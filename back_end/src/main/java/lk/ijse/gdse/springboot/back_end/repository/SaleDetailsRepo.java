package lk.ijse.gdse.springboot.back_end.repository;

import lk.ijse.gdse.springboot.back_end.entity.Inventory;
import lk.ijse.gdse.springboot.back_end.entity.SaleDetails;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface SaleDetailsRepo extends JpaRepository<SaleDetails,String> {

    @Query(value = "SELECT * FROM sale_details WHERE order_no = :orderId", nativeQuery = true)
    List<SaleDetails> findOrderDetailsByOrderId(String orderId);

    /*@Query(value = "SELECT sd.* FROM saleDetails sd JOIN Sale s ON sd.orderNo = s.orderNo WHERE s.orderDate >= NOW() - INTERVAL 1 WEEK GROUP BY sd.itemCode ORDER BY SUM(sd.quantity) DESC LIMIT 1", nativeQuery = true)
    SaleDetails findTopSellingItemInLastWeek();*/

    void deleteByNo(int no);
    SaleDetails findByNo(int no);

    @Query(value = "SELECT i.* FROM inventory i " +
            "JOIN sale_details sd ON i.item_code = sd.item_code " +
            "JOIN sale s ON sd.order_no = s.order_no " +
            "WHERE s.purchase_date >= DATE_SUB(CURDATE(), INTERVAL 1 WEEK) " +
            "GROUP BY sd.item_code " +
            "ORDER BY SUM(sd.quantity) DESC " +
            "LIMIT 1", nativeQuery = true)
    Inventory findMostSellingItem();
}
