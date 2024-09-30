import { Component } from '@angular/core';
import { AidivComponent } from '../aidiv/aidiv.component';
import { LeaderboardComponent } from '../leaderboard/leaderboard.component';
import { UserinfoComponent } from '../userinfo/userinfo.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [UserinfoComponent,AidivComponent,LeaderboardComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
