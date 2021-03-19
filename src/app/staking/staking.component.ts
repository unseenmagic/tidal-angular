import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-staking',
  templateUrl: './staking.component.html',
  styleUrls: ['./staking.component.css']
})
export class StakingComponent implements OnInit {

  @Output() onPortfolio: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  goToPortfolio() {
    this.onPortfolio.emit();
  }
}
