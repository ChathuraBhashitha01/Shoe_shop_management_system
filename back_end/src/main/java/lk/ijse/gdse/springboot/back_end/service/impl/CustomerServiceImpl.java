package lk.ijse.gdse.springboot.back_end.service.impl;

import lk.ijse.gdse.springboot.back_end.dto.CustomerDTO;
import lk.ijse.gdse.springboot.back_end.entity.Customer;
import lk.ijse.gdse.springboot.back_end.repository.CustomerRepo;
import lk.ijse.gdse.springboot.back_end.service.CustomerService;
import lk.ijse.gdse.springboot.back_end.service.exception.DuplicateRecordException;
import lk.ijse.gdse.springboot.back_end.service.exception.NotFoundException;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.ModelAttribute;

import java.sql.Timestamp;
import java.util.List;

@Service
public class CustomerServiceImpl implements CustomerService {

    private ModelMapper modelMapper;
    private CustomerRepo customerRepo;

    public CustomerServiceImpl(ModelMapper modelMapper, CustomerRepo customerRepo) {
        this.modelMapper = modelMapper;
        this.customerRepo = customerRepo;
    }

    @Override
    public List<CustomerDTO> getAllCustomers() {
        return customerRepo.findAll().stream().map(customer -> modelMapper.map(customer,CustomerDTO.class)).toList();
    }

    @Override
    public CustomerDTO getCustomerDetails(String id) {
        if (!customerRepo.existsById(id)) {
            throw new NotFoundException("Customer Id: " + id + " does not exist");
        }
        return modelMapper.map(customerRepo.findById(id).get(),CustomerDTO.class);
    }

    @Override
    public void saveCustomer(CustomerDTO customerDTO) {
        if (customerRepo.existsById(customerDTO.getCustomerCode())) {
            throw new DuplicateRecordException("Customer Id: " + customerDTO.getCustomerCode() + " already exist");
        }
         customerRepo.save(modelMapper.map(customerDTO, Customer.class));
    }

    @Override
    public void updateCustomer(CustomerDTO customerDTO) {
        if (!customerRepo.existsById(customerDTO.getCustomerCode())) {
            throw new NotFoundException("Customer Id: " + customerDTO.getCustomerCode() + " does not exist");
        }
        customerRepo.save(modelMapper.map(customerDTO, Customer.class));
    }

    @Override
    public void deleteCustomer(String id) {
        if (!customerRepo.existsById(id)) {
            throw new NotFoundException("Customer Id: " + id + " does not exist");
        }
        customerRepo.deleteById(id);
    }

    @Override
    public CustomerDTO getCustomerByContact(String contact) {
        return modelMapper.map(customerRepo.findCustomerByContactNo(contact),CustomerDTO.class);
    }

}
