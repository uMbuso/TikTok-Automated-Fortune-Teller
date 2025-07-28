import { TestBed } from '@angular/core/testing';
import { FortuneService } from './fortune.service'; // Corrected import

describe('FortuneService', () => { // Changed to FortuneService
  let service: FortuneService; // Changed type to FortuneService

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FortuneService); // Inject FortuneService
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});