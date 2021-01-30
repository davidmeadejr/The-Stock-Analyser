import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { MainPageComponent } from './components/main-page/main-page.component';
import { PageModalComponent } from './components/page-modal/page-modal.component';
import { AnalysisPageComponent } from './components/analysis-page/analysis-page.component';

@NgModule({
  declarations: [
    MainPageComponent,
    PageModalComponent,
    AnalysisPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [MainPageComponent]
})
export class AppModule { }
