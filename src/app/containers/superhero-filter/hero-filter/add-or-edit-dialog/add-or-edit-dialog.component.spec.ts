import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup } from '@angular/forms';
import { AddOrEditDialogComponent } from './add-or-edit-dialog.component';
import { SuperheroInterface } from '../../../../interfaces/superhero.interface';

describe('AddOrEditDialogComponent', () => {
  let component: AddOrEditDialogComponent;
  let fixture: ComponentFixture<AddOrEditDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddOrEditDialogComponent],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: 'Superhero' },
        {
          provide: MatDialogRef,
          useValue: { close: jasmine.createSpy('close') },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AddOrEditDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize form', () => {
    expect(component.form).toBeInstanceOf(FormGroup);
  });

  it('should set addOrEdit to edit when superhero is not null', () => {
    const superhero: SuperheroInterface = {
      id: 1,
      name: 'Superman',
      superheroName: 'Superman',
      power: 'Flight',
    };
    component.superhero = superhero;
    component.ngOnInit();
    expect(component.addOrEdit).toBe('Editar');
  });
});
