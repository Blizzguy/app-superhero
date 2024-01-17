import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchTableHeroComponent } from './search-table-hero.component';

describe('SearchTableHeroComponent', () => {
  let component: SearchTableHeroComponent;
  let fixture: ComponentFixture<SearchTableHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchTableHeroComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SearchTableHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
