import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { GetbooksComponent } from './component/getbooks/getbooks.component';
import { LoginComponent } from './component/login/login.component';
import { MyCartComponent } from './component/my-cart/my-cart.component';
import { OrderComponent } from './component/order/order.component';
import { SignupComponent } from './component/signup/signup.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  {
    path: 'home', component: DashboardComponent,
    children: [
      { path: '', redirectTo: '/home/getbook', pathMatch: 'full' },
      { path: 'getbook', component: GetbooksComponent },
      {path: 'cart', component:MyCartComponent},
      {path: 'order', component:OrderComponent}
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
