import { TestBed } from '@angular/core/testing';

import { AllFilesServiceService } from './all-files-service.service';

describe('AllFilesServiceService', () => {
  let service: AllFilesServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllFilesServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
