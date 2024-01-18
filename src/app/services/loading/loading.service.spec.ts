import { TestBed } from '@angular/core/testing';
import { LoadingService } from './loading.service';


describe('LoadingService', () => {
    let service: LoadingService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(LoadingService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should initialize with loading set to false', () => {
        service.loading.subscribe((isLoading) => {
            expect(isLoading).toBeFalse();
        });
    });

    it('should show loading', () => {
        service.show();
        service.loading.subscribe((isLoading) => {
            expect(isLoading).toBeTrue();
        });
    });

    it('should hide loading', () => {
        service.show();
        service.hide();
        service.loading.subscribe((isLoading) => {
            expect(isLoading).toBeFalse();
        });
    });

    it('should increment loading count when showing', () => {
        service.show();
        expect(service['loadingCount']).toBe(1);
    });

    it('should decrement loading count when hiding', () => {
        service.show();
        service.hide();
        expect(service['loadingCount']).toBe(0);
    });
});

