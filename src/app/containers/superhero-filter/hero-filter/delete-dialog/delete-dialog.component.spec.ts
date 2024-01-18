import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DeleteDialogComponent } from './delete-dialog.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

describe('DeleteDialogComponent', () => {
  let component: DeleteDialogComponent;
  let fixture: ComponentFixture<DeleteDialogComponent>;
  let dialogRef: MatDialogRef<DeleteDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeleteDialogComponent],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: 'Superhero' },
        { provide: MatDialogRef, useValue: { close: () => {} } },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(DeleteDialogComponent);
    component = fixture.componentInstance;
    dialogRef = TestBed.inject(MatDialogRef);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the superhero data injected', () => {
    expect(component.superhero).toBe('Superhero');
  });

  it('should close the dialog when confirm is called', () => {
    spyOn(dialogRef, 'close');
    component.confirm();
    expect(dialogRef.close).toHaveBeenCalled();
  });
});
