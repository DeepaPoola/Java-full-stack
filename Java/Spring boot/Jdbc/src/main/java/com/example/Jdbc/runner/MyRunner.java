package com.example.Jdbc.runner;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import com.example.Jdbc.dao.impl.TestDaoImpl;
@Component
public class MyRunner implements CommandLineRunner {

	@Autowired
	TestDaoImpl td;
	
	@Override
	public void run(String... args) throws Exception {
		// TODO Auto-generated method stub
         td.insertRecords();
         List data=td.selectRecords();
         data.forEach(d->System.out.println(d));
         
         
	}

}
