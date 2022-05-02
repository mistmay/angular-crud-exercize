import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Book } from 'src/app/models/book';

@Component({
  selector: 'app-item-container',
  templateUrl: './item-container.component.html',
  styleUrls: ['./item-container.component.scss']
})
export class ItemContainerComponent implements OnInit {
  @Input() isCardView!: boolean;
  @Input() booksList!: Book[];
  @Output() bookToDelete: EventEmitter<number> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

}
