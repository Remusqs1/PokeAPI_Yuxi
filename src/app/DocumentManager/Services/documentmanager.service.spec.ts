import { TestBed } from '@angular/core/testing';

import { DocumentmanagerService } from './documentmanager.service';

describe('DocumentmanagerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DocumentmanagerService = TestBed.get(DocumentmanagerService);
    expect(service).toBeTruthy();
  });
});
