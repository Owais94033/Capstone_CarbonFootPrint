import { Component } from '@angular/core';
import { DateselectorComponent } from '../dateselector/dateselector.component';

@Component({
  selector: 'app-homecomponent',
  standalone: true,
  imports: [DateselectorComponent],
  templateUrl: './homecomponent.component.html',
  styleUrl: './homecomponent.component.css'
})
export class HomecomponentComponent {

}
