import { Component, OnInit, Output, EventEmitter, Renderer2, RendererFactory2 } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Output() isCardView: EventEmitter<boolean> = new EventEmitter();
  @Output() modalActive: EventEmitter<boolean> = new EventEmitter();
  renderer: Renderer2;

  constructor(private rendererFactory: RendererFactory2) {
    this.renderer = this.rendererFactory.createRenderer(null, null);
  }

  ngOnInit(): void {
  }

  openModal(): void {
    this.modalActive.emit(true);
    this.renderer.addClass(document.body, 'no-scroll');
  }

}
