package lk.ijse.gdse.springboot.back_end.service.impl;

import lk.ijse.gdse.springboot.back_end.dto.EmployeeDTO;
import lk.ijse.gdse.springboot.back_end.entity.Employee;
import lk.ijse.gdse.springboot.back_end.repository.EmployeeRepo;
import lk.ijse.gdse.springboot.back_end.service.EmployeeService;
import lk.ijse.gdse.springboot.back_end.service.exception.DuplicateRecordException;
import lk.ijse.gdse.springboot.back_end.service.exception.NotFoundException;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmployeeServiceImpl implements EmployeeService {

    private ModelMapper modelMapper;
    private EmployeeRepo employeeRepo;

    public EmployeeServiceImpl(ModelMapper modelMapper, EmployeeRepo employeeRepo) {
        this.modelMapper = modelMapper;
        this.employeeRepo = employeeRepo;
    }

    @Override
    public List<EmployeeDTO> getAllEmployee() {
        return employeeRepo.findAll().stream().map(employee -> modelMapper.map(employee, EmployeeDTO.class)).toList();
    }

    @Override
    public EmployeeDTO getEmployeeDetails(String id) {
        if (!employeeRepo.existsById(id)){
            throw new NotFoundException("Employee Id does not exists!");
        }
        return modelMapper.map(employeeRepo.findById(id).get(),EmployeeDTO.class);
    }

    @Override
    public void saveEmployee(EmployeeDTO employeeDTO) {
        if (employeeRepo.existsById(employeeDTO.getEmployeeCode())){
            throw new DuplicateRecordException("Employee Id is already exists!");
        }
        employeeRepo.save(modelMapper.map(employeeDTO, Employee.class));
    }

    @Override
    public void updateEmployee(EmployeeDTO employeeDTO) {
        if (!employeeRepo.existsById(employeeDTO.getEmployeeCode())){
            throw new NotFoundException("Employee Id does not exists!");
        }
        employeeRepo.save(modelMapper.map(employeeDTO, Employee.class));
    }

    @Override
    public void deleteEmployee(String id) {
        if (!employeeRepo.existsById(id)){
            throw new NotFoundException("Employee Id does not exists!");
        }
        employeeRepo.deleteById(id);
    }
}
