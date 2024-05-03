package lk.ijse.gdse.springboot.back_end.controller;

import lk.ijse.gdse.springboot.back_end.dto.InventoryDTO;
import lk.ijse.gdse.springboot.back_end.service.InventoryService;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

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

    @PostMapping(consumes = MediaType.APPLICATION_JSON_VALUE)
    public void saveInventory(@RequestBody InventoryDTO inventoryDTO){
        inventoryService.saveInventory(inventoryDTO);
    }

    @PatchMapping(consumes = MediaType.APPLICATION_JSON_VALUE)
    public void updateInventory(@RequestBody InventoryDTO inventoryDTO){
        inventoryService.updateInventory(inventoryDTO);
    }

    @DeleteMapping(value = "/{id}")
    public void deleteInventory(@PathVariable String id){
        inventoryService.deleteInventory(id);
    }

}
