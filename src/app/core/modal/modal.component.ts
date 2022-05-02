import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef, Renderer2, RendererFactory2 } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Book } from 'src/app/models/book';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @Output() newBook: EventEmitter<Book> = new EventEmitter();
  @Output() modalOff: EventEmitter<boolean> = new EventEmitter();
  @ViewChild('modal') modal!: ElementRef;
  renderer: Renderer2;
  currentId: number = 0;

  constructor(private rendererFactory: RendererFactory2) {
    this.renderer = this.rendererFactory.createRenderer(null, null);
  }

  ngOnInit(): void {
  }

  addBook(f: NgForm): void {
    this.newBook.emit({ ...f.value, id: this.currentId });
    this.currentId++;
  }

  closeModal(event: Event): void {
    if (event.target !== this.modal.nativeElement) {
      return;
    } else {
      this.modalOff.emit(false);
      this.renderer.removeClass(document.body, 'no-scroll');
    }
  }

}
