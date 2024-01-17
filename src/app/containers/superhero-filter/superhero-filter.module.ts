import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeroFilterComponent} from "./hero-filter/hero-filter.component";
import {SuperheroFilterRoutingModule} from "./superhero-filter-routing.module"
import {SearchFormHeroComponent} from "./hero-filter/search-form-hero/search-form-hero.component";
import {ReactiveFormsModule} from "@angular/forms";
import {MatModule} from "../../modules/material.module";
import {SearchTableHeroComponent} from "./hero-filter/search-table-hero/search-table-hero.component";
import { AddOrEditDialogComponent } from './hero-filter/add-or-edit-dialog/add-or-edit-dialog.component';
import { DeleteDialogComponent } from './hero-filter/delete-dialog/delete-dialog.component';

@NgModule({
  declarations: [
    HeroFilterComponent,
    SearchTableHeroComponent,
    SearchFormHeroComponent,
    AddOrEditDialogComponent,
    DeleteDialogComponent
  ],
  imports: [
    SuperheroFilterRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    MatModule
  ]
})
export class SuperheroFilterModule { }
