import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HostnameDetailsComponent } from './hostname-details/hostname-details.component';
import { UtilityService } from './uitility-service/utility.service';



@NgModule({
  declarations: [
    AppComponent,
    HostnameDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [UtilityService, ],
  bootstrap: [AppComponent]
})
export class AppModule { }
