import { Component, Inject, OnInit, Output } from '@angular/core';
import { DOCUMENT, NgFor } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { EventEmitter } from 'stream';
import { FormtofillComponent } from '../formtofill/formtofill.component';

@Component({
  selector: 'app-dateselector',
  templateUrl: './dateselector.component.html',
  standalone: true,
  imports:[RouterLink,NgFor,FormtofillComponent],
  styleUrls: ['./dateselector.component.css']
})
export class DateselectorComponent implements OnInit {
  formSelector: number = 0;
  selectedDate: Date = new Date();

  constructor(@Inject(DOCUMENT) private document: Document) {}

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
    const weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
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


}