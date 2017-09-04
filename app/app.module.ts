import { NgModule, CUSTOM_ELEMENTS_SCHEMA }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


import { AppComponent }         from './app.component';
import { ReactComponent} from './angular2-react/component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
  ],
  declarations: [
    AppComponent,
    ReactComponent
  ],
  //schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [ ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
