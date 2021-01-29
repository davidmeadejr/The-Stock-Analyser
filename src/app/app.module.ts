import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { MainPageComponent } from './Components/Main-Page/main-page.component';

@NgModule({
  declarations: [
    MainPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [MainPageComponent]
})
export class AppModule { }
