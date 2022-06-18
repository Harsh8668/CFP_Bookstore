import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

export interface PeriodicElement {
  email: string;
  contact: number;
  address: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {email : "admin@bookstore", contact: 9136520232, address: "14 M G Road, Camp, Pune-411001"}
];

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  displayedColumns: string[] = ['email', 'contact', 'address'];
  dataSource = ELEMENT_DATA;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.continue;
  }

  continue(){
    this.router.navigateByUrl("/home/getbook");
  }
}
