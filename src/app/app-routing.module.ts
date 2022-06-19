import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationGuard } from './authentication.guard';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { GetbooksComponent } from './component/getbooks/getbooks.component';
import { LoginComponent } from './component/login/login.component';
import { MyCartComponent } from './component/my-cart/my-cart.component';
import { OrderComponent } from './component/order/order.component';
import { SignupComponent } from './component/signup/signup.component';
import { WishlistComponent } from './component/wishlist/wishlist.component';

const routes: Routes = [
  { path: '', redirectTo: "/login", pathMatch: 'full' },  
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  {
    path: 'home', component: DashboardComponent, canActivate:[AuthenticationGuard],
    children: [
      { path: '', redirectTo: '/home/getbook', pathMatch: 'full' },
      { path: 'getbook', component: GetbooksComponent },
      {path: 'cart', component:MyCartComponent},
      {path: 'order', component:OrderComponent},
      {path: 'wishlist', component:WishlistComponent}
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
