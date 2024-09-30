import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { Gadget } from './models/Gadgets';

@Injectable({
  providedIn: 'root'
})
export class GadgetService {

  constructor(private http : HttpClient , private auth : AuthService) { }

  url: string = "http://localhost:9999"

  storeGadgets(form:any) : Observable<any>{
    let gadgets   = {
      userId : JSON.parse(localStorage.getItem("user") || '{}').id,
      date : JSON.parse(localStorage.getItem("pickedDateAlt") || '{}'),
      mobileName : form.mobileName,
      mobileUsageTime: form.mobileUsageTime,
      laptopName: form.laptopName,
      laptopUsageTime: form.laptopUsageTime,

    }
    return this.http.post(`${this.url}/api/gadgets`,gadgets,{headers : this.auth.getAuthHeader()})
  }

  getGadgets(uid: string, date : string): Observable<Gadget> {
    return this.http.get<Gadget>(`${this.url}/api/gadgets/${uid}/${date}`,{headers : this.auth.getAuthHeader()});
  }

}
