import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { Travel } from './models/Travel';

@Injectable({
  providedIn: 'root'
})
export class TravelService {

  constructor(private http : HttpClient , private auth : AuthService) { 
  
  }

  url: string = "http://localhost:9999"

  storeTravel(form:any) : Observable<any>{
    let travel   = {
      userId : JSON.parse(localStorage.getItem("user") || '{}').id,
      date : JSON.parse(localStorage.getItem("pickedDateAlt") || '{}'),
      mode : form.mode,
      distanceTravelled: form.distanceTravelled,
      mileage: form.mileage,
      fuelType:form.fuelType
    }
    return this.http.post(`${this.url}/api/travel`,travel,{headers : this.auth.getAuthHeader()})
  }

  getTravel(uid: string, date : string): Observable<Travel> {
    return this.http.get<Travel>(`${this.url}/api/travel/${uid}/${date}`,{headers : this.auth.getAuthHeader()});
  }
  
  
}
