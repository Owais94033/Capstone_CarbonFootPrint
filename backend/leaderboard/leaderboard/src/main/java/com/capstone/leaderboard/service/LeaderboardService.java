package com.capstone.leaderboard.service;

import com.capstone.leaderboard.model.Leaderboard;
import com.capstone.leaderboard.repository.LeaderboardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Service
public class LeaderboardService {

    @Autowired
    private LeaderboardRepository leaderboardRepository;

    public List<Leaderboard> getAllLeaderboardEntries() {
        return leaderboardRepository.findAll();
    }

    public Leaderboard getLeaderboardEntryById(Long id) {
        return leaderboardRepository.findById(id).get();
    }

    public Leaderboard saveLeaderboardEntry(Leaderboard leaderboard) {
        return leaderboardRepository.save(leaderboard);
    }

    public void deleteLeaderboardEntry(Long id) {
        leaderboardRepository.deleteById(id);
    }

    public Leaderboard updateLeaderboardEntry(Long id, double Carbon) {
        Leaderboard leaderboardEntry = leaderboardRepository.findById(id).get();
            Leaderboard entry = leaderboardEntry;
            entry.setScore(Carbon);
            return leaderboardRepository.save(entry);
    }



}
