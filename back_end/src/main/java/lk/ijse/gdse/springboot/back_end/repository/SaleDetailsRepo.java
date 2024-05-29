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

    @Query(value = "SELECT sd.no, sd.itemDesc, sd.size, sd.quantity, sd.unitPrice, sd.orderNo, sd.itemCode " +
            "FROM saleDetails sd " +
            "ORDER BY sd.quantity DESC LIMIT 1", nativeQuery = true)
    SaleDetails findTopSellingItem();
}
