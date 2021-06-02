import { TestBed } from '@angular/core/testing';

import { CakedetailResolverService } from './cakedetail-resolver.service';

describe('CakedetailResolverService', () => {
  let service: CakedetailResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CakedetailResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
