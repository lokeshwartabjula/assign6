import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { FetchOperatorComponent } from './fetch-operator/fetch-operator.component';

import { TourService } from './tour.service';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    FetchOperatorComponent

  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule,
    AppRoutingModule
  ],
  providers: [HttpClient, TourService],
  bootstrap: [AppComponent]
})
export class AppModule { }
