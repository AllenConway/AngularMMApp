import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Mountain Cabin Vacations';
  className = 'Magenic Masters LIVE! class';
  today: number = Date.now();
}
