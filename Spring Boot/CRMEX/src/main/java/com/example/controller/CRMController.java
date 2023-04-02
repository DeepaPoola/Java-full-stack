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
	public String registerCustomer(@ModelAttribute("custBean") CustomerBean customerBean) {
		System.out.println(customerBean.getFirstName());
		System.out.println(customerBean.getEmail());
		System.out.println(customerBean.getMobile());
		System.out.println(customerBean.getPassword());
		boolean flag = regDao.saveCustomer(customerBean);
		System.out.println(flag);
		
		if(flag == true) {
			//send email to customer
			emailService.sendEmailtoUser(customerBean.getEmail(),customerBean.getFirstName());
		}
		return "success";
	}
 
}
