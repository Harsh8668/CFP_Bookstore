import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  myCart(){
    this.router.navigateByUrl("/home/cart");
  }

  wishlist(){
    this.router.navigateByUrl("/home/wishlist");
  }

  home(){
    this.router.navigateByUrl("/home");
  }

  Logout(){
    localStorage.removeItem("token")
    this.router.navigateByUrl("/login")
  }
}