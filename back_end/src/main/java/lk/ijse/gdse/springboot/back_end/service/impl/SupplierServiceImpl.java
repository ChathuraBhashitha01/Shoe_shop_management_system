package lk.ijse.gdse.springboot.back_end.service.impl;

import lk.ijse.gdse.springboot.back_end.dto.SupplierDTO;
import lk.ijse.gdse.springboot.back_end.service.SupplierService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SupplierServiceImpl implements SupplierService {

    @Override
    public List<SupplierDTO> getAllSupplier() {
        return null;
    }

    @Override
    public SupplierDTO getSupplierDetails(String id) {
        return null;
    }

    @Override
    public void saveSupplier(SupplierDTO customerDTO) {

    }

    @Override
    public void updateSupplier(SupplierDTO customerDTO) {

    }

    @Override
    public void deleteSupplier(String id) {

    }
}
