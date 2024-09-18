import { Routes } from '@angular/router';
import { FormtofillComponent } from './formtofill/formtofill.component';
import { HomecomponentComponent } from './homecomponent/homecomponent.component';

export const routes: Routes = [
    {path: 'form/:date',component: FormtofillComponent },
    // {path: 'form/2024-09-09',component: FormtofillComponent }

];
