import { Component, OnInit } from '@angular/core';
import { Leaderboard } from '../Leaderboard';
import { LeaderboardService } from '../leaderboard.service';

interface UserProfile {
  fullName: string;
  role: string;
  co2e: string;
  avatar: string;  // URL or path to the avatar image
}

@Component({
  selector: 'app-userinfo',
  standalone: true,
  imports: [],
  templateUrl: './userinfo.component.html',
  styleUrl: './userinfo.component.css'
})
export class UserinfoComponent implements OnInit {

  weakPrint: number = 0;

  leaderboard : Leaderboard={
    userId : 0 ,
        name :'' ,
        score : 0,
  };

  userProfile: UserProfile = {
    fullName: '',
    role: '',
    co2e: '',
    avatar: ''
  };

  constructor(private leader: LeaderboardService) { }


    
  
  ngOnInit(): void {
    let userString = localStorage.getItem('user');
    let uid;

    if(userString!=null){
      uid = JSON.parse(userString).id;
    }
    this.loadUserProfile();
    this.leader.getLeaderBoardById(uid).subscribe({
      next:(data)=>{
        if(data!=null){
          this.leaderboard= data;
        }
      },
      error: (err)=>{
        console.log(err);
      }
    })
  }


  loadUserProfile(): void {
    const user = JSON.parse(localStorage.getItem("user") || '{}');
    

    this.userProfile = {
      fullName: user.firstName+ " "+ user.lastName,
      role: user.role,
      co2e: 'Your Total CO2e',
      avatar: 'background.jpg'
    };
    
  }
}
