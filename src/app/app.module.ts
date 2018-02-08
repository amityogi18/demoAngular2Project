import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HostnameDetailsComponent } from './hostname-details/hostname-details.component';


@NgModule({
  declarations: [
    AppComponent,
    HostnameDetailsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
