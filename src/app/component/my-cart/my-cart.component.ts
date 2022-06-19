import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BookService } from 'src/app/services/book/book.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/userservice/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-cart',
  templateUrl: './my-cart.component.html',
  styleUrls: ['./my-cart.component.scss']
})
export class MyCartComponent implements OnInit {
  registerForm!: FormGroup;
  submitted = false;
  bookList: any;
  Carts: any;
  count: any;
  valid = false;
  visible = true;
  show = true;
  close = false;
  orders: any = [];
  orderList: any = [];


  openSnackBar() {
    this._snackBar.open;
  }

  constructor(private book: BookService, private _snackBar: MatSnackBar, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.Cart();

    this.registerForm = this.formBuilder.group({
      fullName: ['', Validators.required],
      phone: ['', [Validators.required, Validators.maxLength(10)]],
      fullAddress: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
    });
  }

  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;

    if (this.registerForm.valid) {

      let reqdata = {
        addressType: "Home",
        fullAddress: this.registerForm.value.fullAddress,
        city: this.registerForm.value.city,
        state: this.registerForm.value.state,
      }
      this.book.userAddress(reqdata).subscribe((response: any) => {
        console.log(response);
        this._snackBar.open('Customer Detail updated', '', { duration: 2000 });
      });
    }
  }

  Cart() {
    this.book.getAllCart().subscribe((response: any) => {
      this.Carts = response.result;
      this.count = response.result.length;
      console.log(response);
    });
  }

  remove(cart: any) {
    this.book.removeFromCart(cart._id).subscribe((response: any) => {
      console.log(response);
      this._snackBar.open('Book Removed', '', { duration: 2000 });
    });
  }

  order() {
    this.visible = false;
    this.valid = true;
  }

  continue() {
    this.show = true;
    this.close = true;
  }

  placeOrder() {
    this.orders.forEach((response: any) => {
      this.orders.push({
        "product_id": response.product_id._id,
        "product_name": response.product_id.bookName,
        "product_quantity": response.quantityToBuy,
        "product_price": response.product_id.price
      });
    });
    console.log(this.orders);

    let reqdata = {
      "place": this.orders
    }
    this.book.checkout(reqdata).subscribe((response: any) => {
      console.log(response);
    })
  }
  
  orderPlace() {
    this.router.navigateByUrl("/home/order")
  }
}

