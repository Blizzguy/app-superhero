import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchTableHeroComponent } from './search-table-hero.component';
import { MatTableDataSource } from '@angular/material/table';
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
    component.dataSource = new MatTableDataSource<SuperheroInterface>([]);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit deleteSuperhero when delete is called', () => {
    spyOn(component.deleteSuperhero, 'emit');
    component.delete(1);
    expect(component.deleteSuperhero.emit).toHaveBeenCalledWith(1);
  });

  it('should emit editSuperhero when edit is called', () => {
    spyOn(component.editSuperhero, 'emit');
    component.edit(1);
    expect(component.editSuperhero.emit).toHaveBeenCalledWith(1);
  });
});
