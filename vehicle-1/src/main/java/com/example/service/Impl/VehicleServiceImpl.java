package com.example.service.Impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.dao.VehicleDao;
import com.example.dto.Vehicle;
import com.example.service.VehicleService;

@Service
public class VehicleServiceImpl implements VehicleService {

	@Autowired
	VehicleDao vehicleDao;

	/*@Override
	public boolean existsByVehicleNo(String vehicleNo) {
		return vehicleDao.existsByVehicleNo(vehicleNo);
	}*/
	@Override
	public boolean existsByVehicleNo(String vehicleNo) {
		return vehicleDao.existsByVehicleNo(vehicleNo);
	}

	@Override
	public Vehicle saveVehicle(Vehicle vehicle) {
		return vehicleDao.save(vehicle);
	}

	@Override
	public List<Vehicle> getVehicles() {
		return vehicleDao.findAll();
	}
}
