package com.capstone.leaderboard.controller;


import com.capstone.leaderboard.model.Leaderboard;
import com.capstone.leaderboard.service.LeaderboardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/leaderboard")

public class LeaderboardController {
    @Autowired
    private LeaderboardService leaderboardService;

    // Get all leaderboard entries
    @GetMapping
    public List<Leaderboard> getAllLeaderboardEntries() {
        return leaderboardService.getAllLeaderboardEntries();
    }

    // Get a specific leaderboard entry by ID
    @GetMapping("/{id}")
    public Leaderboard getLeaderboardEntryById(@PathVariable Long id) {
        Leaderboard leaderboardEntry = leaderboardService.getLeaderboardEntryById(id);
        return leaderboardEntry;
    }

    // Create a new leaderboard entry
    @PostMapping
    public Leaderboard createLeaderboardEntry(@RequestBody Leaderboard leaderboard) {
        return leaderboardService.saveLeaderboardEntry(leaderboard);
    }

    // Update an existing leaderboard entry
    @PutMapping("/{id}/{Carbon}")
    public Leaderboard updateLeaderboardEntry(@PathVariable Long id, @PathVariable double Carbon) {
        Leaderboard updatedLeaderboard = leaderboardService.updateLeaderboardEntry(id, Carbon);
            return updatedLeaderboard;
    }

    // Delete a leaderboard entry
    @DeleteMapping("/{id}")
    public void deleteLeaderboardEntry(@PathVariable Long id) {
        leaderboardService.deleteLeaderboardEntry(id);

    }



}
