import { TestBed } from '@angular/core/testing';

import { CabinsSignalsService } from './cabins.signals.service';
import { HttpClient } from '@angular/common/http';

describe('CabinsSignalsService', () => {
  let service: CabinsSignalsService;
  let httpClient: HttpClient;

  beforeEach(() => {
    httpClient = new HttpClient(null);
    // TestBed.configureTestingModule({});
    // service = TestBed.inject(CabinsSignalsService);
  });

  it('should be created', () => {
    service = new CabinsSignalsService(httpClient);
    expect(service).toBeTruthy();
  });
});
