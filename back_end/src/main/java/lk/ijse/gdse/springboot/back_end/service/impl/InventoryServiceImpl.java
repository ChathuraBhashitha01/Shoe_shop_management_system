package lk.ijse.gdse.springboot.back_end.service.impl;

import lk.ijse.gdse.springboot.back_end.dto.InventoryDTO;
import lk.ijse.gdse.springboot.back_end.entity.Inventory;
import lk.ijse.gdse.springboot.back_end.repository.InventoryRepo;
import lk.ijse.gdse.springboot.back_end.service.InventoryService;
import lk.ijse.gdse.springboot.back_end.service.exception.DuplicateRecordException;
import lk.ijse.gdse.springboot.back_end.service.exception.NotFoundException;
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
        if (!inventoryRepo.existsById(id)){
            throw new NotFoundException("Item Code does not exists!");
        }
        return modelMapper.map(inventoryRepo.findById(id).get(), InventoryDTO.class);
    }

    @Override
    public void saveInventory(InventoryDTO inventoryDTO) {
        if (inventoryRepo.existsById(inventoryDTO.getItemCode())){
            throw new DuplicateRecordException("Item Code is already exists!");
        }
        inventoryRepo.save(modelMapper.map(inventoryDTO, Inventory.class));
    }

    @Override
    public void updateInventory(InventoryDTO inventoryDTO) {
        if (!inventoryRepo.existsById(inventoryDTO.getItemCode())){
            throw new NotFoundException("Item Code does not exists!");
        }
        inventoryRepo.save(modelMapper.map(inventoryDTO, Inventory.class));
    }

    @Override
    public void deleteInventory(String id) {
        if (!inventoryRepo.existsById(id)){
            throw new NotFoundException("Item Code does not exists!");
        }
        inventoryRepo.deleteById(id);
    }

    @Override
    public List<InventoryDTO> getAllDetailsUseGender(String gender) {
        return inventoryRepo.findByTypeOfGenderContaining(gender).stream().map(inventory -> modelMapper.map(inventory, InventoryDTO.class)).toList();
    }

    @Override
    public List<InventoryDTO> getAllDetailsUseCategory(String categary) {
        return inventoryRepo.findByCategory(categary).stream().map(inventory -> modelMapper.map(inventory, InventoryDTO.class)).toList();
    }

    @Override
    public List<InventoryDTO> getAllItemsByPrice(double minPrice, double maxPrice) {
        return inventoryRepo.findByUnitPriceSaleBetween(minPrice,maxPrice).stream().map(inventory -> modelMapper.map(inventory, InventoryDTO.class)).toList();
    }

    @Override
    public List<InventoryDTO> getAllItemsByPriceAndTypeOfGender(double minPrice, double maxPrice,String gender) {
        return inventoryRepo.findByUnitPriceSaleBetweenAndTypeOfGenderContaining(minPrice,maxPrice,gender).stream().map(inventory -> modelMapper.map(inventory, InventoryDTO.class)).toList();
    }

    @Override
    public List<InventoryDTO> searchItemByName(String name) {
        return inventoryRepo.findByItemDesc(name).stream().map(inventory -> modelMapper.map(inventory,InventoryDTO.class)).toList();
    }


}
