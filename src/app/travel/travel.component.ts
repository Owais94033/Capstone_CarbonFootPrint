import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-travel',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './travel.component.html',
  styleUrl: './travel.component.css'
})
export class TravelComponent {
  @Output() viewChangeEventEmitter : EventEmitter<any> = new EventEmitter();

  handleSubmit(){
    console.log("handle submit travel");
    this.viewChangeEventEmitter.emit(1);
  }
}
