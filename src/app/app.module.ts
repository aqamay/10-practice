import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Exercise1Directive } from './exercise1.directive';
import { Exercise2Pipe } from './exercise2.pipe';

@NgModule({
  declarations: [
    AppComponent,
    Exercise1Directive,
    Exercise2Pipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
