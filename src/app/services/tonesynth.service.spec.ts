import { TestBed } from '@angular/core/testing';

import { TonesynthService } from './tonesynth.service';

describe('TonesynthService', () => {
  let service: TonesynthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TonesynthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
