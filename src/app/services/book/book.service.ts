import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../httpservice/http.service';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  token: any;

  constructor(private httpService: HttpService) {
    this.token = localStorage.getItem("token")
  }

  getAllBook() {
    console.log("Calling all the books in dashboard");

    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': this.token
      })
    }

    return this.httpService.getService('/get/book', true, header)
  }

  addBookToCart(_id: any) {
    console.log("Adding all the books to cart");

    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'x-access-token': this.token
      })
    }

    return this.httpService.postService('/add_cart_item/' + _id, {}, true, header)
  }

  getAllCart() {
    console.log("Calling all the books in my cart");

    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'x-access-token': this.token
      })
    }

    return this.httpService.getService('/get_cart_items', true, header)
  }

  removeFromCart(_id: any) {
    console.log("Removing the books from the cart");

    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'x-access-token': this.token
      })
    }

    return this.httpService.deleteService('/remove_cart_item/' + _id, {}, true, header)
  }
}