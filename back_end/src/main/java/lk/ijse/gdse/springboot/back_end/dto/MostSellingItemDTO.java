package lk.ijse.gdse.springboot.back_end.dto;

import lk.ijse.gdse.springboot.back_end.entity.Inventory;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class MostSellingItemDTO {
    private Inventory inventory;
    private Long totalQty;
}
