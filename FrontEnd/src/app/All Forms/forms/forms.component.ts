import { Component, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventEmitter } from '@angular/core';
import { FoodformComponent } from '../foodform/foodform.component';
import { GadgetformComponent } from '../gadgetform/gadgetform.component';
import { TravelformComponent } from '../travelform/travelform.component';
import { TravelService } from '../../travel.service';
import { format } from 'path/posix';

@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [TravelformComponent,FoodformComponent,GadgetformComponent],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.css'
})
export class FormsComponent implements OnInit{
  @Input() formStage :number = 0;
  @Output() formStageEventEmitter : EventEmitter<any> = new EventEmitter();

  form: string|null = localStorage.getItem('form');


  ngOnInit(): void {
    
  }

  constructor(private route: ActivatedRoute,private travel: TravelService){}

  

  addNew(){
    this.formStage++;
    this.formStageEventEmitter.emit(this.formStage);
  }
  
  handleEvent(){
    if(this.formStage==3){
      this.formStage=1;
    }else{
      this.formStage++;
    }
    this.formStageEventEmitter.emit(this.formStage);
  }
}
