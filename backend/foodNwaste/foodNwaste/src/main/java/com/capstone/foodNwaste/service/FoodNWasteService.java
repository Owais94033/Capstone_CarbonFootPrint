package com.capstone.foodNwaste.service;

import com.capstone.foodNwaste.model.FoodNWaste;
import com.capstone.foodNwaste.repository.FoodNWasteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Service
public class FoodNWasteService {
    @Autowired
    FoodNWasteRepository foodNWasteRepository;

    // Fetch all records
    public List<FoodNWaste> getAllFoodNWaste() {
        return foodNWasteRepository.findAll();
    }

    // Fetch records by userId and date
    public FoodNWaste getFoodNWasteByUserIdAndDate(Long userId, LocalDate date) {
        return foodNWasteRepository.findByUserIdAndDate(userId, date);
    }

    // Fetch a record by ID
    public Optional<FoodNWaste> getFoodNWasteById(Long id) {
        return foodNWasteRepository.findById(id);
    }

    // Create a new record
    public FoodNWaste createFoodNWaste(FoodNWaste foodNWaste) {
        return foodNWasteRepository.save(foodNWaste);
    }

    // Update an existing record
    public FoodNWaste updateFoodNWaste(Long id, FoodNWaste foodNWasteDetails) {
        FoodNWaste foodNWaste = foodNWasteRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("FoodNWaste not found with id " + id));

        foodNWaste.setAmountSpent(foodNWasteDetails.getAmountSpent());
        foodNWaste.setFoodType(foodNWasteDetails.getFoodType());
        foodNWaste.setWaterUsage(foodNWasteDetails.getWaterUsage());
        foodNWaste.setDate(foodNWasteDetails.getDate());

        return foodNWasteRepository.save(foodNWaste);
    }


    // Delete a record
    public void deleteFoodNWaste(Long id) {
        FoodNWaste foodNWaste = foodNWasteRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("FoodNWaste not found with id " + id));
        foodNWasteRepository.delete(foodNWaste);
    }
}
