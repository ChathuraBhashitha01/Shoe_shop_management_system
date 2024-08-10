package lk.ijse.gdse.springboot.back_end.controller;

import lk.ijse.gdse.springboot.back_end.dto.InventoryDTO;
import lk.ijse.gdse.springboot.back_end.service.InventoryService;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Base64;
import java.util.List;

@RestController
@RequestMapping("/api/v1/inventories")
@CrossOrigin
public class InventoryController {
    private InventoryService inventoryService;

    public InventoryController(InventoryService inventoryService) {
        this.inventoryService = inventoryService;
    }

    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    private List<InventoryDTO> getAllInventories(){
        return inventoryService.getAllInventory();
    }

    @GetMapping(value = "/{id}",produces = MediaType.APPLICATION_JSON_VALUE)
    public InventoryDTO getInventoryDetails(@PathVariable("id") String id){
        return inventoryService.getInventoryDetails(id);
    }

    @PostMapping(consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public void saveInventory(@RequestParam("itemCode") String code,
                              @RequestParam("itemDesc") String name,
                              @RequestParam("itemPicture") MultipartFile picture,
                              @RequestParam("typeOfGender") String typeOfGender,
                              @RequestParam("category") String category,
                              @RequestParam("quantitySize5") int quantitySize5,
                              @RequestParam("quantitySize6") int quantitySize6,
                              @RequestParam("quantitySize7") int quantitySize7,
                              @RequestParam("quantitySize8") int quantitySize8,
                              @RequestParam("quantitySize9") int quantitySize9,
                              @RequestParam("quantitySize10") int quantitySize10,
                              @RequestParam("quantitySize11") int quantitySize11,
                              @RequestParam("supplierCode") String supplierCode,
                              @RequestParam("supplierName") String supplierName,
                              @RequestParam("unitPriceSale") double unitPriceSale,
                              @RequestParam("unitPriceBuy") double unitPriceBuy,
                              @RequestParam("expectedProfit") double expectedProfit,
                              @RequestParam("profitMargin") double profitMargin,
                              @RequestParam("status") String status
                              ) throws IOException {
        String base64ProfilePic = Base64.getEncoder().encodeToString(picture.getBytes());

         InventoryDTO inventoryDTO = new InventoryDTO(code, name, base64ProfilePic,typeOfGender, category, quantitySize5, quantitySize6, quantitySize7,
                quantitySize8, quantitySize9, quantitySize10, quantitySize11, supplierCode, supplierName, unitPriceSale, unitPriceBuy, expectedProfit, profitMargin, status);
        inventoryService.saveInventory(inventoryDTO);
    }

    @PatchMapping(consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public void updateInventory(@RequestParam("itemCode") String code,
                                @RequestParam("itemDesc") String name,
                                @RequestParam("itemPicture") MultipartFile picture,
                                @RequestParam("typeOfGender") String typeOfGender,
                                @RequestParam("category") String category,
                                @RequestParam("quantitySize5") int quantitySize5,
                                @RequestParam("quantitySize6") int quantitySize6,
                                @RequestParam("quantitySize7") int quantitySize7,
                                @RequestParam("quantitySize8") int quantitySize8,
                                @RequestParam("quantitySize9") int quantitySize9,
                                @RequestParam("quantitySize10") int quantitySize10,
                                @RequestParam("quantitySize11") int quantitySize11,
                                @RequestParam("supplierCode") String supplierCode,
                                @RequestParam("supplierName") String supplierName,
                                @RequestParam("unitPriceSale") double unitPriceSale,
                                @RequestParam("unitPriceBuy") double unitPriceBuy,
                                @RequestParam("expectedProfit") double expectedProfit,
                                @RequestParam("profitMargin") double profitMargin,
                                @RequestParam("status") String status
    ) throws IOException {
        String base64ProfilePic = Base64.getEncoder().encodeToString(picture.getBytes());

        InventoryDTO inventoryDTO = new InventoryDTO(code, name, base64ProfilePic,typeOfGender, category, quantitySize5, quantitySize6, quantitySize7,
                quantitySize8, quantitySize9, quantitySize10, quantitySize11, supplierCode, supplierName, unitPriceSale, unitPriceBuy, expectedProfit, profitMargin, status);
        inventoryService.updateInventory(inventoryDTO);
    }

    @DeleteMapping(value = "/{id}")
    public void deleteInventory(@PathVariable String id){
        inventoryService.deleteInventory(id);
    }

    @GetMapping(value = "/getByGender/{gender}")
    public List<InventoryDTO> getAllDetailsUseGender(@PathVariable("gender") String gender){
        return inventoryService.getAllDetailsUseGender(gender);
    }

    @GetMapping(value = "/getByCat/{cat}")
    public List<InventoryDTO> getAllDetailsUseCategory(@PathVariable("cat") String cat){
        return inventoryService.getAllDetailsUseCategory(cat);
    }

    @GetMapping("/getAllItemsByPrice/{minPrice}/{maxPrice}")
    public List<InventoryDTO> getAllItemsByPrice(@PathVariable("minPrice") double minPrice,@PathVariable("maxPrice") double maxPrice){
        return inventoryService.getAllItemsByPrice(minPrice,maxPrice);
    }

    @GetMapping("/getAllItemsByPriceAndGender/{gender}/{minPrice}/{maxPrice}")
    public List<InventoryDTO> getAllItemsByPrice(@PathVariable("gender") String gender,@PathVariable("minPrice") double minPrice,@PathVariable("maxPrice") double maxPrice){
        return inventoryService.getAllItemsByPriceAndTypeOfGender(minPrice,maxPrice,gender);
    }

    @GetMapping("/searchByName/{name}")
    public List<InventoryDTO> searchByName(@PathVariable("name")String name){
        return inventoryService.searchItemByName(name);
    }

}
