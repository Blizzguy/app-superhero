import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AddOrEditDialogComponent } from './add-or-edit-dialog.component';

describe('AddOrEditDialogComponent', () => {
  let component: AddOrEditDialogComponent;
  let fixture: ComponentFixture<AddOrEditDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddOrEditDialogComponent],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} },
        FormBuilder
      ]
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

  it('should set addOrEdit property', () => {
    expect(component.addOrEdit).toBeUndefined();
    component.isNew = true;
    component.ngOnInit();
    expect(component.addOrEdit).toBe('Add');
    component.isNew = false;
    component.ngOnInit();
    expect(component.addOrEdit).toBe('Edit');
  });

  it('should call confirm method and close dialog', () => {
    const dialogRef = TestBed.inject(MatDialogRef);
    spyOn(dialogRef, 'close');
    component.confirm();
    expect(dialogRef.close).toHaveBeenCalled();
  });
});
