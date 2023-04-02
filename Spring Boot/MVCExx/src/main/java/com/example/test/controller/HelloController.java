package com.example.test.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class HelloController {
   
	@GetMapping("/hello")
	public ModelAndView getData() {
		return new ModelAndView("welcome");
	}
	@GetMapping("/info")
	public String info(Model m) {
		 m.addAttribute("msg","Hello world");
		 return "home";
	}
	public String info() {
		
		 return "home";
	}
	
}
