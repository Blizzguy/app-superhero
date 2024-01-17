import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { SearchFormHeroComponent } from './search-form-hero.component';

describe('SearchFormHeroComponent', () => {
  let component: SearchFormHeroComponent;
  let fixture: ComponentFixture<SearchFormHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchFormHeroComponent],
      imports: [ReactiveFormsModule],
      providers: [FormBuilder]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchFormHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit addNewHero event when addHero is called', () => {
    spyOn(component.addNewHero, 'emit');
    component.addHero();
    expect(component.addNewHero.emit).toHaveBeenCalled();
  });

  it('should emit updateSearchForm event when setSearchFormDefaultValues is called', () => {
    spyOn(component.updateSearchForm, 'emit');
    component.setSearchFormDefaultValues();
    expect(component.updateSearchForm.emit).toHaveBeenCalled();
  });
});
