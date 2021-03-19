import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {
  @Input() key: string;

  constructor() { }

  ngOnInit() {
  }

  goToPortfolio($event) {
    this.key = 'portfolio';
  }
}
