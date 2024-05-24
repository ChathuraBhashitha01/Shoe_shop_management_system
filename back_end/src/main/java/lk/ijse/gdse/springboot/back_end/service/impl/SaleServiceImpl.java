package lk.ijse.gdse.springboot.back_end.service.impl;

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
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Service
@Transactional
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
    public List<SaleDTO> getAllSaleDetails() {
        return saleRepo.findAll().stream().map(sale -> modelMapper.map(sale,SaleDTO.class)).toList();
    }

    @Override
    public void saveSale(SaleDTO saleDTO) {
        SaleDTO saleDTO1=new SaleDTO(saleDTO.getOrderNo(),saleDTO.getCustomerCode(),saleDTO.getCustomerName(),saleDTO.getTotalPrice(),saleDTO.getPurchaseDate(),saleDTO.getPaymentMethod(),saleDTO.getAddedPoints(),saleDTO.getCashierName(),saleDTO.getEmployeeCode());
        saleRepo.save(modelMapper.map(saleDTO1, Sale.class));

        for (SaleDetailsDTO detailsDTO:saleDTO.getSaleDetails()) {
             SaleDetailsDTO saleDetailsDTO = new SaleDetailsDTO(detailsDTO.getOrderNo(), detailsDTO.getItemCode(), detailsDTO.getItemDesc(), detailsDTO.getSize(), detailsDTO.getQuantity(), detailsDTO.getUnitPrice());
            saleDetailsRepo.save(modelMapper.map(saleDetailsDTO, SaleDetails.class));
            System.out.println( "sale details"+detailsDTO);
            if(detailsDTO.getSize()==5){
                InventoryDTO inventoryDTO=modelMapper.map(inventoryRepo.findById(detailsDTO.getItemCode()).get(), InventoryDTO.class);
                int qty=inventoryDTO.getQuantitySize5()-detailsDTO.getQuantity();
                inventoryDTO.setQuantitySize5(qty);
                inventoryRepo.save(modelMapper.map(inventoryDTO, Inventory.class));
            }
            else if(detailsDTO.getSize()==6){
                InventoryDTO inventoryDTO=modelMapper.map(inventoryRepo.findById(detailsDTO.getItemCode()).get(), InventoryDTO.class);
                int qty=inventoryDTO.getQuantitySize6()-detailsDTO.getQuantity();
                inventoryDTO.setQuantitySize6(qty);
                inventoryRepo.save(modelMapper.map(inventoryDTO, Inventory.class));
            }
            else if(detailsDTO.getSize()==7){
                InventoryDTO inventoryDTO=modelMapper.map(inventoryRepo.findById(detailsDTO.getItemCode()).get(), InventoryDTO.class);
                int qty=inventoryDTO.getQuantitySize7()-detailsDTO.getQuantity();
                inventoryDTO.setQuantitySize7(qty);
                inventoryRepo.save(modelMapper.map(inventoryDTO, Inventory.class));
            }
            else if(detailsDTO.getSize()==8){
                InventoryDTO inventoryDTO=modelMapper.map(inventoryRepo.findById(detailsDTO.getItemCode()).get(), InventoryDTO.class);
                int qty=inventoryDTO.getQuantitySize8()-detailsDTO.getQuantity();
                inventoryDTO.setQuantitySize8(qty);
                inventoryRepo.save(modelMapper.map(inventoryDTO, Inventory.class));
            }
            else if(detailsDTO.getSize()==9){
                InventoryDTO inventoryDTO=modelMapper.map(inventoryRepo.findById(detailsDTO.getItemCode()).get(), InventoryDTO.class);
                int qty=inventoryDTO.getQuantitySize9()-detailsDTO.getQuantity();
                inventoryDTO.setQuantitySize9(qty);
                inventoryRepo.save(modelMapper.map(inventoryDTO, Inventory.class));
            }
            else if(detailsDTO.getSize()==10){
                InventoryDTO inventoryDTO=modelMapper.map(inventoryRepo.findById(detailsDTO.getItemCode()).get(), InventoryDTO.class);
                int qty=inventoryDTO.getQuantitySize10()-detailsDTO.getQuantity();
                inventoryDTO.setQuantitySize10(qty);
                inventoryRepo.save(modelMapper.map(inventoryDTO, Inventory.class));
            }
            else if(detailsDTO.getSize()==11){
                InventoryDTO inventoryDTO=modelMapper.map(inventoryRepo.findById(detailsDTO.getItemCode()).get(), InventoryDTO.class);
                int qty=inventoryDTO.getQuantitySize11()-detailsDTO.getQuantity();
                inventoryDTO.setQuantitySize11(qty);
                inventoryRepo.save(modelMapper.map(inventoryDTO, Inventory.class));
            }
        }
        CustomerDTO customerDTO=modelMapper.map(customerRepo.findById(saleDTO.getCustomerCode()).get(), CustomerDTO.class);
        int point=customerDTO.getTotalPoint()+saleDTO.getAddedPoints();
        customerDTO.setTotalPoint(point);
        customerDTO.setRecentPurchaseDate(saleDTO.getPurchaseDate());
        System.out.println(saleDTO.getPurchaseDate());
        customerRepo.save(modelMapper.map(customerDTO, Customer.class));
    }

    @Override
    public String getNextId() {
        String prefix = "OR-";
        String id = "";

        Sale lastOrder = saleRepo.findTopByOrderByOrderNoDesc();
        int nextNumericPart;
        if (lastOrder != null) {
            String lastCode = lastOrder.getOrderNo();
            String numericPartString = lastCode.substring(prefix.length());
            try {
                int numericPart = Integer.parseInt(numericPartString);
                nextNumericPart = numericPart + 1;
            } catch (NumberFormatException e) {
                nextNumericPart = 1;
            }
        } else {
            nextNumericPart = 1;
        }
        id = prefix + String.format("%04d", nextNumericPart);

        System.out.println("Order next id ="+id);
        return id;
    }

    @Override
    public String splitId(String id) {
        return null;
    }

    @Override
    public void updateSale(SaleDTO saleDTO) {
        saleRepo.save(modelMapper.map(saleDTO, Sale.class));
    }

    @Override
    public void deleteSale(String id) {
        saleRepo.deleteById(id);
    }

    @Override
    public List<SaleDetailsDTO> getAllRefundOrders() {
        List<SaleDetailsDTO> refundDetails=new ArrayList<>();
//        return saleRepo.getAllRefundOrders().stream().map(sale -> modelMapper.map(sale,SaleDTO.class)).toList();
         List<Sale> allRefundOrders = saleRepo.getAllRefundOrders();
        for (Sale sale:allRefundOrders) {
             List<SaleDetailsDTO> orderDetailsByOrderId = saleDetailsRepo.findOrderDetailsByOrderId(sale.getOrderNo()).stream().map(saleDetails -> modelMapper.map(saleDetails,SaleDetailsDTO.class)).toList();
            for (SaleDetailsDTO saleDetails:orderDetailsByOrderId) {
               refundDetails.add(saleDetails);
            }
        }
        System.out.println("refund : ");
        return refundDetails;
    }
}
