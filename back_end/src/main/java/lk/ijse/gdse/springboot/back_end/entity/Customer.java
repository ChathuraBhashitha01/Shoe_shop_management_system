package lk.ijse.gdse.springboot.back_end.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lk.ijse.gdse.springboot.back_end.util.Gender;
import lk.ijse.gdse.springboot.back_end.util.Level;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Date;
import java.sql.Timestamp;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "customer")
public class Customer {

    @Id
    private String customerCode;
    private String customerName;
    private Gender gender;
    private Date JoinDate;
    private Level level;
    private int TotalPoint;
    private Date dob;
    private String addressLine01;
    private String addressLine02;
    private String addressLine03;
    private String addressLine04;
    private String addressLine05;
    private String contactNo;
    private String email;
    private Timestamp RecentPurchaseDate;
}
