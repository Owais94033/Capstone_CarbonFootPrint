import { booleanAttribute, Component, Inject, Input, OnInit, Output } from '@angular/core';
import { DOCUMENT, NgFor, NgIf } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FormsComponent } from '../All Forms/forms/forms.component';
import { TravelService } from '../travel.service';
import { Travel } from '../models/Travel';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  standalone: true,
  imports:[RouterLink,NgFor,FormsComponent,RouterOutlet,NgIf],
  styleUrls: ['./datepicker.component.css']
})
export class DatepickerComponent implements OnInit {
  value: number = 0;
  showform: boolean = false;
  selectedDate: Date = new Date();
  

  constructor(@Inject(DOCUMENT) private document: Document,private travel:TravelService) {}

  ngOnInit(): void {
    const dateInput = this.document.getElementById('date-input') as HTMLInputElement;

    // Set the initial value to today's date
    dateInput.valueAsDate = this.selectedDate;

    // Add event listener to handle date changes
    dateInput.addEventListener('change', () => {
      this.selectedDate = new Date(dateInput.value);
    });
  }

  generateWeekDays(): { day: string, date: string }[] {
    const weekDays = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
    const startOfWeek = this.getStartOfWeek(this.selectedDate);
    const daysArray = [];
    for (let i = 0; i < 7; i++) {
      const day = new Date(startOfWeek);
      day.setDate(startOfWeek.getDate() + i);
      daysArray.push({
        day: weekDays[i],
        date: this.formatDate(day)
      });
    }

    return daysArray;
  }

  getStartOfWeek(date: Date): Date {
    const start = new Date(date);
    const day = start.getDay();
    const diff = start.getDate() - day + (day === 0 ? -6 : 1); // Adjust when day is Sunday
    return new Date(start.setDate(diff));
  }

  formatDate(date: Date): string {
    return date.toISOString().slice(0, 10); // Return YYYY-MM-DD format
  }

  handleFormStageEvent(formStageEvent : any){
    this.value = formStageEvent;
  }

  
  handleClick(date : string){
    localStorage.setItem("pickedDate", date);
    localStorage.setItem("pickedDateAlt", JSON.stringify(date));
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
            this.value=1;
          }
          else{
            this.value=0
          }
        }
      })
    }
    this.showform=true;
    this.value=0;
  }
}