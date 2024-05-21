package lk.ijse.gdse.springboot.back_end.service.impl;

import jakarta.transaction.Transactional;
import lk.ijse.gdse.springboot.back_end.dto.SaleDTO;
import lk.ijse.gdse.springboot.back_end.dto.SaleDetailsDTO;
import lk.ijse.gdse.springboot.back_end.entity.Sale;
import lk.ijse.gdse.springboot.back_end.repository.CustomerRepo;
import lk.ijse.gdse.springboot.back_end.repository.InventoryRepo;
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

    public SaleServiceImpl(ModelMapper modelMapper, SaleRepo saleRepo) {
        this.modelMapper = modelMapper;
        this.saleRepo = saleRepo;
    }

    @Override
    @Transactional
    public void saveSale(SaleDTO saleDTO) {
        SaleDTO saleDTO1=new SaleDTO(saleDTO.getOrderNo(),saleDTO.getEmployeeCode(),saleDTO.getCustomerName(),saleDTO.getTotalPrice(),saleDTO.getPurchaseDate(),saleDTO.getPaymentMethod(),saleDTO.getAddedPoints(),saleDTO.getCashierName(),saleDTO.getEmployeeCode());
        saleRepo.save(modelMapper.map(saleDTO, Sale.class));

        for (SaleDetailsDTO detailsDTO:saleDTO.getSaleDetails()) {

        }
    }
}
