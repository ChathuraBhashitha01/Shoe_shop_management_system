package lk.ijse.gdse.springboot.back_end.service.impl;

import lk.ijse.gdse.springboot.back_end.dto.SaleDTO;
import lk.ijse.gdse.springboot.back_end.entity.Sale;
import lk.ijse.gdse.springboot.back_end.repository.SaleRepo;
import lk.ijse.gdse.springboot.back_end.service.SaleService;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

@Service
public class SaleServiceImpl implements SaleService {

    private ModelMapper modelMapper;
    private SaleRepo saleRepo;

    public SaleServiceImpl(ModelMapper modelMapper, SaleRepo saleRepo) {
        this.modelMapper = modelMapper;
        this.saleRepo = saleRepo;
    }

    @Override
    public void saveSale(SaleDTO saleDTO) {
        saleRepo.save(modelMapper.map(saleDTO, Sale.class));
    }
}
