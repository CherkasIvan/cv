import { TestBed } from '@angular/core/testing';

import { LogoutDialogService } from './logout-dialog.service';

describe('LogoutDialogService', () => {
    let service: LogoutDialogService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(LogoutDialogService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
