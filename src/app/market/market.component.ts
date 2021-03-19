import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.css']
})
export class MarketComponent implements OnInit {

  @Output() onPortfolio: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  goToPortfolio() {
    this.onPortfolio.emit();
  }
}
