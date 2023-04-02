package com.example.demo.runner;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import com.example.demo.beans.HelloBean;
import com.example.demo.beans.Test;

@Component
public class MyRunner implements CommandLineRunner {

	@Autowired
	HelloBean hb;
	@Autowired
	Test t;
	@Override
	public void run(String... args) throws Exception {
		System.out.println("Hello,Good Evening");
		hb.sayHello();
		t.m1();
		t.m2();
		
	}
}
