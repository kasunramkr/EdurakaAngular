import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Milinda';
  isServerEnabled = false;
  currentName = '';
  classList = ['Milinda', 'Kasun'];
  isParaOneShown = true;
  count = 0;

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

  addToClass() {
    if (this.currentName !== '') {
      this.classList.push(this.currentName);
      this.currentName = '';
    }
  }

  paraToggle() {
    this.isParaOneShown = !this.isParaOneShown;
    this.count++;
  }

  getRedClass() {
    if (this.count > 5) {
      return true;
    }
    return false;
  }
}
