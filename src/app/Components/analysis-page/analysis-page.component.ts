import { Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-analysis-page',
  templateUrl: './analysis-page.component.html',
  styleUrls: ['./analysis-page.component.scss']
})

export class AnalysisPageComponent implements OnInit {
  modalTitleOne = 'Financial Condition';
  modalTitleTwo = 'Earnings Stability';
  modalTitleThree = 'Dividend Record';
  modalTitleFour = 'Earnings Growth';
  modalTitleFive = 'Company Price';
  modalTitleSix = 'Summary';

  constructor() { }

  ngOnInit(): void {
  }

}
