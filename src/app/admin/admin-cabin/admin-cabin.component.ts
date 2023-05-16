import { Component, OnInit, ViewChild } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Cabin } from '../../cabins/models';
import { CABINS } from '../../cabins/models/mock-cabins';
import { SelectionModel } from '@angular/cdk/collections';
import { AdminCabinDetailComponent } from '../admin-cabin-detail/admin-cabin-detail.component';

@Component({
  selector: 'app-admin-cabin',
  templateUrl: './admin-cabin.component.html',
  styleUrls: ['./admin-cabin.component.scss']
})
export class AdminCabinComponent implements OnInit {

  displayedColumns: string[] = ['select', 'name', 'location', 'occupancy'];
  dataSource: MatTableDataSource<Cabin>;
  gridData: Cabin[] = CABINS;
  selection: SelectionModel<Cabin>;
  rowSelected: any;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(public dialog: MatDialog) {
    const initialSelection = [];
    const allowMultiSelect = true;
    this.selection = new SelectionModel<Cabin>(allowMultiSelect, initialSelection);  // SelectionModel will maintain the slection state (from CDK)
    this.dataSource = new MatTableDataSource(this.gridData);
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  onCheckItemChange($event: MatCheckboxChange, row: Cabin) {
    if ($event) {
      this.rowSelected = row;
      this.selection.toggle(row);
      if ($event.checked) {
        this.openDialog(row);
      }
    }
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  openDialog(cabin: Cabin): void {
    const dialogRef = this.dialog.open(AdminCabinDetailComponent, {
      width: '250px',
      data: Object.assign({}, cabin)
    });

    dialogRef.afterClosed().subscribe((result: Cabin) => {
      if (result) {
        // Todo: in order for the other areas of the app that use Cabin data to be updated,
        // the observable in cabins.service.ts must be updated to call next(). Needs an update method.
        // Legitamitely, this would happen via an http call

        // Deselect the row now that the edit operation has completed
        this.selection.toggle(this.rowSelected);
        // Find and update the Cabin object to update in the bound data
        const cabinIndex = this.gridData.findIndex(cabinUpdated => cabinUpdated.id === result.id);
        this.gridData[cabinIndex] = result;
        // Refresh the grid data
        this.dataSource = new MatTableDataSource(this.gridData);
      }

    });
  }

}
