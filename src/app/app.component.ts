import { Component, Pipe } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
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
    this.className = `Visual Studio LIVE! Las Vegas | Environment: ${environment.name}`;
  }

}