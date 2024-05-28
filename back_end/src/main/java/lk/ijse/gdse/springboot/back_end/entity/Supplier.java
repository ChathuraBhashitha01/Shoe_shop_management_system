package lk.ijse.gdse.springboot.back_end.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "supplier")
public class Supplier {

    @Id
    private String supplierCode;
    private String supplierName;
    private String category;
    private String addressLine01;
    private String addressLine02;
    private String addressLine03;
    private String addressLine04;
    private String addressLine05;
    private String addressLine06;
    private String contactNo1;
    private String contactNo2;
    private String email;
}
