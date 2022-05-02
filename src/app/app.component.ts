import { Component } from '@angular/core';
import { Book } from './models/book';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  booksList: Book[] = [];
  isCardView: boolean = true;
  isModal: boolean = false;

  addBook(book: Book): void {
    this.booksList.push(book);
  }

  deleteBook(id: number): void {
    this.booksList = this.booksList.filter((element: Book) => element.id !== id);
  }

}
