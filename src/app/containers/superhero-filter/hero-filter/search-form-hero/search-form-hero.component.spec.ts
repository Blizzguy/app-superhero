import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchFormHeroComponent } from './search-form-hero.component';

describe('SearchFormHeroComponent', () => {
  let component: SearchFormHeroComponent;
  let fixture: ComponentFixture<SearchFormHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchFormHeroComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SearchFormHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
