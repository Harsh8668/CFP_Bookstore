import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from 'src/app/services/book/book.service';
import { DataService } from 'src/app/services/data/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {
  value:any;
  token:any;
  count:any;

  constructor(private router:Router, private data: DataService, private book:BookService) { }

  ngOnInit(): void {
    this.getCount();
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

  getCount(){
    this.book.getAllCart().subscribe((response:any)=>{
      this.count = response.result.length;
    })
  }

}