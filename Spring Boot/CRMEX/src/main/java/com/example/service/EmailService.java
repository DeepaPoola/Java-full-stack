package com.example.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;

public class EmailService {
	@Autowired
	JavaMailSender mailSender;
	
	public void sendEmailtoUser(String mailid, String name) {
			SimpleMailMessage mailMessage = new SimpleMailMessage();
			mailMessage.setTo(mailid);
			mailMessage.setSubject("Customer Registration from Pro Stack");
			mailMessage.setText("Hello," + name+", Thank you Register! Welcome");
			mailSender.send(mailMessage);
	}

}
