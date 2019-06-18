import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms'

import { ROUTES } from './app.routes';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { InputComponent } from './shared/input/input.component';
import { RadioComponent } from './shared/radio/radio.component';
import { ProfileService } from './profile/profile.service';
import { ProductComponent } from './product/product.component';
import { EventComponent } from './event/event.component';
import { ProductService } from './product/product.service';
import { HomeService } from './home/home.service';
import { MyEventService } from './event/event.service';
import { ProductDetailsComponent } from './product/product-details/product-details.component';
import { EventDetailsComponent } from './event/event-details/event-details.component';
import { RatingComponent } from './rating/rating.component';
import { ReportComponent } from './report/report.component';
import { RatingService } from './rating/rating.service';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ProfileComponent,
    InputComponent,
    RadioComponent,
    ProductComponent,
    EventComponent,    
    ProductDetailsComponent,
    EventDetailsComponent,
    RatingComponent,
    ReportComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,    
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [ProfileService, ProductService, HomeService, MyEventService, RatingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
