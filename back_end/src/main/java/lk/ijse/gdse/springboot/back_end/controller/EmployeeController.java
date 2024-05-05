package lk.ijse.gdse.springboot.back_end.controller;

import lk.ijse.gdse.springboot.back_end.dto.EmployeeDTO;
import lk.ijse.gdse.springboot.back_end.service.EmployeeService;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.Base64;
import java.util.List;

@RestController
@RequestMapping("/api/v1/employees")
@CrossOrigin
public class EmployeeController {
    private EmployeeService employeeService;

    public EmployeeController(EmployeeService employeeService) {
        this.employeeService = employeeService;
    }

    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public List<EmployeeDTO> getAllEmployees(){
        return employeeService.getAllEmployee();
    }

    @GetMapping(value = "/{id}",produces = MediaType.APPLICATION_JSON_VALUE)
    public EmployeeDTO getEmployeeDetails(@PathVariable("id") String id){
        return employeeService.getEmployeeDetails(id);
    }

    @PostMapping(consumes = MediaType.APPLICATION_JSON_VALUE)
    public void saveEmployee(@RequestBody EmployeeDTO employeeDTO,
                             @RequestPart("employeePicture") String employeePicture){
        String base64ProfilePic = Base64.getEncoder().encodeToString(employeePicture.getBytes());
         EmployeeDTO employeeDTO1 = new EmployeeDTO(employeeDTO.getEmployeeCode(), employeeDTO.getEmployeeName(), base64ProfilePic, employeeDTO.getGender(),
                employeeDTO.getStatus(), employeeDTO.getDesignation(), employeeDTO.getAccessRole(), employeeDTO.getDob(), employeeDTO.getDateOfJoin(),
                employeeDTO.getAttachedBranch(), employeeDTO.getAddressLine01(), employeeDTO.getAddressLine02(), employeeDTO.getAddressLine03(), employeeDTO.getAddressLine04(), employeeDTO.getAddressLine05(),
                employeeDTO.getContactNo(), employeeDTO.getEmail(), employeeDTO.getInformInCaseOfEmergency(), employeeDTO.getEmergencyContact());
        employeeService.saveEmployee(employeeDTO1);
    }

    @PatchMapping(consumes = MediaType.APPLICATION_JSON_VALUE)
    public void updateEmployee(@RequestBody EmployeeDTO employeeDTO){
        employeeService.updateEmployee(employeeDTO);
    }

    @DeleteMapping(value = "/{id}")
    public void deleteEmployee(@PathVariable("id") String id){
        employeeService.deleteEmployee(id);
    }
}
