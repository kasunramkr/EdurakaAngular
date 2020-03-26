import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { ServerComponent } from './server/server.component';
import { RedComponent } from './colour/red/red.component';
import { BlueComponent } from './colour/blue/blue.component';
import { GreenComponent } from './colour/green/green.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    RedComponent,
    BlueComponent,
    GreenComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
