package com.capstone.gadgets.controller;

import com.capstone.gadgets.model.Gadget;
import com.capstone.gadgets.service.GadgetService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;

import java.util.List;


@RestController
@RequestMapping("/api/gadgets")
public class GadgetController {
    @Autowired
    private GadgetService gadgetService;

    @GetMapping
    public List<Gadget> getAllGadgets() {
        return gadgetService.getAllGadgets();
    }

    @GetMapping("/{userId}/{date}")
    public List<Gadget> getGadgetByUserIdAndDate(@PathVariable Long userId, @PathVariable String date) {
        return gadgetService.getGadgetsByUserIdAndDate(userId, LocalDate.parse(date));
    }

    @PostMapping
    public Gadget createGadget(@RequestBody Gadget gadget) {
        return gadgetService.createGadget(gadget);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Gadget> updateGadget(@PathVariable Long id, @RequestBody Gadget gadgetDetails) {
        Gadget updatedGadget = gadgetService.updateGadget(id, gadgetDetails);
        return ResponseEntity.ok(updatedGadget);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteGadget(@PathVariable Long id) {
        gadgetService.deleteGadget(id);
        return ResponseEntity.noContent().build();
    }
}
