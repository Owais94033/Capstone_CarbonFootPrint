import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GadgetService } from '../../gadget.service';
import { LeaderboardService } from '../../leaderboard.service';
import { Gadget } from '../../models/Gadgets';

@Component({
  selector: 'app-gadgetform',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,FormsModule],
  templateUrl: './gadgetform.component.html',
  styleUrl: './gadgetform.component.css'
})
export class GadgetformComponent implements OnInit {
  @Output() formStageEvent: EventEmitter<any> =  new EventEmitter();
  disableForm: boolean  = false;
  gadgetForm :FormGroup;
  gadgetPastData: Gadget={
    userId: 0,
        date: '',
        mobileName: '',
        mobileUsageTime: 0,
        laptopName: '',
        laptopUsageTime: 0

  }

  constructor(private fb : FormBuilder,private gadget:GadgetService,private leader:LeaderboardService){
    this.gadgetForm = this.fb.group({
      mobileName: [''],  // amount spent must be a positive number
      mobileUsageTime: [''],  // required select field for food type
      laptopName: [''],
      laptopUsageTime: [''],

    });
  }
  ngOnInit(): void {
    let PickedDate = localStorage.getItem('pickedDate');
    let userString = localStorage.getItem('user');
    let uid;

    if(userString!=null){
      uid = JSON.parse(userString).id;
    }
    if(PickedDate!=null){
      this.gadget.getGadgets(uid,PickedDate).subscribe({
        next:(data)=>{
          if(data!=null){
            this.disableForm=true;
            this.gadgetPastData=data;
            console.log(this.gadgetPastData);
          }
        },
        error:(err)=>{
          console.log(err);
        }
      })
    }
  }

  handleSubmit(){
    const { mobileUsageTime, laptopUsageTime } = this.gadgetForm.value;
    let carbonfootprint = (mobileUsageTime*0.01*0.475)+(laptopUsageTime*0.04*0.475)
    let total = localStorage.getItem('carbonfootprint')
    if(total!=null){
    let totalCarbonFootprint: number = parseFloat(total);
    totalCarbonFootprint=totalCarbonFootprint+carbonfootprint;
    localStorage.setItem('carbonfootprint',JSON.stringify(totalCarbonFootprint));
    console.log(localStorage.getItem('carbonfootprint'));

    let userString = localStorage.getItem('user');
    let uid;
    if(userString!=null){
      uid = JSON.parse(userString).id;
    }


    this.leader.setLeaderBoardById(uid,totalCarbonFootprint).subscribe({
      next:(data)=>{
        if(data!=null){
          console.log(data);
        }
      },
      error:(err)=>{
        console.log(err);
      }
    })

    
    this.gadget.storeGadgets(this.gadgetForm.value).subscribe({
      next:(data)=>{
        console.log(data);
        alert("Successfully submitted data");
        this.formStageEvent.emit(1);
      },
      error: (err)=>{
        alert("Error submitting data");
        console.error(err);
      }
    })
    // this.viewChangeEventEmitter.emit(1);
  }}

  renderNextForm(){
    this.formStageEvent.emit(1);
  }
}



