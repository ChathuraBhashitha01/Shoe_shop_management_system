package lk.ijse.gdse.springboot.back_end.repository;

import lk.ijse.gdse.springboot.back_end.dto.SaleDTO;
import lk.ijse.gdse.springboot.back_end.entity.Sale;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.sql.Timestamp;
import java.time.LocalDate;
import java.util.List;

public interface SaleRepo extends JpaRepository<Sale, String> {
    Sale findTopByOrderByOrderNoDesc();

    @Query(value = "SELECT * FROM sale WHERE purchase_date >= DATE_SUB(CURRENT_TIMESTAMP, INTERVAL 3 DAY)", nativeQuery = true)
    List<Sale> getAllRefundOrders();

    @Query(value = "SELECT * FROM sale WHERE order_no =:orderId", nativeQuery = true)
    Sale findByOrderNo(String orderId);

    Sale findOrderByOrderNo(String orderId);

    @Query("SELECT COUNT(o) FROM Sale o WHERE o.PurchaseDate >= :startOfDay AND o.PurchaseDate < :endOfDay")
    Integer countOrdersForDate(Timestamp startOfDay, Timestamp endOfDay);

    @Query("SELECT SUM(o.totalPrice) FROM Sale o WHERE o.PurchaseDate >= :startOfDay AND o.PurchaseDate < :endOfDay")
    Double totalPriceForDate(Timestamp startOfDay, Timestamp endOfDay);

    @Query("SELECT o FROM Sale o WHERE DATE(o.PurchaseDate) = :date")
    List<Sale> findOrdersByDate(LocalDate date);
}
