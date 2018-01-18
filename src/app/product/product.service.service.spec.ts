import { TestBed, inject } from '@angular/core/testing';

import { Product.ServiceService } from './product.service.service';

describe('Product.ServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Product.ServiceService]
    });
  });

  it('should be created', inject([Product.ServiceService], (service: Product.ServiceService) => {
    expect(service).toBeTruthy();
  }));
});
