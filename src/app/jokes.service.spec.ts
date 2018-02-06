/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { JokesService } from './jokes.service';

describe('JokesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JokesService]
    });
  });

  it('should ...', inject([JokesService], (service: JokesService) => {
    expect(service).toBeTruthy();
  }));
});
