import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { SearchTableHeroComponent } from './search-table-hero.component';
import { SuperheroInterface } from '../../../../interfaces/superhero.interface';

describe('SearchTableHeroComponent', () => {
  let component: SearchTableHeroComponent;
  let fixture: ComponentFixture<SearchTableHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchTableHeroComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchTableHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit deleteSuperhero event when delete() is called', () => {
    const superheroId = 1;
    spyOn(component.deleteSuperhero, 'emit');
    component.delete(superheroId);
    expect(component.deleteSuperhero.emit).toHaveBeenCalledWith(superheroId);
  });

  it('should emit editSuperhero event when edit() is called', () => {
    const superheroId = 1;
    spyOn(component.editSuperhero, 'emit');
    component.edit(superheroId);
    expect(component.editSuperhero.emit).toHaveBeenCalledWith(superheroId);
  });

  it('should initialize dataSource with superheroList', () => {
    const superheroList: SuperheroInterface[] = [
      { id: 1, name: 'Superman', superheroName: 'Clark Kent', power: 'Flight' },
      { id: 2, name: 'Batman', superheroName: 'Bruce Wayne', power: 'Rich' },
    ];
    component.superheroList = superheroList;
    component.ngOnInit();
    expect(component.dataSource).toEqual(new MatTableDataSource<SuperheroInterface>(superheroList));
  });

  it('should update dataSource when superheroList changes', () => {
    const superheroList1: SuperheroInterface[] = [
      { id: 1, name: 'Superman', superheroName: 'Clark Kent', power: 'Flight' },
    ];
    const superheroList2: SuperheroInterface[] = [
      { id: 2, name: 'Batman', superheroName: 'Bruce Wayne', power: 'Rich' },
    ];
    component.superheroList = superheroList1;
    component.ngOnInit();
    expect(component.dataSource).toEqual(new MatTableDataSource<SuperheroInterface>(superheroList1));

    component.superheroList = superheroList2;
    component.ngOnChanges();
    expect(component.dataSource).toEqual(new MatTableDataSource<SuperheroInterface>(superheroList2));
  });
});
