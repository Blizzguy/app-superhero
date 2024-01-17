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

    if (params.id) {
      // Filtrar por id
      for (let i = 0; i < herolist.length; i++) {
        if (params.id && herolist[i].id === params.id) {
          filteredList.push(herolist[i]);
        }
      }

      // Si no se encontraron resultados por id, devolver array vacío
      if (filteredList.length === 0) {
        return [];
      }
    }

    // Filtrar por nombre
    if (params.superheroname) {
      filteredList = filteredList.filter((superhero: SuperheroInterface) => {
        return superhero.superheroName.includes(params.superheroname ?? '');
      });
    }

    return filteredList;
  }

  searchFromId(id: number): Observable<SuperheroInterface> {
    return this.http.get<SuperheroInterface>(`${this.apiUrl}/response/${id}`);
  }

  delete(id: number): Observable<SuperheroInterface> {
    return this.http.delete<SuperheroInterface>(
      `${this.apiUrl}/response/${id}`
    );
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
