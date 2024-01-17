import {Component, OnInit} from '@angular/core';
import {SuperheroService} from "../../../services/superhero/superhero.service";
import {SuperheroInterface} from "../../../interfaces/superhero.interface";
import { MatDialog } from '@angular/material/dialog';
import { SearchTableHeroComponent } from './search-table-hero/search-table-hero.component';
import { SuperheroSearchParams } from '../../../interfaces/superhero-search-params.interface';

@Component({
  selector: 'app-hero-filter',
  templateUrl: './hero-filter.component.html',
  styleUrl: './hero-filter.component.scss'
})
export class HeroFilterComponent implements OnInit {
  constructor(private readonly heroService: SuperheroService, private readonly dialog: MatDialog) {}

  superheroList: SuperheroInterface[];

  ngOnInit(): void {
    this.heroService.search().subscribe((superheroList: SuperheroInterface[]) => {
      this.superheroList = superheroList;
    });
  }

  addOrEdit(superheroId?: number): void {
    superheroId ? this.updateSuperhero(superheroId) : this.addSuperhero();
  }

  updateSuperhero(superheroId: number): void {
    //const superhero = this.superheroList.find((superhero: SuperheroInterface) => superhero.id === superheroId);
    const hero = this.heroService.searchFromId(superheroId);
    const dialogRef = this.dialog.open(SearchTableHeroComponent, {
      data: { superhero: hero, isNew: false },
      width: '500px',
      height: 'auto'
    });

    dialogRef.afterClosed().subscribe((result: SuperheroInterface) => {
      if (result) {
        this.heroService.update(result, this.superheroList);
      }
    });
  }

  addSuperhero(): void {
    const dialogRef = this.dialog.open(SearchTableHeroComponent, {
      data: { superhero: {}, isNew: true },
      width: '500px',
      height: 'auto'
    });

    dialogRef.afterClosed().subscribe((result: SuperheroInterface) => {
      if (result) {
        this.heroService.add(result, this.superheroList);
      }
    });
  }

  deleteSuperhero(id: number): void {
    this.heroService.delete(id).subscribe((result: SuperheroInterface) => {
      this.superheroList = this.superheroList.filter((superhero: SuperheroInterface) => superhero.id !== id);
    });
  }

  filterSuperheroes(superheroSearchParams: SuperheroSearchParams): void {
    this.superheroList = this.heroService.filter(superheroSearchParams, this.superheroList);
  }

}
