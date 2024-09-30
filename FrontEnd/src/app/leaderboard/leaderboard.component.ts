import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Leaderboard } from '../Leaderboard';
import { LeaderboardService } from '../leaderboard.service';

@Component({
  selector: 'app-leaderboard',
  standalone:true,
  imports:[NgFor],
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})
export class LeaderboardComponent implements OnInit {
  leaderboard : Leaderboard[]=[{
    userId : 0 ,
        name :'' ,
        score : 0,
  }];

  topThreeUsers : Leaderboard[]=[{
    userId : 0 ,
        name :'' ,
        score : 0,
  }];


  constructor(private leader: LeaderboardService) { }

  ngOnInit(): void {
    this.leader.getLeaderBoard().subscribe({
      next:(data)=>{
        if(data!=null){
          this.leaderboard= data;
          this.topThreeUsers = this.getTopThreeUsers(this.leaderboard);
          console.log(this.topThreeUsers);
        }
      },
      error: (err)=>{
        console.log(err);
      }
    })
  }


getTopThreeUsers = (array: Leaderboard[]): Leaderboard[] => {
    return array
      .sort((a, b) => a.score - b.score) 
      .slice(0, 3);
  };

}
