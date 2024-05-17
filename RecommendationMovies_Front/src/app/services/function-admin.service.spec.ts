import { TestBed } from '@angular/core/testing';

import { FunctionAdminService } from './function-admin.service';

describe('FunctionAdminService', () => {
  let service: FunctionAdminService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FunctionAdminService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
