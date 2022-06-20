import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {
  value:any;

  constructor(private router:Router, private data:DataService) { }

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

  searchTitle(event: any) {
    console.log("input in search field===", event.target.value);
    this.value = event.target.value
    let Ddata = {
      type: 'search',
      data: [this.value]
    }
    this.data.ChangeDataMessage(Ddata)
  }
}