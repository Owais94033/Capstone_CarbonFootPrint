package com.capstone.travel.controller;

import com.capstone.travel.model.Travel;
import com.capstone.travel.service.TravelService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;


@RestController
@RequestMapping("/api/travel")
public class TravelController {
    @Autowired
    private TravelService travelService;

    // Get all travel records
    @GetMapping
    public List<Travel> getAllTravels() {
        return travelService.getAllTravels();
    }

    // Get travel records by userId and date
    @GetMapping("/{userId}/{date}")
    public List<Travel> getTravelsByUserIdAndDate(@PathVariable Long userId, @PathVariable String date) {
        return travelService.getTravelsByUserIdAndDate(userId, LocalDate.parse(date));
    }

    // Create a new travel record
    @PostMapping
    public Travel createTravel(@RequestBody Travel travel) {
        return travelService.createTravel(travel);
    }

    // Update an existing travel record
    @PutMapping("/{id}")
    public ResponseEntity<Travel> updateTravel(@PathVariable Long id, @RequestBody Travel travelDetails) {
        Travel updatedTravel = travelService.updateTravel(id, travelDetails);
        return ResponseEntity.ok(updatedTravel);
    }

    // Delete a travel record
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteTravel(@PathVariable Long id) {
        travelService.deleteTravel(id);
        return ResponseEntity.noContent().build();
    }
}
