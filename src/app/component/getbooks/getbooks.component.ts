import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/book/book.service';

@Component({
  selector: 'app-getbooks',
  templateUrl: './getbooks.component.html',
  styleUrls: ['./getbooks.component.scss']
})
export class GetbooksComponent implements OnInit {

  constructor(private book:BookService) { }
  ngOnInit(): void {
  }
}
