import { TestBed, inject } from '@angular/core/testing';

import { CabinsService } from './cabins.service';
import { Cabin } from './cabin';
import { HttpClient, HttpClientModule } from '@angular/common/http';

describe('CabinsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [CabinsService]
    });
  });

  // Get the service from the root injector via the TestBed
  let cabinsService: CabinsService;
  beforeEach(() => { cabinsService = TestBed.get(CabinsService); });

  it('should be created', inject([CabinsService], (service: CabinsService) => {
    expect(service).toBeTruthy();
  }));

  // This is an integration test and NOT a good idea
  it('should call CabinsService and return real data', (done: DoneFn) => {
    // expect(cabinsService.getCabins()[0].id).toEqual(1);

    cabinsService.getCabinsChanged$.subscribe(value => {
        expect(value).not.toBeNull();
        done();
      });

  });

  it('should call CabinsService using spyOn and return mock data', () => {
    // Arrange
    const getCabinsMock: Cabin[] = [
      { id: 123, name: 'Big Bear Cabin', location: 'East Mountain Cabins', occupancy: 8 }
    ];
    const cabinServiceSpy = spyOn(cabinsService, 'getCabins').and.returnValue(getCabinsMock);
    // Act
    const result = cabinsService.getCabins();
    // Assert
    expect(result[0].id).toEqual(123);
  });

  it('should call CabinsService using spyOn with a fake implementation', () => {
    // Arrange
    const getCabinsFake = () => {
      return [
        { id: 100, name: 'Big Bear Cabin', location: 'East Mountain Cabins', occupancy: 8 }
      ];
    };
    const cabinServiceSpy = spyOn(cabinsService, 'getCabins').and.callFake(getCabinsFake);
    // Act
    const result = cabinsService.getCabins();
    // Assert
    expect(result[0].id).toEqual(100);
  });

  it('should call CabinsService using spyOn toHaveBeenCalled matcher', () => {
    // Arrange
    const cabinServiceSpy = spyOn(cabinsService, 'getCabins');
    // Act
    const result = cabinsService.getCabins();
    // Assert
    expect(cabinServiceSpy).toHaveBeenCalled();
  });

  it('should call carService using spyOn toHaveBeenCalled matcher', () => {
    // Arrange
    const cabinServiceSpy = spyOn(cabinsService, 'getCabins');
    // Act
    const result = cabinsService.getCabins();
    // Assert
    expect(cabinServiceSpy).toHaveBeenCalledTimes(1);
  });


});
