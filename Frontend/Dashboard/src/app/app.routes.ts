import { Routes } from '@angular/router'
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { EventComponent } from './event/event.component';
import { ProductComponent } from './product/product.component';
import { ProductDetailsComponent } from './product/product-details/product-details.component';
import { EventDetailsComponent } from './event/event-details/event-details.component';
import { RatingComponent } from './rating/rating.component';
import { ReportComponent } from './report/report.component';
import { LoginComponent } from './login/login.component';

export const ROUTES: Routes = [
    {path:'', component: LoginComponent},
    {path:'home', component: HomeComponent},
    {path:'profile/:name', component: ProfileComponent},
    {path: 'product/:name', component: ProductComponent},
    {path: 'product-details', component: ProductDetailsComponent},
    {path: 'event/:name', component: EventComponent},
    {path: 'event-details', component: EventDetailsComponent},
    {path:'report', component: ReportComponent},
    {path:'rating', component: RatingComponent},

    /*{path:'restaurants/:id',component:RestaurantDetailComponent,
    children:[
        {path: '', redirectTo: 'menu', pathMatch:'full'},
        {path:'menu', component: MenuComponent},
        {path:'reviews', component: ReviewsComponent}
    ]},*/    
]