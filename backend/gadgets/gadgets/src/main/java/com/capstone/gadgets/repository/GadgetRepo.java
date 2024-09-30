package com.capstone.gadgets.repository;

import com.capstone.gadgets.model.Gadget;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;

@Repository
public interface GadgetRepo extends JpaRepository<Gadget , Long> {

    Gadget findByUserIdAndDate(Long userId, LocalDate date);

}
