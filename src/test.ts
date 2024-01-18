// This file is required by karma.conf.js and loads recursively all the .spec and framework files

import 'zone.js/testing';  // Required for fakeAsync()
import { getTestBed } from '@angular/core/testing';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';
import './app/app.component.spec';
import './app/containers/superhero-filter/hero-filter/hero-filter.component.spec';
import './app/containers/superhero-filter/hero-filter/delete-dialog/delete-dialog.component.spec';
import './app/containers/superhero-filter/hero-filter/search-form-hero/search-form-hero.component.spec';
import './app/containers/superhero-filter/hero-filter/search-table-hero/search-table-hero.component.spec';

// First, initialize the Angular testing environment.
getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
);