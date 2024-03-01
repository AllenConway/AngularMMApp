import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Activity } from './models/activity';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-activites',
  standalone: true,
  imports: [
    CommonModule,
    MatSnackBarModule
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
      { id: 1, name: 'Swimming', icon: 'pool' },
      { id: 2, name: 'Exercise', icon: 'fitness_center' },
      { id: 3, name: 'Hiking', icon: 'hiking' },
      { id: 4, name: 'Tennis', icon: 'sports_tennis' },
      { id: 5, name: 'Biking', icon: 'directions_bike' },
      { id: 6, name: 'Kayaking', icon: 'kayaking' },
    ]
  }

  selectActivity(activity: Activity) {
    this.snackBar.open(`Stop by the activities desk to book a ${activity.name} reservation!`, 'close');
  }

}
