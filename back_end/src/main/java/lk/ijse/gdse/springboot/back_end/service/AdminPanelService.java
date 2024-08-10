package lk.ijse.gdse.springboot.back_end.service;

import lk.ijse.gdse.springboot.back_end.entity.AdminPanel;

import java.time.LocalDate;
import java.util.Map;

public interface AdminPanelService {
    void saveAdminPanel(AdminPanel adminPanel);
    Integer getOrdersCountForDate(LocalDate date);
    Double getTotalPriceForDate(LocalDate date);
    Integer getCustomerCount();
    Map<String, Object> getMostSoldItemByDate(LocalDate date);
    Double getTotalProfitForDate(LocalDate date);
}
