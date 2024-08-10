package lk.ijse.gdse.springboot.back_end.service.impl;

import lk.ijse.gdse.springboot.back_end.dto.SupplierDTO;
import lk.ijse.gdse.springboot.back_end.entity.Supplier;
import lk.ijse.gdse.springboot.back_end.repository.SupplierRepo;
import lk.ijse.gdse.springboot.back_end.service.SupplierService;
import lk.ijse.gdse.springboot.back_end.service.exception.DuplicateRecordException;
import lk.ijse.gdse.springboot.back_end.service.exception.NotFoundException;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SupplierServiceImpl implements SupplierService {

    private ModelMapper modelMapper;
    private SupplierRepo supplierRepo;

    public SupplierServiceImpl(ModelMapper modelMapper, SupplierRepo supplierRepo) {
        this.modelMapper = modelMapper;
        this.supplierRepo = supplierRepo;
    }

    @Override
    public List<SupplierDTO> getAllSupplier() {
        return supplierRepo.findAll().stream().map(supplier -> modelMapper.map(supplier,SupplierDTO.class)).toList();
    }

    @Override
    public SupplierDTO getSupplierDetails(String id) {
        if (!supplierRepo.existsById(id)){
            throw new NotFoundException("Supplier Id does not exists!");
        }
        return modelMapper.map(supplierRepo.findById(id).get(),SupplierDTO.class);
    }

    @Override
    public void saveSupplier(SupplierDTO supplierDTO) {
        if (supplierRepo.existsById(supplierDTO.getSupplierCode())){
            throw new DuplicateRecordException("Supplier Id is already exists!");
        }
        supplierRepo.save(modelMapper.map(supplierDTO, Supplier.class));
    }

    @Override
    public void updateSupplier(SupplierDTO supplierDTO) {
        if (!supplierRepo.existsById(supplierDTO.getSupplierCode())){
            throw new NotFoundException("Supplier Id does not exists!");
        }
        supplierRepo.save(modelMapper.map(supplierDTO, Supplier.class));
    }

    @Override
    public void deleteSupplier(String id) {
        if (!supplierRepo.existsById(id)){
            throw new NotFoundException("Supplier Id does not exists!");
        }
        supplierRepo.deleteById(id);
    }
}
