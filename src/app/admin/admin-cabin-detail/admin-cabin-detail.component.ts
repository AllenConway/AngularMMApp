import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Cabin } from '../../cabins/models/cabin';

@Component({
  selector: 'app-admin-cabin-detail',
  templateUrl: './admin-cabin-detail.component.html',
  styleUrls: ['./admin-cabin-detail.component.scss']
})
export class AdminCabinDetailComponent {

  test: string;

  constructor(public dialogRef: MatDialogRef<AdminCabinDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Cabin) { }

    onNoClick(): void {
      this.dialogRef.close();
    }

}

