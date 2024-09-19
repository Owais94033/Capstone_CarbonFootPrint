package com.capstone.leaderboard.controller;


import com.capstone.leaderboard.model.Leaderboard;
import com.capstone.leaderboard.service.LeaderboardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/Leaderboard")
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
    public ResponseEntity<Leaderboard> getLeaderboardEntryById(@PathVariable Long id) {
        Optional<Leaderboard> leaderboardEntry = leaderboardService.getLeaderboardEntryById(id);
        return leaderboardEntry.map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    // Create a new leaderboard entry
    @PostMapping
    public Leaderboard createLeaderboardEntry(@RequestBody Leaderboard leaderboard) {
        return leaderboardService.saveLeaderboardEntry(leaderboard);
    }

    // Update an existing leaderboard entry
    @PutMapping("/{id}")
    public ResponseEntity<Leaderboard> updateLeaderboardEntry(@PathVariable Long id, @RequestBody Leaderboard leaderboardDetails) {
        Leaderboard updatedLeaderboard = leaderboardService.updateLeaderboardEntry(id, leaderboardDetails);
        if (updatedLeaderboard != null) {
            return ResponseEntity.ok(updatedLeaderboard);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    // Delete a leaderboard entry
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteLeaderboardEntry(@PathVariable Long id) {
        leaderboardService.deleteLeaderboardEntry(id);
        return ResponseEntity.noContent().build();
    }
}
