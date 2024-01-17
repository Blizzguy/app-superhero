import { Component, Inject, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
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
    private readonly formBuilder: FormBuilder,
    private readonly dialogRef: MatDialogRef<AddOrEditDialogComponent>
  ) {}

  ngOnInit(): void {
    this.addOrEdit = this.superhero.isNew ? 'Crear' : 'Editar';
    this.form = this.formBuilder.group({
      id: new FormControl(null),
      name: new FormControl(null, Validators.required),
      superheroName: new FormControl(null, Validators.required),
      power: new FormControl(null, Validators.required),
    });
    this.isEdit();
  }

  isEdit(): void {
    if (!this.superhero.isNew) {
      this.form.patchValue(this.superhero);
    }
  }

  confirm(): void {
    this.form.valid && this.dialogRef.close(this.form.value);
  }

}
