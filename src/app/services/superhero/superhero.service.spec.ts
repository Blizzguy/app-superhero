import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { SuperheroService } from './superhero.service';
import { SuperheroInterface } from '../../interfaces/superhero.interface';
import { SuperheroSearchParams } from '../../interfaces/superhero-search-params.interface';

describe('SuperheroService', () => {
    let service: SuperheroService;
    let httpMock: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [SuperheroService],
        });
        service = TestBed.inject(SuperheroService);
        httpMock = TestBed.inject(HttpTestingController);
    });

    afterEach(() => {
        httpMock.verify();
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should make a GET request to the API when calling search', () => {
        const expectedUrl = 'http://localhost:3000/superheroes';
        const expectedResponse: SuperheroInterface[] = [
            { id: 1, superheroName: 'Superman', power: 'Fly', name: 'Clark Kent' },
            { id: 2, superheroName: 'Batman', power: 'Rich', name: 'Bruce Wayne' },
        ];

        service.search().subscribe((response) => {
            expect(response).toEqual(expectedResponse);
        });

        const req = httpMock.expectOne(expectedUrl);
        expect(req.request.method).toBe('GET');
        req.flush(expectedResponse);
    });

    it('should filter the superhero list based on the search parameters', () => {
        const searchParams: SuperheroSearchParams = { superheroname: 'Superman' };
        const superheroList: SuperheroInterface[] = [
            { id: 1, superheroName: 'Superman', power: 'Fly', name: 'Clark Kent' },
            { id: 2, superheroName: 'Batman', power: 'Rich', name: 'Bruce Wayne' },
        ];
        const expectedFilteredSuperheroes: SuperheroInterface[] = [
            { id: 1, superheroName: 'Superman', power: 'Fly', name: 'Clark Kent' },
            { id: 2, superheroName: 'Batman', power: 'Rich', name: 'Bruce Wayne' },
        ];

        const filteredSuperheroes = service.filter(searchParams, superheroList);

        expect(filteredSuperheroes).toEqual(expectedFilteredSuperheroes);
    });

    // Add more unit tests for other methods in the SuperheroService class

});
