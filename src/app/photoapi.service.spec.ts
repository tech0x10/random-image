import { TestBed } from '@angular/core/testing';

import { PhotoapiService } from './photoapi.service';

describe('PhotoapiService', () => {
  let service: PhotoapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhotoapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
