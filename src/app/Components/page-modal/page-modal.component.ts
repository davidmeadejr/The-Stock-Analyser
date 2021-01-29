import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-modal',
  templateUrl: './page-modal.component.html',
  styleUrls: ['./page-modal.component.scss']
})
export class PageModalComponent implements OnInit {

  modalTitleOne = 'What is The Stock Analyser?';
  modalParagraphOne = 'The Stock Analyser is a simple tool that as the name states, analyses a given company by assesing its investment viability against Benjamins Grahams investment principles for the enterprising investor. The principles he suggest are based on assessing a givent companies:';

  conditionOne = 'Fincancial Condition';
  conditionTwo = 'Earnings Stability';
  conditionThree = 'Dividend Record';
  conditionFour = 'Earnings Growth';
  conditionFive = ' Company Price';

  modalTitleTwo = 'Use Case?';
  modalParagraphTwo = 'When looking at investment sites there often contains a lot of information and jargon. Leaving neophyte investors often confused and unsure of how to navigate between the essential and unessential information. When it comes to long-term investing there are a few key principles that one should follow when assessing the investment viability of a given company. This platform aims to highlight these while removing the unessential jargon and information so that users can have an easily understandable summary of a given companies investment long-term viability. Just search the company you would like analysed and go from there, simples.';

  constructor() {
  }

  ngOnInit(): void {

  }

}
