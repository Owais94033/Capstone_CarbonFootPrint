import { Routes } from '@angular/router';
import { FormsComponent } from './All Forms/forms/forms.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { TimelineComponent } from './timeline/timeline.component';

export const routes: Routes = [
    {path:'',component:HomepageComponent},
    {path:"login",component:LoginComponent},
    {path:"signup",component:SignupComponent},
    {path:"timeline",component:TimelineComponent},
    {path:"dashboard",component:DashboardComponent},
    {path: 'timeline/:date',component: FormsComponent},
];
