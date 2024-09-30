import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { FormsComponent } from '../All Forms/forms/forms.component';
import { DatepickerComponent } from '../datepicker/datepicker.component';

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [DatepickerComponent,FormsComponent,NgIf,RouterOutlet],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.css'
})
export class TimelineComponent {
  // active : boolean = false;
  //   constructor(private router: ActivatedRoute){
  //     router.params.subscribe((url: any)=>
  //     console.log(url)
  //     );
  //   }
}
