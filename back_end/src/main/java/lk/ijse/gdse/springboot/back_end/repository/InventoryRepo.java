package lk.ijse.gdse.springboot.back_end.repository;

import lk.ijse.gdse.springboot.back_end.entity.Inventory;
import org.springframework.data.jpa.repository.JpaRepository;

public interface InventoryRepo extends JpaRepository<Inventory,String> {
    boolean findDistinctByQuantitySize5(int qty);
    boolean findDistinctByQuantitySize6(int qty);
    boolean findDistinctByQuantitySize7(int qty);
    boolean findDistinctByQuantitySize8(int qty);
    boolean findDistinctByQuantitySize9(int qty);
    boolean findDistinctByQuantitySize10(int qty);
    boolean findDistinctByQuantitySize11(int qty);
}
