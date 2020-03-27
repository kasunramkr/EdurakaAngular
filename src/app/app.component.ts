import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Milinda';
  isServerEnabled = false;

  getServerButtonValue() {
    if (this.isServerEnabled) {
      return 'OFF';
    }
    return 'ON';
  }

  getServerStatus() {
    if (this.isServerEnabled) {
      return 'Online';
    }
    return 'Offline';
  }

  toggle() {
    this.isServerEnabled = !this.isServerEnabled;
  }
}
