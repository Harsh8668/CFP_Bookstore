import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/book/book.service';

@Component({
  selector: 'app-my-cart',
  templateUrl: './my-cart.component.html',
  styleUrls: ['./my-cart.component.scss']
})
export class MyCartComponent implements OnInit {
  Carts: any;
  count:any;
  valid = false;
  visible = true;
  noseen = true;
  noshow = true;

  constructor(private book:BookService ) { }

  ngOnInit(): void {
    this.myCart();
  }

  myCart() {
    this.book.getAllCart().subscribe((response: any) => {
      this.Carts = response.result;
      this.count = response.result.length;
      console.log(response);
    });
  }

  remove(cart:any){
    this.book.removeFromCart(cart._id).subscribe((response: any) =>{
      console.log(response);
    });
  }

  order(){
    this.visible = false;
    this.valid = true;
    this.noseen = true;
  }
}