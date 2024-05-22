import { Component } from '@angular/core';
import { environment } from '../environments/environment';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { AdminModule } from './admin/admin.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    AdminModule,
    CommonModule,
    MatButtonModule,
    MatMenuModule,
    DashboardModule,
    RouterOutlet,
    RouterLink
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public title: string = 'Mountain Cabin Vacations';
  public className: string = '';
  public today: number = Date.now();

  ngOnInit() {
    this.className = `Visual Studio LIVE! Chicago | Environment: ${environment.name}`;
  }

}