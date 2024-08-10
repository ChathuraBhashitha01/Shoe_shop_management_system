package lk.ijse.gdse.springboot.back_end.service;

public interface EmailService {
    boolean sendSimpleMessage(String to, String subject, String text);
    boolean sendBirthdayEmails();
}
