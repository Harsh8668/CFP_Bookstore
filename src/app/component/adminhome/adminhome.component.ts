import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/book/book.service';

@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.scss']
})
export class AdminhomeComponent implements OnInit {
Books:any;  
  constructor(private book:BookService) { }

  ngOnInit(): void {
    this.getAllBook();
  }

  getAllBook() {
    this.book.getAllBook().subscribe((response: any) => {
      this.Books = response.result;
      this.Books.reverse();
      console.log(response);
    });
  }

}
