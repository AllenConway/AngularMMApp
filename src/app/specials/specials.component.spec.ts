import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialsComponent } from './specials.component';

describe('SpecialsComponent', () => {
  let component: SpecialsComponent;
  let fixture: ComponentFixture<SpecialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ SpecialsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpecialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
