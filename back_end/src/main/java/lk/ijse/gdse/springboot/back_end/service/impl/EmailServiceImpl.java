package lk.ijse.gdse.springboot.back_end.service.impl;

import lk.ijse.gdse.springboot.back_end.entity.Customer;
import lk.ijse.gdse.springboot.back_end.repository.CustomerRepo;
import lk.ijse.gdse.springboot.back_end.service.EmailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.time.LocalDate;
import java.time.ZoneId;
import java.util.Calendar;
import java.util.Date;
import java.util.List;

@Service
public class EmailServiceImpl implements EmailService {

        private JavaMailSender javaMailSender;
        private CustomerRepo customerRepo;

    public EmailServiceImpl(JavaMailSender javaMailSender, CustomerRepo customerRepo) {
        this.javaMailSender = javaMailSender;
        this.customerRepo = customerRepo;
    }

    @Override
        public boolean sendSimpleMessage(String to, String subject, String text) {
            SimpleMailMessage message = new SimpleMailMessage();
            message.setTo(to);
            message.setSubject(subject);
            message.setText(text);
            javaMailSender.send(message);
            return true;
        }


        public boolean sendBirthdayEmails() {
            LocalDate today = LocalDate.now();
            Instant instant = today.atStartOfDay(ZoneId.systemDefault()).toInstant();
            Date date = Date.from(instant);

            Calendar calendar = Calendar.getInstance();
            calendar.setTime(date);

            int month = calendar.get(Calendar.MONTH) + 1;
            int day = calendar.get(Calendar.DAY_OF_MONTH);
            List<Customer> customers = customerRepo.findByMonthAndDay(month,day);

            for (Customer customer : customers) {
                System.out.println(customer.getEmail());
                String subject = "Happy Birthday!";
                String text = String.format("Dear %s,\n\nWe wish you a very happy birthday!\n\nBest Regards,\nHello Shoes Pvt. Ltd", customer.getCustomerName());
                sendSimpleMessage(customer.getEmail(), subject, text);
            }

            return true;
        }






}
