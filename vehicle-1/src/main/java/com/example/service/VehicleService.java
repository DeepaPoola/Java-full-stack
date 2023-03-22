package com.example.service;

import com.example.dto.Vehicle;

import java.util.List;

public interface VehicleService {

	boolean existsByVehicleNo(String vehicleNo);

	Vehicle saveVehicle(Vehicle vehicle);

	List<Vehicle> getVehicles();
}
