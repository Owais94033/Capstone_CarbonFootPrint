package com.capstone.foodNwaste.controller;

import com.capstone.foodNwaste.model.FoodNWaste;
import com.capstone.foodNwaste.service.FoodNWasteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;


@RestController
@RequestMapping("/api/foodnwaste")
public class FoodNWasteController {

    @Autowired
    private FoodNWasteService foodNWasteService;

    // Get all records
    @GetMapping
    public List<FoodNWaste> getAllFoodNWaste() {
        return foodNWasteService.getAllFoodNWaste();
    }

    // Get records by userId and date
    @GetMapping("/{userId}/{date}")
    public List<FoodNWaste> getFoodNWasteByUserIdAndDate(@PathVariable Long userId, @PathVariable String date) {
        return foodNWasteService.getFoodNWasteByUserIdAndDate(userId, LocalDate.parse(date));
    }

    // Create a new record
    @PostMapping
    public FoodNWaste createFoodNWaste(@RequestBody FoodNWaste foodNWaste) {
        return foodNWasteService.createFoodNWaste(foodNWaste);
    }

    // Update an existing record
    @PutMapping("/{id}")
    public ResponseEntity<FoodNWaste> updateFoodNWaste(@PathVariable Long id, @RequestBody FoodNWaste foodNWasteDetails) {
        FoodNWaste updatedFoodNWaste = foodNWasteService.updateFoodNWaste(id, foodNWasteDetails);
        return ResponseEntity.ok(updatedFoodNWaste);
    }

    // Delete a record
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteFoodNWaste(@PathVariable Long id) {
        foodNWasteService.deleteFoodNWaste(id);
        return ResponseEntity.noContent().build();
    }

}
