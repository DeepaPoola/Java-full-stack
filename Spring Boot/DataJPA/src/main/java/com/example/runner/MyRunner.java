package com.example.runner;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import com.example.entity.Passenger;
import com.example.repository.PassengerRepository;

@Component
public class MyRunner implements CommandLineRunner {
	
	@Autowired
	PassengerRepository  passengerRepo;
	
	@Override
	public void run(String... args) throws Exception {
		// TODO Auto-generated method stub
		Passenger p = new Passenger();
		p.setPassengerId(102);
		p.setFirstName("Deepa");
		p.setLastName("Poola");
		p.setEmailId("deepa@ibm.com");
		
		passengerRepo.save(p);
		
	}

}
