package com.capstone.gadgets.service;

import com.capstone.gadgets.model.Gadget;
import com.capstone.gadgets.repository.GadgetRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.time.LocalDate;
import java.util.List;

@Service
public class GadgetService {

    @Autowired
    private GadgetRepo gadgetRepository;

    // Fetch all gadgets
    public List<Gadget> getAllGadgets() {
        return gadgetRepository.findAll();
    }

    // Fetch gadget by userId and date
    public Gadget getGadgetsByUserIdAndDate(Long userId, LocalDate date) {
        return gadgetRepository.findByUserIdAndDate(userId, date);
    }

    // Create a new gadget
    public Gadget createGadget(Gadget gadget) {
        return gadgetRepository.save(gadget);
    }

    // Update an existing gadget
    public Gadget updateGadget(Long id, Gadget gadgetDetails) {
        Gadget gadget = gadgetRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Gadget not found with id " + id));

        gadget.setMobileName(gadgetDetails.getMobileName());
        gadget.setMobileUsageTime(gadgetDetails.getMobileUsageTime());
        gadget.setLaptopName(gadgetDetails.getLaptopName());
        gadget.setLaptopUsageTime(gadgetDetails.getLaptopUsageTime());
        gadget.setDate(gadgetDetails.getDate());

        return gadgetRepository.save(gadget);
    }

    // Delete a gadget
    public void deleteGadget(Long id) {
        Gadget gadget = gadgetRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Gadget not found with id " + id));
        gadgetRepository.delete(gadget);
    }







}
