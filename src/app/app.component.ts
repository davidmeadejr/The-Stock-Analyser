import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'The Stock Analyser';
  companySearch = 'enter the company you would like analysed...';
  searchButton = 'search';
}
