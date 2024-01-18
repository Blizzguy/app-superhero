import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HeroFilterComponent } from './hero-filter/hero-filter.component';

export const routes: Routes = [
  { path: '', redirectTo: 'searcher', pathMatch: 'full' },
  {
    path: 'searcher',
    data: { breadcrumb: 'Listado de Superheroes' },
    component: HeroFilterComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SuperheroFilterRoutingModule {}
