import { TestBed } from '@angular/core/testing';

import { FakeApiProductsService } from './fake-api-products.service';

describe('FakeApiProductsService', () => {
  let service: FakeApiProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FakeApiProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
