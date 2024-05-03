package lk.ijse.gdse.springboot.back_end.service;

import lk.ijse.gdse.springboot.back_end.dto.SupplierDTO;

import java.util.List;

public interface SupplierService {

    List<SupplierDTO> getAllSupplier();
    SupplierDTO getSupplierDetails(String id);
    void saveSupplier(SupplierDTO customerDTO);
    void updateSupplier(SupplierDTO customerDTO);
    void deleteSupplier(String id);
}
