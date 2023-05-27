package com.example.demo.runner;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import com.example.demo.beans.HelloBean;

@Component
public class MyRunner implements CommandLineRunner {
  
	@Autowired
	HelloBean hb;
	
	@Override
	public void run(String... args) throws Exception {
		// TODO Auto-generated method stub
		System.out.println("Hello Runner method");
		hb.sayHello();
	}

}
