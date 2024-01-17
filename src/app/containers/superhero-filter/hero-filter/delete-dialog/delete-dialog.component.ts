import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrl: './delete-dialog.component.scss'
})
export class DeleteDialogComponent {

  constructor(
    @Inject(MAT_DIALOG_DATA) public superhero: string,
    private readonly dialogRef: MatDialogRef<DeleteDialogComponent>
  ) {}

  confirm(): void {
    this.dialogRef.close(true);
  }

}
