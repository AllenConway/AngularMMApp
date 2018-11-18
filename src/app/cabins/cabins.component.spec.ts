import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

import { CabinsComponent } from './cabins.component';
import { CabinListComponent } from './cabin-list.component';
import { CabinsService } from './cabins.service';


describe('CabinsComponent', () => {
  let component: CabinsComponent;
  let fixture: ComponentFixture<CabinsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule],
      declarations: [
        CabinsComponent,
        CabinListComponent],
      providers: [CabinsService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CabinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
