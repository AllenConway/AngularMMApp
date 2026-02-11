import { Component } from '@angular/core';

import { Activity } from './models/activity';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-activites',
    imports: [
    MatSnackBarModule,
    RouterModule
],
    templateUrl: './activites.component.html',
    styleUrls: ['./activites.component.scss']
})
export class ActivitesComponent {

  public activites: Activity[] = [];

  constructor(private snackBar: MatSnackBar) {
    
  }

  ngOnInit() { 
    this.activites = [
      { id: 1, name: 'Swimming', icon: 'pool', location: 'Main Pool' },
      { id: 2, name: 'Exercise', icon: 'fitness_center', location: 'Fitness Center' },
      { id: 3, name: 'Hiking', icon: 'hiking', location: 'Mountain Trail' },
      { id: 4, name: 'Tennis', icon: 'sports_tennis', location: 'Tennis Courts' },
      { id: 5, name: 'Biking', icon: 'directions_bike', location: 'Bike Path' },
      { id: 6, name: 'Kayaking', icon: 'kayaking', location: 'Lake Dock' },
    ];
  }

  selectActivity(activity: Activity) {
    this.snackBar.open(`Stop by the activities desk to book a ${activity.name} reservation!`, 'close');
  }

}
