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

    return this.httpService.getService('bookstore_user/get/book', true, header)
  }

  addBookToCart(_id: any) {
    console.log("Adding all the books to cart");

    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'x-access-token': this.token
      })
    }

    return this.httpService.postService('bookstore_user/add_cart_item/' + _id, {}, true, header)
  }

  getAllCart() {
    console.log("Calling all the books in my cart");

    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'x-access-token': this.token
      })
    }

    return this.httpService.getService('bookstore_user/get_cart_items', true, header)
  }

  removeFromCart(_id: any) {
    console.log("Removing the books from the cart");

    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'x-access-token': this.token
      })
    }

    return this.httpService.deleteService('bookstore_user/remove_cart_item/' + _id, {}, true, header)
  }

  userAddress(reqdata:any) {
    let header = {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'x-access-token': this.token
      })
    }
    return this.httpService.putService('bookstore_user/edit_user', reqdata, true, header)
  }

  addBookTowishlist(_id: any) {
    console.log("Adding books to Wishlist");

    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'x-access-token': this.token
      })
    }

    return this.httpService.postService('bookstore_user/add_wish_list/' + _id, {}, true, header)
  }

  getMyWishlist() {
    console.log("Calling all the books in my cart");

    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'x-access-token': this.token
      })
    }

    return this.httpService.getService('bookstore_user/get_wishlist_items', true, header)
  }

  removeFromWishlist(_id: any) {
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-access-token': this.token    
      })
    }
    return this.httpService.deleteService('bookstore_user/remove_wishlist_item/' + _id, {} ,true,header)
  }

  checkout(reqdata: any) {
    console.log("Order Placing");

    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'x-access-token': this.token
      })
    }

    return this.httpService.postService('bookstore_user/add/order', reqdata, true, header)
  }

  feedback(product_id: any, reqdata: any) {
    
    let header = {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'x-access-token': this.token
      })
    }
    return this.httpService.postService('bookstore_user/add/feedback/' + product_id, reqdata, true, header)

  }

  getFeedback(product_id: any) {
    let header = {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'x-access-token': this.token
      })
    }
    return this.httpService.getService('bookstore_user/get/feedback/'+ product_id, true, header)
  }
  
}