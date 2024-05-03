package lk.ijse.gdse.springboot.back_end.dto;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
public class InventoryDTO {
    private String itemCode;
    private String itemDesc;
    private String itemPicture;
    private String category;
    private String size;
    private String quantity;
    private String supplierCode;
    private String supplierName;
    private double unitPriceSale;
    private double unitPriceBuy;
    private double expectedProfit;
    private double profitMargin;
    private String status;

    public String getItemCode() {
        return itemCode;
    }

    public void setItemCode(String itemCode) {
        this.itemCode = itemCode;
    }

    public String getItemDesc() {
        return itemDesc;
    }

    public void setItemDesc(String itemDesc) {
        this.itemDesc = itemDesc;
    }

    public String getItemPicture() {
        return itemPicture;
    }

    public void setItemPicture(String itemPicture) {
        this.itemPicture = itemPicture;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public String getSize() {
        return size;
    }

    public void setSize(String size) {
        this.size = size;
    }

    public String getSupplierCode() {
        return supplierCode;
    }

    public void setSupplierCode(String supplierCode) {
        this.supplierCode = supplierCode;
    }

    public String getSupplierName() {
        return supplierName;
    }

    public void setSupplierName(String supplierName) {
        this.supplierName = supplierName;
    }

    public double getUnitPriceSale() {
        return unitPriceSale;
    }

    public void setUnitPriceSale(double unitPriceSale) {
        this.unitPriceSale = unitPriceSale;
    }

    public double getUnitPriceBuy() {
        return unitPriceBuy;
    }

    public void setUnitPriceBuy(double unitPriceBuy) {
        this.unitPriceBuy = unitPriceBuy;
    }

    public double getExpectedProfit() {
        return expectedProfit;
    }

    public void setExpectedProfit(double expectedProfit) {
        this.expectedProfit = expectedProfit;
    }

    public double getProfitMargin() {
        return profitMargin;
    }

    public void setProfitMargin(double profitMargin) {
        this.profitMargin = profitMargin;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getQuantity() {
        return quantity;
    }

    public void setQuantity(String quantity) {
        this.quantity = quantity;
    }

    @Override
    public String toString() {
        return "InventoryDTO{" +
                "itemCode='" + itemCode + '\'' +
                ", itemDesc='" + itemDesc + '\'' +
                ", itemPicture='" + itemPicture + '\'' +
                ", category='" + category + '\'' +
                ", size='" + size + '\'' +
                ", quantity='" + quantity + '\'' +
                ", supplierCode='" + supplierCode + '\'' +
                ", supplierName='" + supplierName + '\'' +
                ", unitPriceSale=" + unitPriceSale +
                ", unitPriceBuy=" + unitPriceBuy +
                ", expectedProfit=" + expectedProfit +
                ", profitMargin=" + profitMargin +
                ", status='" + status + '\'' +
                '}';
    }
}
