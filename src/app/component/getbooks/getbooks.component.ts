import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BookService } from 'src/app/services/book/book.service';
import { DataService } from 'src/app/services/data/data.service';

@Component({
  selector: 'app-getbooks',
  templateUrl: './getbooks.component.html',
  styleUrls: ['./getbooks.component.scss']
})
export class GetbooksComponent implements OnInit {
Books:any;
subscription:any;
message:any;
searchWord:any;
page:number =1;

openSnackBar() {
  this._snackBar.open;
}

  constructor(private book:BookService,private _snackBar : MatSnackBar, private data:DataService) { }
  ngOnInit(): void {
   this.getAllBook();
   this.subscription = this.data.currentData.subscribe(message => {
    this.message = message;
    console.log("display card search data======", message.data[0]);
    this.searchWord=message.data[0]
  })
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

  high(){
    this.Books = this.Books.sort((low: any, high: any) => high.price - low.price);
  }

  low(){
    this.Books = this.Books.sort((low: any, high: any) => low.price - high.price);
  }
}
