import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {
  title = 'The Stock Analyser';
  companySearch = 'enter the company you would like analysed...';
  searchButton = 'search';

  showMe = true;

  toggleModal(): any {
    this.showMe = !this.showMe;
  }



  searchCompany(): any {
    const companyYahooUrl = document.querySelector('.search-bar');

    return companyYahooUrl;
    }
}

