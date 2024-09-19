package com.capstone.leaderboard.service;

import com.capstone.leaderboard.model.Leaderboard;
import com.capstone.leaderboard.repository.LeaderboardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class LeaderboardService {

    @Autowired
    private LeaderboardRepository leaderboardRepository;

    public List<Leaderboard> getAllLeaderboardEntries() {
        return leaderboardRepository.findAll();
    }

    public Optional<Leaderboard> getLeaderboardEntryById(Long id) {
        return leaderboardRepository.findById(id);
    }

    public Leaderboard saveLeaderboardEntry(Leaderboard leaderboard) {
        return leaderboardRepository.save(leaderboard);
    }

    public void deleteLeaderboardEntry(Long id) {
        leaderboardRepository.deleteById(id);
    }

    public Leaderboard updateLeaderboardEntry(Long id, Leaderboard updatedEntry) {
        Optional<Leaderboard> leaderboardEntry = leaderboardRepository.findById(id);
        if (leaderboardEntry.isPresent()) {
            Leaderboard entry = leaderboardEntry.get();
            entry.setName(updatedEntry.getName());
            entry.setScore(updatedEntry.getScore());
            return leaderboardRepository.save(entry);
        }
        return null;
    }
}
