package com.mvc.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.ui.Model;

@Controller
public class HelloController {

	@GetMapping("/hello")
	public ModelAndView getData() {
		return new ModelAndView("welcome");
	}
	@GetMapping("/info")
	public String info(Model m) 
	{
		m.addAttribute("msg","Hello world");
		return "home";
	}
	/*public String info() {
		
		 return "home";
	}*/
}
