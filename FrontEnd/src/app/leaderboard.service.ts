import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Leaderboard } from './Leaderboard';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LeaderboardService {

  constructor(private http: HttpClient,private auth: AuthService) { }

  url: string = "http://localhost:9999"
  
  addtoLeaderBoard():Observable<Leaderboard> {
    return this.http.post<Leaderboard>(`${this.url}/api/leaderboard`,{headers : this.auth.getAuthHeader()});
  }

  getLeaderBoard(): Observable<Leaderboard[]> {
    return this.http.get<Leaderboard[]>(`${this.url}/api/leaderboard`,{headers : this.auth.getAuthHeader()});
  }
 
  getLeaderBoardById(id:any): Observable<Leaderboard> {
    return this.http.get<Leaderboard>(`${this.url}/api/leaderboard/${id}`,{headers : this.auth.getAuthHeader()});
  }

  setLeaderBoardById(id:any,carbonfootprint:any): Observable<Leaderboard>{
    return this.http.put<Leaderboard>(`${this.url}/api/leaderboard/${id}/${carbonfootprint}`,null,{headers : this.auth.getAuthHeader()});
  }



}
