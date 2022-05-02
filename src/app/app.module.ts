import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { ModalComponent } from './core/modal/modal.component';
import { ItemContainerComponent } from './views/item-container/item-container.component';
import { CardComponent } from './views/item-container/components/card/card.component';
import { TableComponent } from './views/item-container/components/table/table.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ModalComponent,
    ItemContainerComponent,
    CardComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
