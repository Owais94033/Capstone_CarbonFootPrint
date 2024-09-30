import { NgFor } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FoodnwasteService } from '../../foodnwaste.service';
import { FoodWaste } from '../../models/FoodNWaste';

@Component({
  selector: 'app-foodform',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,NgFor],
  templateUrl: './foodform.component.html',
  styleUrl: './foodform.component.css'
})
export class FoodformComponent implements OnInit{

  @Output() viewChangeEventEmitter : EventEmitter<any> = new EventEmitter();
  foodForm :FormGroup;
  disableForm : boolean = false;

  foodNWasteNewData : FoodWaste = {
    userId: 0,
    date: '',
    amountSpent: 0,
    foodType: '',
    waterUsage: 0
  };

  foodNWastePastData : FoodWaste = {
    userId: 0,
    date: '',
    amountSpent: 0,
    foodType: '',
    waterUsage: 0
  };
  constructor(private fb : FormBuilder,private food:FoodnwasteService){
    this.foodForm = this.fb.group({
      amountSpent: [''],  // amount spent must be a positive number
      foodType: [''],  // required select field for food type
      waterUsage: [''],  // water usage must be a non-negative number
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
      this.food.getFoodnWaste(uid,pickedDate).subscribe({
        next:(data)=>{
          if(data!=null){
            this.disableForm = true;
            this.foodNWastePastData = data;
            console.log(this.foodNWastePastData)
          }
        },
        error: (err)=>{
          console.log(err);
        }
      })
    }
  }





  handleSubmit(){
    const { amountSpent, foodType, waterUsage } = this.foodForm.value;
    let carbonfootprint = 0;
    if(foodType=="NonVeg"){
      carbonfootprint=(amountSpent*0.5)+(waterUsage*0.001);
    }
    if(foodType=='Veg'){
      carbonfootprint=(amountSpent*0.1)+((waterUsage*0.001));
    }
    let total = localStorage.getItem('carbonfootprint')
    if(total!=null){
    let totalCarbonFootprint: number = parseFloat(total);
    totalCarbonFootprint=totalCarbonFootprint+carbonfootprint;
    localStorage.setItem('carbonfootprint',JSON.stringify(totalCarbonFootprint));
  }
  console.log(localStorage.getItem('carbonfootprint'));
    
    this.food.storeFoodNWaste("2024-09-17",this.foodForm.value).subscribe(d => {
      this.foodNWasteNewData=d;
    })

    this.viewChangeEventEmitter.emit(1);
  }
}
