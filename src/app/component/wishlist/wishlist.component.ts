import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BookService } from 'src/app/services/book/book.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {
  Wish:any;
  count:any;

  constructor(private book: BookService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.Wishlist();
  }

  Wishlist() {
    this.book.getMyWishlist().subscribe((response: any) => {
      this.Wish = response.result;
      this.count = response.result.length;
      console.log(response);
    });
  }

  removes(book: any) {
    this.book.removeFromWishlist(book.product_id._id).subscribe((response: any) => {
      console.log(response);
    })
  }
}
