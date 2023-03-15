import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

import { CabinListComponent } from './cabin-list.component';
import { CabinsService } from '../services/cabins.service';
import { BehaviorSubject } from 'rxjs';
import { Cabin } from '../models';
import { CABINS } from '../models/mock-cabins';

describe('CabinListComponent', () => {
  let component: CabinListComponent;
  let fixture: ComponentFixture<CabinListComponent>;
  let mockCabinsService: MockCabinsService;

  beforeEach(async () => {

    mockCabinsService = new MockCabinsService();

    await TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule],
      declarations: [ CabinListComponent ],
      providers: [{provide: CabinsService, useValue: mockCabinsService}]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CabinListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('Initialization', () => {
    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });

});

class MockCabinsService {

  private getCabinsSource = new BehaviorSubject<Cabin[]>(CABINS);
  public getCabinsChanged$ = this.getCabinsSource.asObservable();

  getCabins() { 

  }

}
