package com.example.service;

import com.example.dto.Trip;

import java.util.List;

public interface TripService {

	Trip startTrip(Trip trip);

	boolean existsTrip(Long id);

	Trip endTrip(Trip trip);

	List<Trip> getTrips();
}