package lk.ijse.gdse.springboot.back_end.repository;

import lk.ijse.gdse.springboot.back_end.dto.InventoryDTO;
import lk.ijse.gdse.springboot.back_end.dto.MostSellingItemDTO;
import lk.ijse.gdse.springboot.back_end.entity.Inventory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.time.LocalDate;
import java.util.List;

public interface InventoryRepo extends JpaRepository<Inventory,String> {
    List<Inventory> findByItemDesc(String name);
    List<Inventory> findByTypeOfGenderContaining(String value);
    List<Inventory> findByCategoryContaining(String value);
    List<Inventory> findByCategory(String value);
    List<Inventory> findByUnitPriceSaleBetween(double minPrice, double maxPrice);
    List<Inventory> findByUnitPriceSaleBetweenAndTypeOfGenderContaining(double minPrice, double maxPrice, String typeOfGender);

    @Query("SELECT new lk.ijse.gdse.springboot.back_end.dto.MostSellingItemDTO(i, SUM(od.quantity)) " +
            "FROM Inventory i " +
            "JOIN i.saleDetails od " +
            "JOIN od.order o " +
            "WHERE DATE(o.PurchaseDate) = :date " +
            "GROUP BY i " +
            "ORDER BY SUM(od.quantity) DESC")
    List<MostSellingItemDTO> findMostSoldItemByDate(LocalDate date);
}
