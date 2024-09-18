import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-foodnwasteform',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './foodnwasteform.component.html',
  styleUrl: './foodnwasteform.component.css'
})
export class FoodnwasteformComponent {
  @Output() viewChangeEventEmitter : EventEmitter<any> = new EventEmitter();
  
  handleSubmit(){
    console.log("handle submit food");
    this.viewChangeEventEmitter.emit(1);
  }
}
