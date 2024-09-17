package com.capstone.foodNwaste.repository;

import com.capstone.foodNwaste.model.FoodNWaste;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;

@Repository
public interface FoodNWasteRepository extends JpaRepository<FoodNWaste , Long> {

    List<FoodNWaste> findByUserIdAndDate(Long userId, LocalDate date);

}
