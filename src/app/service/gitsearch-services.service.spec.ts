import { TestBed } from '@angular/core/testing';

import { GitsearchServicesService } from './gitsearch-services.service';

describe('GitsearchServicesService', () => {
  let service: GitsearchServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GitsearchServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
