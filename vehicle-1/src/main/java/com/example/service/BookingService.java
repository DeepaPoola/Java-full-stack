package com.example.service;

import java.util.List;

import com.example.dto.Booking;

public interface BookingService {

	Booking saveBooking(Booking booking);

	boolean existsBooking(Long id);

	Booking updateBooking(Booking booking);

	Integer getDriverAllocationStatus(Long driverId, String tripDate);

	Integer getVehicleAllocationStatus(Long vehicleId, String tripDate);

	List<Booking> getBookings();

	List<Booking> getBookingsByDriverId(Long driverId);
}
