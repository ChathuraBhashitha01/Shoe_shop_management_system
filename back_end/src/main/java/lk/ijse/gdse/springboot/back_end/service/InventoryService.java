package lk.ijse.gdse.springboot.back_end.service;

import lk.ijse.gdse.springboot.back_end.dto.InventoryDTO;

import java.util.List;

public interface InventoryService {
    List<InventoryDTO> getAllInventory();
    InventoryDTO getInventoryDetails(String id);
    void saveInventory(InventoryDTO inventoryDTO);
    void updateInventory(InventoryDTO inventoryDTO);
    void deleteInventory(String id);
    boolean updateQtyOfSize5(int qty);
    boolean updateQtyOfSize6(int qty);
    boolean updateQtyOfSize7(int qty);
    boolean updateQtyOfSize8(int qty);
    boolean updateQtyOfSize9(int qty);
    boolean updateQtyOfSize10(int qty);
    boolean updateQtyOfSize11(int qty);
}
