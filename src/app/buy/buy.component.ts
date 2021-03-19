import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent implements OnInit {

  @Output() onPortfolio: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  goToPortfolio() {
    this.onPortfolio.emit();
  }
}
