import { Component, OnInit } from '@angular/core';
import { SuperheroService } from '../../../services/superhero/superhero.service';
import { SuperheroInterface } from '../../../interfaces/superhero.interface';
import { MatDialog } from '@angular/material/dialog';
import { SuperheroSearchParams } from '../../../interfaces/superhero-search-params.interface';
import { AddOrEditDialogComponent } from './add-or-edit-dialog/add-or-edit-dialog.component';
import { DeleteDialogComponent } from './delete-dialog/delete-dialog.component';

@Component({
  selector: 'app-hero-filter',
  templateUrl: './hero-filter.component.html',
  styleUrl: './hero-filter.component.scss',
})
export class HeroFilterComponent implements OnInit {
  constructor(
    private readonly heroService: SuperheroService,
    private readonly dialog: MatDialog
  ) {}

  superheroList: SuperheroInterface[];
  baseHeroList: SuperheroInterface[];

  ngOnInit(): void {
    this.heroService
      .search()
      .subscribe((superheroList: SuperheroInterface[]) => {
        this.superheroList = superheroList;
        this.baseHeroList = superheroList;
      });
  }

  addOrEdit(superheroId?: number): void {
    superheroId ? this.updateSuperhero(superheroId) : this.addSuperhero();
  }

  updateSuperhero(superheroId: number): void {
    //const hero = this.heroService.searchFromId(superheroId);
    const hero = this.superheroList.find(
      (superhero: SuperheroInterface) => superhero.id === superheroId
    );
    const dialogRef = this.dialog.open(AddOrEditDialogComponent, {
      data: { ...hero, isNew: false },
    });

    dialogRef.afterClosed().subscribe((result: SuperheroInterface) => {
      if (result) {
        this.superheroList = [
          ...this.heroService.update(result, this.superheroList),
        ];
        this.baseHeroList = this.superheroList;
      }
    });
  }

  addSuperhero(): void {
    const dialogRef = this.dialog.open(AddOrEditDialogComponent, {
      data: { isNew: true },
    });

    dialogRef.afterClosed().subscribe((result: SuperheroInterface) => {
      if (result) {
        this.superheroList = [
          ...this.heroService.add(result, this.superheroList),
        ];
        this.baseHeroList = this.superheroList;
      }
    });
  }

  deleteSuperhero(id: number) {
    const hero = this.superheroList.find(
      (superhero: SuperheroInterface) => superhero.id === id
    );
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      data: hero ? hero.superheroName : null,
    });

    dialogRef.afterClosed().subscribe((result: boolean) => {
      if (result) {
        this.superheroList = [
          ...this.heroService.delete(id, this.superheroList),
        ];
        this.baseHeroList = this.superheroList;
      }
    });
  }

  filterSuperheroes(superheroSearchParams: SuperheroSearchParams): void {
    this.superheroList = [
      ...this.heroService.filter(superheroSearchParams, this.baseHeroList),
    ];
  }
}
