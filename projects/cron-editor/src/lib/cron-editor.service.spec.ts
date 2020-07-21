import { TestBed } from '@angular/core/testing';

import { CronEditorService } from './cron-editor.service';

describe('CronEditorService', () => {
  let service: CronEditorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CronEditorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
