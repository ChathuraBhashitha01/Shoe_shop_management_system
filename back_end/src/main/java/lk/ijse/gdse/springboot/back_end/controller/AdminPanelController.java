package lk.ijse.gdse.springboot.back_end.controller;

import lk.ijse.gdse.springboot.back_end.service.AdminPanelService;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/v1/adminPanel")
@CrossOrigin
public class AdminPanelController {

    private AdminPanelService adminPanelService;

    public AdminPanelController(AdminPanelService adminPanelService) {
        this.adminPanelService = adminPanelService;
    }

    @GetMapping("/summeryOfToday/{date}")
    public Map<String, Object> getSummaryForToday(@PathVariable("date") String date) {
        LocalDate localDate = LocalDate.parse(date);
        Map<String, Object> response = new HashMap<>();
        response.put("ordersCount", adminPanelService.getOrdersCountForDate(localDate));
        response.put("totalPrice", adminPanelService.getTotalPriceForDate(localDate));
        /*response.put("goldCusCount", adminPanelService.getGoldCustomerCount());*/
        System.out.println("response: " + response);
        return response;
    }

    @GetMapping("/summeryForSelectedDate/{date}")
    public Map<String, Object> getSummeryForSelectedDate(@PathVariable("date") String date){
        LocalDate localDate = LocalDate.parse(date);
        Map<String, Object> response = new HashMap<>();
        response.put("totalPrice", adminPanelService.getTotalPriceForDate(localDate));

        Map<String, Object> mostSolidItem = adminPanelService.getMostSoldItemByDate(localDate);
        response.put("mostSoldItemName", mostSolidItem.get("mostSoldItemName"));
        response.put("mostSoldItemPicture", mostSolidItem.get("mostSoldItemPicture"));
        response.put("mostSoldItemQty", mostSolidItem.get("mostSoldItemQty"));

        return response;
    }
}
