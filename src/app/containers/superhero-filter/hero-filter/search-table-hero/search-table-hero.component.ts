import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { SuperheroInterface } from '../../../../interfaces/superhero.interface';

@Component({
  selector: 'app-search-table-hero',
  templateUrl: './search-table-hero.component.html',
  styleUrl: './search-table-hero.component.scss',
})
export class SearchTableHeroComponent implements OnInit, OnChanges {
  @Input() superheroList: SuperheroInterface[];
  @Output() deleteSuperhero: EventEmitter<number> = new EventEmitter<number>();
  @Output() editSuperhero: EventEmitter<number> = new EventEmitter<number>();

  dataSource: MatTableDataSource<SuperheroInterface>;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  pageSize: number;
  length: number;
  displayedColumns: string[] = ['id','name', 'superheroName', 'power', 'actions'];

  constructor() {}

  delete(id: number): void {
    this.deleteSuperhero.emit(id);
  }

  edit(id: number): void {
    this.editSuperhero.emit(id);
  }

  ngOnInit(): void {
    console.log('superheroList', this.superheroList);
    this.pageSize = 5;
  }

  ngOnChanges(): void {
    this.dataSource = new MatTableDataSource(this.superheroList);
    this.dataSource.paginator = this.paginator;
    this.length = this.superheroList.length;
  }
}
