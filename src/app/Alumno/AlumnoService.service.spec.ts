/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AlumnoServiceService } from './AlumnoService.service';

describe('Service: AlumnoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AlumnoServiceService]
    });
  });

  it('should ...', inject([AlumnoServiceService], (service: AlumnoServiceService) => {
    expect(service).toBeTruthy();
  }));
});
