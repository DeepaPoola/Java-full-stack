package com.example.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

import com.example.dao.RegistrationDaoImpl;
import com.example.model.CustomerBean;
import com.example.service.EmailService;

@Controller
public class CRMController {
	
	@Autowired
	RegistrationDaoImpl regDao;
	
	@Autowired
	EmailService emailService;
	
	@GetMapping("/index")
	public String getIndexPage() {
		return "index";
	}
	@GetMapping("/register")
	public String getRegistrationPage(Model model) {
		CustomerBean customerBean = new CustomerBean();
		model.addAttribute("custBean", customerBean);
		//database business login
		return "registration";
	}
	@PostMapping("/save")
	public String RegisterCustomer(@ModelAttribute("custBean") CustomerBean customerBean) {
		System.out.println(customerBean.getFirstName());
		boolean flag = regDao.saveCustomer(customerBean);
		System.out.print(flag);
		
		if(flag == true) {
			//send email to user
			emailService.sendEmailtoUser(customerBean.getEmail(),customerBean.getFirstName());
		}
		return "success";
	}
	@GetMapping("/login")
	public String getLoginPage(Model model) {
		CustomerBean customerBean = new CustomerBean();
		model.addAttribute("custBean", customerBean);
		//database business login
		return "login";
	}
	
}
