import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GuessTheNumberComponent } from './guess-the-number/guess-the-number.component';

@NgModule({
  declarations: [
    AppComponent,
    GuessTheNumberComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
