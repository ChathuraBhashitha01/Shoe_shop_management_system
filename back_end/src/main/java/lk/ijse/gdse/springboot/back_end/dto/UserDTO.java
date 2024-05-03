package lk.ijse.gdse.springboot.back_end.dto;

import lk.ijse.gdse.springboot.back_end.util.Role;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserDTO {
    private String email;
    private String password;
    private Role role;
}
