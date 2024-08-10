package lk.ijse.gdse.springboot.back_end.repository;

import lk.ijse.gdse.springboot.back_end.entity.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.sql.Timestamp;
import java.util.List;

public interface CustomerRepo extends JpaRepository<Customer,String> {
   Customer findByCustomerCode(String code);
   Customer findCustomerByContactNo(String contactNo);
   @Query("SELECT c FROM Customer c WHERE FUNCTION('MONTH', c.dob) = :month AND FUNCTION('DAY', c.dob) = :day")
   List<Customer> findByMonthAndDay(@Param("month") int month, @Param("day") int day);
}
