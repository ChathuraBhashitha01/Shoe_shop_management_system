package lk.ijse.gdse.springboot.back_end.service.impl;

import lk.ijse.gdse.springboot.back_end.dto.MostSellingItemDTO;
import lk.ijse.gdse.springboot.back_end.entity.AdminPanel;
import lk.ijse.gdse.springboot.back_end.entity.Inventory;
import lk.ijse.gdse.springboot.back_end.repository.CustomerRepo;
import lk.ijse.gdse.springboot.back_end.repository.InventoryRepo;
import lk.ijse.gdse.springboot.back_end.repository.SaleDetailsRepo;
import lk.ijse.gdse.springboot.back_end.repository.SaleRepo;
import lk.ijse.gdse.springboot.back_end.service.AdminPanelService;
import org.springframework.stereotype.Service;

import java.sql.Timestamp;
import java.time.LocalDate;
import java.time.LocalTime;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class AdminPanelServiceImpl implements AdminPanelService {

    private SaleRepo saleRepo;
    private SaleDetailsRepo saleDetailsRepo;
    private InventoryRepo inventoryRepo;
    private CustomerRepo customerRepo;

    public AdminPanelServiceImpl(SaleRepo saleRepo, SaleDetailsRepo saleDetailsRepo, InventoryRepo inventoryRepo, CustomerRepo customerRepo) {
        this.saleRepo = saleRepo;
        this.saleDetailsRepo = saleDetailsRepo;
        this.inventoryRepo = inventoryRepo;
        this.customerRepo = customerRepo;
    }

    @Override
    public void saveAdminPanel(AdminPanel adminPanel) {

    }

    @Override
    public Integer getOrdersCountForDate(LocalDate date) {
        Timestamp startOfDay = Timestamp.valueOf(date.atStartOfDay());
        Timestamp endOfDay = Timestamp.valueOf(date.atTime(LocalTime.MAX));
        return saleRepo.countOrdersForDate(startOfDay, endOfDay);
    }

    @Override
    public Double getTotalPriceForDate(LocalDate date) {
        Timestamp startOfDay = Timestamp.valueOf(date.atStartOfDay());
        Timestamp endOfDay = Timestamp.valueOf(date.atTime(LocalTime.MAX));
        return saleRepo.totalPriceForDate(startOfDay, endOfDay);
    }

    @Override
    public Integer getCustomerCount() {
        return 0;
    }

    @Override
    public Map<String, Object> getMostSoldItemByDate(LocalDate date) {
        List<MostSellingItemDTO> result = inventoryRepo.findMostSoldItemByDate(date);
        Map<String, Object> response = new HashMap<>();
        if (!result.isEmpty()) {
            MostSellingItemDTO mostSoldItemDTO = result.get(0);
            Inventory mostSoldItem = mostSoldItemDTO.getInventory();
            Long totalQty = mostSoldItemDTO.getTotalQty();

            response.put("mostSoldItemName", mostSoldItem.getItemDesc());
            response.put("mostSoldItemPicture", mostSoldItem.getItemPicture());
            response.put("mostSoldItemQty", totalQty);
        } else {
            response.put("mostSoldItemName", null);
            response.put("mostSoldItemPicture", null);
            response.put("mostSoldItemQty", 0);
        }
        return response;
    }

    @Override
    public Double getTotalProfitForDate(LocalDate date) {
        return 0.0;
    }
}
