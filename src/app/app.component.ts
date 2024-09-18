import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DateselectorComponent } from './dateselector/dateselector.component';
import { HomecomponentComponent } from './homecomponent/homecomponent.component';
import { NavbarComponent } from './navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HomecomponentComponent,DateselectorComponent,NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'capstone';
}
