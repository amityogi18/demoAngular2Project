import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HostnameDetailsComponent } from './hostname-details/hostname-details.component';
import { UtilityService } from './uitility-service/utility.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HostnameDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [UtilityService, ],
  bootstrap: [AppComponent]
})
export class AppModule { }
