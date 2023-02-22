/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ProfesorService } from './Profesor.service';

describe('Service: Profesor', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProfesorService]
    });
  });

  it('should ...', inject([ProfesorService], (service: ProfesorService) => {
    expect(service).toBeTruthy();
  }));
});
