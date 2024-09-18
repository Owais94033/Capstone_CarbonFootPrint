import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  GoogleGenerativeAI,
} from '@google/generative-ai';
import { FoodnwasteformComponent } from '../foodnwasteform/foodnwasteform.component';
import { GadgetComponent } from '../gadget/gadget.component';
import { HomecomponentComponent } from '../homecomponent/homecomponent.component';
import { TravelComponent } from '../travel/travel.component';

@Component({
  selector: 'app-formtofill',
  standalone: true,
  imports: [TravelComponent,GadgetComponent,FoodnwasteformComponent,HomecomponentComponent],
  templateUrl: './formtofill.component.html',
  styleUrl: './formtofill.component.css',
})
export class FormtofillComponent  implements OnInit{

  formStage :number = 0;

  ngOnInit(): void {
    this.route.params.subscribe((data)=>{
      console.log(data['date']);
      this.formStage= 0
    })
  }

  constructor(private route: ActivatedRoute){}

  API_KEY: string = 'AIzaSyAE9xG2Kgw7iMdddUi6nEPy58Xs6m-xpoM';
  genAI = new GoogleGenerativeAI(this.API_KEY);
  model = this.genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
  
  prompt = '';

  result: any = null;

  addNew(){
    this.formStage++;
  }

  handleEvent(){
    this.formStage++;
  }

  handleSubmit(): void {
    let result = this.loadResult();
    result
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  async loadResult() {
    let result = await this.model.generateContent(this.prompt);
    return result.response.text();
  }

}
