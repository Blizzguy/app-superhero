import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AddOrEditDialogComponent } from './add-or-edit-dialog.component';
import { SuperheroInterface } from '../../../../interfaces/superhero.interface';

describe('AddOrEditDialogComponent', () => {
  let component: AddOrEditDialogComponent;
  let fixture: ComponentFixture<AddOrEditDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddOrEditDialogComponent],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} },
        FormBuilder,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
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

  it('should set addOrEdit to "edit" when superhero is not null', () => {
    const superhero: SuperheroInterface = { id: 1, name: 'Superman', superheroName: 'Superman', power: 'Flight' };
    component.superhero = superhero;
    component.ngOnInit();
    expect(component.addOrEdit).toBe('edit');
  });

  it('should call confirm method and close dialog', () => {
    const dialogRef = TestBed.inject(MatDialogRef);
    spyOn(dialogRef, 'close');
    component.confirm();
    expect(dialogRef.close).toHaveBeenCalled();
  });
});

