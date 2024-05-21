package lk.ijse.gdse.springboot.back_end.service.impl;

import lk.ijse.gdse.springboot.back_end.dto.InventoryDTO;
import lk.ijse.gdse.springboot.back_end.entity.Inventory;
import lk.ijse.gdse.springboot.back_end.repository.InventoryRepo;
import lk.ijse.gdse.springboot.back_end.service.InventoryService;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class InventoryServiceImpl implements InventoryService {

    private ModelMapper modelMapper;
    private InventoryRepo inventoryRepo;

    public InventoryServiceImpl(ModelMapper modelMapper, InventoryRepo inventoryRepo) {
        this.modelMapper = modelMapper;
        this.inventoryRepo = inventoryRepo;
    }

    @Override
    public List<InventoryDTO> getAllInventory() {
        return inventoryRepo.findAll().stream().map(inventory -> modelMapper.map(inventory, InventoryDTO.class)).toList();
    }

    @Override
    public InventoryDTO getInventoryDetails(String id) {
        return modelMapper.map(inventoryRepo.findById(id).get(), InventoryDTO.class);
    }

    @Override
    public void saveInventory(InventoryDTO inventoryDTO) {
        inventoryRepo.save(modelMapper.map(inventoryDTO, Inventory.class));
    }

    @Override
    public void updateInventory(InventoryDTO inventoryDTO) {
        inventoryRepo.save(modelMapper.map(inventoryDTO, Inventory.class));
    }

    @Override
    public void deleteInventory(String id) {
        inventoryRepo.deleteById(id);
    }

    @Override
    public boolean updateQtyOfSize5(int qty) {
        return false;
    }

    @Override
    public boolean updateQtyOfSize6(int qty) {
        return false;
    }

    @Override
    public boolean updateQtyOfSize7(int qty) {
        return false;
    }

    @Override
    public boolean updateQtyOfSize8(int qty) {
        return false;
    }

    @Override
    public boolean updateQtyOfSize9(int qty) {
        return false;
    }

    @Override
    public boolean updateQtyOfSize10(int qty) {
        return false;
    }

    @Override
    public boolean updateQtyOfSize11(int qty) {
        return false;
    }
}
