package lk.ijse.gdse.springboot.back_end.service;

import lk.ijse.gdse.springboot.back_end.dto.InventoryDTO;

import java.util.List;

public interface InventoryService {
    List<InventoryDTO> getAllInventory();
    InventoryDTO getInventoryDetails(String id);
    void saveInventory(InventoryDTO inventoryDTO);
    void updateInventory(InventoryDTO inventoryDTO);
    void deleteInventory(String id);
    List<InventoryDTO> getAllDetailsUseGender(String gender);
    List<InventoryDTO> getAllItemsByPrice(double minPrice, double maxPrice);
    List<InventoryDTO> getAllItemsByPriceAndTypeOfGender(double minPrice, double maxPrice,String gender);
}
