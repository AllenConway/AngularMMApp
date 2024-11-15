import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { SpyLocation } from '@angular/common/testing';
import { FormsModule } from '@angular/forms';
import { CabinDetailComponent } from './cabin-detail.component';
import { RouterTestingModule } from '@angular/router/testing';
import { CabinsService } from '../services/cabins.service';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { Cabin } from '../models';
import { Location } from '@angular/common';

describe('CabinDetailComponent', () => {
  let component: CabinDetailComponent;
  let fixture: ComponentFixture<CabinDetailComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
    declarations: [CabinDetailComponent],
    imports: [RouterTestingModule, FormsModule],
    providers: [CabinsService,
        { provide: Location, useClass: SpyLocation }, provideHttpClient(withInterceptorsFromDi())]
})
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CabinDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should subscribe to getCabinsChanged$ on init', () => {
    const cabinsService = TestBed.inject(CabinsService);
    const getCabinsChangedSpy = spyOn(cabinsService.getCabinsChanged$, 'subscribe');

    component.ngOnInit();

    expect(getCabinsChangedSpy).toHaveBeenCalled();
  });

  it('should call getCabins on init', () => {
    const cabinsService = TestBed.inject(CabinsService);
    const getCabinsSpy = spyOn(cabinsService, 'getCabins');

    component.ngOnInit();

    expect(getCabinsSpy).toHaveBeenCalled();
  });

  it('should unsubscribe from cabinsSubscription on destroy', () => {
    const unsubscribeSpy = spyOn(component['cabinsSubscription'], 'unsubscribe');

    component.ngOnDestroy();

    expect(unsubscribeSpy).toHaveBeenCalled();
  });

  it('should find cabin by id', () => {
    const cabins: Cabin[] = [
      { id: 1, location: 'B', name: 'Cabin 1', occupancy: 2 },
      { id: 2, location: 'A', name: 'Cabin 2', occupancy: 4 }
    ];
    component.cabins = cabins;
    component.id = '1';

    component.getCabin();

    expect(component.cabin).toEqual(cabins[0]);
  });

  it('should go back to the previous location', () => {
    const location = TestBed.inject(Location);
    const backSpy = spyOn(location, 'back');

    component.goBack();

    expect(backSpy).toHaveBeenCalled();
  });

});
