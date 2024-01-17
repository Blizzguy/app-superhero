import { Component, Inject, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { SuperheroInterface } from '../../../../interfaces/superhero.interface';

@Component({
  selector: 'app-add-or-edit-dialog',
  templateUrl: './add-or-edit-dialog.component.html',
  styleUrl: './add-or-edit-dialog.component.scss'
})
export class AddOrEditDialogComponent {
  addOrEdit: string;

  form: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public superhero: SuperheroInterface,
    @Inject(MAT_DIALOG_DATA) public isNew: boolean,
    private readonly formBuilder: FormBuilder,
    private readonly dialogRef: MatDialogRef<AddOrEditDialogComponent>
  ) {}

  ngOnInit(): void {
    this.addOrEdit = this.isNew ? 'Add' : 'Edit';
    this.form = this.formBuilder.group({
      name: new FormControl(null),
      superheroName: new FormControl(null),
      power: new FormControl(null),
    });
    this.isEdit();
  }

  isEdit(): void {
    if (!this.isNew) {
      this.form.patchValue(this.superhero);
    }
  }

  confirm(): void {
    this.form.valid && this.dialogRef.close(this.form.value);
  }

}
