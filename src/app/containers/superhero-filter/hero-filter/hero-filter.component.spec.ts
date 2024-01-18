import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing'; // new import
import { HeroFilterComponent } from './hero-filter.component';

describe('HeroFilterComponent', () => {
  let component: HeroFilterComponent;
  let fixture: ComponentFixture<HeroFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [HeroFilterComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`superheroList should be undefined`, () => {
    expect(component.superheroList).toBeUndefined();
  });

  it(`baseHeroList should be undefined`, () => {
    expect(component.baseHeroList).toBeUndefined();
  });
});
