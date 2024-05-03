package lk.ijse.gdse.springboot.back_end.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lk.ijse.gdse.springboot.back_end.util.Gender;
import lk.ijse.gdse.springboot.back_end.util.Role;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "employee")
public class Employee {

    @Id
    private String employeeCode;
    private String employeeName;
    private String employeePicture;
    private Gender gender;
    private String status;
    private String designation;
    private Role accessRole;
    private Date dob;
    private  Date dateOfJoin;
    private String attachedBranch;
    private String addressLine01;
    private String addressLine02;
    private String addressLine03;
    private String addressLine04;
    private String addressLine05;
    private String contactNo;
    private String email;
    private String informInCaseOfEmergency;
    private String emergencyContact;
}
