import { Component } from '@angular/core';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  public title: string = 'Mountain Cabin Vacations';
  public className: string = 'Visual Studio LIVE! Las Vegas';
  public today: number = Date.now();

  ngOnInit() { 
    this.className = `Visual Studio LIVE! Las Vegas | Environment: ${environment.name}`
  }

}
