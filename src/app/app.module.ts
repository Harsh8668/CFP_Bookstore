import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination';
import { FormsModule } from '@angular/forms'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './component/login/login.component';
import { SignupComponent } from './component/signup/signup.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { GetbooksComponent } from './component/getbooks/getbooks.component';
import { MyCartComponent } from './component/my-cart/my-cart.component';
import { OrderComponent } from './component/order/order.component';
import { WishlistComponent } from './component/wishlist/wishlist.component';

import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatSelectModule} from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {MatRadioModule} from '@angular/material/radio';
import {MatMenuModule} from '@angular/material/menu';
import {MatBadgeModule} from '@angular/material/badge';
import { AuthenticationServiceService } from './services/Authentication/authentication-service.service';
import { FilterPipe } from './Pipe/filter.pipe';
import { QuickviewComponent } from './component/quickview/quickview.component';
import { AdminLoginComponent } from './component/admin-login/admin-login.component';
import { AdminSignupComponent } from './component/admin-signup/admin-signup.component';
import { AdminhomeComponent } from './component/adminhome/adminhome.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    GetbooksComponent,
    MyCartComponent,
    OrderComponent,
    WishlistComponent,
    FilterPipe,
    QuickviewComponent,
    AdminLoginComponent,
    AdminSignupComponent,
    AdminhomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule,  
    FormsModule,

    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatIconModule,
    MatToolbarModule,
    MatExpansionModule,
    MatSelectModule,
    MatTableModule,
    MatSnackBarModule,
    MatRadioModule,
    MatMenuModule,
    MatBadgeModule
  ],
  providers: [
    AuthenticationServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
