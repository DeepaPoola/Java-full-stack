package com.example.demo.beans;

import org.springframework.stereotype.Component;

@Component
public class HelloBean {
   public void sayHello() {
	   System.out.println("Hello Bean method");
   }
}
