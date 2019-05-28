import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AddmeComponent } from './addme/addme.component';
import { ClickmeComponent } from './clickme/clickme.component';
import { KeyupComponent } from './keyup/keyup.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, AddmeComponent, ClickmeComponent, KeyupComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
