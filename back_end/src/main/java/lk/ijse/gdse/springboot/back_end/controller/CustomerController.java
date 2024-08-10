package lk.ijse.gdse.springboot.back_end.controller;

import lk.ijse.gdse.springboot.back_end.dto.CustomerDTO;
import lk.ijse.gdse.springboot.back_end.service.CustomerService;
import lk.ijse.gdse.springboot.back_end.service.EmailService;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/customers")
@CrossOrigin()
public class CustomerController {

    private CustomerService customerService;
    private EmailService emailService;

    public CustomerController(CustomerService customerService,EmailService emailService) {
        this.customerService = customerService;
        this.emailService = emailService;
    }

    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public List<CustomerDTO> getAllCustomers(){
        return customerService.getAllCustomers();
    }

    @GetMapping(value = "/{id}",produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseStatus(HttpStatus.CREATED)
    public CustomerDTO getCustomerDetails(@PathVariable("id") String id){
        return customerService.getCustomerDetails(id);
    }

    @PostMapping(consumes = MediaType.APPLICATION_JSON_VALUE)
    @ResponseStatus(HttpStatus.CREATED)
    public void saveCustomer(@RequestBody CustomerDTO customerDTO){
        customerService.saveCustomer(customerDTO);
    }

    @PatchMapping(consumes = MediaType.APPLICATION_JSON_VALUE)
    @ResponseStatus(HttpStatus.CREATED)
    public void updateCustomer(@RequestBody CustomerDTO customerDTO){
        customerService.updateCustomer(customerDTO);
    }

    @DeleteMapping(value = "/{id}")
    public void deleteCustomer(@PathVariable("id") String id){
        customerService.deleteCustomer(id);
    }

    @GetMapping(value = "/getCustomerByContact/{contact}")
    public CustomerDTO getCustomerByContact(@PathVariable("contact") String contact){
        return customerService.getCustomerByContact(contact);
    }

    @GetMapping("/sendEmail")
    public boolean sendBirthdayEmail(){
       return emailService.sendBirthdayEmails();
    }
}
