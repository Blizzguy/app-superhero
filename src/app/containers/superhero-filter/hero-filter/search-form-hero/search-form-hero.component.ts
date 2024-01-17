import {Component, EventEmitter, OnChanges, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-search-form-hero',
  templateUrl: './search-form-hero.component.html',
  styleUrl: './search-form-hero.component.scss'
})
export class SearchFormHeroComponent implements OnInit, OnChanges {

  @Output() addNewHero: EventEmitter<any> = new EventEmitter<any>();

  searchForm: FormGroup;

    constructor(private readonly formBuilder: FormBuilder) { }

    ngOnInit(): void {
      this.searchForm = this.buildDefaultSearchForm();
    }

  buildDefaultSearchForm(): FormGroup {
    return this.formBuilder.group({
      id: new FormControl(null),
      superheroname: new FormControl(null)
    });
  }

  ngOnChanges(): void {
    this.setSearchFormDefaultValues();
  }

  setSearchFormDefaultValues(): void {
    this.searchForm = this.buildDefaultSearchForm();
  }

  addHero(): void {
    this.addNewHero.emit();
  }

}
