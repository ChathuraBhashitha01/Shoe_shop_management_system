package lk.ijse.gdse.springboot.back_end.advice;

import lk.ijse.gdse.springboot.back_end.service.exception.DuplicateRecordException;
import lk.ijse.gdse.springboot.back_end.service.exception.IncorrectPasswordException;
import lk.ijse.gdse.springboot.back_end.service.exception.NotFoundException;
import lk.ijse.gdse.springboot.back_end.service.exception.ServiceException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.util.LinkedHashMap;
import java.util.Map;

@RestControllerAdvice
public class GlobalExceptionHandler {
    @ExceptionHandler(ServiceException.class)
    public ResponseEntity<Map<String,Object>> handleServiceException(ServiceException exp){
        Map<String,Object> commonErrorAttribute;
        if (exp instanceof DuplicateRecordException){
            commonErrorAttribute = getCommonErrorAttribute(HttpStatus.CONFLICT);
        }
        else if (exp instanceof NotFoundException){
            commonErrorAttribute = getCommonErrorAttribute(HttpStatus.NOT_FOUND);
        }
        else if (exp instanceof IncorrectPasswordException){
            commonErrorAttribute = getCommonErrorAttribute(HttpStatus.UNAUTHORIZED);
        }
        else {
            commonErrorAttribute=getCommonErrorAttribute(HttpStatus.INTERNAL_SERVER_ERROR);
        }
        commonErrorAttribute.put("message",exp.getMessage());
        return new ResponseEntity<>(commonErrorAttribute,HttpStatus.valueOf((Integer) commonErrorAttribute.get("code")));
    }

    private Map<String, Object> getCommonErrorAttribute(HttpStatus status) {
        LinkedHashMap<String, Object> errAttribute = new LinkedHashMap<>();
        errAttribute.put("code",status.value());
        errAttribute.put("status",status);
        return errAttribute;
    }
}
