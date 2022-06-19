import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BookService } from 'src/app/services/book/book.service';

@Component({
  selector: 'app-getbooks',
  templateUrl: './getbooks.component.html',
  styleUrls: ['./getbooks.component.scss']
})
export class GetbooksComponent implements OnInit {
Books:any;

openSnackBar() {
  this._snackBar.open;
}

  constructor(private book:BookService,private _snackBar : MatSnackBar) { }
  ngOnInit(): void {
   this.getAllBook();
  }

  getAllBook() {
    this.book.getAllBook().subscribe((response: any) => {
      this.Books = response.result;
      console.log(response);
    });
  }

  myCart(book:any){
    this.book.addBookToCart(book._id).subscribe((response:any)=>{
      console.log(response);
      this._snackBar.open('Added to Cart', '', { duration: 2000 });
    });
  }

  wishlist(book:any){
    this.book.addBookTowishlist(book._id).subscribe((response:any)=>{
      console.log(response);
      this._snackBar.open('Added to Wishlist', '', { duration: 2000 });
    });
  }
}
