package com.capstone.travel.repository;

import com.capstone.travel.model.Travel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;

@Repository
public interface TravelRepository extends JpaRepository<Travel , Long> {

    List<Travel> findByUserIdAndDate(Long userId, LocalDate date);

}
