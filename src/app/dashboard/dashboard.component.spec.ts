import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { DashboardComponent } from './dashboard.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CabinsService } from '../cabins/services/cabins.service';
import { HttpClientModule } from '@angular/common/http';
import { Cabin } from '../cabins/models';
import { of } from 'rxjs';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        NgbModule
      ],
      declarations: [ DashboardComponent ],
      providers: [ CabinsService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getCabins on init', () => {
    const cabinsService = TestBed.inject(CabinsService);
    spyOn(cabinsService, 'getCabins').and.callThrough();
    component.ngOnInit();
    expect(cabinsService.getCabins).toHaveBeenCalled();
  });

  it('should assign cabins$ on init', () => {
    const cabinsService = TestBed.inject(CabinsService);
    const cabinsData: Cabin[] = [
      {id: 1, name: 'Cabin 1', location: 'Location 1', occupancy: 2},
      {id: 2, name: 'Cabin 2', location: 'Location 2', occupancy: 3},
      {id: 3, name: 'Cabin 3', location: 'Location 3', occupancy: 4}
    ];
    
    spyOn(cabinsService['getCabinsSource'], 'next').and.callFake((newCabins: Cabin[]) => {
      cabinsService.getCabinsChanged$ = of(newCabins);
    });
  
    cabinsService['getCabinsSource'].next(cabinsData);
    
    component.ngOnInit();
    component.cabins$.subscribe(cabins => {
      expect(cabins).toEqual(cabinsData);
    });
  });

  it('should make cabins$ observable of the data', () => {
    const cabinsData: Cabin[] = [
      {id: 1, name: 'Cabin 1', location: 'Location 1', occupancy: 2},
      {id: 2, name: 'Cabin 2', location: 'Location 2', occupancy: 3}
    ];
    component.onCabinsLoaded(cabinsData);
    component.cabins$.subscribe(cabins => {
      expect(cabins).toEqual(cabinsData);
    });
  });
  
});