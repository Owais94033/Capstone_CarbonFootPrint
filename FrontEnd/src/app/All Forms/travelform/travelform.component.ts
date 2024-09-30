import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Leaderboard } from '../../Leaderboard';
import { LeaderboardService } from '../../leaderboard.service';
import { Travel } from '../../models/Travel';
import { TravelService } from '../../travel.service';

@Component({
  selector: 'app-travelform',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './travelform.component.html',
  styleUrl: './travelform.component.css'
})
export class TravelformComponent implements OnInit{
  @Output() viewChangeEventEmitter : EventEmitter<any> = new EventEmitter();

  initialCO = 0;

  disableForm : boolean = false;
  travelForm :FormGroup;
  travelOldData: Travel ={
    userId: 0,                
    mode: '',                  
    distanceTravelled: 0,     
    mileage: 0,               
    fuelType: '',            
    date: '' 
  }

  leader :Leaderboard = {
    userId: 0,
    name: 'string',
    score: 0
  }



  constructor(private fb : FormBuilder,private travel: TravelService,private leaderboard: LeaderboardService){
    this.travelForm = this.fb.group({
      mode: [''],
      distanceTravelled: [''], 
      mileage: [''],
      fuelType: ['']
    });
  }

  renderNextForm(){
    this.viewChangeEventEmitter.emit(1);
  }
  
  ngOnInit(): void {
    let pickedDate = localStorage.getItem('pickedDate');
    let userString = localStorage.getItem('user');
    let uid;

    if(userString!=null){
      uid = JSON.parse(userString).id;
    }
    if(pickedDate!=null){
      this.travel.getTravel(uid,pickedDate).subscribe({
        next:(data)=>{
          if(data!=null){
            this.disableForm = true;
            this.travelOldData = data;
          }
        },
        error: (err)=>{
          console.log(err);
        }
      })
    }
  }



  fetchLeaderById(){
    let score = null;
    let userString = localStorage.getItem('user');
    let uid;

    if(userString!=null){
      uid = JSON.parse(userString).id;
    }

    this.leaderboard.getLeaderBoardById(uid).subscribe({
      next:(data)=>{
        if(data!=null){
          this.leader=data;
          score = this.leader.score;
          
        
        }
      },
      error: (err)=>{
        console.log(err);
  
      }
    })
    return score;
  }




  handleSubmit(){
    const { mode, distanceTravelled,fuelType,mileage } = this.travelForm.value;
    let fuelconsumption = distanceTravelled/mileage;
    let carbonfootprint:number|null= this.fetchLeaderById();
    
    console.log(carbonfootprint);
   
    if(fuelType=='Petrol'){
     carbonfootprint =  fuelconsumption*2.31;
    }
    if(fuelType=='Diesel'){
      carbonfootprint=fuelconsumption*2.68;
      }

    localStorage.setItem('carbonfootprint',JSON.stringify(carbonfootprint));
    console.log(localStorage.getItem('carbonfootprint'));
    this.travel.storeTravel(this.travelForm.value).subscribe(data => {console.log(data)})
    this.viewChangeEventEmitter.emit(1);
    
  }
}
