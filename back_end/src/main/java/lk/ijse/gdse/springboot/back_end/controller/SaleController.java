package lk.ijse.gdse.springboot.back_end.controller;

import lk.ijse.gdse.springboot.back_end.dto.SaleDTO;
import lk.ijse.gdse.springboot.back_end.service.SaleService;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/sales")
@CrossOrigin
public class SaleController {

    private SaleService saleService;

    public SaleController(SaleService saleService) {
        this.saleService = saleService;
    }

    @PostMapping(consumes = MediaType.APPLICATION_JSON_VALUE)
    public void saveSale(@RequestBody SaleDTO saleDTO){
        saleService.saveSale(saleDTO);
    }
}
