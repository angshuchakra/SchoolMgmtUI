import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {GetstudentsComponent} from './components/getstudents/getstudents.component';
import {StudentRegistrationComponent} from './components/student-registration/student-registration.component'

const routes: Routes = [
  {path:'getstudent', component: GetstudentsComponent},
  {path:'studentregistration', component: StudentRegistrationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
