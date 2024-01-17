import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { HeroFilterComponent } from './hero-filter.component';
import { SuperheroService } from "../../../services/superhero/superhero.service";
import { SuperheroInterface } from "../../../interfaces/superhero.interface";
import { SearchTableHeroComponent } from './search-table-hero/search-table-hero.component';
import { SuperheroSearchParams } from '../../../interfaces/superhero-search-params.interface';
import { of } from 'rxjs';

describe('HeroFilterComponent', () => {
  let component: HeroFilterComponent;
  let fixture: ComponentFixture<HeroFilterComponent>;
  let superheroService: SuperheroService;
  let dialog: MatDialog;

  beforeEach(async () => {
    superheroService = jasmine.createSpyObj('SuperheroService', ['getSuperheroes', 'addSuperhero', 'updateSuperhero', 'deleteSuperhero']);
    dialog = jasmine.createSpyObj('MatDialog', ['open']);

    await TestBed.configureTestingModule({
      declarations: [HeroFilterComponent, SearchTableHeroComponent],
      providers: [
        { provide: SuperheroService, useValue: superheroService },
        { provide: MatDialog, useValue: dialog }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(HeroFilterComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch superheroes on initialization', () => {
    const superheroes: SuperheroInterface[] = [
      { id: 1, superheroName: 'Superman', power: 'Fly', name: 'Clark Kent' },
      { id: 1, superheroName: 'Superman', power: 'Fly', name: 'Clark Kent' }
    ];
    spyOn(superheroService, 'search').and.returnValue(of(superheroes));

    fixture.detectChanges();

    expect(component.superheroList).toEqual(superheroes);
  });

  it('should open dialog for adding a superhero', () => {
    component.addSuperhero();

    expect(dialog.open).toHaveBeenCalled();
  });

  it('should open dialog for updating a superhero', () => {
    const superheroId = 1;
    component.updateSuperhero(superheroId);

    expect(dialog.open).toHaveBeenCalledWith(SearchTableHeroComponent, {
      data: { superheroId },
      width: '500px'
    });
  });

  it('should delete a superhero', () => {
    const superheroId = 1;
    component.deleteSuperhero(superheroId);

    expect(superheroService.delete).toHaveBeenCalledWith(superheroId);
  });

  it('should filter superheroes', () => {
    const superheroSearchParams: SuperheroSearchParams = { superheroname: 'Superman' };
    component.filterSuperheroes(superheroSearchParams);

    expect(superheroService.filter).toHaveBeenCalledWith(superheroSearchParams, component.superheroList);
  });
});
