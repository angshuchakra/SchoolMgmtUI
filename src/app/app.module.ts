import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentRegistrationComponent } from './components/student-registration/student-registration.component';
import { GetstudentsComponent } from './components/getstudents/getstudents.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentRegistrationComponent,
    GetstudentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
