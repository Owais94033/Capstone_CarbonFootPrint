package com.capstone.travel.service;

import com.capstone.travel.model.Travel;
import com.capstone.travel.repository.TravelRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Service
public class TravelService {

    @Autowired
    private TravelRepository travelRepository;

    // Fetch all travel records
    public  List<Travel> getAllTravels() {
        return travelRepository.findAll();

    }

    // Fetch travel records by userId and date
    public Travel getTravelsByUserIdAndDate(Long userId, LocalDate date) {
        return travelRepository.findByUserIdAndDate(userId, date);
    }

    // Fetch a travel record by ID
    public Optional<Travel> getTravelById(Long id) {
        return travelRepository.findById(id);
    }

    // Create a new travel record
    public Travel createTravel(Travel travel) {
        return travelRepository.save(travel);
    }

    // Update an existing travel record
    public Travel updateTravel(Long id, Travel travelDetails) {
        Travel travel = travelRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Travel not found with id " + id));

        travel.setMode(travelDetails.getMode());
        travel.setDistanceTravelled(travelDetails.getDistanceTravelled());
        travel.setMileage(travelDetails.getMileage());
        travel.setFuelType(travelDetails.getFuelType());
        travel.setDate(travelDetails.getDate());

        return travelRepository.save(travel);
    }

    // Delete a travel record
    public void deleteTravel(Long id) {
        Travel travel = travelRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Travel not found with id " + id));
        travelRepository.delete(travel);
    }

}
