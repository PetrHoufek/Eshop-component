import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductDetailComponent } from './product-detail.component';

//directives
import {HighlightDirective} from './highlight.directive';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    AppComponent,
    ProductDetailComponent,
    HighlightDirective
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
