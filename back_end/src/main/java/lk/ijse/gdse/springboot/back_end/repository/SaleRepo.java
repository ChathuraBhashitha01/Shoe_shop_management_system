package lk.ijse.gdse.springboot.back_end.repository;

import lk.ijse.gdse.springboot.back_end.dto.SaleDTO;
import lk.ijse.gdse.springboot.back_end.entity.Sale;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SaleRepo extends JpaRepository<Sale, SaleDTO> {
}
