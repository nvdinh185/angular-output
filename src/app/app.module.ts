import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HighlightDirective } from './highlight.directive';
import { ChangeTextDirective } from './change-text.directive';
import { PramsDirective } from './params.directive';

@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    ChangeTextDirective,
    PramsDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
