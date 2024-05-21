package lk.ijse.gdse.springboot.back_end.service;

import lk.ijse.gdse.springboot.back_end.dto.SaleDTO;

import java.sql.Connection;
import java.sql.SQLException;
import java.util.List;

public interface SaleService {
    List<SaleDTO> getAllSaleDetails();
    void saveSale(SaleDTO saleDTO);
    String getNextId();
    String splitId(String id);
}
