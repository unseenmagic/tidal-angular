import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-claims',
  templateUrl: './claims.component.html',
  styleUrls: ['./claims.component.css']
})
export class ClaimsComponent implements OnInit {

  @Output() onPortfolio: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  goToPortfolio() {
    this.onPortfolio.emit();
  }
}
