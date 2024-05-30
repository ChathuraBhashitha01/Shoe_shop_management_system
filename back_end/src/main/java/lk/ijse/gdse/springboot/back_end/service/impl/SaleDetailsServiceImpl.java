package lk.ijse.gdse.springboot.back_end.service.impl;

import lk.ijse.gdse.springboot.back_end.dto.InventoryDTO;
import lk.ijse.gdse.springboot.back_end.dto.SaleDetailsDTO;
import lk.ijse.gdse.springboot.back_end.entity.Inventory;
import lk.ijse.gdse.springboot.back_end.entity.Sale;
import lk.ijse.gdse.springboot.back_end.entity.SaleDetails;
import lk.ijse.gdse.springboot.back_end.repository.InventoryRepo;
import lk.ijse.gdse.springboot.back_end.repository.SaleDetailsRepo;
import lk.ijse.gdse.springboot.back_end.repository.SaleRepo;
import lk.ijse.gdse.springboot.back_end.service.SaleDetailsService;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class SaleDetailsServiceImpl implements SaleDetailsService {

    private ModelMapper modelMapper;
    private SaleDetailsRepo saleDetailsRepo;
    private SaleRepo saleRepo;
    private InventoryRepo inventoryRepo;

    public SaleDetailsServiceImpl(ModelMapper modelMapper, SaleDetailsRepo saleDetailsRepo, SaleRepo saleRepo, InventoryRepo inventoryRepo) {
        this.modelMapper = modelMapper;
        this.saleDetailsRepo = saleDetailsRepo;
        this.saleRepo = saleRepo;
        this.inventoryRepo = inventoryRepo;
    }

    @Override
    public List<SaleDetailsDTO> getAllSaleDetails() {
        return saleDetailsRepo.findAll().stream().map(saleDetails -> modelMapper.map(saleDetails,SaleDetailsDTO.class)).toList();
    }

    @Override
    public SaleDetailsDTO getSaleDetails(String id) {
        return modelMapper.map(saleDetailsRepo.findById(id).get(),SaleDetailsDTO.class);
    }

    @Override
    public void saveSaleDetails(SaleDetailsDTO saleDetailsDTO) {
        saleDetailsRepo.save(modelMapper.map(saleDetailsDTO, SaleDetails.class));
    }

    @Override
    public void deleteSaleDetails(int id) {
        SaleDetailsDTO saleDetailsDTO=modelMapper.map(saleDetailsRepo.findByNo(id),SaleDetailsDTO.class);

        Sale sale = saleRepo.findById(saleDetailsDTO.getOrderNo()).get();

        if (sale != null){
            double newTotalPrice = sale.getTotalPrice() - saleDetailsDTO.getUnitPrice();
            sale.setTotalPrice(newTotalPrice);
            saleRepo.save(sale);
        }

        InventoryDTO inventoryDTO=modelMapper.map(inventoryRepo.findById(saleDetailsDTO.getItemCode()).get(), InventoryDTO.class);
        if(saleDetailsDTO.getSize()==5){
            int qty=inventoryDTO.getQuantitySize5()+saleDetailsDTO.getQuantity();
            inventoryDTO.setQuantitySize5(qty);
            inventoryRepo.save(modelMapper.map(inventoryDTO, Inventory.class));
        }
        else if(saleDetailsDTO.getSize()==6){
            int qty=inventoryDTO.getQuantitySize6()+saleDetailsDTO.getQuantity();
            inventoryDTO.setQuantitySize6(qty);
            inventoryRepo.save(modelMapper.map(inventoryDTO, Inventory.class));
        }
        else if(saleDetailsDTO.getSize()==7){
            int qty=inventoryDTO.getQuantitySize7()+saleDetailsDTO.getQuantity();
            inventoryDTO.setQuantitySize7(qty);
            inventoryRepo.save(modelMapper.map(inventoryDTO, Inventory.class));
        }
        else if(saleDetailsDTO.getSize()==8){
            int qty=inventoryDTO.getQuantitySize8()+saleDetailsDTO.getQuantity();
            inventoryDTO.setQuantitySize8(qty);
            inventoryRepo.save(modelMapper.map(inventoryDTO, Inventory.class));
        }
        else if(saleDetailsDTO.getSize()==9){
            int qty=inventoryDTO.getQuantitySize9()+saleDetailsDTO.getQuantity();
            inventoryDTO.setQuantitySize9(qty);
            inventoryRepo.save(modelMapper.map(inventoryDTO, Inventory.class));
        }
        else if(saleDetailsDTO.getSize()==10){
            int qty=inventoryDTO.getQuantitySize10()+saleDetailsDTO.getQuantity();
            inventoryDTO.setQuantitySize10(qty);
            inventoryRepo.save(modelMapper.map(inventoryDTO, Inventory.class));
        }
        else if(saleDetailsDTO.getSize()==11){
            int qty=inventoryDTO.getQuantitySize11()+saleDetailsDTO.getQuantity();
            inventoryDTO.setQuantitySize11(qty);
            inventoryRepo.save(modelMapper.map(inventoryDTO, Inventory.class));
        }
        saleDetailsRepo.deleteByNo(saleDetailsDTO.getNo());
    }

    @Override
    public SaleDetailsDTO getTopSale() {
        SaleDetailsDTO saleDetailsDTO= modelMapper.map(saleDetailsRepo.findTopSellingItemInLastWeek(),SaleDetailsDTO.class);
        System.out.printf("Most selling item : %s\n",saleDetailsDTO);
        return saleDetailsDTO;

    }


}
