import { Injectable } from '@angular/core';
import { SuperheroInterface } from '../../interfaces/superhero.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SuperheroSearchParams } from '../../interfaces/superhero-search-params.interface';

@Injectable({
  providedIn: 'root',
})
export class SuperheroService {
  constructor(private readonly http: HttpClient) {}

  readonly apiUrl = 'http://localhost:3000';


  search(): Observable<SuperheroInterface[]> {
    return this.http.get<SuperheroInterface[]>(`${this.apiUrl}/response`);
  }

  filter(
    params: SuperheroSearchParams,
    herolist: SuperheroInterface[]
  ): SuperheroInterface[] {
    let filteredList: SuperheroInterface[] = [];

    if (params.id && params.id.toString() !== '') {
      filteredList = herolist.filter(
        (superhero: SuperheroInterface) => superhero.id === params.id
      );

      // If no results found by id, return empty array
      if (filteredList.length === 0) {
        return [];
      }
    }

    // Filter by superhero name
    if (params.superheroname && params.superheroname !== '') {
      filteredList = herolist.filter((superhero: SuperheroInterface) => {
        return superhero.superheroName.toLowerCase().includes(params.superheroname.toLowerCase());
      });
    }

    if(filteredList.length === 0){
      return herolist;
    }

    return filteredList;
  }

  searchFromId(id: number): Observable<SuperheroInterface> {
    return this.http.get<SuperheroInterface>(`${this.apiUrl}/response/${id}`);
  }

  delete(id: number, superheroList: SuperheroInterface[]): SuperheroInterface[] {
    return superheroList.filter((superhero: SuperheroInterface) => superhero.id !== id);
  }

  update(
    superheroToUpdate: SuperheroInterface,
    superheroList: SuperheroInterface[]
  ): SuperheroInterface[] {
    const index = superheroList.findIndex(
      (superhero: SuperheroInterface) => superhero.id === superheroToUpdate.id
    );
    superheroList[index] = superheroToUpdate;
    return superheroList;
  }

  add(
    superheroToAdd: SuperheroInterface,
    superheroList: SuperheroInterface[]
  ): SuperheroInterface[] {
    let currentId =
      superheroList.length > 0
        ? Math.max(...superheroList.map((superhero) => superhero.id), 0) + 1
        : 1;
    superheroToAdd.id = currentId;
    superheroList.push(superheroToAdd);
    return superheroList;
  }
}
