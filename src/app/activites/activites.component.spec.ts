import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivitesComponent } from './activites.component';

describe('ActivitesComponent', () => {
  let component: ActivitesComponent;
  let fixture: ComponentFixture<ActivitesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ActivitesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActivitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
