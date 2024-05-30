package lk.ijse.gdse.springboot.back_end.repository;

import lk.ijse.gdse.springboot.back_end.dto.InventoryDTO;
import lk.ijse.gdse.springboot.back_end.entity.Inventory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface InventoryRepo extends JpaRepository<Inventory,String> {
    Inventory findByItemCode(String code);
    List<Inventory> findByTypeOfGenderContaining(String value);
    List<Inventory> findByUnitPriceSaleBetween(double minPrice, double maxPrice);
    List<Inventory> findByUnitPriceSaleBetweenAndTypeOfGenderContaining(double minPrice, double maxPrice, String typeOfGender);

}
