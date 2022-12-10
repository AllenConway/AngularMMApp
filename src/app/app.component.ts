import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Mountain Cabin Vacations';
  className = 'Visual Studio LIVE! Las Vegas';
  today: number = Date.now();
}
