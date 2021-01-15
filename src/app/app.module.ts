import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { SerivcesComponent } from './serivces/serivces.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { ContactComponent } from './contact/contact.component';
import { MakeAnAppointmentComponent } from './make-an-appointment/make-an-appointment.component';
import { HomeComponent } from './home/home.component';
import { Router, RouterModule } from '@angular/router';
import { DepartmentsComponent } from './departments/departments.component';
import { FooterComponent } from './footer/footer.component';
import { FrequentlyAskedQuestionComponent } from './frequently-asked-question/frequently-asked-question.component';
import { GallaryComponent } from './gallary/gallary.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    SerivcesComponent,
    DoctorsComponent,
    ContactComponent,
    MakeAnAppointmentComponent,
    HomeComponent,
    DepartmentsComponent,
    FooterComponent,
    FrequentlyAskedQuestionComponent,
    GallaryComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent},
      { path: '', component: HeaderComponent},
      { path: '', component: AboutComponent},
      { path: '', component: MakeAnAppointmentComponent},
      { path: '', component: ContactComponent},
      { path: '', component: SerivcesComponent},
      { path: '', component: DoctorsComponent},

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
