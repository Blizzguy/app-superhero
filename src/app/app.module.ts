import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {SuperheroService} from "./services/superhero/superhero.service";
import { HttpClientModule } from '@angular/common/http';
import { AddOrEditDialogComponent } from './containers/superhero-filter/hero-filter/add-or-edit-dialog/add-or-edit-dialog.component';
import { DeleteDialogComponent } from './containers/superhero-filter/hero-filter/delete-dialog/delete-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [SuperheroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
