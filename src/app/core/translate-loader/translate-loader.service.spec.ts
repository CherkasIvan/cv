import { TestBed } from '@angular/core/testing';

import { TranslateLoaderService } from './translate-loader.service';

describe('TranslateLoaderService', () => {
  let service: TranslateLoaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TranslateLoaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
