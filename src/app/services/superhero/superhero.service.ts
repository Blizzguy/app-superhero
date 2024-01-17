import { Injectable } from '@angular/core';
import { SuperheroInterface} from "../../interfaces/superhero.interface";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SuperheroService {

  constructor(private readonly http: HttpClient) {}

  readonly apiUrl = 'http://localhost:3000';

  search(): Observable<SuperheroInterface[]> {
    return this.http.get<SuperheroInterface[]>(`${this.apiUrl}/response`);
  }

  searchFromId(id: number): Observable<SuperheroInterface> {
    return this.http.get<SuperheroInterface>(`${this.apiUrl}/response/${id}`);
  }

  delete(id: number): Observable<SuperheroInterface> {
    return this.http.delete<SuperheroInterface>(`${this.apiUrl}/response/${id}`);
  }

  update(superheroToUpdate: SuperheroInterface, superheroList: SuperheroInterface[]): SuperheroInterface[] {
    const index = superheroList.findIndex((superhero: SuperheroInterface) => superhero.id === superheroToUpdate.id);
    superheroList[index] = superheroToUpdate;
    return superheroList;
  }

  add(superheroToAdd: SuperheroInterface, superheroList: SuperheroInterface[]): SuperheroInterface[] {
    let currentId = superheroList.length > 0 ? Math.max(...superheroList.map(superhero => superhero.id), 0) + 1 : 1;
    superheroToAdd.id = currentId;
    superheroList.push(superheroToAdd);
    return superheroList;
  }

  
}
