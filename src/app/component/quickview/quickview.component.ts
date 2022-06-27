import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/book/book.service';

@Component({
  selector: 'app-quickview',
  templateUrl: './quickview.component.html',
  styleUrls: ['./quickview.component.scss']
})
export class QuickviewComponent implements OnInit {
  Books: any;
  Bookid: any;
  review:any;
  value:any;
  feedbackArray:any;

  constructor(private book: BookService) { }

  ngOnInit(): void {
    this.Bookid = localStorage.getItem("Bookid")  //from getallbook we get id
    this.getAllBooks();
    this.getFeedback();
  }

  getAllBooks() {
    this.book.getAllBook().subscribe((response: any)=> {
      // console.log("view of Book", response);
      response.result.forEach((element: any) => {
        if (element._id == this.Bookid) {
          this.Books = element;
        }
      });
    })
  }

  feedback(){
    let reqdata = {
      comment: this.review,
      rating: this.value 
    }
    this.book.feedback( this.Bookid, reqdata).subscribe((response: any) =>{
      console.log("feedback added", response);
      
    })
    // this.ngOnInit();
  }

  getFeedback() {
    this.book.getFeedback(this.Bookid).subscribe((response: any) => {
      console.log(response);
      this.feedbackArray = response.result;
    })
  }
}