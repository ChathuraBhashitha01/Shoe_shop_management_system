package lk.ijse.gdse.springboot.back_end.controller;

import lk.ijse.gdse.springboot.back_end.dto.SaleDetailsDTO;
import lk.ijse.gdse.springboot.back_end.service.SaleDetailsService;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/api/v1/salesDetails")
@CrossOrigin
public class SaleDetailsController {

    private SaleDetailsService saleDetailsService;

    public SaleDetailsController(SaleDetailsService saleDetailsService) {
        this.saleDetailsService = saleDetailsService;
    }

    @GetMapping( "/topSale")
    public SaleDetailsDTO getMostSellingItem(){
        return saleDetailsService.getTopSale();
    }

    @DeleteMapping(value = "/{no}")
    public void deleteRefundOrder(@PathVariable("no") int no){
        saleDetailsService.deleteSaleDetails(no);
    }
}
