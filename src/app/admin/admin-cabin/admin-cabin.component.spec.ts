import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { AdminCabinComponent } from './admin-cabin.component';
import { MatCheckboxChange, MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { Cabin } from '../../cabins/models/cabin';
import { of } from 'rxjs';

describe('AdminCabinComponent', () => {
  let component: AdminCabinComponent;
  let fixture: ComponentFixture<AdminCabinComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        MatCheckboxModule,
        MatDialogModule,
        MatFormFieldModule,
        MatTableModule
      ],
      declarations: [ AdminCabinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCabinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set paginator and sort on init', () => {
    component.ngOnInit();

    expect(component.dataSource.paginator).toBe(component.paginator);
    expect(component.dataSource.sort).toBe(component.sort);
  });

  it('should toggle selection and open dialog when checkbox changes', () => {
    const row: Cabin = { id: 1, location: 'A', name: 'Cabin A', occupancy: 2 };
    const event: MatCheckboxChange = { checked: true, source: null };
    const openDialogSpy = spyOn(component, 'openDialog');

    component.onCheckItemChange(event, row);

    expect(component.selection.isSelected(row)).toBe(true);
    expect(openDialogSpy).toHaveBeenCalledWith(row);
  });

  it('should return true if all rows are selected', () => {
    component.dataSource.data = [{ id: 1, location: 'A', name: 'Cabin A', occupancy: 2 }];
    component.selection.select(component.dataSource.data[0]);

    expect(component.isAllSelected()).toBe(true);
  });

  it('should select all rows if not all are selected', () => {
    component.dataSource.data = [{ id: 1, location: 'A', name: 'Cabin A', occupancy: 2 }];

    component.masterToggle();

    expect(component.selection.isSelected(component.dataSource.data[0])).toBe(true);
  });

  it('should clear selection if all rows are selected', () => {
    component.dataSource.data = [{ id: 1, location: 'A', name: 'Cabin A', occupancy: 2 }];
    component.selection.select(component.dataSource.data[0]);

    component.masterToggle();

    expect(component.selection.isSelected(component.dataSource.data[0])).toBe(false);
  });

  it('should open dialog and update cabin when dialog is closed', () => {
    const cabin: Cabin = { id: 1, location: 'A', name: 'Cabin A', occupancy: 2 };
    const dialogRef = { afterClosed: () => of(cabin) };
    const dialogSpy = spyOn(component.dialog, 'open').and.returnValue(dialogRef as any);

    component.openDialog(cabin);

    expect(dialogSpy).toHaveBeenCalled();
    expect(component.gridData.find(c => c.id === cabin.id)).toEqual(cabin);
  });
});
