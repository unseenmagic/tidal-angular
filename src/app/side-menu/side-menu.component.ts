import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {

  @Output() onGoTo: EventEmitter<any> = new EventEmitter();

  key = 'market';

  constructor() { }

  ngOnInit() {
  }

  goTo(key) {
    this.key = key;
    this.onGoTo.emit({
      key: key
    });
  }
}
