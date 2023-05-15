package com.example.demo.runner;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import com.example.demo.beans.HelloBeans;
@Component
public class MyRunner implements CommandLineRunner {

	@Autowired
	HelloBeans hb;
	@Override
	public void run(String... args) throws Exception {
		// TODO Auto-generated method stub
		System.out.println("Hello Runner class");
		hb.sayHello();

	}

}
