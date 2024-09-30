import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GoogleGenerativeAI } from '@google/generative-ai';

@Component({
  selector: 'app-aidiv',
  standalone: true,
  imports: [FormsModule,NgFor],
  templateUrl: './aidiv.component.html',
  styleUrl: './aidiv.component.css'
})

export class AidivComponent  implements OnInit{
  loading : boolean = true;

  ngOnInit(): void {
    let result = this.loadResult();
    result
      .then((data) => {
        this.answer=data;
        this.loading = false;
      })
      .catch((err) => {
        console.log(err);
      });
  }
  API_KEY: string = 'AIzaSyAE9xG2Kgw7iMdddUi6nEPy58Xs6m-xpoM';
  genAI = new GoogleGenerativeAI(this.API_KEY);
  model = this.genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
  
  prompt:string = '4 Suggestions to improve my Carbon Footprint in one sentence each,Return the response as a list of 4 sentences,each list items should start in different lines.Start each line with a -';

  answer: string =''

  trackByIndex(index: number, item: any): number {
    return index;
  }

  result: any = null;

  async loadResult() {
    let result = await this.model.generateContent(this.prompt);
    return result.response.text();
  }
}
