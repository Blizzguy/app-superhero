import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { SuperheroSearchParams } from '../../../../interfaces/superhero-search-params.interface';

@Component({
  selector: 'app-search-form-hero',
  templateUrl: './search-form-hero.component.html',
})
export class SearchFormHeroComponent implements OnInit {
  @Output() addNewHero: EventEmitter<any> = new EventEmitter<any>();
  @Output() updateSearchForm: EventEmitter<SuperheroSearchParams> =
    new EventEmitter<SuperheroSearchParams>();

  searchForm: FormGroup;

  constructor(private readonly formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.searchForm = this.buildDefaultSearchForm();
  }

  buildDefaultSearchForm(): FormGroup {
    return this.formBuilder.group({
      id: new FormControl(null, Validators.pattern('^[0-9]+$')),
      superheroname: new FormControl(null),
    });
  }

  search(): void {
    if (this.searchForm.valid) {
      this.updateSearchForm.emit(this.searchForm.value);
    }
  }
  setSearchFormDefaultValues(): void {
    this.searchForm = this.buildDefaultSearchForm();
  }

  addHero(): void {
    this.addNewHero.emit();
  }
}
