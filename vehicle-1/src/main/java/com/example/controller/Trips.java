package com.example.controller;

import com.example.dto.Booking;
import com.example.dto.Trip;
import com.example.payloads.ApiResponse;
import com.example.service.TripService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping("/trip")
public class Trips {

	@Autowired
	TripService tripService;

	@PostMapping("/startTrip")
	public ResponseEntity<?> startTrip(@Valid @RequestBody Trip trip) {
		return ResponseEntity.ok(tripService.startTrip(trip));
	}

	@PostMapping("/endTrip")
	public ResponseEntity<?> endTrip(@Valid @RequestBody Trip trip) {
		return ResponseEntity.ok(tripService.endTrip(trip));
	}

	@GetMapping("/getTrips")
	public ResponseEntity<?> getTrips() {
		return ResponseEntity.ok(tripService.getTrips());
	}
}
