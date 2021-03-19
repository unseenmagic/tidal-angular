import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tidal-angular';

  key = 'market';

  goTo($event) {
    this.key = $event.key;
  }
}
