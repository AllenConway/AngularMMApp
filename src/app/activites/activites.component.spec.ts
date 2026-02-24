import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSnackBar } from '@angular/material/snack-bar';
import { provideRouter } from '@angular/router';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { ActivitesComponent } from './activites.component';
import { Activity } from './models/activity';

describe('ActivitesComponent', () => {
  let component: ActivitesComponent;
  let fixture: ComponentFixture<ActivitesComponent>;
  let mockSnackBar: { open: jasmine.Spy };

  beforeEach(async () => {
    mockSnackBar = {
      open: jasmine.createSpy('open')
    };

    await TestBed.configureTestingModule({
      imports: [ 
        ActivitesComponent,
        NoopAnimationsModule
      ],
      providers: [
        provideRouter([])
      ]
    })
    .overrideProvider(MatSnackBar, { useValue: mockSnackBar })
    .compileComponents();

    fixture = TestBed.createComponent(ActivitesComponent);
    component = fixture.componentInstance;
  });

  afterEach(() => {
    mockSnackBar.open.calls.reset();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Positive Scenarios', () => {
    it('should initialize with empty activities array', () => {
      expect(component.activities).toEqual([]);
    });

    it('should populate activities array on ngOnInit', () => {
      component.ngOnInit();
      expect(component.activities.length).toBe(6);
    });

    it('should populate activities with correct data on ngOnInit', () => {
      component.ngOnInit();
      
      expect(component.activities).toEqual([
        { id: 1, name: 'Swimming', icon: 'pool', location: 'Main Pool' },
        { id: 2, name: 'Exercise', icon: 'fitness_center', location: 'Fitness Center' },
        { id: 3, name: 'Hiking', icon: 'hiking', location: 'Mountain Trail' },
        { id: 4, name: 'Tennis', icon: 'sports_tennis', location: 'Tennis Courts' },
        { id: 5, name: 'Biking', icon: 'directions_bike', location: 'Bike Path' },
        { id: 6, name: 'Kayaking', icon: 'kayaking', location: 'Lake Dock' },
      ]);
    });

    it('should have all activities with required properties', () => {
      component.ngOnInit();
      
      component.activities.forEach(activity => {
        expect(activity.id).toBeDefined();
        expect(activity.name).toBeDefined();
        expect(activity.icon).toBeDefined();
        expect(activity.location).toBeDefined();
        expect(typeof activity.id).toBe('number');
        expect(typeof activity.name).toBe('string');
        expect(typeof activity.icon).toBe('string');
        expect(typeof activity.location).toBe('string');
      });
    });

    it('should open snackbar with correct message when activity is selected', () => {
      const activity: Activity = { id: 1, name: 'Swimming', icon: 'pool', location: 'Main Pool' };
      
      component.selectActivity(activity);
      
      expect(mockSnackBar.open).toHaveBeenCalledWith(
        'Stop by the activities desk to book a Swimming reservation!',
        'close'
      );
    });

    it('should open snackbar for each different activity', () => {
      component.ngOnInit();
      
      component.activities.forEach((activity) => {
        component.selectActivity(activity);
        expect(mockSnackBar.open).toHaveBeenCalledWith(
          `Stop by the activities desk to book a ${activity.name} reservation!`,
          'close'
        );
      });
      
      expect(mockSnackBar.open).toHaveBeenCalledTimes(6);
    });
  });

  describe('Negative Scenarios', () => {
    it('should handle selectActivity with activity that has empty name', () => {
      const activity: Activity = { id: 1, name: '', icon: 'pool', location: 'Main Pool' };
      
      component.selectActivity(activity);
      
      expect(mockSnackBar.open).toHaveBeenCalledWith(
        'Stop by the activities desk to book a  reservation!',
        'close'
      );
    });

    it('should handle selectActivity with activity that has special characters in name', () => {
      const activity: Activity = { id: 1, name: 'Rock & Roll', icon: 'music', location: 'Stage' };
      
      component.selectActivity(activity);
      
      expect(mockSnackBar.open).toHaveBeenCalledWith(
        'Stop by the activities desk to book a Rock & Roll reservation!',
        'close'
      );
    });

    it('should handle selectActivity with activity that has very long name', () => {
      const longName = 'A'.repeat(100);
      const activity: Activity = { id: 1, name: longName, icon: 'pool', location: 'Main Pool' };
      
      component.selectActivity(activity);
      
      expect(mockSnackBar.open).toHaveBeenCalledWith(
        `Stop by the activities desk to book a ${longName} reservation!`,
        'close'
      );
    });

    it('should open snackbar even if activity has null icon', () => {
      const activity: Activity = { id: 1, name: 'Swimming', icon: null as any, location: 'Main Pool' };
      
      component.selectActivity(activity);
      
      expect(mockSnackBar.open).toHaveBeenCalled();
    });

    it('should open snackbar even if activity has null location', () => {
      const activity: Activity = { id: 1, name: 'Swimming', icon: 'pool', location: null as any };
      
      component.selectActivity(activity);
      
      expect(mockSnackBar.open).toHaveBeenCalled();
    });
  });
});
