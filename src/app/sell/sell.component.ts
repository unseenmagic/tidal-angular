import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.css']
})
export class SellComponent implements OnInit {

  @Output() onPortfolio: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  goToPortfolio() {
    this.onPortfolio.emit();
  }
}
