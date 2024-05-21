package lk.ijse.gdse.springboot.back_end.service.impl;

import jakarta.transaction.Transactional;
import lk.ijse.gdse.springboot.back_end.dto.CustomerDTO;
import lk.ijse.gdse.springboot.back_end.dto.InventoryDTO;
import lk.ijse.gdse.springboot.back_end.dto.SaleDTO;
import lk.ijse.gdse.springboot.back_end.dto.SaleDetailsDTO;
import lk.ijse.gdse.springboot.back_end.entity.Customer;
import lk.ijse.gdse.springboot.back_end.entity.Inventory;
import lk.ijse.gdse.springboot.back_end.entity.Sale;
import lk.ijse.gdse.springboot.back_end.entity.SaleDetails;
import lk.ijse.gdse.springboot.back_end.repository.CustomerRepo;
import lk.ijse.gdse.springboot.back_end.repository.InventoryRepo;
import lk.ijse.gdse.springboot.back_end.repository.SaleDetailsRepo;
import lk.ijse.gdse.springboot.back_end.repository.SaleRepo;
import lk.ijse.gdse.springboot.back_end.service.SaleService;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

@Service
public class SaleServiceImpl implements SaleService {

    private ModelMapper modelMapper;
    private SaleRepo saleRepo;
    private CustomerRepo customerRepo;
    private InventoryRepo inventoryRepo;
    private SaleDetailsRepo saleDetailsRepo;

    public SaleServiceImpl(ModelMapper modelMapper, SaleRepo saleRepo, CustomerRepo customerRepo, InventoryRepo inventoryRepo, SaleDetailsRepo saleDetailsRepo) {
        this.modelMapper = modelMapper;
        this.saleRepo = saleRepo;
        this.customerRepo = customerRepo;
        this.inventoryRepo = inventoryRepo;
        this.saleDetailsRepo = saleDetailsRepo;
    }

    @Override
    @Transactional
    public void saveSale(SaleDTO saleDTO) {
        SaleDTO saleDTO1=new SaleDTO(saleDTO.getOrderNo(),saleDTO.getCustomerCode(),saleDTO.getCustomerName(),saleDTO.getTotalPrice(),saleDTO.getPurchaseDate(),saleDTO.getPaymentMethod(),saleDTO.getAddedPoints(),saleDTO.getCashierName(),saleDTO.getEmployeeCode());
        saleRepo.save(modelMapper.map(saleDTO1, Sale.class));

        for (SaleDetailsDTO detailsDTO:saleDTO.getSaleDetails()) {
            saleDetailsRepo.save(modelMapper.map(detailsDTO, SaleDetails.class));

            if(detailsDTO.getSize()==5){
                InventoryDTO inventoryDTO=modelMapper.map(inventoryRepo.findById(detailsDTO.getItemCode()).get(), InventoryDTO.class);
                inventoryDTO.setQuantitySize5(detailsDTO.getQuantity());
                inventoryRepo.save(modelMapper.map(inventoryDTO, Inventory.class));
            }
            else if(detailsDTO.getSize()==6){
                InventoryDTO inventoryDTO=modelMapper.map(inventoryRepo.findById(detailsDTO.getItemCode()).get(), InventoryDTO.class);
                inventoryDTO.setQuantitySize6(detailsDTO.getQuantity());
                inventoryRepo.save(modelMapper.map(inventoryDTO, Inventory.class));
            }
            else if(detailsDTO.getSize()==7){
                InventoryDTO inventoryDTO=modelMapper.map(inventoryRepo.findById(detailsDTO.getItemCode()).get(), InventoryDTO.class);
                inventoryDTO.setQuantitySize7(detailsDTO.getQuantity());
                inventoryRepo.save(modelMapper.map(inventoryDTO, Inventory.class));
            }
            else if(detailsDTO.getSize()==8){
                InventoryDTO inventoryDTO=modelMapper.map(inventoryRepo.findById(detailsDTO.getItemCode()).get(), InventoryDTO.class);
                inventoryDTO.setQuantitySize8(detailsDTO.getQuantity());
                inventoryRepo.save(modelMapper.map(inventoryDTO, Inventory.class));
            }
            else if(detailsDTO.getSize()==9){
                InventoryDTO inventoryDTO=modelMapper.map(inventoryRepo.findById(detailsDTO.getItemCode()).get(), InventoryDTO.class);
                inventoryDTO.setQuantitySize9(detailsDTO.getQuantity());
                inventoryRepo.save(modelMapper.map(inventoryDTO, Inventory.class));
            }
            else if(detailsDTO.getSize()==10){
                InventoryDTO inventoryDTO=modelMapper.map(inventoryRepo.findById(detailsDTO.getItemCode()).get(), InventoryDTO.class);
                inventoryDTO.setQuantitySize10(detailsDTO.getQuantity());
                inventoryRepo.save(modelMapper.map(inventoryDTO, Inventory.class));
            }
            else if(detailsDTO.getSize()==11){
                InventoryDTO inventoryDTO=modelMapper.map(inventoryRepo.findById(detailsDTO.getItemCode()).get(), InventoryDTO.class);
                inventoryDTO.setQuantitySize11(detailsDTO.getQuantity());
                inventoryRepo.save(modelMapper.map(inventoryDTO, Inventory.class));
            }
        }
        CustomerDTO customerDTO=modelMapper.map(customerRepo.findById(saleDTO.getCustomerCode()).get(), CustomerDTO.class);
        customerDTO.setTotalPoint(saleDTO.getAddedPoints());
        customerDTO.setRecentPurchaseDate(saleDTO.getPurchaseDate());
        customerRepo.save(modelMapper.map(customerDTO, Customer.class));
    }
}
