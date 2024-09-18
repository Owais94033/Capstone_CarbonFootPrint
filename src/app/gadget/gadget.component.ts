import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-gadget',
  standalone: true,
  imports: [],
  templateUrl: './gadget.component.html',
  styleUrl: './gadget.component.css'
})
export class GadgetComponent {

  @Output() formStageEvent: EventEmitter<any> =  new EventEmitter();

  handleSubmit(){
    console.log("handle submit gadget");
    this.formStageEvent.emit(1)
  }
}
