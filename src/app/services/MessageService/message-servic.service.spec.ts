import { TestBed } from '@angular/core/testing';

import { MessageServicService } from './message-servic.service';

describe('MessageServicService', () => {
  let service: MessageServicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MessageServicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
