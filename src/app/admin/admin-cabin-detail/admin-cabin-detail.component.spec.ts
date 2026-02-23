import { ComponentFixture, TestBed, waitForAsync, tick, fakeAsync } from '@angular/core/testing';

import { AdminCabinDetailComponent } from './admin-cabin-detail.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { Cabin } from '../../cabins/models/cabin';

describe('AdminCabinDetailComponent', () => {
  let component: AdminCabinDetailComponent;
  let fixture: ComponentFixture<AdminCabinDetailComponent>;
  let mockDialogRef: jasmine.SpyObj<MatDialogRef<AdminCabinDetailComponent>>;
  let mockCabinData: Cabin;

  beforeEach(() => {
    mockDialogRef = jasmine.createSpyObj('MatDialogRef', ['close']);
    mockCabinData = {
      id: 1,
      name: 'Test Cabin',
      location: 'Test Location',
      occupancy: 4
    };
  });

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        MatDialogModule,
        MatFormFieldModule,
        MatInputModule,
        NoopAnimationsModule
      ],
      declarations: [ AdminCabinDetailComponent ],
      providers: [
        {provide: MatDialogRef, useValue: mockDialogRef},
        {provide: MAT_DIALOG_DATA, useValue: mockCabinData },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCabinDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // Component Creation and Initialization Tests
  describe('Component Creation and Initialization', () => {
    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it('should inject MatDialogRef correctly', () => {
      expect(component.dialogRef).toBeDefined();
    });

    it('should inject MAT_DIALOG_DATA correctly', () => {
      expect(component.data).toBeDefined();
      expect(component.data).toEqual(mockCabinData);
    });

    it('should initialize with provided cabin data', () => {
      expect(component.data.id).toBe(1);
      expect(component.data.name).toBe('Test Cabin');
      expect(component.data.location).toBe('Test Location');
      expect(component.data.occupancy).toBe(4);
    });
  });

  // Data Binding Tests (Positive Cases)
  describe('Data Binding - Positive Cases', () => {
    it('should bind cabin name to input field', waitForAsync(() => {
      fixture.whenStable().then(() => {
        fixture.detectChanges();
        
        const nameInput = fixture.nativeElement.querySelector('input[placeholder="Cabin Name"]');
        expect(nameInput).toBeTruthy();
        expect(nameInput.value).toBe('Test Cabin');
      });
    }));

    it('should bind cabin location to input field', waitForAsync(() => {
      fixture.whenStable().then(() => {
        fixture.detectChanges();
        
        const locationInput = fixture.nativeElement.querySelector('input[placeholder="Location"]');
        expect(locationInput).toBeTruthy();
        expect(locationInput.value).toBe('Test Location');
      });
    }));

    it('should bind cabin occupancy to input field', waitForAsync(() => {
      fixture.whenStable().then(() => {
        fixture.detectChanges();
        
        const occupancyInput = fixture.nativeElement.querySelector('input[placeholder="Occupancy"]');
        expect(occupancyInput).toBeTruthy();
        expect(occupancyInput.value).toBe('4');
      });
    }));

    it('should display correct dialog title', () => {
      const title = fixture.nativeElement.querySelector('h1[mat-dialog-title]');
      expect(title).toBeTruthy();
      expect(title.textContent).toBe('Edit Cabin Information');
    });

    it('should update component data when input values change', fakeAsync(() => {
      fixture.detectChanges();
      tick();
      
      const nameInput = fixture.nativeElement.querySelector('input[placeholder="Cabin Name"]') as HTMLInputElement;
      nameInput.value = 'Updated Cabin';
      nameInput.dispatchEvent(new Event('input'));
      fixture.detectChanges();
      tick();

      expect(component.data.name).toBe('Updated Cabin');
    }));
  });

  // Dialog Interaction Tests (Positive Cases)
  describe('Dialog Interactions - Positive Cases', () => {
    it('should close dialog on no click', () => {
      component.onNoClick();
      expect(mockDialogRef.close).toHaveBeenCalled();
    });

    it('should close dialog without arguments when cancel is clicked', () => {
      component.onNoClick();
      expect(mockDialogRef.close).toHaveBeenCalledWith();
    });

    it('should have cancel button in the template', () => {
      const cancelButton = fixture.nativeElement.querySelector('button[mat-button]');
      expect(cancelButton).toBeTruthy();
      expect(cancelButton.textContent.trim()).toBe('Cancel');
    });

    it('should have save button in the template', () => {
      const buttons = fixture.nativeElement.querySelectorAll('button[mat-button]');
      expect(buttons.length).toBeGreaterThanOrEqual(2);
      const saveButton = buttons[1];
      expect(saveButton.textContent.trim()).toBe('Save');
    });

    it('should call onNoClick when cancel button is clicked', () => {
      spyOn(component, 'onNoClick');
      const cancelButton = fixture.nativeElement.querySelector('button[mat-button]');
      cancelButton.click();
      expect(component.onNoClick).toHaveBeenCalled();
    });

    it('should call onNoClick without errors when called multiple times', () => {
      component.onNoClick();
      component.onNoClick();
      component.onNoClick();
      expect(mockDialogRef.close).toHaveBeenCalledTimes(3);
    });
  });

  // Edge Cases and Negative Tests
  describe('Edge Cases and Negative Tests', () => {
    it('should handle empty cabin data object', waitForAsync(() => {
      TestBed.resetTestingModule();
      TestBed.configureTestingModule({
        imports: [
          FormsModule,
          MatDialogModule,
          MatFormFieldModule,
          MatInputModule,
          NoopAnimationsModule
        ],
        declarations: [ AdminCabinDetailComponent ],
        providers: [
          {provide: MatDialogRef, useValue: mockDialogRef},
          {provide: MAT_DIALOG_DATA, useValue: {} as Cabin},
        ]
      })
      .compileComponents()
      .then(() => {
        const emptyFixture = TestBed.createComponent(AdminCabinDetailComponent);
        const emptyComponent = emptyFixture.componentInstance;
        emptyFixture.detectChanges();
        
        expect(emptyComponent).toBeTruthy();
        expect(emptyComponent.data).toBeDefined();
      });
    }));

    it('should handle cabin with empty string values', waitForAsync(() => {
      TestBed.resetTestingModule();
      TestBed.configureTestingModule({
        imports: [
          FormsModule,
          MatDialogModule,
          MatFormFieldModule,
          MatInputModule,
          NoopAnimationsModule
        ],
        declarations: [ AdminCabinDetailComponent ],
        providers: [
          {provide: MatDialogRef, useValue: mockDialogRef},
          {provide: MAT_DIALOG_DATA, useValue: {id: 2, name: '', location: '', occupancy: 0}},
        ]
      })
      .compileComponents()
      .then(() => {
        const emptyFixture = TestBed.createComponent(AdminCabinDetailComponent);
        const emptyComponent = emptyFixture.componentInstance;
        emptyFixture.detectChanges();
        
        expect(emptyComponent.data.name).toBe('');
        expect(emptyComponent.data.location).toBe('');
        expect(emptyComponent.data.occupancy).toBe(0);
      });
    }));

    it('should handle cabin with zero occupancy', waitForAsync(() => {
      TestBed.resetTestingModule();
      TestBed.configureTestingModule({
        imports: [
          FormsModule,
          MatDialogModule,
          MatFormFieldModule,
          MatInputModule,
          NoopAnimationsModule
        ],
        declarations: [ AdminCabinDetailComponent ],
        providers: [
          {provide: MatDialogRef, useValue: mockDialogRef},
          {provide: MAT_DIALOG_DATA, useValue: {id: 3, name: 'Zero Cabin', location: 'Location', occupancy: 0}},
        ]
      })
      .compileComponents()
      .then(() => {
        const zeroFixture = TestBed.createComponent(AdminCabinDetailComponent);
        const zeroComponent = zeroFixture.componentInstance;
        zeroFixture.detectChanges();
        
        expect(zeroComponent.data.occupancy).toBe(0);
      });
    }));

    it('should handle cabin with negative occupancy', waitForAsync(() => {
      TestBed.resetTestingModule();
      TestBed.configureTestingModule({
        imports: [
          FormsModule,
          MatDialogModule,
          MatFormFieldModule,
          MatInputModule,
          NoopAnimationsModule
        ],
        declarations: [ AdminCabinDetailComponent ],
        providers: [
          {provide: MatDialogRef, useValue: mockDialogRef},
          {provide: MAT_DIALOG_DATA, useValue: {id: 4, name: 'Negative Cabin', location: 'Location', occupancy: -1}},
        ]
      })
      .compileComponents()
      .then(() => {
        const negativeFixture = TestBed.createComponent(AdminCabinDetailComponent);
        const negativeComponent = negativeFixture.componentInstance;
        negativeFixture.detectChanges();
        
        expect(negativeComponent.data.occupancy).toBe(-1);
      });
    }));

    it('should handle cabin with very large occupancy values', waitForAsync(() => {
      TestBed.resetTestingModule();
      TestBed.configureTestingModule({
        imports: [
          FormsModule,
          MatDialogModule,
          MatFormFieldModule,
          MatInputModule,
          NoopAnimationsModule
        ],
        declarations: [ AdminCabinDetailComponent ],
        providers: [
          {provide: MatDialogRef, useValue: mockDialogRef},
          {provide: MAT_DIALOG_DATA, useValue: {id: 5, name: 'Large Cabin', location: 'Location', occupancy: 999999}},
        ]
      })
      .compileComponents()
      .then(() => {
        const largeFixture = TestBed.createComponent(AdminCabinDetailComponent);
        const largeComponent = largeFixture.componentInstance;
        largeFixture.detectChanges();
        
        expect(largeComponent.data.occupancy).toBe(999999);
      });
    }));
  });

  // Tests with null/undefined data
  describe('Null and Undefined Data Handling', () => {
    it('should handle null values in cabin data', waitForAsync(() => {
      TestBed.resetTestingModule();
      TestBed.configureTestingModule({
        imports: [
          FormsModule,
          MatDialogModule,
          MatFormFieldModule,
          MatInputModule,
          NoopAnimationsModule
        ],
        declarations: [ AdminCabinDetailComponent ],
        providers: [
          {provide: MatDialogRef, useValue: mockDialogRef},
          {provide: MAT_DIALOG_DATA, useValue: {id: 6, name: null, location: null, occupancy: null}},
        ]
      })
      .compileComponents()
      .then(() => {
        const nullFixture = TestBed.createComponent(AdminCabinDetailComponent);
        const nullComponent = nullFixture.componentInstance;
        nullFixture.detectChanges();

        expect(nullComponent).toBeTruthy();
        expect(nullComponent.data.name).toBeNull();
        expect(nullComponent.data.location).toBeNull();
        expect(nullComponent.data.occupancy).toBeNull();
      });
    }));
  });
});
